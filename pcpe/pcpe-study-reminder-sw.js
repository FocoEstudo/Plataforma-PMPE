'use strict';

self.addEventListener('push', event => {
    let payload = {};
    try {
        payload = event.data ? event.data.json() : {};
    } catch (error) {
        console.error('Não foi possível interpretar o lembrete de estudos recebido:', error);
    }

    event.waitUntil(self.registration.showNotification(payload.title || 'Hora de estudar · PCPE', {
        body: payload.body || 'Seu próximo bloco de estudos está começando.',
        icon: '../assets/gabari.svg',
        badge: '../assets/gabari.svg',
        tag: payload.tag || 'pcpe-study-reminder',
        data: { url: payload.url || './index.html' }
    }));
});

self.addEventListener('notificationclick', event => {
    event.notification.close();
    const targetUrl = new URL(event.notification.data?.url || './index.html', self.location.href).href;
    event.waitUntil(clients.matchAll({ type: 'window', includeUncontrolled: true }).then(windowClients => {
        const existing = windowClients.find(client => new URL(client.url).origin === self.location.origin);
        if (existing) {
            return existing.navigate(targetUrl).then(() => existing.focus());
        }
        return clients.openWindow(targetUrl);
    }));
});
