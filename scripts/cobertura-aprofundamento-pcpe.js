const fs = require('fs');
const path = require('path');
const vm = require('vm');
const root = path.join(__dirname, '..');
const verbose = process.argv.includes('-v');

function loadContext(role) {
  const window = { PCPE_ROLE: role, PMPE_TOPIC_GUIDES: {} };
  window.window = window;
  const ctx = vm.createContext({ window, localStorage: { getItem: () => null }, console });
  const run = file => vm.runInContext(fs.readFileSync(path.join(root, file), 'utf8'), ctx, { filename: file });
  const html = fs.readFileSync(path.join(root, 'pcpe', 'index.html'), 'utf8');
  const srcs = [...html.matchAll(/<script src="([^"?]+)(?:\?[^"]*)?"><\/script>/g)].map(m => m[1])
    .filter(s => /^(\.\.\/pppe\/|[\w-]+\.js$)/.test(s))
    .filter(s => /modulos-|pdf-|aprofundamento-/.test(s))
    .map(s => (s.startsWith('../') ? s.slice(3) : 'pcpe/' + s));
  srcs.forEach(run);
  return window;
}

let gaps = 0;
for (const role of ['agente', 'escrivao']) {
  const w = loadContext(role);
  const modules = w.PCPE_MODULOS || [];
  const deep = w.PMPE_DEEPENING || {};
  let full = 0;
  const missing = [];
  for (const m of modules) {
    const guide = w.PMPE_TOPIC_GUIDES[m.topic];
    const n = guide && guide.lessons ? guide.lessons.length : 0;
    const d = deep[m.topic] || {};
    const ok = n > 0 && Array.from({ length: n }, (_, i) => d[i + 1] && d[i + 1].length).every(Boolean);
    if (ok) full++; else missing.push(`${m.sub} :: ${m.topic} (aulas=${n}, aprofundadas=${Object.keys(d).length})`);
  }
  if (role === 'agente') {
    const report = fs.readFileSync(path.join(root, 'pcpe', 'EDITAL-AGENTE-COBERTURA.md'), 'utf8');
    const sections = report.split('## Item do edital → módulo → situação');
    if (sections.length !== 2) throw new Error('Matriz do edital ausente ou ambígua');
    const keys = new Map([...sections[0].matchAll(/^\| ([A-Z0-9]+) \| (.+) \|$/gm)].map(m => [m[1], m[2]]));
    const items = [...sections[1].split('## Fontes e limitações')[0].matchAll(/^\| (.+?) \| ([A-Z0-9, ]+) \| (A|R) \|$/gm)];
    if (items.length < 148) throw new Error(`Matriz incompleta: somente ${items.length} itens`);
    for (const [, item, codes] of items) {
      for (const code of codes.split(', ')) {
        const topic = keys.get(code);
        if (!topic || !modules.some(m => m.topic === topic) || !w.PMPE_TOPIC_GUIDES[topic]) {
          console.error(`  FALTA matriz: ${item} / ${code}`); gaps++;
        }
      }
    }
    const supplementalSection = report.split('## Aulas complementares individualizadas')[1];
    if (!supplementalSection) throw new Error('Tabela de aulas complementares ausente');
    const supplemental = [...supplementalSection.split('## Fontes e limitações')[0].matchAll(/^\| ([A-Z0-9]+) \| (.+?) \|$/gm)];
    if (supplemental.length < 22) throw new Error(`Tabela complementar incompleta: ${supplemental.length} aulas`);
    for (const [, code, title] of supplemental) {
      const topic = keys.get(code);
      const guide = w.PMPE_TOPIC_GUIDES[topic];
      const i = guide ? guide.lessons.findIndex(lesson => lesson[0] === title) : -1;
      const lesson = i < 0 ? null : guide.lessons[i];
      const blocks = w.PMPE_DEEPENING[topic] && w.PMPE_DEEPENING[topic][i + 1];
      const miniIndex = blocks ? blocks.findIndex(row => row[0] === 'h' && /Mini-exercício/.test(row[1])) : -1;
      const mini = miniIndex >= 0 && blocks[miniIndex + 1] ? blocks[miniIndex + 1][1] : '';
      const questionEnd = mini.indexOf('?');
      const question = questionEnd >= 0 ? mini.slice(0, questionEnd + 1) : '';
      const answer = questionEnd >= 0 ? mini.slice(questionEnd + 1).trim() : '';
      const practiceIndex = guide && guide.practice ? guide.practice.indexOf(question) : -1;
      if (!modules.some(m => m.topic === topic) || !lesson || lesson.length < 4 || lesson.some(part => !part) ||
          !question || !answer || practiceIndex < 0 || guide.answers[practiceIndex] !== answer) {
        console.error(`  FALTA aula complementar: ${code} / ${title}`); gaps++;
      }
    }
    console.log(`  Aulas complementares individualizadas: ${supplemental.length}.`);
    // These are exact lesson titles, not a claim that the summaries replace the statutes.
    const required = {
      'Estatuto dos Policiais Civis de Pernambuco': ['Lei 6.123/1968 e regime geral', 'Lei complementar 137/2008', 'Lei complementar 317/2015', 'CE-PE: artigos 101 a 105-B'],
      'Princípios fundamentais e direitos e deveres individuais e coletivos': ['Poder constituinte', 'Aplicabilidade das normas'],
      'Regime jurídico-administrativo e princípios da administração': ['Estado, governo e administração', 'Serviços públicos', 'Controle administrativo, judicial e legislativo', 'Improbidade e processo administrativo'],
      'Crimes contra a pessoa': ['Dignidade sexual', 'Hediondos e racismo', 'Abuso de autoridade e tortura', 'Crianças, adolescentes e violência doméstica', 'Organização criminosa e trânsito', 'Ambiente, armas e drogas'],
      'Inquérito policial': ['Lei processual no tempo', 'Corpo de delito e perícias', 'Interrogatório, confissão e testemunhas', 'Reconhecimento, acareação e documentos', 'Busca e apreensão e indícios'],
      'Prisão: flagrante, temporária, preventiva, fiança e liberdade provisória': ['Prisão temporária: Lei 7.960/1989', 'Juizados: Lei 9.099/1995', 'Investigação: Lei 12.830/2013'],
      'Reescritura de frases e retextualização': ['Princípios da redação oficial', 'Padrão ofício e tratamento'],
      'Sistema operacional Windows': ['Word', 'Excel: fórmulas e referências', 'Excel: funções e gráficos', 'PowerPoint', 'Nuvem e deep/dark web'],
      'Problemas aritméticos': ['Conjuntos numéricos e medidas', 'Proporção, divisão e porcentagem', 'Equações, inequações e sistemas', 'Funções e gráficos', 'Contagem, PA, PG e probabilidade', 'Geometria e matrizes'],
      'Estruturas e argumentação lógica': ['Predicados e quantificadores', 'Negação e ordem dos quantificadores'],
      'Escrituração, contas e balanço patrimonial': ['Fatos e escrituração', 'Contas, livros e regimes', 'Operações e ajustes', 'Balancete, balanço e DRE', 'Normas brasileiras de contabilidade'],
      'Amostragem, gráficos e tabelas': ['Amostragem', 'Tamanho amostral', 'Probabilidade condicional e independência', 'Assimetria e curtose'],
      'Estatuto da Juventude (Lei nº 12.852/2013)': [
        'Objeto, faixa etária e relação com o ECA',
        'Princípios e diretrizes das políticas de juventude',
        'Direitos à educação, profissionalização, trabalho e saúde',
        'Direitos à cultura, comunicação, esporte, território e mobilidade',
        'Segurança pública, acesso à Justiça e participação cidadã',
        'Sistema Nacional de Juventude (SINAJUVE)'
      ]
    };
    for (const [topic, titles] of Object.entries(required)) {
      const guide = w.PMPE_TOPIC_GUIDES[topic];
      for (const title of titles) {
        const i = guide ? guide.lessons.findIndex(lesson => lesson[0] === title) : -1;
        const deepLesson = w.PMPE_DEEPENING[topic] && w.PMPE_DEEPENING[topic][i + 1];
        if (!modules.some(m => m.topic === topic) || i < 0 || !deepLesson || !deepLesson.some(row => /Mini-exercício/.test(row[1] || ''))) {
          console.error(`  FALTA conteúdo exigido: ${topic} / ${title}`); gaps++;
        }
      }
    }
    console.log(`  Matriz: ${items.length} itens mapeados; verificados ${Object.values(required).reduce((n, a) => n + a.length, 0)} títulos de aulas adicionais.`);
  }
  console.log(`${role}: ${modules.length} módulos, ${full} com aprofundamento completo`);
  if (verbose || missing.length) missing.forEach(x => console.log('  FALTA ' + x));
  gaps += missing.length;
}
process.exit(gaps ? 1 : 0);
