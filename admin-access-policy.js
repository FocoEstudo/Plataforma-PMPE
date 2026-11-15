(function (root, factory) {
    "use strict";
    const policy = factory();
    if (typeof module === "object" && module.exports) module.exports = policy;
    else root.AdminAccessPolicy = policy;
})(typeof globalThis !== "undefined" ? globalThis : this, function () {
    "use strict";

    const PLAN_DURATIONS_MS = Object.freeze({
        semanal: 7 * 24 * 60 * 60 * 1000,
        mensal: 30 * 24 * 60 * 60 * 1000
    });

    function mayGrantComplimentaryAccess(access, now = Date.now()) {
        if (!Number.isFinite(now)) return false;
        if (!access || access.active !== true) return true;
        if (access.plan === undefined || access.plan === "vitalicio") return false;

        const duration = PLAN_DURATIONS_MS[access.plan];
        if (!duration || typeof access.paidAt?.toMillis !== "function") return false;
        const paidAt = access.paidAt.toMillis();
        if (!Number.isSafeInteger(paidAt) || paidAt < 0) return false;
        return now >= paidAt + duration;
    }

    return Object.freeze({ mayGrantComplimentaryAccess });
});
