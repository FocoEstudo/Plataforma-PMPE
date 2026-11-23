(function () {
  'use strict';
  window.PCPE_TOPIC_GUIDES = window.PCPE_TOPIC_GUIDES || {};
  window.PCPE_DEEPENING = window.PCPE_DEEPENING || {};
  window.PCPE_QUESTOES = window.PCPE_QUESTOES || {};
  const topic = 'Sistema operacional Windows';
  const base = window.PCPE_TOPIC_GUIDES[topic] || {};
  window.PCPE_TOPIC_GUIDES[topic] = Object.assign({}, base, {
    lessons: [
      [
        `Aula 1 · Área de trabalho, barra de tarefas e menu Iniciar`,
        `A área de trabalho (desktop) é a tela principal do Windows, onde ficam os ícones, que são atalhos para aplicativos. Na parte inferior fica a barra de tarefas: os programas abertos aparecem nela como retângulos, os atalhos fixados ficam num lado, o menu Iniciar fica na ponta esquerda e, na ponta direita, ficam o relógio e a bandeja, onde alguns programas permanecem como ícones. Para abrir um aplicativo da área de trabalho, você dá um duplo clique no ícone.`,
        `Para abrir um programa que não tem atalho, clique no menu Iniciar e comece a digitar as primeiras letras do nome. O menu vai filtrando o conteúdo: ao digitar "cal", aparecem a Calculadora e o LibreOffice Calc. Você navega com as setas para cima e para baixo e aperta Enter para abrir o aplicativo escolhido.`,
        `Cuidado para não confundir: o ícone da área de trabalho abre com duplo clique, mas o botão do programa na barra de tarefas serve para trazer de volta uma janela minimizada. Digitar as primeiras letras no menu Iniciar costuma ser mais produtivo do que procurar pasta por pasta.`
      ],
      [
        `Aula 1 · Anatomia de uma janela`,
        `Toda janela do Windows tem os mesmos elementos, e as bancas cobram o nome e a função de cada um. No topo ficam a barra de título, que identifica o programa aberto, e os três botões: fechar, maximizar/restaurar e minimizar. Logo abaixo da barra de título fica a barra de menus, com acesso às principais funções do programa. Nas bordas direita e inferior ficam as barras de rolagem e, em alguns aplicativos, a barra de status, na parte inferior, com informações sobre o aplicativo.`,
        `Tomando a janela do Bloco de Notas como modelo: o botão Fechar encerra o aplicativo e ele deixa de ocupar a memória; o botão Maximizar faz o programa ocupar toda a área de trabalho e, depois de maximizado, o botão que fica na mesma posição o devolve ao tamanho anterior; o botão Minimizar não fecha o programa, que continua na memória, mas ele deixa de ocupar a área visível da tela.`,
        `A pegadinha clássica é trocar "minimizar" por "fechar". Minimizar esconde a janela, mas o programa continua aberto e usando memória; fechar encerra o programa. Para trazer uma janela minimizada de volta, clique no retângulo dela na barra de tarefas.`
      ],
      [
        `Aula 1 · Manipulando janelas: tamanho, posição e lado a lado`,
        `Você controla uma janela com o mouse. Para mudar o tamanho, posicione o ponteiro sobre uma borda (ou sobre um canto) até ele virar uma seta de duas pontas, mantenha o botão pressionado e arraste. Para mover a janela pela área de trabalho, clique na barra de título e arraste. Um duplo clique na barra de título maximiza a janela e outro duplo clique a restaura à posição original.`,
        `Para trabalhar com dois programas ao mesmo tempo, mantenha a tecla Windows pressionada e use a seta para a esquerda ou para a direita: a janela ocupa exatamente a metade da tela e, ao soltar a tecla Windows, o sistema mostra as janelas abertas que podem ocupar a outra metade; basta clicar numa delas. Para quatro janelas, arraste cada uma pela barra de título até um canto da tela: ela ocupa um quadrante. Se você não quiser nenhuma das opções oferecidas para preencher o espaço, pressione Esc.`,
        `Os quadrantes ficam mais úteis em monitores de alta resolução; em resolução HD a área útil de cada janela fica pequena. Na prova, guarde que o atalho para meia tela é a tecla Windows com as setas direcionais esquerda ou direita, e que arrastar a barra de título para o canto cria o quadrante.`
      ],
      [
        `Aula 1 · Atalhos de teclado para janelas e desktop`,
        `Os atalhos mais cobrados são os que usam a tecla Alt e a tecla Windows. Alt+Tab alterna entre janelas abertas; Alt+F4 fecha o programa em foco. Com a tecla Windows: Win+L bloqueia a tela; Win+D minimiza todas as janelas e mostra a área de trabalho; Win+seta para cima maximiza; Win+seta para baixo restaura e, se pressionada de novo, minimiza; Win+P alterna os modos de exibição (útil com projetor ou segundo monitor); Win+E abre o gerenciador de arquivos; Win+R abre a caixa Executar.`,
        `Como funciona o Alt+Tab: você segura Alt e dá toques em Tab; a cada toque o destaque (uma borda branca) passa para a próxima janela da lista; quando o destaque estiver na janela desejada, você solta Alt e ela vem para o primeiro plano. Com Win+P, aparece um menu na direita para escolher entre projetar somente na tela do computador, duplicar ou estender. Com Win+R você digita cmd e aperta Enter para abrir a interface de linha de comando, parecida com o MS-DOS.`,
        `Um toque só na tecla Windows (sem combinar) abre o menu Iniciar. Se você usar Alt+F4 quando não houver nenhuma janela com foco, aparece a opção de desligar o computador; para desistir, pressione Esc. Win+D só minimiza e mostra a área de trabalho, não fecha nada.`
      ],
      [
        `Aula 2 · O que é o Windows: origem, nome e versões`,
        `O Windows é um sistema operacional desenvolvido pela Microsoft, empresa fundada por Bill Gates. O nome vem do inglês "window" (janela): os sistemas antigos funcionavam por linhas de comando, numa tela preta em que você digitava os comandos; o Windows trouxe interface gráfica, com botões e menus, e os programas passaram a ser exibidos em janelas. Por isso o logotipo da empresa lembra uma janelinha colorida.`,
        `A primeira versão é de 1985 (Windows 1). Depois vieram o Windows 3.1, o 95, o 98, o XP, o Vista, o 7, o 8.1, o 10 e o 11. Hoje as bancas focam principalmente no Windows 10 e no Windows 11, e boa parte do que vale para o 11 vale também para o 10. O Windows é o sistema mais usado em computadores pessoais (PC, de personal computer): desktops (monitor, gabinete, teclado e mouse) e notebooks. Existe também uma versão para computadores de grande porte, os servidores, o Windows Server, e já existiu uma versão para celular, o Windows Phone.`,
        `Se a questão disser que o Windows pode ser usado em várias plataformas (notebook, desktop, servidor), a afirmação é verdadeira. Questões também tratam Windows 10 e Windows 11 como sistemas operacionais: não os confunda com navegadores, hardware ou periféricos.`
      ],
      [
        `Aula 2 · Características do Windows (software básico, gerenciador, interface)`,
        `O Windows é um software básico: isso não quer dizer simples ou limitado, e sim essencial, a base para os demais programas funcionarem. Sem sistema operacional, o computador não tem utilidade: você não salva arquivos nem usa outros programas. Ele é também um gerenciador, que atua como meio de campo entre o usuário, os programas e o hardware (a parte física: memória, processador, teclado, mouse, impressora, pen drive, monitor). Por isso ele é descrito como uma interface entre o usuário e a máquina.`,
        `Quando você conecta um pen drive e já aparece uma janela mostrando os arquivos, é o sistema operacional que reconheceu o dispositivo e sabe o que fazer: isso é gerenciamento. Aparece em prova a mesma ideia com outras palavras: gerenciador de tarefas, de memória, de dispositivos. Onde você vir "gerenciar recursos" (memória, processamento, dispositivos de entrada e saída) ligado ao sistema operacional, a tendência é que o item esteja correto.`,
        `Software básico ≠ software simples. Hardware é tudo o que é físico; Windows é software. Windows 10 e 11 não são navegadores nem periféricos.`
      ],
      [
        `Aula 2 · Multiusuário, multitarefa e sistema proprietário`,
        `O Windows é multiusuário: um mesmo computador pode ter uma conta para cada pessoa, para que os arquivos de um não interfiram nos do outro. O usuário administrador pode tudo: acessa todas as configurações, instala e desinstala programas e cria usuários; o primeiro usuário do sistema obrigatoriamente é administrador, para poder criar os demais. O usuário padrão é limitado: ao tentar desinstalar um programa, por exemplo, o sistema avisa que é preciso status de administrador. Ele só faz configurações que afetam o próprio usuário, como mudar a imagem de fundo.`,
        `O Windows também é multitarefa: permite abrir vários programas ao mesmo tempo (texto, planilha, e-mail). Os primeiros sistemas eram monotarefa: um programa por vez, e para abrir outro era preciso fechar o primeiro. Por fim, o Windows é um sistema proprietário: pertence à Microsoft, tem código fonte fechado (a "receita" de como foi feito, guardada como a fórmula da Coca-Cola) e é pago, com licença de uso chamada copyright. O Linux, ao contrário, tem código fonte aberto.`,
        `Cuidado com a negação e com o alcance da frase: usuário padrão tem acesso restrito a funções que impactam outros usuários (configurações globais), não "a funções que não impactam outros usuários". Nem tudo da Microsoft é pago: o navegador Edge é gratuito, mas o Windows e o Excel exigem licença.`
      ],
      [
        `Aula 2 · Questões resolvidas sobre Windows`,
        `As questões trabalhadas usam as características que você viu: sistema operacional como software básico, intermediário e gerenciador, multiusuário (administrador x padrão), multitarefa e licença proprietária. O método é ler a frase por inteiro, conferir cada parte contra essas características e só então decidir.`,
        `Questão da AOCP (2019): "Em um computador, sistemas com Windows 10 ou Windows 11 são considerados..." As opções eram sistemas operacionais, navegadores de internet, hardware e dispositivos periféricos. A resposta é sistemas operacionais; hardware e periféricos são físicos, e navegadores são programas como Chrome, Edge e Firefox.`,
        `Na questão do usuário padrão, uma única negação inverte o sentido da frase e torna o item errado. Leia as palavras pequenas.`
      ]
    ],
    practice: [
      `Cite os elementos de uma janela do Windows (barra de título, botões, bordas, barras de rolagem, barra de status, barra de menus) e explique a diferença entre fechar e minimizar.`,
      `Descreva três formas de organizar janelas lado a lado ou em quadrantes e dê os atalhos de teclado correspondentes.`,
      `Liste os atalhos Alt+Tab, Alt+F4, Win+L, Win+D, Win+P, Win+E e Win+R e diga o que cada um faz.`,
      `Por que o Windows é chamado de software básico e de gerenciador? Dê exemplos do que ele gerencia.`,
      `Diferencie administrador de usuário padrão, monotarefa de multitarefa e sistema proprietário de código aberto, citando o caso do Windows.`
    ],
    answers: [
      `A barra de título identifica o programa; no topo ficam os botões fechar, maximizar/restaurar e minimizar; as bordas permitem redimensionar; as barras de rolagem ficam nas margens direita e inferior; a barra de status, em alguns aplicativos, fica na parte inferior; a barra de menus fica abaixo do título. Fechar encerra o programa e libera a memória; minimizar só oculta a janela, que continua aberta e na memória.`,
      `Win+seta esquerda ou direita: a janela ocupa metade da tela e o sistema oferece outras janelas para a outra metade. Arrastar a barra de título para um canto: a janela ocupa um quadrante (até quatro janelas). Esc: cancela as opções oferecidas para preencher o espaço.`,
      `Alt+Tab alterna entre janelas; Alt+F4 fecha o programa em foco (sem janela com foco, aparece a opção de desligar); Win+L bloqueia a tela; Win+D minimiza tudo e mostra a área de trabalho; Win+P escolhe o modo de exibição (somente o computador, duplicar, estender); Win+E abre o gerenciador de arquivos; Win+R abre a caixa Executar.`,
      `É software básico porque é essencial: sem ele o computador não funciona nem executa outros programas. É gerenciador porque controla memória, processador, dispositivos de entrada e saída (mouse, teclado, impressora, pen drive) e a execução dos programas, servindo de interface entre usuário e máquina.`,
      `Administrador pode tudo (instalar, desinstalar, criar usuários, alterar configurações globais); o primeiro usuário é obrigatoriamente administrador. Usuário padrão é limitado e só altera o que afeta a própria conta. Monotarefa executa um programa por vez; multitarefa, vários. O Windows é multitarefa, proprietário (código fechado), pago e com licença copyright; o Linux tem código aberto.`
    ]
  });

  window.PCPE_DEEPENING[topic] = {
    1: [
      ['h', `Aula 1 · Área de trabalho, barra de tarefas e menu Iniciar`],
      ['p', `A interface gráfica do Windows tem alguns elementos fixos que você precisa saber nomear. A tela principal é a área de trabalho, também chamada de desktop. Nela ficam ícones, que são atalhos para aplicativos e arquivos. Na parte inferior da tela fica a barra de tarefas, e é dela que vêm a maioria das perguntas.`],
      ['h', `Os elementos da barra de tarefas`],
      ['ul', [
        `Programas abertos: aparecem como retângulos na barra de tarefas. Ao abrir o Mozilla Firefox, por exemplo, surge automaticamente um retângulo identificando que ele está aberto.`,
        `Atalhos ou programas fixados: ficam num dos lados da barra, já prontos para abrir.`,
        `Menu Iniciar: botão na ponta esquerda da barra de tarefas, nesse exemplo.`,
        `Relógio e bandeja: na ponta direita; a bandeja guarda ícones de programas que ficam em execução.`
      ]],
      ['h', `Como abrir programas`],
      ['p', `Os aplicativos que têm ícone na área de trabalho abrem com um duplo clique. Os que não têm atalho você encontra pelo menu Iniciar, e há dois caminhos: procurar com o mouse nas pastinhas do menu até localizar o aplicativo, ou, e este é o mais produtivo, começar a digitar as primeiras letras do nome do programa. À medida que você digita, o menu vai filtrando o conteúdo e mostrando só o que combina com o que você escreveu.`],
      ['h', `Exemplo: digitando "cal"`],
      ['p', `Ao digitar "cal" no menu Iniciar, aparecem a Calculadora e o LibreOffice Calc, porque ambos têm essas letras no nome. O truque do teclado: use as setinhas para cima e para baixo para navegar entre os resultados, localize o aplicativo desejado e pressione Enter. O programa é inicializado sem que você precise tocar no mouse.`],
      ['h', `Um toque só na tecla Windows`],
      ['p', `O simples toque na tecla Windows (sem combiná-la com outra) também abre o menu Iniciar. Guarde isso: a tecla sozinha abre o menu, e combinada com outras ela vira uma família de atalhos que você vê mais adiante.`],
      ['h', `Pegadinhas`],
      ['ul', [
        `Abrir um ícone da área de trabalho: duplo clique. Não é "clique simples".`,
        `Um programa aberto aparece como retângulo na barra de tarefas; se estiver minimizado, clicar no retângulo o traz de volta.`,
        `A bandeja fica na ponta oposta ao menu Iniciar, junto do relógio.`
      ]],
      ['h', `Resumo de revisão`],
      ['ul', [
        `Área de trabalho = desktop; ícones = atalhos; duplo clique abre.`,
        `Barra de tarefas: programas abertos (retângulos), atalhos fixados, menu Iniciar, relógio e bandeja.`,
        `Menu Iniciar: digite as primeiras letras, o menu filtra; setas para navegar e Enter para abrir ("cal" mostra Calculadora e LibreOffice Calc).`,
        `Tecla Windows sozinha abre o menu Iniciar.`
      ]]
    ],
    2: [
      ['h', `Aula 1 · Anatomia de uma janela`],
      ['p', `Todo programa gráfico do Windows aparece dentro de uma janela, e todas as janelas seguem a mesma anatomia. Tomando como modelo a janela do Bloco de Notas, você precisa reconhecer cada parte e saber para que ela serve.`],
      ['h', `Os botões do canto superior`],
      ['ul', [
        `Fechar: encerra o aplicativo. O programa deixa de ocupar espaço na memória.`,
        `Maximizar: faz o programa ocupar toda a área de trabalho. Depois de maximizado, o botão que fica na mesma posição devolve a janela à visualização anterior (restaurar).`,
        `Minimizar: não fecha o programa. Ele continua aberto e na memória, mas deixa de ocupar área visível da área de trabalho.`
      ]],
      ['h', `As demais partes`],
      ['ul', [
        `Barra de título: no topo, identifica qual programa está aberto. É por ela que você arrasta a janela.`,
        `Bordas: nas margens direita, inferior, esquerda e superior. Servem para redimensionar a janela.`,
        `Barras de rolagem: ficam ao lado das margens direita e inferior; permitem ver a parte do conteúdo que não cabe na janela.`,
        `Barra de status: em alguns aplicativos, na parte inferior, mostra informações sobre o aplicativo.`,
        `Barra de menus: logo abaixo da barra de título, dá acesso às principais funções do programa.`
      ]],
      ['h', `Demonstração do que cada botão faz`],
      ['p', `Ao clicar em Fechar, o programa some e não ocupa mais a memória. Ao clicar em Maximizar, ele ocupa toda a área de trabalho; clicando no mesmo botão de novo, a janela volta à visualização normal. Ao clicar em Minimizar, a janela deixa de ocupar espaço na área de trabalho, porém continua aberta e ocupando memória; para trazê-la de volta basta clicar no retângulo dela na barra de tarefas, e ela volta a ser exibida.`],
      ['h', `Como as bancas cobram`],
      ['p', `A cobrança típica é trocar a função de um botão. Se a questão disser que minimizar "encerra o programa" ou "libera a memória", está errada: quem encerra é o botão Fechar. Se disser que minimizar mantém o programa em execução sem ocupar a área visível, está correta.`],
      ['h', `Resumo de revisão`],
      ['ul', [
        `Fechar encerra e libera memória; minimizar só oculta (continua na memória); maximizar ocupa toda a área de trabalho e o mesmo botão restaura.`,
        `Barra de título = nome do programa; bordas = redimensionar; barras de rolagem = margens direita e inferior; barra de status = informações (parte inferior, em alguns aplicativos); barra de menus = funções principais, abaixo do título.`,
        `Janela minimizada volta com um clique no retângulo da barra de tarefas.`
      ]]
    ],
    3: [
      ['h', `Aula 1 · Manipulando janelas`],
      ['p', `Além dos botões, você pode controlar a janela com o mouse e com atalhos. Isso é importante tanto para a prática quanto para a prova, porque as bancas descrevem a ação e pedem o resultado.`],
      ['h', `Mudar o tamanho`],
      ['ol', [
        `Posicione o ponteiro do mouse sobre a margem (por exemplo, a borda direita).`,
        `O ponteiro se transforma numa seta de duas pontas.`,
        `Mantenha o botão do mouse pressionado e arraste para um lado ou para o outro, para aumentar ou diminuir o tamanho.`,
        `O mesmo vale para as outras bordas. Se você posicionar o ponteiro bem no canto da janela, ele fica com uma seta diferente, e você aumenta ou diminui a largura e a altura ao mesmo tempo.`
      ]],
      ['h', `Mover a janela`],
      ['p', `Para movimentar a janela pela área de trabalho, clique na barra de título (onde aparece o nome do programa) e arraste. Um atalho da barra de título: o duplo clique maximiza a janela, e outro duplo clique a restaura à posição original.`],
      ['h', `Janelas lado a lado com o teclado`],
      ['ol', [
        `Deixe dois programas abertos, por exemplo o LibreOffice Calc e o Bloco de Notas.`,
        `Mantenha a tecla Windows pressionada e pressione a seta para a esquerda: a janela ocupa exatamente a metade da tela.`,
        `Ao soltar a tecla Windows, o sistema mostra opções de janelas que podem ocupar a outra metade.`,
        `Clique na janela desejada, e ela ocupa a outra metade.`
      ]],
      ['p', `É muito útil quando você precisa, por exemplo, de uma janela do navegador e de uma de editor de texto ou de planilha abertas juntas.`],
      ['h', `Quatro janelas: os quadrantes`],
      ['p', `Para deixar quatro janelas abertas ao mesmo tempo, clique na barra de título de uma janela, mantenha o botão do mouse pressionado e arraste até o canto superior direito: ao soltar, a janela ocupa exatamente um quadrante da tela. Se você não quiser nenhuma das opções oferecidas para preencher o restante, pressione a tecla Esc. Repita o procedimento arrastando outra janela para o canto inferior direito, e assim por diante, até ter até quatro janelas, cada uma num quadrante (a do gerenciador de arquivos pode ir para um canto também).`],
      ['p', `Esse recurso é mais interessante em monitor de alta resolução. Numa resolução HD, a área que sobra para cada programa trabalhar fica muito pequena.`],
      ['h', `Pegadinhas`],
      ['ul', [
        `Meia tela: tecla Windows + seta esquerda ou direita. Quadrante: arrastar a barra de título até o canto.`,
        `Esc cancela as sugestões para ocupar o restante da tela; não fecha a janela.`,
        `Mover: arrasta-se a barra de título; redimensionar: arrasta-se a borda ou o canto.`
      ]],
      ['h', `Resumo de revisão`],
      ['ul', [
        `Redimensionar: ponteiro na borda (seta de duas pontas) e arrastar; no canto, altera largura e altura juntas.`,
        `Mover: arrastar pela barra de título; duplo clique na barra maximiza e restaura.`,
        `Lado a lado: Windows + seta esquerda/direita; quadrantes: arrastar para o canto; Esc dispensa as sugestões.`
      ]]
    ],
    4: [
      ['h', `Aula 1 · Atalhos de teclado`],
      ['p', `Os atalhos de teclado do Windows dividem-se em dois grupos: os que usam Alt e os que usam a tecla Windows (a tecla com o desenho da janelinha). Memorize a função exata de cada um; as bancas costumam trocar a função de um pela de outro.`],
      ['h', `Atalhos com Alt`],
      ['ul', [
        `Alt+Tab: alterna entre as janelas abertas. Mantenha Alt pressionada e dê toques na tecla Tab; cada toque passa o destaque (uma borda branca ao redor da janela) para a próxima da lista. Ao chegar na janela que você quer, solte Alt, e a aplicação vai para o primeiro plano.`,
        `Alt+F4: fecha o programa em foco. Segure Alt e dê um toque em F4.`
      ]],
      ['h', `Atalhos com a tecla Windows`],
      ['ul', [
        `Win+L: bloqueia a tela do computador.`,
        `Win+D: minimiza todas as aplicações e mostra a área de trabalho.`,
        `Win+seta para cima: maximiza a janela. Win+seta para baixo: restaura; se você pressionar de novo, minimiza.`,
        `Win+seta para a esquerda ou para a direita: a janela ocupa metade da tela.`,
        `Win+P: alterna os modos de exibição, muito útil quando há projetor ou segundo monitor. Aparece um menu na direita para você escolher, por exemplo, projetar somente na tela do computador, duplicar ou estender.`,
        `Win+E: abre o gerenciador de arquivos (o Windows Explorer).`,
        `Win+R: abre a caixa Executar. Nela, digitar cmd e apertar Enter abre o prompt de comando, a interface de linha de comando do Windows, muito semelhante ao MS-DOS usado décadas atrás.`,
        `Um toque só na tecla Windows: abre o menu Iniciar.`
      ]],
      ['h', `Sequência de teste: maximizar, restaurar e minimizar`],
      ['p', `Com a janela no modo normal, Win+seta para cima a faz ocupar toda a área de trabalho. Win+seta para baixo a restaura. Pressionando Win+seta para baixo mais uma vez, ela é minimizada. Memorize a sequência: para cima maximiza; para baixo, na primeira vez restaura e, na segunda, minimiza.`],
      ['h', `Alt+F4 e o desligamento`],
      ['p', `Alt+F4 fecha a janela em foco. Se você fechar todas as janelas e pressionar Alt+F4 de novo, sem nenhuma janela com foco, aparece a opção de desligar o computador. Para desistir, pressione Esc.`],
      ['h', `Pegadinhas`],
      ['ul', [
        `Win+D não fecha os programas, apenas minimiza tudo e mostra a área de trabalho.`,
        `Alt+Tab alterna entre janelas; Alt+F4 fecha. Não os troque.`,
        `Win+L bloqueia a tela; Win+E abre o gerenciador de arquivos; Win+R abre a caixa Executar.`,
        `Outros sistemas operacionais, como o macOS e o Linux, têm manipulação de janelas bastante semelhante.`
      ]],
      ['h', `Resumo de revisão`],
      ['ul', [
        `Alt+Tab = alternar janelas; Alt+F4 = fechar o programa (sem janela em foco, oferece desligar; Esc cancela).`,
        `Win+L = bloquear; Win+D = mostrar a área de trabalho; Win+↑ = maximizar; Win+↓ = restaurar e depois minimizar; Win+←/→ = meia tela.`,
        `Win+P = modos de exibição (computador, duplicar, estender); Win+E = gerenciador de arquivos; Win+R = Executar (cmd abre o prompt de comando).`
      ]]
    ],
    5: [
      ['h', `Aula 2 · O que é o Windows`],
      ['p', `Antes de tratar das características, entenda de onde vem o sistema. O Windows é desenvolvido pela Microsoft, uma gigante da tecnologia que também faz outros programas, equipamentos e videogames. A empresa nasceu pelas mãos de seu fundador, Bill Gates, que decidiu criar um sistema operacional, chamado Microsoft Windows.`],
      ['h', `Por que "Windows"?`],
      ['p', `Em inglês, windows significa janelas. Os sistemas operacionais mais antigos trabalhavam com linhas de comando: uma tela preta em que você digitava comandos. Ao criar interfaces gráficas, com botões e menus, o Windows passou a exibir os programas em janelas, retângulos que você manipula. Daí o nome. O símbolo da Microsoft, uma janelinha colorida, também vem dessa ideia: nas versões recentes as cores e o formato mudam um pouco, mas é sempre uma janela.`],
      ['h', `Onde o Windows é usado`],
      ['ul', [
        `Computadores pessoais (PC, de personal computer): é de longe o sistema mais usado. Inclui os desktops (monitor, gabinete, teclado e mouse) e os notebooks (laptops).`,
        `Servidores: computadores de grande porte, usados em grandes empresas para grande volume de dados; existe o Windows Server.`,
        `Celulares: já existiu o Windows Phone.`
      ]],
      ['p', `Por isso, uma questão que diga que o Windows pode ser usado em múltiplas plataformas (notebook, desktop, servidor) está correta.`],
      ['h', `A linha do tempo das versões`],
      ['p', `A primeira versão é de 1985 (Windows 1), do tempo dos anos 80. Depois vieram o Windows 3.1, o 95, o 98, o XP (muito popular), o Vista, o 7, o 8.1, o 10 e o 11. Na hora de elaborar prova, as bancas focam hoje em dois sistemas: o Windows 10, que é a versão anterior, e principalmente o Windows 11, a versão atual. Não há versão posterior ao 11: a Microsoft lança os sistemas com intervalos de tempo entre eles. Muita coisa que vale para o 11 vale também para o 10, e algumas questões falam do 10 mas servem para o 11.`],
      ['h', `Pegadinhas`],
      ['ul', [
        `Windows 10 e 11 são sistemas operacionais, não navegadores de internet, nem hardware, nem periféricos.`,
        `Hardware é o que é físico: memória, processador, teclado, mouse. Windows é software.`,
        `Navegadores são Chrome, Edge e Firefox, objeto de estudo à parte.`
      ]],
      ['h', `Resumo de revisão`],
      ['ul', [
        `Desenvolvedor: Microsoft; fundador: Bill Gates; nome vem de janela (interface gráfica).`,
        `Usado em PCs (desktops e notebooks), servidores (Windows Server) e já em celulares (Windows Phone).`,
        `Primeira versão: 1985. Linha: 1, 3.1, 95, 98, XP, Vista, 7, 8.1, 10, 11. Foco das bancas: 10 e 11.`
      ]]
    ],
    6: [
      ['h', `Aula 2 · Características do Windows`],
      ['p', `Em alguns momentos a banca descreve uma característica e espera que você identifique que se trata do sistema operacional. Vamos às principais, uma por uma.`],
      ['h', `Software básico`],
      ['p', `Dizer que o Windows é um software básico não significa que ele seja simples ou limitado. Pelo contrário: significa que ele é essencial, está presente para o computador funcionar. Se você tira o Windows, o computador não serve para nada, a não ser que o troque por outro sistema operacional, como o Linux. Sem sistema operacional, não há como salvar arquivos nem usar outros programas. Ele é a base para o funcionamento dos demais programas.`],
      ['h', `Gerenciamento`],
      ['p', `Esta é uma característica que cai muito: o sistema operacional faz o gerenciamento. Você vai encontrar as palavras gerenciamento e gerenciador em vários assuntos: gerenciador de tarefas, de memória, de dispositivos. A ideia é que ele funcione como meio de campo entre você (o usuário), os programas do computador e os dispositivos, a parte física (o hardware). Acessar um arquivo no pen drive e digitar um texto no teclado só acontece porque o Windows controla essas ações.`],
      ['p', `Exemplo prático: ao conectar o pen drive, quase de imediato aparece uma janela mostrando os arquivos dele. O sistema reconheceu o dispositivo e já sabe o que fazer. Ele gerencia os recursos do sistema, tanto de software (os programas) quanto de hardware.`],
      ['h', `Interface entre usuário e máquina`],
      ['p', `O sistema operacional fornece a interface para você usar o computador. É correto dizer que o Windows é uma interface entre o usuário e a máquina. Aparece em prova assim: "o sistema operacional é uma interface entre o usuário e a máquina", e a frase está correta.`],
      ['h', `Resumo de revisão`],
      ['ul', [
        `Software básico = essencial, não simples; sem ele o computador não funciona.`,
        `Gerenciador: meio de campo entre usuário, programas e hardware (a parte física).`,
        `Interface entre o usuário e a máquina; a palavra "gerenciar" costuma sinalizar item correto.`
      ]]
    ],
    7: [
      ['h', `Aula 2 · Multiusuário, multitarefa e sistema proprietário`],
      ['h', `Multiusuário: administrador e padrão`],
      ['p', `Muitas vezes um computador é usado por mais de uma pessoa. Você cria um usuário para cada uma, para que um arquivo criado por uma pessoa não interfira no de outra, e cada conta pode ter senha. O que a banca pergunta é o tipo de permissão do usuário:`],
      ['ul', [
        `Administrador: pode fazer tudo no computador. Acessa todas as configurações, instala e desinstala programas, adiciona novos usuários. É quem manda no sistema.`,
        `Usuário padrão: tem limitações. Ao tentar desinstalar um programa, aparece uma mensagem dizendo que é preciso status de administrador para executar aquela ação.`,
        `O primeiro usuário do sistema obrigatoriamente é administrador, até para poder criar os outros. A partir do segundo usuário, você escolhe se ele terá acesso a tudo (administrador) ou limitações (padrão).`
      ]],
      ['h', `Multitarefa`],
      ['p', `Nos primeiros sistemas operacionais, só se conseguia usar um programa por vez: para abrir a planilha, era preciso fechar o editor de texto; para mandar um e-mail, fechar a planilha. Esse tipo de sistema, que só permite um programa por vez, é monotarefa. Os sistemas atuais, o Windows entre eles, são multitarefa: você abre vários programas ao mesmo tempo, vários programas em execução.`],
      ['h', `Proprietário, código fechado e pago`],
      ['ul', [
        `O Windows é um sistema proprietário: pertence à Microsoft.`,
        `Seu código fonte é fechado. O código fonte é como a receita de como o sistema foi feito. Como a fórmula da Coca-Cola, que ninguém conhece porque é guardada a sete chaves, só a Microsoft sabe como o Windows foi feito.`,
        `É pago: você paga uma licença de uso, que se chama copyright.`,
        `O Linux, ao contrário, é um sistema de código fonte aberto.`
      ]],
      ['p', `Atenção: nem todo produto da Microsoft é pago. A maioria dos programas exige licença, mas existem os gratuitos, como o navegador Edge. O Windows, o Excel e outros programas do pacote são pagos.`],
      ['h', `Resumo de revisão`],
      ['ul', [
        `Multiusuário: administrador (faz tudo; o primeiro usuário é obrigatoriamente administrador) x padrão (limitado).`,
        `Multitarefa (vários programas) x monotarefa (um por vez).`,
        `Proprietário, código fonte fechado, pago com licença copyright; Linux é código aberto.`
      ]]
    ],
    8: [
      ['h', `Aula 2 · Questões resolvidas`],
      ['p', `Agora você aplica as características em questões de prova. O método: leia a frase inteira, separe a questão em partes e confira cada parte com o que você aprendeu. Ao ver "gerenciar", pense em item verdadeiro; ao ver uma negação ou uma restrição, confira o alcance da frase.`],
      ['h', `Questão 1 (AOCP, 2019)`],
      ['p', `"Em um computador, sistemas com Windows 10 ou ainda Windows 11 são considerados..." As alternativas citavam sistemas operacionais, navegadores de internet, hardware e dispositivos periféricos. Navegadores de internet são programas como o Google Chrome, o Edge e o Firefox. Hardware e periféricos são físicos (memória, processador, teclado, mouse), e o Windows é software. A resposta é: sistemas operacionais.`],
      ['h', `Questão 2 (Cebraspe)`],
      ['p', `"Em microcomputadores, o sistema operacional atua como intermediário entre o hardware e os programas de aplicação, gerenciando recursos como memória, processamento e dispositivos de entrada e saída." Confira cada parte. Intermediário: verdadeiro, é o meio de campo; para abrir o Word, o navegador ou o WhatsApp no celular, o sistema operacional está no meio. Gerenciando recursos (memória, processador, mouse, teclado, impressora, monitor): verdadeiro, e a palavra gerenciar é indício de item correto. Gabarito: certo.`],
      ['h', `Questão 3`],
      ['p', `"Um sistema operacional como o Windows 10 é uma categoria de software básico, responsável por fornecer uma interface entre o hardware e o usuário, gerenciando recursos de hardware e permitindo a execução de aplicativos." Software básico (essencial): sim. Interface entre hardware e usuário: sim. Gerenciar os recursos de hardware: sim. Permitir a execução de aplicativos: sim. Gabarito: certo. O Windows 11 vale do mesmo jeito.`],
      ['h', `Questão 4`],
      ['p', `A frase de abertura dizia que o sistema operacional é o software principal do computador, gerenciando recursos de hardware e oferecendo interface para o usuário executar aplicativos, e pedia um exemplo de sistema operacional amplamente usado em empresas. As alternativas: PowerPoint (aplicativo de apresentação de slides), Windows, Excel (aplicativo de planilhas eletrônicas) e Outlook (aplicativo de e-mails). Todos são da Microsoft e a banca os coloca para confundir, mas se a pergunta é sistema operacional, a resposta é o Windows.`],
      ['h', `Questão 5: o erro está na negação`],
      ['p', `"Usuários com permissões de administrador possuem controle sobre instalação de aplicativos e alteração de configurações globais, enquanto usuário padrão possui acessos restritos a funções que não impactam outros usuários." A primeira parte está correta: o administrador instala e desinstala, cria usuários e muda configurações globais, as que afetam todos os usuários do sistema. O problema está no final. Se a frase terminasse em "acessos restritos", seria considerada certa; mas ela diz restritos a funções que NÃO impactam outros usuários. O usuário padrão pode fazer configurações que afetam só a própria conta (por exemplo, mudar a imagem de fundo ou mexer nos arquivos da sua conta), mas não as globais. A frase correta seria: restritos a funções que IMPACTAM outros usuários. Gabarito: errado. Lição: uma só negação muda o sentido do item, então leia com atenção.`],
      ['h', `Questão 6: quais são características do Windows`],
      ['p', `Os itens eram: (1) multitarefa; (2) código fonte aberto; (3) gratuito; (4) licença do tipo copyright. Item 1: certo, ele abre vários programas ao mesmo tempo. Item 2: errado, o código fonte do Windows é fechado; o aberto é o do Linux. Item 3: errado, o Windows é pago (a Microsoft não entregou o sistema de graça; navegador Edge é gratuito, mas o Windows e o Excel exigem licença). Item 4: certo, a licença do Windows se chama copyright. Itens 1 e 4: alternativa A.`],
      ['h', `Resumo de revisão`],
      ['ul', [
        `Windows = sistema operacional (software), nunca navegador, hardware ou periférico.`,
        `"Intermediário" e "gerenciar recursos" combinam com sistema operacional.`,
        `Administrador faz mudanças globais; usuário padrão só mexe no que afeta a própria conta.`,
        `Windows: multitarefa, código fechado, pago, licença copyright.`,
        `Leia as negações: uma única palavra pode inverter o sentido do item.`
      ]]
    ]
  };

  window.PCPE_QUESTOES[topic] = [
    {
      text: `Sobre o sistema operacional Windows, afirmar que ele é um software básico significa dizer que ele:`,
      options: [
        `é um programa simples e limitado, com poucos recursos.`,
        `é um programa de hardware, instalado fisicamente na placa-mãe.`,
        `é essencial ao funcionamento do computador, base para os demais programas.`,
        `é gratuito e de código aberto, disponível para todos os usuários.`
      ],
      correct: 2,
      exp: `Software básico é o programa essencial, sem o qual o computador não cumpre sua função (não salva arquivos nem executa outros programas). Não quer dizer simples ou limitado; Windows é software, não hardware; e é pago e de código fechado.`
    },
    {
      text: `Julgue: "Em microcomputadores, o sistema operacional atua como intermediário entre o hardware e os programas de aplicação, gerenciando recursos como memória, processamento e dispositivos de entrada e saída." A afirmação é:`,
      options: [
        `errada, pois o sistema operacional não controla dispositivos de entrada e saída.`,
        `correta, pois o sistema operacional é o meio de campo entre usuário, programas e dispositivos físicos, que ele gerencia.`,
        `errada, pois quem gerencia a memória é o navegador de internet.`,
        `correta, mas apenas em computadores com versão Windows Server.`
      ],
      correct: 1,
      exp: `O sistema operacional é intermediário entre usuário/programas e o hardware e gerencia memória, processador e dispositivos de entrada e saída (mouse, teclado, impressora, monitor). A palavra "gerenciar" combina com o sistema operacional; o navegador não gerencia memória; e não se restringe ao Windows Server.`
    },
    {
      text: `Um computador de uso familiar será configurado com o Windows pela primeira vez. Sobre os usuários do sistema, é correto afirmar que:`,
      options: [
        `o primeiro usuário criado deve ser obrigatoriamente administrador, para poder criar os demais.`,
        `todo usuário criado é administrador, pois o Windows não permite contas com limitação.`,
        `o primeiro usuário pode ser padrão, desde que tenha senha.`,
        `o usuário padrão pode instalar e desinstalar programas para todos os usuários do sistema.`
      ],
      correct: 0,
      exp: `O primeiro usuário precisa ser administrador, até para criar os outros. A partir do segundo, você escolhe entre administrador e padrão (limitado). O padrão não instala nem desinstala programas sem status de administrador, e a senha não altera o tipo da conta.`
    },
    {
      text: `Considere: "Usuários administradores controlam a instalação de aplicativos e as configurações globais, enquanto usuários padrão possuem acessos restritos a funções que não impactam outros usuários." Em relação à frase, é correto afirmar que:`,
      options: [
        `está correta, pois o usuário padrão altera apenas as configurações globais.`,
        `está correta, pois o usuário padrão não pode alterar nem a imagem de fundo da própria conta.`,
        `está errada, pois o administrador não pode instalar aplicativos.`,
        `está errada, pois o usuário padrão é restrito a funções que impactam outros usuários; ele só faz configurações que afetam a própria conta.`
      ],
      correct: 3,
      exp: `O erro está na negação: o usuário padrão tem restrição às funções que impactam outros usuários (configurações globais); as que afetam só ele, como trocar a imagem de fundo, ele pode fazer. O administrador instala aplicativos e altera configurações globais.`
    },
    {
      text: `Os primeiros sistemas operacionais permitiam usar um programa por vez; os atuais, como o Windows, permitem vários programas em execução ao mesmo tempo. Essas duas características chamam-se, respectivamente:`,
      options: [
        `multitarefa e monotarefa.`,
        `monotarefa e multitarefa.`,
        `monousuário e multiusuário.`,
        `proprietário e multitarefa.`
      ],
      correct: 1,
      exp: `Um programa por vez é monotarefa; vários programas simultâneos, multitarefa. Multiusuário trata de várias contas de usuário, e proprietário trata de quem detém o código fonte, não do número de programas em execução.`
    },
    {
      text: `São características do Windows: (1) multitarefa; (2) código fonte aberto; (3) gratuito; (4) licença do tipo copyright. Estão corretos apenas os itens:`,
      options: [
        `1 e 2.`,
        `2 e 3.`,
        `1 e 4.`,
        `3 e 4.`
      ],
      correct: 2,
      exp: `O Windows é multitarefa (item 1) e tem licença copyright (item 4). O código fonte é fechado (o aberto é o do Linux) e o sistema é pago, não gratuito.`
    },
    {
      text: `Você tem várias janelas abertas e quer ver a área de trabalho, minimizando todas de uma vez. O atalho correto é:`,
      options: [
        `tecla Windows + D.`,
        `tecla Windows + L.`,
        `Alt + F4.`,
        `tecla Windows + R.`
      ],
      correct: 0,
      exp: `Win+D minimiza todas as aplicações e mostra a área de trabalho. Win+L bloqueia a tela; Alt+F4 fecha o programa em foco; Win+R abre a caixa Executar.`
    },
    {
      text: `A respeito dos botões da janela de um programa aberto no Windows, é correto afirmar que:`,
      options: [
        `o botão Minimizar encerra o programa e libera a memória.`,
        `o botão Fechar apenas oculta a janela, mantendo o programa na memória.`,
        `o botão Minimizar mantém a janela visível, apenas com tamanho menor.`,
        `o botão Maximizar faz o programa ocupar toda a área de trabalho, e o botão que fica na mesma posição devolve a janela ao tamanho anterior.`
      ],
      correct: 3,
      exp: `Maximizar ocupa toda a área de trabalho e, depois de maximizado, o botão na mesma posição restaura o tamanho anterior. Minimizar não encerra o programa (ele continua na memória) e tira a janela da área visível; quem encerra e libera a memória é o botão Fechar.`
    },
    {
      text: `Você segurou a tecla Alt e deu toques em Tab; um destaque com borda branca passou pelas janelas abertas. Para trazer ao primeiro plano a janela destacada, você deve:`,
      options: [
        `pressionar Alt + F4.`,
        `pressionar Win + L.`,
        `soltar a tecla Alt.`,
        `pressionar a tecla Esc.`
      ],
      correct: 2,
      exp: `Com Alt pressionada, cada toque em Tab passa o destaque para a próxima janela; ao soltar Alt, a janela destacada vai para o primeiro plano. Alt+F4 fecharia o programa, Win+L bloquearia a tela e Esc é usada para cancelar sugestões.`
    },
    {
      text: `Para que uma janela ocupe exatamente a metade esquerda da tela, deixando que o sistema sugira outras janelas para a outra metade, você deve:`,
      options: [
        `dar um duplo clique na barra de título.`,
        `manter a tecla Windows pressionada e usar a seta para a esquerda.`,
        `pressionar Win + D.`,
        `arrastar a barra de título até o centro da tela.`
      ],
      correct: 1,
      exp: `Win + seta para a esquerda faz a janela ocupar a metade esquerda da tela; ao soltar a tecla Windows, aparecem as opções para a outra metade. O duplo clique na barra de título maximiza, Win+D mostra a área de trabalho e arrastar para um canto cria um quadrante.`
    }
  ];
})();
