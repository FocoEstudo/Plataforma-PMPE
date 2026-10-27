const ADMIN_EMAIL = "ianitalocorp@gmail.com";
const inboxPanel = document.getElementById("inboxPanel");
const ticketList = document.getElementById("ticketList");
const feedbackList = document.getElementById("feedbackList");
const ticketFilter = document.getElementById("ticketFilter");
const feedbackSummary = document.getElementById("feedbackSummary");

const TYPE_LABEL = { duvida: "Dúvida", suporte: "Suporte técnico", sugestao: "Sugestão", elogio: "Elogio", reclamacao: "Reclamação", denuncia: "Denúncia" };
const STATUS_LABEL = { open: "Aguardando resposta", answered: "Respondido", closed: "Encerrado" };

const el = (tag, className, text) => {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (text !== undefined) node.textContent = text;
    return node;
};
const fmtDate = ts => ts?.toDate ? ts.toDate().toLocaleString("pt-BR", { dateStyle: "short", timeStyle: "short" }) : "agora";

let stopTickets;
let stopFeedbacks;
let tickets = [];
let fs;
let db;

const renderTickets = () => {
    ticketList.replaceChildren();
    const filter = ticketFilter.value;
    const visible = tickets.filter(t => filter === "all" || t.status === filter);
    if (!visible.length) ticketList.appendChild(el("p", "muted", "Nenhum atendimento neste filtro."));
    visible.forEach(ticket => {
        const card = el("article", "request-card");
        card.append(
            el("p", "eyebrow", `${ticket.protocol} · ${TYPE_LABEL[ticket.type] || ticket.type} · ${STATUS_LABEL[ticket.status] || ticket.status}`),
            el("strong", "", ticket.subject),
            el("p", "muted", `${ticket.name} <${ticket.email}> · ${fmtDate(ticket.createdAt)}`),
            el("p", "", ticket.message)
        );
        const reply = el("textarea");
        reply.rows = 3;
        reply.maxLength = 3000;
        reply.placeholder = "Escreva a resposta ao aluno...";
        reply.value = ticket.reply || "";
        reply.className = "reply-box";
        const actions = el("div", "actions");
        const send = el("button", "primary", ticket.reply ? "Atualizar resposta" : "Responder");
        const close = el("button", "", "Encerrar");
        const save = async status => {
            const text = reply.value.trim();
            if (status === "answered" && !text) { reply.focus(); return; }
            send.disabled = true; close.disabled = true;
            try {
                const payload = { status };
                if (text) { payload.reply = text; payload.repliedAt = fs.serverTimestamp(); }
                await fs.updateDoc(fs.doc(db, "tickets", ticket.id), payload);
            } catch (error) {
                console.error("Não foi possível atualizar o atendimento.", error);
                window.alert("Não foi possível salvar. Confira as regras do Firestore e a conexão.");
            } finally { send.disabled = false; close.disabled = false; }
        };
        send.addEventListener("click", () => save("answered"));
        close.addEventListener("click", () => save("closed"));
        actions.append(send, close);
        card.append(reply, actions);
        ticketList.appendChild(card);
    });
};

const renderFeedbacks = items => {
    feedbackList.replaceChildren();
    const avg = items.length ? items.reduce((sum, f) => sum + (f.rating || 0), 0) / items.length : 0;
    feedbackSummary.textContent = items.length ? `${items.length} avaliações · média ${avg.toFixed(1)} de 5` : "Nenhum feedback recebido ainda.";
    items.forEach(f => {
        const card = el("article", "request-card");
        card.append(
            el("p", "eyebrow", `${"★".repeat(f.rating)}${"☆".repeat(5 - f.rating)} · ${f.category}`),
            el("p", "muted", `${f.name} <${f.email}> · ${fmtDate(f.createdAt)}`)
        );
        if (f.liked) card.appendChild(el("p", "", `Gostou: ${f.liked}`));
        if (f.improve) card.appendChild(el("p", "", `Melhorar: ${f.improve}`));
        feedbackList.appendChild(card);
    });
};

const bySeconds = (a, b) => (b.createdAt?.seconds ?? 9e12) - (a.createdAt?.seconds ?? 9e12);

const startInbox = () => {
    inboxPanel.hidden = false;
    stopTickets?.();
    stopFeedbacks?.();
    stopTickets = fs.onSnapshot(fs.collection(db, "tickets"), snap => {
        tickets = snap.docs.map(d => ({ id: d.id, ...d.data() })).sort(bySeconds);
        renderTickets();
    }, error => console.error("Não foi possível ler os atendimentos.", error));
    stopFeedbacks = fs.onSnapshot(fs.collection(db, "feedbacks"), snap => {
        renderFeedbacks(snap.docs.map(d => ({ id: d.id, ...d.data() })).sort(bySeconds));
    }, error => console.error("Não foi possível ler os feedbacks.", error));
};

try {
    const [{ auth, db: firestore }, authModule, firestoreModule] = await Promise.all([
        import("./firebase-config.js"),
        import("https://www.gstatic.com/firebasejs/12.4.0/firebase-auth.js"),
        import("https://www.gstatic.com/firebasejs/12.4.0/firebase-firestore.js")
    ]);
    db = firestore;
    fs = firestoreModule;
    ticketFilter.addEventListener("change", renderTickets);
    authModule.onAuthStateChanged(auth, user => {
        const isAdmin = user && (user.email || "").toLowerCase() === ADMIN_EMAIL && user.emailVerified;
        if (!isAdmin) {
            stopTickets?.(); stopFeedbacks?.();
            inboxPanel.hidden = true;
            return;
        }
        startInbox();
    });
} catch (error) {
    console.error("Não foi possível carregar a caixa de atendimento.", error);
}
