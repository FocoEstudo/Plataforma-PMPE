import { auth, db } from '../firebase-config.js';
import { onAuthStateChanged } from 'https://www.gstatic.com/firebasejs/12.4.0/firebase-auth.js';
import { doc, onSnapshot } from 'https://www.gstatic.com/firebasejs/12.4.0/firebase-firestore.js';

let stopAccess;
let expiryTimer;
let verificationTimer;
let generation = 0;
const gate = document.getElementById('sessionGate');
const message = document.getElementById('session-message');
const returnToAccount = () => {
    document.body.dataset.sessionState = 'checking';
    gate.hidden = false;
    const role = new URLSearchParams(location.search).get('cargo');
    const target = new URL('index.html', location.href);
    if (['agente', 'escrivao'].includes(role)) target.searchParams.set('cargo', role);
    target.hash = 'acesso';
    location.replace(target.href);
};
onAuthStateChanged(auth, user => {
    const expected = ++generation;
    stopAccess?.();
    clearTimeout(expiryTimer);
    clearTimeout(verificationTimer);
    document.body.dataset.sessionState = 'checking';
    gate.hidden = false;
    if (!user) { returnToAccount(); return; }
    message.textContent = 'Verificando seu acesso PCPE...';
    verificationTimer = setTimeout(() => {
        if (expected === generation) message.textContent = 'A verificação está demorando. Confira sua conexão e tente novamente.';
    }, 15000);
    stopAccess = onSnapshot(doc(db, 'accessPcpe', user.uid), { includeMetadataChanges: true }, snapshot => {
        if (expected !== generation || snapshot.metadata.fromCache || snapshot.metadata.hasPendingWrites) return;
        clearTimeout(verificationTimer);
        const access = snapshot.exists() ? snapshot.data() : null;
        if (!PcpeAccessPolicy.hasAccess(access)) { returnToAccount(); return; }
        if (window.PCPE_SESSION_UID && window.PCPE_SESSION_UID !== user.uid) {
            location.reload();
            return;
        }
        clearTimeout(expiryTimer);
        const expiry = PcpeAccessPolicy.expiresAt(access);
        if (expiry !== Infinity) {
            const checkExpiry = () => {
                const remaining = expiry - Date.now();
                if (remaining <= 0) returnToAccount();
                else expiryTimer = setTimeout(checkExpiry, Math.min(remaining, 2147483647));
            };
            checkExpiry();
        }
        document.body.dataset.sessionState = 'ready';
        gate.hidden = true;
        if (!window.PCPE_SESSION_UID) {
            window.PCPE_SESSION_UID = user.uid;
            const script = document.createElement('script');
            script.src = 'estudos.js';
            script.onerror = () => {
                document.body.dataset.sessionState = 'checking';
                gate.hidden = false;
                message.textContent = 'Não foi possível carregar a área de estudos. Recarregue a página.';
            };
            document.body.appendChild(script);
        }
    }, error => {
        if (expected !== generation) return;
        clearTimeout(verificationTimer);
        clearTimeout(expiryTimer);
        console.error('Falha ao verificar acesso PCPE.', error);
        document.body.dataset.sessionState = 'checking';
        gate.hidden = false;
        message.textContent = 'Não foi possível verificar seu acesso. Confira a conexão e as regras do Firestore.';
    });
}, error => {
    console.error('Falha ao verificar sessão PCPE.', error);
    message.textContent = 'Não foi possível verificar sua sessão. Confira a conexão e tente novamente.';
});
