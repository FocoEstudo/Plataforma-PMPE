'use strict';
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

const root = path.join(__dirname, '..');
const app = fs.readFileSync(path.join(root, 'pppe', 'index.html'), 'utf8');
const window = {};
const context = vm.createContext({ window });
const load = file => vm.runInContext(
  fs.readFileSync(path.join(root, 'pppe', file), 'utf8'),
  context,
  { filename: file }
);

load('modulos-pppe.js');
const contentScripts = [...app.matchAll(/<script\s+src="([^"]+)"/g)]
  .map(match => match[1])
  .filter(src => /^(?:pdf|aprofundamento|questoes)-.*\.js$/.test(src));
assert(contentScripts.length > 0, 'A página PPPE precisa carregar apostilas e bancos de questões.');
for (const file of contentScripts) load(file);

const modules = window.PPPE_MODULOS;
const guides = window.PMPE_TOPIC_GUIDES || {};
const questions = window.PPPE_QUESTOES || {};
assert.equal(modules.length, 92);
assert.match(app, /questionBank:\s*\(\(window\.PPPE_QUESTOES \|\| \{\}\)\[module\.topic\]/);
assert.match(app, /const guides = window\.PMPE_TOPIC_GUIDES \|\| \{\}/);

for (const module of modules) {
  const guide = guides[module.topic];
  assert(guide?.lessons?.length >= 4, `${module.topic}: apostila ausente ou incompleta.`);
  assert.equal(guide.lessons.every(lesson =>
    Array.isArray(lesson) && lesson.length >= 4 && lesson.slice(0, 4).every(part => typeof part === 'string' && part.trim())
  ), true, `${module.topic}: cada aula deve explicar, exemplificar e destacar um ponto de atenção.`);

  const bank = questions[module.topic];
  assert.equal(bank?.length, 10, `${module.topic}: banco deve conter 10 questões.`);
  assert.equal(new Set(bank.map(question => question.text)).size, 10, `${module.topic}: questões duplicadas.`);
  for (const question of bank) {
    assert(question.text && question.exp, `${module.topic}: enunciado ou explicação ausente.`);
    assert(Array.isArray(question.options) && question.options.length === 4,
      `${module.topic}: banco procedural deve ter quatro alternativas.`);
    assert(Number.isInteger(question.correct) && question.correct >= 0 && question.correct < 4,
      `${module.topic}: gabarito inválido.`);
  }
}

console.log('OK: 92 módulos PPPE com apostila e banco procedural de 10 questões.');
