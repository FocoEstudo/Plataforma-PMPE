import { getProduct, verifyMarketplaceOrder } from "./payment-catalog.mjs";

const FIREBASE_LOOKUP_URL = "https://identitytoolkit.googleapis.com/v1/accounts:lookup";
const FIRESTORE_API_URL = "https://firestore.googleapis.com/v1";
const MERCADO_PAGO_API_URL = "https://api.mercadopago.com";
const PAYMENT_AMOUNT = 99.9;
const PAYMENT_ITEM_ID = "pmpe-access";

let cachedGoogleToken;
let googleTokenExpiresAt = 0;

const jsonResponse = (body, status = 200, headers = {}) => new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json; charset=utf-8", ...headers }
});

const base64UrlEncode = bytes => {
    let binary = "";
    for (const byte of bytes) binary += String.fromCharCode(byte);
    return btoa(binary).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
};

const encodeJson = value => base64UrlEncode(new TextEncoder().encode(JSON.stringify(value)));

const getCorsHeaders = (request, env) => {
    const origin = request.headers.get("Origin");
    const allowedOrigins = (env.ALLOWED_ORIGINS || "")
        .split(",")
        .map(value => value.trim())
        .filter(Boolean);
    if (!origin || !allowedOrigins.includes(origin)) return null;
    return {
        "Access-Control-Allow-Origin": origin,
        "Access-Control-Allow-Methods": "POST, OPTIONS",
        "Access-Control-Allow-Headers": "Authorization, Content-Type",
        "Access-Control-Max-Age": "86400",
        "Vary": "Origin"
    };
};

const requireEnv = (env, names) => {
    const missing = names.filter(name => !env[name]);
    if (missing.length) throw new Error(`Missing worker configuration: ${missing.join(", ")}`);
};

const getGoogleAccessToken = async env => {
    if (cachedGoogleToken && Date.now() < googleTokenExpiresAt - 60_000) return cachedGoogleToken;
    requireEnv(env, ["GOOGLE_SERVICE_ACCOUNT_EMAIL", "GOOGLE_PRIVATE_KEY"]);

    const issuedAt = Math.floor(Date.now() / 1000);
    const header = encodeJson({ alg: "RS256", typ: "JWT" });
    const claims = encodeJson({
        iss: env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
        scope: "https://www.googleapis.com/auth/datastore",
        aud: "https://oauth2.googleapis.com/token",
        iat: issuedAt,
        exp: issuedAt + 3600
    });
    const unsignedToken = `${header}.${claims}`;
    const pem = env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, "\n");
    const keyContent = pem
        .replace("-----BEGIN PRIVATE KEY-----", "")
        .replace("-----END PRIVATE KEY-----", "")
        .replace(/\s/g, "");
    const keyBytes = Uint8Array.from(atob(keyContent), character => character.charCodeAt(0));
    const signingKey = await crypto.subtle.importKey(
        "pkcs8",
        keyBytes,
        { name: "RSASSA-PKCS1-v1_5", hash: "SHA-256" },
        false,
        ["sign"]
    );
    const signature = await crypto.subtle.sign(
        "RSASSA-PKCS1-v1_5",
        signingKey,
        new TextEncoder().encode(unsignedToken)
    );
    const assertion = `${unsignedToken}.${base64UrlEncode(new Uint8Array(signature))}`;
    const response = await fetch("https://oauth2.googleapis.com/token", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({
            grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer",
            assertion
        })
    });
    if (!response.ok) throw new Error(`Google OAuth token request failed (${response.status}).`);
    const tokenResponse = await response.json();
    if (!tokenResponse.access_token || !Number.isFinite(tokenResponse.expires_in)) {
        throw new Error("Google OAuth returned an invalid access token.");
    }
    cachedGoogleToken = tokenResponse.access_token;
    googleTokenExpiresAt = Date.now() + tokenResponse.expires_in * 1000;
    return cachedGoogleToken;
};

const firestoreDocumentUrl = (env, collection, documentId) =>
    `${FIRESTORE_API_URL}/projects/${encodeURIComponent(env.FIREBASE_PROJECT_ID)}/databases/(default)/documents/${collection}/${encodeURIComponent(documentId)}`;

const readAccessDocument = async (env, uid, googleToken) => {
    const response = await fetch(firestoreDocumentUrl(env, "access", uid), {
        headers: { Authorization: `Bearer ${googleToken}` }
    });
    if (response.status === 404) return null;
    if (!response.ok) throw new Error(`Firestore read failed (${response.status}).`);
    return response.json();
};

const readDocument = async (env, collection, documentId, googleToken) => {
    const response = await fetch(firestoreDocumentUrl(env, collection, documentId), {
        headers: { Authorization: `Bearer ${googleToken}` }
    });
    if (response.status === 404) return null;
    if (!response.ok) throw new Error(`Firestore read failed (${response.status}).`);
    return response.json();
};

const createDocument = async (env, collection, documentId, fields, googleToken) => {
    const url = `${FIRESTORE_API_URL}/projects/${encodeURIComponent(env.FIREBASE_PROJECT_ID)}/databases/(default)/documents/${collection}?documentId=${encodeURIComponent(documentId)}`;
    const response = await fetch(url, {
        method: "POST",
        headers: {
            Authorization: `Bearer ${googleToken}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ fields })
    });
    if (!response.ok) throw new Error(`Firestore document creation failed (${response.status}).`);
};

const updateDocument = async (env, collection, documentId, fields, googleToken) => {
    const url = new URL(firestoreDocumentUrl(env, collection, documentId));
    for (const field of Object.keys(fields)) url.searchParams.append("updateMask.fieldPaths", field);
    const response = await fetch(url, {
        method: "PATCH",
        headers: {
            Authorization: `Bearer ${googleToken}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ fields })
    });
    if (!response.ok) throw new Error(`Firestore document update failed (${response.status}).`);
};

const verifyFirebaseIdToken = async (request, env) => {
    const authorization = request.headers.get("Authorization") || "";
    const match = authorization.match(/^Bearer ([\w.-]+)$/);
    if (!match) return null;

    const response = await fetch(`${FIREBASE_LOOKUP_URL}?key=${encodeURIComponent(env.FIREBASE_WEB_API_KEY)}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ idToken: match[1] })
    });
    if (!response.ok) return null;
    const result = await response.json();
    const user = result.users?.[0];
    return user?.localId ? { uid: user.localId, email: user.email } : null;
};

const createCheckout = async (request, env, corsHeaders) => {
    requireEnv(env, [
        "FIREBASE_PROJECT_ID",
        "FIREBASE_WEB_API_KEY",
        "APP_BASE_URL",
        "MP_ACCESS_TOKEN",
        "GOOGLE_SERVICE_ACCOUNT_EMAIL",
        "GOOGLE_PRIVATE_KEY"
    ]);
    const user = await verifyFirebaseIdToken(request, env);
    if (!user) return jsonResponse({ error: "Sessão inválida. Entre novamente na plataforma." }, 401, corsHeaders);

    const googleToken = await getGoogleAccessToken(env);
    const accessDocument = await readAccessDocument(env, user.uid, googleToken);
    if (accessDocument?.fields?.active?.booleanValue === true) {
        return jsonResponse({ error: "Esta conta já possui acesso liberado." }, 409, corsHeaders);
    }

    const appBaseUrl = new URL(env.APP_BASE_URL);
    const allowedOrigins = (env.ALLOWED_ORIGINS || "").split(",").map(value => value.trim());
    const isLocalDevOrigin = appBaseUrl.protocol === "http:"
        && ["localhost", "127.0.0.1"].includes(appBaseUrl.hostname);
    if ((!isLocalDevOrigin && appBaseUrl.protocol !== "https:")
        || !allowedOrigins.includes(appBaseUrl.origin)
        || appBaseUrl.username
        || appBaseUrl.password
        || appBaseUrl.search
        || appBaseUrl.hash) {
        throw new Error("APP_BASE_URL must be an allowed HTTPS origin.");
    }
    const appBasePath = appBaseUrl.href.replace(/\/+$/, "");
    const payload = {
        items: [{
            id: PAYMENT_ITEM_ID,
            title: "Acesso à plataforma Operação PMPE",
            quantity: 1,
            currency_id: "BRL",
            unit_price: PAYMENT_AMOUNT
        }],
        external_reference: user.uid,
        back_urls: {
            success: `${appBasePath}/index.html?payment=success`,
            pending: `${appBasePath}/index.html?payment=pending`,
            failure: `${appBasePath}/index.html?payment=failure`
        },
        auto_return: "approved",
        statement_descriptor: "OPERACAO PMPE"
    };
    const response = await fetch(`${MERCADO_PAGO_API_URL}/checkout/preferences`, {
        method: "POST",
        headers: {
            Authorization: `Bearer ${env.MP_ACCESS_TOKEN}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
    });
    if (!response.ok) {
        console.error("Mercado Pago checkout creation failed.", response.status);
        return jsonResponse({ error: "Não foi possível preparar o checkout. Tente novamente." }, 502, corsHeaders);
    }

    const preference = await response.json();
    const checkoutUrl = preference.init_point;
    if (!checkoutUrl || typeof checkoutUrl !== "string") {
        throw new Error("Mercado Pago did not return a checkout URL.");
    }
    const parsedCheckoutUrl = new URL(checkoutUrl);
    if (parsedCheckoutUrl.protocol !== "https:"
        || (parsedCheckoutUrl.hostname !== "mercadopago.com.br"
            && !parsedCheckoutUrl.hostname.endsWith(".mercadopago.com.br"))) {
        throw new Error("Mercado Pago returned an unexpected checkout host.");
    }
    return jsonResponse({ checkoutUrl }, 200, corsHeaders);
};

const getWebhookSignature = async (request, dataId, secret) => {
    const signatureHeader = request.headers.get("x-signature") || "";
    const requestId = request.headers.get("x-request-id") || "";
    const fields = Object.fromEntries(signatureHeader.split(",").map(part => {
        const [key, ...valueParts] = part.trim().split("=");
        return [key, valueParts.join("=")];
    }));
    if (!fields.ts || !fields.v1 || !requestId) return false;

    const manifest = `id:${dataId.toLowerCase()};request-id:${requestId};ts:${fields.ts};`;
    const signingKey = await crypto.subtle.importKey(
        "raw",
        new TextEncoder().encode(secret),
        { name: "HMAC", hash: "SHA-256" },
        false,
        ["sign"]
    );
    const signature = await crypto.subtle.sign("HMAC", signingKey, new TextEncoder().encode(manifest));
    const expected = Array.from(new Uint8Array(signature), byte => byte.toString(16).padStart(2, "0")).join("");
    if (!/^[a-f\d]{64}$/i.test(fields.v1) || fields.v1.length !== expected.length) return false;
    let difference = 0;
    for (let index = 0; index < expected.length; index += 1) {
        difference |= expected.charCodeAt(index) ^ fields.v1.toLowerCase().charCodeAt(index);
    }
    return difference === 0;
};

const getMercadoPagoResource = async (path, accessToken) => {
    const response = await fetch(`${MERCADO_PAGO_API_URL}${path}`, {
        headers: { Authorization: `Bearer ${accessToken}` }
    });
    if (!response.ok) throw new Error(`Mercado Pago resource lookup failed (${response.status}).`);
    return response.json();
};

const verifyPaidPreference = (payment, preference) => {
    const uid = preference.external_reference;
    const items = preference.items;
    return typeof uid === "string"
        && uid.length >= 1
        && uid.length <= 128
        && payment.external_reference === uid
        && Number(payment.transaction_amount) === PAYMENT_AMOUNT
        && payment.currency_id === "BRL"
        && Array.isArray(items)
        && items.length === 1
        && items[0].id === PAYMENT_ITEM_ID
        && Number(items[0].quantity) === 1
        && Number(items[0].unit_price) === PAYMENT_AMOUNT
        && items[0].currency_id === "BRL";
};

const grantAccess = async (env, uid, payment) => {
    const googleToken = await getGoogleAccessToken(env);
    const documentUrl = new URL(firestoreDocumentUrl(env, "access", uid));
    for (const field of ["active", "provider", "paymentId", "amount", "currency", "paidAt"]) {
        documentUrl.searchParams.append("updateMask.fieldPaths", field);
    }
    const response = await fetch(documentUrl, {
        method: "PATCH",
        headers: {
            Authorization: `Bearer ${googleToken}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            fields: {
                active: { booleanValue: true },
                provider: { stringValue: "mercadopago" },
                paymentId: { stringValue: String(payment.id) },
                amount: { doubleValue: PAYMENT_AMOUNT },
                currency: { stringValue: "BRL" },
                paidAt: { timestampValue: new Date().toISOString() }
            }
        })
    });
    if (!response.ok) throw new Error(`Firestore access grant failed (${response.status}).`);
};

const revokeAccessForPayment = async (env, uid, payment) => {
    const googleToken = await getGoogleAccessToken(env);
    const accessDocument = await readAccessDocument(env, uid, googleToken);
    if (accessDocument?.fields?.active?.booleanValue !== true
        || accessDocument.fields.paymentId?.stringValue !== String(payment.id)) {
        return;
    }
    const documentUrl = new URL(firestoreDocumentUrl(env, "access", uid));
    for (const field of ["active", "paymentStatus", "revokedAt"]) {
        documentUrl.searchParams.append("updateMask.fieldPaths", field);
    }
    const response = await fetch(documentUrl, {
        method: "PATCH",
        headers: {
            Authorization: `Bearer ${googleToken}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            fields: {
                active: { booleanValue: false },
                paymentStatus: { stringValue: payment.status },
                revokedAt: { timestampValue: new Date().toISOString() }
            }
        })
    });
    if (!response.ok) throw new Error(`Firestore access revocation failed (${response.status}).`);
};

const processWebhook = async (request, env) => {
    requireEnv(env, ["MP_ACCESS_TOKEN", "MP_WEBHOOK_SECRET", "FIREBASE_PROJECT_ID", "GOOGLE_SERVICE_ACCOUNT_EMAIL", "GOOGLE_PRIVATE_KEY"]);
    const url = new URL(request.url);
    const rawBody = await request.text();
    if (rawBody.length > 32_768) return jsonResponse({ error: "Payload too large." }, 413);

    let payload;
    try {
        payload = rawBody ? JSON.parse(rawBody) : {};
    } catch (error) {
        console.error("Mercado Pago webhook sent invalid JSON.", error);
        return jsonResponse({ error: "Invalid JSON." }, 400);
    }
    const dataId = url.searchParams.get("data.id") || payload.data?.id?.toString();
    if (!dataId || !/^\d+$/.test(dataId)) return jsonResponse({ error: "Missing payment id." }, 400);
    if (!await getWebhookSignature(request, dataId, env.MP_WEBHOOK_SECRET)) {
        return jsonResponse({ error: "Invalid signature." }, 401);
    }

    const eventType = url.searchParams.get("type")
        || url.searchParams.get("topic")
        || payload.type
        || payload.action?.split(".")[0];
    if (eventType !== "payment") return jsonResponse({ received: true });

    const payment = await getMercadoPagoResource(`/v1/payments/${encodeURIComponent(dataId)}`, env.MP_ACCESS_TOKEN);
    if (String(payment.id) !== dataId) return jsonResponse({ received: true });
    if (!payment.preference_id) {
        console.error("Mercado Pago payment has no preference id.");
        return jsonResponse({ received: true });
    }

    const preference = await getMercadoPagoResource(
        `/checkout/preferences/${encodeURIComponent(payment.preference_id)}`,
        env.MP_ACCESS_TOKEN
    );
    if (!verifyPaidPreference(payment, preference)) {
        console.error("Mercado Pago payment did not match the expected preference.");
        return jsonResponse({ received: true });
    }

    if (payment.status === "approved") {
        await grantAccess(env, preference.external_reference, payment);
        return jsonResponse({ received: true, accessGranted: true });
    }
    if (["refunded", "charged_back"].includes(payment.status)) {
        await revokeAccessForPayment(env, preference.external_reference, payment);
        return jsonResponse({ received: true, accessRevoked: true });
    }
    return jsonResponse({ received: true });
};

const createProductCheckout = async (request, env, corsHeaders) => {
    requireEnv(env, [
        "FIREBASE_PROJECT_ID",
        "FIREBASE_WEB_API_KEY",
        "APP_BASE_URL",
        "MP_MODE",
        "MP_ACCESS_TOKEN",
        "GOOGLE_SERVICE_ACCOUNT_EMAIL",
        "GOOGLE_PRIVATE_KEY"
    ]);
    if (!["test", "production"].includes(env.MP_MODE)) {
        throw new Error("MP_MODE must be set to test or production.");
    }

    let checkoutRequest;
    try {
        checkoutRequest = await request.json();
    } catch {
        return jsonResponse({ error: "Solicitação de checkout inválida." }, 400, corsHeaders);
    }
    const product = getProduct(checkoutRequest?.concurso, checkoutRequest?.plan);
    if (!product) {
        return jsonResponse({ error: "Selecione um concurso e um plano válidos." }, 400, corsHeaders);
    }
    const user = await verifyFirebaseIdToken(request, env);
    if (!user) return jsonResponse({ error: "Sessão inválida. Entre novamente na plataforma." }, 401, corsHeaders);

    const googleToken = await getGoogleAccessToken(env);
    const accessDocument = await readDocument(env, product.accessCollection, user.uid, googleToken);
    const access = accessDocument?.fields || {};
    const existingPlan = access.plan?.stringValue;
    const paidAt = Date.parse(access.paidAt?.timestampValue || "");
    const durationMs = existingPlan === "semanal" ? 7 * 24 * 60 * 60 * 1000
        : existingPlan === "mensal" ? 30 * 24 * 60 * 60 * 1000
            : null;
    const hasCurrentAccess = access.active?.booleanValue === true &&
        (existingPlan === "vitalicio" || !existingPlan ||
            !["semanal", "mensal"].includes(existingPlan) ||
            !Number.isFinite(paidAt) || Date.now() < paidAt + durationMs);
    if (hasCurrentAccess) {
        return jsonResponse({ error: "Esta conta já possui acesso liberado para este concurso." }, 409, corsHeaders);
    }
    if (typeof user.email !== "string" || !user.email) {
        return jsonResponse({ error: "A conta precisa ter um email para iniciar o pagamento." }, 400, corsHeaders);
    }

    const appBaseUrl = new URL(env.APP_BASE_URL);
    const allowedOrigins = (env.ALLOWED_ORIGINS || "").split(",").map(value => value.trim());
    const isLocalDevOrigin = appBaseUrl.protocol === "http:"
        && ["localhost", "127.0.0.1"].includes(appBaseUrl.hostname);
    if ((!isLocalDevOrigin && appBaseUrl.protocol !== "https:")
        || !allowedOrigins.includes(appBaseUrl.origin)
        || appBaseUrl.username
        || appBaseUrl.password
        || appBaseUrl.search
        || appBaseUrl.hash) {
        throw new Error("APP_BASE_URL must be an allowed HTTPS origin.");
    }

    const orderId = crypto.randomUUID();
    await createDocument(env, "paymentOrders", orderId, {
        uid: { stringValue: user.uid },
        concurso: { stringValue: product.concurso },
        plan: { stringValue: product.plan },
        amount: { doubleValue: product.amount },
        currency: { stringValue: "BRL" },
        status: { stringValue: "creating" },
        createdAt: { timestampValue: new Date().toISOString() }
    }, googleToken);

    const target = `${appBaseUrl.href.replace(/\/+$/, "")}${product.returnPath}`;
    const orderPayload = {
        type: "online",
        processing_mode: "manual",
        capture_mode: "automatic_async",
        total_amount: product.amount.toFixed(2),
        external_reference: orderId,
        description: product.title,
        payer: { email: user.email },
        items: [{
            external_code: product.id,
            title: product.title,
            quantity: 1,
            unit_price: product.amount.toFixed(2)
        }],
        config: {
            statement_descriptor: "OPERACAO PMPE",
            online: {
                success_url: `${target}?payment=success`,
                pending_url: `${target}?payment=pending`,
                failure_url: `${target}?payment=failure`,
                auto_return: "approved"
            },
            payment_method: {
                max_installments: product.plan === "vitalicio" ? 12 : 1
            }
        }
    };

    let response;
    try {
        response = await fetch(`${MERCADO_PAGO_API_URL}/v1/orders`, {
            method: "POST",
            headers: {
                Authorization: `Bearer ${env.MP_ACCESS_TOKEN}`,
                "Content-Type": "application/json",
                "X-Idempotency-Key": orderId
            },
            body: JSON.stringify(orderPayload)
        });
    } catch (error) {
        console.error("Mercado Pago checkout request failed.", error);
        await updateDocument(env, "paymentOrders", orderId, {
            status: { stringValue: "creation_failed" }
        }, googleToken);
        return jsonResponse({ error: "Não foi possível preparar o checkout. Tente novamente." }, 502, corsHeaders);
    }
    if (!response.ok) {
        console.error("Mercado Pago checkout creation failed.", response.status);
        await updateDocument(env, "paymentOrders", orderId, {
            status: { stringValue: "creation_failed" }
        }, googleToken);
        return jsonResponse({ error: "Não foi possível preparar o checkout. Tente novamente." }, 502, corsHeaders);
    }

    const marketplaceOrder = await response.json();
    const checkoutUrl = marketplaceOrder.checkout_url;
    if (!marketplaceOrder.id || typeof checkoutUrl !== "string") {
        throw new Error("Mercado Pago did not return the checkout URL for the configured environment.");
    }
    const parsedCheckoutUrl = new URL(checkoutUrl);
    if (parsedCheckoutUrl.protocol !== "https:"
        || (parsedCheckoutUrl.hostname !== "mercadopago.com.br"
            && !parsedCheckoutUrl.hostname.endsWith(".mercadopago.com.br"))) {
        throw new Error("Mercado Pago returned an unexpected checkout host.");
    }
    await updateDocument(env, "paymentOrders", orderId, {
        providerOrderId: { stringValue: String(marketplaceOrder.id) },
        status: { stringValue: "pending" }
    }, googleToken);
    return jsonResponse({ checkoutUrl }, 200, corsHeaders);
};

const processProductWebhook = async (request, env) => {
    requireEnv(env, ["MP_ACCESS_TOKEN", "MP_WEBHOOK_SECRET", "FIREBASE_PROJECT_ID", "GOOGLE_SERVICE_ACCOUNT_EMAIL", "GOOGLE_PRIVATE_KEY"]);
    const url = new URL(request.url);
    const rawBody = await request.text();
    if (rawBody.length > 32_768) return jsonResponse({ error: "Payload too large." }, 413);

    let payload;
    try {
        payload = rawBody ? JSON.parse(rawBody) : {};
    } catch (error) {
        console.error("Mercado Pago webhook sent invalid JSON.", error);
        return jsonResponse({ error: "Invalid JSON." }, 400);
    }
    const dataId = url.searchParams.get("data.id") || payload.data?.id?.toString();
    if (!dataId || !/^[A-Za-z0-9_-]{1,128}$/.test(dataId)) {
        return jsonResponse({ error: "Missing order id." }, 400);
    }
    if (!await getWebhookSignature(request, dataId, env.MP_WEBHOOK_SECRET)) {
        return jsonResponse({ error: "Invalid signature." }, 401);
    }
    const eventType = url.searchParams.get("type")
        || url.searchParams.get("topic")
        || payload.type
        || payload.action?.split(".")[0];
    if (!["order", "orders", "orders_v2"].includes(eventType)) return jsonResponse({ received: true });

    const marketplaceOrder = await getMercadoPagoResource(
        `/v1/orders/${encodeURIComponent(dataId)}`,
        env.MP_ACCESS_TOKEN
    );
    if (String(marketplaceOrder.id) !== dataId) return jsonResponse({ received: true });
    const orderId = marketplaceOrder.external_reference;
    const googleToken = await getGoogleAccessToken(env);
    const orderDocument = orderId ? await readDocument(env, "paymentOrders", orderId, googleToken) : null;
    const fields = orderDocument?.fields || {};
    const order = orderDocument ? {
        id: orderId,
        uid: fields.uid?.stringValue,
        concurso: fields.concurso?.stringValue,
        plan: fields.plan?.stringValue,
        amount: fields.amount?.doubleValue,
        currency: fields.currency?.stringValue,
        providerOrderId: fields.providerOrderId?.stringValue,
        paidAt: fields.paidAt?.timestampValue
    } : null;
    const product = order && getProduct(order.concurso, order.plan);
    if (!product || !verifyMarketplaceOrder(order, marketplaceOrder)) {
        console.error("Mercado Pago order did not match a stored order.");
        return jsonResponse({ received: true });
    }

    const payments = marketplaceOrder.transactions?.payments || [];
    const paidPayment = payments.find(payment =>
        payment.status === "processed" && payment.status_detail === "accredited");
    const hasRefund = marketplaceOrder.status === "refunded"
        || marketplaceOrder.status_detail === "partially_refunded"
        || marketplaceOrder.transactions?.refunds?.some(refund => refund.status === "processed");
    const hasChargeback = (marketplaceOrder.transactions?.chargebacks || []).length > 0;
    const paymentId = paidPayment?.id || payments.find(payment => payment.id)?.id;

    if (marketplaceOrder.status === "processed" && paidPayment && !hasRefund && !hasChargeback) {
        const paidAt = Date.parse(paidPayment.date_approved || order.paidAt || marketplaceOrder.last_updated_date || "");
        if (!Number.isFinite(paidAt)) throw new Error("Approved payment has no valid timestamp.");
        const paidAtIso = new Date(paidAt).toISOString();
        const expiresAt = product.durationMs === null ? null : new Date(paidAt + product.durationMs).toISOString();
        await updateDocument(env, product.accessCollection, order.uid, {
            active: { booleanValue: true },
            provider: { stringValue: "mercadopago" },
            paymentId: { stringValue: String(paymentId) },
            amount: { doubleValue: product.amount },
            currency: { stringValue: "BRL" },
            plan: { stringValue: order.plan },
            paidAt: { timestampValue: paidAtIso },
            expiresAt: expiresAt ? { timestampValue: expiresAt } : { nullValue: null }
        }, googleToken);
        await updateDocument(env, "paymentOrders", order.id, {
            status: { stringValue: marketplaceOrder.status },
            providerOrderId: { stringValue: String(marketplaceOrder.id) },
            providerPaymentId: { stringValue: String(paymentId) },
            paidAt: { timestampValue: paidAtIso },
            expiresAt: expiresAt ? { timestampValue: expiresAt } : { nullValue: null }
        }, googleToken);
        return jsonResponse({ received: true, accessGranted: true });
    }
    if (hasRefund || hasChargeback) {
        const accessDocument = await readDocument(env, product.accessCollection, order.uid, googleToken);
        if (accessDocument?.fields?.active?.booleanValue === true
            && accessDocument.fields.paymentId?.stringValue === String(paymentId)) {
            await updateDocument(env, product.accessCollection, order.uid, {
                active: { booleanValue: false },
                paymentStatus: { stringValue: hasChargeback ? "charged_back" : "refunded" },
                revokedAt: { timestampValue: new Date().toISOString() }
            }, googleToken);
        }
        await updateDocument(env, "paymentOrders", order.id, {
            status: { stringValue: hasChargeback ? "charged_back" : "refunded" },
            updatedAt: { timestampValue: new Date().toISOString() }
        }, googleToken);
        return jsonResponse({ received: true, accessRevoked: true });
    }
    await updateDocument(env, "paymentOrders", order.id, {
        status: { stringValue: String(marketplaceOrder.status || "pending") },
        updatedAt: { timestampValue: new Date().toISOString() }
    }, googleToken);
    return jsonResponse({ received: true });
};

export default {
    async fetch(request, env) {
        const url = new URL(request.url);
        if (url.pathname === "/health" && request.method === "GET") {
            return jsonResponse({ status: "ok" });
        }
        if (url.pathname === "/webhook") {
            if (request.method !== "POST") return jsonResponse({ error: "Method not allowed." }, 405);
            try {
                return await processProductWebhook(request, env);
            } catch (error) {
                console.error("Mercado Pago webhook processing failed.", error);
                return jsonResponse({ error: "Webhook processing failed." }, 500);
            }
        }

        const corsHeaders = getCorsHeaders(request, env);
        if (request.method === "OPTIONS") {
            return corsHeaders
                ? new Response(null, { status: 204, headers: corsHeaders })
                : jsonResponse({ error: "Origin not allowed." }, 403);
        }
        if (url.pathname === "/checkout" && request.method === "POST") {
            if (!corsHeaders) return jsonResponse({ error: "Origin not allowed." }, 403);
            try {
                return await createProductCheckout(request, env, corsHeaders);
            } catch (error) {
                console.error("Mercado Pago checkout request failed.", error);
                return jsonResponse({ error: "Não foi possível preparar o checkout. Tente novamente." }, 500, corsHeaders);
            }
        }
        return jsonResponse({ error: "Not found." }, 404);
    }
};
