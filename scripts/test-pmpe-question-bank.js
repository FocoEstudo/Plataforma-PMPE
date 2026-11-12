'use strict';

const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

const root = path.resolve(__dirname, '..');
const index = fs.readFileSync(path.join(root, 'index.html'), 'utf8');
const supplementTag = index.indexOf('<script src="questoes-pmpe-complementares.js"></script>');
const engineTag = index.indexOf('<script src="simulado-engine.js"></script>');
assert.ok(supplementTag >= 0 && engineTag > supplementTag, 'Supplement must load before the simulado engine');
const engineSource = fs.readFileSync(path.join(root, 'simulado-engine.js'), 'utf8');
assert.match(engineSource, /app\.id === 'pmpe' && window\.PMPE_QUIZ_SUPPLEMENT/, 'Simulado engine must merge the PMPE supplement');
const inlineScripts = [...index.matchAll(/<script(?![^>]*\bsrc=)[^>]*>([\s\S]*?)<\/script>/gi)].map(match => match[1]);
const source = inlineScripts.find(script => script.includes('populateMassiveDatabase'));
assert.ok(source, 'Could not find the legacy PMPE question database in index.html');

const modules = source.match(/const editalModules = \[[\s\S]*?\n\s*\];/);
assert.ok(modules, 'Could not find PMPE edital modules');
const bankStart = source.indexOf('const baseQuizTemplates =');
const bankEnd = source.indexOf('let currentQuizQuestions = []', bankStart);
assert.ok(bankStart >= 0 && bankEnd > bankStart, 'Could not isolate the legacy PMPE question bank');
const sandbox = { window: {}, console: { warn() {} }, Math, Date, Map, Set };
vm.createContext(sandbox);
const legacyJson = vm.runInContext(
    `${modules[0]}\n${source.slice(bankStart, bankEnd)}\npopulateMassiveDatabase(); JSON.stringify(baseQuizTemplates)`,
    sandbox,
    { timeout: 10000 }
);
const before = JSON.parse(legacyJson);

const supplementWindow = {};
const supplementPath = path.join(root, 'questoes-pmpe-complementares.js');
vm.runInNewContext(fs.readFileSync(supplementPath, 'utf8'), {
    window: supplementWindow,
    globalThis: supplementWindow
});
const supplements = supplementWindow.PMPE_QUIZ_SUPPLEMENT;
assert.ok(supplements && typeof supplements === 'object', 'PMPE supplement did not register');

const after = Object.fromEntries(Object.entries(before).map(([subject, questions]) => [subject, [...questions]]));
Object.entries(supplements).forEach(([subject, questions]) => {
    assert.ok(Array.isArray(questions), `${subject}: supplement must be an array`);
    after[subject] ||= [];
    after[subject].push(...questions);
});

const normalize = text => String(text).trim().replace(/\s+/g, ' ').toLocaleLowerCase('pt-BR');
const seen = new Map();
let totalBefore = 0;
let totalAfter = 0;
for (const [subject, questions] of Object.entries(after)) {
    totalBefore += before[subject]?.length || 0;
    totalAfter += questions.length;
    for (const [index, question] of questions.entries()) {
        assert.equal(typeof question.text, 'string', `${subject}[${index}]: missing enunciado`);
        assert.ok(question.text.trim(), `${subject}[${index}]: empty enunciado`);
        assert.ok(Array.isArray(question.options) && question.options.length >= 4 && question.options.length <= 5,
            `${subject}[${index}]: expected four or five alternatives`);
        assert.ok(Number.isInteger(question.correct) && question.correct >= 0 && question.correct < question.options.length,
            `${subject}[${index}]: invalid answer index`);
        assert.ok(typeof question.exp === 'string' && question.exp.trim(), `${subject}[${index}]: missing answer explanation`);
        const key = normalize(question.text);
        assert.ok(!seen.has(key), `${subject}[${index}]: duplicate enunciado (also in ${seen.get(key)})`);
        seen.set(key, subject);
    }
}

const additions = Object.fromEntries(Object.keys(after).map(subject => [subject, supplements[subject]?.length || 0]));
assert.ok(Object.values(additions).reduce((sum, count) => sum + count, 0) >= 200, 'Fewer than 200 new questions');
assert.ok(totalAfter >= 577, `Expected at least 577 unique questions; found ${totalAfter}`);
assert.equal(seen.size, totalAfter, 'Question pool contains duplicate enunciados');

console.log(`Questões únicas no pool: ${totalBefore} antes; ${totalAfter} depois (${totalAfter - totalBefore} novas).`);
for (const subject of Object.keys(after)) {
    console.log(`${subject}: ${before[subject].length} -> ${after[subject].length} (+${additions[subject] || 0})`);
}
