(function () {
    'use strict';
    if (typeof document === 'undefined' || typeof URL === 'undefined') return;
    const root = new URL('.', document.currentScript.src);
    const concurso = /\/pcpe\//i.test(location.pathname) ? 'pcpe' : /\/pppe\//i.test(location.pathname) ? 'pppe' : 'pmpe';
    const categories = ['conteudo', 'missoes', 'videoaulas', 'apostilas', 'questoes', 'simulados', 'redacao', 'revisao', 'flashcards', 'mapas'];
    const nav = { content: 'conteudo', missions: 'missoes', videos: 'videoaulas', pdfs: 'apostilas', simulations: 'simulados', writing: 'redacao', errors: 'revisao', flashcards: 'flashcards', mindmaps: 'mapas' };
    let ctx, source, timer, progressTimer, pending = {}, materials = {}, visitPending = false, firstSeen;
    const day = () => new Date().toISOString().slice(0, 10);
    function track(category, label) {
        if (!ctx || !categories.includes(category)) return;
        pending[category] = Math.min(1000, (pending[category] || 0) + 1);
        if (typeof label === 'string' && label.trim()) {
            label = label.trim().replace(/\s+/g, ' ').slice(0, 100);
            let hash = 2166136261;
            for (let i = 0; i < label.length; i++) hash = Math.imul(hash ^ label.charCodeAt(i), 16777619);
            const key = category + '_' + (hash >>> 0).toString(16).padStart(8, '0');
            if (materials[key] || Object.keys(materials).length < 50) {
                const item = materials[key] || (materials[key] = { key, label, category, count: 0 });
                item.count = Math.min(item.count + 1, 1000);
            }
        }
        clearTimeout(timer); timer = setTimeout(flush, 15000);
    }
    function progress() {
        if (!source) return null;
        try {
            const { days, tasks, checked } = source();
            const subjects = {}, methods = {}, total = { done: 0, total: 0 };
            const add = (bucket, key, done) => { if (!key) return; key = String(key).slice(0, 100); const x = bucket[key] || (bucket[key] = { done: 0, total: 0 }); x.total++; if (done) x.done++; };
            days.forEach(d => tasks(d).forEach(task => {
                const done = !!checked[task.id]; total.total++; if (done) total.done++;
                if (task.id.includes('_v1_') || task.id.endsWith('_pdf1')) add(subjects, d.mod1 && d.mod1.sub, done);
                else if (task.id.includes('_v2_') || task.id.endsWith('_pdf2')) add(subjects, d.mod2 && d.mod2.sub, done);
                const method = task.type === 'Leitura' ? 'Apostilas' : task.type === 'Teoria' ? 'Videoaulas' : task.type === 'Disparos' ? 'Questões' : task.type;
                add(methods, method, done);
            }));
            const json = JSON.stringify({ total, subjects, methods });
            return json.length <= 12000 ? json : null;
        } catch (_) { return null; }
    }
    async function flush() {
        if (!ctx || (!visitPending && !Object.keys(pending).length && !Object.keys(materials).length)) return;
        const active = ctx, counts = pending, session = visitPending, items = materials; pending = {}; materials = {}; visitPending = false;
        const d = day();
        const payload = { uid: active.uid, concurso, day: d, updatedAt: active.fs.serverTimestamp(), sessions: active.fs.increment(session ? 1 : 0) };
        categories.forEach(k => { payload[k] = active.fs.increment(counts[k] || 0); });
        Object.values(items).forEach(item => {
            const data = { uid: active.uid, concurso, day: d, key: item.key, label: item.label, category: item.category, count: active.fs.increment(item.count), updatedAt: active.fs.serverTimestamp() };
            active.fs.setDoc(active.fs.doc(active.db, 'analyticsMaterials', `${active.uid}_${concurso}_${d}_${item.key}`), data, { merge: true }).catch(() => { if (ctx === active) { const current = materials[item.key] || (materials[item.key] = { ...item, count: 0 }); current.count = Math.min(1000, current.count + item.count); clearTimeout(timer); timer = setTimeout(flush, 60000); } });
        });
        try { await active.fs.setDoc(active.fs.doc(active.db, 'analyticsDaily', `${active.uid}_${concurso}_${d}`), payload, { merge: true }); }
        catch (e) { if (ctx === active) { visitPending = visitPending || session; Object.keys(counts).forEach(k => { pending[k] = (pending[k] || 0) + counts[k]; }); clearTimeout(timer); timer = setTimeout(flush, 60000); } console.warn('Estatísticas temporariamente indisponíveis.'); }
    }
    async function saveProgress() {
        if (!ctx || !firstSeen) return;
        const active = ctx, data = progress();
        const payload = { uid: active.uid, concurso, email: active.email, firstSeen, lastSeen: active.fs.serverTimestamp() };
        if (data !== null) payload.progress = data;
        try { await active.fs.setDoc(active.fs.doc(active.db, 'analyticsUsers', `${active.uid}_${concurso}`), payload, { merge: true }); }
        catch (_) { console.warn('Resumo de progresso temporariamente indisponível.'); }
    }
    function setProgressSource(fn) { source = fn; clearTimeout(progressTimer); progressTimer = setTimeout(saveProgress, 10000); }
    window.PlatformAnalytics = { track, setProgressSource };
    document.addEventListener('click', event => {
        const item = event.target.closest('[data-open-dashboard-view], [data-analytics-material], [data-open-video-lesson], .pdf-card, a[href$=".pdf"], button[onclick], a[onclick]');
        if (!item) return;
        let kind = nav[item.dataset.openDashboardView] || item.dataset.analyticsMaterial;
        if (!kind && item.matches('[data-open-video-lesson]')) kind = 'videoaulas';
        if (!kind && item.matches('.pdf-card, a[href$=".pdf"]')) kind = 'apostilas';
        if (!kind) { const action = item.getAttribute('onclick') || ''; if (/openMaterialModal/i.test(action)) kind = 'apostilas'; else if (/openDailyQuiz/i.test(action)) kind = 'questoes'; }
        let label = '';
        if (item.matches('.pdf-card, a[href$=".pdf"], [data-open-video-lesson]')) label = item.dataset.openVideoLesson || item.textContent;
        else if (kind === 'apostilas') { const match = (item.getAttribute('onclick') || '').match(/openMaterialModal\(['"]([\w-]+)/); if (match) label = match[1]; }
        if (kind) track(kind, label);
    });
    document.addEventListener('visibilitychange', () => { if (document.visibilityState === 'hidden') { void flush(); void saveProgress(); } });
    window.addEventListener('pagehide', () => { void flush(); });
    Promise.all([import(new URL('firebase-config.js', root)), import('https://www.gstatic.com/firebasejs/12.4.0/firebase-auth.js'), import('https://www.gstatic.com/firebasejs/12.4.0/firebase-firestore.js')]).then(([config, auth, fs]) => {
        auth.onAuthStateChanged(config.auth, async user => {
            ctx = null; firstSeen = null; pending = {}; materials = {}; visitPending = false;
            if (!user || !user.email) return;
            const active = ctx = { uid: user.uid, email: user.email, db: config.db, fs };
            try {
                const ref = fs.doc(active.db, 'analyticsUsers', `${active.uid}_${concurso}`);
                const snap = await fs.getDoc(ref);
                if (ctx !== active) return;
                if (snap.exists()) firstSeen = snap.data().firstSeen;
                else { try { await fs.setDoc(ref, { uid: active.uid, concurso, email: active.email, firstSeen: fs.serverTimestamp(), lastSeen: fs.serverTimestamp(), progress: '' }); } catch (error) { const other = await fs.getDoc(ref); if (!other.exists()) throw error; } const created = await fs.getDoc(ref); firstSeen = created.data().firstSeen; }
                if (ctx !== active) return;
                visitPending = true; void flush(); void saveProgress();
            } catch (_) { console.warn('Estatísticas temporariamente indisponíveis.'); }
        });
    }).catch(() => { console.warn('Estatísticas temporariamente indisponíveis.'); });
})();
