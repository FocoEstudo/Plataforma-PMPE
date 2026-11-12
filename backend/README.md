# Pagamento e liberação de acesso

## Checkout Mercado Pago

PMPE, PPPE e PCPE usam o Checkout Pro integrado à Orders API do Worker. O estudante seleciona um plano e conclui a compra no Mercado Pago; o acesso é concedido pelo Worker somente depois que o webhook é validado e a Order é consultada como aprovada. Não há mais solicitação de Pix manual na jornada do estudante, nem desconto PMPE associado a esse fluxo.

O Worker está publicado com `MP_MODE = "production"` e o Pix e o cartão foram validados em produção; o webhook de produção está configurado para o evento Order (Mercado Pago). O ID da Order deve ser usado em minúsculas no manifesto da assinatura (`x-signature`), como o Mercado Pago exige. As formas disponíveis no checkout dependem da configuração e elegibilidade da conta Mercado Pago. A renovação dos planos semanal e mensal exige uma nova compra.

Observabilidade: o painel de Webhooks do Mercado Pago mostra o código HTTP de cada entrega (200 = acesso concedido, 401 = assinatura ou segredo incorretos). Mantenha `MP_WEBHOOK_SECRET` igual ao segredo do webhook de **produção**.

A oferta para cada concurso é semanal por R$ 6,25 (7 dias), mensal por R$ 24,90 (30 dias) e vitalícia por R$ 99,90, todos como pagamentos únicos.

`planos-acesso.js` contém os valores e durações. `backend/payment-catalog.mjs` centraliza produtos e valida Orders; `backend/worker.mjs` cria Orders pela API `/v1/orders`, valida os Webhooks, consulta a Order diretamente e atualiza o acesso somente após aprovação. `checkout-client.mjs` obtém a URL do checkout com um token Firebase e valida o destino Mercado Pago. A antiga `functions/credit-card-policy.js` é isolada e não é usada por esse Worker. Nunca confie no preço nem no estado de pagamento enviados pelo navegador.

Os cadastros PMPE e PPPE podem solicitar informações de perfil. Esses dados são autodeclarados e não comprovam identidade; não solicite documentos de identidade nem CPF no formulário público.

Para testar as regras localmente, use o emulador Firestore com um projeto de demonstração e execute `scripts/test-firestore-pcpe.cjs` com `FIRESTORE_EMULATOR_HOST` apontando para ele. O teste requer Java, o emulador Firestore e os pacotes de desenvolvimento `firebase` e `@firebase/rules-unit-testing`; ele exige endereço local, gera um identificador de projeto isolado e apaga apenas seus próprios dados de teste. Os testes `node scripts/test-acesso-pcpe.js` e `node scripts/test-cartao-policy.js` não precisam do emulador.

Antes de ativar o checkout em produção, configure e teste os meios efetivamente oferecidos (inclusive Pix e cartão), as parcelas e quem arca com juros. Faça testes de ponta a ponta de pagamentos pendentes, aprovados, recusados, reembolsados e contestados, incluindo notificações repetidas e falhas temporárias do provedor. O Worker valida a assinatura, consulta o pagamento diretamente e só concede acesso após aprovação; o retorno do navegador não confirma pagamento.

## Worker Mercado Pago (Orders API em produção)

O Worker está publicado com `MP_MODE = "production"`. Os passos abaixo documentam a configuração; durante testes, use credenciais de teste e `MP_MODE = "test"`.

### Configure the optional checkout

1. Crie uma aplicação para **Checkout Pro** com **API de Orders**. Mantenha o ambiente em **Teste** durante a validação e use o Access Token de teste dessa aplicação. Na configuração de Webhooks da mesma aplicação, selecione **Teste** e o evento **Order (Mercado Pago)**. O Worker usa a API `POST /v1/orders` e a URL `checkout_url` retornada pelo Mercado Pago.
2. In Google Cloud for Firebase project `estudos-pmpe`, create a service account with the Cloud Datastore User role. Create a private key, then store the service-account email and private key only as Cloudflare Worker secrets. Never put the downloaded JSON key in the repository or send it in chat.
3. Confirm `APP_BASE_URL` and `ALLOWED_ORIGINS` in `wrangler.toml` match the deployed site. The current values are configured for GitHub Pages and local development.
4. Create a Cloudflare account, install Wrangler locally if needed, and run `npx wrangler login` from the repository root.
5. In the Cloudflare dashboard, open the `gentle-mud-b7cd` Worker settings and add these encrypted secrets:
   - `MP_ACCESS_TOKEN`: test Access Token from the Mercado Pago application while `MP_MODE` is `test`.
   - `MP_WEBHOOK_SECRET`: webhook signing secret for the same test application.
   - `GOOGLE_SERVICE_ACCOUNT_EMAIL`: service-account email.
   - `GOOGLE_PRIVATE_KEY`: full PEM private key, including the `BEGIN` and `END` lines.
6. Only after the frontend is connected and the required configuration is present, run `npx wrangler deploy` to publish the Worker and obtain its URL. Then set the **test** webhook URL to `https://<worker-name>.<account-subdomain>.workers.dev/webhook`, enable the **Order (Mercado Pago)** event, and save the test application's signing secret as `MP_WEBHOOK_SECRET`. Use the application's webhook configuration so Mercado Pago signs notifications. Configure the production webhook separately only when deliberately switching credentials and `MP_MODE` to `production`.
7. The public Worker URL is set in `checkout-config.mjs` as `PAYMENT_WORKER_URL`. Publish the updated site after reviewing the changes. Do not add a Mercado Pago Access Token to client-side code.
8. Test first with Mercado Pago test credentials and test payments. Verify that pending or rejected payments do not create access, and that approved payments grant the selected plan to the matching contest. Weekly and monthly expirations are calculated from the provider's approval time; lifetime access has no expiry. Do not switch to production credentials until integration tests pass.

The checkout request requires an authenticated Firebase ID token and a server-validated contest/plan pair. The Worker stores a private order and uses its random ID as the Mercado Pago external reference; it does not grant access by trusting a client-supplied UID. The webhook verifies its signature, fetches the Order from `GET /v1/orders/{id}`, checks its external reference, amount, item, and stored product, then grants access only for a processed/accredited payment. Keep the Google service-account key, Mercado Pago Access Token, and webhook signing secret out of source control. Firestore client rules deny direct client writes to access documents; the Worker writes through Google service-account IAM.

Automatic activation depends on configuring the Mercado Pago and Google Cloud secrets/IAM, configuring the test Order webhook, publishing the site and matching Firestore rules/access guards, and testing the webhook. The Firebase project may incur Google Cloud charges for service-account/API usage; Cloudflare's plan has limits and may change.
