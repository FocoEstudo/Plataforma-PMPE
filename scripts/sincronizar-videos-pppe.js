// Gera o catálogo PPPE a partir dos vínculos de vídeos existentes na PMPE.
// Uso: node scripts/sincronizar-videos-pppe.js
const fs = require('fs');
const path = require('path');
const vm = require('vm');

const root = path.join(__dirname, '..');
const html = fs.readFileSync(path.join(root, 'index.html'), 'utf8');
const extract = (start, end) => {
    const from = html.indexOf(start);
    const to = html.indexOf(end, from);
    if (from < 0 || to < 0) throw new Error(`Catálogo PMPE não encontrado: ${start}`);
    return html.slice(from, to);
};
const sequenceBlock = extract('const EMBEDDED_VIDEO_URL_SEQUENCE =', '// Cada aula aponta explicitamente');
const mappingBlock = extract('const EMBEDDED_VIDEO_BY_LESSON =', 'const getYouTubeVideoId');
const sequence = vm.runInNewContext(sequenceBlock.replace('const EMBEDDED_VIDEO_URL_SEQUENCE =', '').trim().replace(/;$/, ''));
const mapping = vm.runInNewContext('(' + mappingBlock.replace('const EMBEDDED_VIDEO_BY_LESSON =', '').trim().replace(/;$/, '') + ')');
const sandbox = { window: {} };
vm.runInNewContext(fs.readFileSync(path.join(root, 'pppe', 'modulos-pppe.js'), 'utf8'), sandbox);
const topics = new Set(sandbox.window.PPPE_MODULOS.map(module => module.topic));

// Seleção manual por assunto e título do vídeo, não pelo nome do módulo PMPE.
const selections = [
    ['Compreensão, interpretação e tipologia textual', [
        ['module-0-lesson-1', 'Interpretação de textos'],
        ['module-12-lesson-4', 'Inferência e informações implícitas']
    ]],
    ['Ortografia oficial e acentuação gráfica', [
        ['module-0-lesson-2', 'Ortografia oficial'],
        ['module-0-lesson-3', 'Acentuação gráfica'],
        ['module-12-lesson-5', 'Acentuação: ditongos e hiatos']
    ]],
    ['Coordenação e subordinação no período', [
        ['module-0-lesson-6', 'Orações coordenadas']
    ]],
    ['Pontuação e colocação dos pronomes átonos', [
        ['module-12-lesson-1', 'Pontuação'],
        ['module-12-lesson-6', 'Pontuação: aula complementar']
    ]],
    ['Concordância verbal e nominal e crase', [
        ['module-6-lesson-1', 'Concordância nominal e verbal'],
        ['module-6-lesson-2', 'Crase e regência']
    ]],
    ['Sistema operacional Windows', [
        ['module-3-lesson-2', 'Janelas no Windows']
    ]],
    ['Microsoft Office 365: textos, planilhas e apresentações', [
        ['module-9-lesson-1', 'Word: editor de texto'],
        ['module-9-lesson-2', 'Excel 2019: fundamentos'],
        ['module-9-lesson-3', 'Textos, planilhas e apresentações']
    ]],
    ['Redes de computadores, Internet, intranet e navegadores', [
        ['module-15-lesson-1', 'Navegadores de Internet'],
        ['module-15-lesson-5', 'IP, URL e DNS']
    ]],
    ['Segurança da informação e procedimentos de segurança', [
        ['module-15-lesson-3', 'Segurança da informação'],
        ['module-15-lesson-4', 'Backup'],
        ['module-15-lesson-6', 'Firewall']
    ]],
    ['Constituição, poder constituinte, aplicabilidade e interpretação', [
        ['module-4-lesson-1', 'Introdução à Constituição']
    ]],
    ['Princípios fundamentais e direitos e deveres individuais e coletivos', [
        ['module-16-lesson-1', 'Princípios fundamentais'],
        ['module-4-lesson-2', 'Direitos individuais e coletivos']
    ]],
    ['Remédios constitucionais, direitos sociais e direitos políticos', [
        ['module-4-lesson-3', 'Remédios constitucionais'],
        ['module-10-lesson-1', 'Nacionalidade e direitos políticos'],
        ['module-16-lesson-2', 'Partidos políticos']
    ]],
    ['Organização do Estado e intervenção', [
        ['module-16-lesson-3', 'Organização político-administrativa'],
        ['module-16-lesson-9', 'Federalismo']
    ]],
    ['Administração pública e servidores públicos na Constituição', [
        ['module-16-lesson-4', 'Administração pública: artigos 37 a 41']
    ]],
    ['Organização dos Poderes e funções essenciais à justiça', [
        ['module-16-lesson-6', 'Organização dos Poderes'],
        ['module-16-lesson-10', 'Poderes do Estado e suas funções']
    ]],
    ['Defesa do Estado e das instituições democráticas e segurança pública', [
        ['module-16-lesson-7', 'Defesa do Estado e das instituições democráticas'],
        ['module-16-lesson-8', 'Segurança pública'],
        ['module-16-lesson-12', 'Artigo 144: segurança pública']
    ]],
    ['Lei de Drogas (Lei nº 11.343/2006)', [
        ['module-17-lesson-4', 'Lei de Drogas'],
        ['module-17-lesson-10', 'Lei de Drogas: revisão'],
        ['module-17-lesson-18', 'Tráfico de drogas: artigo 33']
    ]],
    ['Abuso de autoridade (Lei nº 13.869/2019)', [
        ['module-11-lesson-1', 'Lei de Abuso de Autoridade'],
        ['module-11-lesson-6', 'Abuso de autoridade: aula complementar'],
        ['module-11-lesson-11', 'Abuso de autoridade: resumo']
    ]],
    ['Tortura (Lei nº 9.455/1997) e crimes hediondos (Lei nº 8.072/1990)', [
        ['module-11-lesson-2', 'Lei de Tortura'],
        ['module-11-lesson-7', 'Lei de Tortura: aula complementar'],
        ['module-17-lesson-3', 'Crimes hediondos'],
        ['module-17-lesson-9', 'Lei de Crimes Hediondos'],
        ['module-17-lesson-17', 'Crimes hediondos: resumo']
    ]],
    ['Estatuto da Criança e do Adolescente (Lei nº 8.069/1990)', [
        ['module-17-lesson-1', 'Estatuto da Criança e do Adolescente'],
        ['module-17-lesson-2', 'ECA: resumo da lei'],
        ['module-17-lesson-16', 'ECA: questões sobre ato infracional']
    ]],
    ['Crimes ambientais (Lei nº 9.605/1998) e crimes de trânsito (Lei nº 9.503/1997)', [
        ['module-11-lesson-5', 'Crimes ambientais'],
        ['module-11-lesson-10', 'Lei de Crimes Ambientais'],
        ['module-11-lesson-15', 'Crimes contra a fauna e a flora']
    ]],
    ['Maria da Penha, Estatuto da Pessoa Idosa e Estatuto da Juventude', [
        ['module-11-lesson-3', 'Lei Maria da Penha'],
        ['module-11-lesson-8', 'Lei Maria da Penha: aula complementar'],
        ['module-11-lesson-13', 'Lei Maria da Penha: revisão'],
        ['module-17-lesson-6', 'Estatuto da Pessoa Idosa'],
        ['module-17-lesson-12', 'Estatuto da Pessoa Idosa: questões'],
        ['module-17-lesson-20', 'Pessoa idosa: direitos e garantias'],
        ['module-17-lesson-7', 'Estatuto da Juventude'],
        ['module-17-lesson-13', 'Estatuto da Juventude: aula complementar'],
        ['module-17-lesson-21', 'Estatuto da Juventude: visão geral']
    ]],
    ['Racismo (Lei nº 7.716/1989), crimes eleitorais (Lei nº 4.737/1965) e Juizados Especiais Criminais (Lei nº 9.099/1995)', [
        ['module-11-lesson-4', 'Crimes de preconceito de raça ou cor'],
        ['module-11-lesson-9', 'Lei nº 7.716/1989'],
        ['module-11-lesson-14', 'Lei de Racismo']
    ]],
    ['Teoria geral e afirmação histórica dos direitos humanos', [
        ['module-5-lesson-2', 'Conceito e evolução dos direitos humanos']
    ]],
    ['Declaração Universal dos Direitos Humanos (1948)', [
        ['module-5-lesson-3', 'Declaração Universal dos Direitos Humanos'],
        ['module-5-lesson-6', 'Direitos humanos e DUDH']
    ]],
    ['Pacto de São José da Costa Rica (Decreto nº 678/1992)', [
        ['module-5-lesson-4', 'Pacto de São José da Costa Rica'],
        ['module-5-lesson-7', 'Convenção Americana sobre Direitos Humanos']
    ]]
];

const catalog = {};
for (const [topic, lessons] of selections) {
    if (!topics.has(topic) || catalog[topic]) throw new Error(`Tema PPPE inválido ou duplicado: ${topic}`);
    catalog[topic] = lessons.map(([source, title]) => {
        const positions = [].concat(mapping[source] || []);
        const urls = positions.map(position => sequence[position - 1]);
        if (!urls.length || urls.some(url => !url)) throw new Error(`Vídeo PMPE ausente: ${source}`);
        return { source, title, urls };
    });
}
const output = '// Gerado por scripts/sincronizar-videos-pppe.js; não editar manualmente.\nwindow.PPPE_VIDEOS = '
    + JSON.stringify(catalog, null, 2) + ';\n';
fs.writeFileSync(path.join(root, 'pppe', 'videos-pppe.js'), output);
vm.runInNewContext(fs.readFileSync(path.join(root, 'pppe', 'videos-complementares.js'), 'utf8'), sandbox);
const complementary = sandbox.window.PPPE_VIDEOS_COMPLEMENTARES;
const modules = sandbox.window.PPPE_MODULOS;
const count = Object.values(catalog).reduce((sum, lessons) => sum + lessons.length, 0);
const additionalCount = Object.values(complementary).reduce((sum, lessons) => sum + lessons.length, 0);
const missing = modules.filter(module => !catalog[module.topic] && !complementary[module.topic]);
const lines = [
    '# Videoaulas PPPE: catálogo e pendências',
    '',
    `Foram vinculadas ${count} aulas da PMPE e ${additionalCount} aulas adicionais a ${modules.length - missing.length} dos ${modules.length} temas da PPPE. Os títulos publicados no YouTube foram confrontados com os assuntos, mas os vídeos não foram assistidos integralmente. Um vínculo não significa cobertura completa do tema.`,
    '',
    'Vídeos sobre legislação e atualidades devem ser conferidos com fontes e textos consolidados atualizados; algumas aulas de Office tratam de versões anteriores ao Microsoft 365.',
    '',
    '## Temas sem vídeo identificado',
    '',
    'Estes temas ainda precisam de URLs específicas verificadas:',
    '',
    ...missing.map(module => `- **${module.sub}:** ${module.topic}`),
    '',
    '## Pontos que precisam de aula específica ou conferência',
    '',
    'A lista abaixo identifica pontos para os quais os títulos das aulas selecionadas não confirmam cobertura específica. Uma aula geral pode abordá-los; é preciso conferir seu conteúdo ou acrescentar outra aula.',
    '',
    '- **Português:** retextualização de gêneros.',
    '- **Ética e disciplina:** espécies de sindicância; rito sumário e prazos da comissão.',
    '- **Legislação estadual:** Lei Complementar nº 150/2009; conferir a referência à LC nº 487/2022 no edital e possíveis retificações.',
    '- **Informática:** recursos específicos do Microsoft 365 além das aulas introdutórias.',
    '- **Atualidades:** revisar as aulas com notícias e dados próximos à prova.',
    '- **Administrativo:** concessões e vícios, extinção e convalidação dos atos administrativos.',
    '- **Constitucional:** detalhes de previdência e das competências tributárias.',
    '- **Penal:** tentativa e aplicações específicas dos crimes previstos no edital.',
    '- **Processo Penal:** competência, meios de prova, citação, sentença e ações autônomas.',
    '- **Execução Penal:** assistência, estabelecimentos, saídas e Resolução CNPCP nº 9/2009.',
    '- **Direitos Humanos:** posição normativa dos tratados.',
    '',
    '## Catálogo por tema',
    '',
    'Para cada tema, o escopo do edital aparece ao lado das aulas encontradas. Compare os assuntos antes de considerar qualquer módulo inteiramente coberto.',
    '',
];
let subject = '';
for (const module of modules) {
    if (subject !== module.sub) {
        subject = module.sub;
        lines.push('', `### ${subject}`, '');
    }
    const reused = (catalog[module.topic] || []).map(lesson =>
        `${lesson.urls.map((url, index) => `[${lesson.title}${lesson.urls.length > 1 ? ` · parte ${index + 1}` : ''}](${url})`).join(', ')} (PMPE)`);
    const added = (complementary[module.topic] || []).map(([id, title]) =>
        `[${title}](https://www.youtube.com/watch?v=${id}) (nova)`);
    lines.push(`- **${module.topic}**`, `  - Escopo: ${module.escopo.join('; ')}.`, `  - Aulas: ${[...reused, ...added].join('; ') || 'ainda não identificadas'}.`);
}
lines.push('');
fs.writeFileSync(path.join(root, 'pppe', 'mapa-videoaulas.md'), lines.join('\n'));
console.log(`${count} aulas da PMPE e ${additionalCount} adicionais; ${missing.length} temas sem vídeo.`);
