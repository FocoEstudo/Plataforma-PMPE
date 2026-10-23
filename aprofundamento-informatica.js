window.PMPE_DEEPENING = window.PMPE_DEEPENING || {};
window.PMPE_DEEPENING["Curso completo de Informática"] = Object.assign(window.PMPE_DEEPENING["Curso completo de Informática"] || {}, {
  1: [
    ["h", "1. Fundamentos do sistema operacional Windows"],
    ["p", "Sistema operacional é o software que administra recursos, contas, arquivos, dispositivos e a execução dos aplicativos. Windows é o ambiente cobrado neste edital. Não confunda o sistema operacional com um aplicativo, como um editor de texto, nem com um arquivo criado por ele."],
    ["p", "A interface gráfica oferece área de trabalho, janelas, menus, ícones e ferramentas de configuração. O Explorador de Arquivos organiza pastas e documentos; contas e permissões ajudam a controlar quem pode acessar ou alterar cada item."],
    ["h", "2. Componentes do ambiente Windows (10 e 11)"],
    ["ul", [
      "Área de Trabalho: tela principal, com ícones, atalhos e plano de fundo.",
      "Barra de Tarefas: botão Iniciar, pesquisa, programas abertos ou fixados e área de notificação (relógio, volume, rede). No Windows 11 os ícones ficam, por padrão, centralizados.",
      "Menu Iniciar: abre programas, Configurações e as opções de energia.",
      "Configurações (Win+I): ajustes do sistema. O Painel de Controle ainda existe nas versões 10 e 11.",
      "Gerenciador de Tarefas: lista aplicativos e processos e permite encerrar um que não responde (o atalho está na aula-base).",
      "Interface gráfica (GUI): janelas, ícones e mouse. Interface de linha de comando: texto digitado, como no Prompt de Comando."
    ]],
    ["p", "Atalhos desta aula: Alt+Tab alterna entre programas abertos; Win+D mostra a área de trabalho; Win+R abre a caixa Executar, onde se digita o nome de um programa (por exemplo, notepad ou cmd)."],
    ["h", "3. Exemplos práticos comentados"],
    ["ul", [
      "Um arquivo foi salvo na pasta Documentos: localize-o pelo Explorador de Arquivos e confirme o nome e a extensão.",
      "Win+R, digitar notepad e Enter abre o Bloco de Notas sem procurar no Menu Iniciar.",
      "Copiar um arquivo cria outra ocorrência; mover altera sua localização. Confira a pasta de destino antes de concluir."
    ]],
    ["h", "4. Como a banca (AOCP) cobra e pegadinhas"],
    ["ul", [
      "Dizer que o Painel de Controle deixou de existir no Windows 10 ou 11.",
      "Confundir sistema operacional com aplicativo ou arquivo.",
      "Tratar interface gráfica como sinônimo de sistema operacional."
    ]],
    ["h", "5. Erros comuns"],
    ["ul", [
      "Desligar pelo botão físico em vez de usar Desligar no sistema, que fecha os processos com segurança.",
      "Instalar aplicativos de fontes desconhecidas sem verificar sua origem."
    ]],
    ["h", "6. Mini-exercício"],
    ["ol", [
      "Questão 1. Qual atalho abre a caixa Executar?",
      "Questão 2. Para que serve o Explorador de Arquivos?",
      "Questão 3. Julgue: bloquear a sessão encerra automaticamente os aplicativos abertos."
    ]],
    ["p", "Gabarito comentado: (1) Win+R. (2) Navegar e organizar arquivos e pastas. (3) Errado: bloquear protege temporariamente o acesso sem encerrar os aplicativos."],
    ["h", "7. Resumo de revisão"],
    ["ul", [
      "Sistema operacional administra recursos e oferece ferramentas para executar aplicativos.",
      "O Explorador organiza arquivos e pastas; contas e permissões controlam acessos.",
      "Alt+Tab alterna; Win+D mostra a área de trabalho; Win+R abre o Executar; Win+I abre Configurações."
    ]]
  ],
  2: [
    ["h", "1. Conceito aprofundado: caminho, atalho, compactação e contas"],
    ["p", "Todo arquivo fica numa pasta, e toda pasta fica numa unidade (C:, D:, pendrive). Essa hierarquia forma o caminho, escrito com barra invertida, como C:\\Users\\Maria\\Documents\\relatorio.docx; no Explorador de Arquivos (Win+E) os nomes aparecem traduzidos (Usuários, Documentos). Na lateral há Acesso rápido, OneDrive e Este Computador, onde ficam as unidades."],
    ["p", "Atalho (extensão .lnk) é só um ponteiro para o item original: excluir o atalho não apaga o programa nem o documento. Pasta compactada (.zip) reúne e reduz arquivos; no menu de contexto, Enviar para > Pasta compactada."],
    ["p", "Conta de administrador pode instalar programas e alterar configurações do sistema; conta padrão tem restrições. O Controle de Conta de Usuário (UAC) pede confirmação quando uma ação exige privilégio elevado. A conta pode ser local ou vinculada a uma conta Microsoft."],
    ["h", "2. Atalhos e regras reais"],
    ["ul", [
      "Ctrl+C copia, Ctrl+X recorta, Ctrl+V cola, Ctrl+Z desfaz, Ctrl+A seleciona tudo (no Explorador).",
      "F2 renomeia o item selecionado; F5 atualiza a janela; Alt+Enter abre as Propriedades.",
      "Delete envia o item à Lixeira; Shift+Delete exclui sem passar por ela (com confirmação).",
      "Alt+F4 fecha a janela ativa; Ctrl+Shift+N cria nova pasta no Explorador.",
      "Win+Shift+S abre o recorte de tela; a tecla Print Screen copia a tela inteira para a área de transferência."
    ]],
    ["p", "Regra do arrastar: dentro da mesma unidade o item é movido; para outra unidade é copiado. Ctrl força cópia e Shift força movimentação. Nomes de arquivo não podem conter \\ / : * ? \" < > |."],
    ["p", "Opções de energia: Desligar encerra tudo; Reiniciar desliga e liga de novo; Suspender mantém o estado na memória com baixo consumo; Hibernar grava o estado em disco e desliga. Fazer logoff encerra a sessão do usuário e fecha seus programas (Bloquear, ao contrário, os mantém abertos)."],
    ["h", "3. Exemplos práticos comentados"],
    ["ul", [
      "Você arrasta um arquivo de C:\\Documentos para um pendrive: como é outra unidade, ele é copiado e continua em C:.",
      "Apagar um arquivo de pendrive normalmente o elimina de vez, pois mídia removível e unidade de rede geralmente não usam a Lixeira.",
      "O notebook fica fechado numa viagem curta: Suspender retoma rápido; Hibernar não consome bateria."
    ]],
    ["h", "4. Como a banca (AOCP) cobra e pegadinhas"],
    ["ul", [
      "«Todo arquivo excluído pode ser restaurado da Lixeira»: falso (Shift+Delete, mídias removíveis e Lixeira esvaziada).",
      "Trocar copiar por mover, ou dizer que arrastar sempre copia.",
      "Trocar Suspender por Hibernar, ou Fazer logoff por Reiniciar.",
      "Dizer que excluir o atalho remove o programa."
    ]],
    ["h", "5. Erros comuns"],
    ["ul", [
      "Salvar sem reparar na pasta de destino e depois não encontrar o arquivo.",
      "Renomear apagando a extensão, o que pode impedir a abertura no programa correto."
    ]],
    ["h", "6. Mini-exercício"],
    ["ol", [
      "Questão 1. Arrastar um arquivo de C: para D: copia ou move?",
      "Questão 2. Qual tecla renomeia o item selecionado?",
      "Questão 3. Julgue: Shift+Delete envia o arquivo à Lixeira com possibilidade de restauração."
    ]],
    ["p", "Gabarito comentado: (1) Copia, pois as unidades são diferentes (na mesma unidade, moveria). (2) F2. (3) Errado: Shift+Delete exclui sem passar pela Lixeira."],
    ["h", "7. Resumo de revisão"],
    ["ul", [
      "Caminho = unidade + pastas + arquivo; atalho .lnk é só ponteiro.",
      "Mesma unidade: move; outra unidade: copia; Ctrl copia; Shift move.",
      "Suspender = memória; Hibernar = disco; logoff fecha programas.",
      "Administrador pode mais que conta padrão; UAC pede confirmação."
    ]]
  ],
  3: [
    ["h", "1. Conceito aprofundado: mesmos recursos, atalhos diferentes"],
    ["p", "Word 2019 e Writer 7 oferecem os mesmos recursos (estilos, sumário, quebras, tabelas e revisão, já descritos na aula-base). A diferença cobrada em prova está nos atalhos, no layout da interface e nos formatos de arquivo."],
    ["h", "2. Atalhos, menus e formatos"],
    ["ul", [
      "Word 2019 (português): Ctrl+N negrito, Ctrl+I itálico, Ctrl+S sublinhado, Ctrl+B salvar, Ctrl+O novo documento, Ctrl+A abrir.",
      "Writer 7 (português): Ctrl+B negrito, Ctrl+I itálico, Ctrl+U sublinhado, Ctrl+S salvar, Ctrl+N novo documento, Ctrl+A seleciona tudo.",
      "Comuns aos dois: Ctrl+C, Ctrl+X, Ctrl+V, Ctrl+Z (desfazer), Ctrl+Y (refazer), Ctrl+P (imprimir), Ctrl+E (centralizar), Ctrl+Enter (quebra de página) e F7 (ortografia)."
    ]],
    ["p", "Onde fica cada recurso. Word 2019: Faixa de Opções com as guias Arquivo, Página Inicial, Inserir, Design, Layout, Referências, Correspondências, Revisão e Exibir. Margens, orientação e quebras em Layout; sumário em Referências; cabeçalho, rodapé e tabela em Inserir; Controlar Alterações e comentários em Revisão. Writer 7: menus Arquivo, Editar, Exibir, Inserir, Formatar, Estilos, Tabela, Formulário, Ferramentas, Janela e Ajuda. Cabeçalho e rodapé em Inserir; sumário em Inserir > Sumário e Índice > Sumário, Índice ou Bibliografia; tabela em Tabela > Inserir Tabela; formatação de página pelo menu Formatar; F11 abre o painel de estilos."],
    ["p", "Formatos: Word usa .docx (e o antigo .doc); modelo é .dotx. Writer usa .odt; modelo é .ott. Cada programa abre e salva o formato do outro, com possíveis diferenças de formatação. Para gerar PDF: no Word, Arquivo > Exportar; no Writer, Arquivo > Exportar como > Exportar como PDF. O PDF serve para leitura e distribuição, não para edição."],
    ["h", "3. Exemplos práticos comentados"],
    ["ol", [
      "Você seleciona uma frase no Word em português e quer negrito: Ctrl+N. No Writer, o mesmo efeito é Ctrl+B.",
      "No Word em português, Ctrl+B salva e Ctrl+A abre; no Writer, Ctrl+A seleciona todo o texto.",
      "Vai enviar um ofício para quem não precisa editar: exporte para PDF e guarde também o .docx ou .odt original."
    ]],
    ["h", "4. Como a banca (AOCP) cobra e pegadinhas"],
    ["ul", [
      "Dar o atalho do Word (Ctrl+N negrito) como se valesse no Writer, ou o inverso. No Word em português, Ctrl+N é negrito, e não «novo documento».",
      "Assumir que .odt é formato do Word ou que .docx é o formato nativo do Writer.",
      "Dizer que o corretor ortográfico garante texto sem erros: ele não avalia sentido nem palavra correta no lugar errado."
    ]],
    ["h", "5. Erros comuns"],
    ["ul", [
      "Usar Enter várias vezes para mudar de página, em vez de quebra de página (Ctrl+Enter).",
      "Alinhar texto com espaços ou Tab repetidos, em vez de recuos e tabulações."
    ]],
    ["h", "6. Mini-exercício"],
    ["ol", [
      "Questão 1. No Writer em português, qual atalho aplica negrito?",
      "Questão 2. No Word 2019 em português, qual atalho aplica sublinhado?",
      "Questão 3. Qual extensão é padrão do Writer: .odt, .docx ou .xlsx?"
    ]],
    ["p", "Gabarito comentado: (1) Ctrl+B (no Word em português, Ctrl+B salva e negrito é Ctrl+N). (2) Ctrl+S (no Writer, Ctrl+S salva e sublinhado é Ctrl+U). (3) .odt."],
    ["h", "7. Resumo de revisão"],
    ["ul", [
      "Word PT-BR: Ctrl+N negrito, Ctrl+S sublinhado, Ctrl+B salvar; Writer: Ctrl+B negrito, Ctrl+U sublinhado, Ctrl+S salvar.",
      "Word: .docx; Writer: .odt; PDF é exportação.",
      "Ctrl+Enter quebra a página; F7 verifica a ortografia nos dois."
    ]]
  ],
  4: [
    ["h", "1. Conceito aprofundado: cálculo, operadores e diferenças entre Excel e Calc"],
    ["p", "Os conceitos de célula, fórmula (= no início), referência relativa, absoluta e mista, intervalo e ordenar/filtrar estão na aula-base. Aqui entram o que a prova mistura: operadores, ordem de cálculo, formatos de arquivo e diferenças de sintaxe entre os dois programas."],
    ["p", "Operadores aritméticos: + - * / e ^ (potência); o & junta textos. A ordem de cálculo segue a matemática: parênteses, depois potência, multiplicação e divisão, por fim soma e subtração. Percentual: =B2*10% calcula 10% de B2."],
    ["h", "2. Atalhos, formatos e diferenças"],
    ["ul", [
      "Durante a edição de uma fórmula, F4 alterna entre A1, $A$1, A$1 e $A1 (Excel e Calc).",
      "A alça de preenchimento (quadradinho no canto da célula) copia fórmulas e completa séries nos dois programas.",
      "Ctrl+Shift+L liga e desliga filtros nos dois. Atenção: funções como SOMA continuam somando linhas ocultas por filtro.",
      "Referência a outra planilha: Planilha2!A1 no Excel; $Planilha2.A1 (ou Planilha2.A1) no Calc.",
      "Arquivos: Excel 2019 usa .xlsx (.xls é o antigo, .xlsm tem macros, .csv é texto separado); Calc usa .ods. O Excel chama o arquivo de pasta de trabalho; o Calc, de documento de planilha."
    ]],
    ["p", "Mensagens de erro: #DIV/0! (divisão por zero), #NOME? (nome de função ou intervalo desconhecido), #VALOR! (tipo de dado incompatível), #REF! (referência inválida, como célula apagada) e #N/D (valor não encontrado, típico do PROCV)."],
    ["h", "3. Exemplos práticos comentados"],
    ["ol", [
      "Com preços em B2:B10 e uma taxa de 5% em E1, o total com acréscimo é =B2*(1+$E$1). Ao copiar para baixo, B2 vira B3, B4... e $E$1 permanece.",
      "=2+3*4 resulta 14; =(2+3)*4 resulta 20, por causa dos parênteses.",
      "Se B1 está vazia, =A1/B1 resulta #DIV/0!, pois célula vazia vale zero na divisão."
    ]],
    ["h", "4. Como a banca (AOCP) cobra e pegadinhas"],
    ["ul", [
      "Resultado de uma fórmula copiada para outra célula: preste atenção nos $.",
      "Esquecer que texto dentro de fórmula exige aspas.",
      "Dizer que filtrar apaga linhas: elas apenas ficam ocultas.",
      "Misturar a sintaxe de referência entre planilhas (! no Excel, . no Calc)."
    ]],
    ["h", "5. Erros comuns"],
    ["ul", [
      "Digitar a fórmula sem o sinal =, que então vira texto.",
      "Ordenar apenas uma coluna e desalinhar os registros.",
      "Usar vírgula ou ponto em vez de ponto e vírgula como separador de argumentos, em configuração regional brasileira."
    ]],
    ["h", "6. Mini-exercício"],
    ["ol", [
      "Questão 1. Qual o resultado de =(2+3)*2^2?",
      "Questão 2. Em C2 há =$A2*B$1. Qual será a fórmula ao copiar C2 para D3?",
      "Questão 3. Que erro aparece quando uma fórmula divide por zero?"
    ]],
    ["p", "Gabarito comentado: (1) 20, pois (2+3)=5 e 2^2=4. (2) =$A3*C$1: a coluna A e a linha 1 estão fixas; B vira C (uma coluna à direita) e a linha de A passa de 2 para 3. (3) #DIV/0!."],
    ["h", "7. Resumo de revisão"],
    ["ul", [
      "Ordem: parênteses, potência, * e /, depois + e -.",
      "F4 alterna os tipos de referência; Ctrl+Shift+L liga filtros.",
      "Excel: .xlsx e Planilha2!A1; Calc: .ods e Planilha2.A1.",
      "Erros: #DIV/0!, #NOME?, #VALOR!, #REF!, #N/D."
    ]]
  ],
  5: [
    ["h", "1. Conceito aprofundado: layout, tema, mestre e o que muda de um slide para outro"],
    ["p", "O slide combina layout (disposição de títulos, textos e imagens), tema (cores, fontes e efeitos) e conteúdo. O slide mestre define o padrão de todos os slides: alterá-lo muda fundo, rodapé ou logotipo em todo o arquivo. No PowerPoint, fica em Exibir > Slide Mestre; no Impress, também no menu Exibir."],
    ["p", "Transição é o efeito na passagem de um slide para outro; animação é o efeito aplicado a um objeto dentro do slide (um texto que entra, uma imagem que some). No PowerPoint 2019 há guias separadas, Transições e Animações."],
    ["h", "2. Atalhos, formatos e pacotes"],
    ["ul", [
      "PowerPoint 2019: F5 inicia a apresentação desde o primeiro slide; Shift+F5 inicia a partir do slide atual; Esc encerra; Ctrl+M insere novo slide.",
      "Modos de exibição do PowerPoint: Normal, Classificação de Slides (miniaturas, bom para reordenar), Anotações e Leitura. O Impress tem visões equivalentes (Normal, Estrutura de tópicos, Classificador de slides).",
      "Notas do orador ficam anexadas ao slide e não aparecem para a plateia na projeção comum."
    ]],
    ["p", "Formatos: PowerPoint salva .pptx (padrão), .ppt (antigo), .ppsx (apresentação de slides, que abre já em exibição) e .potx (modelo). O Impress usa .odp, com modelo .otp. A exportação para PDF está descrita na Aula 3."],
    ["p", "Pacotes: o LibreOffice 7 reúne Writer (texto), Calc (planilha), Impress (apresentação), Draw (desenho), Math (fórmulas) e Base (banco de dados). O Office 2019 traz Word, Excel, PowerPoint, Outlook, OneNote, Access e Publisher, conforme a edição."],
    ["h", "3. Exemplos práticos comentados"],
    ["ol", [
      "Trocar a fonte de todos os títulos: altere no slide mestre, não slide por slide.",
      "Quer que o arquivo abra direto em tela cheia: salve como Apresentação de Slides do PowerPoint (.ppsx).",
      "No meio da fala, você precisa recomeçar do slide em que está: Shift+F5."
    ]],
    ["h", "4. Como a banca (AOCP) cobra e pegadinhas"],
    ["ul", [
      "Associar extensão ao programa: .pptx com PowerPoint, .odp com Impress, .ods com Calc, .odt com Writer.",
      "Trocar transição por animação.",
      "Dizer que o tema e o slide mestre são a mesma coisa: o tema define cores e fontes; o mestre define o layout-base."
    ]],
    ["h", "5. Erros comuns"],
    ["ul", [
      "Excesso de texto no slide, em vez de tópicos curtos.",
      "Trocar F5 por Shift+F5 e começar do slide errado."
    ]],
    ["h", "6. Mini-exercício"],
    ["ol", [
      "Questão 1. Qual a extensão padrão do Impress?",
      "Questão 2. Efeito que ocorre ao trocar de slide é transição ou animação?",
      "Questão 3. Julgue: o formato .ppsx abre a apresentação diretamente em modo de exibição."
    ]],
    ["p", "Gabarito comentado: (1) .odp. (2) Transição; animação age sobre objetos do slide. (3) Certo, é a apresentação de slides do PowerPoint."],
    ["h", "7. Resumo de revisão"],
    ["ul", [
      "Mestre padroniza; tema define cores e fontes; transição passa slides; animação mexe em objetos.",
      "PowerPoint: .pptx, .ppsx, .potx; Impress: .odp, .otp.",
      "F5 inicia do começo; Shift+F5 inicia do slide atual."
    ]]
  ],
  6: [
    ["h", "1. Conceito aprofundado: protocolos e e-mail"],
    ["p", "Protocolo é um conjunto de regras que permite a dois sistemas se entenderem. Além do HTTP e do HTTPS (vistos na aula-base), aparecem em prova: FTP (transferência de arquivos), SMTP (envio de e-mail), POP3 (baixa o e-mail para o computador) e IMAP (acessa o e-mail mantendo-o no servidor). O DNS está na Aula 12."],
    ["p", "Intranet é uma rede restrita de uma organização que usa as mesmas tecnologias da Internet; extranet estende o acesso a parceiros autorizados. A Web é um serviço da Internet; e-mail e transferência de arquivos são outros serviços."],
    ["h", "2. Navegadores e atalhos"],
    ["p", "Navegadores citados em prova: Google Chrome, Microsoft Edge (baseado em Chromium, substituto do Internet Explorer) e Mozilla Firefox. Atalhos válidos nos três:"],
    ["ul", [
      "Ctrl+T abre nova aba; Ctrl+W fecha a aba; Ctrl+Shift+T reabre a última aba fechada; Ctrl+Tab muda de aba.",
      "Ctrl+N abre nova janela; Ctrl+D salva nos favoritos; Ctrl+H abre o histórico; Ctrl+J abre os downloads.",
      "F5 recarrega a página; Ctrl+Shift+R recarrega ignorando o cache (Ctrl+F5 também costuma funcionar); Ctrl+L ou F6 seleciona a barra de endereços.",
      "Janela privativa: Ctrl+Shift+N no Chrome (janela anônima) e no Edge (InPrivate); Ctrl+Shift+P no Firefox (janela privativa)."
    ]],
    ["p", "Navegação privativa: ao terminar a sessão, o navegador não guarda o histórico nem os cookies e dados dos sites. Favoritos e arquivos baixados permanecem. Ela não torna o usuário invisível: sites, provedor de acesso e empregador ainda podem registrar a atividade. Histórico, cache e cookies são detalhados na Aula 12."],
    ["h", "3. Exemplos práticos comentados"],
    ["ol", [
      "Você fechou uma aba por engano: Ctrl+Shift+T a recupera.",
      "Um site mostra versão antiga após atualização: recarregue ignorando o cache (Ctrl+Shift+R).",
      "Em computador compartilhado, use janela privativa, saia das contas ao terminar e não salve senhas."
    ]],
    ["h", "4. Como a banca (AOCP) cobra e pegadinhas"],
    ["ul", [
      "Dizer que Internet e Web são sinônimos.",
      "Trocar POP3 e IMAP, ou tratar SMTP como protocolo de recebimento.",
      "Atribuir à janela privativa a função de ocultar totalmente o usuário.",
      "Atribuir o atalho do Chrome (Ctrl+Shift+N) ao Firefox, onde a janela privativa é Ctrl+Shift+P."
    ]],
    ["h", "5. Erros comuns"],
    ["ul", [
      "Aceitar notificações ou instalar extensões de origem desconhecida.",
      "Informar dados em página aberta por link de mensagem sem conferir o domínio."
    ]],
    ["h", "6. Mini-exercício"],
    ["ol", [
      "Questão 1. Qual protocolo é usado para ENVIAR e-mail?",
      "Questão 2. Qual atalho abre a janela privativa no Firefox?",
      "Questão 3. Qual atalho reabre a última aba fechada?"
    ]],
    ["p", "Gabarito comentado: (1) SMTP. (2) Ctrl+Shift+P. (3) Ctrl+Shift+T."],
    ["h", "7. Resumo de revisão"],
    ["ul", [
      "SMTP envia; POP3 baixa; IMAP mantém no servidor; FTP transfere arquivos.",
      "Intranet = rede restrita; extranet = acesso a parceiros.",
      "Janela privativa: Ctrl+Shift+N (Chrome e Edge) e Ctrl+Shift+P (Firefox); não é invisibilidade."
    ]]
  ],
  7: [
    ["h", "1. Conceito aprofundado: operadores de busca e fontes"],
    ["p", "Mecanismos de busca (Google, Bing, DuckDuckGo) percorrem páginas, montam um índice e ordenam os resultados por critérios próprios; o mecanismo de busca é um serviço, e o navegador é o programa usado para acessá-lo. Esta aula acrescenta os operadores e a distinção entre tipos de fonte."],
    ["h", "2. Operadores de pesquisa, passo a passo"],
    ["ul", [
      "Aspas: \"edital soldado PMPE\" procura a expressão exata.",
      "Sinal de menos: jaguar -carro exclui resultados com a palavra depois do sinal.",
      "site: limita a um domínio, por exemplo site:gov.br concurso.",
      "filetype: limita o tipo de arquivo, por exemplo filetype:pdf edital.",
      "OR (em maiúsculas) aceita um termo ou outro.",
      "As ferramentas de busca permitem filtrar por período, tipo (imagens, notícias, vídeos) e idioma."
    ]],
    ["p", "Esses operadores são bem conhecidos no Google, e o comportamento pode variar em outros buscadores."],
    ["p", "Fonte primária é o documento original (a lei no portal oficial, o edital no site da banca ou do órgão); fonte secundária interpreta ou resume a primária (blog, cursinho, reportagem). Desinformação é conteúdo falso ou enganoso; a checagem cruzada, comparando fontes independentes, reduz o risco."],
    ["h", "3. Exemplos práticos comentados"],
    ["ul", [
      "Um blog afirma que a prova mudou: procure o aviso no site da banca antes de acreditar.",
      "Quer só PDFs de um órgão estadual: site:pe.gov.br filetype:pdf termo.",
      "Quer a palavra jaguar apenas como animal: jaguar -carro."
    ]],
    ["h", "4. Como a banca (AOCP) cobra e pegadinhas"],
    ["ul", [
      "Trocar a função das aspas (frase exata) e do sinal de menos (exclusão).",
      "Confundir mecanismo de busca com navegador, ou com a Internet.",
      "Assumir que pesquisar em janela privativa torna os resultados neutros."
    ]],
    ["h", "5. Erros comuns"],
    ["ul", [
      "Copiar o resumo do buscador sem abrir a fonte original.",
      "Usar termos vagos e concluir que não existe informação."
    ]],
    ["h", "6. Mini-exercício"],
    ["ol", [
      "Questão 1. O que fazem as aspas em uma pesquisa?",
      "Questão 2. Qual operador restringe a busca a um tipo de arquivo?",
      "Questão 3. Um blog que resume uma lei é fonte primária ou secundária?"
    ]],
    ["p", "Gabarito comentado: (1) Buscam a expressão exata. (2) filetype:. (3) Secundária; a primária é o texto oficial da lei."],
    ["h", "7. Resumo de revisão"],
    ["ul", [
      "Aspas = exata; - = excluir; site: = domínio; filetype: = formato; OR = um ou outro.",
      "Primária = original oficial; secundária = interpretação.",
      "Cruze fontes independentes."
    ]]
  ],
  8: [
    ["h", "1. Conceito aprofundado: mais ameaças e a diferença entre antivírus e firewall"],
    ["p", "Além de confidencialidade, integridade e disponibilidade (aula-base), costuma-se citar a autenticidade: confirmar quem é o autor ou usuário. Outras ameaças além das da aula-base:"],
    ["ul", [
      "Spyware coleta informações; keylogger registra o que é digitado; adware exibe anúncios.",
      "Backdoor abre acesso remoto escondido; rootkit esconde a presença do invasor; botnet é uma rede de máquinas infectadas controladas à distância.",
      "Pharming redireciona o usuário a um site falso mesmo que ele digite o endereço correto; spam é mensagem em massa não solicitada.",
      "Ataque de negação de serviço (DoS) tenta derrubar um serviço; o DDoS usa muitas máquinas ao mesmo tempo, e é um ataque à disponibilidade."
    ]],
    ["h", "2. Proteções e onde encontrá-las no Windows"],
    ["ul", [
      "Segurança do Windows: pesquise o nome no menu Iniciar. Em Configurações, costuma estar em Atualização e Segurança (Windows 10) ou Privacidade e segurança (Windows 11). Reúne Proteção contra vírus e ameaças (Microsoft Defender Antivírus), Firewall e proteção de rede, Controle de aplicativos e navegador, entre outros.",
      "Windows Update corrige vulnerabilidades; manter o sistema atualizado é medida preventiva.",
      "Senha forte: longa, única, sem dados pessoais. Autenticação em dois fatores combina algo que você sabe com algo que você tem."
    ]],
    ["p", "Antivírus detecta, bloqueia e remove malware por assinaturas e comportamento suspeito, e precisa estar atualizado. Firewall controla conexões de entrada e saída segundo regras, e não elimina vírus. Um não substitui o outro. Se houver outro antivírus instalado e ativo, o Microsoft Defender Antivírus é desativado automaticamente."],
    ["p", "Cuidados de rotina: desconfie de pendrives desconhecidos; baixe programas do site oficial ou da loja oficial; evite informar dados sensíveis em Wi-Fi público aberto; revise as permissões pedidas por aplicativos."],
    ["h", "3. Exemplos práticos comentados"],
    ["ul", [
      "Seu teclado parece normal, mas senhas vazam: pode haver um keylogger.",
      "Você digita o endereço correto do banco e cai numa página falsa: possível pharming.",
      "O site da prefeitura fica fora do ar por milhares de acessos simultâneos: DDoS."
    ]],
    ["h", "4. Como a banca (AOCP) cobra e pegadinhas"],
    ["ul", [
      "Afirmar que o firewall elimina vírus (ele filtra tráfego; remover malware é função de antivírus).",
      "Dizer que o antivírus protege contra qualquer ameaça, inclusive as muito novas.",
      "Trocar phishing (engana a pessoa) por pharming (redireciona o acesso)."
    ]],
    ["h", "5. Erros comuns"],
    ["ul", [
      "Reutilizar a mesma senha em vários serviços.",
      "Desativar o antivírus para abrir um arquivo duvidoso.",
      "Ignorar atualizações."
    ]],
    ["h", "6. Mini-exercício"],
    ["ol", [
      "Questão 1. Qual programa malicioso registra tudo o que a pessoa digita?",
      "Questão 2. Qual a diferença entre DoS e DDoS?",
      "Questão 3. Julgue: o firewall substitui o antivírus."
    ]],
    ["p", "Gabarito comentado: (1) Keylogger, um tipo de spyware. (2) O DDoS parte de muitas máquinas ao mesmo tempo. (3) Errado: têm funções diferentes e se complementam."],
    ["h", "7. Resumo de revisão"],
    ["ul", [
      "Spyware/keylogger observam; backdoor e rootkit escondem acesso; botnet é rede de máquinas controladas.",
      "Pharming redireciona; phishing engana; DDoS ataca a disponibilidade.",
      "Antivírus detecta malware; firewall filtra tráfego; Segurança do Windows reúne os dois."
    ]]
  ],
  9: [
    ["h", "1. Conceito aprofundado: atributo de arquivamento e escolha do tipo de backup"],
    ["p", "Os tipos completo, incremental e diferencial estão na aula-base. Para decidir entre eles é preciso conhecer o atributo de arquivamento: uma marca que o sistema coloca em arquivo novo ou alterado, indicando que ainda não foi copiado. O backup completo e o incremental limpam a marca; o diferencial não limpa; a cópia também não altera a marca."],
    ["p", "Restauração: com completo + incrementais, são necessários o último completo e todos os incrementais seguintes, na ordem. Com completo + diferencial, bastam o último completo e o último diferencial. Logo, o incremental é o backup mais rápido e ocupa menos espaço, e o diferencial é a restauração mais simples."],
    ["h", "2. Estratégia e ferramentas"],
    ["ul", [
      "Regra 3-2-1: três cópias dos dados, em dois tipos de mídia diferentes, com uma cópia fora do local principal.",
      "Retenção define por quanto tempo as versões antigas são guardadas; frequência define de quanto em quanto tempo se copia.",
      "Proteja o backup com controle de acesso e, se houver dados sensíveis, com criptografia."
    ]],
    ["p", "No Windows 10 e 11, o Histórico de Arquivos copia periodicamente arquivos de pastas pessoais para uma unidade externa; o OneDrive sincroniza pastas com a nuvem; a Restauração do Sistema volta configurações e arquivos de sistema a um ponto anterior, mas não substitui o backup dos seus documentos."],
    ["h", "3. Exemplos práticos comentados"],
    ["ol", [
      "Segunda: completo. Terça a sexta: incrementais. O disco falha na quinta, antes do backup do dia. Restaura-se o completo de segunda e os incrementais de terça e quarta, nessa ordem.",
      "Mesmo cenário com diferenciais: restaura-se o completo de segunda e apenas o diferencial de quarta.",
      "Você apaga por engano uma pasta sincronizada: a exclusão pode se propagar à nuvem, pois sincronizar não é fazer backup com histórico."
    ]],
    ["h", "4. Como a banca (AOCP) cobra e pegadinhas"],
    ["ul", [
      "Dizer que o incremental copia tudo desde o último completo: isso é o diferencial.",
      "Esquecer que o diferencial não limpa o atributo de arquivamento.",
      "Afirmar que guardar a cópia no mesmo computador é suficiente."
    ]],
    ["h", "5. Erros comuns"],
    ["ul", [
      "Nunca testar a restauração.",
      "Deixar o pendrive de backup sempre conectado."
    ]],
    ["h", "6. Mini-exercício"],
    ["ol", [
      "Questão 1. Qual backup copia o que mudou desde o último completo e não limpa o atributo de arquivamento?",
      "Questão 2. Na regra 3-2-1, o que significa o «1»?",
      "Questão 3. Completo na segunda e diferenciais diários; falha na quinta antes do backup do dia. Quais conjuntos restauram os dados?"
    ]],
    ["p", "Gabarito comentado: (1) Diferencial. (2) Uma cópia fora do local principal. (3) O completo de segunda e o diferencial de quarta; os diferenciais anteriores não são necessários."],
    ["h", "7. Resumo de revisão"],
    ["ul", [
      "Completo e incremental limpam a marca; diferencial e cópia não limpam.",
      "Incremental: backup mais rápido, restauração mais longa; diferencial: o oposto.",
      "3-2-1 e teste de restauração; sincronização não substitui backup."
    ]]
  ],
  10: [
    ["h", "1. Conceito aprofundado: partições e sistemas de arquivos"],
    ["p", "O disco (HD ou SSD) é dividido em partições, e cada partição recebe um sistema de arquivos, que define como os dados são gravados e localizados. No Windows: NTFS (padrão do sistema; suporta permissões, criptografia e arquivos grandes), FAT32 (antigo, compatível com muitos aparelhos, mas limitado a 4 GB por arquivo) e exFAT (para pendrives e cartões, sem esse limite prático). Formatar prepara a unidade com um sistema de arquivos e normalmente apaga o acesso ao conteúdo anterior."],
    ["p", "Caminho absoluto, já visto na Aula 2, começa pela unidade (C:\\Projetos\\planilha.xlsx); caminho relativo parte da pasta em que você já está. A unidade C: normalmente guarda o Windows."],
    ["h", "2. Pesquisa, extensões e manutenção"],
    ["ul", [
      "Pesquisa: caixa no canto superior direito do Explorador; vale para a pasta atual e suas subpastas.",
      "Curingas: * substitui qualquer sequência de caracteres e ? substitui um caractere. *.pdf lista os PDFs; relatorio?.docx encontra relatorio1.docx e relatorioA.docx.",
      "Exibir extensões: guia Exibir do Explorador (no Windows 11, Exibir > Mostrar > Extensões de nomes de arquivos).",
      "Propriedades (Alt+Enter) mostram tamanho, local, datas e atributos, como Somente leitura e Oculto.",
      "Ejetar com segurança evita corromper dados gravados em pendrive.",
      "Ctrl+Alt+Del abre a tela de opções de segurança do Windows."
    ]],
    ["p", "Manutenção: a Limpeza de Disco remove arquivos temporários; Otimizar Unidades desfragmenta HDs mecânicos e, em SSDs, executa a otimização adequada. Arquivos apagados continuam ocupando espaço até a Lixeira ser esvaziada."],
    ["h", "3. Exemplos práticos comentados"],
    ["ol", [
      "Um arquivo chamado fatura.pdf.exe aparece como fatura.pdf se as extensões estiverem ocultas; mostrar as extensões revela o .exe, que é executável.",
      "Um arquivo de 6 GB não cabe em pendrive FAT32; exFAT ou NTFS resolvem.",
      "Para achar todas as planilhas do ano, pesquise *.xlsx na pasta Documentos."
    ]],
    ["h", "4. Como a banca (AOCP) cobra e pegadinhas"],
    ["ul", [
      "Associar permissões e criptografia ao FAT32, quando são recursos do NTFS.",
      "Confundir caminho absoluto com relativo.",
      "Trocar os curingas: * é vários caracteres; ? é um só."
    ]],
    ["h", "5. Erros comuns"],
    ["ul", [
      "Remover o pendrive sem ejetar.",
      "Formatar a unidade errada."
    ]],
    ["h", "6. Mini-exercício"],
    ["ol", [
      "Questão 1. O que lista a pesquisa *.docx?",
      "Questão 2. Qual sistema de arquivos tem limite de 4 GB por arquivo: NTFS ou FAT32?",
      "Questão 3. Por que mostrar as extensões ajuda a evitar golpes?"
    ]],
    ["p", "Gabarito comentado: (1) Os arquivos cujo nome termina em .docx. (2) FAT32. (3) Porque revela dupla extensão enganosa, como fatura.pdf.exe."],
    ["h", "7. Resumo de revisão"],
    ["ul", [
      "NTFS: permissões e criptografia; FAT32: limite de 4 GB; exFAT: pendrives e cartões.",
      "* = vários caracteres; ? = um caractere.",
      "Absoluto parte da unidade; relativo parte da pasta atual."
    ]]
  ],
  11: [
    ["h", "1. Conceito aprofundado: funções de planilha e impressão"],
    ["p", "Operadores, referências e erros foram vistos na Aula 4; aqui entram as funções mais cobradas e a etapa final de conferir e imprimir. Os nomes das funções em português são os mesmos no Excel e no Calc."],
    ["h", "2. Funções, sintaxe e impressão"],
    ["ul", [
      "=SE(teste;valor_se_verdadeiro;valor_se_falso), por exemplo =SE(B2>=6;\"Aprovado\";\"Reprovado\").",
      "=SOMASE(intervalo;critério;intervalo_soma): soma valores de outra coluna quando o critério é atendido.",
      "=CONT.SE(intervalo;critério) conta células que atendem ao critério; CONT.NÚM conta células com números; CONT.VALORES conta células não vazias.",
      "=PROCV(valor;tabela;coluna;0): procura o valor na primeira coluna da tabela e devolve o dado da coluna indicada; 0 (ou FALSO) exige correspondência exata.",
      "=MÁXIMO, =MÍNIMO e =MÉDIA trabalham com intervalos; =ARRED(número;casas) arredonda; =HOJE() devolve a data atual e =AGORA(), data e hora.",
      "Textos: ESQUERDA, DIREITA e EXT.TEXTO extraem partes; & ou CONCATENAR unem textos."
    ]],
    ["p", "Impressão. Excel: Layout da Página > Área de Impressão > Definir; Ctrl+P mostra a visualização e imprime. Calc: Formatar > Intervalos de Impressão > Definir; Arquivo > Imprimir (Ctrl+P). Orientação, margens e ajuste à página afetam o resultado. Em planilhas largas, ajustar a escala para caber em uma página de largura evita colunas em folhas separadas, e repetir as linhas de título facilita relatórios longos."],
    ["h", "3. Exemplos práticos comentados"],
    ["ol", [
      "Notas em B2:B6 e limite 7 em E1: =SE(B2>=$E$1;\"OK\";\"Rever\") copiada para baixo mantém o limite fixo.",
      "Para somar vendas de «Ana», com nomes em A e valores em B: =SOMASE(A2:A20;\"Ana\";B2:B20).",
      "Tabela de produtos em A2:C10 e código digitado em E1: =PROCV(E1;A2:C10;3;0) devolve o dado da terceira coluna do produto exato."
    ]],
    ["h", "4. Como a banca (AOCP) cobra e pegadinhas"],
    ["ul", [
      "Pedem o resultado de funções com intervalos pequenos: calcule passo a passo.",
      "Distinguir CONT.NÚM, CONT.VALORES e CONT.SE.",
      "Esquecer as aspas em critérios de texto."
    ]],
    ["h", "5. Erros comuns"],
    ["ul", [
      "Imprimir sem definir a área e gerar páginas em excesso.",
      "Digitar números como texto, impedindo o cálculo."
    ]],
    ["h", "6. Mini-exercício"],
    ["ol", [
      "Questão 1. Com A1:A5 = 10, 20, 30, 40, 50, qual o resultado de =SE(MÉDIA(A1:A5)>=30;\"OK\";\"X\")?",
      "Questão 2. Com A1:A5 = 10, 20, 30, 40, 50, qual o resultado de =CONT.SE(A1:A5;\">25\")?",
      "Questão 3. Em A1:A4 há 10, texto, célula vazia e 7. Quais os resultados de CONT.NÚM e CONT.VALORES?"
    ]],
    ["p", "Gabarito comentado: (1) OK, pois a média é 30 e 30>=30 é verdadeiro. (2) 3, pois 30, 40 e 50 são maiores que 25. (3) CONT.NÚM = 2 (só 10 e 7); CONT.VALORES = 3 (10, o texto e 7)."],
    ["h", "7. Resumo de revisão"],
    ["ul", [
      "SE decide; SOMASE soma com critério; CONT.SE conta com critério; PROCV busca.",
      "CONT.NÚM conta números; CONT.VALORES conta não vazias.",
      "Excel: Layout da Página > Área de Impressão; Calc: Formatar > Intervalos de Impressão."
    ]]
  ],
  12: [
    ["h", "1. Conceito aprofundado: a anatomia de uma URL e o papel do DNS"],
    ["p", "URL é o endereço completo de um recurso. Exemplo: https://www.exemplo.gov.br/area/pagina.html?busca=edital#topo. Partes: https (protocolo), www.exemplo.gov.br (domínio), /area/pagina.html (caminho), ?busca=edital (parâmetros) e #topo (âncora dentro da página). No domínio, lê-se da direita para a esquerda: .br é o domínio de topo do Brasil, .gov.br é o espaço de governo, exemplo é o nome registrado e www é um subdomínio."],
    ["p", "Os computadores se localizam por endereço IP, não por nomes. O DNS (Sistema de Nomes de Domínio) traduz nomes como www.exemplo.gov.br em endereços IP. Se o DNS for manipulado, o usuário pode ser levado a um site falso mesmo digitando o endereço certo (pharming, Aula 8)."],
    ["h", "2. Cookies, cache e histórico: diferenças operacionais"],
    ["ul", [
      "Cookie: pequeno dado guardado no navegador a pedido de um site, usado para manter login, carrinho e preferências. Os de sessão somem ao fechar o navegador; os persistentes ficam até expirar. Os de terceiros vêm de domínio diferente do visitado e servem a rastreamento e publicidade.",
      "Cache: cópias de imagens, estilos e scripts guardadas localmente para carregar mais rápido. Limpá-lo resolve páginas desatualizadas.",
      "Histórico: lista de endereços visitados. Limpá-lo não apaga registros do provedor ou dos sites.",
      "Limpeza de dados de navegação: Ctrl+Shift+Del abre a janela para escolher o que apagar e o período (Chrome, Edge e Firefox)."
    ]],
    ["p", "Cookies não são vírus nem executam programas, mas podem rastrear hábitos. Limpar cookies normalmente encerra as sessões e exige novo login."],
    ["h", "3. Exemplos práticos comentados"],
    ["ol", [
      "Você adiciona itens ao carrinho de uma loja, fecha a aba e volta: o carrinho permanece graças a cookies.",
      "O link recebido leva a gov-pe.net.br: o domínio não termina em gov.br, logo não é espaço de governo, e isso é sinal de alerta.",
      "Após limpar os cookies, você precisa entrar de novo em todas as contas."
    ]],
    ["h", "4. Como a banca (AOCP) cobra e pegadinhas"],
    ["ul", [
      "Descrever o DNS como protocolo que criptografa a conexão (esse é o papel do HTTPS/TLS).",
      "Chamar cookies de vírus ou dizer que ficam no servidor: ficam no dispositivo do usuário.",
      "Confundir cache, histórico e cookies."
    ]],
    ["h", "5. Erros comuns"],
    ["ul", [
      "Olhar só o início do domínio e ignorar o final.",
      "Aceitar todos os cookies sem ler."
    ]],
    ["h", "6. Mini-exercício"],
    ["ol", [
      "Questão 1. Qual a função do DNS?",
      "Questão 2. Na URL https://www.pe.gov.br/concurso, qual é o protocolo?",
      "Questão 3. Julgue: cookies são programas maliciosos instalados nos servidores."
    ]],
    ["p", "Gabarito comentado: (1) Traduzir nomes de domínio em endereços IP. (2) HTTPS. (3) Errado: são pequenos dados guardados no navegador do usuário e, por si sós, não são malware."],
    ["h", "7. Resumo de revisão"],
    ["ul", [
      "URL = protocolo + domínio + caminho + consulta; DNS traduz nomes em IP.",
      "Cookies mantêm sessão e rastreiam; cache acelera; histórico lista visitas.",
      "Domínio se lê da direita para a esquerda."
    ]]
  ],
  13: [
    ["h", "1. Conceito aprofundado: ligando ameaça, defesa e recuperação"],
    ["p", "A segurança eficaz combina prevenção, detecção e recuperação, e nenhuma camada isolada resolve tudo (defesa em profundidade). Prevenção: atualizações, senhas fortes, autenticação em dois fatores e privilégio mínimo (usar conta padrão no dia a dia, como na Aula 2). Detecção: antivírus e firewall (Aula 8). Recuperação: backup testado (Aula 9)."],
    ["p", "Quadro de associação, o que a prova costuma pedir:"],
    ["ul", [
      "Ransomware: a principal medida de recuperação é o backup isolado e testado; pagar o resgate não garante a devolução dos dados.",
      "Phishing por e-mail, smishing por SMS e vishing por voz são variações de engenharia social.",
      "DDoS: ataque à disponibilidade; botnet é a rede de máquinas usada nele.",
      "Pharming ou domínio parecido (gov-pe.net.br): confira o domínio e digite o endereço oficial."
    ]],
    ["h", "2. Firewall em detalhe"],
    ["p", "O firewall pode ser software (como o do Windows, em Segurança do Windows > Firewall e proteção de rede) ou equipamento de rede. Ele filtra pacotes e conexões por regras, como endereço, porta e protocolo, tanto na entrada quanto na saída. Não analisa o conteúdo de todo arquivo e não remove vírus."],
    ["h", "3. Roteiro de resposta a um incidente"],
    ["ol", [
      "Isole o equipamento da rede (desconecte o cabo ou o Wi-Fi).",
      "Não pague nem abra novos arquivos suspeitos; avise o responsável pela segurança.",
      "Verifique com antivírus atualizado e restaure os dados de um backup íntegro.",
      "Troque as senhas usadas no equipamento, a partir de um dispositivo seguro."
    ]],
    ["h", "4. Exemplos práticos comentados"],
    ["ul", [
      "Um funcionário abre uma nota fiscal falsa e os arquivos do servidor são criptografados. Sem backup desconectado, a recuperação é difícil; por isso a cópia fora de alcance é crítica.",
      "Um e-mail diz que a senha expira hoje e traz um link para um domínio parecido com o do órgão: engenharia social; confirme por canal independente."
    ]],
    ["h", "5. Como a banca (AOCP) cobra e pegadinhas"],
    ["ul", [
      "Trocar firewall por antivírus.",
      "Dizer que backup, firewall ou antivírus garante proteção total.",
      "Considerar sincronização em nuvem equivalente a backup (Aula 9)."
    ]],
    ["h", "6. Erros comuns"],
    ["ul", [
      "Usar a conta de administrador no dia a dia.",
      "Abrir anexos por curiosidade."
    ]],
    ["h", "7. Mini-exercício"],
    ["ol", [
      "Questão 1. Qual a principal medida de recuperação diante de ransomware?",
      "Questão 2. Que critérios um firewall usa para filtrar o tráfego?",
      "Questão 3. Como se chama o phishing feito por SMS?"
    ]],
    ["p", "Gabarito comentado: (1) Restaurar de backup íntegro, de preferência isolado da rede. (2) Regras, como endereço, porta e protocolo, na entrada e na saída. (3) Smishing."],
    ["h", "8. Resumo de revisão"],
    ["ul", [
      "Defesa em camadas: prevenir, detectar, recuperar.",
      "Firewall filtra tráfego por regras; antivírus detecta malware.",
      "Ransomware: backup isolado; pagar não garante recuperação."
    ]]
  ]
});
