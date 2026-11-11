import assert from "node:assert/strict";
import { requestCheckoutUrl } from "../checkout-client.mjs";

const calls = [];
const auth = {
    currentUser: {
        async getIdToken() {
            return "firebase-test-token";
        }
    }
};
const fetchImpl = async (url, options) => {
    calls.push({ url, options });
    return Response.json({ checkoutUrl: "https://www.mercadopago.com.br/checkout/test" });
};

const checkoutUrl = await requestCheckoutUrl({
    auth,
    concurso: "pcpe",
    plan: "semanal",
    workerUrl: "https://payments.example.workers.dev",
    fetchImpl
});
assert.equal(checkoutUrl, "https://www.mercadopago.com.br/checkout/test");
assert.equal(calls[0].url, "https://payments.example.workers.dev/checkout");
assert.equal(calls[0].options.method, "POST");
assert.equal(calls[0].options.headers.Authorization, "Bearer firebase-test-token");
assert.deepEqual(JSON.parse(calls[0].options.body), { concurso: "pcpe", plan: "semanal" });

await assert.rejects(
    requestCheckoutUrl({ auth: { currentUser: null }, concurso: "pmpe", plan: "mensal", workerUrl: "https://payments.example.workers.dev", fetchImpl }),
    /Entre na sua conta/
);
await assert.rejects(
    requestCheckoutUrl({ auth, concurso: "unknown", plan: "mensal", workerUrl: "https://payments.example.workers.dev", fetchImpl }),
    /concurso e um plano válidos/
);
await assert.rejects(
    requestCheckoutUrl({ auth, concurso: "pmpe", plan: "mensal", workerUrl: "", fetchImpl }),
    /ainda está sendo configurado/
);
await assert.rejects(
    requestCheckoutUrl({ auth, concurso: "pmpe", plan: "mensal", workerUrl: "http://payments.example.workers.dev", fetchImpl }),
    /URL segura/
);

await assert.rejects(
    requestCheckoutUrl({
        auth,
        concurso: "pppe",
        plan: "mensal",
        workerUrl: "https://payments.example.workers.dev",
        fetchImpl: async () => Response.json({ checkoutUrl: "https://mercadopago.com.br.evil.example/checkout" })
    }),
    /endereço de checkout inesperado/
);
await assert.rejects(
    requestCheckoutUrl({
        auth,
        concurso: "pmpe",
        plan: "mensal",
        workerUrl: "https://payments.example.workers.dev",
        fetchImpl: async () => Response.json({ error: "Worker indisponível" }, { status: 503 })
    }),
    /Worker indisponível/
);

console.log("OK: cliente de checkout autentica pedidos, valida configuração e restringe o destino ao Mercado Pago.");
