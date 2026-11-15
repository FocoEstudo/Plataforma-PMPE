(function () {
    'use strict';
    if (typeof document === 'undefined' || typeof window === 'undefined') return;

    function init() {
        const panel = document.getElementById('videoLessonsPanel');
        const layout = panel && panel.querySelector('.video-study-layout');
        const notes = layout && layout.querySelector('.video-notes-panel');
        const topicPicker = document.getElementById('videoTopicPicker');
        const lessonPicker = document.getElementById('videoLessonPicker');
        const picker = topicPicker || lessonPicker;
        if (!panel || !layout || !notes || !picker) return;

        const pickerLabel = picker.closest('label');
        if (!pickerLabel) {
            console.error('Não foi possível organizar o seletor de videoaulas.');
            return;
        }
        const sidebar = document.createElement('aside');
        sidebar.className = 'video-workspace-sidebar';
        const tabs = document.createElement('div');
        tabs.className = 'video-workspace-tabs';
        tabs.setAttribute('role', 'tablist');
        tabs.setAttribute('aria-label', 'Painel da videoaula');

        const lessonsTab = document.createElement('button');
        const notesTab = document.createElement('button');
        const lessonsPane = document.createElement('div');
        lessonsPane.className = 'video-workspace-lessons';
        lessonsPane.id = 'videoWorkspaceLessons';
        notes.id = 'videoWorkspaceNotes';
        [[lessonsTab, 'Aulas', lessonsPane], [notesTab, 'Anotações', notes]].forEach(([button, title, pane]) => {
            button.type = 'button';
            button.textContent = title;
            button.setAttribute('role', 'tab');
            button.setAttribute('aria-controls', pane.id);
            pane.setAttribute('role', 'tabpanel');
            tabs.appendChild(button);
        });
        function selectTab(selected) {
            const showLessons = selected === lessonsTab;
            lessonsTab.setAttribute('aria-selected', String(showLessons));
            notesTab.setAttribute('aria-selected', String(!showLessons));
            lessonsPane.hidden = !showLessons;
            notes.hidden = showLessons;
        }
        lessonsTab.addEventListener('click', () => selectTab(lessonsTab));
        notesTab.addEventListener('click', () => selectTab(notesTab));

        lessonsPane.appendChild(pickerLabel);
        const progress = document.getElementById('videoTopicProgress');
        const existingList = document.getElementById('videoLessonList');
        if (progress) lessonsPane.appendChild(progress);
        if (existingList) {
            lessonsPane.appendChild(existingList);
        } else {
            const searchLabel = document.createElement('label');
            searchLabel.className = 'video-workspace-search';
            searchLabel.textContent = 'Buscar aula';
            const search = document.createElement('input');
            search.type = 'search';
            search.placeholder = 'Disciplina ou tema';
            searchLabel.appendChild(search);
            const count = document.createElement('p');
            count.className = 'video-workspace-count';
            count.setAttribute('role', 'status');
            const list = document.createElement('div');
            list.className = 'video-workspace-list';
            list.setAttribute('aria-label', 'Aulas disponíveis');
            lessonsPane.append(searchLabel, count, list);

            function renderList() {
                const query = search.value.trim().toLocaleLowerCase('pt-BR');
                const matches = Array.from(picker.options).filter(option =>
                    option.value && option.textContent.toLocaleLowerCase('pt-BR').includes(query));
                const shown = matches.slice(0, 60);
                count.textContent = matches.length > shown.length
                    ? `${matches.length} aulas encontradas · mostrando ${shown.length}. Use a busca para refinar.`
                    : `${matches.length} ${matches.length === 1 ? 'aula encontrada' : 'aulas encontradas'}.`;
                list.replaceChildren();
                shown.forEach(option => {
                    const button = document.createElement('button');
                    button.type = 'button';
                    button.className = 'video-workspace-lesson';
                    button.textContent = option.textContent;
                    button.setAttribute('aria-pressed', String(option.value === picker.value));
                    button.addEventListener('click', () => {
                        picker.value = option.value;
                        picker.dispatchEvent(new Event('change', { bubbles: true }));
                    });
                    list.appendChild(button);
                });
            }
            picker.addEventListener('change', renderList);
            search.addEventListener('input', renderList);
            new MutationObserver(renderList).observe(picker, { childList: true, subtree: true });
            const title = document.getElementById('videoLessonTitle');
            if (title) new MutationObserver(renderList).observe(title, { childList: true, characterData: true, subtree: true });
            renderList();
        }
        sidebar.append(tabs, lessonsPane, notes);
        layout.appendChild(sidebar);
        layout.classList.add('video-workspace-layout');
        selectTab(lessonsTab);
    }

    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init, { once: true });
    else init();
})();
