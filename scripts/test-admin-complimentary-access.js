"use strict";

const assert = require("node:assert/strict");
const {
  normalizeGrantEmail,
  mayGrantComplimentaryAccess
} = require("../admin-access-policy.js");

const now = 2_000_000_000_000;
const timestamp = value => ({ toMillis: () => value });
assert.equal(normalizeGrantEmail("  aluno@example.com "), "aluno@example.com");
assert.throws(() => normalizeGrantEmail("email-invalido"), { code: "invalid-email" });
assert.equal(mayGrantComplimentaryAccess(null, now), true);
assert.equal(mayGrantComplimentaryAccess({ active: false }, now), true);
assert.equal(mayGrantComplimentaryAccess({
  active: true,
  plan: "mensal",
  paidAt: timestamp(now - 29 * 24 * 60 * 60 * 1000)
}, now), false);
assert.equal(mayGrantComplimentaryAccess({
  active: true,
  plan: "mensal",
  paidAt: timestamp(now - 30 * 24 * 60 * 60 * 1000)
}, now), true);
assert.equal(mayGrantComplimentaryAccess({
  active: true,
  plan: "semanal",
  paidAt: timestamp(now - 7 * 24 * 60 * 60 * 1000)
}, now), true);
assert.equal(mayGrantComplimentaryAccess({ active: true, plan: "vitalicio" }, now), false);
assert.equal(mayGrantComplimentaryAccess({ active: true }, now), false);
assert.equal(mayGrantComplimentaryAccess({ active: true, plan: "mensal" }, now), false);
assert.equal(mayGrantComplimentaryAccess({
  active: true,
  plan: "anual",
  paidAt: timestamp(now - 365 * 24 * 60 * 60 * 1000)
}, now), false);
assert.equal(mayGrantComplimentaryAccess(null, Number.NaN), false);

console.log("OK: validação do email e proteção contra sobrescrever acessos vigentes.");
