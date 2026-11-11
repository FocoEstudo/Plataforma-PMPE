'use strict';

const assert = require('node:assert/strict');
const card = require('../functions/credit-card-policy.js');
const plans = require('../planos-acesso.js');
const id = 'bf5ed437-1697-4e16-a4cc-e47534c6792b';
const base = 'https://example.test/Plataforma-PMPE';

assert.equal(card.MONTHLY_AMOUNT, plans.getPlan('mensal').amount);
assert.equal(card.LIFETIME_AMOUNT, plans.getPlan('vitalicio').amount);
assert.equal(card.MAX_INSTALLMENTS, 12);
for (const concurso of ['pmpe', 'pppe', 'pcpe']) {
  const lifetime = { id, concurso, plan: 'vitalicio' };
  const monthly = { id, concurso, plan: 'mensal', subscriptionId: 'subscription-id' };
  const preference = card.createLifetimePreference(lifetime, base);
  const subscription = card.createMonthlySubscription(monthly, base, 'student@example.test');
  assert.equal(preference.items[0].unit_price, 99.90);
  assert.equal(preference.items[0].id, `${concurso}-vitalicio`);
  assert.equal(preference.external_reference, id);
  assert.equal(preference.payment_methods.installments, 12);
  assert.ok(preference.back_urls.success.startsWith(base));
  assert.equal(subscription.status, 'pending');
  assert.deepEqual(subscription.auto_recurring, { frequency: 1, frequency_type: 'months', transaction_amount: 24.90, currency_id: 'BRL' });
  assert.ok(subscription.back_url.startsWith(base));

  const payment = { id: 123, external_reference: id, status: 'approved', currency_id: 'BRL', transaction_amount: 99.90 };
  assert.equal(card.verifyLifetimePayment(lifetime, payment), true);
  for (const change of [{ status: 'pending' }, { status: 'refunded' }, { currency_id: 'USD' }, { transaction_amount: 74.90 }, { external_reference: 'other' }]) {
    assert.equal(card.verifyLifetimePayment(lifetime, { ...payment, ...change }), false);
  }
  const preapproval = { id: 'subscription-id', external_reference: id, auto_recurring: subscription.auto_recurring };
  const invoice = { preapproval_id: 'subscription-id', payment: { id: 321, status: 'approved' }, currency_id: 'BRL', transaction_amount: 24.90 };
  const installment = { id: 321, status: 'approved', currency_id: 'BRL', transaction_amount: 24.90 };
  assert.equal(card.verifyMonthlyPayment(monthly, preapproval, invoice, installment), true);
  assert.equal(card.verifyMonthlyPayment(monthly, { ...preapproval, external_reference: 'other' }, invoice, installment), false);
  assert.equal(card.verifyMonthlyPayment(monthly, preapproval, { ...invoice, preapproval_id: 'other' }, installment), false);
  assert.equal(card.verifyMonthlyPayment(monthly, preapproval, { ...invoice, payment: { id: 321, status: 'pending' } }, installment), false);
  assert.equal(card.verifyMonthlyPayment(monthly, preapproval, invoice, { ...installment, status: 'refunded' }), false);
  assert.equal(card.verifyMonthlyPayment(monthly, preapproval, invoice, { ...installment, id: 322 }), false);
  assert.equal(card.verifyMonthlyPayment(monthly, preapproval, invoice, { ...installment, transaction_amount: 0 }), false);
  assert.equal(card.verifyMonthlyPayment(monthly, preapproval, { ...invoice, payment: { status: 'approved' } }, { ...installment, id: undefined }), false);
  assert.equal(card.verifyMonthlyPayment(monthly, preapproval, invoice, { ...installment, transaction_amount_refunded: 5 }), false);
  assert.equal(card.verifyLifetimePayment(lifetime, { ...payment, transaction_amount_refunded: 1 }), false);
}
assert.throws(() => card.createLifetimePreference({ id, concurso: 'constructor', plan: 'vitalicio' }, base), TypeError);
assert.throws(() => card.createLifetimePreference({ id: 'invalid', concurso: 'pcpe', plan: 'vitalicio' }, base), TypeError);
assert.throws(() => card.createMonthlySubscription({ id, concurso: 'pcpe', plan: 'mensal' }, base, 'invalid'), TypeError);
assert.throws(() => card.createLifetimePreference({ id, concurso: 'pcpe', plan: 'vitalicio' }, 'http://example.test'), TypeError);
console.log('OK: parâmetros e validação de pagamentos para os três concursos.');
