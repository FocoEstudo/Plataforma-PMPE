# Mercado Pago automatic access

This Worker creates a Mercado Pago checkout for the authenticated Firebase user and grants `access/{uid}` only after a signed Mercado Pago webhook is verified against the payment and its original preference. A later refund or chargeback for that payment revokes the grant. Direct Pix-key payments are not part of this automatic flow.

## Configure and deploy

1. Confirm the Mercado Pago account can create a production application and that its seller account is ready to receive payments. Create a production access token and configure a webhook for **Payments**.
2. In Google Cloud for Firebase project `estudos-pmpe`, create a service account with the Cloud Datastore User role. Create a private key, then store the service-account email and private key only as Cloudflare Worker secrets. Never put the downloaded JSON key in the repository or send it in chat.
3. In `wrangler.toml`, replace `REPLACE_WITH_YOUR_SITE_DOMAIN` with the actual HTTPS origin where the platform is hosted. Keep the local origin only if you need local testing.
4. Create a Cloudflare account, install Wrangler locally if needed, and run `npx wrangler login` followed by `npx wrangler deploy` from the repository root.
5. In the Cloudflare dashboard, open the `pmpe-payments` Worker settings and add these encrypted secrets:
   - `MP_ACCESS_TOKEN`: production access token from the Mercado Pago application.
   - `MP_WEBHOOK_SECRET`: webhook signing secret from that application.
   - `GOOGLE_SERVICE_ACCOUNT_EMAIL`: service-account email.
   - `GOOGLE_PRIVATE_KEY`: full PEM private key, including the `BEGIN` and `END` lines.
6. In the Mercado Pago application, set the production webhook URL to `https://<worker-name>.<account-subdomain>.workers.dev/webhook`, enable the **Payments** event, and save the application's signing secret as `MP_WEBHOOK_SECRET`. Use the application's webhook configuration so Mercado Pago signs notifications. Configure its test webhook URL separately when testing. Redeploy if the Worker URL or environment variables changed.
7. Set `PAYMENT_API_URL` in `session-guard.js` to the Worker origin, for example `https://pmpe-payments.<account-subdomain>.workers.dev`. Publish the website and Firestore rules to the Firebase project `estudos-pmpe`.
8. Test first with Mercado Pago test credentials and test payments. Verify that a pending or rejected payment does not create access, while an approved R$ 99,90 payment creates `access/{uid}` with `active: true`. Only switch to production credentials after the test succeeds.

The Worker uses the Firebase web API key only to validate an authenticated ID token; it does not grant access by trusting a client-supplied UID. Keep the Google service-account key, Mercado Pago access token, and webhook signing secret out of source control. The current Firestore rules deny client writes to `access`; the Worker writes through Google service-account IAM, bypassing Firestore client rules.

Automatic activation depends on the Worker, Mercado Pago webhook delivery, the Mercado Pago account being able to create preferences, and Google Cloud IAM configuration. The Firebase project may incur Google Cloud charges for service-account/API usage; Cloudflare's free plan also has limits and may change.
