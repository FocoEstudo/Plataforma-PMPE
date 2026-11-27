import assert from "node:assert/strict";
import { generateKeyPairSync } from "node:crypto";
import { sendPcpeStudyReminders } from "../backend/worker.mjs";

const encodePublicKey = key => {
    const jwk = key.export({ format: "jwk" });
    return Buffer.concat([
        Buffer.from([4]),
        Buffer.from(jwk.x, "base64url"),
        Buffer.from(jwk.y, "base64url")
    ]).toString("base64url");
};

const googleKeyPair = generateKeyPairSync("rsa", { modulusLength: 2048 });
const vapidKeyPair = generateKeyPairSync("ec", { namedCurve: "prime256v1" });
const deviceKeyPair = generateKeyPairSync("ec", { namedCurve: "prime256v1" });
const vapidJwk = vapidKeyPair.privateKey.export({ format: "jwk" });
const deviceJwk = deviceKeyPair.privateKey.export({ format: "jwk" });
const subscription = {
    endpoint: "https://push.example.test/device",
    expirationTime: null,
    keys: {
        auth: Buffer.alloc(16, 5).toString("base64url"),
        p256dh: encodePublicKey(deviceKeyPair.publicKey)
    }
};
const documentName = "projects/estudos-pmpe/databases/(default)/documents/pcpeStudyReminders/student-1/devices/device-1";
const deviceDocument = {
    name: documentName,
    fields: {
        uid: { stringValue: "student-1" },
        enabled: { booleanValue: true },
        timeZone: { stringValue: "America/Recife" },
        times: { arrayValue: { values: ["08:00", "14:00", "19:00"].map(stringValue => ({ stringValue })) } },
        subscription: {
            mapValue: {
                fields: {
                    endpoint: { stringValue: subscription.endpoint },
                    expirationTime: { nullValue: null },
                    keys: {
                        mapValue: {
                            fields: {
                                auth: { stringValue: subscription.keys.auth },
                                p256dh: { stringValue: subscription.keys.p256dh }
                            }
                        }
                    }
                }
            }
        }
    }
};
const unrelatedDeviceDocument = {
    name: "projects/estudos-pmpe/databases/(default)/documents/otherCollection/student-2/devices/device-2",
    fields: deviceDocument.fields
};
const previousFetch = globalThis.fetch;
const requests = [];
let deliveryWriteSucceeded = false;

globalThis.fetch = async (input, init = {}) => {
    const url = new URL(input);
    requests.push({ url, init });
    if (url.hostname === "oauth2.googleapis.com") {
        return Response.json({ access_token: "test-google-token", expires_in: 3600 });
    }
    if (url.pathname.endsWith("/documents:runQuery")) {
        return Response.json([{ document: deviceDocument }, { document: unrelatedDeviceDocument }]);
    }
    if (url.pathname.endsWith("/documents/accessPcpe/student-1")) {
        return Response.json({ fields: { active: { booleanValue: true }, plan: { stringValue: "vitalicio" } } });
    }
    if (init.method === "PATCH"
        && url.pathname.endsWith("/documents/pcpeStudyReminders/student-1/deliveryState/device-1")) {
        deliveryWriteSucceeded = true;
        return new Response(null, { status: 200 });
    }
    if (url.pathname.endsWith("/documents/pcpeStudyReminders/student-1/deliveryState/device-1")) {
        return new Response(null, { status: 404 });
    }
    if (url.hostname === "push.example.test") {
        const headers = new Headers(init.headers);
        assert.equal(headers.get("content-encoding"), "aes128gcm");
        return new Response(null, { status: 201 });
    }
    throw new Error(`Unexpected request: ${init.method || "GET"} ${url.pathname}`);
};

try {
    await sendPcpeStudyReminders({
        scheduledTime: Date.parse("2026-11-27T11:00:00Z"),
        cron: "0 11 * * *"
    }, {
        FIREBASE_PROJECT_ID: "estudos-pmpe",
        GOOGLE_SERVICE_ACCOUNT_EMAIL: "worker-test@example.iam.gserviceaccount.com",
        GOOGLE_PRIVATE_KEY: googleKeyPair.privateKey.export({ format: "pem", type: "pkcs8" }),
        PCPE_PUSH_VAPID_PUBLIC_KEY: encodePublicKey(vapidKeyPair.publicKey),
        PCPE_PUSH_VAPID_PRIVATE_KEY: vapidJwk.d
    });

    assert.equal(requests.filter(request => request.url.hostname === "push.example.test").length, 1);
    assert.equal(deliveryWriteSucceeded, true);
    const deliveryWrite = requests.find(request =>
        request.url.pathname.endsWith("/documents/pcpeStudyReminders/student-1/deliveryState/device-1")
        && request.init.method === "PATCH"
    );
    assert.ok(deliveryWrite);
    assert.match(deliveryWrite.init.body, /2026-11-27:08:00/);
    console.log("OK: envio agendado, chave VAPID, acesso PCPE e filtro de dispositivos.");
} finally {
    globalThis.fetch = previousFetch;
}
