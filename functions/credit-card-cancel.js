'use strict';

class CancellationError extends Error {
  constructor(code, message) {
    super(message);
    this.code = code;
  }
}

const ID_PATTERN = /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
const SUBSCRIPTION_PATTERN = /^[a-zA-Z0-9_-]{1,128}$/;

function createSubscriptionProvider(token, fetchImpl = fetch) {
  if (typeof token !== 'string' || !token) throw new Error('Credencial do Mercado Pago indisponível.');
  return async (subscriptionId, method) => {
    if (!SUBSCRIPTION_PATTERN.test(subscriptionId) || !['GET', 'PUT'].includes(method)) {
      throw new CancellationError('invalid-argument', 'Operação de assinatura inválida.');
    }
    const response = await fetchImpl(`https://api.mercadopago.com/preapproval/${encodeURIComponent(subscriptionId)}`, {
      method,
      headers: { Authorization: `Bearer ${token}`, ...(method === 'PUT' ? { 'Content-Type': 'application/json' } : {}) },
      ...(method === 'PUT' ? { body: JSON.stringify({ status: 'canceled' }) } : {}),
      signal: AbortSignal.timeout(15_000)
    });
    if (!response.ok) {
      throw new CancellationError('unavailable', `Mercado Pago não confirmou a operação (HTTP ${response.status}).`);
    }
    return response.json();
  };
}

async function cancelSubscription({ uid, orderId, readOrder, getSubscription, cancelAtProvider, recordCancellation }) {
  if (typeof uid !== 'string' || !uid || typeof orderId !== 'string' || !ID_PATTERN.test(orderId)) {
    throw new CancellationError('invalid-argument', 'Solicitação de cancelamento inválida.');
  }
  const order = await readOrder(orderId);
  if (!order || order.uid !== uid || order.plan !== 'mensal' ||
      typeof order.subscriptionId !== 'string' || !SUBSCRIPTION_PATTERN.test(order.subscriptionId)) {
    throw new CancellationError('not-found', 'Assinatura não encontrada para esta conta.');
  }
  const validate = subscription => subscription &&
    subscription.id === order.subscriptionId &&
    subscription.external_reference === orderId;
  const subscription = await getSubscription(order.subscriptionId);
  if (!validate(subscription)) {
    throw new CancellationError('failed-precondition', 'A assinatura não corresponde ao pedido. Procure o atendimento.');
  }
  let result = subscription;
  if (subscription.status !== 'cancelled' && subscription.status !== 'canceled') {
    result = await cancelAtProvider(order.subscriptionId);
    if (!validate(result) || !['cancelled', 'canceled'].includes(result.status)) {
      throw new CancellationError('unavailable', 'O cancelamento não foi confirmado pelo provedor. Tente novamente.');
    }
  }
  await recordCancellation(orderId, uid, order.subscriptionId);
  return { status: 'cancelled' };
}

module.exports = Object.freeze({ CancellationError, cancelSubscription, createSubscriptionProvider });
