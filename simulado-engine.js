(() => {
    'use strict';
    if (typeof window === 'undefined' || typeof document === 'undefined' || typeof location === 'undefined') return;

    const app = location.pathname.toLowerCase().includes('/pppe/')
        ? { id: 'pppe', name: 'PPPE', prefix: 'pppe', exam: 'Polícia Penal de Pernambuco' }
        : location.pathname.toLowerCase().includes('/pcpe/')
            ? { id: 'pcpe', name: 'PCPE', prefix: 'pcpe', exam: 'Polícia Civil de Pernambuco' }
            : { id: 'pmpe', name: 'PMPE', prefix: 'pmpe', exam: 'Polícia Militar de Pernambuco' };
    const storage = {
        seen: `${app.prefix}_simulado_seen_v1`,
        history: `${app.prefix}_simulado_history_v1`
    };
    let userId = 'local';
    try { userId = localStorage.getItem(`${app.prefix}_sync_owner`) || 'local'; } catch { }
    let active = null;
    let originalOpenQuiz = null;
    let timerId = null;

    const escapeHtml = value => String(value ?? '').replace(/[&<>"']/g, char => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[char]));
    const readJson = (key, fallback) => {
        try { const value = JSON.parse(localStorage.getItem(key) || 'null'); return value ?? fallback; }
        catch { return fallback; }
    };
    const saveJson = (key, value) => {
        try { localStorage.setItem(key, JSON.stringify(value)); return true; }
        catch { return false; }
    };
    const questionId = question => String(question.text || '').trim().replace(/\s+/g, ' ').toLocaleLowerCase('pt-BR');
    const shuffle = values => {
        const result = [...values];
        for (let i = result.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [result[i], result[j]] = [result[j], result[i]];
        }
        return result;
    };
    const bank = () => {
        let pools = window.PMPE_QUIZ_POOLS;
        if ((!pools || !Object.values(pools).some(pool => Array.isArray(pool) && pool.length)) && originalOpenQuiz) {
            try {
                originalOpenQuiz('todos');
                document.getElementById('quizModal')?.classList.add('hidden');
                document.getElementById('quizModal')?.classList.remove('flex');
            } catch (error) {
                console.warn('Não foi possível inicializar o banco legado do simulado.', error);
            }
            pools = window.PMPE_QUIZ_POOLS;
        }
        const result = {};
        if (pools && typeof pools === 'object') {
            Object.entries(pools).forEach(([subject, questions]) => {
                if (!Array.isArray(questions)) return;
                const valid = questions.filter(question => question && typeof question.text === 'string'
                    && Array.isArray(question.options) && question.options.length >= 2
                    && Number.isInteger(question.correct) && question.correct >= 0 && question.correct < question.options.length)
                    .map(question => ({ ...question, subject: question.subject || subject, options: [...question.options] }));
                if (valid.length) result[subject] = valid;
            });
        }
        if (app.id === 'pmpe' && window.PMPE_QUIZ_SUPPLEMENT) {
            Object.entries(window.PMPE_QUIZ_SUPPLEMENT).forEach(([subject, questions]) => {
                if (!Array.isArray(questions)) return;
                const pool = result[subject] || (result[subject] = []);
                questions.forEach(question => {
                    if (!question || typeof question.text !== 'string' || !Array.isArray(question.options)
                        || question.options.length < 2 || !Number.isInteger(question.correct)
                        || question.correct < 0 || question.correct >= question.options.length) return;
                    pool.push({ ...question, subject: question.subject || subject, options: [...question.options] });
                });
            });
        }
        if (!Object.keys(result).length && window.PPPE_QUESTOES) {
            Object.entries(window.PPPE_QUESTOES).forEach(([topic, questions]) => {
                if (!Array.isArray(questions)) return;
                const valid = questions.filter(question => question && typeof question.text === 'string'
                    && Array.isArray(question.options) && Number.isInteger(question.correct))
                    .map(question => ({ ...question, subject: topic, options: [...question.options] }));
                if (valid.length) result[topic] = valid;
            });
        }
        if ((app.id === 'pppe' || app.id === 'pcpe') && window.PPPE_QUESTOES) {
            Object.keys(result).forEach(subject => delete result[subject]);
            const modules = app.id === 'pcpe' ? (window.PCPE_MODULOS || []) : (window.PPPE_MODULOS || []);
            const disciplineByTopic = new Map(modules.map(module => [module.topic, module.sub]));
            Object.entries(window.PPPE_QUESTOES).forEach(([topic, questions]) => {
                const subject = disciplineByTopic.get(topic);
                if (!subject || !Array.isArray(questions)) return;
                const pool = result[subject] || (result[subject] = []);
                questions.forEach(question => {
                    if (!question || typeof question.text !== 'string' || !Array.isArray(question.options)
                        || question.options.length < 2 || !Number.isInteger(question.correct)
                        || question.correct < 0 || question.correct >= question.options.length) return;
                    pool.push({ ...question, topic, subject, options: [...question.options] });
                });
            });
        }
        Object.keys(result).forEach(subject => {
            const unique = new Map();
            result[subject].forEach(question => unique.set(questionId(question), question));
            result[subject] = [...unique.values()];
            if (!result[subject].length) delete result[subject];
        });
        return result;
    };

    const style = document.createElement('style');
    style.textContent = `
        .sim-engine-controls{display:grid;grid-template-columns:repeat(auto-fit,minmax(170px,1fr));gap:12px;margin:14px 0}
        .sim-engine-controls label{display:grid;gap:6px;color:#33483a;font-weight:700;font-size:.88rem}
        .sim-engine-controls select{width:100%;border:1px solid #91a99a;border-radius:8px;padding:10px;background:#fff;color:#173b2c}
        .sim-engine-notice{margin:10px 0;color:#9a3412;font-weight:700;min-height:1.3em}
        #simEngineModal{position:fixed;inset:0;z-index:100000;background:rgba(8,20,13,.82);display:none;align-items:center;justify-content:center;padding:12px}
        #simEngineModal.open{display:flex}
        #simEngineBox{background:#f5faf6;color:#173b2c;width:min(100%,1000px);max-height:96vh;overflow:auto;border-radius:16px;box-shadow:0 20px 70px #0008;padding:20px}
        .sim-engine-top,.sim-engine-bottom,.sim-engine-review-head{display:flex;align-items:center;justify-content:space-between;gap:12px;flex-wrap:wrap}
        .sim-engine-progress{font-size:.9rem;font-weight:800;color:#355643}
        .sim-engine-question{font-size:1.15rem;font-weight:800;line-height:1.55;margin:22px 0}
        .sim-engine-option{display:flex;gap:10px;align-items:flex-start;width:100%;text-align:left;padding:13px;border:1px solid #9db5a5;border-radius:10px;background:#fff;color:#173b2c;margin:8px 0;cursor:pointer}
        .sim-engine-option:hover,.sim-engine-option.selected{border-color:#087443;background:#e6f4ea}
        .sim-engine-option input{margin-top:5px;accent-color:#087443}
        .sim-engine-nav{display:flex;flex-wrap:wrap;gap:6px;margin:12px 0}
        .sim-engine-nav button{width:38px;height:38px;border:1px solid #93a89a;border-radius:8px;background:#fff;color:#173b2c;font-weight:800}
        .sim-engine-nav button.answered{background:#d9efe0}.sim-engine-nav button.flagged{outline:2px solid #d97706}
        .sim-engine-btn{border:0;border-radius:8px;padding:10px 15px;background:#087443;color:#fff;font-weight:800;cursor:pointer}
        .sim-engine-btn.secondary{background:#e2eee5;color:#173b2c;border:1px solid #93a89a}
        .sim-engine-btn.danger{background:#a83227}
        .sim-engine-muted{color:#496052;font-size:.9rem}
        .sim-engine-result{padding:14px;background:#fff;border:1px solid #bed3c4;border-radius:10px;margin:12px 0}
        .sim-engine-review{border-top:1px solid #cbd9ce;padding:16px 0}
        .sim-engine-correct{color:#087443;font-weight:800}.sim-engine-wrong{color:#a83227;font-weight:800}
        @media(max-width:600px){#simEngineBox{padding:14px}.sim-engine-question{font-size:1rem}}
    `;
    document.head.appendChild(style);

    const getModal = () => {
        let modal = document.getElementById('simEngineModal');
        if (modal) return modal;
        modal = document.createElement('div');
        modal.id = 'simEngineModal';
        modal.setAttribute('role', 'dialog');
        modal.setAttribute('aria-modal', 'true');
        modal.setAttribute('aria-label', `Simulado ${app.name}`);
        modal.innerHTML = '<div id="simEngineBox"><div id="simEngineContent"></div></div>';
        modal.addEventListener('click', event => { if (event.target === modal) close(); });
        document.body.appendChild(modal);
        return modal;
    };
    const startPanel = () => {
        const pools = bank();
        const selector = document.getElementById('quizFilter');
        if (selector && Object.keys(pools).length) {
            const previous = selector.value;
            selector.replaceChildren(new Option(`Misto · ${app.name}`, 'todos'));
            Object.keys(pools).forEach(subject => selector.add(new Option(subject, subject)));
            selector.value = pools[previous] ? previous : 'todos';
        }
        const launch = document.querySelector('#simulatorPanel button[onclick*="openQuiz"]');
        if (launch) launch.innerHTML = '<i class="fa-solid fa-play mr-2"></i> INICIAR SIMULADO';
        const badge = document.querySelector('#simulatorPanel .simulator-heading span');
        if (badge) badge.textContent = 'QUESTÕES SEM REPETIÇÃO';
        const panel = document.querySelector('#simulatorPanel .p-5.text-center');
        if (!panel) return;
        let controls = document.getElementById('simEngineControls');
        if (!controls) {
            controls = document.createElement('div');
            controls.id = 'simEngineControls';
            controls.className = 'sim-engine-controls';
            controls.innerHTML = '<label>Quantidade de questões<select id="simEngineQuantity"><option value="60" selected>60 questões</option><option value="30">30 questões</option><option value="20">20 questões</option><option value="10">10 questões</option></select></label><label>Tempo de prova<select id="simEngineMinutes"><option value="90" selected>90 minutos</option><option value="60">60 minutos</option><option value="30">30 minutos</option></select></label>';
            const submit = panel.querySelector('button[onclick*="openQuiz"]');
            if (submit) panel.insertBefore(controls, submit);
            else panel.appendChild(controls);
        }
        const description = panel.querySelector('p');
        if (description) description.textContent = `Escolha uma disciplina ou o simulado misto. As questões são selecionadas sem repetição até o esgotamento do banco; ao fim do ciclo, a lista é reiniciada. Banco do ${app.name}.`;
        let notice = document.getElementById('simEngineNotice');
        if (!notice) { notice = document.createElement('p'); notice.id = 'simEngineNotice'; notice.className = 'sim-engine-notice'; panel.appendChild(notice); }
        const total = new Set(Object.values(pools).flat().map(questionId)).size;
        if (notice) notice.textContent = total ? `Banco disponível: ${total} questões únicas em ${Object.keys(pools).length} disciplinas.` : 'O banco de questões não foi carregado.';
    };
    const close = () => {
        clearInterval(timerId);
        timerId = null;
        getModal().classList.remove('open');
    };
    const getSeenState = () => readJson(storage.seen, {});
    const setSeen = (scope, ids) => {
        const state = getSeenState();
        const key = `${userId}:${scope}`;
        state[key] = [...new Set([...(state[key] || []), ...ids])];
        saveJson(storage.seen, state);
    };
    const selectQuestions = (filter, count) => {
        const pools = bank();
        let candidates = filter === 'todos'
            ? Object.values(pools).flat()
            : (pools[filter] || []);
        const unique = new Map();
        candidates.forEach(question => unique.set(questionId(question), question));
        candidates = [...unique.values()];
        if (candidates.length < count) return { error: `Esta seleção tem ${candidates.length} questões únicas; reduza a quantidade para até ${candidates.length}.` };
        const scope = filter === 'todos' ? 'todos' : `disciplina:${filter}`;
        const state = getSeenState();
        const key = `${userId}:${scope}`;
        const seen = new Set(state[key] || []);
        let available = candidates.filter(question => !seen.has(questionId(question)));
        let reset = false;
        if (available.length < count) {
            state[key] = [];
            saveJson(storage.seen, state);
            available = candidates;
            reset = true;
        }
        const selected = shuffle(available).slice(0, count).map(question => ({
            ...question,
            options: shuffle(question.options.map((text, index) => ({ text, correct: index === question.correct }))),
            correct: 0
        }));
        selected.forEach(question => { question.correct = question.options.findIndex(option => option.correct); question.options = question.options.map(option => option.text); });
        setSeen(scope, selected.map(questionId));
        return { questions: selected, reset, scope };
    };
    const renderSetupError = message => {
        const notice = document.getElementById('simEngineNotice');
        if (notice) notice.textContent = message;
    };
    const open = filterOverride => {
        startPanel();
        const selector = document.getElementById('quizFilter');
        const filter = filterOverride || selector?.value || 'todos';
        const count = Number(document.getElementById('simEngineQuantity')?.value || 60);
        const selected = selectQuestions(filter, count);
        if (selected.error) { renderSetupError(selected.error); return; }
        const minutes = Number(document.getElementById('simEngineMinutes')?.value || 90);
        active = { questions: selected.questions, answers: Array(selected.questions.length).fill(null), flags: new Set(), index: 0, seconds: minutes * 60, startedAt: Date.now(), subjectFilter: filter, reset: selected.reset };
        getModal();
        renderQuestion();
        getModal().classList.add('open');
        timerId = setInterval(() => {
            if (!active) return;
            active.seconds--;
            const counter = document.getElementById('simEngineTimer');
            if (counter) counter.textContent = formatTime(active.seconds);
            if (active.seconds <= 0) finish(true);
        }, 1000);
    };
    const formatTime = seconds => `${String(Math.floor(Math.max(0, seconds) / 60)).padStart(2, '0')}:${String(Math.max(0, seconds) % 60).padStart(2, '0')}`;
    const renderQuestion = () => {
        if (!active) return;
        const question = active.questions[active.index];
        const index = active.index;
        const content = document.getElementById('simEngineContent');
        const options = question.options.map((option, optionIndex) => `<label class="sim-engine-option ${active.answers[index] === optionIndex ? 'selected' : ''}"><input type="radio" name="sim-answer" value="${optionIndex}" ${active.answers[index] === optionIndex ? 'checked' : ''}><span><strong>${String.fromCharCode(65 + optionIndex)}.</strong> ${escapeHtml(option)}</span></label>`).join('');
        const navigation = active.questions.map((_, i) => `<button type="button" class="${active.answers[i] !== null ? 'answered' : ''} ${active.flags.has(i) ? 'flagged' : ''}" data-question="${i}" aria-label="Questão ${i + 1}${active.flags.has(i) ? ', marcada para revisão' : ''}">${i + 1}</button>`).join('');
        content.innerHTML = `<div class="sim-engine-top"><strong>Simulado ${app.name} · ${active.questions.length} questões</strong><span>Tempo: <strong id="simEngineTimer">${formatTime(active.seconds)}</strong></span><button class="sim-engine-btn secondary" type="button" data-action="close">Sair</button></div>
            <p class="sim-engine-progress">Questão ${index + 1} de ${active.questions.length} · ${escapeHtml(question.subject || question.topic || '')}</p>
            <div class="sim-engine-nav" aria-label="Navegação das questões">${navigation}</div>
            <div class="sim-engine-question">${question.text}</div><div>${options}</div>
            <div class="sim-engine-bottom"><button class="sim-engine-btn secondary" type="button" data-action="previous" ${index === 0 ? 'disabled' : ''}>Anterior</button>
            <button class="sim-engine-btn secondary" type="button" data-action="flag">${active.flags.has(index) ? 'Desmarcar revisão' : 'Marcar para revisão'}</button>
            <span class="sim-engine-muted">${active.answers.filter(answer => answer !== null).length}/${active.questions.length} respondidas</span>
            ${index < active.questions.length - 1 ? '<button class="sim-engine-btn" type="button" data-action="next">Próxima</button>' : '<button class="sim-engine-btn" type="button" data-action="finish">Finalizar prova</button>'}</div>
            ${active.reset ? '<p class="sim-engine-muted">O ciclo de questões foi reiniciado para completar a quantidade escolhida sem repetições nesta prova.</p>' : ''}`;
        content.querySelectorAll('input[name="sim-answer"]').forEach(input => input.addEventListener('change', () => {
            active.answers[index] = Number(input.value);
            renderQuestion();
        }));
        content.querySelectorAll('[data-question]').forEach(button => button.addEventListener('click', () => { active.index = Number(button.dataset.question); renderQuestion(); }));
        content.querySelectorAll('[data-action]').forEach(button => button.addEventListener('click', () => {
            const action = button.dataset.action;
            if (action === 'close') close();
            if (action === 'previous' && active.index > 0) { active.index--; renderQuestion(); }
            if (action === 'next' && active.index < active.questions.length - 1) { active.index++; renderQuestion(); }
            if (action === 'flag') { active.flags.has(index) ? active.flags.delete(index) : active.flags.add(index); renderQuestion(); }
            if (action === 'finish') finish(false);
        }));
    };
    const historyStorageKey = () => `${app.prefix}_simulado_history_v1`;
    const saveHistory = record => {
        const history = readJson(historyStorageKey(), []);
        history.unshift(record);
        saveJson(historyStorageKey(), history.slice(0, 100));
    };
    const saveMissedToNotebook = question => {
        const key = `${app.prefix}ErrorNotebookV1`;
        const entries = readJson(key, []);
        if (entries.some(entry => entry.question === question.text)) return false;
        const now = new Date().toISOString();
        entries.unshift({ id: `err_${Date.now()}_${Math.random().toString(36).slice(2, 7)}`, subject: question.subject || question.topic || 'Simulado', question: question.text, cause: 'Resposta incorreta no simulado', rule: question.exp || `Gabarito: ${question.options[question.correct]}`, createdAt: now, updatedAt: now });
        return saveJson(key, entries);
    };
    const finish = timedOut => {
        if (!active) return;
        clearInterval(timerId);
        timerId = null;
        const answers = active.questions.map((question, index) => ({ question, answer: active.answers[index], correct: active.answers[index] === question.correct }));
        const correct = answers.filter(item => item.correct).length;
        const durationSeconds = Math.max(0, Math.round((Date.now() - active.startedAt) / 1000));
        const bySubject = {};
        answers.forEach(item => {
            const subject = item.question.subject || item.question.topic || 'Geral';
            bySubject[subject] ||= { correct: 0, total: 0 };
            bySubject[subject].total++;
            if (item.correct) bySubject[subject].correct++;
        });
        const record = { id: `sim_${Date.now()}`, app: app.id, date: new Date().toISOString(), total: answers.length, correct, percent: Math.round(correct / answers.length * 100), durationSeconds, bySubject };
        saveHistory(record);
        active = { ...active, answersForReview: answers, record, timedOut };
        renderResults();
    };
    const renderResults = () => {
        const { answersForReview: answers, record, timedOut } = active;
        const breakdown = Object.entries(record.bySubject).map(([subject, score]) => `<li>${escapeHtml(subject)}: <strong>${score.correct}/${score.total}</strong></li>`).join('');
        const review = answers.map((item, index) => `<article class="sim-engine-review"><div class="sim-engine-review-head"><strong>Questão ${index + 1} · ${escapeHtml(item.question.subject || item.question.topic || '')}</strong><span class="${item.correct ? 'sim-engine-correct' : 'sim-engine-wrong'}">${item.answer === null ? 'Não respondida' : item.correct ? 'Correta' : 'Incorreta'}</span></div><p>${item.question.text}</p><p><strong>Sua resposta:</strong> ${item.answer === null ? '—' : escapeHtml(item.question.options[item.answer])}<br><strong>Gabarito:</strong> ${escapeHtml(item.question.options[item.question.correct])}</p><p class="sim-engine-muted">${escapeHtml(item.question.exp || 'Comentário não cadastrado para esta questão.')}</p>${!item.correct ? `<button type="button" class="sim-engine-btn secondary" data-error="${index}">Salvar no caderno de erros</button>` : ''}</article>`).join('');
        document.getElementById('simEngineContent').innerHTML = `<div class="sim-engine-top"><h2>Resultado do simulado ${app.name}</h2><button class="sim-engine-btn secondary" type="button" data-action="close">Fechar</button></div>
            <div class="sim-engine-result"><p><strong>${record.correct}/${record.total} acertos · ${record.percent}%</strong></p><p>${timedOut ? 'Tempo encerrado. ' : ''}Duração: ${Math.floor(record.durationSeconds / 60)} min.</p><h3>Desempenho por disciplina</h3><ul>${breakdown}</ul></div>
            <p class="sim-engine-muted">A revisão mostra sua resposta, o gabarito e o comentário. Use os marcadores para salvar as questões erradas no caderno.</p>${review}`;
        document.getElementById('simEngineContent').querySelector('[data-action="close"]').addEventListener('click', close);
        document.getElementById('simEngineContent').querySelectorAll('[data-error]').forEach(button => button.addEventListener('click', () => {
            const item = answers[Number(button.dataset.error)];
            button.textContent = saveMissedToNotebook(item.question) ? 'Salva no caderno de erros' : 'Já registrada no caderno';
            button.disabled = true;
        }));
    };
    const init = () => {
        if (!document.getElementById('simulatorPanel')) return;
        originalOpenQuiz = window.openQuiz;
        window.openQuiz = filter => open(filter || null);
        startPanel();
        window.addEventListener(`${app.id}:session-ready`, event => {
            if (event.detail?.uid) userId = event.detail.uid;
            startPanel();
        });
        document.addEventListener('keydown', event => { if (event.key === 'Escape' && document.getElementById('simEngineModal')?.classList.contains('open')) close(); });
    };
    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init, { once: true });
    else init();
})();
