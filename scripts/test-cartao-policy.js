'use strict';

const assert = require('node:assert/strict');
const card = require('../functions/credit-card-policy.js');
const plans = require('../planos-acesso.js');
const id = 'bf5ed437-1697-4e16-a4cc-e47534c6792b';
const base = 'https://example.test/Plataforma-PMPE';

assert.equal(card.MAX_INSTALLMENTS, 12);
for (const concurso of ['pmpe', 'pppe', 'pcpe']) {
  for (const planId of ['semanal', 'mensal', 'vitalicio']) {
    const plan = plans.getPlan(planId);
    const order = { id, concurso, plan: planId };
    const preference = card.createCheckoutPreference(order, base);
    assert.equal(preference.items[0].unit_price, plan.amount);
    assert.equal(preference.items[0].id, `${concurso}-${planId}`);
    assert.equal(preference.external_reference, id);
    assert.equal(preference.payment_methods.installments, planId === 'vitalicio' ? 12 : 1);
    assert.equal(preference.payment_methods.excluded_payment_types, undefined);
    assert.ok(preference.back_urls.success.startsWith(base));
    assert.equal(preference.auto_return, 'approved');

    const payment = { id: 123, external_reference: id, status: 'approved', currency_id: 'BRL', transaction_amount: plan.amount };
    assert.equal(card.verifyApprovedPayment(order, payment), true);
    for (const change of [{ status: 'pending' }, { status: 'refunded' }, { currency_id: 'USD' }, { transaction_amount: 0 }, { external_reference: 'other' }]) {
      assert.equal(card.verifyApprovedPayment(order, { ...payment, ...change }), false);
    }
    assert.equal(card.verifyApprovedPayment(order, { ...payment, transaction_amount_refunded: 1 }), false);
  }
}
assert.throws(() => card.createCheckoutPreference({ id, concurso: 'constructor', plan: 'vitalicio' }, base), TypeError);
assert.throws(() => card.createCheckoutPreference({ id, concurso: 'pcpe', plan: 'invalido' }, base), TypeError);
assert.throws(() => card.createCheckoutPreference({ id: 'invalid', concurso: 'pcpe', plan: 'vitalicio' }, base), TypeError);
assert.throws(() => card.createCheckoutPreference({ id, concurso: 'pcpe', plan: 'semanal' }, 'http://example.test'), TypeError);
console.log('OK: preferências de checkout e validação de pagamentos nos três concursos e planos.');
