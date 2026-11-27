(function (root, factory) {
    const api = factory();
    if (typeof module === 'object' && module.exports) module.exports = api;
    if (root) {
        root.PCPE_STUDY_CYCLE = api;
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
        'Legislação Estadual',
        'Noções de Arquivologia'
    ];
    const BASE_CYCLE_DAYS = 42;
    const REVIEW_THRESHOLD = 65;
    const THEORY_SECONDS = 80 * 60;
    const QUESTIONS_SECONDS = 40 * 60;
    const REVIEW_SECONDS = 25 * 60;
    const STUDY_TIME_ZONE = 'America/Recife';
    const STUDY_BLOCK_STARTS = ['08:00', '14:00', '19:00'];
    const STUDY_BLOCK_DURATION_MINUTES = 120;
    const STORAGE_PREFIX = 'pmpePcpeStudyCycleV1';

    function getBlockSchedule(startTime) {
        const [hours, minutes] = String(startTime).split(':').map(Number);
        const endMinutes = (hours * 60 + minutes + STUDY_BLOCK_DURATION_MINUTES) % (24 * 60);
        return {
            start: `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}`,
            end: `${String(Math.floor(endMinutes / 60)).padStart(2, '0')}:${String(endMinutes % 60).padStart(2, '0')}`
        };
    }

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

    function getVideoLessonsForTopic(catalog, module) {
        if (!module || !Array.isArray(catalog)) return [];
        if (module.moduleId !== undefined && module.moduleId !== null) {
            const moduleId = String(module.moduleId);
            return catalog.filter(lesson => String(lesson.moduleId) === moduleId);
        }
        return catalog.filter(lesson =>
            lesson.topic === module.topic ||
            (module.topic && typeof lesson.subject === 'string' && lesson.subject.endsWith(` · ${module.topic}`))
        );
    }

    function getPhase(state) {
        return state.expanded || state.totalCompletedDays >= BASE_CYCLE_DAYS ? 'expansion' : 'base';
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
        const nextSequence = (Number(state.totalCompletedDays) || 0) + 1;
        if (state.reopenedDay && state.reopenedDay.sequence === nextSequence) {
            return {
                ...state.reopenedDay,
                id: `cycle-${nextSequence}`,
                sequence: nextSequence,
                date: state.reopenedDay.date || today,
                completedStudyDays: state.completedStudyDays,
                completedCycleDays: state.completedCycleDays
            };
        }
        if (isWeeklyReview(state)) {
            return {
                id: `cycle-${nextSequence}`,
                sequence: nextSequence,
                cycleDayNumber: (Number(state.completedCycleDays) || 0) % 7 + 1,
                date: today,
                phase: getPhase(state),
                review: true,
                topics: state.weakTopics && state.weakTopics.length
                    ? state.weakTopics
                    : circularTopics(modules, getPhase(state), state.cursor).slice(0, 2),
                completedStudyDays: state.completedStudyDays,
                completedCycleDays: state.completedCycleDays
            };
        }
        return {
            id: `cycle-${nextSequence}`,
            sequence: nextSequence,
            cycleDayNumber: (Number(state.completedCycleDays) || 0) % 7 + 1,
            date: today,
            phase: getPhase(state),
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
            totalCompletedDays: 0,
            expanded: false,
            blockStarted: false,
            activeBlock: 0,
            dailyStatus: {},
            history: [],
            selectedDayId: null,
            records: [],
            lawRead: {},
            timer: null
        };
    }

    function createBlockProgress(dayId) {
        return {
            dayId,
            block: 0,
            phase: 'theory',
            remainingSeconds: THEORY_SECONDS,
            running: false,
            endsAt: null,
            completed: false
        };
    }

    function advanceBlockProgress(progress) {
        const next = { ...progress, running: false, endsAt: null };
        if (next.phase === 'theory') {
            next.phase = 'questions';
            next.remainingSeconds = QUESTIONS_SECONDS;
        } else if (next.block < 2) {
            next.block += 1;
            next.phase = 'theory';
            next.remainingSeconds = THEORY_SECONDS;
        } else {
            next.completed = true;
            next.remainingSeconds = 0;
        }
        return next;
    }

    function recordQuizResult(state, day, result) {
        const total = Number(result?.total);
        const correct = Number(result?.correct);
        const blockIndex = (day?.topics || []).findIndex(item => item.topic === result?.topic);
        if (
            blockIndex < 0 ||
            !Number.isInteger(total) || total < 0 ||
            !Number.isInteger(correct) || correct < 0 || correct > total
        ) return false;

        if (!Array.isArray(state.records)) state.records = [];
        if (!state.dailyStatus || typeof state.dailyStatus !== 'object') state.dailyStatus = {};
        if (result.source === 'manual') {
            state.records = state.records.filter(record =>
                !(record.source === 'manual' && record.dayId === day.id && record.topic === result.topic)
            );
        }
        state.records.push({
            topic: result.topic,
            total,
            correct,
            date: day.date || isoToday(),
            dayId: day.id,
            source: result.source || 'quiz'
        });
        const dayRecords = state.records.filter(record =>
            record.dayId === day.id && record.topic === result.topic
        );
        const status = state.dailyStatus[day.id] || {};
        status[`block${blockIndex}`] = dayRecords.reduce((sum, record) => ({
            total: sum.total + (Number(record.total) || 0),
            correct: sum.correct + (Number(record.correct) || 0)
        }), { total: 0, correct: 0 });
        state.dailyStatus[day.id] = status;
        return true;
    }

    function getLawSources(guides, topic, subject) {
        const officialSources = (guides && guides[topic] && Array.isArray(guides[topic].sources)
            ? guides[topic].sources
            : []).filter(source =>
            Array.isArray(source) &&
            typeof source[0] === 'string' &&
            typeof source[1] === 'string' &&
            /^https:\/\/(?:www\.)?(?:planalto\.gov\.br|legis\.alepe\.pe\.gov\.br)\//i.test(source[1])
        );
        if (officialSources.length) return officialSources.slice(0, 4);

        const title = String(topic || '').toLowerCase();
        const subjectName = String(subject || '').toLowerCase();
        if (/legislação estadual/.test(subjectName) || /pernambuco|estadual/.test(title)) {
            return [['Portal oficial da legislação de Pernambuco · Alepe Legis', 'https://legis.alepe.pe.gov.br/']];
        }
        if (/direito processual penal/.test(subjectName)) {
            return [['Código de Processo Penal · Planalto', 'https://www.planalto.gov.br/ccivil_03/decreto-lei/del3689.htm']];
        }
        if (/direito penal/.test(subjectName) && /aplicação da lei penal|teoria geral do crime|crimes contra/.test(title)) {
            return [['Código Penal · Planalto', 'https://www.planalto.gov.br/ccivil_03/decreto-lei/del2848compilado.htm']];
        }
        if (/direito constitucional/.test(subjectName)) {
            return [['Constituição Federal · Planalto', 'https://www.planalto.gov.br/ccivil_03/constituicao/constituicao.htm']];
        }
        return [['Portal oficial da legislação federal · Planalto', 'https://www.planalto.gov.br/ccivil_03/']];
    }

    function archiveDay(state, day, status = {}) {
        if (!Array.isArray(state.history)) state.history = [];
        if (state.history.some(item => item.id === day.id)) return state.history;
        state.history.push({
            id: day.id,
            sequence: day.sequence || state.totalCompletedDays + 1,
            cycleDayNumber: day.cycleDayNumber || ((day.sequence - 1) % 7) + 1,
            date: day.date || isoToday(),
            review: Boolean(day.review),
            phase: day.phase || getPhase(state),
            topics: (day.topics || []).map(item => ({ ...item })),
            status: { ...status }
        });
        return state.history;
    }

    function selectDay(state, id) {
        state.selectedDayId = id || null;
        return state.selectedDayId
            ? (state.history || []).find(item => item.id === state.selectedDayId) || null
            : null;
    }

    function reopenLastCompletedDay(state, id) {
        const history = Array.isArray(state.history) ? state.history : [];
        const last = history[history.length - 1];
        if (!last || last.id !== id || !last.status?.completed) return null;

        history.pop();
        state.totalCompletedDays = Math.max(0, (Number(state.totalCompletedDays) || history.length + 1) - 1);
        state.completedCycleDays = ((Number(state.completedCycleDays) || 0) + 6) % 7;
        if (!last.review) {
            state.completedStudyDays = Math.max(0, (Number(state.completedStudyDays) || 0) - 1);
            state.cursor = Math.max(0, (Number(state.cursor) || 0) - 3);
        }

        const sequence = state.totalCompletedDays + 1;
        const reopened = {
            ...last,
            id: `cycle-${sequence}`,
            sequence,
            cycleDayNumber: state.completedCycleDays + 1,
            status: { ...last.status, completed: false }
        };
        state.dailyStatus = state.dailyStatus || {};
        state.dailyStatus[reopened.id] = {
            ...reopened.status,
            topics: reopened.topics.map(item => ({ ...item })),
            completed: false
        };
        state.reopenedDay = reopened;
        state.selectedDayId = null;
        state.activeBlock = 0;
        state.blockProgress = createBlockProgress(reopened.id);
        return reopened;
    }

    function migrateHistory(state) {
        if (!Array.isArray(state.history) || !state.history.length) {
            state.history = Object.entries(state.dailyStatus || {})
                .filter(([, status]) => status && status.completed && Array.isArray(status.topics))
                .sort(([dateA], [dateB]) => dateA.localeCompare(dateB))
                .map(([date, status], index) => ({
                    id: `legacy-${index + 1}`,
                    sequence: index + 1,
                    cycleDayNumber: index % 7 + 1,
                    date,
                    review: Boolean(status.weeklyReview || status.weeklyErrors || status.weeklyEssay),
                    phase: 'base',
                    topics: status.topics.map(item => typeof item === 'string' ? { subject: '', topic: item } : ({ ...item })),
                    status: { ...status }
                }));
            state.totalCompletedDays = Math.max(Number(state.totalCompletedDays) || 0, state.history.length);
            if (state.history.length && !Number(state.completedCycleDays)) state.completedCycleDays = state.history.length % 7;
            if (!Number(state.completedStudyDays)) {
                state.completedStudyDays = state.history.filter(item => !item.review).length;
            }
        }
        state.totalCompletedDays = Math.max(Number(state.totalCompletedDays) || 0, state.history.length);
        return state;
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
        migrateHistory(state);

        const modules = Array.isArray(window.PCPE_MODULOS) ? window.PCPE_MODULOS : [];
        let day = buildDay(modules, state);
        let timer = null;
        let reviewTimer = null;
        let historical = false;

        root.closest('#missionsSection')?.classList.add('pcpe-cycle-active');
        if (!document.getElementById('pcpeCycleStyles')) {
            const style = document.createElement('style');
            style.id = 'pcpeCycleStyles';
            style.textContent = `
                #missionsSection.pcpe-cycle-active > .flex, #missionsSection.pcpe-cycle-active > p,
                #missionsSection.pcpe-cycle-active > .relative, #missionsSection.pcpe-cycle-active > .mt-8 { display:none !important; }
                .pcpe-cycle-panel{display:grid;gap:1rem;color:#1d2a36;min-width:0}
                .pcpe-cycle-header,.pcpe-cycle-controls,.pcpe-cycle-card-head,.pcpe-cycle-timer{display:flex;justify-content:space-between;align-items:center;gap:1rem;flex-wrap:wrap}
                .pcpe-cycle-reminders{display:flex;justify-content:space-between;align-items:center;gap:1rem;flex-wrap:wrap;padding:1rem;border:1px solid #bfdbfe;border-radius:.75rem;background:#eff6ff;color:#1e3a8a}
                .pcpe-cycle-reminders p{font-size:.82rem}
                .pcpe-cycle-reminders button{border:0;border-radius:.5rem;padding:.65rem .85rem;background:#1d4ed8;color:#fff;font-size:.8rem;font-weight:800;cursor:pointer}
                .pcpe-cycle-reminders button:disabled{opacity:.65;cursor:wait}
                .pcpe-cycle-reminder-status{flex-basis:100%;font-size:.75rem}
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
                .pcpe-cycle-blocks{display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,340px),1fr));align-items:start;gap:.75rem}
                .pcpe-cycle-card{display:grid;align-content:start;gap:.65rem;min-width:0;padding:1rem;border:1px solid #cbd5df;border-radius:.85rem;background:white;box-shadow:0 8px 24px rgba(15,23,42,.08)}
                .pcpe-cycle-card h3,.pcpe-cycle-card strong,.pcpe-cycle-coverage summary{overflow-wrap:anywhere}
                .pcpe-cycle-card h3{font-size:1.05rem;font-weight:900;line-height:1.35}
                .pcpe-cycle-card-head{align-items:flex-start}
                .pcpe-cycle-card-head strong{flex:1;text-align:right}
                .pcpe-cycle-card label{display:flex;align-items:flex-start;gap:.5rem;font-size:.84rem}
                .pcpe-cycle-card input[type=checkbox]{margin-top:.15rem}
                .pcpe-cycle-phases{display:grid;gap:.35rem;font-size:.78rem;font-weight:800}
                .pcpe-cycle-phases span{padding:.45rem;border-radius:.45rem;background:#edf4ff;color:#1e40af}
                .pcpe-cycle-phases span+span{background:#fff7ed;color:#9a3412}
                .pcpe-cycle-block-button{border:0;border-radius:.45rem;padding:.45rem .65rem;font-weight:800;background:#2563eb;color:white}
                .pcpe-cycle-block-button:disabled{background:#9ca3af;cursor:default}
                .pcpe-cycle-actions{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:.4rem}
                .pcpe-cycle-actions button{width:100%;min-width:0;white-space:normal;overflow-wrap:anywhere;border:1px solid #174d3a;border-radius:.45rem;padding:.55rem .58rem;font-size:.75rem;line-height:1.3;font-weight:800;background:#fff;color:#174d3a;cursor:pointer}
                .pcpe-cycle-actions button:nth-child(2){border-color:#1d4ed8;color:#1d4ed8}
                .pcpe-cycle-actions button:nth-child(3){border-color:#b45309;color:#9a3412}
                .pcpe-cycle-coverage{padding:.65rem;border:1px solid #d5e0e8;border-radius:.55rem;background:#f8fafc;color:#25364a;font-size:.78rem}
                .pcpe-cycle-coverage summary{cursor:pointer;font-weight:900}
                .pcpe-cycle-coverage ul{padding-left:1.25rem;list-style:disc}
                .pcpe-cycle-coverage-note{padding:.5rem;border-left:3px solid #d97706;background:#fff7ed}
                .pcpe-cycle-video-list{display:grid;gap:.45rem;padding-left:1.25rem;list-style:decimal}
                .pcpe-cycle-video-list li{display:grid;gap:.3rem}
                .pcpe-cycle-video-list button{justify-self:start;max-width:100%;white-space:normal;overflow-wrap:anywhere;border:0;border-radius:.4rem;padding:.4rem .55rem;background:#1d4ed8;color:white;font-size:.72rem;font-weight:800}
                .pcpe-cycle-video-list label{font-size:.72rem}
                .pcpe-cycle-video-list small,.pcpe-cycle-no-video{font-size:.68rem;color:#59697a}
                .pcpe-cycle-history-picker{display:grid;gap:.25rem;font-size:.78rem;font-weight:900}
                .pcpe-cycle-history-picker select{width:min(100%,28rem);min-width:0;border:1px solid #94a3b8;border-radius:.45rem;padding:.5rem;background:white;color:#1d2a36}
                .pcpe-cycle-history-note{padding:.75rem;border-radius:.6rem;background:#eff6ff;color:#1e3a8a;font-size:.82rem}
                .pcpe-cycle-history-note button{margin-top:.55rem;border:0;border-radius:.45rem;padding:.5rem .7rem;background:#174d3a;color:#fff;font-size:.78rem;font-weight:800;cursor:pointer}
                .pcpe-cycle-law-check{display:flex;align-items:center;justify-content:space-between;gap:.5rem;padding:.65rem;border:1px solid #b6d7c6;border-radius:.55rem;background:#effaf2;font-size:.8rem;font-weight:800}
                .pcpe-cycle-law-check strong{color:#9a3412}
                .pcpe-cycle-law-check input:checked+span{color:#166534}
                .pcpe-cycle-law-actions{display:flex;flex-wrap:wrap;gap:.4rem}
                .pcpe-cycle-law-actions a{min-width:0;max-width:100%;overflow-wrap:anywhere;border:1px solid #166534;border-radius:.45rem;padding:.45rem .6rem;background:#fff;color:#166534;font-size:.74rem;font-weight:800;text-decoration:none}
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
                @media(max-width:640px){
                    .pcpe-cycle-header,.pcpe-cycle-controls{align-items:stretch}
                    .pcpe-cycle-reminders{align-items:stretch;flex-direction:column}
                    .pcpe-cycle-reminders button{width:100%;white-space:normal}
                    .pcpe-cycle-header .pcpe-cycle-progress{text-align:left}
                    .pcpe-cycle-controls{flex-direction:column}
                    .pcpe-cycle-controls>*{width:100%}
                    .pcpe-cycle-controls button{white-space:normal}
                    .pcpe-cycle-actions{grid-template-columns:1fr}
                    .pcpe-cycle-performance{grid-template-columns:1fr}
                    .pcpe-cycle-performance button{grid-column:auto}
                    .pcpe-cycle-timer>div:last-child{width:100%}
                    .pcpe-cycle-timer button{width:100%}
                }
                @media(max-width:380px){.pcpe-cycle-card{padding:.75rem}.pcpe-cycle-header h2{font-size:1.1rem}}
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
            const previous = state.history[state.history.length - 1];
            return previous && Array.isArray(previous.topics) ? previous.topics : [];
        }

        function getModule(topic) {
            return modules.find(module => module.topic === topic) || null;
        }

        function requiresLawReading(subject) {
            return /Direito|Legislação/.test(subject || '');
        }

        function lawSourcesHtml(topic, subject) {
            return getLawSources(window.PCPE_TOPIC_GUIDES, topic, subject)
                .map(([label, url]) => `<a href="${escapeHtml(url)}" target="_blank" rel="noopener noreferrer">Abrir lei seca · ${escapeHtml(label)}</a>`)
                .join('');
        }

        function encodeApplicationServerKey(value) {
            const padding = '='.repeat((4 - value.length % 4) % 4);
            const base64 = (value + padding).replace(/-/g, '+').replace(/_/g, '/');
            return Uint8Array.from(atob(base64), character => character.charCodeAt(0));
        }

        function getReminderDeviceId() {
            const storageKey = 'pcpeStudyReminderDeviceV1';
            let deviceId = localStorage.getItem(storageKey);
            if (!deviceId) {
                deviceId = typeof crypto.randomUUID === 'function'
                    ? crypto.randomUUID()
                    : Array.from(crypto.getRandomValues(new Uint8Array(16)), byte => byte.toString(16).padStart(2, '0')).join('');
                localStorage.setItem(storageKey, deviceId);
            }
            return deviceId;
        }

        async function toggleStudyReminders(button) {
            const status = root.querySelector('[data-reminder-status]');
            button.disabled = true;
            if (status) status.textContent = 'Configurando notificações...';
            try {
                const cloud = window.PCPE_CLOUD;
                const user = cloud?.auth?.currentUser;
                if (!user || !cloud?.db || !cloud?.fs) throw new Error('Entre na sua conta PCPE para ativar os lembretes.');
                if (!('Notification' in window) || !('serviceWorker' in navigator) || !('PushManager' in window)) {
                    throw new Error('Este navegador não oferece suporte a notificações push.');
                }
                if (!window.PCPE_PUSH_VAPID_PUBLIC_KEY) {
                    throw new Error('A chave pública de notificações ainda não foi configurada.');
                }

                const { doc, setDoc, serverTimestamp } = cloud.fs;
                const reference = doc(cloud.db, 'pcpeStudyReminders', user.uid, 'devices', getReminderDeviceId());
                if (state.remindersEnabled) {
                    await setDoc(reference, { uid: user.uid, enabled: false, updatedAt: serverTimestamp() }, { merge: true });
                    state.remindersEnabled = false;
                    save();
                    button.textContent = 'Ativar lembretes';
                    if (status) status.textContent = 'Lembretes desativados neste dispositivo.';
                    return;
                }

                let permission = Notification.permission;
                if (permission === 'default') permission = await Notification.requestPermission();
                if (permission !== 'granted') throw new Error('Permita notificações para receber os lembretes. Verifique as configurações do navegador.');

                const registration = await navigator.serviceWorker.register('./pcpe-study-reminder-sw.js', { scope: './' });
                const readyRegistration = await navigator.serviceWorker.ready;
                const pushRegistration = readyRegistration || registration;
                const existingSubscription = await pushRegistration.pushManager.getSubscription();
                const subscription = existingSubscription || await pushRegistration.pushManager.subscribe({
                    userVisibleOnly: true,
                    applicationServerKey: encodeApplicationServerKey(window.PCPE_PUSH_VAPID_PUBLIC_KEY)
                });

                await setDoc(reference, {
                    uid: user.uid,
                    enabled: true,
                    subscription: subscription.toJSON(),
                    timeZone: STUDY_TIME_ZONE,
                    times: STUDY_BLOCK_STARTS,
                    updatedAt: serverTimestamp()
                }, { merge: true });
                state.remindersEnabled = true;
                save();
                button.textContent = 'Desativar lembretes';
                if (status) status.textContent = `Lembretes ativos para ${STUDY_BLOCK_STARTS.join(', ')} (horário de Pernambuco).`;
            } catch (error) {
                console.error('Não foi possível configurar os lembretes de estudo PCPE:', error);
                if (status) status.textContent = error.message || 'Não foi possível configurar os lembretes.';
            } finally {
                button.disabled = false;
            }
        }

        function getVideoLessons(topic) {
            const module = (window.PMPE_EDITAL_MODULES || []).find(item => item.topic === topic) || getModule(topic);
            return getVideoLessonsForTopic(window.PCPE_VIDEO_CATALOG, module);
        }

        function isVideoWatched(id) {
            try {
                const watched = JSON.parse(localStorage.getItem('pcpeVideoLessonWatchedV1') || '{}');
                return Boolean(watched && watched[id]);
            } catch (error) {
                console.error('Não foi possível ler o progresso das videoaulas:', error);
                return false;
            }
        }

        function videoCoverageHtml(topic) {
            const module = getModule(topic);
            const scope = Array.isArray(module?.escopo) && module.escopo.length ? module.escopo : [topic];
            const lessons = getVideoLessons(topic);
            const watchedCount = lessons.filter(lesson => isVideoWatched(lesson.id)).length;
            const scopeHtml = scope.map(item => `<li>${escapeHtml(item)}</li>`).join('');
            const videosHtml = lessons.length
                ? `<ol class="pcpe-cycle-video-list">${lessons.map(lesson => `
                    <li>
                        <button type="button" data-cycle-open-video="${escapeHtml(lesson.id)}">Assistir: ${escapeHtml(lesson.title)}</button>
                        <label><input type="checkbox" data-cycle-video-watched="${escapeHtml(lesson.id)}" ${isVideoWatched(lesson.id) ? 'checked' : ''}>
                            Aula assistida</label>
                        <small>Título identificado como aula complementar deste tópico; não presuma que cobre todo o escopo. Confira todos os itens no PDF.</small>
                    </li>`).join('')}</ol>`
                : '<p class="pcpe-cycle-no-video">Não há videoaula verificada vinculada a este tópico. Estude todo o escopo pelo PDF/apostila.</p>';
            return `<details class="pcpe-cycle-coverage" open>
                <summary data-cycle-video-summary data-scope-count="${scope.length}">Escopo completo do edital · ${scope.length} itens · Videoaulas assistidas ${watchedCount}/${lessons.length}</summary>
                <p><strong>Conteúdo que precisa ser estudado por inteiro:</strong></p>
                <ul>${scopeHtml}</ul>
                <p class="pcpe-cycle-coverage-note">Videoaulas são complementares. O título da aula não garante cobertura integral; use o PDF acima para fechar todos os itens listados.</p>
                ${videosHtml}
            </details>`;
        }

        function refreshVideoProgress() {
            root.querySelectorAll('.pcpe-cycle-coverage').forEach(details => {
                const summary = details.querySelector('[data-cycle-video-summary]');
                const inputs = [...details.querySelectorAll('[data-cycle-video-watched]')];
                if (!summary) return;
                const watchedCount = inputs.filter(input => isVideoWatched(input.dataset.cycleVideoWatched)).length;
                summary.textContent = `Escopo completo do edital · ${summary.dataset.scopeCount} itens · Videoaulas assistidas ${watchedCount}/${inputs.length}`;
                inputs.forEach(input => {
                    input.checked = isVideoWatched(input.dataset.cycleVideoWatched);
                });
            });
        }

        function handleCycleQuizCompleted(event) {
            const result = event.detail;
            const currentDay = buildDay(modules, state);
            if (!result || result.dayId !== currentDay.id || !recordQuizResult(state, currentDay, result)) {
                console.error('Não foi possível associar o resultado da bateria ao card PCPE:', result);
                return;
            }
            save();
            render();
        }

        function render() {
            const selectedDay = selectDay(state, state.selectedDayId);
            historical = Boolean(selectedDay);
            day = selectedDay || buildDay(modules, state);
            state.weakTopics = weakTopics(state.records);
            const dayKey = day.id;
            const currentStatus = state.dailyStatus[dayKey] || day.status || {};
            const reviewRequired = !historical && Boolean(previousTopics().length && !currentStatus.review24h);
            if (!historical && !day.review) {
                if (!state.blockProgress || state.blockProgress.dayId !== day.id) {
                    state.blockProgress = createBlockProgress(day.id);
                    state.activeBlock = 0;
                }
                state.activeBlock = state.blockProgress.block;
                if (!currentStatus.review24h && (!state.reviewTimer || state.reviewTimer.dayId !== day.id)) {
                    state.reviewTimer = {
                        dayId: day.id,
                        remainingSeconds: REVIEW_SECONDS,
                        running: false,
                        endsAt: null
                    };
                }
            }
            if (!historical) {
                if (!day.review) currentStatus.topics = day.topics;
                state.dailyStatus[dayKey] = currentStatus;
                save();
            }
            const phase = day.phase || getPhase(state);
            const dayNumber = historical ? (day.cycleDayNumber || ((day.sequence - 1) % 7) + 1) : state.completedCycleDays % 7 + 1;
            const metrics = aggregateMetrics(state.records);

            const blockCards = day.review ? `
                <article class="pcpe-cycle-card">
                    <span class="pcpe-cycle-kicker">DIA 7 · CICLO SEMANAL</span>
                    <h3>Revisão geral, simulados de erros e redação</h3>
                    <p>Não avance matéria nova. Revise os tópicos vermelhos, faça uma bateria de erros e produza 1 redação.</p>
                    ${state.weakTopics.map(item => `<p class="pcpe-cycle-weak">${escapeHtml(item.topic)} · ${item.percent}%</p>`).join('')}
                    <label><input type="checkbox" data-weekly-review ${currentStatus.weeklyReview ? 'checked' : ''} ${historical ? 'disabled' : ''}> Revisão geral concluída</label>
                    <label><input type="checkbox" data-weekly-errors ${currentStatus.weeklyErrors ? 'checked' : ''} ${historical ? 'disabled' : ''}> Simulado de erros concluído</label>
                    <label><input type="checkbox" data-weekly-essay ${currentStatus.weeklyEssay ? 'checked' : ''} ${historical ? 'disabled' : ''}> 1 redação concluída</label>
                </article>` : day.topics.map((item, index) => `
                <article class="pcpe-cycle-card">
                    <div class="pcpe-cycle-card-head">
                        <span class="pcpe-cycle-kicker">BLOCO ${index + 1} · ${getBlockSchedule(STUDY_BLOCK_STARTS[index]).start}–${getBlockSchedule(STUDY_BLOCK_STARTS[index]).end} · 120 MIN</span>
                        <strong>${escapeHtml(item.subject)}</strong>
                    </div>
                    <h3>${escapeHtml(item.topic)}</h3>
                    <div class="pcpe-cycle-actions">
                        <button type="button" data-cycle-pdf="${escapeHtml(item.topic)}">Abrir PDF/Apostila</button>
                        <button type="button" data-cycle-quiz="${escapeHtml(item.topic)}">Fazer bateria do tópico</button>
                    </div>
                    ${videoCoverageHtml(item.topic)}
                    <div class="pcpe-cycle-phases">
                        <span>80 min · Teoria/PDF</span>
                        <span>40 min · Questões</span>
                    </div>
                    <span class="pcpe-cycle-kicker">${index < state.activeBlock || state.blockProgress?.completed ? 'BLOCO CONCLUÍDO' : index === state.activeBlock ? 'BLOCO ATIVO' : 'PRÓXIMO BLOCO'}</span>
                    ${requiresLawReading(item.subject) ? `
                    <div class="pcpe-cycle-law-reading">
                        <label class="pcpe-cycle-law-check">
                            <input type="checkbox" data-law-topic="${escapeHtml(item.topic)}" ${state.lawRead[item.topic] ? 'checked' : ''} ${historical ? 'disabled' : ''}>
                            <span>Leitura de lei seca · ${state.lawRead[item.topic] ? 'Concluída' : 'Pendente'}</span>
                        </label>
                        <div class="pcpe-cycle-law-actions">${lawSourcesHtml(item.topic, item.subject)}</div>
                    </div>` : ''}
                    <form class="pcpe-cycle-performance" data-performance-block="${index}">
                        <label>Questões extras feitas
                            <input type="number" min="0" max="500" name="total" value="${escapeHtml(currentStatus[`manualBlock${index}`]?.total ?? currentStatus[`block${index}`]?.total ?? '')}" ${historical ? 'disabled' : ''}>
                        </label>
                        <label>Acertos extras
                            <input type="number" min="0" max="500" name="correct" value="${escapeHtml(currentStatus[`manualBlock${index}`]?.correct ?? currentStatus[`block${index}`]?.correct ?? '')}" ${historical ? 'disabled' : ''}>
                        </label>
                        <button type="submit" ${historical ? 'disabled' : ''}>Registrar questões extras</button>
                    </form>
                    ${renderTopicMetric(item.topic, metrics)}
                </article>`).join('');

            root.innerHTML = `
                <section class="pcpe-cycle-panel">
                    <header class="pcpe-cycle-header">
                        <div>
                            <span class="pcpe-cycle-kicker">${historical ? `CONSULTA DO DIA ${day.sequence} · ` : 'CICLO CONTÍNUO PCPE · '}${phase === 'base' ? 'FASE 1 · BASE' : 'FASE 2 · EXPANSÃO'}</span>
                            <h2>Meta diária: 360 min · 6 horas líquidas</h2>
                        </div>
                        <div class="pcpe-cycle-progress">
                            <strong>${dayNumber}/7</strong>
                            <span>${state.completedStudyDays} dias de estudo concluídos</span>
                        </div>
                    </header>
                    <section class="pcpe-cycle-reminders">
                        <div>
                            <strong>Horários fixos · Pernambuco</strong>
                            <p>Blocos: ${STUDY_BLOCK_STARTS.map((start, index) => {
                                const schedule = getBlockSchedule(start);
                                return `${index + 1}º ${schedule.start}–${schedule.end}`;
                            }).join(' · ')}</p>
                            <p data-reminder-status aria-live="polite">${state.remindersEnabled ? 'Lembretes push ativos neste dispositivo.' : 'Ative notificações push para receber um aviso no início de cada bloco, mesmo com a plataforma fechada.'}</p>
                        </div>
                        <button type="button" data-toggle-reminders>${state.remindersEnabled ? 'Desativar lembretes' : 'Ativar lembretes'}</button>
                    </section>
                    <div class="pcpe-cycle-controls">
                        <label class="pcpe-cycle-history-picker">Dia da missão
                            <select data-cycle-history>
                                <option value="" ${historical ? '' : 'selected'}>Dia atual · ${day.review ? 'revisão semanal' : 'próximo dia do ciclo'}</option>
                                ${state.history.map(item => `<option value="${escapeHtml(item.id)}" ${historical && item.id === day.id ? 'selected' : ''}>Dia ${item.sequence} · ${item.review ? 'Revisão geral' : item.topics.map(topic => escapeHtml(topic.topic)).join(' / ')} · ${escapeHtml(item.date)}</option>`).join('')}
                            </select>
                        </label>
                        <button type="button" data-phase-toggle ${historical ? 'disabled' : ''}>${phase === 'base' ? 'Liberar matérias complementares agora' : 'Voltar à base do núcleo duro'}</button>
                        <span>Expansão automática após 6 ciclos completos (42 dias)</span>
                    </div>
                    ${historical ? '<p class="pcpe-cycle-history-note">Você está consultando um dia já concluído. Escolha “Dia atual” no seletor para continuar o ciclo.</p>' : ''}
                    ${historical && day.status?.completed ? `
                    <aside class="pcpe-cycle-history-note">
                        <strong>Dia concluído</strong>
                        ${day.id === state.history[state.history.length - 1]?.id
                            ? '<button type="button" data-reopen-day>Desmarcar dia concluído</button>'
                            : '<p>Para desmarcar este dia, reabra primeiro o dia concluído mais recente.</p>'}
                    </aside>` : ''}
                    ${reviewRequired ? `
                    <aside class="pcpe-cycle-review" data-review-24h>
                        <strong>Revisão obrigatória de 24 horas · 25 min</strong>
                        <p>Revise antes do Bloco 1: ${previousTopics().map(topic => escapeHtml(topic.topic || topic)).join(', ')}</p>
                        <div class="pcpe-cycle-timer">
                            <strong data-review-timer>25:00</strong>
                            <button type="button" data-review-toggle ${currentStatus.review24h ? 'disabled' : ''}>${currentStatus.review24h ? 'Revisão concluída' : state.reviewTimer?.running ? 'Pausar revisão' : state.reviewTimer?.remainingSeconds < REVIEW_SECONDS ? 'Continuar revisão' : 'Iniciar revisão'}</button>
                        </div>
                    </aside>` : ''}
                    <div class="pcpe-cycle-blocks">${blockCards}</div>
                    ${day.review || historical ? '' : `
                    <section class="pcpe-cycle-timer" data-cycle-timer>
                        <div>
                            <span data-cycle-timer-phase>Teoria · 80 min</span>
                            <strong data-cycle-timer-display>80:00</strong>
                        </div>
                        <div>
                            <button type="button" data-timer-toggle ${state.blockProgress?.completed ? 'disabled' : ''}>${state.blockProgress?.running ? 'Pausar' : 'Iniciar'}</button>
                        </div>
                    </section>`}
                    <div class="pcpe-cycle-complete">
                        <button type="button" data-cycle-complete ${currentStatus.completed || historical || (!day.review && !state.blockProgress?.completed) ? 'disabled' : ''}>
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
                Questões registradas: ${metric.correct}/${metric.total} acertos · ${metric.percent}%${metric.percent < REVIEW_THRESHOLD ? ' · revisão prioritária' : ''}
            </p>`;
        }

        function bind() {
            root.querySelector('[data-toggle-reminders]')?.addEventListener('click', event => {
                void toggleStudyReminders(event.currentTarget);
            });
            root.querySelector('[data-cycle-history]')?.addEventListener('change', event => {
                selectDay(state, event.currentTarget.value);
                save();
                render();
            });
            root.querySelector('[data-reopen-day]')?.addEventListener('click', event => {
                if (!historical || day.id !== state.history[state.history.length - 1]?.id) return;
                if (!window.confirm('Desmarcar este dia e retomá-lo como a missão atual? O cronômetro do dia será reiniciado; os registros de questões e lei seca serão mantidos.')) return;
                if (!reopenLastCompletedDay(state, day.id)) {
                    console.error('Não foi possível reabrir o último dia concluído do ciclo PCPE.', day.id);
                    return;
                }
                save();
                render();
            });
            root.querySelector('[data-phase-toggle]')?.addEventListener('click', () => {
                if (historical) return;
                state.expanded = !state.expanded;
                save();
                render();
            });
            root.querySelector('[data-review-toggle]')?.addEventListener('click', event => {
                if (historical) return;
                const review = state.reviewTimer;
                if (!review || review.dayId !== day.id) return;
                if (review.running) {
                    review.remainingSeconds = Math.max(0, Math.ceil((review.endsAt - Date.now()) / 1000));
                    review.running = false;
                    review.endsAt = null;
                } else {
                    review.running = true;
                    review.endsAt = Date.now() + review.remainingSeconds * 1000;
                }
                save();
                event.currentTarget.textContent = review.running ? 'Pausar revisão' : 'Continuar revisão';
                setupReviewTimer();
            });
            root.querySelectorAll('[data-law-topic]').forEach(input => {
                input.addEventListener('change', () => {
                    if (historical) return;
                    state.lawRead[input.dataset.lawTopic] = input.checked;
                    const status = input.parentElement.querySelector('span');
                    if (status) status.textContent = `Leitura de lei seca · ${input.checked ? 'Concluída' : 'Pendente'}`;
                    save();
                });
            });
            root.querySelectorAll('[data-cycle-video-watched]').forEach(input => {
                input.addEventListener('change', () => {
                    const watchedKey = 'pcpeVideoLessonWatchedV1';
                    let watched = {};
                    try {
                        watched = JSON.parse(localStorage.getItem(watchedKey) || '{}');
                        if (!watched || typeof watched !== 'object' || Array.isArray(watched)) watched = {};
                    } catch (error) {
                        console.error('Não foi possível ler o progresso das videoaulas:', error);
                    }
                    watched[input.dataset.cycleVideoWatched] = input.checked;
                    try {
                        localStorage.setItem(watchedKey, JSON.stringify(watched));
                        window.dispatchEvent(new CustomEvent('mission-videos:changed'));
                        refreshVideoProgress();
                    } catch (error) {
                        console.error('Não foi possível salvar o progresso da videoaula:', error);
                        input.checked = !input.checked;
                        alert('Não foi possível salvar a aula assistida neste navegador.');
                    }
                });
            });
            root.querySelectorAll('[data-cycle-open-video]').forEach(button => {
                button.addEventListener('click', () => {
                    if (typeof window.openPcpeVideoLesson === 'function') {
                        window.openPcpeVideoLesson(button.dataset.cycleOpenVideo);
                    }
                });
            });
            root.querySelectorAll('[data-cycle-pdf]').forEach(button => {
                button.addEventListener('click', () => {
                    const topic = button.dataset.cyclePdf;
                    const module = (window.PMPE_EDITAL_MODULES || modules).find(item => item.topic === topic);
                    const index = (window.PMPE_EDITAL_MODULES || modules).findIndex(item => item.topic === topic);
                    if (module?.mat) window.openMaterialModal(module.mat);
                    else if (index >= 0) window.openMaterialModal(`mat_mission_${index + 1}`);
                    else window.activateDashboardView('pdfs');
                });
            });
            root.querySelectorAll('[data-cycle-video]').forEach(button => {
                button.addEventListener('click', () => {
                    const topic = button.dataset.cycleVideo;
                    window.activateDashboardView('videos');
                    const picker = document.getElementById('videoLessonPicker');
                    if (picker) {
                        const option = [...picker.options].find(item =>
                            item.text.toLowerCase().includes(topic.toLowerCase()) ||
                            topic.toLowerCase().includes(item.text.toLowerCase())
                        );
                        if (option) {
                            picker.value = option.value;
                            picker.dispatchEvent(new Event('change', { bubbles: true }));
                        }
                    }
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                });
            });
            root.querySelectorAll('[data-cycle-quiz]').forEach(button => {
                button.addEventListener('click', () => {
                    if (typeof window.openCycleTopicQuiz === 'function') {
                        window.openCycleTopicQuiz(button.dataset.cycleQuiz, historical ? null : day.id);
                    } else {
                        window.activateDashboardView('simulations');
                    }
                });
            });
            root.querySelectorAll('[data-performance-block]').forEach(form => {
                form.addEventListener('submit', event => {
                    event.preventDefault();
                    if (historical) return;
                    const index = Number(form.dataset.performanceBlock);
                    const total = Number(new FormData(form).get('total'));
                    const correct = Number(new FormData(form).get('correct'));
                    if (!Number.isInteger(total) || total < 0 || !Number.isInteger(correct) || correct < 0 || correct > total) {
                        alert('Informe um total válido e acertos entre zero e o total de questões.');
                        return;
                    }
                    const item = day.topics[index];
                    if (!recordQuizResult(state, day, { topic: item.topic, total, correct, source: 'manual' })) {
                        alert('Não foi possível associar o resultado ao tópico deste bloco.');
                        return;
                    }
                    const status = state.dailyStatus[day.id] || {};
                    status[`manualBlock${index}`] = { total, correct };
                    state.dailyStatus[day.id] = status;
                    save();
                    render();
                });
            });
            root.querySelectorAll('[data-weekly-review],[data-weekly-errors],[data-weekly-essay]').forEach(input => {
                input.addEventListener('change', () => {
                    if (historical) return;
                    const status = state.dailyStatus[day.id] || {};
                    if (input.hasAttribute('data-weekly-review')) status.weeklyReview = input.checked;
                    if (input.hasAttribute('data-weekly-errors')) status.weeklyErrors = input.checked;
                    if (input.hasAttribute('data-weekly-essay')) status.weeklyEssay = input.checked;
                    state.dailyStatus[day.id] = status;
                    save();
                });
            });
            root.querySelector('[data-cycle-complete]')?.addEventListener('click', event => {
                if (historical) return;
                const status = state.dailyStatus[day.id] || {};
                if (status.completed) return;
                if (!day.review && previousTopics().length && !status.review24h) {
                    alert('Conclua a revisão obrigatória de 24 horas antes de concluir o dia.');
                    root.querySelector('[data-review-24h]')?.scrollIntoView({ behavior: 'smooth' });
                    return;
                }
                if (!day.review && !state.blockProgress?.completed) {
                    alert('Conclua os três blocos de 120 minutos, incluindo as fases de 80 minutos de teoria e 40 minutos de questões.');
                    root.querySelector('[data-cycle-timer]')?.scrollIntoView({ behavior: 'smooth' });
                    return;
                }
                if (day.review && !(status.weeklyReview && status.weeklyErrors && status.weeklyEssay)) {
                    alert('Conclua a revisão geral, o simulado de erros e a redação antes de finalizar o dia 7.');
                    return;
                }
                status.completed = true;
                state.dailyStatus[day.id] = status;
                archiveDay(state, day, status);
                state.totalCompletedDays += 1;
                state.completedCycleDays = (state.completedCycleDays + 1) % 7;
                if (!day.review) {
                    state.completedStudyDays += 1;
                    state.cursor += 3;
                }
                state.reopenedDay = null;
                state.selectedDayId = null;
                save();
                event.currentTarget.disabled = true;
                event.currentTarget.textContent = 'Dia concluído';
                render();
            });
            setupTimer();
        }

        function setupTimer() {
            if (timer) window.clearInterval(timer);
            timer = null;
            const timerElement = root.querySelector('[data-cycle-timer]');
            if (!timerElement) return;
            const progress = state.blockProgress;
            if (!progress || progress.dayId !== day.id) return;
            const phaseElement = timerElement.querySelector('[data-cycle-timer-phase]');
            const display = timerElement.querySelector('[data-cycle-timer-display]');
            const toggle = timerElement.querySelector('[data-timer-toggle]');
            const activeTopic = day.topics[progress.block] || day.topics[0];
            const phaseLabel = progress.phase === 'theory' ? 'Teoria · 80 min' : 'Questões · 40 min';

            const show = () => {
                const subjectLabel = activeTopic ? `${activeTopic.topic} · ` : '';
                phaseElement.textContent = progress.completed
                    ? 'Todos os blocos concluídos'
                    : `Bloco ${progress.block + 1} · ${subjectLabel}${phaseLabel}`;
                display.textContent = `${String(Math.floor(progress.remainingSeconds / 60)).padStart(2, '0')}:${String(progress.remainingSeconds % 60).padStart(2, '0')}`;
            };
            const finishPhase = () => {
                state.blockProgress = advanceBlockProgress(progress);
                state.activeBlock = state.blockProgress.block;
                save();
                render();
            };
            const update = () => {
                if (!progress.running) return;
                progress.remainingSeconds = Math.max(0, Math.ceil((progress.endsAt - Date.now()) / 1000));
                show();
                if (progress.remainingSeconds === 0) finishPhase();
            };
            toggle.addEventListener('click', () => {
                if (historical) return;
                const status = state.dailyStatus[day.id] || {};
                if (!day.review && previousTopics().length && !status.review24h) {
                    alert('Conclua a revisão obrigatória de 24 horas antes de iniciar o Bloco 1.');
                    root.querySelector('[data-review-24h]')?.scrollIntoView({ behavior: 'smooth' });
                    return;
                }
                if (progress.running) {
                    progress.remainingSeconds = Math.max(0, Math.ceil((progress.endsAt - Date.now()) / 1000));
                    progress.running = false;
                    progress.endsAt = null;
                } else {
                    progress.running = true;
                    progress.endsAt = Date.now() + progress.remainingSeconds * 1000;
                }
                save();
                show();
                toggle.textContent = progress.running ? 'Pausar' : 'Continuar';
            });
            timer = window.setInterval(() => {
                update();
            }, 1000);
            show();
            if (progress.running) update();
        }

        function setupReviewTimer() {
            if (reviewTimer) window.clearInterval(reviewTimer);
            reviewTimer = null;
            const display = root.querySelector('[data-review-timer]');
            if (!display || !state.reviewTimer || state.reviewTimer.dayId !== day.id) return;
            const progress = state.reviewTimer;
            const toggle = root.querySelector('[data-review-toggle]');
            const update = () => {
                if (!progress.running) return;
                progress.remainingSeconds = Math.max(0, Math.ceil((progress.endsAt - Date.now()) / 1000));
                display.textContent = `${String(Math.floor(progress.remainingSeconds / 60)).padStart(2, '0')}:${String(progress.remainingSeconds % 60).padStart(2, '0')}`;
                if (progress.remainingSeconds === 0) {
                    progress.running = false;
                    progress.endsAt = null;
                    const status = state.dailyStatus[day.id] || {};
                    status.review24h = true;
                    state.dailyStatus[day.id] = status;
                    save();
                    render();
                }
            };
            display.textContent = `${String(Math.floor(progress.remainingSeconds / 60)).padStart(2, '0')}:${String(progress.remainingSeconds % 60).padStart(2, '0')}`;
            reviewTimer = window.setInterval(() => update(), 1000);
            if (progress.running) update();
        }

        window.addEventListener('beforeunload', () => {
            if (timer) window.clearInterval(timer);
            if (reviewTimer) window.clearInterval(reviewTimer);
            save();
        });

        root.__pcpeCycleGetState = () => state;
        window.addEventListener('pcpe-cycle:quiz-completed', handleCycleQuizCompleted);
        window.addEventListener('mission-videos:changed', refreshVideoProgress);
        window.addEventListener('storage', refreshVideoProgress);
        render();
    }

    return {
        BASE_SUBJECTS,
        COMPLEMENTARY_SUBJECTS,
        BASE_CYCLE_DAYS,
        REVIEW_THRESHOLD,
        THEORY_SECONDS,
        QUESTIONS_SECONDS,
        REVIEW_SECONDS,
        getBlockSchedule,
        isoToday,
        circularTopics,
        getVideoLessonsForTopic,
        getLawSources,
        buildDay,
        isWeeklyReview,
        aggregateMetrics,
        weakTopics,
        createBlockProgress,
        advanceBlockProgress,
        recordQuizResult,
        getPhase,
        archiveDay,
        selectDay,
        reopenLastCompletedDay,
        migrateHistory,
        mount
    };
});
