global.window={};
require('./aprofundamento-dh-2.js');
const c=global.window.PMPE_DEEPENING['Curso completo de Direitos Humanos e Legislação'];
let out='';
for(const k of [32,33,34,35]){ out+='### '+k+'\n'; for(const b of c[k]){ out+= b[0]==='h'? '## '+b[1]+'\n' : (b[0]==='p'? b[1]+'\n' : b[1].map(x=>'- '+x).join('\n')+'\n'); } }
require('fs').writeFileSync('_dh2.txt',out); console.log(out.length);
