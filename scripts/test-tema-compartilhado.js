'use strict';
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const root = path.join(__dirname, '..');
const read = file => fs.readFileSync(path.join(root, file), 'utf8');
const base = read('tema-final-base.css');

for (const file of ['tema-final-pmpe.css', 'pppe/tema-final.css', 'pcpe/tema-final.css']) {
    const theme = read(file);
    assert.match(theme, /@import url\("(?:\.\.\/)?tema-final-base\.css\?v=3"\)/);
    assert.doesNotMatch(theme, /--theme-primary\s*:/, `${file} não deve substituir a paleta comum`);
}
for (const file of ['index.html', 'login.html', 'pppe/index.html', 'pppe/login.html', 'pcpe/index.html', 'pcpe/login.html']) {
    assert.match(read(file), /tema-final(?:-pmpe)?\.css\?v=3/, `${file} deve carregar a paleta atual`);
}
for (const file of ['index.html', 'pppe/index.html', 'pcpe/index.html']) {
    const html = read(file);
    assert.match(html, /video-workspace\.css/);
    assert.match(html, /video-workspace\.js/);
}
function luminance(hex) {
    const rgb = hex.match(/[\da-f]{2}/gi).map(value => parseInt(value, 16) / 255)
        .map(value => value <= 0.04045 ? value / 12.92 : ((value + 0.055) / 1.055) ** 2.4);
    return 0.2126 * rgb[0] + 0.7152 * rgb[1] + 0.0722 * rgb[2];
}
function color(name) {
    const match = base.match(new RegExp(`--${name}:\\s*(#[\\da-f]{6})`, 'i'));
    assert.ok(match, `Cor ${name} ausente`);
    return match[1];
}
function contrast(a, b) {
    const values = [luminance(a), luminance(b)].sort((x, y) => y - x);
    return (values[0] + 0.05) / (values[1] + 0.05);
}
assert.ok(contrast(color('theme-ink'), '#ffffff') >= 4.5);
assert.ok(contrast(color('theme-link'), color('theme-tint')) >= 4.5);
assert.ok(contrast('#ffffff', color('theme-primary')) >= 4.5);
assert.ok(contrast(color('theme-on-accent'), color('theme-accent')) >= 4.5);
console.log('Paleta compartilhada e contrastes principais verificados.');
