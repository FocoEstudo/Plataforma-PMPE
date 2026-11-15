'use strict';
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const root = path.join(__dirname, '..');
const read = file => fs.readFileSync(path.join(root, file), 'utf8');
const app = read('pcpe/index.html');
const login = read('pcpe/login.html');
const guard = read('pcpe/session-guard.js');
const rules = read('firestore.rules');
assert.match(app, /aprofundamento-edital-agente\.js/);
const scripts = [...app.matchAll(/<script\s+src="([^"]+)"/g)].map(match => match[1].split('?')[0]).filter(src => !/^https?:/.test(src));
for (const src of scripts) assert(fs.existsSync(path.resolve(root, 'pcpe', src)), `Script ausente: ${src}`);
assert.match(login, /authApi\.db, "pcpeProfiles"/);
assert.match(login, /getPostLoginPage = \(\) => "index\.html"/);
assert.match(guard, /concurso: "pcpe"/);
assert.match(guard, /"accessPcpe"/);
assert.match(guard, /new URL\("login\.html"/);
assert.match(rules, /match \/pcpeProfiles\/\{userId\}/);
assert.match(rules, /match \/syncPcpe\/\{syncId\}/);
assert.match(read('pcpe/conta.html'), /location\.replace\(new URL\("index\.html"/);
assert.match(read('pcpe/estudos.html'), /location\.replace\(new URL\('index\.html'/);
for (const role of ['agente', 'escrivao']) {
  const context = { window: { PCPE_ROLE: role } };
  for (const src of scripts.filter(src => !['cloud-sync.js', 'video-mapeamento.js', '../gabari.js'].includes(src))) {
    vm.runInNewContext(read(path.join('pcpe', src)), context, { filename: src });
  }
  const { PCPE_MODULOS: modules, PMPE_TOPIC_GUIDES: guides, PPPE_QUESTOES: questions } = context.window;
  assert(modules.length > 30);
  assert(modules.some(m => m.sub === (role === 'agente' ? 'Contabilidade Geral' : 'Noções de Arquivologia')));
  assert(!modules.some(m => m.sub === (role === 'agente' ? 'Noções de Arquivologia' : 'Contabilidade Geral')));
  for (const module of modules) {
    assert(guides[module.topic]?.lessons?.length >= 4, `${role}: falta guia de ${module.topic}`);
    const inherited = context.window.PPPE_VIDEOS[module.topic] || [];
    const extra = context.window.PPPE_VIDEOS_COMPLEMENTARES[module.topic] || [];
    assert(inherited.length || extra.length, `${role}: falta videoaula de ${module.topic}`);
    for (const [id, title] of extra) assert(/^[A-Za-z0-9_-]{11}$/.test(id) && title, `${module.topic}: vídeo inválido`);
    const bank = questions[module.topic];
    assert(bank?.length >= 10, `${role}: faltam questões de ${module.topic}`);
    for (const question of bank) {
      assert.equal(question.options.length, 4);
      assert(Number.isInteger(question.correct) && question.correct >= 0 && question.correct < 4);
      assert(question.text && question.exp);
    }
  }
  const syllabusScript = app.match(/<div id="pcpeSyllabus"[\s\S]*?<script>\s*([\s\S]*?)<\/script>/);
  assert(syllabusScript, 'Script da aba Conteúdos ausente');
  class Element {
    constructor(tag) { this.tag = tag; this.children = []; this.dataset = {}; this.attributes = {}; this.textContent = ''; }
    append(...children) { this.children.push(...children); }
    setAttribute(name, value) { this.attributes[name] = value; }
    addEventListener() {}
  }
  const syllabus = new Element('div');
  const dashboard = new Element('div');
  const document = {
    createElement: tag => new Element(tag),
    getElementById: id => id === 'pcpeSyllabus' ? syllabus : null,
    querySelector: selector => selector === '.dashboard-shortcuts' ? dashboard : null
  };
  const dashboardScript = app.match(/<div class="dashboard-shortcuts" aria-label="Progresso por matéria"><\/div>\s*<script>\s*([\s\S]*?)<\/script>/);
  assert(dashboardScript, 'Script dos cards do painel ausente');
  vm.runInNewContext(dashboardScript[1], { window: context.window, document });
  assert.equal(dashboard.children.length, new Set(modules.map(module => module.sub)).size);
  assert(dashboard.children.every(card => card.children[0]?.tag === 'img' && card.children[0].src === '../assets/capa-pcpe.jpg'));
  assert(fs.existsSync(path.join(root, 'assets', 'capa-pcpe.jpg')), 'Imagem dos cards da PCPE ausente');
  vm.runInNewContext(syllabusScript[1], { window: context.window, document });
  const renderedText = node => [node.textContent, ...node.children.map(renderedText)].join(' ');
  assert(
    renderedText(syllabus).includes(role === 'agente' ? 'Lei 6.123/1968 e regime geral' : 'Princípios arquivísticos'),
    `${role}: subitens do edital não aparecem na aba Conteúdos`
  );
  console.log(`OK: ${role}, ${modules.length} módulos com guia, questões e videoaula.`);
}