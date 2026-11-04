(function () {
    const root = document.getElementById("ppeEstudo");
    const conteudo = window.PPPE_CONTEUDO;
    if (!root || !conteudo) return;

    const read = key => {
        try { return JSON.parse(localStorage.getItem(key) || "{}") || {}; } catch (error) { return {}; }
    };
    const write = (key, value) => {
        try { localStorage.setItem(key, JSON.stringify(value)); } catch (error) { /* armazenamento indisponível */ }
    };
    const el = (tag, className, text) => {
        const node = document.createElement(tag);
        if (className) node.className = className;
        if (text !== undefined) node.textContent = text;
        return node;
    };

    Object.keys(conteudo).forEach(disciplinaId => {
        const disciplina = conteudo[disciplinaId];
        const doneKey = `pppe_estudo_${disciplinaId}_done`;
        const quizKey = `pppe_estudo_${disciplinaId}_quiz`;
        const done = read(doneKey);
        const quiz = read(quizKey);

        const wrap = el("section", "est-wrap");
        wrap.append(el("h2", "", disciplina.nome));
        if (disciplina.aviso) wrap.append(el("p", "est-aviso", disciplina.aviso));

        const progress = el("div", "est-prog");
        const progressText = el("span");
        const bar = el("div", "est-bar");
        const fill = document.createElement("i");
        bar.append(fill);
        progress.append(progressText, bar);
        wrap.append(progress);

        const updateProgress = () => {
            const total = disciplina.topicos.length;
            const count = disciplina.topicos.filter(topic => done[topic.id]).length;
            progressText.textContent = `Progresso: ${count} de ${total} tópicos concluídos`;
            fill.style.width = `${Math.round((count / total) * 100)}%`;
        };

        disciplina.topicos.forEach(topic => {
            const details = el("details", "est-topic");
            details.dataset.done = String(Boolean(done[topic.id]));
            details.append(el("summary", "", topic.titulo));
            const body = el("div", "est-body");
            const list = el("ul");
            topic.pontos.forEach(point => list.append(el("li", "", point)));
            body.append(list);
            if (topic.atencao) body.append(el("div", "est-atencao", `Atenção para a prova: ${topic.atencao}`));
            const label = el("label", "est-done");
            const checkbox = document.createElement("input");
            checkbox.type = "checkbox";
            checkbox.checked = Boolean(done[topic.id]);
            checkbox.addEventListener("change", () => {
                if (checkbox.checked) done[topic.id] = true; else delete done[topic.id];
                details.dataset.done = String(checkbox.checked);
                write(doneKey, done);
                updateProgress();
            });
            label.append(checkbox, document.createTextNode("Marcar como concluído"));
            body.append(label);
            details.append(body);
            wrap.append(details);
        });
        updateProgress();

        if (Array.isArray(disciplina.questoes) && disciplina.questoes.length) {
            wrap.append(el("h2", "", "Questões Certo/Errado"));
            const score = el("p", "est-score");
            const updateScore = () => {
                const answered = Object.keys(quiz).length;
                const hits = disciplina.questoes.filter((q, index) => quiz[index] !== undefined && quiz[index] === q.gabarito).length;
                score.textContent = `Respondidas: ${answered}/${disciplina.questoes.length} — Acertos: ${hits}`;
            };
            wrap.append(score);
            disciplina.questoes.forEach((question, index) => {
                const card = el("div", "est-q");
                card.append(el("p", "", `${index + 1}. ${question.enunciado}`));
                const actions = el("div", "est-q-actions");
                const comment = el("p", "est-coment");
                comment.hidden = true;
                const buttons = [["Certo", true], ["Errado", false]].map(([label, value]) => {
                    const button = el("button", "", label);
                    button.type = "button";
                    button.addEventListener("click", () => answer(value));
                    return { button, value };
                });
                const answer = value => {
                    quiz[index] = value;
                    write(quizKey, quiz);
                    show();
                    updateScore();
                };
                const show = () => {
                    if (quiz[index] === undefined) return;
                    const correct = quiz[index] === question.gabarito;
                    buttons.forEach(({ button, value }) => {
                        button.disabled = true;
                        if (value === quiz[index]) button.dataset.state = correct ? "ok" : "erro";
                    });
                    comment.hidden = false;
                    comment.textContent = `${correct ? "Correto." : "Incorreto."} Gabarito: ${question.gabarito ? "Certo" : "Errado"}. ${question.comentario}`;
                };
                actions.append(...buttons.map(item => item.button));
                card.append(actions, comment);
                wrap.append(card);
                show();
            });
            updateScore();
        }
        root.append(wrap);
    });
})();
