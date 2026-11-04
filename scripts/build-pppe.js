// Gera pppe/index.html a partir do index.html do PMPE (mesma estrutura, dados do PPPE).
// Uso: node scripts/build-pppe.js
const fs = require('fs');
const path = require('path');
const vm = require('vm');

const root = path.join(__dirname, '..');
let html = fs.readFileSync(path.join(root, 'index.html'), 'utf8').replace(/\r\n/g, '\n');

const sandbox = { window: {} };
vm.runInNewContext(fs.readFileSync(path.join(root, 'pppe', 'edital-pppe.js'), 'utf8'), sandbox);
const edital = sandbox.window.PPPE_EDITAL;

const CREST = 'https://www.monsterconcursos.com.br/brasao-policia-penal-pe.png';
const HERO = '../assets/fundo-pppe.jpg';
const esc = s => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

const subjects = [];
edital.blocos.forEach(bloco => bloco.disciplinas.forEach(d => subjects.push({ ...d, bloco: bloco.titulo, blocoId: bloco.id })));

const ICONS = [
    [/portugu/i, 'fa-spell-check'], [/l[oó]gic/i, 'fa-brain'], [/inform/i, 'fa-computer'],
    [/legisla[cç][aã]o estadual/i, 'fa-landmark'], [/atualidades/i, 'fa-newspaper'],
    [/execu[cç][aã]o/i, 'fa-lock'], [/constitucional/i, 'fa-scale-balanced'],
    [/administrativo/i, 'fa-building-columns'], [/processual/i, 'fa-gavel'], [/penal/i, 'fa-handcuffs'],
    [/extravagante|especial/i, 'fa-book-skull'], [/humanos/i, 'fa-scale-unbalanced-flip']
];
const iconFor = name => (ICONS.find(([re]) => re.test(name)) || [null, 'fa-book'])[1];

const modules = [];
subjects.forEach(subject => subject.topicos.forEach(topic => {
    const moduleId = modules.length;
    modules.push({ sub: subject.nome, topic, quizTopics: [topic], mat: `mat_mission_${moduleId + 1}`, quiz: subject.nome, moduleId });
}));

function cut(startRe, endRe, replacement, label) {
    const start = html.search(startRe);
    if (start < 0) throw new Error(`Início não encontrado: ${label}`);
    const rest = html.slice(start);
    const m = rest.match(endRe);
    if (!m) throw new Error(`Fim não encontrado: ${label}`);
    html = html.slice(0, start) + replacement + rest.slice(m.index);
}
function sub(re, replacement, label) {
    if (!re.test(html)) throw new Error(`Padrão não encontrado: ${label}`);
    html = html.replace(re, () => replacement);
}

// 1. Cabeçalho: scripts e tema do PPPE
cut(/<script src="cloud-sync\.js"><\/script>/, /<link href="https:\/\/fonts\.googleapis/, `<script src="cloud-sync.js"></script>
    <script src="https://cdn.tailwindcss.com"></script>
    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
    <script>window.PMPE_TOPIC_GUIDES = {};</script>
    <script src="edital-pppe.js"></script>
    <script src="conteudo-lep.js"></script>
    <script type="module" src="session-guard.js"></script>
    `, 'head');
sub(/<link[^>]*tema-pmpe\.css[^>]*>/, '<link rel="stylesheet" href="tema.css?v=2">', 'tema');

// 2. Dashboard: atalhos por matéria
const shortcut = s => `                <button class="dashboard-shortcut" type="button" data-open-subject-mission="${esc(s.nome)}">
                    <img class="dashboard-shortcut-image" src="${HERO}" alt="" aria-hidden="true" loading="lazy" onerror="this.hidden=true">
                    <span class="dashboard-shortcut-content"><i class="fa-solid ${iconFor(s.nome)}" aria-hidden="true"></i><span><strong>${esc(s.nome)}</strong><small>Continue de onde parou nesta matéria</small></span></span>
                    <span class="dashboard-progress">
                        <span class="dashboard-progress-heading"><span>Aulas e PDFs concluídos</span><span class="dashboard-progress-value" data-subject-progress-value="${esc(s.nome)}">0%</span></span>
                        <span class="dashboard-progress-track" role="progressbar" aria-label="Progresso de ${esc(s.nome)}" aria-valuemin="0" aria-valuemax="100" aria-valuenow="0" data-subject-progress-track="${esc(s.nome)}"><span class="dashboard-progress-fill" data-subject-progress-fill="${esc(s.nome)}"></span></span>
                    </span>
                </button>
`;
cut(/<button class="dashboard-shortcut"/, /<\/div>\s*<\/section>\s*<section id="syllabusSection"/, subjects.map(shortcut).join('') + '            ', 'atalhos');

// 3. Conteúdo programático
const syllabusBlock = (bloco, label) => {
    const list = subjects.filter(s => s.blocoId === bloco.id);
    return `                <article class="rounded-lg border border-blue-500/30 bg-slate-950/40 p-4">
                    <h3 class="font-tactical text-lg text-blue-300 mb-3">${esc(label)} <span class="text-sm text-gray-400">(${bloco.questoes} questões)</span></h3>
${list.map(s => `                    <details class="group border-t border-slate-700 py-3">
                        <summary class="cursor-pointer list-none font-bold text-white flex justify-between gap-3">${esc(s.nome)} <span class="text-blue-300"><i class="fa-solid fa-chevron-down text-xs ml-1 transition-transform group-open:rotate-180"></i></span></summary>
                        <ul class="list-disc pl-5 mt-3 space-y-2 text-sm text-gray-300">
${s.topicos.map(t => `                            <li>${esc(t)}.</li>`).join('\n')}
                        </ul>
                        <button onclick="openSubjectGuide('${esc(s.nome).replace(/'/g, "\\'")}')" class="mt-3 w-full rounded bg-blue-700 hover:bg-blue-600 px-4 py-2 text-sm font-bold text-white"><i class="fa-solid fa-book-open mr-2"></i>Estudar ${esc(s.nome)}</button>
                    </details>`).join('\n')}
                </article>`;
};
cut(/<div class="grid grid-cols-1 md:grid-cols-3 gap-4">/, /<details class="syllabus-essay-card/, `<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
${edital.blocos.map((b, i) => syllabusBlock(b, `Bloco ${i + 1} · ${b.titulo}`)).join('\n')}
            </div>

            `, 'edital');
sub(/60 questões objetivas em 3 blocos \+ prova discursiva/, '60 questões objetivas (20 gerais + 40 específicas) + prova discursiva', 'subtítulo edital');
sub(/Extensão: mínimo de 15 e máximo de 20 linhas\./, 'Extensão: texto dissertativo de até 30 linhas.', 'redação linhas');
sub(/<li>Pontuação: 40 pontos; nota mínima informada de 12 pontos para não ser eliminado\.<\/li>/, '<li>Tema: Direitos Humanos e realidade do sistema prisional / segurança pública.</li>', 'redação pontos');

// 4. Simulado geral
cut(/<select id="quizFilter"/, /<\/select>/, `<select id="quizFilter" class="w-full bg-slate-800 text-white border border-slate-700 rounded py-2 px-3 mb-4 font-bold outline-none transition-colors max-w-full">
                        <option value="todos">Simulado Geral PPPE (60 Questões)</option>
${subjects.map(s => `                        <option value="${esc(s.nome)}">${esc(s.nome)}</option>`).join('\n')}
                    `, 'filtro simulado');

// 5. Materiais: só a redação é mantida; PDFs por tema são gerados em tempo de execução
cut(/const materialsDatabase = \{/, /"mat_redacao_pmpe": \{/, 'const materialsDatabase = {\n            ', 'materialsDatabase');
html = html.replace(/mat_redacao_pmpe/g, 'mat_redacao_pppe');
html = html.replace(/de 15 a 20 linhas, com 40 pontos e nota mínima de 12/g, 'de até 30 linhas, com os critérios definidos pelo Cebraspe')
    .replace(/de 15 a 20 linhas/g, 'de até 30 linhas').replace(/15 a 20 linhas/g, 'até 30 linhas');

// 6. Módulos e missões
cut(/const editalModules = \[/, /window\.PMPE_EDITAL_MODULES = editalModules;/, `const editalModules = ${JSON.stringify(modules, null, 4).replace(/\n/g, '\n        ')};\n                    `, 'editalModules');
cut(/const modulesBySubject = \[/, /const fullCycles = 4;/, `const modulesBySubject = [...new Set(editalModules.map(module => module.sub))].map(name => editalModules.filter(module => module.sub === name));
        `, 'modulesBySubject');
sub(/const fullCycles = 4;/, 'const fullCycles = Math.max(1, Math.ceil(Math.max(...modulesBySubject.map(list => list.length)) / 3));', 'fullCycles');

const placeholder = `function populateTopicGuides() {
            const scopeBySubject = ${JSON.stringify(Object.fromEntries(subjects.map(s => [s.nome, s.topicos])))};
            editalModules.forEach(module => {
                const scope = (scopeBySubject[module.sub] || []).map(item => '<li>' + item + '</li>').join('');
                materialsDatabase[module.mat] = {
                    title: module.sub + ' · ' + module.topic,
                    content: '<article class="topic-guide"><h1>' + module.topic + '</h1><p><strong>Disciplina:</strong> ' + module.sub + '. Banca: Cebraspe.</p><section><h2>Conteúdo programático da disciplina</h2><ul>' + scope + '</ul></section><section><h2>Apostila</h2><p class="rounded-lg border-l-4 border-blue-600 bg-blue-50 p-4 text-slate-800">O material completo deste tema está em preparação e será liberado em breve.</p></section></article>'
                };
            });
        }

        `;
cut(/function populateTopicGuides\(\) \{/, /const getDistributedLessonTitles = /, placeholder, 'populateTopicGuides');

// 7. Vídeos: sem sequência pré-definida
cut(/const EMBEDDED_VIDEO_URL_SEQUENCE = \[/, /\];/, 'const EMBEDDED_VIDEO_URL_SEQUENCE = [', 'videos');
sub(/const MISSION_SEQUENCE_MODULE_IDS = \[[^\]]*\];/, 'const MISSION_SEQUENCE_MODULE_IDS = editalModules.map(module => module.moduleId);', 'sequência');

// 8. Banco de questões vazio (em preparação)
cut(/const baseQuizTemplates\b/, /let currentQuizQuestions = \[\];/, `const baseQuizTemplates = {};
        editalModules.forEach(module => { baseQuizTemplates[module.quiz] = baseQuizTemplates[module.quiz] || []; });
        window.PMPE_QUIZ_POOLS = baseQuizTemplates;
        function populateMassiveDatabase() {}

        `, 'baseQuizTemplates');
cut(/const getDailyModulePackageIssues = module => \{/, /function generateUniqueQuestions\(category\) \{/, `const getDailyModulePackageIssues = () => [];
        function ensureTopicQuestionCoverage() { return []; }

        `, 'cobertura');
sub(/const cats = \[[^\]]*\];/, 'const cats = Object.keys(baseQuizTemplates);', 'cats');
sub(/'Banco de questões incompleto'/, "'Questões em preparação'", 'título bateria');
sub(/'A bateria foi interrompida[^']*'/, "'As questões deste tema do PPPE ainda estão em preparação.'", 'texto bateria');
sub(/currentQuizQuestions = generateUniqueQuestions\(filterValue\);/, `currentQuizQuestions = generateUniqueQuestions(filterValue);
            if (!currentQuizQuestions.length) {
                showModal('Questões em preparação', 'As questões do simulado do PPPE ainda estão em preparação.', 'fa-book-open');
                return;
            }`, 'openQuiz vazio');

// 9. Chaves de armazenamento do PPPE
html = html.replace(/(['"])pmpe_(notes_rich_v1|ian_v7|ian_notes_v7)\1/g, '$1pppe_$2$1')
    .replace(/(['"])pmpe((?:PdfHighlights|Notifications|VideoLessonNotes|ErrorNotebook|ErrorNotebookDraft|EssayDrafts|Flashcards)V\d)\1/g, '$1pppe$2$1');

// 10. Imagens, links e textos do concurso
html = html.replace(/assets\/brasao-pmpe\.png/g, CREST)
    .replace(/https:\/\/www\.pm\.pe\.gov\.br\/wp-content\/uploads\/2024\/09\/portalpmpe1\.png/g, HERO)
    .replace(/https:\/\/penoticias\.com\.br\/blog\/wp-content\/uploads\/2024\/07\/Policia-Militar\.jpg/g, HERO)
    .replace(/assets\/fotos\/[\w.-]+/g, HERO)
    .replace(/https:\/\/www\.institutoaocp\.org\.br\/concurso\.jsp\?id=611/g, 'https://www.cebraspe.org.br/')
    .replace(/https:\/\/www\.institutoaocp\.org\.br\//g, 'https://www.cebraspe.org.br/')
    .replace(/https:\/\/www\.pm\.pe\.gov\.br\//g, 'https://www.seap.pe.gov.br/')
    .replace(/Instituto AOCP/g, 'Cebraspe').replace(/AOCP/g, 'Cebraspe')
    .replace(/Polícia Militar de Pernambuco/g, 'Polícia Penal de Pernambuco')
    .replace(/(?<![\w.])PMPE(?!\w)/g, 'PPPE')
    .replace(/Prova PPPE 2024/g, 'Provas anteriores');

// 11. Contagem regressiva: data da prova ainda não definida
cut(/setInterval\(\(\) => \{\s*const distance = new Date\('2027-02-21T13:00:00'\)/, /window\.addEventListener\('DOMContentLoaded'/, `document.getElementById("countdown").innerHTML = "A DEFINIR";

        `, 'countdown');

// 11b. Remanescentes do PMPE
sub(/            historia: \{[\s\S]*?\n            \},\n/, `            historia: {
                title: "Execução Penal (LEP)",
                words: [
                    { answer: "REMICAO", clue: "Desconto de dias da pena por trabalho ou estudo." },
                    { answer: "PROGRESSAO", clue: "Passagem para regime menos rigoroso após cumprir requisitos." },
                    { answer: "LIVRAMENTO", clue: "Condicional: liberdade antecipada com condições." },
                    { answer: "SEMIABERTO", clue: "Regime em colônia agrícola, industrial ou similar." },
                    { answer: "DETRACAO", clue: "Desconto na pena do tempo de prisão provisória." },
                    { answer: "INDULTO", clue: "Clemência coletiva concedida pelo Presidente da República." },
                    { answer: "SURSIS", clue: "Suspensão condicional da pena." },
                    { answer: "FALTAGRAVE", clue: "Infração disciplinar prevista no art. 50 da LEP, como fuga." }
                ]
            },
`, 'jogo LEP');
sub(/<option value="historia">História de Pernambuco<\/option>/, '<option value="historia">Execução Penal (LEP)</option>', 'opção jogo');
sub(/<option value="rlm">Raciocínio Lógico Matemático<\/option>/, '<option value="rlm">Raciocínio Lógico</option>', 'opção rlm');
sub(/<option value="informatica">Informática Básica<\/option>/, '<option value="informatica">Noções de Informática</option>', 'opção info');

sub(/const TAF_DAILY_PLANS = \[[\s\S]*?\n        \];/, `const TAF_DAILY_PLANS = [
            "Condicionamento: corrida leve de 30 a 40 min, com aquecimento e alongamento ao final.",
            "Força: 4 séries de flexão, abdominal e barra (ou isometria), com descanso curto.",
            "Resistência: treino intervalado, 6 x 400 m fortes com 1'30\\" de descanso.",
            "Mobilidade e recuperação: caminhada, alongamento e exercícios de core.",
            "Treino funcional completo, com atenção à postura e ao ritmo. Ajuste conforme o edital (a definir)."
        ];`, 'TAF');
html = html.replace(/^\s*\['taf', [^\n]*\],?\n/gm, '');
html = html.replace(/TAF - Despertar/g, 'Treino físico - Despertar');

cut(/<div class="space-y-4 text-sm text-gray-300 h-48 overflow-y-auto pr-2 custom-scrollbar">/, /<\/div>\s*<\/div>\s*<!-- SIMULADOR GERADOR 60Q -->/,
    `<div class="space-y-4 text-sm text-gray-300 h-48 overflow-y-auto pr-2 custom-scrollbar">
` + edital.blocos.map(b => `                    <div>
                        <strong class="text-white block mb-1">${esc(b.titulo)}</strong>
                        <ul class="list-disc pl-4 space-y-1 text-xs">
${b.disciplinas.map(d => `                            <li>${esc(d.nome)}</li>`).join('\n')}
                        </ul>
                    </div>`).join('\n') + `
                    <div>
                        <strong class="text-white block mb-1">Prova Discursiva</strong>
                        <ul class="list-disc pl-4 space-y-1 text-xs">
                            <li>Texto dissertativo de até 30 linhas</li>
                        </ul>
                    </div>
                `, 'edital alvo');

html = html.replace(/Soldado/g, 'Candidato')
    .replace(/A Farda Te Espera \([^)]*\)/g, 'Sua aprovação começa hoje')
    .replace(/Sem Atalhos\. Apenas Guerra\./g, 'Sem atalhos. Apenas constância.')
    .replace(/Opera%C3%A7%C3%A3o%20PMPE/g, 'Opera%C3%A7%C3%A3o%20PPPE');

// 12. Mascote Gabari
html = html.replace(/<script>window\.GABARI_CONFIG[^\n]*<\/script>\s*<script src="gabari\.js[^"]*"><\/script>\s*/, '');
sub(/<\/body>/, `<script>window.GABARI_CONFIG = { concurso: 'PPPE', accent: '#0a1448', gold: '#e0b43c', storageKey: 'pppe_gabari_hidden' };</script>
    <script src="../gabari.js?v=2"></script>
</body>`, 'gabari');

fs.writeFileSync(path.join(root, 'pppe', 'index.html'), html, 'utf8');
console.log('pppe/index.html gerado:', html.length, 'bytes;', modules.length, 'módulos;', subjects.length, 'matérias');
