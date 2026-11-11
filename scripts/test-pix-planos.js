'use strict';

const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const plans = require('../planos-acesso.js');
const assets = path.join(__dirname, '..', 'assets');
const payloads = JSON.parse(fs.readFileSync(path.join(assets, 'pix-planos.json'), 'utf8'));

function fields(payload) {
    const result = {};
    for (let position = 0; position < payload.length;) {
        assert.ok(position + 4 <= payload.length, 'Cabeçalho Pix truncado');
        const id = payload.slice(position, position + 2);
        const lengthText = payload.slice(position + 2, position + 4);
        assert.match(lengthText, /^\d{2}$/);
        const end = position + 4 + Number(lengthText);
        assert.ok(end <= payload.length, 'Campo Pix truncado');
        assert.equal(result[id], undefined, 'Campo Pix duplicado');
        result[id] = payload.slice(position + 4, end);
        position = end;
    }
    return result;
}

function crc16(text) {
    let crc = 0xffff;
    for (const byte of Buffer.from(text, 'utf8')) {
        crc ^= byte << 8;
        for (let bit = 0; bit < 8; bit++) {
            crc = crc & 0x8000 ? ((crc << 1) ^ 0x1021) & 0xffff : (crc << 1) & 0xffff;
        }
    }
    return crc.toString(16).toUpperCase().padStart(4, '0');
}

let recipient;
for (const id of ['mensal', 'vitalicio']) {
    const payload = payloads[id];
    assert.equal(typeof payload, 'string');
    const pix = fields(payload);
    const account = fields(pix['26']);
    assert.equal(account['00'], 'br.gov.bcb.pix');
    assert.ok(account['01'], 'Chave Pix ausente');
    assert.equal(account['25'], undefined, 'QR dinâmico não esperado');
    assert.equal(pix['53'], '986');
    assert.equal(pix['54'], plans.getPlan(id).amount.toFixed(2));
    assert.equal(pix['63'], crc16(payload.slice(0, -4)));
    if (recipient) assert.equal(pix['26'], recipient, 'Destinatários diferentes');
    recipient = pix['26'];
    const png = fs.readFileSync(path.join(assets, `pix-${id}.png`));
    assert.deepEqual(png.subarray(0, 8), Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]));
}
console.log('OK: valores, destinatário, CRC dos códigos Pix e imagens dos planos.');
