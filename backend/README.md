# Pagamento e liberação de acesso

## Fluxo Pix manual (ativo)

The application currently uses direct Pix plus a Firebase-protected manual approval page. This optional Worker checkout is not connected to the payment screen and is not active; it requires Mercado Pago and Google Cloud secrets that must be created by the account owner.

## Active Pix approval flow

1. Publish `index.html`, `session-guard.js`, `pix-qr.png`, `admin.html`, `admin.js`, and `login.html` to the website.
2. Publish `firestore.rules` in the Firestore Rules tab of the `estudos-pmpe` project. The rules authorize the verified Firebase account `ianitalocorp@gmail.com` to review requests and grant access; clients cannot grant access to themselves.
3. Confirm that `ianitalocorp@gmail.com` is a Firebase Authentication account and verify its email address. Open `/admin.html` on the published site, sign in with that account, and review each request only after confirming the Pix in the bank statement.
4. When a student reaches the payment gate, a pending request is automatically linked to their signed-in account. The student pays using the QR code or Pix key and does not need to click a payment-confirmation button or send a receipt. The admin queue can therefore include accounts that have not paid yet: confirm the matching deposit in the bank statement before approving. Approval updates the access document for that UID; an online student is admitted immediately, otherwise they can sign in later.

The Pix QR and key do not provide an automatic bank confirmation. Approval must be based on the recipient's bank statement, not a screenshot sent by the payer.

## Worker Mercado Pago opcional (inativo)

The Worker code below is not connected to the site. Do not deploy it as the active payment flow unless the checkout frontend, Mercado Pago secrets, webhook, Google service account, and Firestore access path have all been configured and tested.

### Configure the optional checkout

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
7. The current `session-guard.js` does not call this Worker. Reconnecting checkout requires a deliberate frontend implementation; do not add a payment token to client-side code.
8. Test first with Mercado Pago test credentials and test payments. Verify that a pending or rejected payment does not create access, while an approved R$ 99,90 payment creates `access/{uid}` with `active: true`. Only switch to production credentials after the test succeeds.

The Worker uses the Firebase web API key only to validate an authenticated ID token; it does not grant access by trusting a client-supplied UID. Keep the Google service-account key, Mercado Pago access token, and webhook signing secret out of source control. The current Firestore rules deny client writes to `access`; the Worker writes through Google service-account IAM, bypassing Firestore client rules.

Automatic activation depends on the Worker, Mercado Pago webhook delivery, the Mercado Pago account being able to create preferences, and Google Cloud IAM configuration. The Firebase project may incur Google Cloud charges for service-account/API usage; Cloudflare's free plan also has limits and may change.
