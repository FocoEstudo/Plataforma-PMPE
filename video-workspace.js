(function () {
    'use strict';
    if (typeof document === 'undefined' || typeof window === 'undefined') return;

    function enhanceDashboardNavigation() {
        const supportPanel = document.getElementById('studySupport');
        const updateSupportLabel = () => {
            if (!supportPanel) return;
            const view = supportPanel.dataset.supportView === 'support' ? 'support' : 'simulations';
            const tabIds = view === 'support'
                ? ['desktopTab-support', 'mobileTab-support']
                : ['desktopTab-simulations', 'mobileTab-simulations'];
            const tabs = tabIds.map(id => document.getElementById(id)).filter(Boolean);
            const tab = tabs.find(item =>
                item.getClientRects().length &&
                (item.getAttribute('aria-selected') === 'true' || item.classList.contains('is-active'))
            ) || tabs.find(item => item.getClientRects().length) || tabs[0];
            if (tab && supportPanel.getAttribute('aria-labelledby') !== tab.id) {
                supportPanel.setAttribute('aria-labelledby', tab.id);
            }
        };
        if (supportPanel) {
            new MutationObserver(updateSupportLabel).observe(supportPanel, {
                attributes: true,
                attributeFilter: ['data-support-view']
            });
        }

        const mobileNav = document.querySelector('.mobile-dashboard-nav');
        if (!mobileNav) {
            updateSupportLabel();
            return;
        }
        const navLabel = mobileNav.getAttribute('aria-label') || 'Navegação inferior';
        if (!/deslize horizontalmente/i.test(navLabel)) {
            mobileNav.setAttribute('aria-label', `${navLabel}. Deslize horizontalmente para ver todas as abas.`);
        }
        const updateOverflowIndicators = () => {
            const maxScroll = mobileNav.scrollWidth - mobileNav.clientWidth;
            mobileNav.classList.toggle('has-overflow-left', mobileNav.scrollLeft > 2);
            mobileNav.classList.toggle('has-overflow-right', maxScroll - mobileNav.scrollLeft > 2);
        };
        const revealActiveTab = () => {
            const activeTab = mobileNav.querySelector('.dashboard-nav-item.is-active, .dashboard-nav-item[aria-selected="true"]');
            if (activeTab) {
                const navRect = mobileNav.getBoundingClientRect();
                const tabRect = activeTab.getBoundingClientRect();
                const inset = 28;
                let nextScrollLeft = mobileNav.scrollLeft;
                if (tabRect.left < navRect.left + inset) {
                    nextScrollLeft += tabRect.left - navRect.left - inset;
                } else if (tabRect.right > navRect.right - inset) {
                    nextScrollLeft += tabRect.right - navRect.right + inset;
                }
                if (nextScrollLeft !== mobileNav.scrollLeft) {
                    const reduceMotion = window.matchMedia &&
                        window.matchMedia('(prefers-reduced-motion: reduce)').matches;
                    mobileNav.scrollTo({ left: Math.max(0, nextScrollLeft), behavior: reduceMotion ? 'auto' : 'smooth' });
                }
            }
            updateOverflowIndicators();
            updateSupportLabel();
        };
        const scheduleReveal = () => window.requestAnimationFrame(revealActiveTab);
        new MutationObserver(scheduleReveal).observe(mobileNav, {
            attributes: true,
            subtree: true,
            attributeFilter: ['class', 'aria-selected']
        });
        mobileNav.addEventListener('scroll', updateOverflowIndicators, { passive: true });
        window.addEventListener('resize', scheduleReveal);
        scheduleReveal();
    }

    function init() {
        enhanceDashboardNavigation();
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
        lessonsTab.id = 'videoWorkspaceLessonsTab';
        notesTab.id = 'videoWorkspaceNotesTab';
        lessonsPane.className = 'video-workspace-lessons';
        lessonsPane.id = 'videoWorkspaceLessons';
        notes.id = 'videoWorkspaceNotes';
        [[lessonsTab, 'Aulas', lessonsPane], [notesTab, 'Anotações', notes]].forEach(([button, title, pane]) => {
            button.type = 'button';
            button.textContent = title;
            button.setAttribute('role', 'tab');
            button.setAttribute('aria-controls', pane.id);
            pane.setAttribute('role', 'tabpanel');
            pane.setAttribute('aria-labelledby', button.id);
            tabs.appendChild(button);
        });
        function selectTab(selected) {
            const showLessons = selected === lessonsTab;
            lessonsTab.setAttribute('aria-selected', String(showLessons));
            notesTab.setAttribute('aria-selected', String(!showLessons));
            lessonsTab.tabIndex = showLessons ? 0 : -1;
            notesTab.tabIndex = showLessons ? -1 : 0;
            lessonsPane.hidden = !showLessons;
            notes.hidden = showLessons;
            layout.classList.toggle('is-notes-active', !showLessons);
        }
        lessonsTab.addEventListener('click', () => selectTab(lessonsTab));
        notesTab.addEventListener('click', () => selectTab(notesTab));
        tabs.addEventListener('keydown', event => {
            if (!['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(event.key)) return;
            event.preventDefault();
            const tab = event.key === 'Home' ? lessonsTab
                : event.key === 'End' ? notesTab
                    : event.target === lessonsTab ? notesTab : lessonsTab;
            selectTab(tab);
            tab.focus();
        });

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
        const videoPane = layout.firstElementChild;
        if (videoPane && !videoPane.id) videoPane.id = 'videoWorkspaceVideo';
        sidebar.id = 'videoWorkspaceSidebar';
        sidebar.tabIndex = 0;
        sidebar.setAttribute('aria-label', 'Painel de aulas e anotações');
        const resizer = document.createElement('div');
        resizer.className = 'video-workspace-resizer';
        resizer.setAttribute('role', 'separator');
        resizer.setAttribute('aria-orientation', 'vertical');
        resizer.setAttribute('aria-label', 'Redimensionar vídeo e painel de aulas');
        resizer.setAttribute('aria-controls', `${videoPane ? videoPane.id : ''} ${sidebar.id}`);
        resizer.setAttribute('tabindex', '0');
        let isResizing = false;
        const applySplit = leftWidth => {
            const width = layout.clientWidth;
            const handleWidth = resizer.getBoundingClientRect().width || 16;
            const available = width - handleWidth;
            if (available <= 0) return;
            const minLeft = Math.min(320, available * .4);
            const minRight = Math.min(280, available * .35);
            const maxLeft = available - minRight;
            const boundedLeft = Math.max(minLeft, Math.min(maxLeft, leftWidth));
            const rightWidth = available - boundedLeft;
            layout.style.gridTemplateColumns = `${boundedLeft}px ${handleWidth}px ${rightWidth}px`;
            layout.dataset.videoPaneRatio = String(boundedLeft / available);
            resizer.setAttribute('aria-valuemin', String(Math.round(minLeft)));
            resizer.setAttribute('aria-valuemax', String(Math.round(maxLeft)));
            resizer.setAttribute('aria-valuenow', String(Math.round(boundedLeft)));
            resizer.setAttribute('aria-valuetext', `${Math.round((boundedLeft / available) * 100)}% para a área do vídeo`);
        };
        const resizeAt = clientX => {
            const rect = layout.getBoundingClientRect();
            const handleWidth = resizer.getBoundingClientRect().width || 16;
            applySplit(clientX - rect.left - handleWidth / 2);
        };
        const stopResizing = event => {
            if (!isResizing) return;
            isResizing = false;
            document.body.classList.remove('video-workspace-resizing');
            if (resizer.hasPointerCapture(event.pointerId)) resizer.releasePointerCapture(event.pointerId);
        };
        resizer.addEventListener('pointerdown', event => {
            if (event.button !== 0 || window.innerWidth <= 900) return;
            event.preventDefault();
            isResizing = true;
            resizer.setPointerCapture(event.pointerId);
            document.body.classList.add('video-workspace-resizing');
            resizeAt(event.clientX);
        });
        resizer.addEventListener('pointermove', event => {
            if (isResizing) resizeAt(event.clientX);
        });
        resizer.addEventListener('pointerup', stopResizing);
        resizer.addEventListener('pointercancel', stopResizing);
        resizer.addEventListener('keydown', event => {
            if (event.key !== 'ArrowLeft' && event.key !== 'ArrowRight') return;
            event.preventDefault();
            const currentWidth = videoPane ? videoPane.getBoundingClientRect().width : 0;
            applySplit(currentWidth + (event.key === 'ArrowRight' ? 24 : -24));
        });
        window.addEventListener('resize', () => {
            if (window.innerWidth <= 900) {
                layout.style.removeProperty('grid-template-columns');
                return;
            }
            const ratio = Number(layout.dataset.videoPaneRatio);
            if (ratio > 0) applySplit(ratio * (layout.clientWidth - (resizer.getBoundingClientRect().width || 16)));
        });
        layout.insertBefore(resizer, layout.children[1] || null);
        layout.appendChild(sidebar);
        layout.classList.add('video-workspace-layout');
        selectTab(lessonsTab);
    }

    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init, { once: true });
    else init();
})();
