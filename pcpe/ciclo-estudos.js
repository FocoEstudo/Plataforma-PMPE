(function (root, factory) {
    const api = factory();
    if (typeof module === 'object' && module.exports) module.exports = api;
    if (root) {
        root.PCPE_STUDY_CYCLE = api;
        if (typeof document !== 'undefined') {
            const start = () => api.mount(document.getElementById('pcpeCycleRoot'));
            if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start);
            else start();
        }
    }
})(typeof window !== 'undefined' ? window : null, function () {
    'use strict';

    const BASE_SUBJECTS = [
        'Língua Portuguesa',
        'Noções de Direito Penal',
        'Noções de Direito Processual Penal',
        'Noções de Direito Constitucional',
        'Noções de Direito Administrativo'
    ];
    const COMPLEMENTARY_SUBJECTS = [
        'Noções de Informática',
        'Raciocínio Lógico',
        'Estatística',
        'Contabilidade Geral',
        'Legislação Estadual'
    ];
    const BASE_DAYS = 42;
    const REVIEW_THRESHOLD = 65;
    const STORAGE_PREFIX = 'pmpePcpeStudyCycleV1';

    const isoToday = () => {
        const now = new Date();
        return `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}`;
    };

    function topicList(modules, subject) {
        return (modules || []).filter(module => module.sub === subject).map(module => ({
            subject,
            topic: module.topic
        }));
    }

    function getPhase(state) {
        return state.expanded || state.completedStudyDays >= BASE_DAYS ? 'expansion' : 'base';
    }

    function isWeeklyReview(state) {
        return state.completedCycleDays % 7 === 6;
    }

    function circularTopics(modules, phase, cursor) {
        const subjects = phase === 'base'
            ? BASE_SUBJECTS
            : [...BASE_SUBJECTS, ...COMPLEMENTARY_SUBJECTS];
        const available = subjects.map(subject => topicList(modules, subject))
            .filter(list => list.length);
        if (!available.length) return [];
        const subjectList = available.map(list => list[0]);
        const result = [];
        for (let block = 0; block < 3; block++) {
            const group = subjectList[(cursor + block) % subjectList.length];
            const moduleList = available.find(list => list[0].subject === group.subject) || [];
            const topicOffset = Math.floor(cursor / subjectList.length) % moduleList.length;
            result.push(moduleList[topicOffset] || group);
        }
        return result;
    }

    function buildDay(modules, state) {
        const today = isoToday();
        if (isWeeklyReview(state)) {
            return {
                date: today,
                review: true,
                topics: state.weakTopics && state.weakTopics.length
                    ? state.weakTopics
                    : circularTopics(modules, getPhase(state), state.cursor).slice(0, 2),
                completedStudyDays: state.completedStudyDays,
                completedCycleDays: state.completedCycleDays
            };
        }
        return {
            date: today,
            review: false,
            topics: circularTopics(modules, getPhase(state), state.cursor),
            completedStudyDays: state.completedStudyDays,
            completedCycleDays: state.completedCycleDays
        };
    }

    function aggregateMetrics(records) {
        const totals = {};
        (records || []).forEach(record => {
            if (!record.topic) return;
            const item = totals[record.topic] || { total: 0, correct: 0 };
            item.total += Number(record.total) || 0;
            item.correct += Number(record.correct) || 0;
            totals[record.topic] = item;
        });
        return Object.entries(totals).map(([topic, item]) => ({
            topic,
            total: item.total,
            correct: item.correct,
            percent: item.total ? Math.round(item.correct / item.total * 100) : 0
        }));
    }

    function weakTopics(records) {
        return aggregateMetrics(records)
            .filter(item => item.total > 0 && item.percent < REVIEW_THRESHOLD)
            .map(item => ({ subject: item.topic, topic: item.topic, percent: item.percent }));
    }

    function escapeHtml(value) {
        return String(value == null ? '' : value).replace(/[&<>"']/g, char => ({
            '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
        })[char]);
    }

    function defaultState(role) {
        return {
            role,
            cursor: 0,
            completedStudyDays: 0,
            completedCycleDays: 0,
            expanded: false,
            blockStarted: false,
            activeBlock: 0,
            dailyStatus: {},
            records: [],
            lawRead: {},
            timer: null
        };
    }

    function mount(root) {
        if (!root || root.dataset.mounted === 'true') return;
        root.dataset.mounted = 'true';
        const role = window.PCPE_ROLE || 'agente';
        const key = `${STORAGE_PREFIX}_${role}`;
        let state;
        try {
            const saved = JSON.parse(localStorage.getItem(key) || 'null');
            state = Object.assign(defaultState(role), saved && typeof saved === 'object' ? saved : {});
        } catch (error) {
            console.error('Não foi possível carregar o ciclo de estudos PCPE:', error);
            state = defaultState(role);
        }

        if (!Array.isArray(state.records)) state.records = [];
        if (!state.dailyStatus || typeof state.dailyStatus !== 'object') state.dailyStatus = {};
        if (!state.lawRead || typeof state.lawRead !== 'object') state.lawRead = {};

        const modules = Array.isArray(window.PCPE_MODULOS) ? window.PCPE_MODULOS : [];
        let day = buildDay(modules, state);
        let timer = null;

        root.closest('#missionsSection')?.classList.add('pcpe-cycle-active');
        if (!document.getElementById('pcpeCycleStyles')) {
            const style = document.createElement('style');
            style.id = 'pcpeCycleStyles';
            style.textContent = `
                #missionsSection.pcpe-cycle-active > .flex, #missionsSection.pcpe-cycle-active > p,
                #missionsSection.pcpe-cycle-active > .relative, #missionsSection.pcpe-cycle-active > .mt-8 { display:none !important; }
                .pcpe-cycle-panel{display:grid;gap:1rem;color:#1d2a36}
                .pcpe-cycle-header,.pcpe-cycle-controls,.pcpe-cycle-card-head,.pcpe-cycle-timer{display:flex;justify-content:space-between;align-items:center;gap:1rem;flex-wrap:wrap}
                .pcpe-cycle-header{padding:1.25rem;border-radius:1rem;background:linear-gradient(135deg,#10295e,#164c3e);color:white}
                .pcpe-cycle-header h2{font-size:1.35rem;font-weight:900;margin:.25rem 0 0}
                .pcpe-cycle-kicker{font-size:.72rem;font-weight:900;letter-spacing:.08em;color:#2563eb}
                .pcpe-cycle-header .pcpe-cycle-kicker{color:#93c5fd}
                .pcpe-cycle-progress{text-align:right;display:grid}
                .pcpe-cycle-progress strong{font-size:1.4rem}
                .pcpe-cycle-controls{padding:.75rem 1rem;border:1px solid #bfd1c7;border-radius:.75rem;background:#eef7f1}
                .pcpe-cycle-controls button,.pcpe-cycle-review button,.pcpe-cycle-performance button,.pcpe-cycle-timer button,.pcpe-cycle-complete button{border:0;border-radius:.55rem;padding:.65rem .85rem;font-weight:800;cursor:pointer;background:#174d3a;color:white}
                .pcpe-cycle-controls span{font-size:.78rem;color:#52605a}
                .pcpe-cycle-review{padding:1rem;border:2px solid #dc2626;border-radius:.75rem;background:#fff4f4;color:#7f1d1d}
                .pcpe-cycle-blocks{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:.75rem}
                .pcpe-cycle-card{display:grid;gap:.65rem;padding:1rem;border:1px solid #cbd5df;border-radius:.85rem;background:white;box-shadow:0 8px 24px rgba(15,23,42,.08)}
                .pcpe-cycle-card h3{font-size:1.05rem;font-weight:900;line-height:1.35}
                .pcpe-cycle-card label{display:flex;align-items:flex-start;gap:.5rem;font-size:.84rem}
                .pcpe-cycle-card input[type=checkbox]{margin-top:.15rem}
                .pcpe-cycle-phases{display:grid;gap:.35rem;font-size:.78rem;font-weight:800}
                .pcpe-cycle-phases span{padding:.45rem;border-radius:.45rem;background:#edf4ff;color:#1e40af}
                .pcpe-cycle-phases span+span{background:#fff7ed;color:#9a3412}
                .pcpe-cycle-block-button{border:0;border-radius:.45rem;padding:.45rem .65rem;font-weight:800;background:#2563eb;color:white}
                .pcpe-cycle-block-button:disabled{background:#9ca3af;cursor:default}
                .pcpe-cycle-law-check{border-top:1px solid #e2e8f0;padding-top:.65rem}
                .pcpe-cycle-performance{display:grid;grid-template-columns:1fr 1fr;gap:.5rem}
                .pcpe-cycle-performance label{display:grid;gap:.25rem;font-size:.75rem;font-weight:800}
                .pcpe-cycle-performance input{width:100%;border:1px solid #94a3b8;border-radius:.45rem;padding:.55rem;color:#172b45}
                .pcpe-cycle-performance button{grid-column:1/-1}
                .pcpe-cycle-metric,.pcpe-cycle-metrics p{font-size:.78rem}
                .pcpe-cycle-weak{color:#b91c1c!important;font-weight:900}
                .pcpe-cycle-timer{padding:1rem;border:2px solid #2563eb;border-radius:.85rem;background:#eff6ff}
                .pcpe-cycle-timer>div:first-child{display:grid}
                .pcpe-cycle-timer strong{font-size:2.25rem;line-height:1;font-family:monospace}
                .pcpe-cycle-timer>div:last-child{display:flex;gap:.5rem}
                .pcpe-cycle-timer button+button{background:#334155}
                .pcpe-cycle-metrics{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:.35rem;padding:1rem;border-radius:.75rem;background:#f8fafc;border:1px solid #dbe3ea}
                .pcpe-cycle-metrics h3{grid-column:1/-1;font-weight:900}
                .pcpe-cycle-complete{display:flex;justify-content:flex-end}
                @media(max-width:900px){.pcpe-cycle-blocks{grid-template-columns:1fr}.pcpe-cycle-metrics{grid-template-columns:1fr}}
            `;
            document.head.appendChild(style);
        }

        function save() {
            try {
                localStorage.setItem(key, JSON.stringify(state));
            } catch (error) {
                console.error('Não foi possível salvar o ciclo de estudos PCPE:', error);
            }
        }

        function previousTopics() {
            const stored = state.dailyStatus[previousDayKey()];
            return stored && Array.isArray(stored.topics) ? stored.topics : [];
        }

        function previousDayKey() {
            const date = new Date();
            date.setDate(date.getDate() - 1);
            return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
        }

        function render() {
            day = buildDay(modules, state);
            state.weakTopics = weakTopics(state.records);
            const reviewRequired = Boolean(previousTopics().length);
            const currentStatus = state.dailyStatus[day.date] || {};
            if (!day.review) currentStatus.topics = day.topics;
            state.dailyStatus[day.date] = currentStatus;
            save();
            const phase = getPhase(state);
            const dayNumber = state.completedCycleDays % 7 + 1;
            const metrics = aggregateMetrics(state.records);

            const blockCards = day.review ? `
                <article class="pcpe-cycle-card">
                    <span class="pcpe-cycle-kicker">DIA 7 · CICLO SEMANAL</span>
                    <h3>Revisão geral, simulados de erros e redação</h3>
                    <p>Não avance matéria nova. Revise os tópicos vermelhos, faça uma bateria de erros e produza 1 redação.</p>
                    ${state.weakTopics.map(item => `<p class="pcpe-cycle-weak">${escapeHtml(item.topic)} · ${item.percent}%</p>`).join('')}
                    <label><input type="checkbox" data-weekly-review ${currentStatus.weeklyReview ? 'checked' : ''}> Revisão geral concluída</label>
                    <label><input type="checkbox" data-weekly-errors ${currentStatus.weeklyErrors ? 'checked' : ''}> Simulado de erros concluído</label>
                    <label><input type="checkbox" data-weekly-essay ${currentStatus.weeklyEssay ? 'checked' : ''}> 1 redação concluída</label>
                </article>` : day.topics.map((item, index) => `
                <article class="pcpe-cycle-card">
                    <div class="pcpe-cycle-card-head">
                        <span class="pcpe-cycle-kicker">BLOCO ${index + 1} · 120 MIN</span>
                        <strong>${escapeHtml(item.subject)}</strong>
                    </div>
                    <h3>${escapeHtml(item.topic)}</h3>
                    <div class="pcpe-cycle-phases">
                        <span>80 min · Teoria/PDF</span>
                        <span>40 min · Questões</span>
                    </div>
                    <button type="button" data-activate-block="${index}" class="pcpe-cycle-block-button" ${state.activeBlock === index ? 'disabled' : ''}>
                        ${state.activeBlock === index ? 'Bloco ativo' : 'Ativar este bloco'}
                    </button>
                    <label class="pcpe-law-check">
                        <input type="checkbox" data-law-topic="${escapeHtml(item.topic)}" ${state.lawRead[item.topic] ? 'checked' : ''}>
                        Leitura de lei seca concluída
                    </label>
                    <form class="pcpe-cycle-performance" data-performance-block="${index}">
                        <label>Total de questões feitas
                            <input type="number" min="0" max="500" name="total" value="${escapeHtml(currentStatus[`block${index}`]?.total || '')}">
                        </label>
                        <label>Acertos
                            <input type="number" min="0" max="500" name="correct" value="${escapeHtml(currentStatus[`block${index}`]?.correct || '')}">
                        </label>
                        <button type="submit">Registrar desempenho</button>
                    </form>
                    ${renderTopicMetric(item.topic, metrics)}
                </article>`).join('');

            root.innerHTML = `
                <section class="pcpe-cycle-panel">
                    <header class="pcpe-cycle-header">
                        <div>
                            <span class="pcpe-cycle-kicker">CICLO CONTÍNUO PCPE · ${phase === 'base' ? 'FASE 1 · BASE' : 'FASE 2 · EXPANSÃO'}</span>
                            <h2>Meta diária: 360 min · 6 horas líquidas</h2>
                        </div>
                        <div class="pcpe-cycle-progress">
                            <strong>${dayNumber}/7</strong>
                            <span>${state.completedStudyDays} dias de estudo concluídos</span>
                        </div>
                    </header>
                    <div class="pcpe-cycle-controls">
                        <button type="button" data-phase-toggle>${phase === 'base' ? 'Liberar matérias complementares agora' : 'Voltar à base do núcleo duro'}</button>
                        <span>Expansão automática após ${BASE_DAYS} dias de estudo</span>
                    </div>
                    ${reviewRequired ? `
                    <aside class="pcpe-cycle-review" data-review-24h>
                        <strong>Revisão obrigatória de 24 horas · 25 min</strong>
                        <p>Revise antes do Bloco 1: ${previousTopics().map(topic => escapeHtml(topic.topic || topic)).join(', ')}</p>
                        <button type="button" data-review-done ${currentStatus.review24h ? 'disabled' : ''}>${currentStatus.review24h ? 'Revisão concluída' : 'Concluir revisão de 25 min'}</button>
                    </aside>` : ''}
                    <div class="pcpe-cycle-blocks">${blockCards}</div>
                    ${day.review ? '' : `
                    <section class="pcpe-cycle-timer" data-cycle-timer>
                        <div>
                            <span id="pcpeCycleTimerPhase">Teoria · 80 min</span>
                            <strong id="pcpeCycleTimerDisplay">80:00</strong>
                        </div>
                        <div>
                            <button type="button" data-timer-toggle>Iniciar</button>
                            <button type="button" data-timer-next>Avançar fase</button>
                        </div>
                    </section>`}
                    <div class="pcpe-cycle-complete">
                        <button type="button" data-cycle-complete ${currentStatus.completed ? 'disabled' : ''}>
                            ${currentStatus.completed ? 'Dia concluído' : day.review ? 'Concluir dia de revisão geral' : 'Concluir dia de estudo'}
                        </button>
                    </div>
                    ${metrics.length ? `
                    <section class="pcpe-cycle-metrics">
                        <h3>Desempenho por tópico</h3>
                        ${metrics.map(item => `<p class="${item.percent < REVIEW_THRESHOLD ? 'pcpe-cycle-weak' : ''}">
                            <strong>${escapeHtml(item.topic)}</strong> · ${item.correct}/${item.total} · ${item.percent}%
                        </p>`).join('')}
                    </section>` : ''}
                </section>`;

            bind();
        }

        function renderTopicMetric(topic, metrics) {
            const metric = metrics.find(item => item.topic === topic);
            if (!metric) return '';
            return `<p class="pcpe-cycle-metric ${metric.percent < REVIEW_THRESHOLD ? 'pcpe-cycle-weak' : ''}">
                Rendimento acumulado: ${metric.percent}%${metric.percent < REVIEW_THRESHOLD ? ' · revisão prioritária' : ''}
            </p>`;
        }

        function bind() {
            root.querySelector('[data-phase-toggle]')?.addEventListener('click', () => {
                state.expanded = !state.expanded;
                save();
                render();
            });
            root.querySelector('[data-review-done]')?.addEventListener('click', event => {
                const status = state.dailyStatus[day.date] || {};
                status.review24h = true;
                state.dailyStatus[day.date] = status;
                save();
                event.currentTarget.disabled = true;
                event.currentTarget.textContent = 'Revisão concluída';
            });
            root.querySelectorAll('[data-law-topic]').forEach(input => {
                input.addEventListener('change', () => {
                    state.lawRead[input.dataset.lawTopic] = input.checked;
                    save();
                });
            });
            root.querySelectorAll('[data-activate-block]').forEach(button => {
                button.addEventListener('click', () => {
                    state.activeBlock = Number(button.dataset.activateBlock);
                    save();
                    render();
                });
            });
            root.querySelectorAll('[data-performance-block]').forEach(form => {
                form.addEventListener('submit', event => {
                    event.preventDefault();
                    const index = Number(form.dataset.performanceBlock);
                    const total = Number(new FormData(form).get('total'));
                    const correct = Number(new FormData(form).get('correct'));
                    if (!Number.isInteger(total) || total < 0 || !Number.isInteger(correct) || correct < 0 || correct > total) {
                        alert('Informe um total válido e acertos entre zero e o total de questões.');
                        return;
                    }
                    const item = day.topics[index];
                    state.records.push({ topic: item.topic, total, correct, date: day.date });
                    const status = state.dailyStatus[day.date] || {};
                    status[`block${index}`] = { total, correct };
                    state.dailyStatus[day.date] = status;
                    save();
                    render();
                });
            });
            root.querySelectorAll('[data-weekly-review],[data-weekly-errors],[data-weekly-essay]').forEach(input => {
                input.addEventListener('change', () => {
                    const status = state.dailyStatus[day.date] || {};
                    if (input.hasAttribute('data-weekly-review')) status.weeklyReview = input.checked;
                    if (input.hasAttribute('data-weekly-errors')) status.weeklyErrors = input.checked;
                    if (input.hasAttribute('data-weekly-essay')) status.weeklyEssay = input.checked;
                    state.dailyStatus[day.date] = status;
                    save();
                });
            });
            root.querySelector('[data-cycle-complete]')?.addEventListener('click', event => {
                const status = state.dailyStatus[day.date] || {};
                if (status.completed) return;
                if (!day.review && previousTopics().length && !status.review24h) {
                    alert('Conclua a revisão obrigatória de 24 horas antes de concluir o dia.');
                    root.querySelector('[data-review-24h]')?.scrollIntoView({ behavior: 'smooth' });
                    return;
                }
                if (day.review && !(status.weeklyReview && status.weeklyErrors && status.weeklyEssay)) {
                    alert('Conclua a revisão geral, o simulado de erros e a redação antes de finalizar o dia 7.');
                    return;
                }
                status.completed = true;
                state.dailyStatus[day.date] = status;
                state.completedCycleDays = (state.completedCycleDays + 1) % 7;
                if (!day.review) {
                    state.completedStudyDays += 1;
                    state.cursor += 3;
                }
                save();
                event.currentTarget.disabled = true;
                event.currentTarget.textContent = 'Dia concluído';
                render();
            });
            setupTimer();
        }

        function setupTimer() {
            const timerElement = root.querySelector('[data-cycle-timer]');
            if (!timerElement) return;
            const phaseElement = timerElement.querySelector('#pcpeCycleTimerPhase');
            const display = timerElement.querySelector('#pcpeCycleTimerDisplay');
            const toggle = timerElement.querySelector('[data-timer-toggle]');
            const next = timerElement.querySelector('[data-timer-next]');
            let mode = 'theory';
            let remaining = 80 * 60;
            let running = false;
            let endTime = 0;
            const activeTopic = day.topics[state.activeBlock] || day.topics[0];
            if (activeTopic) phaseElement.textContent = `Bloco ${state.activeBlock + 1} · ${activeTopic.topic} · 80 min`;

            const show = () => {
                const subjectLabel = activeTopic ? `${activeTopic.topic} · ` : '';
                const total = mode === 'theory' ? `${subjectLabel}Teoria · 80 min` : `${subjectLabel}Questões · 40 min`;
                phaseElement.textContent = total;
                display.textContent = `${String(Math.floor(remaining / 60)).padStart(2, '0')}:${String(remaining % 60).padStart(2, '0')}`;
            };
            const switchMode = () => {
                mode = mode === 'theory' ? 'questions' : 'theory';
                remaining = mode === 'theory' ? 80 * 60 : 40 * 60;
                show();
            };
            toggle.addEventListener('click', () => {
                const status = state.dailyStatus[day.date] || {};
                if (!day.review && previousTopics().length && !status.review24h) {
                    alert('Conclua a revisão obrigatória de 24 horas antes de iniciar o Bloco 1.');
                    root.querySelector('[data-review-24h]')?.scrollIntoView({ behavior: 'smooth' });
                    return;
                }
                if (running) {
                    remaining = Math.max(0, Math.ceil((endTime - Date.now()) / 1000));
                    running = false;
                    toggle.textContent = 'Continuar';
                } else {
                    running = true;
                    endTime = Date.now() + remaining * 1000;
                    toggle.textContent = 'Pausar';
                }
            });
            next.addEventListener('click', switchMode);
            timer = window.setInterval(() => {
                if (!running) return;
                remaining = Math.max(0, Math.ceil((endTime - Date.now()) / 1000));
                show();
                if (remaining === 0) {
                    running = false;
                    toggle.textContent = 'Iniciar';
                    switchMode();
                }
            }, 1000);
            show();
        }

        window.addEventListener('beforeunload', () => {
            if (timer) window.clearInterval(timer);
            save();
        });

        root.__pcpeCycleGetState = () => state;
        render();
    }

    return {
        BASE_SUBJECTS,
        COMPLEMENTARY_SUBJECTS,
        BASE_DAYS,
        REVIEW_THRESHOLD,
        isoToday,
        circularTopics,
        buildDay,
        isWeeklyReview,
        aggregateMetrics,
        weakTopics,
        getPhase,
        mount
    };
});
