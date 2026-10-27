const crypto = require("node:crypto");
const { initializeApp } = require("firebase-admin/app");
const { FieldValue, Timestamp, getFirestore } = require("firebase-admin/firestore");
const { HttpsError, onCall, onRequest } = require("firebase-functions/v2/https");
const { defineSecret } = require("firebase-functions/params");

initializeApp();

const db = getFirestore();
const mercadoPagoAccessToken = defineSecret("MERCADO_PAGO_ACCESS_TOKEN");
const mercadoPagoWebhookSecret = defineSecret("MERCADO_PAGO_WEBHOOK_SECRET");
const PAYMENT_AMOUNT = 99.9;
const PAYMENT_CURRENCY = "BRL";
const PAYMENT_EXPIRATION_MS = 30 * 60 * 1000;
const MERCADO_PAGO_API = "https://api.mercadopago.com";

const isExpectedPixPayment = (payment, uid, orderId) =>
  String(payment.external_reference || "") === JSON.stringify({ uid, orderId }) &&
  payment.payment_method_id === "pix" &&
  payment.currency_id === PAYMENT_CURRENCY &&
  Number(payment.transaction_amount).toFixed(2) === PAYMENT_AMOUNT.toFixed(2);

const createPixPayment = onCall(
  { region: "southamerica-east1", maxInstances: 5, secrets: [mercadoPagoAccessToken] },
  async request => {
    const uid = request.auth?.uid;
    const email = request.auth?.token.email;
    if (!uid || !email) {
      throw new HttpsError("unauthenticated", "Entre com uma conta de email válida para continuar.");
    }

    const accessRef = db.collection("access").doc(uid);
    const activeOrderRef = db.collection("activePaymentOrders").doc(uid);
    const now = Date.now();
    let order;
    let orderRef;
    let shouldCreatePix = false;

    await db.runTransaction(async transaction => {
      const [accessSnapshot, activeOrderSnapshot] = await Promise.all([
        transaction.get(accessRef),
        transaction.get(activeOrderRef)
      ]);
      if (accessSnapshot.data()?.active === true) {
        throw new HttpsError("already-exists", "Esta conta já tem acesso liberado.");
      }

      const activeOrder = activeOrderSnapshot.data();
      if (activeOrder?.orderId) {
        const existingOrderRef = db.collection("paymentOrders").doc(activeOrder.orderId);
        const existingOrderSnapshot = await transaction.get(existingOrderRef);
        const existingOrder = existingOrderSnapshot.data();
        if (
          ["pending", "in_process", "authorized"].includes(existingOrder?.status) &&
          existingOrder.expiresAt?.toMillis() > now &&
          existingOrder.qrCode &&
          existingOrder.qrCodeBase64
        ) {
          order = existingOrder;
          orderRef = existingOrderRef;
          return;
        }
        if (
          existingOrder?.status === "creating" &&
          existingOrder.createdAt?.toMillis() > now - 60_000
        ) {
          throw new HttpsError("unavailable", "A cobrança está sendo preparada. Aguarde um minuto e tente novamente.");
        }
        if (existingOrder?.status === "creating" && existingOrder.expiresAt?.toMillis() > now) {
          order = existingOrder;
          orderRef = existingOrderRef;
          shouldCreatePix = true;
          return;
        }
      }

      const orderId = crypto.randomUUID();
      orderRef = db.collection("paymentOrders").doc(orderId);
      order = {
        uid,
        email,
        amount: PAYMENT_AMOUNT,
        currency: PAYMENT_CURRENCY,
        status: "creating",
        createdAt: Timestamp.fromMillis(now),
        expiresAt: Timestamp.fromMillis(now + PAYMENT_EXPIRATION_MS)
      };
      transaction.create(orderRef, order);
      transaction.set(activeOrderRef, { orderId, updatedAt: FieldValue.serverTimestamp() });
      shouldCreatePix = true;
    });

    if (!shouldCreatePix) {
      return {
        qrCode: order.qrCode,
        qrCodeBase64: order.qrCodeBase64,
        ticketUrl: order.ticketUrl || "",
        expiresAt: order.expiresAt.toDate().toISOString()
      };
    }

    const idempotencyKey = orderRef.id;
    let paymentResponse;
    try {
      paymentResponse = await fetch(`${MERCADO_PAGO_API}/v1/payments`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${mercadoPagoAccessToken.value()}`,
          "Content-Type": "application/json",
          "X-Idempotency-Key": idempotencyKey
        },
        body: JSON.stringify({
          transaction_amount: PAYMENT_AMOUNT,
          description: "Acesso à plataforma Operação PMPE",
          payment_method_id: "pix",
          payer: { email: order.email },
          external_reference: JSON.stringify({ uid, orderId: idempotencyKey }),
          date_of_expiration: order.expiresAt.toDate().toISOString()
        }),
        signal: AbortSignal.timeout(15_000)
      });
    } catch (error) {
      console.error("Falha de rede ao criar pagamento no Mercado Pago.", error);
      throw new HttpsError("unavailable", "Não foi possível conectar ao Mercado Pago. Tente novamente.");
    }

    if (!paymentResponse.ok) {
      console.error("Mercado Pago recusou a criação da cobrança.", {
        status: paymentResponse.status
      });
      throw new HttpsError("unavailable", "O Mercado Pago não conseguiu gerar o PIX. Tente novamente.");
    }

    const payment = await paymentResponse.json();
    const transactionData = payment.point_of_interaction?.transaction_data;
    if (
      !payment.id ||
      !isExpectedPixPayment(payment, uid, idempotencyKey) ||
      (payment.status !== "approved" && (!transactionData?.qr_code || !transactionData?.qr_code_base64))
    ) {
      console.error("Mercado Pago respondeu sem os dados de QR Code esperados.", payment.id);
      throw new HttpsError("internal", "O Mercado Pago retornou uma cobrança incompleta.");
    }

    const paymentStatus = payment.status === "approved" ? "approved" : "pending";
    await db.runTransaction(async transaction => {
      const latestOrder = await transaction.get(orderRef);
      if (latestOrder.data()?.uid !== uid) {
        throw new HttpsError("failed-precondition", "A cobrança não corresponde à conta autenticada.");
      }
      transaction.update(orderRef, {
        providerPaymentId: String(payment.id),
        providerStatus: payment.status || "pending",
        status: paymentStatus,
        qrCode: transactionData?.qr_code || "",
        qrCodeBase64: transactionData?.qr_code_base64 || "",
        ticketUrl: transactionData.ticket_url || "",
        updatedAt: FieldValue.serverTimestamp()
      });
      if (paymentStatus === "approved") {
        transaction.set(db.collection("access").doc(uid), {
          active: true,
          amount: PAYMENT_AMOUNT,
          currency: PAYMENT_CURRENCY,
          provider: "mercado_pago",
          paymentId: String(payment.id),
          grantedAt: FieldValue.serverTimestamp()
        });
      }
    });

    return {
      qrCode: transactionData?.qr_code || "",
      qrCodeBase64: transactionData?.qr_code_base64 || "",
      ticketUrl: transactionData.ticket_url || "",
      expiresAt: order.expiresAt.toDate().toISOString(),
      active: paymentStatus === "approved"
    };
  }
);

const verifyWebhookSignature = (request, dataId) => {
  const signatureHeader = request.get("x-signature") || "";
  const requestId = request.get("x-request-id") || "";
  const signatureParts = Object.fromEntries(
    signatureHeader.split(",").map(part => {
      const [key, ...value] = part.trim().split("=");
      return [key, value.join("=")];
    })
  );
  const timestamp = signatureParts.ts;
  const receivedSignature = signatureParts.v1;
  if (!timestamp || !receivedSignature || !requestId || !dataId) return false;

  const manifest = `id:${dataId};request-id:${requestId};ts:${timestamp};`;
  const expectedSignature = crypto
    .createHmac("sha256", mercadoPagoWebhookSecret.value())
    .update(manifest)
    .digest();
  let received;
  try {
    received = Buffer.from(receivedSignature, "hex");
  } catch {
    return false;
  }
  return received.length === expectedSignature.length &&
    crypto.timingSafeEqual(received, expectedSignature);
};

const mercadoPagoWebhook = onRequest(
  { region: "southamerica-east1", maxInstances: 5, secrets: [mercadoPagoAccessToken, mercadoPagoWebhookSecret] },
  async (request, response) => {
    if (request.method !== "POST") {
      response.status(405).send("Method not allowed");
      return;
    }

    const dataId = String(request.query["data.id"] || request.body?.data?.id || "").toLowerCase();
    if (!verifyWebhookSignature(request, dataId)) {
      response.status(401).send("Invalid signature");
      return;
    }

    let paymentResponse;
    try {
      paymentResponse = await fetch(`${MERCADO_PAGO_API}/v1/payments/${encodeURIComponent(dataId)}`, {
        headers: { Authorization: `Bearer ${mercadoPagoAccessToken.value()}` },
        signal: AbortSignal.timeout(15_000)
      });
    } catch (error) {
      console.error("Falha ao consultar pagamento notificado pelo Mercado Pago.", error);
      response.status(503).send("Payment verification unavailable");
      return;
    }
    if (!paymentResponse.ok) {
      console.error("Mercado Pago não confirmou a consulta do pagamento.", paymentResponse.status);
      response.status(503).send("Payment verification unavailable");
      return;
    }

    const payment = await paymentResponse.json();
    let reference;
    try {
      reference = JSON.parse(payment.external_reference || "");
    } catch {
      response.status(200).send("Ignored");
      return;
    }
    const { uid, orderId } = reference;
    if (
      typeof uid !== "string" ||
      typeof orderId !== "string" ||
      String(payment.id) !== dataId ||
      !isExpectedPixPayment(payment, uid, orderId)
    ) {
      response.status(200).send("Ignored");
      return;
    }

    const orderRef = db.collection("paymentOrders").doc(orderId);
    const accessRef = db.collection("access").doc(uid);
    await db.runTransaction(async transaction => {
      const orderSnapshot = await transaction.get(orderRef);
      const order = orderSnapshot.data();
      if (
        !orderSnapshot.exists ||
        order.uid !== uid ||
        order.amount !== PAYMENT_AMOUNT ||
        order.currency !== PAYMENT_CURRENCY ||
        order.providerPaymentId !== dataId
      ) {
        throw new Error("A notificação não corresponde a um pedido PIX registrado.");
      }

      transaction.update(orderRef, {
        status: payment.status,
        providerStatus: payment.status,
        updatedAt: FieldValue.serverTimestamp()
      });
      if (payment.status === "approved") {
        transaction.set(accessRef, {
          active: true,
          amount: PAYMENT_AMOUNT,
          currency: PAYMENT_CURRENCY,
          provider: "mercado_pago",
          paymentId: dataId,
          grantedAt: FieldValue.serverTimestamp()
        });
      } else if (payment.status === "refunded" || payment.status === "charged_back") {
        transaction.set(accessRef, {
          active: false,
          amount: PAYMENT_AMOUNT,
          currency: PAYMENT_CURRENCY,
          provider: "mercado_pago",
          paymentId: dataId,
          revokedAt: FieldValue.serverTimestamp()
        });
      }
    }).catch(error => {
      console.error("Não foi possível associar o webhook a um pedido PIX.", error);
      throw error;
    });

    response.status(200).send("OK");
  }
);

exports.createPixPayment = createPixPayment;
exports.mercadoPagoWebhook = mercadoPagoWebhook;
