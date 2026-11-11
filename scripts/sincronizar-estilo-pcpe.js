'use strict';

const fs = require('node:fs');
const path = require('node:path');

const root = path.join(__dirname, '..');
const source = fs.readFileSync(path.join(root, 'pppe', 'index.html'), 'utf8');
const style = source.match(/<style>\s*([\s\S]*?)\s*<\/style>/);
if (!style || !style[1].includes('.dashboard-home-hero') || !style[1].includes('.platform-sidebar')) {
    throw new Error('Não foi possível localizar os estilos do painel PPPE.');
}
fs.writeFileSync(path.join(root, 'pcpe', 'painel-base.css'), `/* Gerado de pppe/index.html por scripts/sincronizar-estilo-pcpe.js. */\n${style[1]}\n`);
const loginSource = fs.readFileSync(path.join(root, 'pppe', 'login.html'), 'utf8');
const loginStyle = loginSource.match(/<style>\s*([\s\S]*?)\s*<\/style>/);
if (!loginStyle || !loginStyle[1].includes('.hero-grid') || !loginStyle[1].includes('.auth-card')) {
    throw new Error('Não foi possível localizar os estilos da entrada PPPE.');
}
fs.writeFileSync(path.join(root, 'pcpe', 'entrada-base.css'), `/* Gerado de pppe/login.html por scripts/sincronizar-estilo-pcpe.js. */\n${loginStyle[1]}\n`);
console.log('Estilos compartilhados do painel e da entrada sincronizados.');
