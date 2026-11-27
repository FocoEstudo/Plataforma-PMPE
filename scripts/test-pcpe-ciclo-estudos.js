'use strict';

const assert = require('node:assert/strict');
const api = require('../pcpe/ciclo-estudos.js');

const modules = [
    ...api.BASE_SUBJECTS.map((subject, index) => ({ sub: subject, topic: `${subject} · tópico ${index + 1}` })),
    ...api.COMPLEMENTARY_SUBJECTS.map((subject, index) => ({ sub: subject, topic: `${subject} · tópico ${index + 1}` }))
];

const baseState = {
    cursor: 0,
    completedStudyDays: 0,
    completedCycleDays: 0,
    totalCompletedDays: 0,
    expanded: false,
    records: []
};

assert.equal(api.getPhase(baseState), 'base');
assert.equal(api.circularTopics(modules, 'base', 0).length, 3);
assert.equal(
    api.circularTopics(modules, 'base', 0).every((item, index) => item.subject === api.BASE_SUBJECTS[index]),
    true
);
assert.equal(api.getPhase({ ...baseState, completedStudyDays: api.BASE_DAYS }), 'expansion');
const mappedVideos = [
    { moduleId: 7, title: 'Video 1' },
    { moduleId: '7', title: 'Video 2' },
    { moduleId: 8, title: 'Outro tópico' }
];
assert.deepEqual(
    api.getVideoLessonsForTopic(mappedVideos, { moduleId: 7 }).map(item => item.title),
    ['Video 1', 'Video 2']
);
assert.deepEqual(
    api.getVideoLessonsForTopic([{ subject: 'Língua Portuguesa · Interpretação' }], {
        sub: 'Língua Portuguesa',
        topic: 'Interpretação'
    }).length,
    1
);
assert.deepEqual(
    api.getLawSources({
        'Aplicação da lei penal': {
            sources: [
                ['Código Penal', 'https://www.planalto.gov.br/ccivil_03/decreto-lei/del2848compilado.htm'],
                ['Fonte não oficial', 'https://example.com/law']
            ]
        }
    }, 'Aplicação da lei penal', 'Noções de Direito Penal'),
    [['Código Penal', 'https://www.planalto.gov.br/ccivil_03/decreto-lei/del2848compilado.htm']]
);
assert.match(api.getLawSources({}, 'Inquérito policial', 'Noções de Direito Processual Penal')[0][1], /del3689\.htm$/);
assert.match(api.getLawSources({}, 'Estatuto dos Policiais Civis de Pernambuco', 'Legislação Estadual')[0][1], /legis\.alepe\.pe\.gov\.br/);

assert.equal(api.isWeeklyReview({ completedCycleDays: 5 }), false);
assert.equal(api.isWeeklyReview({ completedCycleDays: 6 }), true);
assert.equal(api.THEORY_SECONDS, 80 * 60);
assert.equal(api.QUESTIONS_SECONDS, 40 * 60);
assert.equal(api.REVIEW_SECONDS, 25 * 60);
let progress = api.createBlockProgress('cycle-1');
for (let block = 0; block < 3; block++) {
    assert.equal(progress.block, block);
    assert.equal(progress.phase, 'theory');
    assert.equal(progress.remainingSeconds, api.THEORY_SECONDS);
    progress = api.advanceBlockProgress(progress);
    assert.equal(progress.phase, 'questions');
    assert.equal(progress.remainingSeconds, api.QUESTIONS_SECONDS);
    progress = api.advanceBlockProgress(progress);
}
assert.equal(progress.completed, true);
const quizState = { records: [], dailyStatus: {} };
const quizDay = { id: 'cycle-3', date: '2026-01-01', topics: [{ topic: 'Interpretação' }] };
assert.equal(api.recordQuizResult(quizState, quizDay, { topic: 'Interpretação', total: 10, correct: 7 }), true);
assert.equal(api.recordQuizResult(quizState, quizDay, { topic: 'Interpretação', total: 5, correct: 4 }), true);
assert.deepEqual(quizState.dailyStatus['cycle-3'].block0, { total: 15, correct: 11 });
assert.equal(api.recordQuizResult(quizState, quizDay, { topic: 'Interpretação', total: 2, correct: 1, source: 'manual' }), true);
assert.equal(api.recordQuizResult(quizState, quizDay, { topic: 'Interpretação', total: 3, correct: 2, source: 'manual' }), true);
assert.equal(quizState.records.length, 3);
assert.equal(api.recordQuizResult(quizState, quizDay, { topic: 'Outro tema', total: 5, correct: 5 }), false);
assert.equal(api.aggregateMetrics(quizState.records)[0].percent, 72);
assert.equal(api.buildDay(modules, { ...baseState, completedCycleDays: 6 }).review, true);

const records = [
    { topic: 'Noções de Direito Penal', total: 20, correct: 12 },
    { topic: 'Língua Portuguesa', total: 10, correct: 9 },
    { topic: 'Noções de Direito Penal', total: 10, correct: 4 }
];
const metrics = api.aggregateMetrics(records);
assert.equal(metrics.find(item => item.topic === 'Noções de Direito Penal').percent, 53);
assert.equal(metrics.find(item => item.topic === 'Língua Portuguesa').percent, 90);
assert.deepEqual(api.weakTopics(records).map(item => item.topic), ['Noções de Direito Penal']);

const today = api.isoToday();
assert.match(today, /^\d{4}-\d{2}-\d{2}$/);

const historyState = { history: [], selectedDayId: null, totalCompletedDays: 0 };
const dayOne = { ...api.buildDay(modules, baseState), topics: [{ subject: 'Língua Portuguesa', topic: 'Interpretação' }] };
api.archiveDay(historyState, dayOne, { completed: true });
historyState.totalCompletedDays = 1;
const dayTwo = { ...api.buildDay(modules, { ...baseState, totalCompletedDays: 1 }), topics: [{ subject: 'Noções de Direito Penal', topic: 'Lei penal' }] };
api.archiveDay(historyState, dayTwo, { completed: true });
assert.equal(historyState.history.length, 2);
assert.equal(api.selectDay(historyState, dayOne.id).topics[0].topic, 'Interpretação');
assert.equal(api.selectDay(historyState, ''), null);

const reopenState = {
    history: [{
        id: 'legacy-1',
        sequence: 1,
        cycleDayNumber: 1,
        date: '2026-01-01',
        review: false,
        phase: 'base',
        topics: [{ subject: 'Língua Portuguesa', topic: 'Interpretação' }],
        status: { completed: true }
    }],
    totalCompletedDays: 1,
    completedCycleDays: 1,
    completedStudyDays: 1,
    cursor: 3,
    dailyStatus: { 'legacy-1': { completed: true } }
};
const reopenedDay = api.reopenLastCompletedDay(reopenState, 'legacy-1');
assert.equal(reopenedDay.id, 'cycle-1');
assert.equal(reopenedDay.status.completed, false);
assert.equal(reopenState.history.length, 0);
assert.equal(reopenState.completedStudyDays, 0);
assert.equal(reopenState.cursor, 0);
assert.equal(api.buildDay(modules, reopenState).topics[0].topic, 'Interpretação');
assert.equal(api.reopenLastCompletedDay(reopenState, 'missing-day'), null);
const reopenReviewState = {
    history: [{
        id: 'cycle-7',
        sequence: 7,
        cycleDayNumber: 7,
        review: true,
        topics: [{ subject: 'Revisão', topic: 'Erros prioritários' }],
        status: { completed: true }
    }],
    totalCompletedDays: 7,
    completedCycleDays: 0,
    completedStudyDays: 6,
    cursor: 18,
    dailyStatus: {}
};
api.reopenLastCompletedDay(reopenReviewState, 'cycle-7');
assert.equal(reopenReviewState.completedCycleDays, 6);
assert.equal(api.buildDay(modules, reopenReviewState).review, true);

const migrated = api.migrateHistory({
    history: [],
    completedStudyDays: 1,
    completedCycleDays: 1,
    dailyStatus: {
        '2026-11-26': {
            completed: true,
            topics: [{ subject: 'Língua Portuguesa', topic: 'Interpretação' }]
        }
    }
});
assert.equal(migrated.history[0].topics[0].topic, 'Interpretação');
assert.equal(api.selectDay(migrated, migrated.history[0].id).sequence, 1);

console.log('OK: ciclo, timers, métricas, aulas, lei seca, reabertura de dias e migração legada.');
