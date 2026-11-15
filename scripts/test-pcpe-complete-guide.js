'use strict';
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

const root = path.join(__dirname, '..');
const app = fs.readFileSync(path.join(root, 'pcpe', 'index.html'), 'utf8');
const helper = fs.readFileSync(path.join(root, 'pcpe', 'apostila-completa.js'), 'utf8');
const context = { window: {} };

assert.match(app, /<script src="apostila-completa\.js"><\/script>/);
assert.match(app, /PCPE_APOSTILA_COMPLETA\.buildSubjectGuide/);
assert.match(app, /PCPE_COMPLETE_COURSES/);
assert.match(app, /Estudar ' \+ subject/);
vm.runInNewContext(helper, context, { filename: 'pcpe/apostila-completa.js' });

const guide = context.window.PCPE_APOSTILA_COMPLETA.buildSubjectGuide('Disciplina & teste', [
  { topic: 'Tema <um>', scope: ['Subitem & um'], references: '<p>Vídeo do tema</p>', content: '<p>Aula do tema</p>' },
  { topic: 'Tema dois', scope: ['Subitem dois'], references: '', content: '<p>Outro conteúdo</p>' }
], 'teste');

for (const text of [
  'Disciplina &amp; teste',
  'Tema &lt;um&gt;',
  'Subitem &amp; um',
  'Vídeo do tema',
  'Aula do tema',
  'Tema dois',
  'Outro conteúdo',
  'href="#pcpe-curso-teste-tema-2"'
]) {
  assert(guide.includes(text), `A apostila completa omite ${text}`);
}

assert.throws(
  () => context.window.PCPE_APOSTILA_COMPLETA.buildSubjectGuide('Disciplina', [], 'teste'),
  error => error.name === 'TypeError'
);
console.log('OK: apostila completa reúne todos os temas, escopos e conteúdos de uma disciplina.');
