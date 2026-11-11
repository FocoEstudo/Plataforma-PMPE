'use strict';

const CONCURSOS = Object.freeze({
  pmpe: Object.freeze({ label: 'PMPE', returnPath: '/index.html' }),
  pppe: Object.freeze({ label: 'PPPE', returnPath: '/pppe/index.html' }),
  pcpe: Object.freeze({ label: 'PCPE', returnPath: '/pcpe/conta.html' })
});
const MONTHLY_AMOUNT = 24.90;
const LIFETIME_AMOUNT = 99.90;
const MAX_INSTALLMENTS = 12;

function orderDetails(order, plan) {
  if (!order || typeof order !== 'object' ||
      typeof order.id !== 'string' ||
      !/^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(order.id) ||
      !Object.hasOwn(CONCURSOS, order.concurso) || order.plan !== plan) {
    throw new TypeError('Pedido de pagamento inválido.');
  }
  return CONCURSOS[order.concurso];
}

function returnUrl(siteBase, path) {
  const base = new URL(siteBase);
  if (base.protocol !== 'https:' || base.username || base.password || base.search || base.hash) {
    throw new TypeError('A URL de retorno deve ser HTTPS e não pode conter credenciais, parâmetros ou fragmento.');
  }
  return `${base.href.replace(/\/+$/, '')}${path}`;
}

function createLifetimePreference(order, siteBase) {
  const concurso = orderDetails(order, 'vitalicio');
  const target = returnUrl(siteBase, concurso.returnPath);
  return {
    items: [{
      id: `${order.concurso}-vitalicio`,
      title: `Operação ${concurso.label} - acesso vitalício`,
      quantity: 1,
      currency_id: 'BRL',
      unit_price: LIFETIME_AMOUNT
    }],
    external_reference: order.id,
    payment_methods: {
      excluded_payment_types: [
        { id: 'ticket' }, { id: 'bank_transfer' }, { id: 'atm' },
        { id: 'debit_card' }, { id: 'prepaid_card' }
      ],
      installments: MAX_INSTALLMENTS
    },
    back_urls: {
      success: `${target}?payment=success`,
      pending: `${target}?payment=pending`,
      failure: `${target}?payment=failure`
    }
  };
}

function createMonthlySubscription(order, siteBase, payerEmail) {
  const concurso = orderDetails(order, 'mensal');
  if (typeof payerEmail !== 'string' || payerEmail.length > 254 || !/^[^\s@]+@[^\s@]+$/.test(payerEmail)) {
    throw new TypeError('Email do pagador inválido.');
  }
  return {
    reason: `Operação ${concurso.label} - assinatura mensal`,
    external_reference: order.id,
    payer_email: payerEmail,
    auto_recurring: {
      frequency: 1,
      frequency_type: 'months',
      transaction_amount: MONTHLY_AMOUNT,
      currency_id: 'BRL'
    },
    back_url: returnUrl(siteBase, concurso.returnPath),
    status: 'pending'
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

function verifyLifetimePayment(order, payment) {
  orderDetails(order, 'vitalicio');
  return !!payment && validPaymentId(payment.id) && String(payment.external_reference) === order.id &&
    payment.status === 'approved' && payment.currency_id === 'BRL' &&
    amountMatches(payment.transaction_amount, LIFETIME_AMOUNT) &&
    (payment.transaction_amount_refunded === undefined || amountMatches(payment.transaction_amount_refunded, 0));
}

function verifyMonthlyPayment(order, subscription, invoice, payment) {
  orderDetails(order, 'mensal');
  return !!subscription && !!invoice && !!payment &&
    subscription.external_reference === order.id &&
    typeof subscription.id === 'string' && subscription.id.length > 0 &&
    subscription.id === order.subscriptionId &&
    subscription.auto_recurring?.frequency === 1 &&
    subscription.auto_recurring?.frequency_type === 'months' &&
    subscription.auto_recurring?.currency_id === 'BRL' &&
    amountMatches(subscription.auto_recurring?.transaction_amount, MONTHLY_AMOUNT) &&
    invoice.preapproval_id === subscription.id &&
    validPaymentId(invoice.payment?.id) && validPaymentId(payment.id) &&
    String(invoice.payment?.id) === String(payment.id) &&
    invoice.payment?.status === 'approved' &&
    payment.status === 'approved' &&
    invoice.currency_id === 'BRL' && payment.currency_id === 'BRL' &&
    amountMatches(invoice.transaction_amount, MONTHLY_AMOUNT) &&
    amountMatches(payment.transaction_amount, MONTHLY_AMOUNT) &&
    (payment.transaction_amount_refunded === undefined || amountMatches(payment.transaction_amount_refunded, 0));
}

module.exports = Object.freeze({
  CONCURSOS, MONTHLY_AMOUNT, LIFETIME_AMOUNT, MAX_INSTALLMENTS,
  createLifetimePreference, createMonthlySubscription, verifyLifetimePayment, verifyMonthlyPayment
});
