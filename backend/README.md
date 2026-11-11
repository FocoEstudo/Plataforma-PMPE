# Pagamento e liberação de acesso

## Fluxo Pix manual (ativo)

The application currently uses direct Pix plus a Firebase-protected manual approval page. Checkout Pro buttons are connected to the payment screens, but automatic checkout is not active until the Worker is deployed and configured with Mercado Pago and Google Cloud secrets.

## Active Pix approval flow

1. Publish `index.html`, `session-guard.js`, `pppe/index.html`, `pppe/session-guard.js`, `assets/pix-mensal.png`, `assets/pix-vitalicio.png`, `assets/pix-planos.json`, `admin.html`, `admin.js`, and the matching login files to the website.
2. Publish `firestore.rules` in the Firestore Rules tab of the `estudos-pmpe` project. The rules authorize the verified Firebase account `ianitalocorp@gmail.com` to review requests and grant access; clients cannot grant access to themselves. The authorized admin can read a requesting user's profile, but cannot list all user profiles.
3. Confirm that `ianitalocorp@gmail.com` is a Firebase Authentication account and verify its email address. The owner should use the saved private administrator address and sign in with that account. If the browser is signed in as a student, use **Trocar de conta e entrar como administrador** on the admin page first. Review each request only after confirming the Pix in the bank statement.
4. When a student reaches the payment gate, select Mensal (R$ 24,90 for 30 days) or Vitalício (R$ 99,90, one payment) and register the selection to show its matching QR and Pix Copia e Cola. The admin queue can include accounts that have not paid yet: confirm the matching deposit in the bank statement before approving. Approval records the selected plan and payment time. A monthly access ends 30 days after approval; renewing requires another manual Pix and approval. The gate blocks expired monthly access and shows the plans again. Existing access documents without a plan remain lifetime access.

The static Pix QR codes and payloads do not confirm payment automatically. Approval must be based on the recipient's bank statement, not a screenshot sent by the payer. PMPE promo codes, when valid, apply only to the lifetime plan.

PMPE and PPPE registrations request identifying profile information. These entries are self-declared and do not prove identity; the administration queue displays available profile information alongside the account email. Do not request identity documents or CPF through the public registration form.

## Pix manual PCPE (implementação local)

Na PCPE, a pessoa entra com email e senha em `pcpe/index.html` e registra uma solicitação de acesso por Pix para os dois cargos. O endereço `pcpe/conta.html` continua disponível para acessos existentes. O plano mensal custa R$ 24,90 e dura 30 dias a partir da aprovação; o vitalício custa R$ 99,90. Um pedido pendente não pode ser alterado pelo usuário: antes de pagar, ele deve pedir ajuda ao atendimento se precisar modificá-lo. A renovação mensal é manual e só pode ser solicitada após o vencimento.

Na solicitação pendente PCPE, os arquivos `assets/pix-mensal.png`, `assets/pix-vitalicio.png` e `assets/pix-planos.json` exibem o QR Code e o Pix Copia e Cola correspondentes ao plano. Os QR Codes foram fornecidos pelo titular; confira o valor e o recebedor no banco antes de pagar. Após o vencimento, a conta mostra uma mensagem e oferece uma nova solicitação. Não há envio automático de mensagens por WhatsApp; o link disponível exige que o aluno envie a mensagem.
O teste `node scripts/test-pix-planos.js` verifica valores, moeda, destinatário, integridade dos códigos Pix e presença das imagens; ele não decodifica os QR Codes nem substitui a conferência no aplicativo do banco.

O administrador deve conferir o valor recebido no extrato antes de aprovar. O painel identifica a PCPE e o plano solicitado; a aprovação grava o acesso em `accessPcpe/{uid}`, separadamente de PMPE e PPPE. Na aprovação PCPE, uma transação relê o pedido e o acesso e impede a substituição de um acesso vigente ou inválido; a verificação de validade no painel depende do relógio do administrador. As regras avaliam o vencimento mensal usando `request.time` e `paidAt`, sem alterar acessos anteriores das outras plataformas. Dados de estudo permanecem no navegador, separados por conta e cargo; os dados da antiga prévia não são migrados automaticamente.

Antes de receber pagamentos, publique os arquivos da PCPE, `admin.js` e `firestore.rules` juntos, e teste autenticação, solicitações, aprovação, recusa e renovação no Firebase de testes. As páginas de estudo são arquivos estáticos, portanto o controle visual no navegador não protege seu conteúdo contra acesso direto; conteúdo privado deve ser servido por um backend ou por regras de acesso no servidor. Nenhuma publicação é realizada automaticamente.

Para testar as regras localmente, use o emulador Firestore com um projeto de demonstração e execute `scripts/test-firestore-pcpe.cjs` com `FIRESTORE_EMULATOR_HOST` apontando para ele. O teste requer Java, o emulador Firestore e os pacotes de desenvolvimento `firebase` e `@firebase/rules-unit-testing`; ele exige endereço local, gera um identificador de projeto isolado e apaga apenas seus próprios dados de teste. Os testes `node scripts/test-acesso-pcpe.js` e `node scripts/test-cartao-policy.js` não precisam do emulador.

O Checkout Pro está conectado aos controles de compra de PMPE, PPPE e PCPE. A versão Orders API do Worker está publicada em modo `test`, e `checkout-config.mjs` aponta para a URL pública do Worker. Ainda faltam as credenciais secretas do Mercado Pago e Google Cloud, configurar o webhook de Order, publicar o site com essa URL e testar o fluxo real de ponta a ponta. A oferta definida para PMPE, PCPE e PPPE é: semanal por R$ 6,25 (7 dias), mensal por R$ 24,90 (30 dias) e vitalício por R$ 99,90, todos com pagamento único. O checkout será validado para Pix e cartão; o vitalício pode permitir até 12 parcelas, sujeito às opções e condições da conta do vendedor. Renovação semanal ou mensal exige uma nova compra. O Pix manual permanece como alternativa; o desconto promocional PMPE só é aceito nesse fluxo por enquanto.

`planos-acesso.js` contém valores e durações. `backend/payment-catalog.mjs` centraliza os produtos e valida as Orders do Mercado Pago; `backend/worker.mjs` cria Orders pela API `/v1/orders`, recebe Webhooks de Order, consulta a Order diretamente e atualiza o acesso somente após confirmação. `checkout-client.mjs` obtém a URL do checkout com um token Firebase e valida o destino Mercado Pago; os botões dos três concursos usam esse cliente. A antiga `functions/credit-card-policy.js` continua sendo uma base isolada e não é usada por esse Worker. Nunca confie no preço nem no estado de pagamento enviados pelo navegador.

Antes de ativar o checkout em produção, configure e teste os meios efetivamente oferecidos (inclusive Pix e cartão), as parcelas e quem arca com juros. Faça testes de ponta a ponta de pagamentos pendentes, aprovados, recusados, reembolsados e contestados, incluindo notificações repetidas e falhas temporárias do provedor. O Worker valida a assinatura, consulta o pagamento diretamente e só concede acesso após aprovação; o retorno do navegador não confirma pagamento.

## Worker Mercado Pago (Orders API publicada em modo de teste)

O Worker está publicado com `MP_MODE = "test"`, sem secrets cadastrados e sem ativação de cobranças de produção. Não ative pagamentos reais até concluir a configuração e os testes abaixo.

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
