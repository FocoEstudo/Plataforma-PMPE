(function () {
    'use strict';
    if (typeof document === 'undefined' || typeof window === 'undefined') return;
    const path = location.pathname.toLowerCase();
    const app = path.includes('/pcpe/') ? 'pcpe' : path.includes('/pppe/') ? 'pppe' : 'pmpe';
    const key = app + 'PlanningV1', sessionsKey = app + 'FocusSessionsV1';
    const days = ['Segunda','Terça','Quarta','Quinta','Sexta','Sábado','Domingo'];
    const periods = ['Manhã (6h–12h)','Tarde (12h–18h)','Noite (18h–23h)'];
    const methods = {
        pom25:['Pomodoro 25/5','Alterne 25 minutos de foco e 5 de pausa; após quatro ciclos, faça uma pausa longa. Ideal para começar ou combater distrações.',25,5],
        pom50:['Pomodoro 50/10','Alterne 50 minutos de foco e 10 de pausa; após quatro ciclos, faça uma pausa longa. Ideal para tarefas mais densas.',50,10],
        ciclo:['Ciclo de estudos por matéria','Alterne matérias, destinando mais blocos às de maior relevância e menor domínio. Útil quando a rotina varia.',50,10],
        revisao:['Revisão espaçada 1–7–30','Retome o conteúdo após 24 horas, 7 dias e 30 dias. Útil para consolidar a memória.',25,5],
        questoes:['Questões primeiro','Comece por questões, identifique lacunas e estude a teoria necessária. Útil para diagnóstico e prática.',50,10],
        feynman:['Técnica Feynman','Explique o assunto com palavras simples, encontre lacunas e explique novamente. Útil para verificar compreensão.',50,10],
        mapas:['Mapas mentais e flashcards','Sintetize relações em mapas e teste a lembrança com cartões. Útil para revisão ativa.',25,5],
        foco:['Blocos de foco profundo (90 min)','Reserve 90 minutos sem interrupções e uma pausa de 20 minutos. Útil para conteúdos complexos.',90,20],
        pareto:['80/20 (Pareto)','Priorize conteúdos relevantes e de maior incidência sem abandonar os demais. Útil com prazo curto.',50,10],
        timeblock:['Time-blocking semanal','Reserve turnos concretos para matérias, revisões e descanso. Útil para proteger a agenda.',50,10],
        simulado:['Simulado primeiro e caderno de erros','Faça um diagnóstico, registre erros e revise as causas. Útil para direcionar a reta final.',50,10],
        lei:['Lei seca e resumo','Leia os dispositivos, destaque pontos cobrados e resuma com suas palavras. Útil para disciplinas jurídicas.',50,10]
    };
    const esc = v => String(v == null ? '' : v).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
    function read(k, fallback) { try { return JSON.parse(localStorage.getItem(k)) || fallback; } catch (_) { return fallback; } }
    function write(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); return true; } catch (_) { alert('Não foi possível salvar o planejamento neste navegador.'); return false; } }
    let form, panel, display, timer, status, remaining = 0, end = 0, run = false, phase = 'focus', cycles = 0, focusElapsed = 0, lastTick = 0;
    function subjects() { return [...new Set([...document.querySelectorAll('[data-open-subject-mission]')].map(e => e.dataset.openSubjectMission))]; }
    function collect() {
        const levels = {}; form.querySelectorAll('[data-subject]').forEach(e => { levels[e.dataset.subject] = {level:Number(e.querySelector('[data-level]').value), weight:Number(e.querySelector('[data-weight]').value)}; });
        return { method:form.querySelector('[name=planningMethod]').value, daily:Number(form.querySelector('[name=planningDaily]').value), weekly:Number(form.querySelector('[name=planningWeekly]').value), questions:Number(form.querySelector('[name=planningQuestions]').value), chronotype:form.querySelector('[name=planningChronotype]').value, exam:form.querySelector('[name=planningExam]').value, rest:Number(form.querySelector('[name=planningRest]').value), slots:[...form.querySelectorAll('[name=planningSlot]:checked')].map(e => e.value), levels, reminder:form.querySelector('[name=planningReminder]').checked, reminderTime:form.querySelector('[name=planningReminderTime]').value };
    }
    function describe() { const m = methods[form.querySelector('[name=planningMethod]').value]; form.querySelector('#planningMethodInfo').textContent = m[1]; }
    function load() {
        if (!form) return;
        const d = read(key, {});
        for (const [field, value] of Object.entries({planningMethod:d.method || 'pom25', planningDaily:d.daily ?? 2, planningWeekly:d.weekly ?? 10, planningQuestions:d.questions ?? 20, planningChronotype:d.chronotype || 'manha', planningExam:d.exam || '', planningRest:d.rest ?? 20, planningReminderTime:d.reminderTime || '08:00'})) form.elements[field].value = value;
        form.querySelectorAll('[name=planningSlot]').forEach(e => { e.checked = (d.slots || []).includes(e.value); });
        form.querySelectorAll('[data-subject]').forEach(e => { const x = (d.levels || {})[e.dataset.subject] || {}; e.querySelector('[data-level]').value = x.level || 2; e.querySelector('[data-weight]').value = x.weight || 2; });
        form.elements.planningReminder.checked = !!d.reminder && 'Notification' in window && Notification.permission === 'granted'; describe();
    }
    function plan(d) {
        if (!display) return;
        if (!d.method) { display.innerHTML = '<p>Complete a Central de planejamento para montar seu plano.</p>'; return; }
        const names = Object.keys(d.levels || {}); const allocated = Object.fromEntries(names.map(n => [n,0]));
        const slots = (d.slots || []).slice().sort();
        const perWeek = slots.length ? (Number(d.weekly) || 0) / slots.length : 0;
        const rows = slots.map(slot => {
            const [day,period] = slot.split('-').map(Number);
            const dailySlots = slots.filter(s => s.startsWith(day + '-')).length;
            const perSlot = Math.min((Number(d.daily) || 0) / dailySlots, perWeek);
            const candidates = names.slice().sort((a,b) => (allocated[a] / ((d.levels[a].weight || 1) * (4 - (d.levels[a].level || 2)))) - (allocated[b] / ((d.levels[b].weight || 1) * (4 - (d.levels[b].level || 2)))));
            const name = candidates[0]; if (name) allocated[name]++;
            let reviews = '';
            if (d.method === 'revisao') { const next = new Date(); const weekday = (next.getDay() + 6) % 7; next.setDate(next.getDate() + ((day - weekday + 7) % 7)); reviews = ' | revisar em ' + [1,7,30].map(offset => { const date = new Date(next); date.setDate(date.getDate() + offset); return date.toLocaleDateString('pt-BR'); }).join(', '); }
            return `<li><strong>${days[day]} · ${periods[period]}</strong> — ${esc(name || 'Escolha uma matéria')} · até ${perSlot.toFixed(1).replace('.',',')} h${reviews}</li>`;
        }).join('');
        let exam = 'Informe a data da prova para calcular o plano reverso.';
        if (d.exam) { const delta = Math.ceil((new Date(d.exam+'T23:59:59') - new Date()) / 86400000); exam = delta < 0 ? 'A data informada já passou; atualize seu objetivo.' : `Faltam ${delta} dias (aprox. ${Math.ceil(delta/7)} semanas). Plano reverso: reserve as últimas 2 semanas para revisão e simulados; nas anteriores, percorra o edital e revise erros.`; }
        display.innerHTML = `<p><strong>${esc(methods[d.method]?.[0] || '')}</strong> · ${esc(methods[d.method]?.[1] || '')}</p><p>${esc(exam)}</p><p>Cronotipo: priorize tarefas difíceis ${d.chronotype === 'manha' ? 'pela manhã' : d.chronotype === 'tarde' ? 'à tarde' : 'à noite'}. Meta: ${Number(d.daily)} h/dia, ${Number(d.weekly)} h/semana e ${Number(d.questions)} questões/dia. Inclua descanso e pausas.</p><p>Os blocos alternam matérias usando relevância informada e menor domínio. Ajuste os pesos conforme seu edital.</p><ul>${rows || '<li>Selecione turnos disponíveis na Central de planejamento.</li>'}</ul>`;
    }
    function record() { if (focusElapsed < 1) return; const entries = read(sessionsKey, []); entries.push({at:new Date().toISOString(), seconds:Math.round(focusElapsed), method:read(key, {}).method || 'pom25'}); if (write(sessionsKey, entries)) focusElapsed = 0; updateStats(); }
    function updateStats() { const entries = read(sessionsKey, []); const secs = Array.isArray(entries) ? entries.reduce((sum,e) => sum + (Number(e.seconds)||0),0) : 0; document.getElementById('planningStats').textContent = `Tempo de foco registrado: ${Math.floor(secs/60)} min · ${Array.isArray(entries) ? entries.length : 0} sessões`; }
    function showTime() { timer.textContent = `${String(Math.floor(remaining/60)).padStart(2,'0')}:${String(Math.ceil(remaining%60)).padStart(2,'0')}`; }
    function resetPhase() { const d = read(key, {}), m = methods[d.method] || methods.pom25; remaining = (phase === 'focus' ? m[2] : cycles % 4 === 0 ? (Number(d.rest) || 20) : m[3]) * 60; status.textContent = phase === 'focus' ? 'Foco' : 'Pausa'; showTime(); }
    function tick() {
        if (!run) return; const now=Date.now(); if (phase === 'focus') focusElapsed += Math.max(0, Math.min(now,end)-lastTick)/1000; lastTick=now; remaining=Math.max(0,Math.ceil((end-now)/1000)); showTime();
        if (remaining > 0) return; run=false; if (phase === 'focus') { record(); cycles++; phase='break'; } else phase='focus'; resetPhase(); document.getElementById('planningTimerStart').textContent='Iniciar';
        if (read(key, {}).reminder && 'Notification' in window && Notification.permission === 'granted') new Notification('Central de planejamento', {body:phase === 'break' ? 'Foco concluído. Hora de uma pausa.' : 'Pausa concluída. Hora de retomar o foco.'});
    }
    function checkReminder() {
        const d=read(key, {}); if(!d.reminder || !('Notification' in window) || Notification.permission !== 'granted') return;
        const now=new Date(), weekday=(now.getDay()+6)%7, time=String(now.getHours()).padStart(2,'0')+':'+String(now.getMinutes()).padStart(2,'0');
        if(time !== d.reminderTime || !(d.slots || []).some(s => s.startsWith(weekday+'-'))) return;
        const stamp=now.getFullYear()+'-'+now.getMonth()+'-'+now.getDate();
        try { if(sessionStorage.getItem(key+'Reminder')===stamp) return; sessionStorage.setItem(key+'Reminder',stamp); } catch (_) { return; }
        new Notification('Seu plano de estudos', {body:'Seu horario de estudo chegou. Confira o plano da semana.'});
    }
    function init() {
        form=document.getElementById('profileForm'); if (!form) return;
        const el=document.createElement('fieldset'); el.className='profile-section planning-section';
        const options=Object.entries(methods).map(([id,m])=>`<option value="${id}">${esc(m[0])}</option>`).join('');
        const grid=days.map((day,i)=>`<tr><th scope="row">${day}</th>${periods.map((p,j)=>`<td><input type="checkbox" name="planningSlot" value="${i}-${j}" aria-label="${day}, ${p}"></td>`).join('')}</tr>`).join('');
        const subjectFields=subjects().map(name=>`<div data-subject="${esc(name)}"><strong>${esc(name)}</strong><label>Domínio <select data-level><option value="1">Iniciante</option><option value="2">Intermediário</option><option value="3">Avançado</option></select></label><label>Relevância no edital <select data-weight><option value="1">Menor</option><option value="2">Média</option><option value="3">Maior</option></select></label></div>`).join('');
        el.innerHTML=`<legend>Planejamento personalizado</legend><label>Método de estudo <select name="planningMethod">${options}</select></label><p id="planningMethodInfo"></p><p>Disponibilidade semanal: selecione os turnos que realmente pode estudar.</p><div class="planning-scroll"><table><thead><tr><th>Dia</th>${periods.map(p=>`<th scope="col">${p}</th>`).join('')}</tr></thead><tbody>${grid}</tbody></table></div><div class="planning-fields"><label>Meta diária (horas)<input name="planningDaily" type="number" min="0.5" max="24" step="0.5" value="2"></label><label>Meta semanal (horas)<input name="planningWeekly" type="number" min="0.5" max="168" step="0.5" value="10"></label><label>Questões por dia<input name="planningQuestions" type="number" min="0" max="1000" value="20"></label><label>Cronotipo<select name="planningChronotype"><option value="manha">Manhã</option><option value="tarde">Tarde</option><option value="noite">Noite</option></select></label><label>Data da prova<input name="planningExam" type="date"></label><label>Pausa longa (minutos)<input name="planningRest" type="number" min="5" max="120" value="20"></label></div><details><summary>Autoavaliação e relevância por matéria</summary><p>Defina a relevância conforme seu edital; domínio baixo recebe mais atenção.</p><div class="planning-subjects">${subjectFields}</div></details><label><input type="checkbox" name="planningReminder"> Avisar ao terminar foco ou pausa (com a página aberta)</label><label>Horário do lembrete nos dias disponíveis <input name="planningReminderTime" type="time" value="08:00"></label><p id="planningPermission" role="status"></p>`;
        form.querySelector('.profile-form-actions').before(el);
        form.elements.planningMethod.addEventListener('change',describe);
        form.elements.planningReminder.addEventListener('change', async e => { if (!e.target.checked) return; if (!('Notification' in window)) { e.target.checked=false; form.querySelector('#planningPermission').textContent='Notificações não disponíveis neste navegador.'; return; } const permission=await Notification.requestPermission(); if(permission!=='granted') { e.target.checked=false; form.querySelector('#planningPermission').textContent='Permissão não concedida.'; } });
        const home=document.getElementById('dashboardHome'); panel=document.createElement('section'); panel.className='planning-dashboard'; panel.innerHTML='<h2>Meu plano e foco</h2><div id="planningPlan"></div><div class="planning-timer"><p id="planningTimerPhase">Foco</p><output id="planningTimer" aria-label="Tempo restante">25:00</output><div><button id="planningTimerStart" type="button">Iniciar</button> <button id="planningTimerStop" type="button">Finalizar sessão</button></div><p id="planningStats"></p><p>O cronômetro registra o tempo de foco; pausas não contam como estudo.</p></div>'; home.prepend(panel);
        display=document.getElementById('planningPlan'); timer=document.getElementById('planningTimer'); status=document.getElementById('planningTimerPhase');
        document.getElementById('planningTimerStart').addEventListener('click',e=>{ if(run) { tick(); run=false; e.target.textContent='Continuar'; } else { if(!remaining) resetPhase(); run=true; lastTick=Date.now(); end=lastTick+remaining*1000; e.target.textContent='Pausar'; } });
        document.getElementById('planningTimerStop').addEventListener('click',()=>{ if(run) tick(); run=false; if(phase==='focus') record(); phase='focus'; cycles=0; resetPhase(); document.getElementById('planningTimerStart').textContent='Iniciar'; });
        setInterval(tick,500); setInterval(checkReminder,30000); load(); plan(read(key, {})); resetPhase(); updateStats();
        window.addEventListener(app + ':session-ready',()=>{load(); plan(read(key, {})); if(!run) resetPhase(); updateStats();});
    }
    window.PMPE_PLANNING = { load, save() { const d=collect(); if(write(key,d)) { plan(d); if(!run) resetPhase(); } } };
    document.addEventListener('DOMContentLoaded',init);
})();
