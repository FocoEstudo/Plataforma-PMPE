import assert from "node:assert/strict";
import { getAccessCollection, getProduct, verifyMarketplaceOrder } from "../backend/payment-catalog.mjs";
import plans from "../planos-acesso.js";

const order = {
    id: "bf5ed437-1697-4e16-a4cc-e47534c6792b",
    uid: "firebase-user-id",
    concurso: "pmpe",
    plan: "semanal",
    amount: 6.25,
    currency: "BRL"
};
const marketplaceOrder = {
    id: "ORDTST01ABC123",
    external_reference: order.id,
    total_amount: "6.25",
    currency: "BRL",
    items: [{
        external_code: "pmpe-semanal",
        title: "Operação PMPE - acesso semanal",
        quantity: 1,
        unit_price: "6.25"
    }]
};
order.providerOrderId = marketplaceOrder.id;

for (const [planId, contest] of [["semanal", "pmpe"], ["mensal", "pppe"], ["vitalicio", "pcpe"]]) {
    const product = getProduct(contest, planId);
    assert.equal(product.amount, plans.getPlan(planId).amount);
    assert.equal(product.durationMs, plans.getPlan(planId).durationMs);
    assert.equal(getAccessCollection(contest), { pmpe: "access", pppe: "accessPppe", pcpe: "accessPcpe" }[contest]);
}

assert.equal(verifyMarketplaceOrder(order, marketplaceOrder), true);
assert.equal(verifyMarketplaceOrder(order, { ...marketplaceOrder, id: "another-order" }), false);
assert.equal(verifyMarketplaceOrder({ ...order, amount: 99.90 }, marketplaceOrder), false);
assert.equal(verifyMarketplaceOrder(order, { ...marketplaceOrder, total_amount: "24.90" }), false);
assert.equal(verifyMarketplaceOrder(order, { ...marketplaceOrder, external_reference: "different-order" }), false);
assert.equal(verifyMarketplaceOrder(order, {
    ...marketplaceOrder,
    items: [{ ...marketplaceOrder.items[0], external_code: "pppe-semanal" }]
}), false);
assert.equal(verifyMarketplaceOrder({ ...order, concurso: "unknown" }, marketplaceOrder), false);
assert.equal(getProduct("pmpe", "unknown"), null);
assert.equal(getProduct("constructor", "mensal"), null);
assert.equal(getProduct("pmpe", "constructor"), null);
assert.equal(getAccessCollection("constructor"), null);
console.log("OK: catálogo e validação de produtos de Checkout Pro.");
