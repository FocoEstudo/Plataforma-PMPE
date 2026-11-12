const $ = id => document.getElementById(id);
const demo = new URLSearchParams(location.search).has('demo');
const labels = { conteudo:'Conteúdos', missoes:'Missões', videoaulas:'Videoaulas', apostilas:'Apostilas', questoes:'Questões', simulados:'Simulados', redacao:'Redação', revisao:'Revisão', flashcards:'Flashcards', mapas:'Mapas mentais' };
const categories = Object.keys(labels);
const charts = {};
let allDaily = [], allMaterials = [], allUsers = [], currentRows = [], db, fs, isAdmin = false, loadVersion = 0;
const today = () => new Date().toISOString().slice(0,10);
const before = days => { const d = new Date(); d.setUTCHours(0,0,0,0); d.setUTCDate(d.getUTCDate() - days); return d.toISOString().slice(0,10); };
const dateOf = v => { if (!v) return null; if (typeof v.toDate === 'function') return v.toDate(); const d = new Date(v); return Number.isNaN(d.getTime()) ? null : d; };
const formatDate = v => { const d = dateOf(v); return d ? d.toLocaleString('pt-BR', { dateStyle:'short', timeStyle:'short' }) : '—'; };
const percent = x => x && Number(x.total) > 0 ? Math.max(0, Math.min(100, Math.round(Number(x.done) / Number(x.total) * 100))) : null;
const parseProgress = s => { try { const p = JSON.parse(s); return p && typeof p === 'object' ? p : {}; } catch (_) { return {}; } };
const text = (tag, value) => { const e = document.createElement(tag); e.textContent = value; return e; };
const showTab = tab => { $('analyticsPanel').hidden = tab !== 'analytics'; $('managementPanel').hidden = tab !== 'management'; document.querySelectorAll('[data-admin-tab]').forEach(b => { const active = b.dataset.adminTab === tab; b.classList.toggle('active', active); b.setAttribute('aria-pressed', String(active)); }); if (tab === 'analytics') Object.values(charts).forEach(c => c.resize()); };
document.querySelectorAll('[data-admin-tab]').forEach(b => b.addEventListener('click', () => showTab(b.dataset.adminTab)));
function renderChart(id, type, names, values, color) {
    if (!window.Chart) return;
    if (charts[id]) charts[id].destroy();
    charts[id] = new Chart($(id), { type, data: { labels: names, datasets: [{ label: id === 'accessChart' ? 'Sessões' : id === 'materialsChart' || id === 'individualMaterialsChart' ? 'Cliques' : 'Conclusão (%)', data: values, backgroundColor: color, borderColor:'#238256', borderWidth: type === 'line' ? 2 : 0, borderRadius:5, tension:.35, fill:type === 'line' }] }, options: { responsive:true, maintainAspectRatio:false, indexAxis:type === 'bar' ? 'y' : 'x', plugins:{legend:{display:false}}, scales:{ x:{ beginAtZero:true, max: id === 'subjectsChart' || id === 'methodsChart' ? 100 : undefined, grid:{color:'#eef4ef'} }, y:{beginAtZero:true, grid:{display:false}} } } });
}
function demoData() {
    const users = ['ana.silva@exemplo.com', 'carlos.lima@exemplo.com', 'bia.santos@exemplo.com', 'rafael@exemplo.com', 'luiza@exemplo.com', 'pedro@exemplo.com'];
    allUsers = users.map((email,i) => ({ uid:'demo'+i, email, concurso:['pmpe','pppe','pcpe'][i%3], firstSeen:before(i*8), lastSeen:new Date(Date.now()-i*86400000), progress:JSON.stringify({total:{done:15+i*7,total:80},subjects:{'Língua Portuguesa':{done:5+i,total:20},'Direito Constitucional':{done:3+i,total:15}},methods:{'Videoaulas':{done:6+i,total:25},'Apostilas':{done:4+i,total:20},'Questões':{done:3+i,total:20}}}) }));
    allDaily = [];
    allMaterials = allUsers.flatMap((u,i) => [{ uid:u.uid, concurso:u.concurso, day:before(i), label:'Apostila de Língua Portuguesa', category:'apostilas', count:8+i }, { uid:u.uid, concurso:u.concurso, day:before(i), label:'Videoaula de Direito Constitucional', category:'videoaulas', count:5+i }]);
    for (let i=0;i<30;i++) allUsers.forEach((u,j) => { if ((i+j)%3) allDaily.push({uid:u.uid, concurso:u.concurso, day:before(i), sessions:1+(i+j)%2, videoaulas:(i+j)%4, apostilas:(i+j)%3, questoes:(i+j)%3, simulados:(i+j)%2, missoes:1, redacao:j%2}); });
}
function averageBuckets(rows, property) {
    const buckets = {};
    rows.forEach(row => { const p=parseProgress(row.progress); const groups=p[property]; if (!groups || typeof groups !== 'object' || Array.isArray(groups)) return; Object.entries(groups).slice(0,100).forEach(([name, count]) => { const n=percent(count); if (n === null) return; const b=buckets[name] || (buckets[name]={sum:0,count:0}); b.sum+=n; b.count++; }); });
    return Object.entries(buckets).map(([name,b])=>[name,Math.round(b.sum/b.count)]).sort((a,b)=>b[1]-a[1]).slice(0,10);
}
function details(p, prop) { const groups=p[prop]; if (!groups || typeof groups !== 'object' || Array.isArray(groups)) return 'Sem dados'; const values=Object.entries(groups).slice(0,100).map(([name,n])=>[name,percent(n)]).filter(x=>x[1]!==null); return values.length ? values.map(([name,n])=>`${name}: ${n}%`).join(' · ') : 'Sem dados'; }
function render() {
    const period=Number($('analyticsPeriod').value), course=$('analyticsCourse').value, start=before(period-1), end=today();
    const daily=allDaily.filter(d=>d.day>=start && d.day<=end && (course==='all'||d.concurso===course));
    const active=new Set(daily.map(d=>`${d.uid}_${d.concurso}`));
    const users=allUsers.filter(u=>active.has(`${u.uid}_${u.concurso}`) && (course==='all'||u.concurso===course));
    const unique=new Set(daily.map(d=>d.uid));
    const firstByUid=new Map(); users.forEach(u=>{const d=dateOf(u.firstSeen); if (d && (!firstByUid.has(u.uid)||d<firstByUid.get(u.uid))) firstByUid.set(u.uid,d);});
    const fresh=[...unique].filter(uid=>firstByUid.has(uid) && firstByUid.get(uid).toISOString().slice(0,10)>=start).length;
    const sessions=daily.reduce((sum,d)=>sum+(Number(d.sessions)||0),0);
    const pairs=[['Sessões',sessions,'Aberturas no período'],['Alunos únicos',unique.size,'Contas distintas'],['Novos',fresh,'Primeiro acesso registrado'],['Retornantes',unique.size-fresh,'Já registrados anteriormente']];
    const kpis=$('analyticsKpis'); kpis.replaceChildren(); pairs.forEach(([label,value,note])=>{const card=document.createElement('article'); card.className='kpi'; card.append(text('span',label),text('strong',value.toLocaleString('pt-BR')),text('small',note)); kpis.append(card);});
    const days=[]; for(let i=period-1;i>=0;i--) days.push(before(i)); const counts=Object.fromEntries(days.map(d=>[d,0])); daily.forEach(d=>{counts[d.day]+=(Number(d.sessions)||0);});
    renderChart('accessChart','line',days.map(d=>d.slice(8,10)+'/'+d.slice(5,7)),days.map(d=>counts[d]),'rgba(53,155,100,.18)');
    const ranked=categories.map(k=>[labels[k],daily.reduce((sum,d)=>sum+(Number(d[k])||0),0)]).sort((a,b)=>b[1]-a[1]);
    renderChart('materialsChart','bar',ranked.map(x=>x[0]),ranked.map(x=>x[1]),'#36a66a');
    const materialCounts = {}; allMaterials.filter(m=>m.day>=start && m.day<=end && (course==='all'||m.concurso===course)).forEach(m=>{const key=(labels[m.category]||m.category)+': '+m.label; materialCounts[key]=(materialCounts[key]||0)+(Number(m.count)||0);});
    const individual=Object.entries(materialCounts).sort((a,b)=>b[1]-a[1]).slice(0,10);
    renderChart('individualMaterialsChart','bar',individual.map(x=>x[0]),individual.map(x=>x[1]),'#237c52');
    const subjects=averageBuckets(users,'subjects'), methods=averageBuckets(users,'methods');
    renderChart('subjectsChart','bar',subjects.map(x=>x[0]),subjects.map(x=>x[1]),'#69ad85'); renderChart('methodsChart','bar',methods.map(x=>x[0]),methods.map(x=>x[1]),'#d5ad4e');
    currentRows=users.map(u=>{ const p=parseProgress(u.progress), value=percent(p.total); return [u.email||u.uid,u.concurso.toUpperCase(),formatDate(u.lastSeen),value===null?'Sem dados':`${value}%`,details(p,'subjects'),details(p,'methods')]; }).sort((a,b)=>a[0].localeCompare(b[0]));
    renderRows();
    $('analyticsStatus').textContent = demo ? 'Demonstração com dados fictícios — nenhum dado real é exibido.' : daily.length ? `${daily.length} resumos diários carregados. Contagens e datas são baseadas em UTC.` : 'Ainda não há atividade registrada neste período. Os indicadores aparecerão após os primeiros acessos.';
    if (!window.Chart) $('analyticsStatus').textContent += ' Gráficos indisponíveis: verifique a conexão com a CDN.';
}
function renderRows() {
    const filter=$('analyticsSearch').value.toLocaleLowerCase('pt-BR'); const visible=currentRows.filter(r=>r.join(' ').toLocaleLowerCase('pt-BR').includes(filter)); const body=$('analyticsRows'); body.replaceChildren();
    if(!visible.length){const tr=document.createElement('tr'),td=text('td','Nenhum aluno encontrado neste filtro.');td.colSpan=6;tr.append(td);body.append(tr);return;}
    visible.forEach(row=>{const tr=document.createElement('tr');row.forEach(v=>tr.append(text('td',v)));body.append(tr);});
}
async function load() {
    if(demo){demoData();render();return;} if(!isAdmin)return;
    const version = ++loadVersion;
    $('analyticsStatus').textContent='Carregando indicadores…';
    try { const start=before(Number($('analyticsPeriod').value)-1); const [daily,materials,users]=await Promise.all([fs.getDocs(fs.query(fs.collection(db,'analyticsDaily'),fs.where('day','>=',start))),fs.getDocs(fs.query(fs.collection(db,'analyticsMaterials'),fs.where('day','>=',start))),fs.getDocs(fs.collection(db,'analyticsUsers'))]); if(!isAdmin || version !== loadVersion)return; allDaily=daily.docs.map(d=>d.data()); allMaterials=materials.docs.map(d=>d.data()); allUsers=users.docs.map(d=>d.data()); render(); }
    catch(e){ if (!isAdmin || version !== loadVersion) return; $('analyticsStatus').textContent='Não foi possível carregar as estatísticas. Confira a conexão e a publicação das regras do Firestore.'; console.warn('Falha ao carregar estatísticas.'); }
}
$('analyticsPeriod').addEventListener('change',()=>void load()); $('analyticsCourse').addEventListener('change',render); $('analyticsSearch').addEventListener('input',renderRows);
$('analyticsExport').addEventListener('click',()=>{ const filter=$('analyticsSearch').value.toLocaleLowerCase('pt-BR'); const rows=[['Aluno','Concurso','Último acesso','Missões','Matérias','Métodos'],...currentRows.filter(r=>r.join(' ').toLocaleLowerCase('pt-BR').includes(filter))]; const csv=rows.map(row=>row.map(v=>{let s=String(v);if(/^[\s]*[=+@\-\t\r]/.test(s))s="'"+s;return '"'+s.replace(/"/g,'""')+'"';}).join(';')).join('\r\n'); const url=URL.createObjectURL(new Blob(['\ufeff',csv],{type:'text/csv;charset=utf-8'})); const a=document.createElement('a'); a.href=url;a.download='engajamento-alunos.csv';a.click();setTimeout(()=>URL.revokeObjectURL(url),1000); });
if(demo) { $('adminStatus').textContent='Modo de demonstração: informações fictícias, sem acesso ao Firestore.'; $('analyticsBadge').textContent='DEMONSTRAÇÃO'; $('adminTabs').hidden=false; showTab('analytics'); void load(); }
else {
    try { const [config, authModule, firestore] = await Promise.all([import('./firebase-config.js'),import('https://www.gstatic.com/firebasejs/12.4.0/firebase-auth.js'),import('https://www.gstatic.com/firebasejs/12.4.0/firebase-firestore.js')]); db=config.db; fs=firestore;
        authModule.onAuthStateChanged(config.auth, async user=>{ isAdmin=!!user && (user.email||'').toLowerCase()==='ianitalocorp@gmail.com' && user.emailVerified; $('adminTabs').hidden=!isAdmin; if(isAdmin){ try { await user.getIdToken(true); if (config.auth.currentUser !== user || !isAdmin) return; showTab('analytics'); void load(); } catch (_) { $('analyticsStatus').textContent='Não foi possível validar a conta administrativa.'; } } else { loadVersion++; $('analyticsPanel').hidden=true;$('managementPanel').hidden=true;allUsers=[];allDaily=[];allMaterials=[];currentRows=[];$('analyticsRows').replaceChildren(); Object.keys(charts).forEach(key => { charts[key].destroy(); delete charts[key]; }); } });
    } catch (_) { $('analyticsStatus').textContent='Serviço indisponível.'; }
}
