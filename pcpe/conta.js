import { auth, db } from '../firebase-config.js';
import { requestCheckoutUrl } from '../checkout-client.mjs';
import { createUserWithEmailAndPassword, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signOut } from 'https://www.gstatic.com/firebasejs/12.4.0/firebase-auth.js';
import { doc, onSnapshot, serverTimestamp, setDoc } from 'https://www.gstatic.com/firebasejs/12.4.0/firebase-firestore.js';

const $ = id => document.getElementById(id);
let user = null;
let access;
let request;
let stopAccess;
let stopRequest;
let verificationTimer;
let generation = 0;
let authMode = 'login';
const setStatus = (message, error = false) => {
    $('status').textContent = message;
    $('status').dataset.error = String(error);
};
const hideAccountSections = () => {
    ['checking', 'granted', 'purchase', 'pending'].forEach(id => { $(id).hidden = true; });
};
const render = () => {
    hideAccountSections();
    $('expired-message').hidden = true;
    if (access === undefined || request === undefined) {
        $('checking').hidden = false;
        return;
    }
    clearTimeout(verificationTimer);
    if (PcpeAccessPolicy.hasAccess(access)) {
        $('granted').hidden = false;
        const expiry = PcpeAccessPolicy.expiresAt(access);
        $('access-description').textContent = expiry === Infinity
            ? 'Plano vitalício. O acesso inclui os dois cargos.'
            : `Plano ${PlanosAcesso.getPlan(access.plan).label.toLowerCase()} válido até ${new Date(expiry).toLocaleString('pt-BR')}.`;
        return;
    }
    const expiry = PcpeAccessPolicy.expiresAt(access);
    if (expiry !== null && expiry !== Infinity && Date.now() >= expiry) {
        $('expired-message').hidden = false;
        $('expired-message').textContent = request?.status === 'pending'
            ? 'Seu plano por período PCPE venceu. Conclua o pagamento da solicitação pendente; o acesso será liberado após a confirmação.'
            : 'Seu plano por período PCPE venceu. Para continuar estudando, escolha um plano e conclua uma nova compra.';
    }
    if (request?.status === 'pending') {
        if (!['mensal', 'vitalicio'].includes(request.plan)) {
            setStatus('A solicitação registrada contém um plano inválido. Entre em contato com o atendimento.', true);
            return;
        }
        $('pending').hidden = false;
        const plan = PlanosAcesso.getPlan(request.plan);
        $('pending-plan').textContent = `Plano ${plan.label}: ${plan.amount.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}.`;
        $('pix-qr').src = `../assets/pix-${plan.id}.png`;
        $('pix-qr').alt = `QR Code Pix do plano ${plan.label}, ${plan.amount.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`;
        const text = `Olá! Solicitei o plano ${plan.label} da PCPE para a conta ${user.email}. Vou enviar o comprovante do Pix de ${plan.amount.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}.`;
        $('receipt-link').href = `https://wa.me/5566996884580?text=${encodeURIComponent(text)}`;
        return;
    }
    $('purchase').hidden = false;
    if (request?.status === 'rejected') setStatus('A solicitação anterior foi recusada. Verifique com o atendimento antes de solicitar novamente.', true);
};
const startListeners = current => {
    const expected = ++generation;
    access = undefined;
    request = undefined;
    render();
    verificationTimer = setTimeout(() => {
        if (expected === generation && (access === undefined || request === undefined)) {
            setStatus('A verificação está demorando. Confira a conexão e recarregue a página se necessário.', true);
        }
    }, 15000);
    const onError = error => {
        if (expected !== generation) return;
        generation++;
        clearTimeout(verificationTimer);
        stopAccess?.();
        stopRequest?.();
        console.error('Falha ao verificar acesso PCPE.', error);
        hideAccountSections();
        setStatus('Não foi possível verificar o acesso. Confira sua conexão e as regras do Firestore, depois recarregue a página.', true);
    };
    stopAccess = onSnapshot(doc(db, 'accessPcpe', current.uid), { includeMetadataChanges: true }, snapshot => {
        if (expected !== generation || snapshot.metadata.fromCache || snapshot.metadata.hasPendingWrites) return;
        access = snapshot.exists() ? snapshot.data() : null;
        render();
    }, onError);
    stopRequest = onSnapshot(doc(db, 'accessRequestsPcpe', current.uid), { includeMetadataChanges: true }, snapshot => {
        if (expected !== generation || snapshot.metadata.fromCache || snapshot.metadata.hasPendingWrites) return;
        request = snapshot.exists() ? snapshot.data() : null;
        render();
    }, onError);
};

onAuthStateChanged(auth, current => {
    generation++;
    clearTimeout(verificationTimer);
    stopAccess?.();
    stopRequest?.();
    user = current;
    setStatus('');
    $('authentication').hidden = !!current;
    $('account').hidden = !current;
    const heading = $('account-heading');
    if (heading) heading.textContent = current ? 'Conta e acesso' : 'Entre para continuar';
    if (current) {
        $('account-email').textContent = current.email || 'Email indisponível';
        startListeners(current);
    }
}, error => {
    console.error('Falha ao verificar a sessão PCPE.', error);
    setStatus('Não foi possível verificar sua sessão. Recarregue a página.', true);
});

const setAuthMode = mode => {
    authMode = mode;
    $('login-mode').setAttribute('aria-pressed', String(mode === 'login'));
    $('register').setAttribute('aria-pressed', String(mode === 'register'));
    $('auth-submit').textContent = mode === 'login' ? 'Entrar na plataforma' : 'Criar conta';
    $('password').autocomplete = mode === 'login' ? 'current-password' : 'new-password';
    setStatus('');
};
const performAuth = async () => {
    const form = $('auth-form');
    if (!form.reportValidity()) return;
    setStatus('Aguarde...');
    const operation = authMode === 'login' ? signInWithEmailAndPassword : createUserWithEmailAndPassword;
    try {
        await operation(auth, $('email').value.trim(), $('password').value);
        $('password').value = '';
        setStatus('');
    } catch (error) {
        console.error('Falha de autenticação PCPE.', error);
        setStatus('Não foi possível entrar ou criar a conta. Verifique email, senha e conexão; se já tiver conta, entre ou recupere a senha.', true);
    }
};
$('auth-form').addEventListener('submit', event => { event.preventDefault(); void performAuth(); });
$('login-mode').addEventListener('click', () => setAuthMode('login'));
$('register').addEventListener('click', () => setAuthMode('register'));
$('reset').addEventListener('click', async () => {
    if (!$('email').reportValidity()) return;
    try {
        await sendPasswordResetEmail(auth, $('email').value.trim());
        setStatus('Se a conta existir, as instruções de recuperação serão enviadas ao email.');
    } catch (error) {
        console.error('Falha ao solicitar recuperação de senha.', error);
        setStatus('Não foi possível enviar as instruções. Confira a conexão e tente novamente.', true);
    }
});
$('sign-out').addEventListener('click', async () => {
    try { await signOut(auth); }
    catch (error) { console.error('Falha ao sair.', error); setStatus('Não foi possível encerrar a sessão. Tente novamente.', true); }
});
$('start-checkout').addEventListener('click', async () => {
    const plan = new FormData($('request-form')).get('plan');
    const button = $('start-checkout');
    if (!['semanal', 'mensal', 'vitalicio'].includes(plan)) {
        setStatus('Selecione um plano para continuar.', true);
        return;
    }
    button.disabled = true;
    setStatus('Preparando o checkout seguro do Mercado Pago...');
    try {
        const checkoutUrl = await requestCheckoutUrl({ auth, concurso: 'pcpe', plan });
        window.location.assign(checkoutUrl);
    } catch (error) {
        console.error('Falha ao iniciar o Checkout Pro PCPE.', error);
        setStatus(error.message || 'Não foi possível iniciar o checkout. Tente novamente.', true);
    } finally {
        button.disabled = false;
    }
});
$('request-form').addEventListener('submit', async event => {
    event.preventDefault();
    if (!user || !user.email) { setStatus('Entre com uma conta com email válido para solicitar acesso.', true); return; }
    const plan = new FormData(event.currentTarget).get('plan');
    if (!['mensal', 'vitalicio'].includes(plan)) {
        setStatus(plan === 'semanal'
            ? 'A solicitação Pix manual não oferece o plano semanal. Use “Pagar com Mercado Pago”.'
            : 'Selecione um plano válido.', true);
        return;
    }
    const button = event.currentTarget.querySelector('button[type="submit"]');
    button.disabled = true;
    try {
        await setDoc(doc(db, 'accessRequestsPcpe', user.uid), {
            email: user.email, status: 'pending', plan, requestedAt: serverTimestamp()
        });
        setStatus('Solicitação registrada. Confira abaixo as instruções de pagamento.');
    } catch (error) {
        console.error('Falha ao registrar solicitação PCPE.', error);
        setStatus('Não foi possível registrar a solicitação. Confira a conexão, a situação do acesso e as regras publicadas.', true);
    } finally { button.disabled = false; }
});
$('copy-pix').addEventListener('click', async () => {
    try {
        if (!request || request.status !== 'pending' || !['mensal', 'vitalicio'].includes(request.plan)) {
            throw new Error('Solicitação Pix inválida.');
        }
        const plan = request.plan;
        const response = await fetch('../assets/pix-planos.json');
        if (!response.ok) throw new Error(`Não foi possível carregar o código Pix (${response.status}).`);
        const payloads = await response.json();
        if (!request || request.status !== 'pending' || request.plan !== plan) {
            throw new Error('A solicitação mudou durante a cópia.');
        }
        const payload = payloads[plan];
        if (typeof payload !== 'string' || !payload) throw new Error('Código Pix indisponível para o plano.');
        await navigator.clipboard.writeText(payload);
        setStatus('Código Pix copiado. Confira o valor e o recebedor no aplicativo do banco.');
    } catch (error) {
        console.error('Falha ao copiar código Pix.', error);
        setStatus('Não foi possível copiar o código Pix. Use o QR Code ou entre em contato com o atendimento.', true);
    }
});
const initialRole = new URLSearchParams(location.search).get('cargo');
if (['agente', 'escrivao'].includes(initialRole)) {
    document.querySelector(`input[name="cargo"][value="${initialRole}"]`).checked = true;
}
setInterval(() => { if (user && access !== undefined && request !== undefined) render(); }, 60000);
