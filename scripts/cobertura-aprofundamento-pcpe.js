const fs = require('fs');
const path = require('path');
const vm = require('vm');
const root = path.join(__dirname, '..');
const verbose = process.argv.includes('-v');

function loadContext(role) {
  const window = { PCPE_ROLE: role, PMPE_TOPIC_GUIDES: {} };
  window.window = window;
  const ctx = vm.createContext({ window, localStorage: { getItem: () => null }, console });
  const run = file => vm.runInContext(fs.readFileSync(path.join(root, file), 'utf8'), ctx, { filename: file });
  const html = fs.readFileSync(path.join(root, 'pcpe', 'index.html'), 'utf8');
  const srcs = [...html.matchAll(/<script src="([^"?]+)(?:\?[^"]*)?"><\/script>/g)].map(m => m[1])
    .filter(s => /^(\.\.\/pppe\/|[\w-]+\.js$)/.test(s))
    .filter(s => /modulos-|pdf-|aprofundamento-/.test(s))
    .map(s => (s.startsWith('../') ? s.slice(3) : 'pcpe/' + s));
  srcs.forEach(run);
  return window;
}

let gaps = 0;
for (const role of ['agente', 'escrivao']) {
  const w = loadContext(role);
  const modules = w.PCPE_MODULOS || [];
  const deep = w.PMPE_DEEPENING || {};
  let full = 0;
  const missing = [];
  for (const m of modules) {
    const guide = w.PMPE_TOPIC_GUIDES[m.topic];
    const n = guide && guide.lessons ? guide.lessons.length : 0;
    const d = deep[m.topic] || {};
    const ok = n > 0 && Array.from({ length: n }, (_, i) => d[i + 1] && d[i + 1].length).every(Boolean);
    if (ok) full++; else missing.push(`${m.sub} :: ${m.topic} (aulas=${n}, aprofundadas=${Object.keys(d).length})`);
  }
  console.log(`${role}: ${modules.length} módulos, ${full} com aprofundamento completo`);
  if (verbose || missing.length) missing.forEach(x => console.log('  FALTA ' + x));
  gaps += missing.length;
}
process.exit(gaps ? 1 : 0);
