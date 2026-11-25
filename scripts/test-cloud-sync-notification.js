'use strict';

const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

const source = fs.readFileSync(path.join(__dirname, '..', 'cloud-sync.js'), 'utf8');
const values = new Map();
const events = [];
let snapshotListener;
let banner;
let reloadCount = 0;

class Storage {
    get length() { return values.size; }
    key(index) { return [...values.keys()][index] || null; }
    getItem(key) { return values.has(key) ? values.get(key) : null; }
    setItem(key, value) { values.set(String(key), String(value)); }
    removeItem(key) { values.delete(key); }
}

function createElement() {
    return {
        style: {},
        listeners: {},
        children: [],
        setAttribute() {},
        addEventListener(name, callback) { this.listeners[name] = callback; },
        append(...children) { this.children.push(...children); },
        remove() { if (banner === this) banner = null; }
    };
}

const document = {
    body: { appendChild(element) { if (element.id === 'syncUpdateBanner') banner = element; } },
    createElement,
    getElementById: id => id === 'syncUpdateBanner' ? banner : null
};
const window = {
    addEventListener() {},
    dispatchEvent: event => events.push(event),
    location: { reload() { reloadCount++; } }
};
class CustomEvent {
    constructor(type, options) { this.type = type; this.detail = options.detail; }
}
const localStorage = new Storage();
const sessionStorage = new Storage();
const fsApi = {
    doc: (...args) => args,
    collection: (...args) => args,
    getDocs: async () => ({ forEach() {} }),
    setDoc: async () => {},
    onSnapshot: (ref, callback) => { snapshotListener = callback; }
};
const sandbox = { window, document, localStorage, sessionStorage, Storage, CustomEvent, console, setTimeout, clearTimeout, Date };
vm.runInNewContext(source, sandbox);

async function main() {
    await window.PMPE_SYNC.start({ uid: 'user-1', db: {}, fs: fsApi });
    snapshotListener({
        docChanges: () => [{
            type: 'modified',
            doc: {
                metadata: { hasPendingWrites: false },
                data: () => ({ key: 'pmpeStudyProgress', value: '{"day":2}', deleted: false, t: Date.now() + 10000 })
            }
        }]
    });

    assert.equal(localStorage.getItem('pmpeStudyProgress'), '{"day":2}');
    assert.equal(events.at(-1).type, 'pmpe:sync-updated');
    assert.deepEqual(Array.from(events.at(-1).detail.keys), ['pmpeStudyProgress']);
    banner.children[1].listeners.click();
    assert.equal(reloadCount, 0);
    assert.equal(banner, null);
    console.log('OK: atualizações remotas são aplicadas e o aviso fecha sem recarregar a página.');
}

main().catch(error => {
    console.error(error);
    process.exitCode = 1;
});
