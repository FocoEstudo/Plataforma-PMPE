'use strict';

const assert = require('node:assert/strict');
const { PLANS, getPlan, expirationForApproval } = require('../planos-acesso.js');

assert.equal(getPlan('semanal').amount, 6.25);
assert.equal(getPlan('mensal').amount, 24.90);
assert.equal(getPlan('vitalicio').amount, 99.90);
assert.equal(PLANS.semanal.durationMs, 7 * 24 * 60 * 60 * 1000);
assert.equal(PLANS.mensal.durationMs, 30 * 24 * 60 * 60 * 1000);
const approval = Date.UTC(2026, 0, 31, 14, 30);
assert.equal(expirationForApproval('semanal', approval), approval + 7 * 24 * 60 * 60 * 1000);
assert.equal(expirationForApproval('mensal', approval), Date.UTC(2026, 2, 2, 14, 30));
assert.equal(expirationForApproval('vitalicio', approval), null);
assert.throws(() => getPlan('anual'), RangeError);
assert.throws(() => getPlan('constructor'), RangeError);
assert.throws(() => expirationForApproval('semanal', NaN), RangeError);
assert.throws(() => expirationForApproval('mensal', NaN), RangeError);
assert.throws(() => expirationForApproval('mensal', -1), RangeError);
assert.throws(() => expirationForApproval('mensal', Number.MAX_SAFE_INTEGER), RangeError);
console.log('OK: planos, valores e prazos após a aprovação.');
