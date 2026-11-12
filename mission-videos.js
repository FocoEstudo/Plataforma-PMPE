(function () {
    'use strict';
    if (typeof document === 'undefined' || typeof window === 'undefined') return;
    const path = location.pathname.toLowerCase();
    const app = path.includes('/pcpe/') ? 'pcpe' : path.includes('/pppe/') ? 'pppe' : 'pmpe';
    const watchedKey = app + 'VideoLessonWatchedV1';
    const startedKey = app + 'VideoLessonStartedV1';
    const escape = value => String(value == null ? '' : value).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
    const read = key => { try { const data = JSON.parse(localStorage.getItem(key) || '{}'); return data && typeof data === 'object' && !Array.isArray(data) ? data : {}; } catch (_) { return {}; } };
    function save(key, data) { try { localStorage.setItem(key, JSON.stringify(data)); return true; } catch (_) { alert('Não foi possível salvar o progresso neste navegador.'); return false; } }
    function announce() { window.dispatchEvent(new CustomEvent('mission-videos:changed')); }
    function mark(id, value) { const state = read(watchedKey); state[id] = value; if (save(watchedKey, state)) announce(); }
    function content(lessons, filter) {
        const watched = read(watchedKey), started = read(startedKey);
        const count = lessons.filter(l => watched[l.id]).length;
        const rows = lessons.map((l, i) => {
            if (filter === 'assistidas' && !watched[l.id] || filter === 'pendentes' && watched[l.id]) return '';
            const status = watched[l.id] ? '✔ Assistida' : started[l.id] ? '▶ Em andamento' : '○ Pendente';
            const duration = l.duration || l.duracao;
            return `<li class="mission-video-row"><div><strong>${i + 1}. ${escape(l.title)}</strong>${duration ? ` <small>· ${escape(duration)}</small>` : ''}<span class="mission-video-status">${status}</span></div><div class="mission-video-actions"><button type="button" data-open-video-lesson="${escape(l.id)}">Assistir</button><button type="button" data-mission-watch="${escape(l.id)}" aria-pressed="${!!watched[l.id]}">${watched[l.id] ? 'Desmarcar' : 'Marcar assistida'}</button></div></li>`;
        }).join('');
        const list = `<ol class="mission-video-list">${rows || '<li>Nenhuma aula neste filtro.</li>'}</ol>`;
        return `<div class="mission-video-head"><strong>${count} de ${lessons.length} aulas</strong><label>Mostrar <select data-mission-video-filter><option value="todas" ${filter === 'todas' ? 'selected' : ''}>Todas</option><option value="pendentes" ${filter === 'pendentes' ? 'selected' : ''}>Pendentes</option><option value="assistidas" ${filter === 'assistidas' ? 'selected' : ''}>Assistidas</option></select></label></div><progress max="${lessons.length}" value="${count}" aria-label="Aulas assistidas"></progress>${lessons.length > 5 ? `<details><summary>Ver aulas (${lessons.length})</summary>${list}</details>` : list}`;
    }
    window.renderMissionVideos = lessons => `<div class="mission-videos" data-lessons="${escape(JSON.stringify(lessons.map(l => ({id:l.id,title:l.title,duration:l.duration || l.duracao}))))}" data-filter="todas">${content(lessons, 'todas')}</div>`;
    function refresh() {
        document.querySelectorAll('.mission-videos').forEach(box => {
            try { const expanded = box.querySelector('details')?.open; box.innerHTML = content(JSON.parse(box.dataset.lessons), box.dataset.filter || 'todas'); if (expanded && box.querySelector('details')) box.querySelector('details').open = true; } catch (_) { /* inválido */ }
        });
        const button = document.getElementById('sharedVideoWatched');
        const picker = document.getElementById('videoLessonPicker');
        if (button && picker) { const watched = !!read(watchedKey)[picker.value]; button.disabled = !picker.value; button.textContent = watched ? 'Desmarcar assistida' : 'Marcar como assistida'; button.setAttribute('aria-pressed', String(watched)); }
    }
    document.addEventListener('DOMContentLoaded', () => {
        const container = document.getElementById('scheduleContainer');
        container.addEventListener('change', event => { const select = event.target.closest('[data-mission-video-filter]'); if (!select) return; select.closest('.mission-videos').dataset.filter = select.value; refresh(); });
        container.addEventListener('click', event => {
            const markButton = event.target.closest('[data-mission-watch]');
            if (markButton) { const id = markButton.dataset.missionWatch; mark(id, !read(watchedKey)[id]); return; }
            const play = event.target.closest('[data-open-video-lesson]');
            if (play) { const started = read(startedKey); started[play.dataset.openVideoLesson] = true; if (save(startedKey, started)) setTimeout(refresh, 0); }
        });
        if (app !== 'pmpe') {
            const link = document.getElementById('videoLessonExternalLink'), picker = document.getElementById('videoLessonPicker');
            const button = document.createElement('button'); button.id = 'sharedVideoWatched'; button.type = 'button'; button.className = 'mission-video-watch'; link.insertAdjacentElement('afterend', button);
            button.addEventListener('click', () => { if (picker.value) mark(picker.value, !read(watchedKey)[picker.value]); });
            picker.addEventListener('change', refresh);
            container.addEventListener('click', event => { if (event.target.closest('[data-open-video-lesson]')) setTimeout(refresh, 0); });
            refresh();
        }
        window.addEventListener('mission-videos:changed', refresh);
        window.addEventListener('storage', event => { if (event.key === watchedKey || event.key === startedKey) { announce(); } });
    });
})();
