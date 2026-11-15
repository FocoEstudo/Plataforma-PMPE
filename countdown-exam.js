(() => {
    'use strict';
    if (typeof document === 'undefined') return;
    const element = document.querySelector('[data-exam-date]');
    if (!element) return;

    const [year, month, day] = element.dataset.examDate.split('-').map(Number);
    const examDate = Date.UTC(year, month - 1, day);
    const formatter = new Intl.DateTimeFormat('en-CA', {
        timeZone: 'America/Recife', year: 'numeric', month: 'numeric', day: 'numeric'
    });
    const update = () => {
        const parts = Object.fromEntries(formatter.formatToParts(new Date()).map(part => [part.type, part.value]));
        const today = Date.UTC(Number(parts.year), Number(parts.month) - 1, Number(parts.day));
        const days = Math.round((examDate - today) / 86400000);
        element.textContent = days > 0 ? `${days} ${days === 1 ? 'DIA' : 'DIAS'}` : days === 0 ? 'É HOJE!' : 'DATA PREVISTA PASSOU';
    };
    update();
    setInterval(update, 60000);
})();
