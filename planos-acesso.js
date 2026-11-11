(function (root, factory) {
    'use strict';
    const policy = factory();
    if (typeof module === 'object' && module.exports) module.exports = policy;
    else root.PlanosAcesso = policy;
})(typeof globalThis !== 'undefined' ? globalThis : this, function () {
    'use strict';

    const PLANS = Object.freeze({
        semanal: Object.freeze({ id: 'semanal', label: 'Semanal', amount: 6.25, durationMs: 7 * 24 * 60 * 60 * 1000 }),
        mensal: Object.freeze({ id: 'mensal', label: 'Mensal', amount: 24.90, durationMs: 30 * 24 * 60 * 60 * 1000 }),
        vitalicio: Object.freeze({ id: 'vitalicio', label: 'Vitalício', amount: 99.90, durationMs: null })
    });

    function getPlan(id) {
        if (!Object.prototype.hasOwnProperty.call(PLANS, id)) {
            throw new RangeError('Plano de acesso inválido.');
        }
        return PLANS[id];
    }

    function expirationForApproval(planId, approvedAtMs) {
        const plan = getPlan(planId);
        if (!Number.isSafeInteger(approvedAtMs) || approvedAtMs < 0) {
            throw new RangeError('Data de aprovação inválida.');
        }
        if (plan.durationMs === null) return null;
        const expiration = approvedAtMs + plan.durationMs;
        if (!Number.isSafeInteger(expiration)) throw new RangeError('Data de vencimento inválida.');
        return expiration;
    }

    return Object.freeze({ PLANS, getPlan, expirationForApproval });
});
