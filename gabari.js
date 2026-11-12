/*
 * Gabari: mascote virtual de apoio da plataforma.
 * Configuração opcional antes de carregar o script:
 *   window.GABARI_CONFIG = { concurso: 'PPPE', accent: '#0a1448', gold: '#e0b43c', tips: [...] }
 */
(function () {
    if (window.__gabariLoaded) return;
    window.__gabariLoaded = true;

    const cfg = Object.assign({
        concurso: '',
        accent: '#0a1448',
        gold: '#e0b43c',
        storageKey: 'gabari_hidden',
        tips: [
            'Constância vence maratona: estude um pouco todos os dias.',
            'Errou uma questão? Anote no caderno de erros e revise depois.',
            'Faça o simulado com cronômetro para treinar o ritmo da prova.',
            'Leia o enunciado até o fim antes de olhar as alternativas.',
            'Revisar em 24 horas fixa muito mais do que reler tudo no fim de semana.'
        ],
        actions: [
            { label: 'Ver minhas missões', tab: 'missions', icon: 'fa-bullseye' },
            { label: 'Fazer um simulado', tab: 'simulations', icon: 'fa-clipboard-check' },
            { label: 'Abrir caderno de erros', tab: 'errors', icon: 'fa-book-bookmark' },
            { label: 'Treinar redação', tab: 'writing', icon: 'fa-pen-nib' },
            { label: 'Falar com o atendimento', tab: 'supportdesk', icon: 'fa-headset' }
        ]
    }, window.GABARI_CONFIG || {});

    const store = {
        get: k => { try { return localStorage.getItem(k); } catch (e) { return null; } },
        set: (k, v) => { try { localStorage.setItem(k, v); } catch (e) { /* sem armazenamento */ } },
        del: k => { try { localStorage.removeItem(k); } catch (e) { /* sem armazenamento */ } }
    };

    const avatar = `
<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Gabari, mascote da plataforma">
  <circle cx="60" cy="60" r="58" fill="${cfg.gold}"/>
  <path d="M14 112c4-22 22-30 46-30s42 8 46 30a58 58 0 0 1-92 0z" fill="${cfg.accent}"/>
  <path d="M46 84l14 14 14-14-6-4H52z" fill="#fff"/>
  <path d="M60 98l-5 14h10z" fill="${cfg.gold}"/>
  <rect x="52" y="68" width="16" height="16" rx="6" fill="#4a2c1b"/>
  <ellipse cx="60" cy="50" rx="25" ry="29" fill="#5b3a26"/>
  <ellipse cx="35.5" cy="52" rx="4.5" ry="7" fill="#4f301f"/>
  <ellipse cx="84.5" cy="52" rx="4.5" ry="7" fill="#4f301f"/>
  <path d="M34 44c-2-20 10-30 26-30s28 10 26 30c-3-9-9-15-14-17-8 4-24 4-30 0-5 3-7 9-8 17z" fill="#14100e"/>
  <path d="M47 41q5-3 10 0M63 41q5-3 10 0" stroke="#14100e" stroke-width="2.6" fill="none" stroke-linecap="round"/>
  <ellipse cx="51" cy="48" rx="4" ry="4.4" fill="#fff"/>
  <ellipse cx="69" cy="48" rx="4" ry="4.4" fill="#fff"/>
  <circle cx="52" cy="48.6" r="2.3" fill="#1b0f08"/>
  <circle cx="68" cy="48.6" r="2.3" fill="#1b0f08"/>
  <path d="M60 52c-1 4-3 7-1 8 1.6.8 3.4.8 4.4 0 1.6-1-.4-4-3.4-8z" fill="#4a2c1b"/>
  <path d="M49 64q11 9 22 0" stroke="#2a130a" stroke-width="2.6" fill="none" stroke-linecap="round"/>
  <path d="M51 65q9 6 18 0v1q-9 7-18 0z" fill="#fff"/>
</svg>`;

    const css = `
#gabari-root{position:fixed;right:1rem;bottom:1rem;z-index:9990;font-family:Inter,system-ui,sans-serif;display:flex;flex-direction:column;align-items:flex-end;gap:.6rem}
#gabari-root *{box-sizing:border-box}
#gabari-fab{width:4.2rem;height:4.2rem;border-radius:50%;border:3px solid ${cfg.gold};padding:0;background:${cfg.accent};cursor:pointer;box-shadow:0 10px 28px rgba(0,0,0,.35);overflow:hidden;transition:transform .2s}
#gabari-fab:hover,#gabari-fab:focus-visible{transform:scale(1.08)}
#gabari-fab:focus-visible,#gabari-root button:focus-visible{outline:3px solid #fff;outline-offset:2px;box-shadow:0 0 0 5px ${cfg.accent}}
#gabari-fab svg{width:100%;height:100%;display:block}
#gabari-bubble,#gabari-panel{max-width:min(20rem,calc(100vw - 2rem));background:#fff;color:#14213d;border-radius:1rem;border:2px solid ${cfg.accent};box-shadow:0 14px 36px rgba(0,0,0,.28)}
#gabari-bubble{padding:.7rem .9rem;font-size:.85rem;line-height:1.4;position:relative}
#gabari-bubble[hidden],#gabari-panel[hidden]{display:none}
#gabari-panel{width:20rem;overflow:hidden;display:flex;flex-direction:column;max-height:calc(100vh - 7rem)}
#gabari-panel[hidden]{display:none}
.gabari-body{overflow-y:auto}
.gabari-guide{margin:0 0 .8rem;padding:.6rem .7rem;border-radius:.6rem;background:#f3f5fb;font-size:.82rem;line-height:1.45}
.gabari-guide strong{display:block;margin-bottom:.3rem;color:${cfg.accent}}
.gabari-guide ol{margin:0;padding-left:1.1rem}
.gabari-guide li{margin:.2rem 0}
.gabari-head{display:flex;align-items:center;gap:.7rem;padding:.8rem 1rem;background:${cfg.accent};color:#fff}
.gabari-head svg{width:2.8rem;height:2.8rem;flex:none;border-radius:50%}
.gabari-head strong{display:block;font-size:1rem}
.gabari-head small{opacity:.85;font-size:.72rem}
.gabari-head .gabari-close{margin-left:auto;background:transparent;border:0;color:#fff;font-size:1.1rem;cursor:pointer;padding:.3rem}
.gabari-body{padding:.9rem 1rem}
.gabari-say{font-size:.9rem;line-height:1.5;margin:0 0 .8rem}
.gabari-actions{display:grid;gap:.45rem}
.gabari-actions button{display:flex;align-items:center;gap:.6rem;width:100%;text-align:left;padding:.55rem .7rem;border-radius:.6rem;border:1px solid #c9d2ea;background:#f3f5fb;color:${cfg.accent};font-weight:700;font-size:.82rem;cursor:pointer}
.gabari-actions button:hover{background:#e4e9f7}
.gabari-foot{display:flex;justify-content:space-between;gap:.5rem;padding:.5rem 1rem .8rem}
.gabari-foot button{background:transparent;border:0;color:#5b6784;font-size:.74rem;text-decoration:underline;cursor:pointer;padding:.2rem}
#gabari-restore{position:fixed;right:0;bottom:1rem;z-index:9990;border:0;border-radius:.6rem 0 0 .6rem;background:${cfg.accent};color:#fff;padding:.5rem .6rem;font-size:.75rem;font-weight:700;cursor:pointer;box-shadow:0 6px 18px rgba(0,0,0,.3)}
#gabari-restore[hidden]{display:none}
@media (prefers-reduced-motion:no-preference){#gabari-fab.gabari-wave{animation:gabari-bounce 1.6s ease 2}}
@keyframes gabari-bounce{0%,100%{transform:translateY(0)}40%{transform:translateY(-8px)}}
@media print{#gabari-root,#gabari-restore{display:none}}`;

    function greeting() {
        const h = new Date().getHours();
        const part = h < 12 ? 'Bom dia' : h < 18 ? 'Boa tarde' : 'Boa noite';
        return `${part}! Eu sou o Gabari, seu parceiro de estudos${cfg.concurso ? ' rumo ao ' + cfg.concurso : ' rumo à aprovação'}. Como posso ajudar?`;
    }

    const pickTip = () => cfg.tips[Math.floor(Math.random() * cfg.tips.length)];

    const A = {
        missions: { label: 'Ver minhas missões', tab: 'missions', icon: 'fa-bullseye' },
        simulations: { label: 'Fazer um simulado', tab: 'simulations', icon: 'fa-clipboard-check' },
        errors: { label: 'Abrir caderno de erros', tab: 'errors', icon: 'fa-book-bookmark' },
        writing: { label: 'Treinar redação', tab: 'writing', icon: 'fa-pen-nib' },
        supportdesk: { label: 'Falar com o atendimento', tab: 'supportdesk', icon: 'fa-headset' },
        content: { label: 'Ver o conteúdo programático', tab: 'content', icon: 'fa-list-check' },
        home: { label: 'Voltar ao painel', tab: 'home', icon: 'fa-house' }
    };

    const GUIDES = {
        select: {
            title: 'Escolha do concurso',
            steps: [
                'Cada concurso tem plataforma, conteúdo e acesso próprios.',
                'Clique no cartão do concurso para o qual você vai estudar.',
                'Nos concursos disponíveis, você será levado à tela de login; os que estão em construção mostram seu andamento.',
                'Quer outro concurso depois? É só voltar a esta tela.'
            ]
        },
        pcpeSelection: {
            title: 'Escolha do cargo',
            steps: [
                'Escolha entre Agente e Escrivão e continue para a conta PCPE.',
                'As disciplinas comuns aparecem nos dois cargos; cada um tem uma disciplina específica.',
                'Entre na conta PCPE, escolha um plano e pague com Pix ou cartão pelo Mercado Pago; o acesso é liberado após a confirmação do pagamento.',
                'Consulte o edital e as retificações na página oficial da banca.'
            ]
        },
        pcpeStudy: {
            title: 'Área de estudos',
            steps: [
                'Use o menu para navegar pelas áreas da preparação.',
                'Marque suas missões e registre suas anotações ou cartões neste navegador.',
                'Os dados são separados por conta e cargo neste navegador, mas não são sincronizados.',
                'As áreas indicadas como em preparação ainda serão disponibilizadas.'
            ]
        },
        login: {
            title: 'Entrar na plataforma',
            steps: [
                'Já tem conta? Use "Entrar", com e-mail e senha.',
                'Primeiro acesso? Toque em "Criar conta" e preencha os dados.',
                'Esqueceu a senha? Use "Esqueci minha senha" e confira seu e-mail.',
                'Depois de entrar, o acesso é liberado após a confirmação do pagamento.'
            ]
        },
        gate: {
            title: 'Liberação do acesso',
            steps: [
                'Esta tela aparece enquanto o seu acesso não está liberado.',
                'Faça o pagamento pelas instruções da tela e envie a solicitação.',
                'Após a confirmação, a plataforma abre sozinha ao recarregar a página.',
                'Dúvidas? Use o botão de WhatsApp na própria tela.'
            ]
        },
        admin: {
            title: 'Área administrativa',
            steps: [
                'Aqui você vê as solicitações de acesso de cada concurso.',
                'Confira o pagamento antes de aprovar uma solicitação.',
                'Use o filtro para alternar entre os concursos.',
                'Tickets e feedbacks dos alunos aparecem na caixa de entrada.'
            ]
        },
        home: {
            title: 'Painel inicial',
            steps: [
                'Aqui você vê seu progresso geral e a contagem regressiva.',
                'Os atalhos por matéria abrem direto a missão daquela disciplina.',
                'O menu lateral (ou a barra inferior no celular) leva às demais seções.',
                'Comece pela aba "Missões": ela organiza o seu dia.'
            ],
            actions: ['missions', 'content', 'simulations', 'errors']
        },
        content: {
            title: 'Conteúdo programático',
            steps: [
                'É a lista de todos os assuntos do edital, por disciplina.',
                'Use-a como mapa: marque o que já estudou.',
                'Cada assunto é trabalhado depois nas missões.'
            ],
            actions: ['missions', 'home']
        },
        missions: {
            title: 'Missões',
            steps: [
                'Cada dia traz tarefas: aula, PDF, questões e revisão.',
                'Conclua as tarefas na ordem e marque como feitas.',
                'Perdeu um dia? Retome pela próxima tarefa pendente, sem acumular culpa.',
                'Os atalhos por matéria do painel levam direto à missão da disciplina.'
            ],
            actions: ['errors', 'simulations']
        },
        videos: {
            title: 'Aulas em vídeo',
            steps: [
                'Escolha a aula na lista e assista com atenção.',
                'Use o campo de anotações da aula para registrar o que importa.',
                'Ao terminar, faça as questões do assunto para fixar.'
            ],
            actions: ['missions', 'errors']
        },
        pdfs: {
            title: 'PDFs de estudo',
            steps: [
                'Abra o PDF do assunto e leia com o marca-texto da plataforma.',
                'Seus destaques ficam salvos para a revisão.',
                'Dúvida no texto? Anote e leve ao atendimento.'
            ],
            actions: ['errors', 'supportdesk']
        },
        flashcards: {
            title: 'Cards de revisão',
            steps: [
                'Leia a pergunta e tente responder antes de virar o card.',
                'Marque se acertou ou errou para repetir os difíceis.',
                'Faça poucos cards por dia, mas todos os dias.'
            ],
            actions: ['simulations', 'missions']
        },
        mindmaps: {
            title: 'Mapas mentais',
            steps: [
                'Use os mapas para enxergar o assunto inteiro de uma vez.',
                'Ótimos para revisar na véspera do simulado.',
                'Refaça o mapa de memória e compare com o original.'
            ],
            actions: ['flashcards', 'simulations']
        },
        simulations: {
            title: 'Simulados',
            steps: [
                'Escolha o filtro de disciplinas e gere o simulado.',
                'Responda com cronômetro, como na prova.',
                'Ao finalizar, veja o gabarito e os comentários.',
                'Questões erradas vão para o caderno de erros.'
            ],
            actions: ['errors', 'missions']
        },
        errors: {
            title: 'Caderno de erros',
            steps: [
                'Aqui ficam as questões que você errou.',
                'Escreva por que errou: falta de base, distração ou pegadinha.',
                'Releia o caderno toda semana. É onde a nota sobe mais rápido.'
            ],
            actions: ['simulations', 'missions']
        },
        writing: {
            title: 'Redação',
            steps: [
                'Escolha um tema e escreva o texto dissertativo.',
                'Organize em introdução, desenvolvimento e conclusão.',
                'Seu rascunho é salvo automaticamente.',
                'Releia procurando erros de pontuação, concordância e crase.'
            ],
            actions: ['errors', 'missions']
        },
        supportdesk: {
            title: 'Atendimento',
            steps: [
                'Abra um chamado para dúvidas, problemas de acesso ou sugestões.',
                'Escolha o assunto e descreva com detalhes.',
                'A seção de perguntas frequentes pode já ter a resposta.',
                'Para urgências, use o botão de WhatsApp.'
            ],
            actions: ['home']
        },
        feedback: {
            title: 'Feedback',
            steps: [
                'Avalie a plataforma e diga o que pode melhorar.',
                'Escolha a categoria e conte sua experiência.',
                'Leva menos de um minuto e ajuda muito.'
            ],
            actions: ['home']
        },
        support: {
            title: 'Apoio ao estudo',
            steps: [
                'Aqui há jogos e ferramentas para fixar o conteúdo de forma leve.',
                'Escolha o tema e jogue caça-palavras ou cruzadinha.',
                'Use quando estiver cansado: estudar também é descansar bem.'
            ],
            actions: ['missions', 'simulations']
        }
    };

    function currentContext() {
        const path = location.pathname.toLowerCase();
        if (/admin/.test(path)) return 'admin';
        if (/\/pcpe\/estudos\.html$/.test(path)) return 'pcpeStudy';
        if (/\/pcpe\/(?:index\.html)?$/.test(path)) return 'pcpeSelection';
        if (/concursos/.test(path)) return 'select';
        if (/login/.test(path)) return 'login';
        const state = document.body.getAttribute('data-session-state');
        if (state && state !== 'ready') return 'gate';
        return document.body.getAttribute('data-active-view') || 'home';
    }

    function build() {
        if (!document.querySelector('link[href*="font-awesome"], link[href*="fontawesome"]')) {
            const fa = document.createElement('link');
            fa.rel = 'stylesheet';
            fa.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css';
            document.head.appendChild(fa);
        }
        const style = document.createElement('style');
        style.textContent = css;
        document.head.appendChild(style);

        const root = document.createElement('div');
        root.id = 'gabari-root';
        root.innerHTML = `
            <div id="gabari-bubble" role="status" hidden></div>
            <section id="gabari-panel" role="dialog" aria-label="Gabari, mascote de apoio" hidden>
                <div class="gabari-head">${avatar}<div><strong>Gabari</strong><small>Apoio ao candidato${cfg.concurso ? ' · ' + cfg.concurso : ''}</small></div>
                    <button type="button" class="gabari-close" aria-label="Fechar conversa com o Gabari"><i class="fa-solid fa-xmark" aria-hidden="true"></i></button></div>
                <div class="gabari-body">
                    <p class="gabari-say" id="gabari-say"></p>
                    <div class="gabari-guide" id="gabari-guide"></div>
                    <div class="gabari-actions" id="gabari-actions"></div>
                </div>
                <div class="gabari-foot"><button type="button" id="gabari-tip">Outra dica</button><button type="button" id="gabari-hide">Esconder o Gabari</button></div>
            </section>
            <button type="button" id="gabari-fab" aria-label="Abrir o Gabari, mascote de apoio" aria-expanded="false" aria-controls="gabari-panel">${avatar}</button>`;
        const restore = document.createElement('button');
        restore.id = 'gabari-restore';
        restore.type = 'button';
        restore.hidden = true;
        restore.textContent = 'Gabari';
        restore.setAttribute('aria-label', 'Mostrar o Gabari novamente');
        document.body.append(root, restore);

        const $ = id => root.querySelector('#' + id);
        const fab = $('gabari-fab');
        const panel = $('gabari-panel');
        const bubble = $('gabari-bubble');
        const say = $('gabari-say');
        const guideBox = $('gabari-guide');
        const actions = $('gabari-actions');

        function renderGuide() {
            const guide = GUIDES[currentContext()] || GUIDES.home;
            guideBox.innerHTML = '';
            const title = document.createElement('strong');
            title.textContent = 'Como usar: ' + guide.title;
            const list = document.createElement('ol');
            guide.steps.forEach(step => {
                const li = document.createElement('li');
                li.textContent = step;
                list.appendChild(li);
            });
            guideBox.append(title, list);

            actions.innerHTML = '';
            (guide.actions || []).map(key => A[key]).filter(Boolean).forEach(action => {
                const btn = document.createElement('button');
                btn.type = 'button';
                btn.innerHTML = `<i class="fa-solid ${action.icon}" aria-hidden="true"></i><span></span>`;
                btn.lastChild.textContent = action.label;
                btn.addEventListener('click', () => {
                    const tab = document.getElementById('desktopTab-' + action.tab) || document.getElementById('mobileTab-' + action.tab)
                        || document.querySelector(`[data-dashboard-target="${action.tab}"]`);
                    if (tab) tab.click();
                    setOpen(false);
                });
                actions.appendChild(btn);
            });
        }

        function setOpen(open) {
            panel.hidden = !open;
            fab.setAttribute('aria-expanded', String(open));
            if (open) {
                bubble.hidden = true;
                say.textContent = greeting() + ' Dica: ' + pickTip();
                renderGuide();
                panel.querySelector('button').focus();
            } else {
                fab.focus({ preventScroll: true });
            }
        }

        new MutationObserver(() => { if (!panel.hidden) renderGuide(); })
            .observe(document.body, { attributes: true, attributeFilter: ['data-active-view', 'data-session-state'] });

        fab.addEventListener('click', () => setOpen(panel.hidden));
        panel.querySelector('.gabari-close').addEventListener('click', () => setOpen(false));
        $('gabari-tip').addEventListener('click', () => { say.textContent = 'Dica: ' + pickTip(); });
        $('gabari-hide').addEventListener('click', () => {
            store.set(cfg.storageKey, '1');
            root.hidden = true;
            restore.hidden = false;
        });
        restore.addEventListener('click', () => {
            store.del(cfg.storageKey);
            root.hidden = false;
            restore.hidden = true;
        });
        document.addEventListener('keydown', event => { if (event.key === 'Escape' && !panel.hidden) setOpen(false); });

        if (store.get(cfg.storageKey) === '1') {
            root.hidden = true;
            restore.hidden = false;
            return;
        }

        // Saudação discreta, uma vez por sessão, só depois que a interface estiver visível
        if (!sessionStorage.getItem('gabari_greeted')) {
            const showGreeting = () => {
                if (document.body.getAttribute('data-session-state') && document.body.getAttribute('data-session-state') !== 'ready') {
                    window.setTimeout(showGreeting, 1500);
                    return;
                }
                try { sessionStorage.setItem('gabari_greeted', '1'); } catch (e) { /* ignora */ }
                bubble.textContent = greeting();
                bubble.hidden = false;
                fab.classList.add('gabari-wave');
                window.setTimeout(() => { bubble.hidden = true; }, 9000);
            };
            window.setTimeout(showGreeting, 2500);
        }
    }

    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', build);
    else build();
})();
