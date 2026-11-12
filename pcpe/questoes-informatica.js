(function () {
  window.PPPE_QUESTOES = window.PPPE_QUESTOES || {};
  window.PPPE_QUESTOES['Linux: sistema operacional e arquivos'] = [
    {text:'Em sentido estrito, Linux é:',options:['O núcleo do sistema.','Um editor de texto obrigatório.','Um navegador web.','Um protocolo de correio.'],correct:0,exp:'Linux designa o núcleo; distribuições o combinam com outros programas.'},
    {text:'Uma distribuição Linux:',options:['Combina o núcleo com programas e ferramentas.','É necessariamente idêntica a todas as outras.','Não pode oferecer interface gráfica.','É um arquivo de texto.'],correct:0,exp:'Distribuições reúnem o núcleo e outros componentes e podem diferir entre si.'},
    {text:'O diretório raiz é representado por:',options:['/.','C:.','@.','.. apenas.'],correct:0,exp:'A barra / representa a raiz da árvore de diretórios.'},
    {text:'Um caminho absoluto:',options:['Parte da raiz.','Depende apenas do diretório atual.','Nunca identifica um arquivo.','Não pode conter diretórios.'],correct:0,exp:'Um caminho absoluto começa na raiz, ao contrário do relativo.'},
    {text:'O comando pwd apresenta:',options:['O diretório de trabalho atual.','A senha do usuário.','A lista de processos obrigatoriamente.','O conteúdo de todo disco.'],correct:0,exp:'pwd significa print working directory e mostra o diretório atual.'},
    {text:'Para listar entradas de diretório usa-se frequentemente:',options:['ls.','cd.','mkdir.','chmod.'],correct:0,exp:'ls lista entradas de diretório.'},
    {text:'Para alterar o diretório atual usa-se:',options:['cd.','pwd.','cat.','cp.'],correct:0,exp:'cd muda o diretório de trabalho atual.'},
    {text:'O comando mkdir é usado para:',options:['Criar diretórios.','Excluir usuários.','Copiar arquivos.','Alterar senha.'],correct:0,exp:'mkdir cria diretórios, respeitadas as permissões e opções.'},
    {text:'As permissões tradicionais distinguem:',options:['Proprietário, grupo e outros.','Apenas administradores.','Somente arquivos de rede.','Apenas o nome do arquivo.'],correct:0,exp:'As classes tradicionais são proprietário, grupo e outros usuários.'},
    {text:'O comando chmod é usado para:',options:['Alterar permissões.','Exibir o diretório atual.','Abrir exclusivamente um navegador.','Criar uma conta de email.'],correct:0,exp:'chmod altera bits de permissão de arquivos e diretórios.'}
  ];
  window.PPPE_QUESTOES['Linux: sistema operacional e arquivos'].forEach((q,i) => {const n=i%4;q.options=q.options.slice(n).concat(q.options.slice(0,n));q.correct=(q.correct-n+4)%4;});
})();