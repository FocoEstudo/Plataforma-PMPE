'use strict';

const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

const source = fs.readFileSync(path.join(__dirname, '..', 'video-playback.js'), 'utf8');

function createPlayback(pathname, storage) {
    const listeners = {};
    const players = [];
    const window = {
        location: { pathname, origin: 'https://study.example' },
        setInterval() {},
        setTimeout,
        clearTimeout,
        addEventListener: (name, callback) => { listeners[name] = callback; }
    };
    const document = {
        createElement: () => ({}),
        head: {
            appendChild() {
                window.YT = {
                    Player: function (frame, options) {
                        this.frame = frame;
                        this.options = options;
                        this.currentTime = options.playerVars.start || 0;
                        this.getCurrentTime = () => this.currentTime;
                        this.cueVideoById = video => { this.cuedVideo = video; };
                        players.push(this);
                        queueMicrotask(() => options.events.onReady({ target: this }));
                    }
                };
                queueMicrotask(() => window.onYouTubeIframeAPIReady());
            }
        },
        addEventListener() {}
    };
    const localStorage = {
        getItem: key => storage.get(key) || null,
        setItem: (key, value) => storage.set(key, value)
    };
    vm.runInNewContext(source, { window, document, localStorage, URL, console });
    return { api: window.PMPE_VIDEO_PLAYBACK, listeners, players };
}

async function main() {
    const storage = new Map();
    const lessons = [{ id: 'lesson-1', videos: [{ videoId: 'video-123' }, { videoId: 'video-456' }] }];
    const first = createPlayback('/index.html', storage);
    assert.equal(first.api.restore(lessons), null);
    await first.api.play({}, { lessonId: 'lesson-1', partIndex: 1, videoId: 'video-456' });
    await new Promise(resolve => setImmediate(resolve));
    first.players[0].currentTime = 83.7;
    first.listeners.pagehide();

    const resumed = createPlayback('/index.html', storage);
    const position = resumed.api.restore(lessons);
    assert.equal(position.lessonId, 'lesson-1');
    assert.equal(position.partIndex, 1);
    await resumed.api.play({}, {
        lessonId: position.lessonId,
        partIndex: position.partIndex,
        videoId: 'video-456'
    });
    assert.equal(resumed.players[0].options.playerVars.start, 83);

    const otherPlatform = createPlayback('/pcpe/index.html', storage);
    assert.equal(otherPlatform.api.restore(lessons), null);
    console.log('OK: retoma aula/parte/posição após recarga e mantém o estado separado por plataforma.');
}

main().catch(error => {
    console.error(error);
    process.exitCode = 1;
});
