(function (root, factory) {
    'use strict';
    const policy = factory();
    if (typeof module === 'object' && module.exports) module.exports = policy;
    else root.PcpeAccessPolicy = policy;
})(typeof globalThis !== 'undefined' ? globalThis : this, function () {
    'use strict';
    const DURATION_MS = Object.freeze({
        semanal: 7 * 24 * 60 * 60 * 1000,
        mensal: 30 * 24 * 60 * 60 * 1000
    });

    function expiresAt(access) {
        if (!access || access.active !== true) return null;
        if (access.plan === 'vitalicio') return Infinity;
        const durationMs = DURATION_MS[access.plan];
        if (!durationMs || typeof access.paidAt?.toMillis !== 'function') return null;
        const time = access.paidAt.toMillis();
        return Number.isSafeInteger(time) && time >= 0 ? time + durationMs : null;
    }
    function hasAccess(access, now = Date.now()) {
        const expiration = expiresAt(access);
        return expiration !== null && Number.isFinite(now) && now < expiration;
    }
    function mayApprovePix(access, now = Date.now()) {
        if (!access || access.active === false) return true;
        if (access.active !== true || !Number.isFinite(now)) return false;
        const expiration = expiresAt(access);
        return expiration !== null && expiration !== Infinity && now >= expiration;
    }
    return Object.freeze({ expiresAt, hasAccess, mayApprovePix });
});
