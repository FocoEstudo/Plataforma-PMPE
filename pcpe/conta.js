import { auth, db } from '../firebase-config.js';
import { requestCheckoutUrl } from '../checkout-client.mjs';
import { createUserWithEmailAndPassword, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signOut } from 'https://www.gstatic.com/firebasejs/12.4.0/firebase-auth.js';
import { doc, onSnapshot } from 'https://www.gstatic.com/firebasejs/12.4.0/firebase-firestore.js';

const $ = id => document.getElementById(id);
let user = null;
let access;
let stopAccess;
let verificationTimer;
let generation = 0;
let authMode = 'login';
const setStatus = (message, error = false) => {
    $('status').textContent = message;
    $('status').dataset.error = String(error);
};
const hideAccountSections = () => {
    ['checking', 'granted', 'purchase'].forEach(id => { $(id).hidden = true; });
};
const render = () => {
    hideAccountSections();
    $('expired-message').hidden = true;
    if (access === undefined) {
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
        $('expired-message').textContent = 'Seu plano por período PCPE venceu. Para continuar estudando, escolha um plano e conclua a compra pelo Mercado Pago.';
    }
    $('purchase').hidden = false;
};
const startListeners = current => {
    const expected = ++generation;
    access = undefined;
    render();
    verificationTimer = setTimeout(() => {
        if (expected === generation && access === undefined) {
            setStatus('A verificação está demorando. Confira a conexão e recarregue a página se necessário.', true);
        }
    }, 15000);
    const onError = error => {
        if (expected !== generation) return;
        generation++;
        clearTimeout(verificationTimer);
        stopAccess?.();
        console.error('Falha ao verificar acesso PCPE.', error);
        hideAccountSections();
        setStatus('Não foi possível verificar o acesso. Confira sua conexão e as regras do Firestore, depois recarregue a página.', true);
    };
    stopAccess = onSnapshot(doc(db, 'accessPcpe', current.uid), { includeMetadataChanges: true }, snapshot => {
        if (expected !== generation || snapshot.metadata.fromCache || snapshot.metadata.hasPendingWrites) return;
        access = snapshot.exists() ? snapshot.data() : null;
        render();
    }, onError);
};

onAuthStateChanged(auth, current => {
    generation++;
    clearTimeout(verificationTimer);
    stopAccess?.();
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
    const plan = new FormData($('plan-form')).get('plan');
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
const initialRole = new URLSearchParams(location.search).get('cargo');
if (['agente', 'escrivao'].includes(initialRole)) {
    document.querySelector(`input[name="cargo"][value="${initialRole}"]`).checked = true;
}
setInterval(() => { if (user && access !== undefined) render(); }, 60000);
