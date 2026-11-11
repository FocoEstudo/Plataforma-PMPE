import { PAYMENT_WORKER_URL } from "./checkout-config.mjs";

const CONCURSOS = new Set(["pmpe", "pcpe", "pppe"]);
const PLANS = new Set(["semanal", "mensal", "vitalicio"]);

export async function requestCheckoutUrl({
    auth,
    concurso,
    plan,
    workerUrl = PAYMENT_WORKER_URL,
    fetchImpl = fetch
}) {
    if (!auth?.currentUser) throw new Error("Entre na sua conta antes de iniciar o pagamento.");
    if (!CONCURSOS.has(concurso) || !PLANS.has(plan)) {
        throw new Error("Selecione um concurso e um plano válidos.");
    }
    if (typeof workerUrl !== "string" || !workerUrl.trim()) {
        throw new Error("O checkout ainda está sendo configurado. Tente novamente mais tarde.");
    }

    const workerBase = new URL(workerUrl);
    if (workerBase.protocol !== "https:" || workerBase.username || workerBase.password ||
        workerBase.search || workerBase.hash) {
        throw new Error("A URL segura do checkout está configurada incorretamente.");
    }

    const idToken = await auth.currentUser.getIdToken();
    const response = await fetchImpl(`${workerBase.href.replace(/\/+$/, "")}/checkout`, {
        method: "POST",
        headers: {
            Authorization: `Bearer ${idToken}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ concurso, plan })
    });

    let result;
    try {
        result = await response.json();
    } catch {
        throw new Error("O serviço de checkout retornou uma resposta inválida.");
    }
    if (!response.ok) {
        throw new Error(typeof result.error === "string"
            ? result.error
            : "Não foi possível iniciar o checkout. Tente novamente.");
    }

    const checkoutUrl = new URL(result.checkoutUrl);
    if (checkoutUrl.protocol !== "https:" ||
        (checkoutUrl.hostname !== "mercadopago.com.br" &&
            !checkoutUrl.hostname.endsWith(".mercadopago.com.br"))) {
        throw new Error("O Mercado Pago retornou um endereço de checkout inesperado.");
    }
    return checkoutUrl.href;
}
