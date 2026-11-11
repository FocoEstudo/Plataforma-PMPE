'use strict';

const { PLANS, getPlan } = require('../planos-acesso.js');

const CONCURSOS = Object.freeze({
  pmpe: Object.freeze({ label: 'PMPE', returnPath: '/index.html' }),
  pppe: Object.freeze({ label: 'PPPE', returnPath: '/pppe/index.html' }),
  pcpe: Object.freeze({ label: 'PCPE', returnPath: '/pcpe/conta.html' })
});
const MAX_INSTALLMENTS = 12;

function orderDetails(order) {
  if (!order || typeof order !== 'object' ||
      typeof order.id !== 'string' ||
      !/^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(order.id) ||
      !Object.hasOwn(CONCURSOS, order.concurso) ||
      !Object.hasOwn(PLANS, order.plan)) {
    throw new TypeError('Pedido de pagamento inválido.');
  }
  return { concurso: CONCURSOS[order.concurso], plan: getPlan(order.plan) };
}

function returnUrl(siteBase, path) {
  const base = new URL(siteBase);
  if (base.protocol !== 'https:' || base.username || base.password || base.search || base.hash) {
    throw new TypeError('A URL de retorno deve ser HTTPS e não pode conter credenciais, parâmetros ou fragmento.');
  }
  return `${base.href.replace(/\/+$/, '')}${path}`;
}

function createCheckoutPreference(order, siteBase) {
  const { concurso, plan } = orderDetails(order);
  const target = returnUrl(siteBase, concurso.returnPath);
  return {
    items: [{
      id: `${order.concurso}-${plan.id}`,
      title: `Operação ${concurso.label} - acesso ${plan.label.toLowerCase()}`,
      quantity: 1,
      currency_id: 'BRL',
      unit_price: plan.amount
    }],
    external_reference: order.id,
    payment_methods: { installments: plan.id === 'vitalicio' ? MAX_INSTALLMENTS : 1 },
    back_urls: {
      success: `${target}?payment=success`,
      pending: `${target}?payment=pending`,
      failure: `${target}?payment=failure`
    },
    auto_return: 'approved'
  };
}

function amountMatches(amount, expected) {
  if (typeof amount !== 'number' && (typeof amount !== 'string' || !/^\d+(?:\.\d{1,2})?$/.test(amount))) return false;
  return Number.isFinite(Number(amount)) && Number(amount) === expected;
}

function validPaymentId(id) {
  return (typeof id === 'string' && /^[1-9]\d*$/.test(id)) ||
    (typeof id === 'number' && Number.isSafeInteger(id) && id > 0);
}

function verifyApprovedPayment(order, payment) {
  const { plan } = orderDetails(order);
  return !!payment && validPaymentId(payment.id) && String(payment.external_reference) === order.id &&
    payment.status === 'approved' && payment.currency_id === 'BRL' &&
    amountMatches(payment.transaction_amount, plan.amount) &&
    (payment.transaction_amount_refunded === undefined || amountMatches(payment.transaction_amount_refunded, 0));
}

module.exports = Object.freeze({
  CONCURSOS, MAX_INSTALLMENTS, createCheckoutPreference, verifyApprovedPayment
});
