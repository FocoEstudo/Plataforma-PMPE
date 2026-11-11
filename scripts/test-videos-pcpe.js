'use strict';

const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

const root = path.join(__dirname, '..');
const context = { window: {} };
for (const file of ['pppe/videos-pppe.js', 'pppe/videos-complementares.js', 'pcpe/video-mapeamento.js']) {
    vm.runInNewContext(fs.readFileSync(path.join(root, file), 'utf8'), context, { filename: file });
}
const { PPPE_VIDEOS: inherited, PPPE_VIDEOS_COMPLEMENTARES: complementary, PCPE_VIDEO_MAP: mapping } = context.window;
let count = 0;
for (const [subject, topics] of Object.entries(mapping)) {
    const ids = new Set();
    for (const [topic, titles] of topics) {
        const entries = [
            ...(inherited[topic] || []).map(item => ({ title: item.title, urls: item.urls })),
            ...(complementary[topic] || []).map(([id, title]) => ({ title, urls: [`https://youtu.be/${id}`] }))
        ];
        for (const title of titles) {
            const matches = entries.filter(entry => entry.title === title);
            assert.equal(matches.length, 1, `${subject}: ${topic} / ${title}`);
            for (const raw of matches[0].urls) {
                const url = new URL(raw);
                const id = url.hostname === 'youtu.be' ? url.pathname.slice(1) :
                    ['youtube.com', 'www.youtube.com'].includes(url.hostname) ? url.searchParams.get('v') : null;
                assert.match(id || '', /^[A-Za-z0-9_-]{11}$/, `${subject}: URL inválida`);
                assert(!ids.has(id), `${subject}: vídeo duplicado ${id}`);
                ids.add(id);
                count++;
            }
        }
    }
}
console.log(`OK: ${count} entradas de vídeo em ${Object.keys(mapping).length} disciplinas da PCPE.`);
