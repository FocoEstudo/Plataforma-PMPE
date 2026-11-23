'use strict';
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const bankFiles = [
  'questoes-agente-originais.js',
  'questoes-agente-q4.js',
  'questoes-agente-q3.js',
  'questoes-agente-q1.js',
  'questoes-agente-q2.js',
  'questoes-agente-q5.js'
].map(file => path.join(__dirname, '..', 'pcpe', file));
const context = { window: {} };
for (const bankFile of bankFiles) {
  vm.runInNewContext(fs.readFileSync(bankFile, 'utf8'), context, { filename: bankFile });
}
const bank = context.window.PCPE_QUESTOES_AGENTE;
const simuladoEngine = fs.readFileSync(path.join(__dirname, '..', 'simulado-engine.js'), 'utf8');
assert.match(simuladoEngine, /if \(app\.id === 'pcpe' && window\.PCPE_ROLE !== 'escrivao'\) return agenteBank\(\);/);
const disciplines = ['Legislação Estadual', 'Noções de Direito Constitucional', 'Noções de Direito Administrativo', 'Noções de Direito Penal', 'Noções de Direito Processual Penal', 'Língua Portuguesa', 'Noções de Informática', 'Raciocínio Lógico', 'Contabilidade Geral', 'Estatística'];
const ids = new Set(), texts = new Set(), letters = [0, 0, 0, 0, 0], errors = [];
for (const discipline of disciplines) {
  const questions = bank[discipline];
  if (!Array.isArray(questions)) { errors.push(`${discipline}: disciplina ausente`); continue; }
  console.log(`${discipline}: ${questions.length}`);
  if (questions.length < 40) errors.push(`${discipline}: ${questions.length}/40 questões`);
  for (const q of questions) {
    try {
      assert.ok(typeof q.id === 'string' && q.id.trim());
      assert.ok(!ids.has(q.id), `ID duplicado: ${q.id}`); ids.add(q.id);
      assert.ok(typeof q.text === 'string' && q.text.trim());
      const text = q.text.trim().replace(/\s+/g, ' ').toLocaleLowerCase('pt-BR');
      assert.ok(!texts.has(text), `enunciado duplicado: ${q.id}`); texts.add(text);
      assert.ok(typeof q.topic === 'string' && q.topic.trim());
      assert.ok(Array.isArray(q.options) && q.options.length === 5 && q.options.every(o => typeof o === 'string' && o.trim()));
      assert.equal(new Set(q.options.map(o => o.trim().toLocaleLowerCase('pt-BR'))).size, 5);
      assert.ok(Number.isInteger(q.correct) && q.correct >= 0 && q.correct < 5);
      assert.ok(typeof q.exp === 'string' && q.exp.trim());
      letters[q.correct]++;
    } catch (e) { errors.push(`${discipline}: ${e.message}`); }
  }
}
console.log(`Total: ${ids.size}; gabarito A–E: ${letters.join(', ')}`);
if (Math.max(...letters) - Math.min(...letters) > 1) errors.push('Gabaritos não estão distribuídos uniformemente.');
if (errors.length) { console.error(errors.join('\n')); process.exitCode = 1; }
