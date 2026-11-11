const ADMIN_EMAIL = "ianitalocorp@gmail.com";
const CONCURSOS = {
    pmpe: { label: "PMPE", requests: "accessRequests", access: "access", price: 99.9 },
    pppe: { label: "PPPE", requests: "accessRequestsPppe", access: "accessPppe", price: 99.9 },
    pcpe: { label: "PCPE", requests: "accessRequestsPcpe", access: "accessPcpe", price: 99.9 }
};
const formatPrice = value => `R$ ${value.toFixed(2).replace(".", ",")}`;
const requestPrice = (request, config) => request.promoCode && request.plan !== "mensal" ? 74.9
    : request.plan === "mensal" ? 24.9 : config.price;
const accessExpiration = access => {
    if (!access || access.active !== true) return null;
    if (access.plan === undefined || access.plan === "vitalicio") return Infinity;
    if (access.plan !== "mensal" || typeof access.paidAt?.toMillis !== "function") return null;
    const paidAt = access.paidAt.toMillis();
    return Number.isSafeInteger(paidAt) && paidAt >= 0 ? paidAt + 30 * 24 * 60 * 60 * 1000 : null;
};
const mayApproveExpiredAccess = (access, now = Date.now()) => {
    if (!access || access.active === false) return true;
    if (access.active !== true || !Number.isFinite(now)) return false;
    const expiration = accessExpiration(access);
    return expiration !== null && expiration !== Infinity && now >= expiration;
};
const adminStatus = document.getElementById("adminStatus");
const loginLink = document.getElementById("loginLink");
const switchAccountButton = document.getElementById("switchAccountButton");
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
let runTransaction;
let isPreparingRequests = false;
let requestRenderVersion = 0;

const stopRequestsListener = () => {
    activeRequestsListener?.();
    activeRequestsListener = undefined;
    requestRenderVersion += 1;
    requestsPanel.hidden = true;
    requestList.replaceChildren();
};

const setStatus = (message, isError = false) => {
    adminStatus.textContent = message;
    adminStatus.dataset.error = String(isError);
};

const showLoginPrompt = () => {
    stopRequestsListener();
    signOutButton.hidden = true;
    verificationActions.hidden = true;
    setStatus("Entre com a conta administrativa autorizada para acessar esta página.");
    loginLink.hidden = false;
    switchAccountButton.hidden = true;
};

const showVerificationPrompt = () => {
    stopRequestsListener();
    setStatus("Esta conta precisa confirmar o email antes de administrar liberações.", true);
    loginLink.hidden = true;
    switchAccountButton.hidden = true;
    verificationActions.hidden = false;
};

const formatRequestDate = timestamp => {
    if (!timestamp || typeof timestamp.toDate !== "function") return "Data indisponível";
    return timestamp.toDate().toLocaleString("pt-BR");
};

const appendIdentityDetail = (details, label, value) => {
    const term = document.createElement("dt");
    term.textContent = label;
    const description = document.createElement("dd");
    description.textContent = value;
    details.append(term, description);
};

const buildWhatsappLink = (profile, withMessage = false, requestData = null) => {
    const digits = String(profile.whatsapp || "").replace(/\D/g, "");
    const number = digits.length <= 11 ? `55${digits}` : digits;
    if (!withMessage) return `https://wa.me/${number}`;
    const firstName = String(profile.displayName || "").trim().split(/\s+/)[0] || "";
    const config = CONCURSOS[requestData?.concurso] || CONCURSOS.pmpe;
    const price = formatPrice(requestPrice(requestData || {}, config));
    const text = `Olá${firstName ? `, ${firstName}` : ""}! Aqui é da Operação ${config.label}. Recebemos seu cadastro. Para liberar seu acesso à plataforma, realize o pagamento de ${price} via Pix e nos envie o comprovante por aqui. Qualquer dúvida, estou à disposição!`;
    return `https://wa.me/${number}?text=${encodeURIComponent(text)}`;
};

const buildRequestCard = (requestSnapshot, profile, profileError) => {
    const requestData = requestSnapshot.data();
    const card = document.createElement("article");
    card.className = "request-card";
    const concursoBadge = document.createElement("p");
    concursoBadge.className = "identity-heading";
    concursoBadge.textContent = `Concurso: ${CONCURSOS[requestSnapshot.concurso].label}`;
    const email = document.createElement("p");
    email.innerHTML = "<strong>Conta:</strong> ";
    email.append(document.createTextNode(requestData.email || "Email não informado"));
    const requestedAt = document.createElement("p");
    requestedAt.className = "muted";
    requestedAt.textContent = `Solicitado em ${formatRequestDate(requestData.requestedAt)}`;
    const identityHeading = document.createElement("h3");
    identityHeading.className = "identity-heading";
    identityHeading.textContent = "Dados informados no cadastro";
    const identityDetails = document.createElement("dl");
    identityDetails.className = "identity-details";
    if (profileError) {
        appendIdentityDetail(identityDetails, "Cadastro", "Não foi possível carregar os dados. Atualize a página.");
    } else if (profile) {
        appendIdentityDetail(identityDetails, "Nome completo", profile.displayName || "Não informado");
        if (profile.birthDate) {
            const [year, month, day] = String(profile.birthDate).split("-");
            appendIdentityDetail(identityDetails, "Data de nascimento", `${day}/${month}/${year}`);
        } else {
            appendIdentityDetail(identityDetails, "Data de nascimento", "Não informada");
        }
        const whatsappTerm = document.createElement("dt");
        whatsappTerm.textContent = "WhatsApp";
        const whatsappValue = document.createElement("dd");
        if (profile.whatsapp) {
            const whatsappLink = document.createElement("a");
            whatsappLink.href = buildWhatsappLink(profile);
            whatsappLink.target = "_blank";
            whatsappLink.rel = "noopener noreferrer";
            whatsappLink.textContent = profile.whatsapp;
            whatsappValue.append(whatsappLink);
        } else {
            whatsappValue.textContent = "Não informado";
        }
        identityDetails.append(whatsappTerm, whatsappValue);
        appendIdentityDetail(identityDetails, "Cidade atual", profile.currentCity || "Não informada");
        if (Number.isInteger(profile.age)) appendIdentityDetail(identityDetails, "Idade", `${profile.age} anos`);
        if (profile.sex) appendIdentityDetail(identityDetails, "Sexo", profile.sex);
        if (profile.birthplaceCity || profile.birthplaceState) {
            appendIdentityDetail(identityDetails, "Naturalidade", [profile.birthplaceCity, profile.birthplaceState].filter(Boolean).join(" / "));
        }
    } else {
        appendIdentityDetail(identityDetails, "Cadastro", "Dados de identificação não disponíveis.");
    }
    const identityNote = document.createElement("p");
    identityNote.className = "identity-note";
    identityNote.textContent = "Dados autodeclarados; não substituem conferência de identidade.";
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
    approveButton.addEventListener("click", () => reviewRequest(requestSnapshot.id, "approved", card, requestSnapshot.concurso));

    const rejectButton = document.createElement("button");
    rejectButton.type = "button";
    rejectButton.className = "danger";
    rejectButton.textContent = "Recusar solicitação";
    rejectButton.addEventListener("click", () => reviewRequest(requestSnapshot.id, "rejected", card, requestSnapshot.concurso));

    actions.append(approveButton, rejectButton);
    if (profile?.whatsapp) {
        const contactLink = document.createElement("a");
        contactLink.href = buildWhatsappLink(profile, true, { ...requestData, concurso: requestSnapshot.concurso });
        contactLink.target = "_blank";
        contactLink.rel = "noopener noreferrer";
        contactLink.textContent = "Chamar no WhatsApp para cobrar o Pix";
        contactLink.style.cssText = "display:inline-flex;align-items:center;padding:.6rem 1rem;border-radius:.65rem;background:#16a34a;color:#fff;font-weight:800;text-decoration:none";
        actions.append(contactLink);
    }
    const promo = document.createElement("p");
    promo.className = "identity-heading";
    promo.textContent = requestData.promoCode
        ? `🏷️ CÓDIGO PROMOCIONAL USADO: ${requestData.promoCode} — conferir recebimento de R$ 74,90`
        : `Plano ${requestData.plan === "mensal" ? "mensal (30 dias)" : "vitalício"} — conferir recebimento de ${formatPrice(requestPrice({ ...requestData, concurso: requestSnapshot.concurso }, CONCURSOS[requestSnapshot.concurso]))}`;
    card.append(concursoBadge, email, promo, identityHeading, identityDetails, identityNote, requestedAt, status, actions);
    return card;
};

const startRequestsListener = () => {
    if (activeRequestsListener) return;
    requestsPanel.hidden = false;
    const pendingByConcurso = {};
    const renderPending = () => {
        const renderVersion = ++requestRenderVersion;
        const requests = Object.values(pendingByConcurso).flat().sort((left, right) => {
            const leftTime = left.data().requestedAt?.toMillis?.() || 0;
            const rightTime = right.data().requestedAt?.toMillis?.() || 0;
            return rightTime - leftTime;
        });
        if (!requests.length) {
            requestList.replaceChildren();
            const emptyMessage = document.createElement("p");
            emptyMessage.className = "muted";
            emptyMessage.textContent = "Não há solicitações pendentes.";
            requestList.append(emptyMessage);
            return;
        }
        void Promise.all(requests.map(async requestSnapshot => {
            try {
                const profileSnapshot = await getDoc(doc(db, "users", requestSnapshot.id));
                return buildRequestCard(
                    requestSnapshot,
                    profileSnapshot.exists() ? profileSnapshot.data() : null,
                    false
                );
            } catch (error) {
                console.error(`Não foi possível carregar os dados cadastrais da solicitação ${requestSnapshot.id}.`, error);
                return buildRequestCard(requestSnapshot, null, true);
            }
        })).then(cards => {
            if (renderVersion !== requestRenderVersion) return;
            requestList.replaceChildren(...cards);
        });
    };
    const unsubscribers = Object.keys(CONCURSOS).map(concurso => {
        const pendingRequests = query(collection(db, CONCURSOS[concurso].requests), where("status", "==", "pending"));
        return onSnapshot(pendingRequests, snapshot => {
            pendingByConcurso[concurso] = snapshot.docs.map(item => ({
                id: item.id,
                concurso,
                data: () => item.data()
            }));
            renderPending();
        }, error => {
            console.error(`Não foi possível carregar as solicitações de acesso (${concurso}).`, error);
            setStatus("Falha ao carregar a lista. Confira as regras do Firestore e tente novamente.", true);
        });
    });
    activeRequestsListener = () => unsubscribers.forEach(unsubscribe => unsubscribe());
};

const reviewRequest = async (uid, decision, card, concurso) => {
    const config = CONCURSOS[concurso];
    const buttons = card.querySelectorAll("button");
    buttons.forEach(button => { button.disabled = true; });
    const status = card.querySelector('[role="status"]');
    status.textContent = decision === "approved" ? "Liberando acesso..." : "Registrando recusa...";

    try {
        const requestReference = doc(db, config.requests, uid);
        const accessReference = doc(db, config.access, uid);
        await runTransaction(db, async transaction => {
            const requestSnapshot = await transaction.get(requestReference);
            if (!requestSnapshot.exists() || requestSnapshot.data().status !== "pending") {
                throw new Error("Esta solicitação não está mais pendente. Atualize a página.");
            }
            const request = requestSnapshot.data();
            const plan = request.plan || "vitalicio";
            if (!["mensal", "vitalicio"].includes(plan)) {
                throw new Error("Plano inválido. A solicitação não foi processada.");
            }
            if (decision === "approved") {
                const accessSnapshot = await transaction.get(accessReference);
                const canApprove = concurso === "pcpe"
                    ? PcpeAccessPolicy.mayApprovePix(accessSnapshot.exists() ? accessSnapshot.data() : null)
                    : mayApproveExpiredAccess(accessSnapshot.exists() ? accessSnapshot.data() : null);
                if (!canApprove) {
                    throw new Error("Esta conta já possui acesso ativo ou inválido. Confira o cadastro e o pagamento antes de alterar o acesso.");
                }
                transaction.set(accessReference, {
                    active: true,
                    provider: "pix_manual",
                    amount: requestPrice({ ...request, plan, concurso }, config),
                    currency: "BRL",
                    paidAt: serverTimestamp(),
                    plan
                });
            }
            transaction.update(requestReference, { status: decision, reviewedAt: serverTimestamp() });
        });
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
        stopRequestsListener();
        verificationActions.hidden = true;
        setStatus("Esta sessão está conectada a uma conta sem autorização administrativa. Troque de conta para continuar.", true);
        loginLink.hidden = true;
        switchAccountButton.hidden = false;
        return;
    }
    loginLink.hidden = true;
    switchAccountButton.hidden = true;
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

switchAccountButton.addEventListener("click", async () => {
    switchAccountButton.disabled = true;
    try {
        await signOut(auth);
        window.location.replace(new URL("login.html?next=admin", window.location.href));
    } catch (error) {
        console.error("Não foi possível trocar a conta antes de acessar a administração.", error);
        setStatus("Não foi possível sair da conta atual. Tente novamente.", true);
        switchAccountButton.disabled = false;
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
    ({ collection, doc, getDoc, onSnapshot, query, serverTimestamp, where, runTransaction } = firestoreModule);
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
