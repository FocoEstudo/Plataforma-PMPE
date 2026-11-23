'use strict';
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const root = path.join(__dirname, '..');
const context = { window: { PCPE_ROLE: 'agente' } };
const scripts = [
  'pppe/modulos-pppe.js',
  'pppe/videos-pppe.js',
  'pppe/videos-complementares.js',
  'pcpe/video-mapeamento.js',
  'pcpe/modulos-pcpe.js',
  'pcpe/aula-adm-regime.js',
  'pcpe/aula-const-principios-direitos.js',
  'pcpe/questoes-missao-dia-02.js'
];
for (const file of scripts) {
  vm.runInNewContext(fs.readFileSync(path.join(root, file), 'utf8'), context, { filename: file });
}

const topicA = 'Regime jurídico-administrativo e princípios da administração';
const topicB = 'Princípios fundamentais e direitos e deveres individuais e coletivos';
const topics = [topicA, topicB];
const modules = context.window.PCPE_MODULOS.filter(module => topics.includes(module.topic));
assert.equal(modules.length, 2, 'O Dia 2 deve reunir os dois tópicos esperados.');
const banks = topics.map(topic => {
  const questions = context.window.PCPE_QUESTOES[topic];
  assert.equal(questions?.length, 10, `${topic}: são necessárias 10 questões.`);
  assert.equal(new Set(questions.map(question => question.text)).size, 10, `${topic}: as questões precisam ser distintas.`);
  for (const question of questions) {
    assert.equal(question.options.length, 4);
    assert(Number.isInteger(question.correct) && question.correct >= 0 && question.correct < 4);
    assert(question.text && question.exp);
  }
  return questions;
});
assert.equal(banks.flat().length, 20, 'A bateria procedural do Dia 2 deve totalizar 20 questões.');

const guide = context.window.PCPE_TOPIC_GUIDES[topicB];
assert(guide.lessons.length >= 7, 'A apostila do tópico deve cobrir as duas videoaulas.');
assert.equal(Object.keys(context.window.PCPE_DEEPENING[topicB]).length, guide.lessons.length);
const videos = context.window.PPPE_VIDEOS[topicB] || [];
assert(videos.some(video => video.title === 'Princípios fundamentais'));
assert(videos.some(video => video.title === 'Direitos individuais e coletivos'));
console.log('OK: Dia 2 tem dois bancos de 10 questões, 20 no total, apostila e as duas videoaulas.');
