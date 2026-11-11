# Pagamento e liberação de acesso

## Fluxo Pix manual (ativo)

The application currently uses direct Pix plus a Firebase-protected manual approval page. This optional Worker checkout is not connected to the payment screen and is not active; it requires Mercado Pago and Google Cloud secrets that must be created by the account owner.

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

Cartão de crédito ainda não está integrado. A intenção é usar Mercado Pago para os três concursos, com assinatura mensal recorrente e parcelamento do vitalício; os fluxos de confirmação, reembolso, cancelamento e testes precisam estar completos antes de habilitar a cobrança. O Worker e as Functions existentes abaixo não implementam essa solução.

`functions/credit-card-policy.js` prepara os parâmetros do Checkout Pro vitalício e da assinatura mensal pendente, e valida as referências, valores e estados de pagamentos consultados no provedor. Esse módulo é apenas uma base: **não cria cobranças, não consulta o Mercado Pago, não processa webhooks e não libera acesso**. A assinatura deve liberar o período pago apenas depois da confirmação do pagamento, manter o acesso até o fim desse período em caso de cancelamento ou falha da cobrança seguinte e usar o ciclo mensal do provedor, não os 30 dias do Pix. O limite proposto para o vitalício é de 12 parcelas; os juros e a disponibilidade dependem das configurações da conta do vendedor.

A Function `cancelCardSubscription` prepara o cancelamento de uma assinatura mensal do usuário autenticado. Ela consulta o pedido privado `cardPaymentOrders/{orderId}`, verifica a associação com a assinatura no Mercado Pago e só informa sucesso após a confirmação do provedor e o registro da operação. Cancelar não altera os documentos de acesso. A operação é segura para repetição quando o provedor já confirmou o cancelamento, inclusive após falha ao gravar no Firestore. Ainda não há checkout criando esses pedidos nem interface de cancelamento, portanto a Function não constitui um fluxo ativo. A implementação usa o estado `canceled` documentado na [API de gerenciamento de assinaturas](https://www.mercadopago.com.br/developers/pt/docs/subscriptions/subscription-management).

O Checkout Pro pode oferecer saldo em conta mesmo quando outros meios são excluídos. Antes de ativar o checkout, defina e teste como tratar cada meio efetivamente oferecido, configure o parcelamento sem subsidiar juros e implemente conciliação idempotente, proteção contra cobranças duplicadas, assinatura das notificações, consulta direta ao provedor, reembolso e contestação. Não trate o retorno do navegador nem a autorização da assinatura como confirmação de pagamento.

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
