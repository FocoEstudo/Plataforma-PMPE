'use strict';

const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const { initializeTestEnvironment, assertFails, assertSucceeds } = require('@firebase/rules-unit-testing');
const { doc, getDoc, setDoc, updateDoc, deleteField, serverTimestamp, Timestamp, runTransaction } = require('firebase/firestore');
const policy = require('../pcpe/access-policy.js');

async function main() {
    if (!process.env.FIRESTORE_EMULATOR_HOST) throw new Error('Execute apenas com o emulador Firestore.');
    const rules = fs.readFileSync(path.join(__dirname, '..', 'firestore.rules'), 'utf8');
    const adminEmail = rules.match(/request\.auth\.token\.email == '([^']+)'/)?.[1];
    if (!adminEmail) throw new Error('Administrador das regras não encontrado.');
    const [host, port] = process.env.FIRESTORE_EMULATOR_HOST.split(':');
    if (!['localhost', '127.0.0.1'].includes(host) || !/^\d+$/.test(port || '') || Number(port) < 1 || Number(port) > 65535) {
        throw new Error('O emulador Firestore deve estar em localhost com uma porta válida.');
    }
    const env = await initializeTestEnvironment({
        projectId: `demo-pmpe-test-${process.pid}-${Date.now()}`,
        firestore: { host, port: Number(port), rules }
    });
    try {
        const owner = env.authenticatedContext('student-a', { email: 'student-a@example.test' }).firestore();
        const other = env.authenticatedContext('student-b', { email: 'student-b@example.test' }).firestore();
        const admin = env.authenticatedContext('administrator', { email: adminEmail, email_verified: true }).firestore();
        const unverifiedAdmin = env.authenticatedContext('administrator', { email: adminEmail, email_verified: false }).firestore();
        const ownerRequest = doc(owner, 'accessRequestsPcpe', 'student-a');
        const ownerAccess = doc(owner, 'accessPcpe', 'student-a');
        const pending = plan => ({ email: 'student-a@example.test', status: 'pending', plan, requestedAt: serverTimestamp() });

        await assertFails(setDoc(ownerAccess, { active: true, plan: 'vitalicio' }));
        await assertFails(setDoc(doc(other, 'accessRequestsPcpe', 'student-a'), pending('mensal')));
        await assertFails(setDoc(ownerRequest, pending('anual')));
        await assertSucceeds(setDoc(ownerRequest, pending('mensal')));
        await assertFails(setDoc(ownerRequest, pending('vitalicio')));
        await assertFails(updateDoc(ownerRequest, { status: 'approved', reviewedAt: serverTimestamp() }));
        await assertFails(getDoc(doc(other, 'accessRequestsPcpe', 'student-a')));
        await assertFails(updateDoc(doc(unverifiedAdmin, 'accessRequestsPcpe', 'student-a'), {
            status: 'approved', reviewedAt: serverTimestamp()
        }));

        const adminRequest = doc(admin, 'accessRequestsPcpe', 'student-a');
        const adminAccess = doc(admin, 'accessPcpe', 'student-a');
        async function approve() {
            return runTransaction(admin, async transaction => {
                const requestSnapshot = await transaction.get(adminRequest);
                if (!requestSnapshot.exists() || requestSnapshot.data().status !== 'pending') throw new Error('Pedido não pendente.');
                const accessSnapshot = await transaction.get(adminAccess);
                if (accessSnapshot.exists() && !policy.mayApprovePix(accessSnapshot.data())) throw new Error('Acesso vigente.');
                transaction.set(adminAccess, { active: true, provider: 'pix_manual', amount: 24.9, currency: 'BRL', paidAt: serverTimestamp(), plan: 'mensal' });
                transaction.update(adminRequest, { status: 'approved', reviewedAt: serverTimestamp() });
            });
        }
        const approvals = await Promise.allSettled([approve(), approve()]);
        assert.equal(approvals.filter(item => item.status === 'fulfilled').length, 1, 'Somente uma aprovação concorrente deve vencer.');
        assert.equal((await getDoc(ownerAccess)).data().plan, 'mensal');
        await assertFails(setDoc(ownerRequest, pending('mensal')));

        await env.withSecurityRulesDisabled(async context => {
            await setDoc(doc(context.firestore(), 'accessPcpe', 'student-a'), {
                active: true, provider: 'pix_manual', amount: 24.9, currency: 'BRL',
                paidAt: Timestamp.fromMillis(Date.now() - 31 * 86400000), plan: 'mensal'
            });
        });
        await assertSucceeds(setDoc(ownerRequest, pending('vitalicio')));
        await assertFails(updateDoc(ownerRequest, { plan: 'mensal' }));
        await assertSucceeds(updateDoc(adminRequest, { status: 'rejected', reviewedAt: serverTimestamp() }));
        await assertSucceeds(setDoc(ownerRequest, pending('mensal')));

        await env.withSecurityRulesDisabled(async context => {
            await setDoc(doc(context.firestore(), 'accessPcpe', 'student-a'), { active: true, plan: 'vitalicio' });
        });
        await assertFails(setDoc(ownerRequest, pending('mensal')));
        await assert.rejects(approve(), /Acesso vigente/);

        const pmpeRequest = doc(owner, 'accessRequests', 'student-a');
        const pppeRequest = doc(owner, 'accessRequestsPppe', 'student-a');
        await assertSucceeds(setDoc(pmpeRequest, pending('mensal')));
        await assertSucceeds(updateDoc(pmpeRequest, { plan: 'vitalicio' }));
        await assertSucceeds(updateDoc(pmpeRequest, { promoCode: 'SEREI APROVADO', amount: 74.9 }));
        await assertSucceeds(updateDoc(pmpeRequest, { plan: 'mensal', promoCode: deleteField(), amount: deleteField() }));
        await assertFails(updateDoc(pmpeRequest, { status: 'approved', reviewedAt: serverTimestamp() }));
        await assertSucceeds(setDoc(pppeRequest, pending('vitalicio')));
        await assertSucceeds(updateDoc(pppeRequest, { plan: 'mensal' }));
        await assertFails(updateDoc(pppeRequest, { promoCode: 'SEREI APROVADO', amount: 74.9 }));
        const adminPmpeRequest = doc(admin, 'accessRequests', 'student-a');
        const adminPppeRequest = doc(admin, 'accessRequestsPppe', 'student-a');
        await assertSucceeds(setDoc(doc(admin, 'access', 'student-a'), {
            active: true, provider: 'pix_manual', amount: 24.9, currency: 'BRL',
            paidAt: serverTimestamp(), plan: 'mensal'
        }));
        await assertFails(updateDoc(adminPmpeRequest, {
            status: 'approved', reviewedAt: serverTimestamp()
        }));
        await env.withSecurityRulesDisabled(async context => {
            await updateDoc(doc(context.firestore(), 'access', 'student-a'), {
                paidAt: Timestamp.fromMillis(Date.now() - 31 * 86400000)
            });
        });
        await assertSucceeds(updateDoc(adminPmpeRequest, {
            status: 'approved', reviewedAt: serverTimestamp()
        }));
        await assertSucceeds(setDoc(pmpeRequest, pending('mensal')));
        await env.withSecurityRulesDisabled(async context => {
            await setDoc(doc(context.firestore(), 'access', 'student-a'), { active: true, plan: 'vitalicio' });
        });
        await assertFails(updateDoc(adminPmpeRequest, {
            status: 'approved', reviewedAt: serverTimestamp()
        }));

        await assertSucceeds(setDoc(doc(admin, 'accessPppe', 'student-a'), {
            active: true, provider: 'pix_manual', amount: 99.9, currency: 'BRL', plan: 'vitalicio'
        }));
        await assertFails(updateDoc(adminPppeRequest, {
            status: 'approved', reviewedAt: serverTimestamp()
        }));
        await env.withSecurityRulesDisabled(async context => {
            await setDoc(doc(context.firestore(), 'accessPppe', 'student-a'), {
                active: true, provider: 'pix_manual', amount: 24.9, currency: 'BRL',
                paidAt: Timestamp.fromMillis(Date.now() - 31 * 86400000), plan: 'mensal'
            });
        });
        await assertSucceeds(updateDoc(adminPppeRequest, {
            status: 'approved', reviewedAt: serverTimestamp()
        }));
        await env.withSecurityRulesDisabled(async context => {
            await setDoc(doc(context.firestore(), 'access', 'student-a'), { active: true });
            await setDoc(doc(context.firestore(), 'accessPppe', 'student-a'), { active: true });
        });
        assert.equal((await getDoc(doc(owner, 'access', 'student-a'))).data().active, true);
        assert.equal((await getDoc(doc(owner, 'accessPppe', 'student-a'))).data().active, true);
        console.log('OK: regras Pix PCPE, PMPE e PPPE, validade mensal, renovação, aprovação concorrente e acessos legados.');
    } finally {
        await env.clearFirestore();
        await env.cleanup();
    }
}

main().catch(error => {
    console.error(error);
    process.exitCode = 1;
});
