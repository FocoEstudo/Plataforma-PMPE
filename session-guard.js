const gate = document.getElementById("sessionGate");
const gateLoading = document.getElementById("sessionGateLoading");
const gateLoadingMessage = document.getElementById("sessionGateLoadingMessage");
const gateMessage = document.getElementById("sessionGateMessage");
const gateLoginLink = document.getElementById("sessionGateLoginLink");
const paymentGate = document.getElementById("paymentGate");
const paymentGateMessage = document.getElementById("paymentGateMessage");
const paymentRequestStatus = document.getElementById("paymentRequestStatus");
const paymentRequestHeading = document.getElementById("paymentRequestHeading");
const paymentRequestDetail = document.getElementById("paymentRequestDetail");
const pixKey = document.getElementById("pixKey");
const copyPixKeyButton = document.getElementById("copyPixKeyButton");
const pixCopyMessage = document.getElementById("pixCopyMessage");
const pixQrImage = document.getElementById("pixQrImage");
const promoCodeInput = document.getElementById("promoCodeInput");
const promoCodeButton = document.getElementById("promoCodeButton");
const promoCodeMessage = document.getElementById("promoCodeMessage");
const PROMO_CODES = ["SEREI APROVADO", "SEREI APROVADA"];
const PROMO_QR_SRC = "pix-qr-promo.png";
const PIX_PAYLOAD_FULL = "00020101021126580014br.gov.bcb.pix0136623c3509-96f1-49f7-8794-41ed9de36bf6520400005303986540599.905802BR5923IAN ITALO GOMES ANDRADE6006BRASIL62070503***6304AED6";
const PIX_PAYLOAD_PROMO = "00020101021126580014br.gov.bcb.pix0136623c3509-96f1-49f7-8794-41ed9de36bf6520400005303986540574.905802BR5923IAN ITALO GOMES ANDRADE6006BRASIL62070503***63043330";
let currentPixPayload = PIX_PAYLOAD_FULL;
const profileForm = document.getElementById("profileForm");
const profileNameInput = document.getElementById("profileName");
const studyModeInput = document.getElementById("studyMode");
const studyStartTimeInput = document.getElementById("studyStartTime");
const studyEndTimeInput = document.getElementById("studyEndTime");
const profileSaveButton = document.getElementById("profileSaveButton");
const profileCancelButton = document.getElementById("profileCancelButton");
const PROFILE_READ_TIMEOUT_MS = 15000;
const DEFAULT_STUDY_PREFERENCES = {
    mode: "hard",
    days: [0, 1, 2, 3, 4, 5, 6],
    startTime: "05:00",
    endTime: "23:00"
};

let auth;
let db;
let currentUser;
let currentProfile = null;
let isEditingExistingProfile = false;
let isProfileModalOpen = false;
let onAuthStateChanged;
let signOut;
let updateProfile;
let doc;
let getDoc;
let setDoc;
let updateDoc;
let deleteField;
let serverTimestamp;
let onSnapshot;
let runTransaction;
let collection;
let getDocs;
let stopAccessListener;
let stopRequestListener;
let isLoadingGrantedProfile = false;

const normalizeStudyPreferences = preferences => {
    const days = Array.isArray(preferences?.days)
        ? [...new Set(preferences.days.filter(day => Number.isInteger(day) && day >= 0 && day <= 6))].sort()
        : DEFAULT_STUDY_PREFERENCES.days;
    const mode = ["light", "moderate", "hard"].includes(preferences?.mode)
        ? preferences.mode
        : DEFAULT_STUDY_PREFERENCES.mode;
    const startTime = /^\d{2}:\d{2}$/.test(preferences?.startTime || "")
        ? preferences.startTime
        : DEFAULT_STUDY_PREFERENCES.startTime;
    const endTime = /^\d{2}:\d{2}$/.test(preferences?.endTime || "")
        ? preferences.endTime
        : DEFAULT_STUDY_PREFERENCES.endTime;
    return { mode, days: days.length ? days : DEFAULT_STUDY_PREFERENCES.days, startTime, endTime };
};

const publishStudyPreferences = preferences => {
    const normalized = normalizeStudyPreferences(preferences);
    window.PMPE_STUDY_PREFERENCES = normalized;
    window.dispatchEvent(new CustomEvent("pmpe:study-preferences-changed", { detail: normalized }));
};

studyModeInput.addEventListener("change", () => {
    const description = document.getElementById("studyModeHint");
    if (studyModeInput.value === "hard") {
        description.textContent = "Hard mantém cada missão completa, como atualmente. Nenhuma matéria ou tarefa é removida.";
        return;
    }
    const mode = studyModeInput.value === "light" ? "Leve" : "Moderado";
    const sessions = studyModeInput.value === "light" ? 3 : 2;
    description.textContent = `${mode} divide cada missão em ${sessions} etapas menores, sem remover matérias ou tarefas.`;
});

const setGateMessage = message => {
    gateMessage.textContent = message;
    gateLoginLink.hidden = true;
};

const withTimeout = (promise, timeoutMs) => new Promise((resolve, reject) => {
    const timeout = setTimeout(() => {
        const error = new Error("A leitura do perfil excedeu o tempo limite.");
        error.code = "profile/timeout";
        reject(error);
    }, timeoutMs);
    promise.then(value => {
        clearTimeout(timeout);
        resolve(value);
    }, error => {
        clearTimeout(timeout);
        reject(error);
    });
});

const showSessionError = error => {
    console.error("Não foi possível verificar a sessão Firebase.", error);
    gate.hidden = false;
    gateLoading.hidden = false;
    profileForm.hidden = true;
    gateLoadingMessage.textContent = "Não foi possível carregar sua sessão e seu perfil. Confira a conexão e tente novamente.";
    gateLoginLink.hidden = false;
};

const showPaymentGate = () => {
    gate.hidden = false;
    gateLoading.hidden = true;
    profileForm.hidden = true;
    paymentGate.hidden = false;
    paymentGateMessage.textContent = "";
    paymentGateMessage.classList.remove("text-red-700");
    paymentRequestStatus.dataset.state = "loading";
    paymentRequestHeading.textContent = "Preparando sua área de estudos";
    paymentRequestDetail.textContent = "Sua experiência será vinculada a esta conta.";
    paymentRequestStatus.querySelector(".payment-gate-status-icon").innerHTML = '<i class="fa-solid fa-spinner fa-spin" aria-hidden="true"></i>';
    document.body.dataset.sessionState = "checking";
};

const setPaymentRequestStatus = (state, heading, detail) => {
    paymentRequestStatus.dataset.state = state;
    paymentRequestHeading.textContent = heading;
    paymentRequestDetail.textContent = detail;
    const icon = state === "pending"
        ? "fa-clock"
        : state === "rejected" || state === "error"
            ? "fa-circle-exclamation"
            : "fa-spinner fa-spin";
    paymentRequestStatus.querySelector(".payment-gate-status-icon").innerHTML = `<i class="fa-solid ${icon}" aria-hidden="true"></i>`;
};

const showPaymentRequestStatus = status => {
    paymentGateMessage.textContent = "";
    paymentGateMessage.classList.remove("text-red-700");
    if (status === "pending") {
        setPaymentRequestStatus(
            "pending",
            "Sua área está sendo preparada",
            "Conclua as etapas acima. O status da sua conta será atualizado nesta tela."
        );
    } else if (status === "rejected") {
        setPaymentRequestStatus(
            "rejected",
            "Não foi possível atualizar sua conta",
            "Se acredita que houve um engano, tente novamente mais tarde."
        );
    } else {
        setPaymentRequestStatus(
            "error",
            "Não foi possível carregar sua área",
            "Confira sua conexão e recarregue a página."
        );
    }
};

const showGrantedProfile = async user => {
    if (isLoadingGrantedProfile) return;
    isLoadingGrantedProfile = true;
    stopAccessListener?.();
    stopAccessListener = undefined;
    stopRequestListener?.();
    stopRequestListener = undefined;
    paymentGate.hidden = true;
    gateLoading.hidden = false;
    gateLoadingMessage.textContent = "Pagamento confirmado. Carregando seu perfil...";
    try {
        await showProfileForUser(user);
    } finally {
        isLoadingGrantedProfile = false;
    }
};

const normalizePromoCode = value => value.normalize("NFD").replace(/[\u0300-\u036f]/g, "").trim().replace(/\s+/g, " ").toUpperCase();

const applyPromoPrice = () => {
    const price = "R$ 74,90";
    pixQrImage.src = PROMO_QR_SRC;
    pixQrImage.alt = `QR Code Pix para pagamento de ${price}`;
    document.querySelectorAll(".payment-price-text").forEach(element => { element.textContent = price; });
    currentPixPayload = PIX_PAYLOAD_PROMO;
    promoCodeInput.disabled = true;
    promoCodeButton.disabled = true;
};

promoCodeButton.addEventListener("click", async () => {
    const code = normalizePromoCode(promoCodeInput.value);
    if (!PROMO_CODES.includes(code)) {
        promoCodeMessage.textContent = "Código promocional inválido.";
        return;
    }
    promoCodeButton.disabled = true;
    try {
        await withTimeout(updateDoc(doc(db, "accessRequests", currentUser.uid), { promoCode: code, amount: 74.9 }), PROFILE_READ_TIMEOUT_MS);
        applyPromoPrice();
        promoCodeMessage.textContent = "Código aplicado! Valor promocional de R$ 74,90.";
    } catch (error) {
        console.error("Não foi possível aplicar o código promocional.", error);
        promoCodeMessage.textContent = "Não foi possível aplicar o código agora. Tente novamente.";
        promoCodeButton.disabled = false;
    }
});

copyPixKeyButton.addEventListener("click", async () => {
    try {
        await navigator.clipboard.writeText(currentPixPayload);
        pixCopyMessage.textContent = "Código Pix copiado. Cole no app do banco em Pix Copia e Cola.";
    } catch (error) {
        console.error("Não foi possível copiar o código Pix.", error);
        pixCopyMessage.textContent = "Não foi possível copiar automaticamente. Use o QR Code acima.";
    }
});

const showProfileForUser = async user => {
    try {
        const profileSnapshot = await withTimeout(getDoc(doc(db, "users", user.uid)), PROFILE_READ_TIMEOUT_MS);
        const profileData = profileSnapshot.exists() ? profileSnapshot.data() : null;
        const profile = profileData?.displayName
            ? {
                displayName: profileData.displayName,
                studyPreferences: profileData.studyPreferences
            }
            : null;

        paymentGate.hidden = true;
        if (window.PMPE_SYNC) {
            gateLoadingMessage.textContent = "Sincronizando seu progresso...";
            await withTimeout(window.PMPE_SYNC.start({ uid: user.uid, db, fs: { doc, setDoc, getDocs, collection, onSnapshot } }), PROFILE_READ_TIMEOUT_MS)
                .catch(error => console.warn("Sincronização inicial não concluída; usando dados locais.", error));
        }
        if (!profile) {
            openProfileForm({ profile: profileData, required: true, editable: true });
            return;
        }

        renderProfile(profile);
        finishProfileSetup();
    } catch (error) {
        console.error("Não foi possível carregar o perfil do estudante no Firestore.", error);
        gate.hidden = false;
        gateLoading.hidden = false;
        paymentGate.hidden = true;
        profileForm.hidden = true;
        gateLoadingMessage.textContent = firebaseErrorMessage(error);
        gateLoginLink.hidden = false;
        gateLoginLink.textContent = "Tentar novamente";
        gateLoginLink.href = window.location.href;
        document.body.dataset.sessionState = "checking";
    }
};

const renderProfile = profile => {
    currentProfile = profile;
    document.getElementById("profileDisplayName").textContent = profile.displayName;
    document.getElementById("profileEmail").textContent = currentUser.email || "Email não disponível";
    publishStudyPreferences(profile.studyPreferences);
    const firstName = profile.displayName.trim().split(/\s+/)[0];
    const normalizedFirstName = firstName.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
    const rank = normalizedFirstName.endsWith("a") ? "Soldada" : "Soldado";
    document.getElementById("dashboardWelcomeTitle").textContent = `${rank} ${profile.displayName} de Pernambuco`;
    window.PMPE_STUDENT_FIRST_NAME = firstName;
    document.querySelectorAll("[data-student-first-name]").forEach(el => { el.textContent = firstName; });
};

const finishProfileSetup = () => {
    isProfileModalOpen = false;
    gate.hidden = true;
    document.body.dataset.sessionState = "ready";
    window.dispatchEvent(new CustomEvent("pmpe:session-ready", { detail: { uid: currentUser?.uid, email: currentUser?.email || "", name: currentProfile?.displayName || "" } }));
};

const openProfileForm = ({ profile, required, editable }) => {
    isEditingExistingProfile = !required;
    isProfileModalOpen = true;
    gate.hidden = false;
    gateLoading.hidden = true;
    profileForm.hidden = false;
    gateLoginLink.hidden = true;
    document.getElementById("profileSetupHeading").textContent = required ? "Complete seu perfil" : "Edite seu perfil";
    document.getElementById("profileSetupDescription").textContent = required
        ? "Informe seu nome para personalizar seu painel."
        : "Atualize seu nome no painel.";
    profileNameInput.value = profile?.displayName || currentUser.displayName || "";
    const studyPreferences = normalizeStudyPreferences(profile?.studyPreferences);
    studyModeInput.value = studyPreferences.mode;
    studyStartTimeInput.value = studyPreferences.startTime;
    studyEndTimeInput.value = studyPreferences.endTime;
    document.querySelectorAll('input[name="studyDays"]').forEach(input => {
        input.checked = studyPreferences.days.includes(Number(input.value));
    });
    document.getElementById("studyDaysError").textContent = "";
    document.getElementById("studyTimeError").textContent = "";
    document.getElementById("studyModeHint").textContent = studyPreferences.mode === "hard"
        ? "Hard mantém cada missão completa, como atualmente. Nenhuma matéria ou tarefa é removida."
        : `O modo ${studyPreferences.mode === "light" ? "Leve" : "Moderado"} divide cada missão em etapas menores, sem remover matérias ou tarefas.`;
    profileSaveButton.hidden = !editable;
    profileCancelButton.hidden = required || !editable;
    setGateMessage("");
    profileSaveButton.disabled = false;
    if (editable) profileNameInput.focus();
};

const firebaseErrorMessage = error => {
    if (error.code === "profile/timeout" || error.code === "unavailable") {
        return "O Firestore não respondeu. Confira se a base de dados foi criada no Firebase e se sua conexão está ativa; depois tente novamente.";
    }
    if (error.code === "permission-denied") {
        return "O Firebase recusou o acesso. Confira as regras do Firestore para permitir que cada usuário leia e altere apenas o próprio perfil.";
    }
    if (error.code === "failed-precondition") {
        return "O serviço solicitado ainda não está pronto. Confira se a base do Cloud Firestore foi criada no Console Firebase.";
    }
    if (error.code === "unauthenticated") {
        return "Sua sessão expirou. Entre novamente para salvar seu perfil.";
    }
    return "Não foi possível salvar seu perfil. Confira a conexão e as configurações do Firebase e tente novamente.";
};

profileCancelButton.addEventListener("click", () => {
    if (!isProfileModalOpen || !isEditingExistingProfile) return;
    finishProfileSetup();
});

profileForm.addEventListener("submit", async event => {
    event.preventDefault();
    if (!currentUser || !profileForm.reportValidity()) return;
    const name = profileNameInput.value.trim();
    if (!name) {
        profileNameInput.setCustomValidity("Informe seu nome.");
        profileNameInput.reportValidity();
        return;
    }
    profileNameInput.setCustomValidity("");
    const studyDays = [...document.querySelectorAll('input[name="studyDays"]:checked')]
        .map(input => Number(input.value))
        .sort((left, right) => left - right);
    const studyDaysError = document.getElementById("studyDaysError");
    const studyTimeError = document.getElementById("studyTimeError");
    studyDaysError.textContent = studyDays.length ? "" : "Escolha pelo menos um dia da semana.";
    if (!studyDays.length) return;
    if (studyStartTimeInput.value >= studyEndTimeInput.value) {
        studyTimeError.textContent = "O horário final precisa ser posterior ao horário inicial.";
        return;
    }
    studyTimeError.textContent = "";
    const studyPreferences = {
        mode: studyModeInput.value,
        days: studyDays,
        startTime: studyStartTimeInput.value,
        endTime: studyEndTimeInput.value
    };
    profileSaveButton.disabled = true;
    profileSaveButton.textContent = "Salvando...";
    setGateMessage("Salvando seu perfil...");
    try {
        const profile = {
            displayName: name,
            email: currentUser.email || "",
            studyPreferences,
            updatedAt: serverTimestamp(),
            photoURL: deleteField()
        };
        await setDoc(doc(db, "users", currentUser.uid), profile, { merge: true });
        currentProfile = { displayName: name, studyPreferences };
        renderProfile(currentProfile);

        try {
            await updateProfile(currentUser, { displayName: name, photoURL: null });
        } catch (error) {
            console.error("O perfil foi salvo, mas não foi possível atualizar os dados públicos da conta Firebase.", error);
            setGateMessage("Seu perfil foi salvo, mas o Firebase não conseguiu sincronizar os dados da conta. Tente salvar novamente.");
            profileSaveButton.disabled = false;
            profileSaveButton.textContent = "Tentar novamente";
            return;
        }

        finishProfileSetup();
    } catch (error) {
        console.error("Não foi possível salvar o perfil do estudante no Firebase.", error);
        setGateMessage(firebaseErrorMessage(error));
    } finally {
        if (isProfileModalOpen) {
            profileSaveButton.disabled = false;
            if (profileSaveButton.textContent === "Salvando...") profileSaveButton.textContent = "Salvar plano";
        }
    }
});

try {
    const [firebaseModule, authModule, firestoreModule] = await Promise.all([
        import("./firebase-config.js"),
        import("https://www.gstatic.com/firebasejs/12.4.0/firebase-auth.js"),
        import("https://www.gstatic.com/firebasejs/12.4.0/firebase-firestore.js")
    ]);
    auth = firebaseModule.auth;
    db = firebaseModule.db;
    ({ onAuthStateChanged, signOut, updateProfile } = authModule);
    ({ doc, getDoc, setDoc, updateDoc, deleteField, serverTimestamp, onSnapshot, runTransaction, collection, getDocs } = firestoreModule);
    window.PMPE_CLOUD = { auth, db, fs: firestoreModule };

    onAuthStateChanged(auth, async user => {
        if (!user) {
            window.location.replace(new URL("login.html", window.location.href));
            return;
        }
        currentUser = user;
        document.body.dataset.sessionState = "checking";
        gate.hidden = false;
        gateLoading.hidden = false;
        paymentGate.hidden = true;
        profileForm.hidden = true;
        gateLoadingMessage.textContent = "Carregando seu perfil...";

        try {
            const accessSnapshot = await withTimeout(getDoc(doc(db, "access", user.uid)), PROFILE_READ_TIMEOUT_MS);
            if (accessSnapshot.data()?.active === true) {
                await showProfileForUser(user);
                return;
            }
            showPaymentGate();
            stopRequestListener?.();
            stopRequestListener = onSnapshot(doc(db, "accessRequests", user.uid), snapshot => {
                if (snapshot.exists()) {
                    const requestData = snapshot.data();
                    if (requestData?.promoCode && requestData.status === "pending") applyPromoPrice();
                    showPaymentRequestStatus(requestData?.status);
                }
            }, error => {
                console.error("Não foi possível acompanhar a solicitação de acesso.", error);
                showPaymentRequestStatus(error);
            });
            try {
                const requestReference = doc(db, "accessRequests", user.uid);
                const requestStatus = await withTimeout(runTransaction(db, async transaction => {
                    const requestSnapshot = await transaction.get(requestReference);
                    if (requestSnapshot.exists()) return requestSnapshot.data()?.status;
                    transaction.set(requestReference, {
                        email: user.email || "",
                        status: "pending",
                        requestedAt: serverTimestamp()
                    });
                    return "pending";
                }), PROFILE_READ_TIMEOUT_MS);
                showPaymentRequestStatus(requestStatus);
            } catch (error) {
                console.error("Não foi possível registrar automaticamente a solicitação de acesso.", error);
                showPaymentRequestStatus(error);
            }
            stopAccessListener?.();
            stopAccessListener = onSnapshot(doc(db, "access", user.uid), snapshot => {
                if (snapshot.data()?.active === true) {
                    void showGrantedProfile(user);
                }
            }, error => {
                console.error("Não foi possível acompanhar a confirmação do pagamento.", error);
            });
        } catch (error) {
            console.error("Não foi possível verificar a liberação de acesso no Firestore.", error);
            gateLoadingMessage.textContent = firebaseErrorMessage(error);
            gateLoginLink.hidden = false;
            gateLoginLink.textContent = "Tentar novamente";
            gateLoginLink.href = window.location.href;
            document.body.dataset.sessionState = "checking";
        }
    }, showSessionError);

    window.editStudentProfile = () => {
        openProfileForm({ profile: currentProfile, required: false, editable: true });
    };

    window.signOutCurrentUser = async () => {
        const status = document.getElementById("profileActionStatus");
        try {
            await window.PMPE_SYNC?.stopAndClear();
            await signOut(auth);
            window.location.replace(new URL("login.html", window.location.href));
        } catch (error) {
            console.error("Não foi possível encerrar a sessão Firebase.", error);
            status.textContent = "Não foi possível sair. Verifique sua conexão e tente novamente.";
        }
    };
} catch (error) {
    showSessionError(error);
}