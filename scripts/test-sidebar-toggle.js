'use strict';

const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

class FakeClassList {
    constructor() {
        this.values = new Set();
    }

    toggle(name, force) {
        const enabled = force === undefined ? !this.values.has(name) : force;
        if (enabled) this.values.add(name);
        else this.values.delete(name);
        return enabled;
    }

    contains(name) {
        return this.values.has(name);
    }
}

class FakeElement {
    constructor() {
        this.classList = new FakeClassList();
        this.attributes = new Map();
        this.listeners = new Map();
        this.inert = false;
        this.title = '';
        this.icon = null;
    }

    setAttribute(name, value) {
        this.attributes.set(name, value);
    }

    getAttribute(name) {
        return this.attributes.get(name) || null;
    }

    addEventListener(name, listener) {
        this.listeners.set(name, listener);
    }

    querySelector(selector) {
        return selector === 'i' ? this.icon : null;
    }

    click() {
        this.listeners.get('click')();
    }
}

const toggle = new FakeElement();
const icon = new FakeElement();
const sidebar = new FakeElement();
toggle.icon = icon;
const body = { classList: new FakeClassList() };
const elements = new Map([
    ['sidebarToggle', toggle],
    ['mainPlatformSidebar', sidebar]
]);
const source = fs.readFileSync(path.join(__dirname, '..', 'sidebar-toggle.js'), 'utf8');

vm.runInNewContext(source, {
    document: {
        body,
        getElementById: id => elements.get(id) || null
    }
});

assert.equal(toggle.getAttribute('aria-expanded'), 'true');
assert.equal(sidebar.inert, false);
assert.equal(body.classList.contains('sidebar-collapsed'), false);

toggle.click();
assert.equal(toggle.getAttribute('aria-expanded'), 'false');
assert.equal(toggle.getAttribute('aria-label'), 'Abrir menu lateral');
assert.equal(sidebar.inert, true);
assert.equal(body.classList.contains('sidebar-collapsed'), true);
assert.equal(icon.classList.contains('fa-bars'), true);

toggle.click();
assert.equal(toggle.getAttribute('aria-expanded'), 'true');
assert.equal(sidebar.inert, false);
assert.equal(body.classList.contains('sidebar-collapsed'), false);
assert.equal(icon.classList.contains('fa-chevron-left'), true);

console.log('OK: menu lateral abre e fecha com estado acessível.');
