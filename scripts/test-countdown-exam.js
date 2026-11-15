'use strict';
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

const root = path.join(__dirname, '..');
const source = fs.readFileSync(path.join(root, 'countdown-exam.js'), 'utf8');

function countdown(examDate, now) {
    const element = { dataset: { examDate }, textContent: '' };
    class FixedDate extends Date {
        constructor(...args) { super(...(args.length ? args : [now])); }
    }
    vm.runInNewContext(source, {
        document: { querySelector: () => element },
        Date: FixedDate, Intl, setInterval: () => {}
    });
    return element.textContent;
}

assert.equal(countdown('2027-03-07', '2027-03-05T03:00:00Z'), '2 DIAS');
assert.equal(countdown('2027-03-07', '2027-03-07T02:59:59Z'), '1 DIA');
assert.equal(countdown('2027-03-07', '2027-03-07T03:00:00Z'), 'É HOJE!');
assert.equal(countdown('2027-03-07', '2027-03-08T03:00:00Z'), 'DATA PREVISTA PASSOU');
assert.equal(countdown('2027-03-21', '2027-03-07T15:00:00Z'), '14 DIAS');
for (const [file, date] of [['pcpe/index.html', '2027-03-07'], ['pppe/index.html', '2027-03-21']]) {
    const html = fs.readFileSync(path.join(root, file), 'utf8');
    assert.ok(html.includes(`data-exam-date="${date}"`), `${file}: data ausente`);
    assert.ok(html.includes('../countdown-exam.js'), `${file}: script ausente`);
}
console.log('Contagem das provas validada no horário de Recife.');
