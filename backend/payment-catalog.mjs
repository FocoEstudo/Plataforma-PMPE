const CONCURSOS = Object.freeze({
    pmpe: Object.freeze({ label: "PMPE", accessCollection: "access", returnPath: "/index.html" }),
    pppe: Object.freeze({ label: "PPPE", accessCollection: "accessPppe", returnPath: "/pppe/index.html" }),
    pcpe: Object.freeze({ label: "PCPE", accessCollection: "accessPcpe", returnPath: "/pcpe/conta.html" })
});

const PLANS = Object.freeze({
    semanal: Object.freeze({ label: "Semanal", amount: 6.25, durationMs: 7 * 24 * 60 * 60 * 1000 }),
    mensal: Object.freeze({ label: "Mensal", amount: 24.90, durationMs: 30 * 24 * 60 * 60 * 1000 }),
    vitalicio: Object.freeze({ label: "Vitalício", amount: 99.90, durationMs: null })
});

export const getProduct = (concurso, plan) => {
    const contest = Object.hasOwn(CONCURSOS, concurso) ? CONCURSOS[concurso] : null;
    const accessPlan = Object.hasOwn(PLANS, plan) ? PLANS[plan] : null;
    if (!contest || !accessPlan) return null;
    return Object.freeze({
        id: `${concurso}-${plan}`,
        concurso,
        plan,
        title: `Operação ${contest.label} - acesso ${accessPlan.label.toLowerCase()}`,
        accessCollection: contest.accessCollection,
        returnPath: contest.returnPath,
        amount: accessPlan.amount,
        durationMs: accessPlan.durationMs
    });
};

export const verifyMarketplaceOrder = (order, marketplaceOrder) => {
    const product = getProduct(order?.concurso, order?.plan);
    if (!product || !order?.id || !order?.uid ||
        Number(order.amount) !== product.amount ||
        order.currency !== "BRL" ||
        !marketplaceOrder?.id ||
        (order.providerOrderId && String(marketplaceOrder.id) !== order.providerOrderId) ||
        marketplaceOrder.external_reference !== order.id ||
        Number(marketplaceOrder.total_amount) !== product.amount ||
        marketplaceOrder.currency !== "BRL" ||
        !Array.isArray(marketplaceOrder.items) ||
        marketplaceOrder.items.length !== 1) {
        return false;
    }

    const [item] = marketplaceOrder.items;
    return item.external_code === product.id &&
        item.title === product.title &&
        Number(item.quantity) === 1 &&
        Number(item.unit_price) === product.amount;
};

export const getAccessCollection = concurso =>
    Object.hasOwn(CONCURSOS, concurso) ? CONCURSOS[concurso].accessCollection : null;
