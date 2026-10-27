/*
 * Sincroniza com a conta (Firestore) todo dado de estudo salvo em localStorage com prefixo "pmpe".
 * Estrutura: users/{uid}/sync/{chave} -> { key, value, deleted, t }
 * Estratégia: local primeiro; a versão mais recente (campo t) vence por chave.
 */
(function () {
    'use strict';

    const SYNCED = /^pmpe(?!_sync)/i;
    const META_KEY = 'pmpe_sync_meta';
    const OWNER_KEY = 'pmpe_sync_owner';
    const MAX_VALUE = 900000;
    const PUSH_DELAY_MS = 1800;

    const proto = Storage.prototype;
    const rawSet = proto.setItem;
    const rawGet = proto.getItem;
    const rawRemove = proto.removeItem;

    const isSynced = key => typeof key === 'string' && SYNCED.test(key);
    const readLocal = key => { try { return rawGet.call(localStorage, key); } catch (e) { return null; } };
    const writeLocal = (key, value) => { try { rawSet.call(localStorage, key, value); } catch (e) { console.warn('Armazenamento local indisponível.', e); } };
    const removeLocal = key => { try { rawRemove.call(localStorage, key); } catch (e) { /* ignorado */ } };

    let meta = {};
    try { meta = JSON.parse(readLocal(META_KEY) || '{}') || {}; } catch (e) { meta = {}; }
    const saveMeta = () => writeLocal(META_KEY, JSON.stringify(meta));

    let ctx = null;
    let suppress = false;
    let pushTimer = null;
    const dirty = new Set();
    let chip = null;
    let chipTimer = null;

    const listSyncedKeys = () => {
        const keys = [];
        for (let i = 0; i < localStorage.length; i++) {
            const k = localStorage.key(i);
            if (isSynced(k)) keys.push(k);
        }
        return keys;
    };

    function showChip(text, state) {
        if (!document.body) return;
        if (!chip) {
            chip = document.createElement('div');
            chip.id = 'syncChip';
            chip.setAttribute('role', 'status');
            chip.style.cssText = 'position:fixed;right:.8rem;bottom:.8rem;z-index:90;padding:.35rem .75rem;border-radius:999px;font:700 .72rem Inter,Arial,sans-serif;box-shadow:0 6px 18px rgba(0,0,0,.18);transition:opacity .4s;pointer-events:none';
            document.body.appendChild(chip);
        }
        const palette = { ok: ['#e6f6ec', '#176b45', '#a9d6b9'], work: ['#fff8e1', '#7a5a00', '#e0c35a'], error: ['#fdecea', '#a52c22', '#f0c5c1'] }[state] || [];
        chip.style.background = palette[0]; chip.style.color = palette[1]; chip.style.border = '1px solid ' + palette[2];
        chip.textContent = text;
        chip.style.opacity = '1';
        clearTimeout(chipTimer);
        if (state === 'ok') chipTimer = setTimeout(() => { chip.style.opacity = '0'; }, 2500);
        window.dispatchEvent(new CustomEvent('pmpe:sync-status', { detail: { state } }));
    }

    function touch(key, deleted) {
        // Antes do login só o app inicializa valores padrão; esses não devem prevalecer sobre a conta.
        if (suppress || !ctx || !isSynced(key)) return;
        meta[key] = { t: Date.now(), d: Boolean(deleted) };
        saveMeta();
        dirty.add(key);
        clearTimeout(pushTimer);
        pushTimer = setTimeout(() => { void flush(); }, PUSH_DELAY_MS);
    }

    proto.setItem = function (key, value) {
        rawSet.call(this, key, value);
        if (this === localStorage) touch(key, false);
    };
    proto.removeItem = function (key) {
        rawRemove.call(this, key);
        if (this === localStorage) touch(key, true);
    };

    const docRef = key => ctx.fs.doc(ctx.db, 'users', ctx.uid, 'sync', key);

    async function pushKey(key) {
        const m = meta[key] || { t: Date.now(), d: false };
        const value = readLocal(key);
        const deleted = value === null;
        if (!deleted && value.length > MAX_VALUE) {
            console.warn('Dado grande demais para sincronizar:', key);
            return;
        }
        await ctx.fs.setDoc(docRef(key), { key, value: deleted ? null : value, deleted, t: m.t });
    }

    async function flush() {
        if (!ctx || !dirty.size) return true;
        const keys = [...dirty];
        dirty.clear();
        showChip('Sincronizando…', 'work');
        try {
            await Promise.all(keys.map(pushKey));
            showChip('☁ Salvo na sua conta', 'ok');
            return true;
        } catch (error) {
            keys.forEach(k => dirty.add(k));
            console.error('Falha ao sincronizar com a conta.', error);
            showChip('Sem sincronização — tentaremos de novo', 'error');
            clearTimeout(pushTimer);
            pushTimer = setTimeout(() => { void flush(); }, 15000);
            return false;
        }
    }

    // Em dispositivos que nunca sincronizaram, junta os dados em vez de sobrescrever.
    function mergeLegacy(key, localRaw, remoteRaw) {
        try {
            const a = JSON.parse(localRaw);
            const b = JSON.parse(remoteRaw);
            if (!a || !b || typeof a !== 'object' || typeof b !== 'object' || Array.isArray(a) || Array.isArray(b)) return null;
            if (key === 'pmpe_ian_v7') {
                const out = { ...b };
                Object.keys(a).forEach(k => { out[k] = Boolean(a[k]) || Boolean(b[k]); });
                return JSON.stringify(out);
            }
            if (key === 'pmpeFlashcardsV1') {
                const out = { ...b };
                Object.keys(a).forEach(k => { if (!out[k] || (a[k] && a[k].s > out[k].s)) out[k] = a[k]; });
                return JSON.stringify(out);
            }
        } catch (e) { /* formatos diferentes: segue a regra por data */ }
        return null;
    }

    function applyRemote(key, remote) {
        suppress = true;
        try {
            if (remote.deleted || typeof remote.value !== 'string') removeLocal(key);
            else writeLocal(key, remote.value);
        } finally { suppress = false; }
        meta[key] = { t: remote.t, d: Boolean(remote.deleted) };
        saveMeta();
    }

    async function reconcile() {
        const snap = await ctx.fs.getDocs(ctx.fs.collection(ctx.db, 'users', ctx.uid, 'sync'));
        const remote = new Map();
        snap.forEach(d => { const data = d.data(); if (data && isSynced(data.key)) remote.set(data.key, data); });

        let changed = false;
        remote.forEach((r, key) => {
            const local = meta[key];
            const localRaw = readLocal(key);
            const remoteRaw = r.deleted ? null : r.value;
            if (localRaw === remoteRaw) { meta[key] = { t: Math.max(r.t || 0, local ? local.t : 0), d: r.deleted }; return; }
            if (!local && localRaw !== null && remoteRaw !== null) {
                const merged = mergeLegacy(key, localRaw, remoteRaw);
                if (merged !== null) {
                    suppress = true; writeLocal(key, merged); suppress = false;
                    meta[key] = { t: Date.now(), d: false };
                    dirty.add(key);
                    changed = true;
                    return;
                }
            }
            const localT = local ? local.t : 0;
            if ((r.t || 0) > localT) { applyRemote(key, r); changed = true; }
            else if ((r.t || 0) < localT) dirty.add(key);
        });
        listSyncedKeys().forEach(key => {
            if (remote.has(key)) return;
            if (!meta[key]) meta[key] = { t: Date.now(), d: false };
            dirty.add(key);
        });
        saveMeta();
        return changed;
    }

    function listen() {
        ctx.fs.onSnapshot(ctx.fs.collection(ctx.db, 'users', ctx.uid, 'sync'), snap => {
            let updated = false;
            snap.docChanges().forEach(change => {
                if (change.type === 'removed' || change.doc.metadata.hasPendingWrites) return;
                const r = change.doc.data();
                if (!r || !isSynced(r.key)) return;
                const local = meta[r.key];
                if ((r.t || 0) > (local ? local.t : 0)) { applyRemote(r.key, r); updated = true; }
            });
            if (updated) showUpdateBanner();
        }, error => console.warn('Escuta de sincronização indisponível.', error));
    }

    function showUpdateBanner() {
        if (document.getElementById('syncUpdateBanner')) return;
        const box = document.createElement('div');
        box.id = 'syncUpdateBanner';
        box.setAttribute('role', 'alert');
        box.style.cssText = 'position:fixed;left:50%;bottom:4.5rem;transform:translateX(-50%);z-index:95;display:flex;gap:.8rem;align-items:center;padding:.6rem 1rem;border-radius:.8rem;background:#102e20;color:#fff;border:1px solid #d4af37;font:600 .85rem Inter,Arial,sans-serif;box-shadow:0 10px 30px rgba(0,0,0,.3)';
        const text = document.createElement('span');
        text.textContent = 'Seu progresso foi atualizado em outro dispositivo.';
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.textContent = 'Atualizar agora';
        btn.style.cssText = 'background:#d4af37;color:#102e20;border:0;border-radius:.5rem;padding:.35rem .7rem;font-weight:800;cursor:pointer';
        btn.addEventListener('click', () => window.location.reload());
        box.append(text, btn);
        document.body.appendChild(box);
    }

    async function start({ uid, db, fs }) {
        if (ctx && ctx.uid === uid) return true;
        ctx = { uid, db, fs };
        const owner = readLocal(OWNER_KEY);
        if (owner && owner !== uid) {
            // Outra conta usou este navegador: não deixa os dados dela vazarem para esta conta.
            suppress = true;
            listSyncedKeys().forEach(removeLocal);
            suppress = false;
            meta = {};
            saveMeta();
        }
        writeLocal(OWNER_KEY, uid);

        let changed = false;
        try {
            changed = await reconcile();
        } catch (error) {
            console.error('Não foi possível ler o progresso da conta.', error);
            showChip('Modo offline — usando dados deste aparelho', 'error');
            return false;
        }
        if (changed && !sessionStorage.getItem('pmpe_sync_reload_' + uid)) {
            sessionStorage.setItem('pmpe_sync_reload_' + uid, '1');
            window.location.reload();
            return new Promise(() => { /* aguarda o recarregamento */ });
        }
        sessionStorage.removeItem('pmpe_sync_reload_' + uid);
        listen();
        void flush();
        return true;
    }

    // Antes de sair da conta, envia o que falta e limpa os dados locais para o próximo usuário.
    async function stopAndClear() {
        clearTimeout(pushTimer);
        const ok = await flush();
        if (ok) {
            suppress = true;
            listSyncedKeys().forEach(removeLocal);
            suppress = false;
            removeLocal(META_KEY);
            removeLocal(OWNER_KEY);
        }
        ctx = null;
        return ok;
    }

    window.addEventListener('visibilitychange', () => { if (document.visibilityState === 'hidden') void flush(); });
    window.addEventListener('pagehide', () => { void flush(); });

    window.PMPE_SYNC = { start, flush, stopAndClear, isSynced };
})();
