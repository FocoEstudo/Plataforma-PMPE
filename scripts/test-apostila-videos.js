'use strict';
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const root = path.join(__dirname, '..');
const window = {};
const context = vm.createContext({ window });
function load(file) {
    vm.runInContext(fs.readFileSync(path.join(root, file), 'utf8'), context, { filename: file });
}
load('pppe/apostila-renderer.js');
load('pppe/videos-pppe.js');
load('pppe/videos-complementares.js');
load('pppe/pdf-portugues.js');
load('pppe/aprofundamento-complementar-portugues.js');
load('pppe/questoes-portugues.js');

const topic = 'Ortografia oficial e acentuação gráfica';
const html = window.PPPE_APOSTILA_RENDERER.renderVideoReferences(topic);
assert.match(html, /Videoaulas relacionadas ao tema/);
assert.match(html, /Acentuação gráfica/);
assert.match(html, /não é uma transcrição/);
assert.match(html, /rel="noopener noreferrer"/);
assert.equal(window.PPPE_APOSTILA_RENDERER.renderVideoReferences('Tema inexistente'), '');
assert.match(window.PMPE_TOPIC_GUIDES[topic].lessons[1][2], /paroxítona terminada em ditongo/);
const blocks = window.PMPE_DEEPENING[topic][2];
assert.ok(blocks.some(block => String(block[1]).includes('público é proparoxítona')));
assert.ok(!JSON.stringify(blocks).includes('??'));
const question = window.PPPE_QUESTOES[topic].find(item => item.text.includes('palavra é proparoxítona'));
assert.equal(question.options[question.correct], 'Público.');
console.log('Apostila: referências de vídeo e exemplo de acentuação verificados.');
