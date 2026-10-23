const fs = require('fs'), path = require('path');
const tmp = process.env.TEMP;
const [, , id, out] = process.argv; // id: parte do nome do arquivo salvo
const files = fs.readdirSync(tmp).filter(f => f.includes(id));
if (!files.length) { console.log('nao achou'); process.exit(1); }
let t = fs.readFileSync(path.join(tmp, files[0]), 'utf8');
t = t.replace(/\[_\([^\]]*?\)_\]\([^)]*\)/g, '').replace(/\n\s*\n/g, '\n').replace(/[ \t]+\n/g, '\n');
fs.mkdirSync('_src', { recursive: true });
fs.writeFileSync(path.join('_src', out), t);
console.log(out, t.length);
