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

assert.equal(api.isWeeklyReview({ completedCycleDays: 5 }), false);
assert.equal(api.isWeeklyReview({ completedCycleDays: 6 }), true);
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
console.log('OK: ciclo base/expansão, dia 7, 65% de corte e 3 tópicos circulares.');
