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
  console.log(`OK: ${role}, ${modules.length} módulos com guia, questões e videoaula.`);
}