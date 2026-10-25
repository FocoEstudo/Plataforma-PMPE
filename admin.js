const ADMIN_EMAIL = "ianitalocorp@gmail.com";
const adminStatus = document.getElementById("adminStatus");
const loginLink = document.getElementById("loginLink");
const verificationActions = document.getElementById("verificationActions");
const sendVerificationButton = document.getElementById("sendVerificationButton");
const refreshVerificationButton = document.getElementById("refreshVerificationButton");
const requestsPanel = document.getElementById("requestsPanel");
const requestList = document.getElementById("requestList");
const signOutButton = document.getElementById("signOutButton");

let auth;
let db;
let currentAdmin;
let activeRequestsListener;
let onAuthStateChanged;
let sendEmailVerification;
let reload;
let signOut;
let collection;
let doc;
let getDoc;
let onSnapshot;
let query;
let serverTimestamp;
let where;
let writeBatch;
let isPreparingRequests = false;

const setStatus = (message, isError = false) => {
    adminStatus.textContent = message;
    adminStatus.dataset.error = String(isError);
};

const showLoginPrompt = () => {
    setStatus("Entre com a conta administrativa autorizada para acessar esta página.");
    loginLink.hidden = false;
};

const showVerificationPrompt = () => {
    setStatus("Esta conta precisa confirmar o email antes de administrar liberações.", true);
    verificationActions.hidden = false;
};

const formatRequestDate = timestamp => {
    if (!timestamp || typeof timestamp.toDate !== "function") return "Data indisponível";
    return timestamp.toDate().toLocaleString("pt-BR");
};

const buildRequestCard = requestSnapshot => {
    const requestData = requestSnapshot.data();
    const card = document.createElement("article");
    card.className = "request-card";
    const email = document.createElement("p");
    email.innerHTML = "<strong>Conta:</strong> ";
    email.append(document.createTextNode(requestData.email || "Email não informado"));
    const requestedAt = document.createElement("p");
    requestedAt.className = "muted";
    requestedAt.textContent = `Solicitado em ${formatRequestDate(requestData.requestedAt)}`;
    const status = document.createElement("p");
    status.className = "status";
    status.setAttribute("role", "status");
    status.setAttribute("aria-live", "polite");
    const actions = document.createElement("div");
    actions.className = "actions";

    const approveButton = document.createElement("button");
    approveButton.type = "button";
    approveButton.className = "primary";
    approveButton.textContent = "Pix confirmado — aprovar acesso";
    approveButton.addEventListener("click", () => reviewRequest(requestSnapshot.id, "approved", card));

    const rejectButton = document.createElement("button");
    rejectButton.type = "button";
    rejectButton.className = "danger";
    rejectButton.textContent = "Recusar solicitação";
    rejectButton.addEventListener("click", () => reviewRequest(requestSnapshot.id, "rejected", card));

    actions.append(approveButton, rejectButton);
    card.append(email, requestedAt, status, actions);
    return card;
};

const startRequestsListener = () => {
    if (activeRequestsListener) return;
    requestsPanel.hidden = false;
    const pendingRequests = query(collection(db, "accessRequests"), where("status", "==", "pending"));
    activeRequestsListener = onSnapshot(pendingRequests, snapshot => {
        requestList.replaceChildren();
        if (snapshot.empty) {
            const emptyMessage = document.createElement("p");
            emptyMessage.className = "muted";
            emptyMessage.textContent = "Não há solicitações pendentes.";
            requestList.append(emptyMessage);
            return;
        }
        const requests = snapshot.docs.sort((left, right) => {
            const leftTime = left.data().requestedAt?.toMillis?.() || 0;
            const rightTime = right.data().requestedAt?.toMillis?.() || 0;
            return rightTime - leftTime;
        });
        requests.forEach(requestSnapshot => requestList.append(buildRequestCard(requestSnapshot)));
    }, error => {
        console.error("Não foi possível carregar as solicitações de acesso.", error);
        setStatus("Falha ao carregar a lista. Confira as regras do Firestore e tente novamente.", true);
    });
};

const reviewRequest = async (uid, decision, card) => {
    const buttons = card.querySelectorAll("button");
    buttons.forEach(button => { button.disabled = true; });
    const status = card.querySelector('[role="status"]');
    status.textContent = decision === "approved" ? "Liberando acesso..." : "Registrando recusa...";

    try {
        const requestReference = doc(db, "accessRequests", uid);
        const requestSnapshot = await getDoc(requestReference);
        if (!requestSnapshot.exists() || requestSnapshot.data().status !== "pending") {
            throw new Error("Esta solicitação não está mais pendente. Atualize a página.");
        }

        const batch = writeBatch(db);
        batch.update(requestReference, { status: decision, reviewedAt: serverTimestamp() });
        if (decision === "approved") {
            batch.set(doc(db, "access", uid), {
                active: true,
                provider: "pix_manual",
                amount: 99.9,
                currency: "BRL",
                paidAt: serverTimestamp()
            }, { merge: true });
        }
        await batch.commit();
    } catch (error) {
        console.error("Não foi possível processar a solicitação de acesso.", error);
        status.textContent = error.code === "permission-denied"
            ? "A operação foi recusada pelas regras. Confira se o email administrador está verificado e publique as regras."
            : error.message || "Não foi possível processar. Tente novamente.";
        buttons.forEach(button => { button.disabled = false; });
    }
};

const activateAdminPage = async user => {
    if (!user) {
        showLoginPrompt();
        return;
    }
    signOutButton.hidden = false;
    if ((user.email || "").toLowerCase() !== ADMIN_EMAIL) {
        setStatus("Esta conta não está autorizada a administrar acessos.", true);
        return;
    }
    currentAdmin = user;
    if (!user.emailVerified) {
        showVerificationPrompt();
        return;
    }

    try {
        await user.getIdToken(true);
        verificationActions.hidden = true;
        setStatus(`Conectado como ${user.email}. Confira o recebimento no banco antes de aprovar cada pedido.`);
        startRequestsListener();
    } catch (error) {
        console.error("Não foi possível confirmar a sessão administrativa.", error);
        setStatus("Não foi possível validar sua sessão. Entre novamente e tente de novo.", true);
    }
};

sendVerificationButton.addEventListener("click", async () => {
    if (!currentAdmin) return;
    sendVerificationButton.disabled = true;
    try {
        await sendEmailVerification(currentAdmin);
        setStatus("Email de verificação enviado. Abra a mensagem e confirme o endereço antes de administrar.");
    } catch (error) {
        console.error("Não foi possível enviar o email de verificação.", error);
        setStatus("Não foi possível enviar o email de verificação. Confira a conexão e tente novamente.", true);
    } finally {
        sendVerificationButton.disabled = false;
    }
});

refreshVerificationButton.addEventListener("click", async () => {
    if (!currentAdmin || isPreparingRequests) return;
    isPreparingRequests = true;
    refreshVerificationButton.disabled = true;
    try {
        await reload(currentAdmin);
        await activateAdminPage(currentAdmin);
    } catch (error) {
        console.error("Não foi possível atualizar a verificação do email.", error);
        setStatus("Não foi possível atualizar a conta. Recarregue a página e tente novamente.", true);
    } finally {
        isPreparingRequests = false;
        refreshVerificationButton.disabled = false;
    }
});

signOutButton.addEventListener("click", async () => {
    signOutButton.disabled = true;
    try {
        await signOut(auth);
        window.location.replace(new URL("login.html", window.location.href));
    } catch (error) {
        console.error("Não foi possível encerrar a sessão administrativa.", error);
        setStatus("Não foi possível sair da conta. Tente novamente.", true);
        signOutButton.disabled = false;
    }
});

try {
    const [{ auth: firebaseAuth, db: firestore }, authModule, firestoreModule] = await Promise.all([
        import("./firebase-config.js"),
        import("https://www.gstatic.com/firebasejs/12.4.0/firebase-auth.js"),
        import("https://www.gstatic.com/firebasejs/12.4.0/firebase-firestore.js")
    ]);
    auth = firebaseAuth;
    db = firestore;
    ({ onAuthStateChanged, sendEmailVerification, reload, signOut } = authModule);
    ({ collection, doc, getDoc, onSnapshot, query, serverTimestamp, where, writeBatch } = firestoreModule);
    onAuthStateChanged(auth, user => {
        void activateAdminPage(user);
    }, error => {
        console.error("Não foi possível verificar o administrador no Firebase.", error);
        setStatus("Falha ao validar a sessão. Recarregue a página e tente novamente.", true);
    });
} catch (error) {
    console.error("Não foi possível carregar os serviços Firebase para a página administrativa.", error);
    setStatus("Não foi possível carregar o Firebase. Verifique a conexão e recarregue a página.", true);
}
