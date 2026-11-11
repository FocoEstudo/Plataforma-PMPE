'use strict';
const assert = require('node:assert/strict');
const { cancelSubscription, CancellationError, createSubscriptionProvider } = require('../functions/credit-card-cancel');
const id = 'bf5ed437-1697-4e16-a4cc-e47534c6792b';
const order = { uid: 'user-a', plan: 'mensal', subscriptionId: 'sub123' };
const subscription = { id: 'sub123', external_reference: id, status: 'authorized' };

async function main() {
  let calls = [];
  const args = {
    uid: 'user-a', orderId: id,
    readOrder: async () => order,
    getSubscription: async () => { calls.push('get'); return subscription; },
    cancelAtProvider: async () => { calls.push('cancel'); return { ...subscription, status: 'cancelled' }; },
    recordCancellation: async () => { calls.push('record'); }
  };
  assert.deepEqual(await cancelSubscription(args), { status: 'cancelled' });
  assert.deepEqual(calls, ['get', 'cancel', 'record']);
  calls = [];
  await cancelSubscription({ ...args, getSubscription: async () => ({ ...subscription, status: 'cancelled' }) });
  assert.deepEqual(calls, ['record']);
  calls = [];
  await assert.rejects(cancelSubscription({ ...args, uid: 'other' }), error => error instanceof CancellationError && error.code === 'not-found');
  assert.deepEqual(calls, []);
  await assert.rejects(cancelSubscription({ ...args, orderId: '../bad' }), error => error.code === 'invalid-argument');
  await assert.rejects(cancelSubscription({ ...args, readOrder: async () => ({ ...order, subscriptionId: '../bad' }) }), error => error.code === 'not-found');
  await assert.rejects(cancelSubscription({ ...args, getSubscription: async () => ({ ...subscription, external_reference: 'wrong' }) }), error => error.code === 'failed-precondition');
  await assert.rejects(cancelSubscription({ ...args, getSubscription: async () => ({ ...subscription, id: 'wrong' }) }), error => error.code === 'failed-precondition');
  await assert.rejects(cancelSubscription({ ...args, cancelAtProvider: async () => ({ ...subscription, id: 'wrong', status: 'canceled' }) }), error => error.code === 'unavailable');
  await assert.rejects(cancelSubscription({ ...args, cancelAtProvider: async () => ({ ...subscription, status: 'authorized' }) }), error => error.code === 'unavailable');
  await assert.rejects(cancelSubscription({ ...args, recordCancellation: async () => { throw new Error('db failure'); } }), /db failure/);
  calls = [];
  await assert.rejects(cancelSubscription({ ...args, cancelAtProvider: async () => { throw new Error('timeout'); } }), /timeout/);
  assert.deepEqual(calls, ['get']);
  let observed;
  const provider = createSubscriptionProvider('test-token', async (url, options) => {
    observed = { url, options };
    return { ok: true, json: async () => ({ ...subscription, status: 'canceled' }) };
  });
  assert.equal((await provider('sub123', 'PUT')).status, 'canceled');
  assert.equal(observed.url, 'https://api.mercadopago.com/preapproval/sub123');
  assert.deepEqual(JSON.parse(observed.options.body), { status: 'canceled' });
  assert.equal(observed.options.headers.Authorization, 'Bearer test-token');
  await provider('sub123', 'GET');
  assert.equal(observed.options.body, undefined);
  assert.equal(observed.options.headers['Content-Type'], undefined);
  await assert.rejects(provider('../bad', 'GET'), error => error.code === 'invalid-argument');
  await assert.rejects(createSubscriptionProvider('test-token', async () => ({ ok: false, status: 503 }))('sub123', 'GET'), error => error.code === 'unavailable');
  console.log('OK: cancelamento autenticado, idempotente e sem alterar acesso.');
}
main().catch(error => { console.error(error); process.exitCode = 1; });
