import assert from "node:assert/strict";
import { createHmac, generateKeyPairSync } from "node:crypto";
import worker from "../backend/worker.mjs";

const siteOrigin = "https://focoestudo.github.io";
const { privateKey } = generateKeyPairSync("rsa", { modulusLength: 2048 });
const privateKeyPem = privateKey.export({ type: "pkcs8", format: "pem" });
const requests = [];
const marketplaceOrderPayloads = [];
const orderUpdates = [];
const accessUpdates = [];
const env = {
    FIREBASE_PROJECT_ID: "demo-project",
    FIREBASE_WEB_API_KEY: "public-test-key",
    APP_BASE_URL: `${siteOrigin}/Plataforma-PMPE`,
    ALLOWED_ORIGINS: siteOrigin,
    MP_MODE: "test",
    MP_ACCESS_TOKEN: "test-access-token",
    MP_WEBHOOK_SECRET: "webhook-test-secret",
    GOOGLE_SERVICE_ACCOUNT_EMAIL: "worker@example.test",
    GOOGLE_PRIVATE_KEY: privateKeyPem
};
const originalFetch = globalThis.fetch;
let createdOrderFields;
let paymentApproved = false;
const approvedAt = "2026-11-11T13:00:00.000Z";
const providerOrderId = "ORDTST01ABC123";

globalThis.fetch = async (input, init = {}) => {
    const url = new URL(input);
    requests.push({ url, method: init.method || "GET" });
    if (url.hostname === "identitytoolkit.googleapis.com") {
        return Response.json({ users: [{ localId: "student-uid", email: "student@example.test" }] });
    }
    if (url.hostname === "oauth2.googleapis.com") {
        return Response.json({ access_token: "google-test-token", expires_in: 3600 });
    }
    if (url.hostname === "firestore.googleapis.com"
        && url.pathname.endsWith("/documents/access/student-uid")
        && (init.method || "GET") === "GET") {
        return new Response(null, { status: 404 });
    }
    if (url.hostname === "firestore.googleapis.com"
        && url.pathname.endsWith("/documents/paymentOrders")
        && init.method === "POST") {
        createdOrderFields = JSON.parse(init.body).fields;
        return Response.json({ name: "test-order" });
    }
    if (url.hostname === "firestore.googleapis.com" && url.pathname.includes("/documents/paymentOrders/")) {
        if (init.method === "PATCH") {
        const fields = JSON.parse(init.body).fields;
        orderUpdates.push(fields);
        createdOrderFields = { ...createdOrderFields, ...fields };
        return Response.json({ name: "test-order" });
    }
        return Response.json({ fields: createdOrderFields });
    }
    if (url.hostname === "firestore.googleapis.com"
        && url.pathname.endsWith("/documents/access/student-uid")
        && init.method === "PATCH") {
        accessUpdates.push(JSON.parse(init.body).fields);
        return Response.json({ name: "test-access" });
    }
    if (url.hostname === "api.mercadopago.com" && url.pathname === "/v1/orders" && init.method === "POST") {
        marketplaceOrderPayloads.push(JSON.parse(init.body));
        return Response.json({
            id: providerOrderId,
            checkout_url: `https://www.mercadopago.com.br/checkout/v1/redirect?order_id=${providerOrderId}`
        }, { status: 201 });
    }
    if (url.hostname === "api.mercadopago.com" && url.pathname === `/v1/orders/${providerOrderId}`) {
        const orderPayload = marketplaceOrderPayloads[0];
        return Response.json({
            id: providerOrderId,
            type: "online",
            status: paymentApproved ? "processed" : "processing",
            status_detail: paymentApproved ? "accredited" : "in_process",
            external_reference: orderPayload.external_reference,
            total_amount: orderPayload.total_amount,
            currency: "BRL",
            last_updated_date: approvedAt,
            items: orderPayload.items,
            transactions: {
                payments: paymentApproved ? [{
                    id: "PAY01TEST123",
                    amount: orderPayload.total_amount,
                    status: "processed",
                    status_detail: "accredited",
                    date_approved: approvedAt
                }] : []
            }
        });
    }
    throw new Error(`Unexpected mocked request: ${init.method || "GET"} ${url.href}`);
};

try {
    const response = await worker.fetch(new Request("https://worker.test/checkout", {
        method: "POST",
        headers: {
            Origin: siteOrigin,
            Authorization: "Bearer firebase-test-token",
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ concurso: "pmpe", plan: "semanal", amount: 1, currency: "USD" })
    }), env);
    assert.equal(response.status, 200);
    assert.equal((await response.json()).checkoutUrl,
        `https://www.mercadopago.com.br/checkout/v1/redirect?order_id=${providerOrderId}`);
    assert.equal(marketplaceOrderPayloads.length, 1);
    assert.equal(requests.some(item =>
        item.url.pathname === "/v1/orders" && item.method === "POST"), true);
    assert.deepEqual(marketplaceOrderPayloads[0], {
        type: "online",
        processing_mode: "manual",
        capture_mode: "automatic_async",
        total_amount: "6.25",
        external_reference: marketplaceOrderPayloads[0].external_reference,
        description: "Operação PMPE - acesso semanal",
        payer: { email: "student@example.test" },
        items: [{
            external_code: "pmpe-semanal",
        title: "Operação PMPE - acesso semanal",
        quantity: 1,
            unit_price: "6.25"
        }],
        config: {
            statement_descriptor: "OPERACAO PMPE",
            online: {
                success_url: `https://focoestudo.github.io/Plataforma-PMPE/index.html?payment=success`,
                pending_url: `https://focoestudo.github.io/Plataforma-PMPE/index.html?payment=pending`,
                failure_url: `https://focoestudo.github.io/Plataforma-PMPE/index.html?payment=failure`,
                auto_return: "approved"
            },
            payment_method: { max_installments: 1 }
        }
    });
    assert.match(marketplaceOrderPayloads[0].external_reference, /^[0-9a-f-]{36}$/i);
    assert.ok(requests.some(item => item.url.pathname.endsWith("/documents/paymentOrders")
        && item.method === "POST"));

    const dataId = providerOrderId;
    const requestId = "webhook-request-id";
    const timestamp = "1731330000";
    const manifest = `id:${dataId.toLowerCase()};request-id:${requestId};ts:${timestamp};`;
    const signature = createHmac("sha256", env.MP_WEBHOOK_SECRET).update(manifest).digest("hex");
    const makeWebhookRequest = () => new Request(`https://worker.test/webhook?type=order&data.id=${dataId}`, {
        method: "POST",
        headers: {
            "x-request-id": requestId,
            "x-signature": `ts=${timestamp},v1=${signature}`
        },
        body: JSON.stringify({ type: "order", data: { id: dataId } })
    });
    const pendingWebhookResponse = await worker.fetch(makeWebhookRequest(), env);
    assert.equal(pendingWebhookResponse.status, 200);
    assert.equal((await pendingWebhookResponse.json()).accessGranted, undefined);
    assert.equal(accessUpdates.length, 0, "Orders em processamento não devem liberar acesso.");

    paymentApproved = true;
    const webhookResponse = await worker.fetch(makeWebhookRequest(), env);
    assert.equal(webhookResponse.status, 200);
    assert.equal((await webhookResponse.json()).accessGranted, true);
    assert.equal(accessUpdates.length, 1);
    assert.equal(accessUpdates[0].active.booleanValue, true);
    assert.equal(accessUpdates[0].plan.stringValue, "semanal");
    assert.equal(Date.parse(accessUpdates[0].expiresAt.timestampValue),
        Date.parse(approvedAt) + 7 * 24 * 60 * 60 * 1000);
    assert.equal(orderUpdates.at(-1).status.stringValue, "processed");

    const invalidPlan = await worker.fetch(new Request("https://worker.test/checkout", {
        method: "POST",
        headers: {
            Origin: siteOrigin,
            Authorization: "Bearer firebase-test-token",
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ concurso: "pmpe", plan: "constructor" })
    }), env);
    assert.equal(invalidPlan.status, 400);
    assert.equal(marketplaceOrderPayloads.length, 1);
    console.log("OK: Worker cria order de teste com preço do servidor e recusa plano inválido.");
} finally {
    globalThis.fetch = originalFetch;
}
