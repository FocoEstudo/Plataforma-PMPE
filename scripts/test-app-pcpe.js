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
assert.match(app, /ciclo-estudos\.js/);
assert.match(app, /pcpeCycleRoot/);
assert.match(app, /openCycleTopicQuiz/);
assert.match(app, /pcpe-cycle:quiz-completed/);
assert.match(app, /PCPE_VIDEO_CATALOG/);
assert.match(app, /openPcpeVideoLesson/);
assert.match(read('pcpe/ciclo-estudos.js'), /PMPE_EDITAL_MODULES/);
assert.match(read('pcpe/ciclo-estudos.js'), /Fazer bateria do tópico/);
assert.match(read('pcpe/ciclo-estudos.js'), /Abrir lei seca/);
assert.match(read('pcpe/ciclo-estudos.js'), /data-reopen-day/);
assert.match(read('pcpe/ciclo-estudos.js'), /data-cycle-history/);
assert.match(read('pcpe/ciclo-estudos.js'), /Escopo completo do edital/);
assert.match(read('pcpe/ciclo-estudos.js'), /pcpeVideoLessonWatchedV1/);
assert.match(read('pcpe/ciclo-estudos.js'), /refreshVideoProgress/);
const coverage = read('pcpe/EDITAL-AGENTE-COBERTURA.md');
assert.match(coverage, /22\.2\.3\.1/);
assert.match(coverage, /22\.2\.5\.1/);
const scripts = [...app.matchAll(/<script\s+src="([^"]+)"/g)].map(match => match[1].split('?')[0]).filter(src => !/^https?:/.test(src));
for (const src of scripts) assert(fs.existsSync(path.resolve(root, 'pcpe', src)), `Script ausente: ${src}`);
const sharedContentScripts = scripts
  .filter(src => /^\.\.\/pppe\/(?:pdf-|questoes-|aprofundamento-)/.test(src))
  .map(src => path.basename(src))
  .sort();
assert.deepEqual(sharedContentScripts, [
  'aprofundamento-administrativo.js',
  'aprofundamento-complementar-administrativo.js',
  'aprofundamento-complementar-constitucional.js',
  'aprofundamento-complementar-informatica.js',
  'aprofundamento-complementar-penal.js',
  'aprofundamento-complementar-processo-penal.js',
  'aprofundamento-complementar-portugues.js',
  'aprofundamento-constitucional.js',
  'aprofundamento-informatica-atualidades.js',
  'aprofundamento-penal.js',
  'aprofundamento-portugues.js',
  'aprofundamento-processo-penal.js',
  'pdf-administrativo.js',
  'pdf-constitucional.js',
  'pdf-info-atualidades.js',
  'pdf-penal.js',
  'pdf-portugues.js',
  'pdf-processo-penal.js',
  'questoes-administrativo.js',
  'questoes-constitucional.js',
  'questoes-info-atualidades.js',
  'questoes-penal.js',
  'questoes-portugues.js',
  'questoes-processo-penal.js'
].sort(), 'A PCPE deve compartilhar apenas os materiais dos seis grupos com videoaulas correspondentes.');
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
  for (const src of scripts.filter(src => !['cloud-sync.js', '../gabari.js', '../sidebar-toggle.js', '../video-playback.js'].includes(src))) {
    vm.runInNewContext(read(path.join('pcpe', src)), context, { filename: src });
  }
  const { PCPE_MODULOS: modules, PCPE_TOPIC_GUIDES: guides, PCPE_QUESTOES: questions } = context.window;
  assert(modules.length > 30);
  assert(modules.some(m => m.sub === (role === 'agente' ? 'Contabilidade Geral' : 'Noções de Arquivologia')));
  assert(!modules.some(m => m.sub === (role === 'agente' ? 'Noções de Arquivologia' : 'Contabilidade Geral')));
  const youthModule = modules.find(m => m.topic === 'Estatuto da Juventude (Lei nº 12.852/2013)');
  assert.equal(youthModule?.sub, 'Noções de Direito Penal', `${role}: Estatuto da Juventude ausente do programa`);
  assert(guides[youthModule.topic].lessons.length >= 5, `${role}: guia incompleto do Estatuto da Juventude`);
  assert(guides[youthModule.topic].sources.some(([, url]) => url.includes('/l12852.htm')), `${role}: fonte oficial do Estatuto da Juventude ausente`);
  assert.equal(Object.keys(context.window.PCPE_DEEPENING[youthModule.topic] || {}).length, guides[youthModule.topic].lessons.length, `${role}: aprofundamento incompleto do Estatuto da Juventude`);
  for (const topic of ['Compreensão, interpretação e tipologia textual', 'Sistema operacional Windows']) {
    assert(guides[topic]?.lessons?.length >= 4, `${role}: falta apostila PCPE do Dia 1 para ${topic}`);
    assert.equal(questions[topic]?.length, 10, `${role}: a bateria PCPE do Dia 1 precisa de 10 questões para ${topic}`);
  }
  const dayTwoTopic = 'Princípios fundamentais e direitos e deveres individuais e coletivos';
  assert.equal(questions[dayTwoTopic]?.length, 10, `${role}: a bateria PCPE do Dia 2 precisa de 10 questões para ${dayTwoTopic}`);
  assert.equal(new Set(questions[dayTwoTopic].map(question => question.text)).size, 10, `${role}: as questões do Dia 2 precisam ser distintas`);
  assert(guides[dayTwoTopic]?.lessons?.length >= 7, `${role}: falta apostila baseada nas videoaulas do Dia 2`);
  assert(context.window.PPPE_VIDEOS[dayTwoTopic]?.some(video => video.title === 'Princípios fundamentais'), `${role}: vídeo de princípios fundamentais ausente do tópico do Dia 2`);
  assert(context.window.PPPE_VIDEOS[dayTwoTopic]?.some(video => video.title === 'Direitos individuais e coletivos'), `${role}: vídeo de direitos individuais e coletivos ausente do tópico do Dia 2`);
  for (const module of modules) {
    assert(guides[module.topic]?.lessons?.length >= 4, `${role}: guia incompleto de ${module.topic}`);
    const inherited = context.window.PPPE_VIDEOS[module.topic] || [];
    const extra = context.window.PPPE_VIDEOS_COMPLEMENTARES[module.topic] || [];
    assert(inherited.length || extra.length, `${role}: falta videoaula de ${module.topic}`);
    for (const [id, title] of extra) assert(/^[A-Za-z0-9_-]{11}$/.test(id) && title, `${module.topic}: vídeo inválido`);
    const bank = questions[module.topic];
    assert.equal(bank?.length, 10, `${role}: banco incompleto para ${module.topic}`);
    assert.equal(new Set(bank.map(question => question.text)).size, 10, `${role}: questões repetidas em ${module.topic}`);
    for (const question of bank || []) {
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
  console.log(`OK: ${role}, Dia 1 com apostilas e bateria PCPE; ${modules.length} módulos catalogados.`);
}