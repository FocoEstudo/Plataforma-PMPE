import { requestCheckoutUrl } from "./checkout-client.mjs";

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
const paymentPlanOptions = document.getElementById("paymentPlanOptions");
const startCheckoutButton = document.getElementById("startCheckoutButton");
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
let collection;
let getDocs;
let stopAccessListener;
let isLoadingGrantedProfile = false;
let accessExpiryTimer;

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
    setPaymentRequestStatus(
        "ready",
        "Escolha um plano",
        "Após a confirmação do Mercado Pago, o acesso será ativado automaticamente nesta conta."
    );
    document.body.dataset.sessionState = "checking";
};

const setPaymentRequestStatus = (state, heading, detail) => {
    paymentRequestStatus.dataset.state = state;
    paymentRequestHeading.textContent = heading;
    paymentRequestDetail.textContent = detail;
    const icon = state === "error"
        ? "fa-circle-exclamation"
        : state === "ready"
            ? "fa-credit-card"
            : "fa-spinner fa-spin";
    paymentRequestStatus.querySelector(".payment-gate-status-icon").innerHTML = `<i class="fa-solid ${icon}" aria-hidden="true"></i>`;
};

const ACCESS_DURATION_MS = Object.freeze({
    semanal: 7 * 24 * 60 * 60 * 1000,
    mensal: 30 * 24 * 60 * 60 * 1000
});

const accessExpiration = access => {
    if (access?.active !== true) return null;
    if (access.plan === undefined || access.plan === "vitalicio") return Infinity;
    const durationMs = ACCESS_DURATION_MS[access.plan];
    if (!durationMs || typeof access.paidAt?.toMillis !== "function") return null;
    const paidAt = access.paidAt.toMillis();
    return Number.isSafeInteger(paidAt) && paidAt >= 0 ? paidAt + durationMs : null;
};

const hasCurrentAccess = access => {
    const expiry = accessExpiration(access);
    return expiry === Infinity || Number.isFinite(expiry) && Date.now() < expiry;
};

const scheduleAccessExpiry = access => {
    clearTimeout(accessExpiryTimer);
    const expiry = accessExpiration(access);
    if (!Number.isFinite(expiry)) return;
    const check = () => {
        const remaining = expiry - Date.now();
        if (remaining <= 0) window.location.reload();
        else accessExpiryTimer = setTimeout(check, Math.min(remaining, 2147483647));
    };
    check();
};

const showGrantedProfile = async (user, access) => {
    if (isLoadingGrantedProfile) return;
    isLoadingGrantedProfile = true;
    scheduleAccessExpiry(access);
    stopAccessListener?.();
    stopAccessListener = undefined;
    paymentGate.hidden = true;
    gateLoading.hidden = false;
    gateLoadingMessage.textContent = "Pagamento confirmado. Carregando seu perfil...";
    try {
        await showProfileForUser(user);
    } finally {
        isLoadingGrantedProfile = false;
    }
};

const startCheckout = async () => {
    const plan = paymentPlanOptions.querySelector('input[name="paymentPlan"]:checked')?.value;
    if (!PLANS_FOR_CHECKOUT.has(plan)) {
        paymentGateMessage.textContent = "Selecione um plano para continuar.";
        return;
    }
    startCheckoutButton.disabled = true;
    paymentGateMessage.textContent = "";
    try {
        const checkoutUrl = await requestCheckoutUrl({
            auth,
            concurso: "pmpe",
            plan
        });
        window.location.assign(checkoutUrl);
    } catch (error) {
        console.error("Não foi possível iniciar o Checkout Pro.", error);
        paymentGateMessage.textContent = error.message || "Não foi possível iniciar o checkout. Tente novamente.";
    } finally {
        startCheckoutButton.disabled = false;
    }
};

const PLANS_FOR_CHECKOUT = new Set(["semanal", "mensal", "vitalicio"]);
startCheckoutButton.addEventListener("click", () => { void startCheckout(); });

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
    window.PMPE_PLANNING?.load();
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
        window.PMPE_PLANNING?.save();
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
    ({ doc, getDoc, setDoc, updateDoc, deleteField, serverTimestamp, onSnapshot, collection, getDocs } = firestoreModule);
    window.PMPE_CLOUD = { auth, db, fs: firestoreModule };

    onAuthStateChanged(auth, async user => {
        clearTimeout(accessExpiryTimer);
        if (!user) {
            window.location.replace(new URL("concursos.html", window.location.href));
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
            const existingAccess = accessSnapshot.exists() ? accessSnapshot.data() : null;
            if (hasCurrentAccess(existingAccess)) {
                scheduleAccessExpiry(existingAccess);
                await showProfileForUser(user);
                return;
            }
            showPaymentGate();
            stopAccessListener?.();
            stopAccessListener = onSnapshot(doc(db, "access", user.uid), snapshot => {
                const access = snapshot.exists() ? snapshot.data() : null;
                if (hasCurrentAccess(access)) {
                    void showGrantedProfile(user, access);
                } else if (access?.active === true && ["semanal", "mensal"].includes(access.plan) && accessExpiration(access) !== null) {
                    setPaymentRequestStatus(
                        "error",
                        "Seu acesso por período venceu",
                        "Escolha um plano e pague pelo Mercado Pago para renovar seu acesso."
                    );
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
            window.location.replace(new URL("concursos.html", window.location.href));
        } catch (error) {
            console.error("Não foi possível encerrar a sessão Firebase.", error);
            status.textContent = "Não foi possível sair. Verifique sua conexão e tente novamente.";
        }
    };
} catch (error) {
    showSessionError(error);
}