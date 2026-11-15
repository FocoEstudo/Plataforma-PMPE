(function (root, factory) {
    const api = factory();
    if (typeof module === 'object' && module.exports) module.exports = api;
    if (root) root.PCPEAgentPlan = api;
    if (typeof document !== 'undefined' && root) {
        const start = () => api.mount(document.getElementById('agentPlanRoot'));
        if (root.PCPE_SYNC && document.body && document.body.dataset.sessionState !== 'ready') root.addEventListener('pcpe:session-ready', start, { once: true });
        else if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start, { once: true }); else start();
    }
})(typeof window !== 'undefined' ? window : null, function () {
    'use strict';
    const EXAM_DATE = '2027-03-07', STORAGE_KEY = 'pcpeAgentePlanV1';
    const BLOCKS = { P1: { label: 'P1 · Noções de Direito', questions: 20 }, P2: { label: 'P2 · Conhecimentos Específicos', questions: 40 } };
    const rows = [
        ['legislacao','Legislação Estadual','P1','A',8,'Programa curto e finito: lei seca e dispositivos delimitados tendem a render bem por hora.','Constituição de Pernambuco: arts. 101 a 105-B|Lei Estadual nº 6.425/1972|Lei Estadual nº 6.123/1968|Lei Complementar Estadual nº 137/2008|Lei Complementar Estadual nº 317/2015'],
        ['constitucional','Noções de Direito Constitucional','P1','C',5,'Área jurídica ampla; consolide fundamentos e direitos, sem presumir quantidade própria de questões.','Princípios fundamentais da Constituição Federal|Poder constituinte e aplicabilidade das normas constitucionais|Direitos e garantias fundamentais|Direitos políticos, nacionalidade e partidos políticos|Organização político-administrativa do Estado|Administração pública na Constituição|Organização dos Poderes e funções essenciais à Justiça|Segurança pública e órgãos constitucionais'],
        ['administrativo','Noções de Direito Administrativo','P1','C',5,'Conteúdo conceitual extenso; priorize compreensão, distinções e revisão por questões.','Princípios e organização da Administração Pública|Administração direta e indireta|Poderes e deveres administrativos|Atos administrativos|Agentes públicos|Serviços públicos e responsabilidade civil do Estado|Processo administrativo e controle da Administração|Licitações, contratos e improbidade administrativa'],
        ['penal','Noções de Direito Penal','P1','B',8,'Reúne teoria geral e diversas leis especiais; intercale lei seca, esquemas e questões.','Aplicação da lei penal e teoria do crime|Imputabilidade, concurso de pessoas e de crimes|Penas e extinção da punibilidade|Crimes contra a pessoa|Crimes contra o patrimônio|Crimes contra a dignidade sexual|Crimes contra a fé pública e a Administração Pública|Lei nº 8.072/1990 — crimes hediondos|Lei nº 7.716/1989 — crimes resultantes de preconceito|Lei nº 13.869/2019 — abuso de autoridade|Lei nº 9.455/1997 — tortura|Lei nº 8.069/1990 — Estatuto da Criança e do Adolescente|Lei nº 12.850/2013 — organização criminosa|Lei nº 9.503/1997 — Código de Trânsito Brasileiro|Lei nº 11.340/2006 — violência doméstica e familiar|Lei nº 14.344/2022 — proteção de crianças e adolescentes|Lei nº 9.605/1998 — crimes ambientais|Lei nº 10.826/2003 — Estatuto do Desarmamento|Lei nº 11.343/2006 — Lei de Drogas'],
        ['processual','Noções de Direito Processual Penal','P1','B',7,'Procedimentos e prazos exigem prática recorrente; estude o fluxo e resolva questões após cada tema.','Princípios e aplicação da lei processual penal|Inquérito policial e investigação criminal|Ação penal e competência|Provas e cadeia de custódia|Prisões, liberdade provisória e medidas cautelares|Procedimentos e nulidades|Lei nº 7.960/1989 — prisão temporária|Lei nº 9.099/1995 — juizados especiais criminais|Lei nº 12.830/2013 — investigação conduzida pelo delegado'],
        ['portugues','Língua Portuguesa','P2','A',17,'Central no bloco de 40 questões e melhora a leitura do caderno; exige treino frequente de texto e gramática aplicada.','Compreensão e interpretação de textos|Tipologia e gêneros textuais|Ortografia oficial e acentuação|Coesão, coerência e relações entre ideias|Classes de palavras e emprego de tempos e modos verbais|Sintaxe, termos da oração e período composto|Pontuação, concordância e regência|Crase, colocação pronominal e reescrita de frases'],
        ['informatica','Informática','P2','B',11,'Concentra-se integralmente no bloco maior; conceitos e atalhos permitem revisões objetivas, mas há detalhes que pedem prática.','Hardware, software e organização de computadores|Sistemas operacionais e gerenciamento de arquivos|Aplicativos de escritório e formatos de arquivo|Planilhas eletrônicas e fórmulas|Internet, intranet, navegadores e correio eletrônico|Redes, protocolos e serviços de comunicação|Computação em nuvem e colaboração|Segurança da informação, ameaças e medidas de proteção'],
        ['logica','Raciocínio Lógico','P2','A',13,'O desempenho cresce com resolução deliberada; priorize exercícios e registre os tipos de erro.','Proposições, conectivos e tabelas-verdade|Equivalências, negações e leis de De Morgan|Argumentação, validade e inferências|Predicados e quantificadores|Conjuntos, relações e operações|Razões, proporções, regra de três e porcentagem|Sequências e padrões|Problemas de contagem e análise combinatória|Problemas lógico-matemáticos aplicados'],
        ['contabilidade','Contabilidade Geral','P2','A',14,'Matéria nova para muitos e cumulativa: começar cedo ajuda a sedimentar lançamentos e demonstrações.','Conceitos, objeto, finalidade e usuários da contabilidade|Patrimônio, bens, direitos, obrigações e patrimônio líquido|Contas, natureza, débito, crédito e plano de contas|Escrituração e lançamentos contábeis|Atos e fatos administrativos|Regimes de caixa e competência|Apuração do resultado, receitas e despesas|Balancete de verificação e balanço patrimonial|Demonstrações contábeis e reconhecimento'],
        ['estatistica','Estatística','P2','A',12,'Também está no bloco de 40; prática progressiva em fórmulas e interpretação traz retorno mensurável.','Tabelas, gráficos e distribuição de frequências|Média, mediana, moda e quantis|Variância, desvio-padrão e medidas de dispersão|Probabilidade e eventos|Variáveis aleatórias e distribuições|Amostragem e distribuições amostrais|Estimação e testes de hipóteses|Correlação e regressão']
    ];
    const SUBJECTS = rows.map(([id,name,block,priority,percent,reason,topics]) => ({ id,name,block,priority,percent,reason,topics:topics.split('|') }));
    const PHASES = [
        { id:'base', name:'Base', weight:.28, focus:'Feche o primeiro contato com todos os eixos. Alterne teoria, lei seca e questões diagnósticas.' },
        { id:'aprofundamento', name:'Aprofundamento', weight:.24, focus:'Consolide pontos difíceis, complete lacunas e aumente a revisão ativa.' },
        { id:'questoes', name:'Questões', weight:.22, focus:'Faça blocos cronometrados, analise alternativas e classifique os erros por causa.' },
        { id:'revisao', name:'Revisão e simulados', weight:.14, focus:'Revise o caderno de erros e faça um simulado completo por semana.' },
        { id:'reta-final', name:'Reta final', weight:.12, focus:'Reduza material novo; priorize revisão, simulados, sono e logística de prova.' }
    ];    const utcDate = value => {
        if (value instanceof Date) return Date.UTC(value.getFullYear(), value.getMonth(), value.getDate());
        const m = String(value).match(/^(\d{4})-(\d{2})-(\d{2})/);
        return m ? Date.UTC(+m[1], +m[2] - 1, +m[3]) : NaN;
    };
    const isoDate = ms => new Date(ms).toISOString().slice(0, 10);
    const round1 = n => Math.round(n * 10) / 10;
    function apportion(total, items, weightOf) {
        if (!items.length || total <= 0) return items.map(() => 0);
        const weights = items.map(weightOf), sum = weights.reduce((a,b) => a+b, 0) || items.length;
        const raw = weights.map(w => total * (w || (sum === items.length ? 1 : 0)) / sum);
        const out = raw.map(Math.floor);
        let left = total - out.reduce((a,b) => a+b, 0);
        const order = raw.map((v,i) => ({ i, f:v-Math.floor(v) })).sort((a,b) => b.f-a.f || a.i-b.i);
        for (let i=0; i<left; i++) out[order[i % order.length].i]++;
        return out;
    }
    function phaseWeekCounts(totalWeeks) {
        if (!Number.isInteger(totalWeeks) || totalWeeks <= 0) return PHASES.map(() => 0);
        const raw = PHASES.map(p => totalWeeks*p.weight), counts = raw.map(Math.floor);
        const order = raw.map((v,i) => ({ i,f:v-Math.floor(v) })).sort((a,b) => b.f-a.f || a.i-b.i);
        for (let i=0, left=totalWeeks-counts.reduce((a,b) => a+b,0); i<left; i++) counts[order[i].i]++;
        if (totalWeeks >= PHASES.length) for (let i=0; i<counts.length; i++) if (!counts[i]) {
            const donor = counts.map((n,j) => ({ n,j })).filter(x => x.n>1).sort((a,b) => b.n-a.n || a.j-b.j)[0];
            if (donor) { counts[donor.j]--; counts[i]++; }
        }
        return counts;
    }
    function buildSchedule(today, examDate, hoursPerDay, daysPerWeek) {
        const start=utcDate(today), end=utcDate(examDate), daysRemaining=Math.max(0,Math.ceil((end-start)/86400000));
        const totalWeeks=Math.ceil(daysRemaining/7), counts=phaseWeekCounts(totalWeeks), weeklyHours=Math.max(0,+hoursPerDay||0)*Math.max(0,+daysPerWeek||0);
        const phases=[]; let offset=0;
        const tenths=apportion(Math.round(weeklyHours*10),SUBJECTS,s => s.percent);
        PHASES.forEach((phase,i) => {
            const count=counts[i]; if (!count) return;
            const firstWeek=offset+1,lastWeek=offset+count;
            phases.push({ ...phase, firstWeek,lastWeek,startDate:isoDate(start+offset*7*86400000),
                endDate:isoDate(Math.min(end,start+(offset+count)*7*86400000)),
                weeklyTargets:SUBJECTS.map((s,j) => ({ id:s.id,name:s.name,percent:s.percent,hours:tenths[j]/10 })) });
            offset+=count;
        });
        const weeks=Array.from({ length:totalWeeks },(_,i) => {
            const phase=phases.find(p => i+1>=p.firstWeek && i+1<=p.lastWeek);
            return { number:i+1,phase:phase && phase.id,startDate:isoDate(start+i*7*86400000),
                endDate:isoDate(Math.min(end,start+(i+1)*7*86400000)),buffer:(i+1)%4===0 && PHASES.findIndex(p => p.id===(phase&&phase.id))<4 };
        });
        return { examDate,daysRemaining,totalWeeks,weeklyHours:round1(weeklyHours),phases,weeks };
    }
    function pointPlan(targetP1,targetP2) {
        const p1=Math.max(0,Math.min(20,Math.round(+targetP1||0))),p2=Math.max(0,Math.min(40,Math.round(+targetP2||0)));
        const block = (id,target) => {
            const list=SUBJECTS.filter(s => s.block===id), qs=apportion(BLOCKS[id].questions,list,s => s.percent), hits=apportion(target,list,s => s.percent);
            return list.map((subject,i) => ({ subject,estimatedQuestions:qs[i],targetHits:hits[i] }));
        };
        return { targetP1:p1,targetP2:p2,total:p1+p2,minimum:30,belowMinimum:p1+p2<30,p1:block('P1',p1),p2:block('P2',p2) };
    }
    const fmtDate = value => { const [y,m,d]=value.split('-').map(Number); return new Intl.DateTimeFormat('pt-BR',{day:'2-digit',month:'2-digit'}).format(new Date(y,m-1,d)); };
    const esc = value => String(value==null?'':value).replace(/[&<>"']/g,ch=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch]));
    const todayISO = () => isoDate(utcDate(new Date()));
    function thisWeekKey(value) {
        const [y,m,d]=value.split('-').map(Number), date=new Date(Date.UTC(y,m-1,d));
        date.setUTCDate(date.getUTCDate()-(date.getUTCDay()+6)%7); return date.toISOString().slice(0,10);
    }
    function safeRead() { try { const x=JSON.parse(localStorage.getItem(STORAGE_KEY)||'{}'); return x&&typeof x==='object'&&!Array.isArray(x)?x:{}; } catch (_) { return {}; } }
    function safeWrite(value) { try { localStorage.setItem(STORAGE_KEY,JSON.stringify(value)); return true; } catch (_) { return false; } }
    function mount(root) {
        if (!root || root.dataset.mounted==='true') return;
        root.dataset.mounted='true';
        let state=Object.assign({hoursPerDay:4,daysPerWeek:6,targetP1:14,targetP2:27,checklist:{},routines:{},taf:{}},safeRead());
        for (const key of ['checklist','routines','taf']) if (!state[key]||typeof state[key]!=='object') state[key]={};
        const today=todayISO(),weekKey=thisWeekKey(today);
        const save=()=>{ const ok=safeWrite(state), status=root.querySelector('[data-plan-save-status]'); if(status) status.textContent=ok?'Salvo neste dispositivo; a sincronização pela conta PCPE ocorre quando disponível.':'Falha ao salvar neste navegador. Confira o espaço disponível.'; };
        const checked=(bucket,key)=>Boolean(state[bucket][weekKey]&&state[bucket][weekKey][key]);
        const checklistHtml=SUBJECTS.map(s=>{
            const count=s.topics.filter((_,i)=>Boolean(state.checklist[`${s.id}:${i}`])).length;
            return `<details class="agent-check-group"><summary><span>${esc(s.name)} <small>${count}/${s.topics.length}</small></span><span class="agent-tag agent-tag-${s.priority.toLowerCase()}">Prioridade ${s.priority} · estimativa</span></summary><div class="agent-check-list">${s.topics.map((topic,i)=>{const id=`${s.id}:${i}`;return `<label><input type="checkbox" data-checklist="${id}" ${state.checklist[id]?'checked':''}><span>${esc(topic)}</span></label>`;}).join('')}</div></details>`;
        }).join('');
        const mapRows=SUBJECTS.map(s=>`<tr><th scope="row">${esc(s.name)}</th><td>${BLOCKS[s.block].label}</td><td><span class="agent-tag agent-tag-${s.priority.toLowerCase()}">${s.priority}</span></td><td>${s.topics.length}</td><td>${s.percent}%</td><td>${esc(s.reason)}</td></tr>`).join('');        root.innerHTML=`
            <div class="agent-plan-banner"><div><p class="agent-eyebrow">EDITAL Nº 1 · PCPE · 02/10/2026</p><h2>Plano Agente PCPE</h2><p>Estratégia baseada no que o edital publica — estimativas identificadas como estimativas.</p></div><a href="https://legis.policiacivil.pe.gov.br/b/api/files/03ab5351b8a85cf2c87856ab7ccf1787.pdf" target="_blank" rel="noopener noreferrer">Abrir edital oficial ↗</a></div>
            <div class="agent-plan-notice"><strong>Peso oficial:</strong> P1 — Noções de Direito, 20/60 (33%); P2 — Conhecimentos Específicos, 40/60 (67%). <strong>O edital não informa questões por disciplina.</strong> Prioridades, percentuais e rateios abaixo são estimativas de planejamento, não pesos oficiais.</div>
            <section class="agent-plan-card" aria-labelledby="agentPlanInputTitle"><div class="agent-section-heading"><div><p class="agent-eyebrow">PLANO REVERSO AO VIVO</p><h3 id="agentPlanInputTitle">Disponibilidade semanal</h3></div><span class="agent-pill">Prova: 07/03/2027 · tarde</span></div>
                <div class="agent-input-grid"><label>Horas disponíveis por dia<input type="number" min="1" max="16" step="0.5" data-plan-hours value="${esc(state.hoursPerDay)}"></label><label>Dias de estudo por semana<input type="number" min="1" max="7" step="1" data-plan-days value="${esc(state.daysPerWeek)}"></label></div><p id="agentPlanCountdown" class="agent-countdown" aria-live="polite"></p><div id="agentPlanPhases" class="agent-phases"></div>
            </section>
            <section class="agent-plan-card" aria-labelledby="agentRoutineHeading"><div class="agent-section-heading"><div><p class="agent-eyebrow">ROTINA DA SEMANA · ${fmtDate(today)}</p><h3 id="agentRoutineHeading">Revisão, simulado, redação e TAF</h3></div><span class="agent-pill">Progresso por semana</span></div>
                <div class="agent-routine-grid"><div class="agent-routine-box"><h4>Estudo e avaliação</h4>
                    <label><input type="checkbox" data-routine="review" ${checked('routines','review')?'checked':''}><span><strong>Revisão espaçada 1×/semana</strong><small>Retome os tópicos em D+1, D+7 e D+30, priorizando a recordação ativa.</small></span></label>
                    <label><input type="checkbox" data-routine="simulado" ${checked('routines','simulado')?'checked':''}><span><strong>1 simulado completo/semana</strong><small>Faça 60 questões no padrão de múltipla escolha e analise o resultado e os erros.</small></span></label>
                    <label><input type="checkbox" data-routine="errors" ${checked('routines','errors')?'checked':''}><span><strong>Caderno de erros</strong><small>Registre tema, motivo do erro e regra correta; reteste os erros na revisão seguinte.</small></span></label>
                    <label><input type="checkbox" data-routine="essay1" ${checked('routines','essay1')?'checked':''}><span><strong>Redação 1 · até 30 linhas</strong><small>Treine tema de segurança pública, planejamento, tese e revisão.</small></span></label>
                    <label><input type="checkbox" data-routine="essay2" ${checked('routines','essay2')?'checked':''}><span><strong>Redação 2 · até 30 linhas</strong><small>Faça outro texto e confira clareza, coesão, estrutura e limite de linhas.</small></span></label>
                </div><div class="agent-routine-box agent-taf-box"><h4>Lembrete de preparação para o TAF</h4><p>Barra, impulsão horizontal, natação 50 m e corrida de 12 min. Planeje 2–3 sessões semanais, progressivas e adequadas à sua condição; considere avaliação e orientação profissional.</p>
                    ${['Sessão 1','Sessão 2','Sessão 3 / recuperação'].map((name,i)=>`<label><input type="checkbox" data-taf="session${i+1}" ${checked('taf',`session${i+1}`)?'checked':''}><span>${name}</span></label>`).join('')}<small class="agent-muted">O registro é um lembrete, não uma prescrição de treino.</small>
                </div></div><p class="agent-rest-note"><strong>Descanso e folga de segurança:</strong> semanas buffer (a cada quatro semanas, quando houver tempo) reduzem o avanço de matéria nova para recuperar atrasos e descansar. Não compense sacrificando sono.</p><p class="agent-save-status" data-plan-save-status role="status" aria-live="polite">Salvo neste dispositivo; a sincronização pela conta PCPE ocorre quando disponível.</p>
            </section>
            <section class="agent-plan-card" aria-labelledby="agentPriorityHeading"><div class="agent-section-heading"><div><p class="agent-eyebrow">MAPA DO EDITAL</p><h3 id="agentPriorityHeading">Disciplinas, prioridade e tempo recomendado</h3></div></div>
                <p class="agent-explain">O checklist organiza ${SUBJECTS.reduce((n,s)=>n+s.topics.length,0)} eixos de estudo. Os percentuais recomendados somam 100% do tempo de estudo; níveis A/B/C são estimativas de prioridade, não peso oficial.</p>
                <div class="agent-table-wrap"><table class="agent-map-table"><thead><tr><th>Disciplina</th><th>Bloco (peso oficial)</th><th>Prioridade*</th><th>Itens</th><th>Tempo*</th><th>Justificativa</th></tr></thead><tbody>${mapRows}</tbody><tfoot><tr><th colspan="4">Total recomendado</th><td>100%</td><td>Distribuição de estudo sugerida; não equivale à divisão oficial de questões por matéria.</td></tr></tfoot></table></div>
                <p class="agent-source-note">* Estimativa de prioridade, não peso oficial. P1 = 33% da objetiva e P2 = 67%; a quantidade de questões por disciplina não foi publicada. Use os itens como checklist operacional e confira a literalidade do programa no edital oficial.</p>
            </section>
            <section class="agent-plan-card" aria-labelledby="agentPointsHeading"><div class="agent-section-heading"><div><p class="agent-eyebrow">CALCULADORA DE META</p><h3 id="agentPointsHeading">Meta de pontos na objetiva</h3></div><span class="agent-pill">Sem penalidade por erro</span></div>
                <div class="agent-input-grid"><label>Meta P1 (de 20)<input type="number" min="0" max="20" step="1" data-target-p1 value="${esc(state.targetP1)}"></label><label>Meta P2 (de 40)<input type="number" min="0" max="40" step="1" data-target-p2 value="${esc(state.targetP2)}"></label></div><div id="agentPointsSummary" aria-live="polite"></div>
                <p class="agent-explain">A nota mínima objetiva é 30/60. O rateio de questões e acertos por matéria é só uma simulação proporcional ao tempo recomendado; a prova real pode ser diferente.</p>
            </section>
            <section class="agent-plan-card" aria-labelledby="agentChecklistHeading"><div class="agent-section-heading"><div><p class="agent-eyebrow">PROGRESSO PESSOAL</p><h3 id="agentChecklistHeading">Checklist dos itens do edital</h3></div><span id="agentChecklistProgress" class="agent-pill" aria-live="polite"></span></div>
                <p class="agent-explain">Marque cada eixo concluído. O progresso fica salvo em <code>${STORAGE_KEY}</code> e usa a sincronização por conta já existente no app PCPE.</p><div class="agent-check-groups">${checklistHtml}</div>
            </section>
            <section class="agent-plan-card agent-exam-strategy" aria-labelledby="agentStrategyHeading"><div class="agent-section-heading"><div><p class="agent-eyebrow">DIA DA PROVA</p><h3 id="agentStrategyHeading">Estratégia de prova</h3></div><button type="button" class="agent-button" data-plan-simulado>Ir para a aba Simulados</button></div>
                <ul><li><strong>Não há desconto por erro:</strong> responda todas as 60 questões; não deixe questão em branco.</li><li><strong>Proteja a linha de corte:</strong> mínimo 30/60 na objetiva; a redação vale 30 pontos, exige mínimo 15 e só será corrigida para os candidatos classificados na objetiva dentro dos limites previstos no edital.</li><li><strong>Reserve o tempo:</strong> em 4 horas, planeje cerca de 2h45 para as 60 questões (média de 2min45 por questão), aproximadamente 1h para a redação de até 30 linhas e 15 min para revisão. Ajuste após simulados cronometrados.</li><li><strong>Ordem:</strong> comece pelo bloco em que rende melhor, sem ignorar o outro; marque itens demorados, complete as respostas e volte às dúvidas antes da redação.</li><li><strong>Leitura estilo Cebraspe:</strong> leia comando e alternativas até o fim; atenção a exceções, negações, quantificadores (“sempre/nunca”) e palavras que alteram o alcance da regra. O formato é múltipla escolha de cinco alternativas, não certo/errado.</li></ul>
                <p class="agent-source-note">A primeira etapa soma objetiva e redação (90 pontos). Depois ainda há TAF, exames, investigação social, avaliação psicológica e curso de formação. Este plano organiza o estudo; não garante aprovação.</p>
            </section>`;        function renderOutputs() {
            const schedule=buildSchedule(todayISO(),EXAM_DATE,state.hoursPerDay,state.daysPerWeek), countdown=root.querySelector('#agentPlanCountdown');
            countdown.textContent=schedule.daysRemaining===0?'A data da prova já chegou ou passou. Confira eventuais retificações e atualize seu planejamento.':`Faltam ${schedule.daysRemaining} dias (aprox. ${schedule.totalWeeks} semanas) até 07/03/2027. Sua disponibilidade: ${schedule.weeklyHours} h/semana.`;
            const phaseRoot=root.querySelector('#agentPlanPhases');
            phaseRoot.innerHTML=!schedule.phases.length?'<p class="agent-muted">Não há semanas futuras até a data informada. Confira atualizações oficiais.</p>':schedule.phases.map(p=>{
                const buffers=schedule.weeks.filter(w=>w.number>=p.firstWeek&&w.number<=p.lastWeek&&w.buffer).map(w=>`S${w.number}`).join(', ');
                return `<article class="agent-phase"><div class="agent-phase-top"><span class="agent-phase-number">S${p.firstWeek}–${p.lastWeek}</span><div><h4>${esc(p.name)}</h4><small>${fmtDate(p.startDate)}–${fmtDate(p.endDate)} · ${p.lastWeek-p.firstWeek+1} semanas</small></div></div><p>${esc(p.focus)}</p>${buffers?`<p class="agent-buffer-flag">Semana(s) buffer: ${buffers}. Reduza matéria nova, revise e recupere atrasos.</p>`:''}<div class="agent-table-wrap"><table class="agent-week-table"><thead><tr><th>Meta por disciplina / semana</th><th>Tempo</th></tr></thead><tbody>${p.weeklyTargets.map(t=>`<tr><th scope="row">${esc(t.name)} <small>${t.percent}%*</small></th><td>${t.hours} h</td></tr>`).join('')}<tr class="agent-total-row"><th>Total disponível</th><td>${schedule.weeklyHours} h</td></tr></tbody></table></div></article>`;
            }).join('');
            const plan=pointPlan(state.targetP1,state.targetP2), points=root.querySelector('#agentPointsSummary');
            const blockRows=(label,items)=>`<div class="agent-point-block"><h4>${label}</h4><div class="agent-table-wrap"><table class="agent-week-table"><thead><tr><th>Disciplina</th><th>Questões estimadas*</th><th>Acertos para a meta*</th></tr></thead><tbody>${items.map(x=>`<tr><th scope="row">${esc(x.subject.name)}</th><td>${x.estimatedQuestions}</td><td>${x.targetHits}</td></tr>`).join('')}</tbody></table></div></div>`;
            points.innerHTML=`<p class="agent-points-total">Meta objetiva: <strong>${plan.total}/60</strong> · ${plan.belowMinimum?'<span class="agent-risk">Abaixo da linha mínima de 30/60.</span>':'<span class="agent-safe">Atinge a linha mínima objetiva de 30/60; isso não garante correção da redação.</span>'}</p>${blockRows(`P1 · meta ${plan.targetP1}/20`,plan.p1)}${blockRows(`P2 · meta ${plan.targetP2}/40`,plan.p2)}<p class="agent-source-note">* Rateio indicativo e não oficial. Os números aproximados por disciplina derivam da prioridade de estudo apenas para tornar a meta visual; a distribuição real é desconhecida.</p>`;
            const completed=SUBJECTS.reduce((n,s)=>n+s.topics.filter((_,i)=>Boolean(state.checklist[`${s.id}:${i}`])).length,0), total=SUBJECTS.reduce((n,s)=>n+s.topics.length,0);
            root.querySelector('#agentChecklistProgress').textContent=`${completed}/${total} itens · ${Math.round(completed/total*100)}%`;
        }
        root.addEventListener('input',event=>{
            const input=event.target;
            if(input.matches('[data-plan-hours]')) state.hoursPerDay=Math.max(1,Math.min(16,Number(input.value)||1));
            else if(input.matches('[data-plan-days]')) state.daysPerWeek=Math.max(1,Math.min(7,Math.round(Number(input.value)||1)));
            else if(input.matches('[data-target-p1]')) state.targetP1=Math.max(0,Math.min(20,Math.round(Number(input.value)||0)));
            else if(input.matches('[data-target-p2]')) state.targetP2=Math.max(0,Math.min(40,Math.round(Number(input.value)||0)));
            else return;
            save(); renderOutputs();
        });
        root.addEventListener('change',event=>{
            const input=event.target; if(!input.matches('input[type="checkbox"]')) return;
            if(input.dataset.checklist){
                state.checklist[input.dataset.checklist]=input.checked;
                const [id,index]=input.dataset.checklist.split(':'), subject=SUBJECTS.find(s=>s.id===id), count=input.closest('.agent-check-group').querySelector('summary small');
                count.textContent=`${subject.topics.filter((_,i)=>Boolean(state.checklist[`${id}:${i}`])).length}/${subject.topics.length}`; renderOutputs();
            } else if(input.dataset.routine||input.dataset.taf){
                const bucket=input.dataset.routine?'routines':'taf', key=input.dataset.routine||input.dataset.taf;
                state[bucket][weekKey]=Object.assign({},state[bucket][weekKey],{[key]:input.checked});
            } else return;
            save();
        });
        root.addEventListener('click',event=>{
            if(!event.target.closest('[data-plan-simulado]')) return;
            const tab=document.getElementById('desktopTab-simulations')||document.getElementById('mobileTab-simulations'); if(tab) tab.click();
        });
        renderOutputs();
    }
    return { EXAM_DATE,STORAGE_KEY,BLOCKS,SUBJECTS,PHASES,apportion,phaseWeekCounts,buildSchedule,pointPlan,mount };
});