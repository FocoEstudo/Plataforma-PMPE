'use strict';

const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

const root = path.join(__dirname, '..');
const read = file => fs.readFileSync(path.join(root, file), 'utf8');
const pmpeWindow = {};
vm.runInNewContext(read('dados-topicos.js'), { window: pmpeWindow });

const pmpeTopics = [
  'Proposições Lógicas e Conectivos',
  'Invasões Holandesas e Nassau',
  'Disjunções e Condicional (Se...Então)',
  'Segurança Pública (Art. 144) e Extradição',
  'Lei de Drogas, ECA e Maria da Penha',
  'Sintaxe, Concordância, Regência, Crase e Pontuação',
  'Sequências Numéricas e Figurais',
  'Pacto de San José e Sistema Interamericano',
  'Crimes Hediondos e Crimes de Preconceito'
];

for (const topic of pmpeTopics) {
  const guide = pmpeWindow.PMPE_TOPIC_GUIDES[topic];
  assert.ok(guide?.lessons?.length, `${topic}: guia sem aulas`);
  assert.match(guide.sourceNote, /não é uma transcrição/i, `${topic}: falta nota sobre a origem do material`);
}

const maria = pmpeWindow.PMPE_TOPIC_GUIDES['Lei de Drogas, ECA e Maria da Penha'];
assert.match(maria.lessons[3][1], /Lei nº 15\.125\/2025/);
assert.ok(maria.sources.some(([, url]) => url.endsWith('/l15125.htm')));

const prejudice = pmpeWindow.PMPE_TOPIC_GUIDES['Crimes Hediondos e Crimes de Preconceito'];
assert.match(prejudice.lessons[1][1], /Lei nº 14\.532\/2023/);
assert.ok(prejudice.sources.some(([, url]) => url.endsWith('/l14532.htm')));

const pcpeWindow = {
  PCPE_MODULOS: [
    { topic: 'Estruturas e argumentação lógica' },
    { topic: 'Defesa do Estado e das instituições democráticas e segurança pública' },
    { topic: 'Pontuação e colocação dos pronomes átonos' }
  ],
  PCPE_TOPIC_GUIDES: {
    'Estruturas e argumentação lógica': { lessons: [['Conteúdo local']] }
  },
  PCPE_DEEPENING: {},
  PCPE_QUESTOES: {},
  PMPE_TOPIC_GUIDES: {
    'Defesa do Estado e das instituições democráticas e segurança pública': { lessons: [['Conteúdo constitucional']] },
    'Pontuação e colocação dos pronomes átonos': { lessons: [['Conteúdo de português']] }
  },
  PMPE_DEEPENING: {},
  PPPE_QUESTOES: {}
};
vm.runInNewContext(read('pcpe/materiais-compartilhados.js'), { window: pcpeWindow });

for (const module of pcpeWindow.PCPE_MODULOS) {
  const guide = pcpeWindow.PCPE_TOPIC_GUIDES[module.topic];
  assert.match(guide.sourceNote, /não é uma transcrição/i, `${module.topic}: nota não integrada à apostila PCPE`);
}
assert.equal(pcpeWindow.PCPE_TOPIC_GUIDES['Estruturas e argumentação lógica'].lessons[0][0], 'Conteúdo local');

for (const file of ['index.html', 'pcpe/index.html']) {
  const html = read(file);
  assert.match(html, /Fontes e elaboração/);
  assert.match(html, /guide\.sourceNote/);
}

console.log(`Notas de elaboração e fontes verificadas para ${pmpeTopics.length} guias PMPE e os temas PCPE compartilhados.`);
