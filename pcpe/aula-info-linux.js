(function () {
  'use strict';
  window.PCPE_TOPIC_GUIDES = window.PCPE_TOPIC_GUIDES || {};
  window.PCPE_DEEPENING = window.PCPE_DEEPENING || {};
  window.PCPE_QUESTOES = window.PCPE_QUESTOES || {};
  const topic = 'Linux: sistema operacional e arquivos';
  const base = window.PCPE_TOPIC_GUIDES[topic] || {};
  window.PCPE_TOPIC_GUIDES[topic] = Object.assign({}, base, {
    lessons: [
      [
        `Características do Linux que as bancas cobram`,
        `Antes de decorar comandos, conheça a "personalidade" do Linux, porque as bancas adoram questões conceituais sobre ele. Linux é software livre (seu código-fonte é aberto), é multitarefa e multiusuário, e é case sensitive: diferencia letras maiúsculas e minúsculas. Esta última é a característica que mais derruba candidatos.`,
        `Um arquivo chamado Prova.txt (com P maiúsculo) é um arquivo; prova.txt (com p minúsculo) é um arquivo completamente diferente. Os dois podem existir no mesmo diretório ao mesmo tempo, porque o Linux os trata como nomes distintos.`,
        `Software livre quer dizer código-fonte aberto. Case sensitive quer dizer que maiúscula e minúscula fazem diferença. Quando a questão pede a característica mais importante, marque case sensitive.`
      ],
      [
        `Estrutura de diretórios: a árvore invertida e a raiz`,
        `O Linux organiza os arquivos como uma árvore de cabeça para baixo. Tudo no sistema nasce de um único ponto: o diretório raiz, representado por uma barra (/). Os demais diretórios são galhos que saem dessa raiz. Se os comandos são as ferramentas, a estrutura de diretórios é o mapa que diz onde usar cada ferramenta.`,
        `Os quatro diretórios para focar na prova: /bin, onde ficam os programas básicos; /etc, que guarda as configurações do sistema; /home, a casa dos usuários comuns; e /root, a casa do superusuário (o administrador, "o chefão").`,
        `Não confunda /root com a raiz /. A raiz (/) é o topo de toda a árvore; /root é apenas o diretório pessoal do superusuário, um galho abaixo da raiz. São coisas diferentes.`
      ],
      [
        `Permissões: dono, grupo e outros`,
        `Para cada arquivo ou pasta existem três níveis de acesso. O dono (user) é normalmente quem criou o arquivo. O grupo (group) é um conjunto específico de usuários. Os outros (others) são literalmente todo o resto do mundo. Cada permissão é definida separadamente para essas três classes.`,
        `Um mesmo arquivo pode permitir que o dono leia, escreva e execute, que o grupo apenas leia e que os outros não tenham acesso algum. Cada classe tem a sua configuração própria.`,
        `As classes sempre aparecem na ordem dono, grupo e outros. "Outros" não significa "um outro usuário qualquer do grupo": significa todos os demais, de fora do dono e do grupo.`
      ],
      [
        `Os tipos de permissão rwx e a leitura de uma linha de permissões`,
        `Para cada classe (dono, grupo e outros) existem três permissões: r (read, ler), w (write, escrever) e x (execute, executar). A ordem é sempre r, w, x. Na listagem detalhada, o primeiro caractere indica o tipo (d = diretório) e, em seguida, aparecem três blocos de três caracteres: dono, grupo e outros. O traço (-) no lugar da letra significa que aquela permissão não existe.`,
        `Linha de permissões drwxr-xr-x: d = diretório; rwx (dono) = pode ler, escrever e executar; r-x (grupo) = pode ler e executar; r-x (outros) = pode ler e executar. O traço no meio de r-x indica que grupo e outros não têm permissão de escrita.`,
        `Leia sempre em blocos de três, na ordem dono, grupo e outros. O traço no meio é a ausência do w. Não troque a ordem rwx nem confunda o d do início com uma permissão: ele indica o tipo do item.`
      ],
      [
        `Comandos de navegação e criação: pwd, cd e mkdir`,
        `Três comandos básicos para se movimentar e criar pastas. pwd (print working directory) imprime o diretório de trabalho: só informa em qual pasta você está agora. cd (change directory) muda de diretório: é com ele que você se move pela árvore. mkdir (make directory) cria um diretório, ou seja, uma nova pasta.`,
        `Para saber onde você está, use pwd. Para entrar numa pasta chamada documentos, use cd documentos. Para criar uma pasta nova chamada projetos, use mkdir projetos. O nome do comando é a abreviação do inglês: print working directory, change directory, make directory.`,
        `O macete é o inglês: pwd = print working directory (onde estou?), cd = change directory (ir para), mkdir = make directory (criar pasta). Lembre também que, como o Linux é case sensitive, o nome da pasta é digitado exatamente como foi criado.`
      ],
      [
        `O comando chmod: alterar permissões`,
        `chmod vem de change mode (mudar o modo). É o comando que altera as permissões rwx do dono, do grupo e dos outros, e por isso se conecta diretamente ao conteúdo da lição de permissões.`,
        `Para dar ao dono a permissão de executar um arquivo chamado script.sh, use chmod u+x script.sh (u = dono, g = grupo, o = outros). Em uma questão, quando for pedido o comando que altera permissões de arquivos, a resposta é chmod.`,
        `Não confunda chmod com cd (muda de diretório) nem com ls -l (apenas mostra as permissões). Quem altera permissões é o chmod: change mode.`
      ],
      [
        `O comando ls: o campeão de cobrança`,
        `Se você estudar um único comando de Linux, estude o ls. Ele lista o conteúdo de um diretório e tem incidência altíssima em concursos. O segredo está nos parâmetros: -l (long) mostra a listagem longa, com todos os detalhes, inclusive as permissões; -a (all) mostra todos os arquivos, até os ocultos; -t (time) ordena por tempo (data); -S (S maiúsculo, de size) ordena por tamanho, do maior para o menor.`,
        `ls -l mostra a lista detalhada, com permissões, dono e tamanho. ls -a mostra inclusive os ocultos. ls -t ordena pela data. ls -S ordena pelo tamanho, do maior para o menor. As bancas misturam os parâmetros, por exemplo ls -la (detalhes + ocultos) e ls -lt (detalhes + ordenação por data).`,
        `Parâmetros combinados somam as funções: ls -la = lista detalhada incluindo os ocultos; ls -lt = lista detalhada ordenada pela data. Cuidado com maiúscula e minúscula: o S maiúsculo ordena por tamanho. O comando ls -l é o que mostra as permissões.`
      ],
      [
        `Revisão final: o que mais cai em Linux`,
        `Fechamento do que você precisa saber para gabaritar Linux: as características (software livre e, principalmente, case sensitive); a estrutura de arquivos em árvore que começa na raiz (/); as permissões (dono, grupo e outros, com rwx); e o comando principal, o ls, especialmente ls -l, para ver todos os detalhes dos arquivos.`,
        `Use esta folha de véspera de prova: / = raiz; /bin = programas básicos; /etc = configurações; /home = usuários comuns; /root = superusuário; pwd = onde estou; cd = mudar de diretório; mkdir = criar pasta; chmod = mudar permissões; ls -l = detalhes e permissões; ls -a = ocultos; ls -t = por data; ls -S = por tamanho.`,
        `Com esses conceitos bem amarrados, o Linux deixa de ser um bicho de sete cabeças. Revise e resolva questões: a maior parte das perguntas de Linux em concurso gira em torno dos itens desta folha.`
      ]
    ],
    practice: [
      `Cite quatro características do Linux e explique por que Prova.txt e prova.txt são arquivos diferentes.`,
      `Qual é o diretório no topo da árvore do Linux? Cite os quatro diretórios que você deve conhecer e a função de cada um. Qual é a diferença entre / e /root?`,
      `Quais são as três classes de usuários e as três permissões de cada uma, na ordem em que aparecem?`,
      `Interprete a linha de permissões drwxr-xr-x.`,
      `Indique o que fazem os comandos pwd, cd, mkdir e chmod e explique a diferença entre ls -a, ls -t, ls -S e ls -l.`
    ],
    answers: [
      `Linux é software livre (código-fonte aberto), multitarefa, multiusuário e case sensitive. Por ser case sensitive, ele diferencia maiúsculas de minúsculas e trata Prova.txt e prova.txt como dois arquivos distintos.`,
      `A raiz, representada por /. Quatro diretórios: /bin (programas básicos), /etc (configurações do sistema), /home (usuários comuns) e /root (diretório do superusuário). A raiz (/) é o topo da árvore; /root é só a casa do superusuário.`,
      `Dono, grupo e outros. Para cada um: r (read, ler), w (write, escrever) e x (execute, executar), sempre nessa ordem.`,
      `O d indica diretório. O primeiro bloco (rwx) são as permissões do dono: ler, escrever e executar. O segundo (r-x) é do grupo e o terceiro (r-x), dos outros: podem ler e executar, mas não escrever (traço no lugar do w).`,
      `pwd mostra o diretório atual; cd muda de diretório; mkdir cria diretório; chmod altera permissões. No ls: -a mostra todos, inclusive ocultos; -t ordena por data; -S ordena por tamanho (do maior para o menor); -l dá a listagem longa, com detalhes e permissões.`
    ]
  });

  window.PCPE_DEEPENING[topic] = {
    1: [
      ['h', 'Por que começar pelos conceitos'],
      ['p', 'Ver "Linux" no edital assusta: a tela preta cheia de código lembra filme de hacker. Mas você não precisa dominar o sistema inteiro. Em prova, o que mais cai é um conjunto pequeno de conceitos e comandos. Antes de decorar comandos, entenda as características do Linux, que as bancas adoram cobrar em questões conceituais.'],
      ['h', 'As características principais'],
      ['ul', [
        'Software livre: o código-fonte do Linux é aberto. Isso é o que "livre" significa neste contexto, e é provavelmente a característica mais lembrada pelas bancas.',
        'Multitarefa: executa vários programas ao mesmo tempo, como outros sistemas operacionais.',
        'Multiusuário: vários usuários podem usar o sistema, cada um com seu espaço e suas permissões (o que se liga às permissões, estudadas adiante).',
        'Case sensitive: diferencia letras maiúsculas e minúsculas.'
      ]],
      ['h', 'Case sensitive em detalhe'],
      ['p', 'Esta é a característica que mais derruba candidatos. Para o Linux, um arquivo chamado Prova.txt (com P maiúsculo) é uma coisa, e um arquivo chamado prova.txt (com p minúsculo) é um arquivo completamente diferente. Os dois podem coexistir na mesma pasta. A mesma lógica vale para pastas e para comandos: o nome tem de ser digitado exatamente como existe.'],
      ['h', 'Como a banca cobra'],
      ['ul', [
        'Pede a definição de software livre: resposta com código-fonte aberto.',
        'Afirma que o Linux não diferencia maiúsculas de minúsculas: é errado, porque ele é case sensitive.',
        'Pergunta qual característica mais importa: marque case sensitive.'
      ]],
      ['h', 'Pegadinhas'],
      ['ul', [
        'Linux não ignora maiúsculas e minúsculas: Prova.txt e prova.txt são arquivos distintos.',
        'Software livre não é sinônimo de qualquer coisa "gratuita": o ponto é o código-fonte aberto.'
      ]],
      ['h', 'Resumo de revisão'],
      ['ul', [
        'Linux = software livre (código-fonte aberto), multitarefa e multiusuário.',
        'Case sensitive: maiúsculas e minúsculas fazem diferença.',
        'Prova.txt e prova.txt são arquivos diferentes.',
        'Conceitos primeiro, comandos depois.'
      ]]
    ],
    2: [
      ['h', 'A árvore invertida'],
      ['p', 'Pense numa árvore de cabeça para baixo. Tudo no sistema, absolutamente tudo, nasce de um ponto só: o diretório raiz, representado pela barra (/). Todos os outros diretórios são galhos que saem dessa raiz principal. Se os comandos são as ferramentas, a estrutura de diretórios é o mapa que mostra onde cada ferramenta será usada.'],
      ['h', 'Os quatro diretórios para a prova'],
      ['ol', [
        '/bin: onde ficam os programas básicos (binários essenciais do sistema).',
        '/etc: guarda as configurações do sistema.',
        '/home: a casa dos usuários comuns; cada usuário tem ali o seu espaço.',
        '/root: a casa do superusuário (o administrador do sistema).'
      ]],
      ['h', 'A pegadinha mais conhecida: / x /root'],
      ['p', 'Não confunda /root com a raiz /. A raiz (/) é o topo de toda a árvore, o ponto de onde todos os diretórios saem. /root é um diretório comum, o diretório pessoal do superusuário, localizado abaixo da raiz, como os demais. Uma prova pode oferecer "diretório raiz" como resposta para a pergunta sobre onde fica o superusuário: está errado.'],
      ['h', 'Como a banca cobra'],
      ['ul', [
        'Qual diretório guarda as configurações do sistema? Resposta: /etc.',
        'Qual diretório contém os arquivos dos usuários comuns? Resposta: /home.',
        'Onde ficam os programas básicos? Resposta: /bin.',
        'Qual é a casa do superusuário? Resposta: /root.',
        'Qual é o ponto de partida de toda a estrutura? Resposta: a raiz, /.'
      ]],
      ['h', 'Resumo de revisão'],
      ['ul', [
        'A estrutura é uma árvore que sempre começa na raiz (/).',
        '/bin = programas básicos; /etc = configurações; /home = usuários comuns; /root = superusuário.',
        '/root não é a raiz /.'
      ]]
    ],
    3: [
      ['h', 'Quem pode entrar em cada sala'],
      ['p', 'Depois do mapa da árvore, vem a pergunta: quem pode entrar em cada sala e o que pode fazer lá dentro? Esse é o tema das permissões, que parece complicado, mas tem uma lógica simples e cai muito em prova.'],
      ['h', 'As três classes de acesso'],
      ['p', 'Para cada arquivo ou pasta existem três níveis de acesso:'],
      ['ol', [
        'Dono (user): normalmente quem criou o arquivo.',
        'Grupo (group): uma galera específica de usuários, reunidos num grupo.',
        'Outros (others): literalmente todo o resto do mundo, quem não é o dono nem está no grupo.'
      ]],
      ['h', 'O que isso significa na prática'],
      ['p', 'Cada classe recebe as suas próprias permissões, independentes das outras. Um arquivo pode, por exemplo, deixar o dono fazer tudo, deixar o grupo apenas ler e não deixar os outros fazerem nada. É por isso que o Linux é multiusuário de verdade: o acesso é controlado por arquivo e por classe de usuário.'],
      ['h', 'Pegadinhas'],
      ['ul', [
        'Sempre três classes: dono, grupo e outros (nessa ordem).',
        '"Outros" são todos os demais usuários, fora do dono e do grupo.',
        'O dono é, normalmente, quem criou o arquivo.'
      ]],
      ['h', 'Resumo de revisão'],
      ['ul', [
        'Três níveis de acesso: dono, grupo e outros.',
        'Cada classe tem suas permissões próprias.',
        'Outros = o resto do mundo.',
        'Esta lição prepara a leitura das letras rwx na próxima.'
      ]]
    ],
    4: [
      ['h', 'As três permissões'],
      ['p', 'Para cada uma das três classes (dono, grupo e outros) existem três tipos de permissão. É só decorar as letrinhas:'],
      ['ul', [
        'r = read (ler).',
        'w = write (escrever).',
        'x = execute (executar).'
      ]],
      ['p', 'Um detalhe crucial: a ordem é sempre rwx. Quando a permissão não existe, aparece um traço (-) no lugar da letra.'],
      ['h', 'Como a linha de permissões aparece'],
      ['p', 'Na listagem detalhada de um item, a linha de permissões tem um primeiro caractere que indica o tipo do item (o d indica diretório) e, depois dele, três blocos de três caracteres, na ordem: dono, grupo e outros.'],
      ['h', 'Traduzindo drwxr-xr-x'],
      ['ol', [
        'd: é um diretório.',
        'rwx (primeiro bloco): permissões do dono. Pode ler, escrever e executar; tudo liberado.',
        'r-x (segundo bloco): permissões do grupo. Pode ler e executar, mas o traço no meio mostra que não pode escrever.',
        'r-x (terceiro bloco): permissões dos outros. Também só pode ler e executar, sem escrever.'
      ]],
      ['h', 'Passo a passo para qualquer linha'],
      ['ol', [
        'Olhe o primeiro caractere: tipo do item (d = diretório).',
        'Separe os nove caracteres seguintes em três blocos de três.',
        'Associe os blocos, na ordem, a dono, grupo e outros.',
        'Em cada bloco, leia r, w, x na ordem; cada traço é uma permissão ausente.'
      ]],
      ['h', 'Pegadinhas'],
      ['ul', [
        'O traço no meio do bloco r-x significa ausência de escrita (w), e não de leitura nem de execução.',
        'A ordem é sempre rwx, e a ordem das classes é sempre dono, grupo, outros.',
        'O d do início não faz parte dos blocos de permissão: ele indica o tipo (diretório).'
      ]],
      ['h', 'Resumo de revisão'],
      ['ul', [
        'r = ler, w = escrever, x = executar, sempre nessa ordem.',
        'Três blocos de três caracteres: dono, grupo, outros.',
        'drwxr-xr-x: diretório; dono rwx; grupo r-x; outros r-x.',
        'Traço = permissão ausente.'
      ]]
    ],
    5: [
      ['h', 'A caixa de ferramentas'],
      ['p', 'Chegou a parte prática, a que o concurseiro deve ter na ponta da língua: os comandos. Pense neles como a caixa de ferramentas para o dia da prova. Os três primeiros servem para saber onde você está, mudar de lugar e criar pastas.'],
      ['h', 'pwd (print working directory)'],
      ['p', 'Imprime o diretório de trabalho. Ele só diz em qual pasta você está naquele momento, simples e direto. O macete é pensar em inglês: print working directory, imprimir o diretório de trabalho.'],
      ['h', 'cd (change directory)'],
      ['p', 'Muda de diretório. É com ele que você se move pela árvore de diretórios, o seu "gps" dentro do sistema. Exemplo: cd documentos entra na pasta documentos (dentro da pasta atual).'],
      ['h', 'mkdir (make directory)'],
      ['p', 'É a abreviação de make directory, criar diretório. Usa-se para criar uma nova pasta, sem mistério. Exemplo: mkdir projetos cria a pasta projetos.'],
      ['h', 'Tabela de associação'],
      ['ul', [
        'pwd: onde estou? Mostra o diretório atual.',
        'cd: ir para outro diretório.',
        'mkdir: criar um diretório (pasta).'
      ]],
      ['h', 'Pegadinhas'],
      ['ul', [
        'pwd não muda de pasta, apenas mostra a pasta atual.',
        'mkdir cria pasta; não lista nem altera permissões.',
        'O Linux é case sensitive: documentos e Documentos são pastas diferentes.'
      ]],
      ['h', 'Resumo de revisão'],
      ['ul', [
        'pwd = print working directory: mostra onde você está.',
        'cd = change directory: muda de diretório.',
        'mkdir = make directory: cria diretório.',
        'O macete de todos é o nome em inglês.'
      ]]
    ],
    6: [
      ['h', 'chmod: change mode'],
      ['p', 'chmod significa change mode, mudar o modo. É o comando que altera as permissões r, w e x do dono, do grupo e dos outros. Ele conecta com o que você aprendeu sobre permissões: o ls -l mostra as permissões; o chmod as modifica.'],
      ['h', 'Exemplo de uso'],
      ['p', 'Complemento de uso: para dar ao dono a permissão de executar o arquivo script.sh, digite chmod u+x script.sh. A letra u representa o dono (user), g o grupo e o os outros; o sinal + acrescenta uma permissão e o sinal - a retira. Para retirar a escrita do grupo, por exemplo: chmod g-w arquivo.txt.'],
      ['h', 'Onde o chmod entra no raciocínio de prova'],
      ['ol', [
        'A questão descreve uma permissão e pergunta qual comando a altera: chmod.',
        'A questão mostra uma linha como drwxr-xr-x e pergunta como dar escrita ao grupo: o comando que altera é o chmod.',
        'A questão mistura chmod com cd, mkdir e pwd: só o chmod trata de permissões.'
      ]],
      ['h', 'Pegadinhas'],
      ['ul', [
        'chmod não lista nada: quem lista é o ls.',
        'chmod não muda de pasta: quem muda é o cd.',
        'chmod = change mode (modo = conjunto de permissões).'
      ]],
      ['h', 'Resumo de revisão'],
      ['ul', [
        'chmod = change mode.',
        'Altera as permissões rwx de dono, grupo e outros.',
        'ls -l mostra as permissões; chmod as altera.'
      ]]
    ],
    7: [
      ['h', 'O ls é o campeão de cobrança'],
      ['p', 'Se existisse um único comando que você precisasse estudar para a prova de Linux, seria este. O ls é, de longe, o comando mais cobrado nos concursos, com incidência altíssima. Sua função é simples: listar o que há dentro de um diretório (ls vem de list, listar). O grande segredo não é o ls sozinho, mas os seus parâmetros.'],
      ['h', 'Os quatro parâmetros para decorar'],
      ['ul', [
        '-l (long, longo): mostra a lista com todos os detalhes, inclusive as permissões.',
        '-a (all, todos): mostra todos os arquivos, até os ocultos.',
        '-t (time, tempo): ordena pela data.',
        '-S (S maiúsculo, de size, tamanho): ordena pelo tamanho, do maior para o menor.'
      ]],
      ['h', 'As combinações que a banca faz'],
      ['p', 'As bancas gostam de fazer uma salada com os parâmetros, por exemplo ls -la ou ls -lt. Ao combinar, você soma as funções.'],
      ['ul', [
        'ls -la: lista detalhada (-l) incluindo os arquivos ocultos (-a).',
        'ls -lt: lista detalhada (-l) ordenada pela data (-t).'
      ]],
      ['h', 'Raciocínio para resolver'],
      ['ol', [
        'Separe a questão em letras: cada letra depois do hífen é um parâmetro.',
        'Associe cada letra à sua função (l = detalhes e permissões; a = ocultos; t = data; S = tamanho).',
        'Some as funções para chegar ao resultado do comando.'
      ]],
      ['h', 'Pegadinhas'],
      ['ul', [
        'O -S (maiúsculo) ordena por tamanho. O -s minúsculo é outro parâmetro, que exibe o tamanho de cada arquivo em blocos, e não ordena; não troque um pelo outro.',
        'O -l é o que mostra as permissões; sem ele, o ls lista só os nomes.',
        'O -a é o que mostra os ocultos; o ls simples não os exibe.',
        '-t ordena pela data, e não pelo tamanho; -S ordena pelo tamanho, e não pela data.'
      ]],
      ['h', 'Resumo de revisão'],
      ['ul', [
        'ls = listar o conteúdo de um diretório; é o comando mais cobrado.',
        '-l = detalhes e permissões; -a = todos (ocultos); -t = por data; -S = por tamanho, do maior ao menor.',
        'ls -la = detalhes + ocultos; ls -lt = detalhes + ordenação por data.'
      ]]
    ],
    8: [
      ['h', 'A folha de revisão de véspera'],
      ['p', 'Esta é a folhinha que você deve levar para a véspera da prova. Os pontos para gabaritar Linux são quatro: características, estrutura de diretórios, permissões e comandos.'],
      ['ol', [
        'Características principais do Linux: é software livre (código-fonte aberto) e, o mais importante de todos, case sensitive.',
        'Estrutura de arquivos: uma árvore que sempre começa na raiz, a barra (/). Foque em /bin (programas básicos), /etc (configurações), /home (usuários comuns) e /root (superusuário). Não confunda /root com /.',
        'Permissões: seguem a lógica dono, grupo e outros, cada um com rwx (ler, escrever, executar), nessa ordem.',
        'Comandos: pwd (onde estou), cd (mudar de diretório), mkdir (criar pasta), chmod (mudar permissões) e, acima de todos, o ls, principalmente o ls -l, para ver todos os detalhes dos arquivos.'
      ]],
      ['h', 'Mapa de decisão rápido'],
      ['ul', [
        'A questão fala de maiúsculas e minúsculas? Case sensitive.',
        'Fala de código-fonte aberto? Software livre.',
        'Fala de configurações do sistema? /etc.',
        'Fala de pastas dos usuários comuns? /home.',
        'Fala da casa do superusuário? /root (não é a raiz /).',
        'Mostra letras rwx e traços? Leia em blocos de três: dono, grupo e outros.',
        'Pede o comando que altera permissões? chmod.',
        'Pede listar o diretório com detalhes? ls -l; com ocultos? ls -a; por data? ls -t; por tamanho? ls -S.'
      ]],
      ['h', 'Exemplo final: drwxr-xr-x'],
      ['p', 'Primeiro caractere d: diretório. Primeiro bloco rwx: o dono lê, escreve e executa. Segundo bloco r-x: o grupo lê e executa, sem escrever. Terceiro bloco r-x: os outros também leem e executam, sem escrever.'],
      ['h', 'Pegadinhas finais'],
      ['ul', [
        'Prova.txt e prova.txt são arquivos distintos.',
        'Raiz (/) e /root são coisas diferentes.',
        'No ls, S maiúsculo é tamanho, t é tempo, a é todos, l é longo.'
      ]],
      ['h', 'Resumo de revisão'],
      ['ul', [
        'Software livre + case sensitive (o mais importante).',
        'Árvore com raiz /; /bin, /etc, /home, /root.',
        'Dono, grupo e outros; r, w, x nessa ordem.',
        'pwd, cd, mkdir, chmod e ls (principalmente ls -l).'
      ]]
    ]
  };

  window.PCPE_QUESTOES[topic] = [
    {
      text: 'Quando se afirma que o Linux é um software livre, quer-se dizer que:',
      options: [
        'Ele funciona sem a necessidade de usuários cadastrados.',
        'Ele só pode ser usado por um usuário de cada vez.',
        'O seu código-fonte é aberto.',
        'Ele não diferencia maiúsculas de minúsculas.'
      ],
      correct: 2,
      exp: 'Software livre, no Linux, quer dizer código-fonte aberto. O Linux é multiusuário (a segunda alternativa está errada), nada tem a ver com dispensar usuários e, ao contrário da última alternativa, é case sensitive.'
    },
    {
      text: 'Em um diretório do Linux existem os arquivos Prova.txt e prova.txt. Considerando as características do sistema, é correto afirmar que:',
      options: [
        'São arquivos diferentes, porque o Linux é case sensitive.',
        'São o mesmo arquivo, porque o Linux ignora maiúsculas e minúsculas.',
        'Não podem coexistir na mesma pasta, porque têm o mesmo nome.',
        'O segundo apaga o primeiro automaticamente ao ser criado.'
      ],
      correct: 0,
      exp: 'Case sensitive: o Linux diferencia maiúsculas de minúsculas, então Prova.txt e prova.txt são arquivos completamente diferentes e podem coexistir. As demais alternativas supõem que o sistema ignora a diferença.'
    },
    {
      text: 'Na estrutura de diretórios do Linux, é correto afirmar que:',
      options: [
        'A raiz da árvore é o diretório /root.',
        'Todos os diretórios nascem do diretório raiz, representado por uma barra (/).',
        'O diretório /home guarda as configurações do sistema.',
        'O diretório /bin é a casa dos usuários comuns.'
      ],
      correct: 1,
      exp: 'A estrutura é uma árvore que nasce da raiz, a barra (/). /root é a casa do superusuário (não a raiz), as configurações ficam em /etc e os usuários comuns usam /home; /bin guarda os programas básicos.'
    },
    {
      text: 'Qual diretório do Linux guarda as configurações do sistema?',
      options: [
        '/bin',
        '/home',
        '/root',
        '/etc'
      ],
      correct: 3,
      exp: '/etc guarda as configurações do sistema. /bin contém programas básicos, /home é a casa dos usuários comuns e /root é a casa do superusuário.'
    },
    {
      text: 'Sobre os diretórios / (raiz) e /root, é correto afirmar que:',
      options: [
        'São diferentes: / é o topo da árvore e /root é o diretório do superusuário.',
        'São o mesmo diretório, com nomes diferentes.',
        '/root é o diretório de todos os usuários comuns.',
        '/ é o diretório pessoal do superusuário.'
      ],
      correct: 0,
      exp: 'A raiz (/) é o ponto de onde saem todos os diretórios; /root é a casa do superusuário. Não se confundem. Os usuários comuns ficam em /home.'
    },
    {
      text: 'Para cada arquivo ou pasta, o Linux define permissões para três classes de usuários e três tipos de permissão. Quais são, na ordem em que aparecem?',
      options: [
        'Classes: dono, grupo e todos; permissões: ler, apagar e criar.',
        'Classes: administrador, grupo e visitantes; permissões: x, w e r.',
        'Classes: dono, grupo e outros; permissões: r (ler), w (escrever) e x (executar).',
        'Classes: grupo, dono e outros; permissões: w, r e x.'
      ],
      correct: 2,
      exp: 'As classes são dono, grupo e outros, e as permissões r (read), w (write) e x (execute), sempre na ordem rwx. As demais alternativas inventam classes ou trocam a ordem.'
    },
    {
      text: 'Ao listar um item, aparece a linha de permissões drwxr-xr-x. É correto interpretar que:',
      options: [
        'É um arquivo comum e todos podem escrever nele.',
        'É um diretório; o dono pode ler, escrever e executar, e grupo e outros podem ler e executar, mas não escrever.',
        'É um diretório; só o dono pode ler, e grupo e outros não têm acesso.',
        'É um diretório; dono, grupo e outros podem ler, escrever e executar.'
      ],
      correct: 1,
      exp: 'd indica diretório; rwx é o dono (tudo liberado); r-x é o grupo e r-x são os outros (leem e executam; o traço no lugar do w indica ausência de escrita). As demais alternativas leem os blocos de modo incorreto.'
    },
    {
      text: 'Associe o comando à sua função: pwd, cd e mkdir correspondem, respectivamente, a:',
      options: [
        'Criar diretório, mudar de diretório e mostrar o diretório atual.',
        'Mudar de diretório, mostrar o diretório atual e alterar permissões.',
        'Listar arquivos, criar diretório e mudar de diretório.',
        'Mostrar o diretório atual (print working directory), mudar de diretório (change directory) e criar diretório (make directory).'
      ],
      correct: 3,
      exp: 'pwd = print working directory (mostra a pasta atual), cd = change directory (muda de diretório) e mkdir = make directory (cria pasta). As demais trocam as funções ou misturam comandos que não pertencem ao trio.'
    },
    {
      text: 'O comando chmod, no Linux, serve para:',
      options: [
        'Alterar as permissões (r, w, x) de dono, grupo e outros.',
        'Mudar de diretório.',
        'Mostrar o diretório de trabalho atual.',
        'Listar os arquivos ocultos de um diretório.'
      ],
      correct: 0,
      exp: 'chmod significa change mode e altera as permissões rwx. Mudar de diretório é cd, mostrar o diretório atual é pwd e listar ocultos é ls -a.'
    },
    {
      text: 'Sobre o comando ls e seus parâmetros, é correto afirmar que:',
      options: [
        'ls -a ordena os arquivos por data.',
        'ls -S exibe a lista detalhada com as permissões.',
        'ls -lt exibe a lista detalhada (long) ordenada pela data (time).',
        'ls -l mostra apenas os arquivos ocultos.'
      ],
      correct: 2,
      exp: '-l é a listagem longa (detalhes e permissões) e -t ordena por tempo, de modo que ls -lt une os dois. -a mostra todos (inclusive ocultos), e não ordena; -S ordena por tamanho; e -l não se limita a ocultos.'
    }
  ];
})();
