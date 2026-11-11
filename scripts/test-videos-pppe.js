// Uso: node scripts/test-videos-pppe.js
const assert = require('assert');
const fs = require('fs');
const path = require('path');
const vm = require('vm');

const root = path.join(__dirname, '..');
const read = file => fs.readFileSync(path.join(root, file), 'utf8');
const sandbox = { window: {} };
vm.runInNewContext(read(path.join('pppe', 'modulos-pppe.js')), sandbox);
vm.runInNewContext(read(path.join('pppe', 'videos-pppe.js')), sandbox);
vm.runInNewContext(read(path.join('pppe', 'videos-complementares.js')), sandbox);
const modules = sandbox.window.PPPE_MODULOS;
const catalog = sandbox.window.PPPE_VIDEOS;
const complementary = sandbox.window.PPPE_VIDEOS_COMPLEMENTARES;
const pmpeHtml = read('index.html');
const pppeHtml = read(path.join('pppe', 'index.html'));
const knownTopics = new Set(modules.map(module => module.topic));
const videoId = url => {
    const parsed = new URL(url);
    if (parsed.hostname === 'youtu.be') return parsed.pathname.slice(1);
    if (parsed.pathname.startsWith('/live/')) return parsed.pathname.split('/')[2];
    return parsed.searchParams.get('v');
};
let count = 0;
for (const [topic, lessons] of Object.entries(catalog)) {
    const lessonIds = new Set();
    assert(knownTopics.has(topic), `Tema desconhecido: ${topic}`);
    assert(lessons.length, `Tema sem aulas: ${topic}`);
    for (const lesson of lessons) {
        assert(/^module-\d+-lesson-\d+$/.test(lesson.source));
        assert(lesson.title && lesson.urls.length);
        assert(!lessonIds.has(lesson.source), `Aula duplicada: ${lesson.source}`);
        lessonIds.add(lesson.source);
        for (const url of lesson.urls) {
            assert(pmpeHtml.includes(`"${url}"`), `URL não encontrada na PMPE: ${url}`);
            assert(/^https:\/\/(?:youtu\.be\/|www\.youtube\.com\/live\/)/.test(url));
        }
        count++;
    }
}
let additionalCount = 0;
for (const [topic, lessons] of Object.entries(complementary)) {
    assert(knownTopics.has(topic), `Tema desconhecido: ${topic}`);
    assert(lessons.length, `Tema sem aulas: ${topic}`);
    const ids = new Set((catalog[topic] || []).flatMap(lesson => lesson.urls.map(videoId)));
    for (const [id, title] of lessons) {
        assert(/^[A-Za-z0-9_-]{11}$/.test(id), `ID inválido: ${id}`);
        assert(title && !ids.has(id), `Aula inválida ou duplicada: ${id}`);
        ids.add(id);
        additionalCount++;
    }
}
assert.strictEqual(Object.keys(catalog).length, 26);
assert.strictEqual(count, 67);
assert(pppeHtml.includes('<script src="videos-pppe.js"></script>'));
assert(pppeHtml.includes('<script src="videos-complementares.js"></script>'));
assert(!pppeHtml.includes('youtube.com/results?search_query='));
assert(!pppeHtml.includes('BUSCAR OUTRAS AULAS'));
assert.strictEqual((pppeHtml.match(/<img class="dashboard-shortcut-image" src="https:\/\/encrypted-tbn0\.gstatic\.com\/images\?/g) || []).length, 12);
for (const match of pppeHtml.matchAll(/<script(?:\s[^>]*)?>([\s\S]*?)<\/script>/g)) {
    if (match[1].trim()) new vm.Script(match[1]);
}
const missing = modules.filter(module => !catalog[module.topic] && !complementary[module.topic]);
assert(modules.length - missing.length >= 89, 'Cobertura de temas regressou.');
console.log(`OK: ${count} aulas da PMPE e ${additionalCount} adicionais, ${modules.length - missing.length}/${modules.length} temas, 12 cards e sintaxe dos scripts.`);
console.log(`Temas sem vídeo: ${missing.map(module => module.topic).join('; ') || 'nenhum'}.`);
