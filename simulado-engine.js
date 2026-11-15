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
        if (app.id === 'pcpe' && window.PCPE_ROLE !== 'escrivao' && window.PCPE_QUESTOES_AGENTE) {
            Object.entries(window.PCPE_QUESTOES_AGENTE).forEach(([subject, questions]) => {
                if (!Array.isArray(questions)) return;
                const pool = result[subject] || (result[subject] = []);
                questions.forEach(q => {
                    if (q && typeof q.text === 'string' && Array.isArray(q.options) && q.options.length === 5
                        && Number.isInteger(q.correct) && q.correct >= 0 && q.correct < 5)
                        pool.push({ ...q, subject, options: [...q.options] });
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

    const agenteDistribution = [
        ['Legislação Estadual',3,'P1'], ['Noções de Direito Constitucional',5,'P1'],
        ['Noções de Direito Administrativo',4,'P1'], ['Noções de Direito Penal',5,'P1'],
        ['Noções de Direito Processual Penal',3,'P1'], ['Língua Portuguesa',12,'P2'],
        ['Noções de Informática',6,'P2'], ['Raciocínio Lógico',10,'P2'],
        ['Contabilidade Geral',6,'P2'], ['Estatística',6,'P2']
    ];
    const agenteBank = () => {
        const source = window.PCPE_QUESTOES_AGENTE || {};
        return Object.fromEntries(agenteDistribution.map(([subject]) => [subject,
            (Array.isArray(source[subject]) ? source[subject] : []).filter(q => q && typeof q.text === 'string'
                && Array.isArray(q.options) && q.options.length === 5 && Number.isInteger(q.correct)
                && q.correct >= 0 && q.correct < 5 && typeof q.exp === 'string' && q.exp.trim())
                .map(q => ({ ...q, subject, options: [...q.options] }))]));
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
        .sim-engine-option.answer-correct{border-color:#087443;background:#e6f4ea}
        .sim-engine-option.answer-wrong{border-color:#a83227;background:#fff0ee}
        .sim-engine-option.locked{cursor:default}
        .sim-engine-feedback{margin:12px 0;padding:14px;border:1px solid #bed3c4;border-radius:10px;background:#fff;color:#173b2c}
        .sim-engine-feedback p{margin:6px 0}
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
        const isAgente = app.id === 'pcpe' && window.PCPE_ROLE !== 'escrivao';
        if (selector && Object.keys(pools).length) {
            const previous = selector.value;
            selector.replaceChildren(new Option(`Misto · ${app.name}`, 'todos'));
            if (isAgente) selector.add(new Option('Simulado Oficial PCPE Agente · 60 questões', 'oficial-agente'));
            Object.keys(pools).forEach(subject => selector.add(new Option(subject, subject)));
            selector.value = pools[previous] || (isAgente && previous === 'oficial-agente') ? previous : 'todos';
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
            if (isAgente) controls.insertAdjacentHTML('beforeend', '<label>Distribuição no simulado oficial<select id="simEngineDistribution"><option value="estimated">Distribuição estimada</option><option value="proportional">Proporcional ao banco</option></select></label><label>Meta pessoal (pontos em 60)<input id="simEngineGoal" type="number" min="0" max="60" value="45"></label>');
            if (isAgente) { const minutes = controls.querySelector('#simEngineMinutes'); minutes.insertAdjacentHTML('afterbegin', '<option value="240">4 horas (inclui redação no dia da prova)</option>'); minutes.value = '240'; }
            const submit = panel.querySelector('button[onclick*="openQuiz"]');
            if (submit) panel.insertBefore(controls, submit);
            else panel.appendChild(controls);
        }
        const description = panel.querySelector('p');
        if (description) description.textContent = `Escolha uma disciplina ou o simulado misto. As questões são selecionadas sem repetição até o esgotamento do banco; ao fim do ciclo, a lista é reiniciada. Após selecionar uma alternativa, você verá a correção e a resposta ficará registrada. Banco do ${app.name}.`;
        if (isAgente) {
            description.textContent = 'O modo oficial segue P1 (20) e P2 (40), com 1 ponto por acerto e sem penalidade por erro ou branco. Após selecionar uma alternativa, você verá a correção e a resposta ficará registrada. Não deixe respostas em branco. As quatro horas da prova real incluem a redação. O banco de cinco alternativas ainda está em construção; o modo oficial só inicia quando houver questões suficientes. As demais práticas podem incluir itens de 4 alternativas (banco de treino).';
            if (!document.getElementById('simEngineExamHelp')) {
                const help = document.createElement('div'); help.id = 'simEngineExamHelp'; help.className = 'sim-engine-muted';
                help.innerHTML = '<p>Distribuição estimada: Estadual 3, Constitucional 5, Administrativo 4, Penal 5, Processual Penal 3; Português 12, Informática 6, Raciocínio Lógico 10, Contabilidade 6, Estatística 6. O edital não divulga quantidades por disciplina. A opção proporcional ao banco conserva os blocos de 20 e 40.</p><p><strong>Provas anteriores:</strong> consulte a <a href="https://www.cebraspe.org.br/concursos/" target="_blank" rel="noopener noreferrer">página oficial de concursos do Cebraspe</a>, procure provas e gabaritos de polícia civil e resolva-os cronometrando; revise erros e compare o conteúdo ao edital vigente. As questões deste modo são originais em estilo Cebraspe, não reproduções de provas anteriores.</p>';
                panel.appendChild(help);
            }
        }
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
            const unseen = shuffle(available);
            const remaining = shuffle(candidates.filter(question => seen.has(questionId(question))));
            available = unseen.concat(remaining);
            state[key] = [];
            saveJson(storage.seen, state);
            reset = true;
        } else available = shuffle(available);
        const selected = available.slice(0, count).map(question => ({
            ...question,
            options: shuffle(question.options.map((text, index) => ({ text, correct: index === question.correct }))),
            correct: 0
        }));
        selected.forEach(question => { question.correct = question.options.findIndex(option => option.correct); question.options = question.options.map(option => option.text); });
        setSeen(scope, selected.map(questionId));
        return { questions: selected, reset, scope };
    };
    const selectOfficial = distribution => {
        const pools = agenteBank(); const state = getSeenState();
        const key = userId + ':oficial-agente'; const seen = new Set(state[key] || []);
        let reset = false; const selected = [];
        for (const [block, total] of [['P1', 20], ['P2', 40]]) {
            const entries = agenteDistribution.filter(item => item[2] === block);
            const unique = entries.map(([subject]) => [...new Map(pools[subject].map(q => [questionId(q), q])).values()]);
            const weights = entries.map((item, index) => distribution === 'proportional' ? unique[index].length : item[1]);
            const weightTotal = weights.reduce((sum, n) => sum + n, 0);
            if (!weightTotal) return { error: 'Banco original de ' + block + ' indisponível: simulado oficial não iniciado.' };
            const exact = weights.map(weight => total * weight / weightTotal); const counts = exact.map(Math.floor);
            const order = exact.map((n, i) => ({ i, fraction: n - counts[i] })).sort((a, b) => b.fraction - a.fraction);
            const remaining = total - counts.reduce((sum, n) => sum + n, 0);
            for (let i = 0; i < remaining; i++) counts[order[i].i]++;
            for (let i = 0; i < entries.length; i++) {
                if (unique[i].length < counts[i]) return { error: 'Banco original insuficiente em ' + entries[i][0] + ': ' + unique[i].length + ' disponíveis, ' + counts[i] + ' necessárias. O modo oficial não adapta itens de quatro alternativas.' };
                let available = shuffle(unique[i].filter(q => !seen.has(questionId(q))));
                if (available.length < counts[i]) {
                    available = available.concat(shuffle(unique[i].filter(q => seen.has(questionId(q)))));
                    reset = true;
                    unique[i].forEach(q => seen.delete(questionId(q)));
                }
                const chosen = available.slice(0, counts[i]).map(q => {
                    const options = shuffle(q.options.map((text, index) => ({ text, correct: index === q.correct })));
                    return { ...q, block, correct: options.findIndex(option => option.correct), options: options.map(option => option.text) };
                });
                chosen.forEach(q => seen.add(questionId(q))); selected.push(...chosen);
            }
        }
        state[key] = [...seen]; saveJson(storage.seen, state); return { questions: selected, reset };
    };
    const renderSetupError = message => {
        const notice = document.getElementById('simEngineNotice');
        if (notice) notice.textContent = message;
    };
    const open = filterOverride => {
        startPanel();
        const selector = document.getElementById('quizFilter');
        const filter = filterOverride || selector?.value || 'todos';
        const official = app.id === 'pcpe' && window.PCPE_ROLE !== 'escrivao' && filter === 'oficial-agente';
        const count = official ? 60 : Number(document.getElementById('simEngineQuantity')?.value || 60);
        const selected = official ? selectOfficial(document.getElementById('simEngineDistribution')?.value || 'estimated') : selectQuestions(filter, count);
        if (selected.error) { renderSetupError(selected.error); return; }
        const minutes = Number(document.getElementById('simEngineMinutes')?.value || 90);
        clearInterval(timerId);
        const startedAt = Date.now();
        const rawGoal = Number(document.getElementById('simEngineGoal')?.value);
        const goal = Number.isFinite(rawGoal) ? Math.min(60, Math.max(0, rawGoal)) : 45;
        active = { questions: selected.questions, answers: Array(selected.questions.length).fill(null), flags: new Set(), index: 0, seconds: minutes * 60, startedAt, deadline: startedAt + minutes * 60000, questionStartedAt: startedAt, questionTimes: Array(count).fill(0), official, goal, subjectFilter: filter, reset: selected.reset };
        getModal();
        renderQuestion();
        getModal().classList.add('open');
        timerId = setInterval(() => {
            if (!active) return;
            active.seconds = Math.max(0, Math.ceil((active.deadline - Date.now()) / 1000));
            const counter = document.getElementById('simEngineTimer');
            if (counter) counter.textContent = formatTime(active.seconds);
            if (active.seconds <= 0) finish(true);
        }, 1000);
    };
    const formatTime = seconds => `${String(Math.floor(Math.max(0, seconds) / 60)).padStart(2, '0')}:${String(Math.max(0, seconds) % 60).padStart(2, '0')}`;
    const renderQuestion = () => {
        if (!active) return;
        const now = Date.now();
        active.questionTimes[active.index] += now - active.questionStartedAt;
        active.questionStartedAt = now;
        const question = active.questions[active.index];
        const index = active.index;
        const content = document.getElementById('simEngineContent');
        const answer = active.answers[index];
        const answered = answer !== null;
        const options = question.options.map((option, optionIndex) => {
            const state = answered && optionIndex === question.correct ? 'answer-correct'
                : answered && optionIndex === answer ? 'answer-wrong' : '';
            return `<label class="sim-engine-option ${state} ${answered ? 'locked' : ''}"><input type="radio" name="sim-answer" value="${optionIndex}" ${answer === optionIndex ? 'checked' : ''} ${answered ? 'disabled' : ''}><span><strong>${String.fromCharCode(65 + optionIndex)}.</strong> ${escapeHtml(option)}</span></label>`;
        }).join('');
        const feedback = answered ? `<div class="sim-engine-feedback" role="status" aria-live="polite">
            <p class="${answer === question.correct ? 'sim-engine-correct' : 'sim-engine-wrong'}">${answer === question.correct ? 'Resposta correta' : 'Resposta incorreta'}</p>
            <p><strong>Gabarito: ${String.fromCharCode(65 + question.correct)}.</strong> ${escapeHtml(question.options[question.correct])}</p>
            <p><strong>Explicação:</strong> ${escapeHtml(question.exp || 'Comentário não cadastrado para esta questão.')}</p>
            <p class="sim-engine-muted">A primeira resposta foi registrada para manter sua pontuação.</p>
        </div>` : '';
        const navigation = active.questions.map((_, i) => `<button type="button" class="${active.answers[i] !== null ? 'answered' : ''} ${active.flags.has(i) ? 'flagged' : ''}" data-question="${i}" aria-label="Questão ${i + 1}${active.flags.has(i) ? ', marcada para revisão' : ''}">${i + 1}</button>`).join('');
        content.innerHTML = `<div class="sim-engine-top"><strong>Simulado ${app.name} · ${active.questions.length} questões</strong><span>Tempo: <strong id="simEngineTimer">${formatTime(active.seconds)}</strong></span><button class="sim-engine-btn secondary" type="button" data-action="close">Sair</button></div>
            <p class="sim-engine-progress">Questão ${index + 1} de ${active.questions.length} · ${escapeHtml(question.subject || question.topic || '')}${app.id === 'pcpe' && question.options.length === 4 ? ' · 4 alternativas (banco de treino)' : ''}</p>
            <div class="sim-engine-nav" aria-label="Navegação das questões">${navigation}</div>
            <div class="sim-engine-question">${question.text}</div><div>${options}</div>${feedback}
            <div class="sim-engine-bottom"><button class="sim-engine-btn secondary" type="button" data-action="previous" ${index === 0 ? 'disabled' : ''}>Anterior</button>
            <button class="sim-engine-btn secondary" type="button" data-action="flag">${active.flags.has(index) ? 'Desmarcar revisão' : 'Marcar para revisão'}</button>
            <span class="sim-engine-muted">${active.answers.filter(answer => answer !== null).length}/${active.questions.length} respondidas</span>
            ${index < active.questions.length - 1 ? '<button class="sim-engine-btn" type="button" data-action="next">Próxima</button>' : '<button class="sim-engine-btn" type="button" data-action="finish">Finalizar prova</button>'}</div>
            ${active.reset ? '<p class="sim-engine-muted">O ciclo de questões foi reiniciado para completar a quantidade escolhida sem repetições nesta prova.</p>' : ''}`;
        content.querySelectorAll('input[name="sim-answer"]').forEach(input => input.addEventListener('change', () => {
            if (active.answers[index] !== null) return;
            active.answers[index] = Number(input.value);
            renderQuestion();
        }));
        content.querySelectorAll('[data-question]').forEach(button => button.addEventListener('click', () => { active.questionTimes[active.index] += Date.now() - active.questionStartedAt; active.questionStartedAt = Date.now(); active.index = Number(button.dataset.question); renderQuestion(); }));
        content.querySelectorAll('[data-action]').forEach(button => button.addEventListener('click', () => {
            const action = button.dataset.action;
            if (action === 'close') close();
            if (action === 'previous' && active.index > 0) { active.questionTimes[active.index] += Date.now() - active.questionStartedAt; active.questionStartedAt = Date.now(); active.index--; renderQuestion(); }
            if (action === 'next' && active.index < active.questions.length - 1) { active.questionTimes[active.index] += Date.now() - active.questionStartedAt; active.questionStartedAt = Date.now(); active.index++; renderQuestion(); }
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
        active.questionTimes[active.index] += Date.now() - active.questionStartedAt;
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
        const record = { official: active.official, goal: active.goal, questionTimes: active.questionTimes, id: `sim_${Date.now()}`, app: app.id, date: new Date().toISOString(), total: answers.length, correct, percent: Math.round(correct / answers.length * 100), durationSeconds, bySubject };
        saveHistory(record);
        active = { ...active, answersForReview: answers, record, timedOut };
        renderResults();
    };
    const renderResults = () => {
        const { answersForReview: answers, record, timedOut } = active;
        const breakdown = Object.entries(record.bySubject).map(([subject, score]) => `<li>${escapeHtml(subject)}: <strong>${score.correct}/${score.total}</strong></li>`).join('');
        const review = answers.map((item, index) => `<article class="sim-engine-review"><div class="sim-engine-review-head"><strong>Questão ${index + 1} · ${escapeHtml(item.question.subject || item.question.topic || '')} · ${Math.round(record.questionTimes[index] / 1000)} s</strong><span class="${item.correct ? 'sim-engine-correct' : 'sim-engine-wrong'}">${item.answer === null ? 'Não respondida' : item.correct ? 'Correta' : 'Incorreta'}</span></div><p>${item.question.text}</p><p><strong>Sua resposta:</strong> ${item.answer === null ? '—' : escapeHtml(item.question.options[item.answer])}<br><strong>Gabarito:</strong> ${escapeHtml(item.question.options[item.question.correct])}</p><p class="sim-engine-muted">${escapeHtml(item.question.exp || 'Comentário não cadastrado para esta questão.')}</p>${!item.correct ? `<button type="button" class="sim-engine-btn secondary" data-error="${index}">Salvar no caderno de erros</button>` : ''}</article>`).join('');
        document.getElementById('simEngineContent').innerHTML = `<div class="sim-engine-top"><h2>Resultado do simulado ${app.name}</h2><button class="sim-engine-btn secondary" type="button" data-action="close">Fechar</button></div>
            <div class="sim-engine-result"><p><strong>${record.correct}/${record.total} acertos · ${record.percent}%</strong></p>${record.official ? `<p>${record.correct < 30 ? 'Abaixo da linha eliminatória' : 'Atingiu a linha mínima objetiva'}: ${record.correct}/60 pontos (mínimo 30). Meta pessoal: ${record.goal} pontos — ${record.correct >= record.goal ? 'atingida' : 'não atingida'}. A redação e demais regras do edital também se aplicam.</p>` : ''}<p>${timedOut ? 'Tempo encerrado. ' : ''}Duração: ${Math.floor(record.durationSeconds / 60)} min.</p><h3>Desempenho por disciplina</h3><ul>${breakdown}</ul></div>
            <h3>Gabarito comentado · todas as questões</h3><p class="sim-engine-muted">A revisão mostra sua resposta, o gabarito e o comentário. Use os marcadores para salvar as questões erradas no caderno.</p>${review}`;
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
