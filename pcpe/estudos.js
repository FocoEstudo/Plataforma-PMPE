'use strict';

(() => {
    const subjects = [
        { id: 'constitucional', name: 'Noções de Direito Constitucional', topics: ['Direitos e garantias fundamentais', 'Organização do Estado', 'Poder Executivo', 'Defesa do Estado e segurança pública'] },
        { id: 'administrativo', name: 'Noções de Direito Administrativo', topics: ['Estado, governo e administração pública', 'Atos e agentes públicos', 'Poderes da administração', 'Licitações e contratos', 'Responsabilidade civil do Estado'] },
        { id: 'penal', name: 'Noções de Direito Penal', topics: ['Princípios e aplicação da lei penal', 'Teoria do crime', 'Crimes contra a pessoa, o patrimônio e a administração pública'] },
        { id: 'processual', name: 'Noções de Direito Processual Penal', topics: ['Inquérito e ação penal', 'Prisão e medidas cautelares'] },
        { id: 'estadual', name: 'Legislação Estadual', topics: ['Estatuto dos Policiais Civis de Pernambuco', 'Constituição de Pernambuco: segurança pública'] },
        { id: 'portugues', name: 'Língua Portuguesa', topics: ['Compreensão e interpretação de textos', 'Tipologia textual, ortografia e acentuação', 'Crase, regência, concordância e sintaxe'] },
        { id: 'informatica', name: 'Informática', topics: ['Internet, intranet e navegação', 'Correio eletrônico e grupos de discussão', 'Segurança da informação', 'Windows, Linux e redes'] },
        { id: 'logica', name: 'Raciocínio Lógico', topics: ['Estruturas e argumentação lógica', 'Diagramas e álgebra de proposições', 'Problemas aritméticos'] },
        { id: 'estatistica', name: 'Estatística', topics: ['Amostragem, gráficos e tabelas', 'Média, mediana e moda', 'Dispersão e probabilidade'] }
    ];
    const roles = {
        agente: { name: 'Agente de Polícia', subject: { id: 'contabilidade', name: 'Contabilidade Geral', topics: ['Conceitos, objetivos e finalidades', 'Patrimônio, ativo, passivo e patrimônio líquido', 'Escrituração, contas e balanço patrimonial'] } },
        escrivao: { name: 'Escrivão de Polícia', subject: { id: 'arquivologia', name: 'Noções de Arquivologia', topics: ['Arquivo: conceito, princípios e funções', 'Gestão de documentos e protocolo', 'Preservação e conservação de documentos'] } }
    };
    const roleId = new URLSearchParams(location.search).get('cargo');
    const role = Object.prototype.hasOwnProperty.call(roles, roleId) ? roles[roleId] : null;
    if (!role) {
        document.getElementById('invalid-role').hidden = false;
        return;
    }

    const allSubjects = [...subjects, role.subject];
    const prefix = `pcpe_${window.PCPE_SESSION_UID}_${roleId}_`;
    const errorBox = document.getElementById('storage-error');
    const status = document.getElementById('save-status');
    let storageAvailable = true;
    const showStorageError = error => {
        storageAvailable = false;
        console.error('Falha ao acessar dados da prévia PCPE:', error);
        errorBox.textContent = 'Não foi possível acessar ou salvar os dados deste navegador. Confira o armazenamento antes de continuar.';
        errorBox.hidden = false;
        status.textContent = 'Alterações não salvas.';
    };
    const read = key => {
        try {
            return localStorage.getItem(prefix + key);
        } catch (error) {
            showStorageError(error);
            return null;
        }
    };
    const write = (key, value) => {
        if (!storageAvailable) {
            status.textContent = 'Alterações não salvas.';
            return false;
        }
        try {
            localStorage.setItem(prefix + key, value);
            status.textContent = 'Salvo neste navegador.';
            return true;
        } catch (error) {
            showStorageError(error);
            return false;
        }
    };
    const readJson = (key, fallback, isValid) => {
        const raw = read(key);
        if (raw === null) return fallback;
        try {
            const value = JSON.parse(raw);
            if (!isValid(value)) throw new Error(`Formato inválido para ${key}`);
            return value;
        } catch (error) {
            showStorageError(error);
            throw error;
        }
    };
    const make = (tag, text, className) => {
        const node = document.createElement(tag);
        if (text !== undefined) node.textContent = text;
        if (className) node.className = className;
        return node;
    };
    const app = document.getElementById('app');
    document.getElementById('sidebar-role').textContent = role.name;
    document.getElementById('page-title').textContent = `PCPE · ${role.name}`;
    app.hidden = false;

    const banners = {
        conteudo: ['Conteúdo do edital', 'fa-book-open'],
        missoes: ['Plano de estudos', 'fa-list-check'],
        videos: ['Estudo integrado', 'fa-circle-play'],
        pdfs: ['Biblioteca da missão', 'fa-file-pdf'],
        flashcards: ['Revisão inteligente', 'fa-layer-group'],
        mapas: ['Visão de conjunto', 'fa-diagram-project'],
        atendimento: ['Canal de atendimento', 'fa-headset'],
        feedback: ['Sua opinião importa', 'fa-star'],
        simulado: ['Treino para a prova', 'fa-clipboard-question'],
        apoio: ['Ferramentas de estudo', 'fa-toolbox'],
        redacao: ['Prática de escrita', 'fa-pen-nib'],
        erros: ['Revisão inteligente', 'fa-book-skull']
    };
    Object.entries(banners).forEach(([id, [eyebrow, iconName]]) => {
        const section = document.getElementById(id);
        const heading = section.querySelector('h2');
        const banner = make('div', undefined, 'police-banner mb-5');
        const crest = document.createElement('img');
        crest.className = 'police-banner-crest';
        crest.src = 'https://images.tcdn.com.br/img/editor/up/598190/PCPE_BRASAO.jpg';
        crest.alt = 'Brasão da PCPE';
        crest.referrerPolicy = 'no-referrer';
        const body = make('div', undefined, 'police-banner-body');
        const icon = make('i', undefined, `fa-solid ${iconName} mr-2`);
        icon.setAttribute('aria-hidden', 'true');
        heading.className = 'police-banner-title';
        heading.prepend(icon);
        body.append(make('span', eyebrow, 'police-banner-eyebrow'), heading);
        banner.append(crest, body);
        section.prepend(banner);
    });

    const mobileNav = document.getElementById('mobile-nav');
    document.querySelectorAll('.sidebar nav a').forEach(link => mobileNav.appendChild(link.cloneNode(true)));
    const navigation = [...document.querySelectorAll('.sidebar nav a, #mobile-nav a')];
    const views = [...document.querySelectorAll('.view')];
    const navigate = () => {
        const requested = location.hash.slice(1) || 'painel';
        const target = views.find(view => view.id === requested) || views[0];
        views.forEach(view => { view.hidden = view !== target; });
        navigation.forEach(link => {
            const active = link.hash === `#${target.id}`;
            link.classList.toggle('is-active', active);
            if (active) link.setAttribute('aria-current', 'page');
            else link.removeAttribute('aria-current');
        });
        document.title = `PCPE · ${target.querySelector('h2')?.textContent || 'Painel'} · ${role.name}`;
    };
    window.addEventListener('hashchange', navigate);
    navigate();

    const dashboard = document.getElementById('dashboard-subjects');
    const syllabus = document.getElementById('syllabus');
    const mindmapTopics = document.getElementById('mindmap-topics');
    const videoSubject = document.getElementById('video-subject');
    const videoLesson = document.getElementById('video-lesson');
    const videoStatus = document.getElementById('video-status');
    const videoPlayer = document.getElementById('video-player');
    const videoFrame = document.getElementById('video-frame');
    const videoCatalog = new Map();
    const videoSourcesReady = window.PPPE_VIDEOS && window.PPPE_VIDEOS_COMPLEMENTARES && window.PCPE_VIDEO_MAP;
    if (!videoSourcesReady) console.error('Não foi possível carregar os catálogos de videoaulas.');
    const videoId = url => {
        const parsed = new URL(url);
        const id = parsed.hostname === 'youtu.be' ? parsed.pathname.slice(1) :
            ['youtube.com', 'www.youtube.com'].includes(parsed.hostname) ? parsed.searchParams.get('v') : null;
        if (!id || !/^[A-Za-z0-9_-]{11}$/.test(id)) throw new Error('URL de videoaula inválida.');
        return id;
    };
    if (videoSourcesReady) {
        Object.entries(window.PCPE_VIDEO_MAP).forEach(([subjectId, mappings]) => {
            const lessons = [];
            mappings.forEach(([topic, titles]) => {
                const inherited = (window.PPPE_VIDEOS[topic] || []).map(item => ({ title: item.title, ids: item.urls.map(videoId) }));
                const additions = (window.PPPE_VIDEOS_COMPLEMENTARES[topic] || []).map(([id, title]) => ({ title, ids: [videoId(`https://youtu.be/${id}`)] }));
                titles.forEach(title => {
                    const match = [...inherited, ...additions].find(item => item.title === title);
                    if (!match) throw new Error(`Videoaula não encontrada: ${topic} / ${title}`);
                    match.ids.forEach((id, index) => lessons.push({ id, title: match.ids.length > 1 ? `${title} · parte ${index + 1}` : title }));
                });
            });
            videoCatalog.set(subjectId, lessons);
        });
    }
    const selectVideo = () => {
        videoFrame.removeAttribute('src');
        videoPlayer.hidden = true;
        const lessons = videoCatalog.get(videoSubject.value) || [];
        videoLesson.replaceChildren();
        const placeholder = make('option', lessons.length ? 'Selecione uma aula' : 'Nenhuma aula selecionada para esta disciplina');
        placeholder.value = '';
        videoLesson.appendChild(placeholder);
        lessons.forEach((lesson, index) => {
            const option = make('option', lesson.title);
            option.value = String(index);
            videoLesson.appendChild(option);
        });
        videoLesson.disabled = !lessons.length;
        videoStatus.textContent = !videoSourcesReady
            ? 'Não foi possível carregar as videoaulas. Recarregue a página.'
            : lessons.length ? `${lessons.length} aula(s) disponível(is). Os demais tópicos estão em preparação.` : 'Videoaulas desta disciplina em preparação.';
    };
    videoSubject.addEventListener('change', selectVideo);
    videoLesson.addEventListener('change', () => {
        videoFrame.removeAttribute('src');
        videoPlayer.hidden = true;
        if (videoLesson.value === '') return;
        const lesson = (videoCatalog.get(videoSubject.value) || [])[Number(videoLesson.value)];
        if (!lesson) {
            videoStatus.textContent = 'A aula selecionada não foi encontrada. Selecione novamente.';
            return;
        }
        videoFrame.src = `https://www.youtube.com/embed/${lesson.id}?rel=0`;
        videoFrame.title = `Videoaula: ${lesson.title}`;
        videoPlayer.hidden = false;
        videoStatus.textContent = 'Reprodução incorporada. A disponibilidade depende do responsável pelo vídeo.';
    });
    allSubjects.forEach(subject => {
        const option = make('option', subject.name);
        option.value = subject.id;
        videoSubject.appendChild(option);
        const card = make('a', undefined, 'dashboard-shortcut');
        card.href = '#conteudo';
        const image = document.createElement('img');
        image.className = 'dashboard-shortcut-image';
        image.src = 'https://www.simuladosbr.net/wp-content/uploads/2024/01/pacote-simulados-pcpe-2024-agente.jpg';
        image.alt = '';
        image.referrerPolicy = 'no-referrer';
        const content = make('span', undefined, 'dashboard-shortcut-content');
        const icon = make('i', undefined, 'fa-solid fa-book-open');
        icon.setAttribute('aria-hidden', 'true');
        const text = make('span');
        text.append(make('strong', subject.name), make('small', 'Consulte o conteúdo desta matéria'));
        content.append(icon, text);
        card.append(image, content);
        dashboard.appendChild(card);
        const details = make('details', undefined, 'item');
        details.appendChild(make('summary', subject.name));
        card.addEventListener('click', () => { details.open = true; });
        const list = make('ul');
        subject.topics.forEach(topic => list.appendChild(make('li', topic)));
        details.appendChild(list);
        syllabus.appendChild(details);
        const branch = make('details');
        branch.appendChild(make('summary', subject.name));
        const branchList = make('ul');
        subject.topics.forEach(topic => branchList.appendChild(make('li', topic)));
        branch.appendChild(branchList);
        mindmapTopics.appendChild(branch);
    });
    selectVideo();

    let progress;
    let flashcards;
    try {
        progress = readJson('missions', {}, value => value !== null && typeof value === 'object' && !Array.isArray(value) && Object.values(value).every(item => typeof item === 'boolean'));
        flashcards = readJson('flashcards', [], value => Array.isArray(value) && value.every(card => card && typeof card.question === 'string' && typeof card.answer === 'string'));
    } catch (error) {
        app.hidden = true;
        return;
    }
    const missionList = document.getElementById('mission-list');
    const updateProgress = () => {
        const completed = allSubjects.filter(subject => progress[subject.id] === true).length;
        document.getElementById('mission-progress').textContent = `${completed} de ${allSubjects.length} disciplinas marcadas como estudadas.`;
    };
    allSubjects.forEach(subject => {
        const label = make('label', undefined, 'item mission-label');
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.checked = progress[subject.id] === true;
        checkbox.addEventListener('change', () => {
            const next = { ...progress, [subject.id]: checkbox.checked };
            if (write('missions', JSON.stringify(next))) progress = next;
            else checkbox.checked = progress[subject.id] === true;
            updateProgress();
        });
        label.append(checkbox, make('span', `Estudar ${subject.name}`));
        const item = make('div', undefined, 'mission-entry');
        const lessons = videoCatalog.get(subject.id) || [];
        const action = make('a', lessons.length ? `Ver ${lessons.length} videoaula(s)` : 'Videoaulas em preparação');
        action.href = '#videos';
        action.addEventListener('click', () => {
            videoSubject.value = subject.id;
            selectVideo();
        });
        item.append(label, action);
        missionList.appendChild(item);
    });
    updateProgress();

    document.querySelectorAll('[data-draft]').forEach(field => {
        field.value = read(field.dataset.draft) || '';
        field.addEventListener('input', () => write(field.dataset.draft, field.value));
    });

    const cardList = document.getElementById('flashcard-list');
    const renderCards = () => {
        cardList.replaceChildren();
        if (!flashcards.length) {
            cardList.appendChild(make('p', 'Nenhum cartão criado ainda.'));
            return;
        }
        flashcards.forEach((card, index) => {
            const article = make('article', undefined, 'item');
            article.appendChild(make('h3', card.question));
            const answer = make('details');
            answer.append(make('summary', 'Mostrar resposta'), make('p', card.answer));
            const remove = make('button', 'Excluir cartão');
            remove.type = 'button';
            remove.setAttribute('aria-label', `Excluir cartão: ${card.question}`);
            remove.addEventListener('click', () => {
                const next = flashcards.filter((_, i) => i !== index);
                if (write('flashcards', JSON.stringify(next))) {
                    flashcards = next;
                    renderCards();
                }
            });
            article.append(answer, remove);
            cardList.appendChild(article);
        });
    };
    document.getElementById('flashcard-form').addEventListener('submit', event => {
        event.preventDefault();
        const question = document.getElementById('flashcard-question');
        const answer = document.getElementById('flashcard-answer');
        if (!question.value.trim() || !answer.value.trim()) {
            status.textContent = 'Preencha a pergunta e a resposta.';
            return;
        }
        const next = [...flashcards, { question: question.value.trim(), answer: answer.value.trim() }];
        if (write('flashcards', JSON.stringify(next))) {
            flashcards = next;
            event.currentTarget.reset();
            renderCards();
        }
    });
    renderCards();
})();
