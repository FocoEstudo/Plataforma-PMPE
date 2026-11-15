(() => {
    const toggle = document.getElementById('sidebarToggle');
    const sidebar = document.getElementById('mainPlatformSidebar');

    if (!toggle || !sidebar) {
        throw new Error('Não foi possível inicializar o controle do menu lateral.');
    }

    const icon = toggle.querySelector('i');
    if (!icon) {
        throw new Error('O controle do menu lateral não possui ícone.');
    }

    const setExpanded = (expanded) => {
        document.body.classList.toggle('sidebar-collapsed', !expanded);
        sidebar.inert = !expanded;
        toggle.setAttribute('aria-expanded', String(expanded));
        toggle.setAttribute('aria-label', expanded ? 'Recolher menu lateral' : 'Abrir menu lateral');
        toggle.title = expanded ? 'Recolher menu lateral' : 'Abrir menu lateral';
        icon.classList.toggle('fa-chevron-left', expanded);
        icon.classList.toggle('fa-bars', !expanded);
    };

    setExpanded(true);
    toggle.addEventListener('click', () => {
        setExpanded(toggle.getAttribute('aria-expanded') !== 'true');
    });
})();
