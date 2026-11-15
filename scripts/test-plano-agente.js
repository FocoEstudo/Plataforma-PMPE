const assert = require('node:assert/strict');
const plan = require('../pcpe/plano-agente.js');

assert.equal(plan.SUBJECTS.length, 10);
assert.equal(plan.SUBJECTS.reduce((sum, subject) => sum + subject.percent, 0), 100);
assert.equal(plan.SUBJECTS.filter(subject => subject.block === 'P1').reduce((sum, subject) => sum + subject.percent, 0), 33);
assert.equal(plan.SUBJECTS.filter(subject => subject.block === 'P2').reduce((sum, subject) => sum + subject.percent, 0), 67);
assert.deepEqual(plan.phaseWeekCounts(17), [5, 4, 4, 2, 2]);
for (let weeks = 1; weeks <= 32; weeks++) {
  const counts = plan.phaseWeekCounts(weeks);
  assert.equal(counts.reduce((sum, count) => sum + count, 0), weeks);
  if (weeks >= 5) assert.ok(counts.every(count => count >= 1));
}

const schedule = plan.buildSchedule('2026-11-12', plan.EXAM_DATE, 4, 6);
assert.equal(schedule.daysRemaining, 115);
assert.equal(schedule.totalWeeks, 17);
assert.equal(schedule.weeklyHours, 24);
assert.equal(schedule.phases.reduce((sum, phase) => sum + phase.lastWeek - phase.firstWeek + 1, 0), 17);
assert.equal(schedule.weeks[0].startDate, '2026-11-12');
assert.equal(schedule.weeks.at(-1).endDate, plan.EXAM_DATE);
assert.ok(schedule.weeks.some(week => week.buffer));
for (const phase of schedule.phases) {
  assert.equal(phase.weeklyTargets.length, 10);
  assert.ok(Math.abs(phase.weeklyTargets.reduce((sum, target) => sum + target.hours, 0) - 24) < 1e-9);
}

const target = plan.pointPlan(14, 27);
assert.equal(target.total, 41);
assert.equal(target.belowMinimum, false);
assert.equal(target.p1.reduce((sum, item) => sum + item.estimatedQuestions, 0), 20);
assert.equal(target.p2.reduce((sum, item) => sum + item.estimatedQuestions, 0), 40);
assert.equal(target.p1.reduce((sum, item) => sum + item.targetHits, 0), 14);
assert.equal(target.p2.reduce((sum, item) => sum + item.targetHits, 0), 27);
assert.equal(plan.pointPlan(10, 19).belowMinimum, true);
assert.equal(plan.pointPlan(10, 20).belowMinimum, false);
for (let p1 = 0; p1 <= 20; p1++) for (let p2 = 0; p2 <= 40; p2++) {
  const allocation = plan.pointPlan(p1, p2);
  for (const item of [...allocation.p1, ...allocation.p2]) assert.ok(item.targetHits <= item.estimatedQuestions);
}
const shortWeek = plan.buildSchedule('2026-11-12', plan.EXAM_DATE, 1, 1);
assert.ok(Math.abs(shortWeek.phases[0].weeklyTargets.reduce((sum, target) => sum + target.hours, 0) - 1) < 1e-9);
assert.ok(plan.SUBJECTS.find(subject => subject.id === 'legislacao').topics.some(topic => topic.includes('105-B')));
assert.ok(plan.SUBJECTS.find(subject => subject.id === 'penal').topics.some(topic => topic.includes('11.343/2006')));

console.log('test-plano-agente: ok');