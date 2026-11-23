(function () {
  'use strict';
  window.PCPE_TOPIC_GUIDES = window.PCPE_TOPIC_GUIDES || {};
  window.PCPE_DEEPENING = window.PCPE_DEEPENING || {};
  window.PCPE_QUESTOES = window.PCPE_QUESTOES || {};
  const topic = 'Correio eletrônico, sítios de busca, grupos de discussão e redes sociais';
  const base = window.PCPE_TOPIC_GUIDES[topic] || {};
  window.PCPE_TOPIC_GUIDES[topic] = Object.assign({}, base, {
    lessons: [
      [
        `Aula 1 · Modelo cliente-servidor`,
        `O modelo cliente-servidor é um modelo computacional que separa clientes e servidores, interligados geralmente por uma rede de computadores. Na navegação, a rede é a internet: o usuário (cliente) faz uma solicitação, o servidor a recebe e responde com o que foi solicitado. O mesmo modelo existe dentro de uma empresa, na rede local: as estações de trabalho são os clientes e o servidor da empresa atende a elas.`,
        `Esquema: de um lado, o cliente, representado na internet pelo navegador e identificado por um endereço IP; do outro, o servidor web, desenhado como uma nuvem (daí "computação em nuvem": dados e processamento em grandes computadores, e não nos seus dispositivos). O cliente solicita, o servidor lê o pedido e devolve, na maioria das vezes, uma página HTML.`,
        `Quem inicia é sempre o cliente: o usuário faz a solicitação e o servidor responde. Não confunda o modelo com a internet em si: ele também vale para uma rede interna da empresa.`
      ],
      [
        `Aula 1 · Navegador (cliente web) e servidor web`,
        `O navegador é o programa que oferece as ferramentas básicas de acesso à internet; ele é o cliente web. A pessoa é representada na internet pelo navegador, que é a interface de quem busca informações. Servidores web são computadores com grande capacidade de armazenamento e de processamento que disponibilizam serviços na internet; um deles é a página web.`,
        `O cliente usa uma máquina mais simples (smartphone, notebook, smart TV, desktop). O servidor é uma máquina "parruda", que atende milhares e milhares de acessos ao mesmo tempo. O navegador recebe a resposta, formata a informação pedida e a apresenta ao usuário.`,
        `Pegadinha: o "cliente" não é a pessoa em si, e sim o navegador que a representa na internet. E o servidor web não é um programa de navegação: é o computador que armazena e disponibiliza as páginas.`
      ],
      [
        `Aula 1 · Hipertexto, hipermídia e hiperlink`,
        `Hipertexto são textos cujo acesso se dá por meio de ligações digitais chamadas hiperlinks. Hipermídia são esses documentos de hipertexto ampliados com outros formatos de conteúdo: imagens, sons e vídeos. Hiperlink é a ligação, a referência dentro do hipertexto que leva você a outro conteúdo.`,
        `Quando você acessa uma página web, está acessando um hipertexto; o link que, num site de notícias, leva você a ver mais detalhes de uma informação é um hiperlink; e a página que reúne texto, imagem e vídeo é hipermídia.`,
        `São termos parecidos, e a banca explora isso. Hipermídia vai além do texto (imagens, sons, vídeos); hipertexto é o documento de texto da internet; hiperlink é a ligação existente dentro dele.`
      ],
      [
        `Aula 1 · HTTP x HTML`,
        `HTTP (Hypertext Transfer Protocol) é o protocolo de transferência de hipertexto: é o padrão pelo qual o navegador e o servidor se comunicam. HTML (HyperText Markup Language) é a linguagem de marcação de hipertexto: é o documento que estrutura toda a página web. Siglas parecidas, funções diferentes, e caem muito em prova.`,
        `Fluxo: o cliente solicita uma página fazendo uma requisição HTTP; o servidor recebe a requisição e responde enviando um HTML ao cliente, que o navegador exibe. Você pode ver o HTML de qualquer página clicando com o botão direito do mouse e escolhendo exibir o código-fonte.`,
        `Memorize: HTTP = protocolo (transferência); HTML = linguagem (marcação, estrutura da página). Se a questão disser que o HTTP é a linguagem de marcação, ou que o HTML é o protocolo, está trocada.`
      ],
      [
        `Aula 1 · Correio eletrônico: endereço, caixa de entrada e anexos`,
        `O correio eletrônico (e-mail) é o serviço de envio e recebimento de mensagens eletrônicas na rede, uma das primeiras tecnologias de troca de mensagens da internet. Para usá-lo você precisa de uma conta em um provedor, e o endereço de e-mail é uma das formas de identificar o usuário. O arroba (@) separa o nome do usuário do domínio (o provedor ou a instituição). A caixa de entrada é o diretório onde ficam as mensagens recebidas.`,
        `Padrão: nome do usuário@domínio, por exemplo @gmail.com ou @hotmail.com (e, para uma instituição, o domínio dela, como em .gov.br). Provedores citados: Gmail, do Google, e Outlook, da Microsoft. Você pode anexar qualquer tipo de arquivo (PDF, DOC, DOCX, vídeos...), desde que não ultrapasse o tamanho permitido: no Gmail, 25 MB; acima disso o arquivo é compartilhado por meio do Google Drive.`,
        `O limite de anexos varia conforme o provedor, e é o provedor que define o limite. Quem pode receber o e-mail é qualquer pessoa que tenha uma conta de e-mail.`
      ],
      [
        `Aula 1 · Para, Cc e Cco`,
        `Ao criar uma mensagem você tem três campos de destinatários. Para: o destinatário original, a quem a mensagem se dirige diretamente. Cc (com cópia): para enviar a algum interessado que não é o destinatário principal, apenas para que tome ciência. Cco (com cópia oculta): para enviar a outros interessados sem que os demais vejam quem mais recebeu. Cc vem de "carbon copy" (cópia de carbono, como o antigo papel carbono) e Cco, de "blind carbon copy" (cópia de carbono cega).`,
        `Exemplo de Cc: você envia um e-mail a um funcionário (campo Para) e quer que o chefe dele também saiba; coloca o chefe em Cc. O funcionário vê que o chefe recebeu cópia. Exemplo de Cco: você, como docente, envia um aviso a cinco alunos e não quer que um saiba quem mais recebeu; coloca todos em Cco.`,
        `Regra para a prova: quem está em Para e em Cc tem seu endereço visível a todos os destinatários; quem está em Cco não tem o endereço visível aos demais. Cco é a cópia "cega", "às escuras".`
      ],
      [
        `Aula 1 · Grupos de discussão`,
        `Grupos de discussão são formados por indivíduos que compartilham interesses semelhantes e se reúnem para discutir, tirar dúvidas, resolver problemas ou fazer comentários sobre um determinado tópico. Três formas importantes: as comunidades (comunidades digitais na internet), os grupos de e-mail (listas de discussão) e os fóruns.`,
        `Comunidade: uma comunidade de programadores de uma linguagem, como o Java, na qual os mais experientes ajudam quem está começando. Grupo de e-mail ou lista de discussão: você cadastra os endereços de e-mail no grupo; quando alguém publica (um evento, um congresso), todos os membros recebem o e-mail e podem dar retorno. Fórum: alguém lança uma pergunta num tópico e as pessoas respondem logo abaixo.`,
        `Não confunda os três: comunidade = reunião de pessoas por tema; lista de discussão = grupo de endereços de e-mail que recebem as mensagens; fórum = tópicos com perguntas e respostas.`
      ],
      [
        `Aula 1 · Redes sociais`,
        `Rede social é uma estrutura social composta por pessoas e organizações conectadas por um ou vários tipos de relações, que compartilham valores e objetivos comuns. Ela tem três elementos básicos: os atores (pessoas e organizações, também chamados de nós), os vínculos (ligações entre os atores) e os fluxos de informação (as mensagens e publicações trocadas entre eles).`,
        `Exemplo: ao seguir alguém ou ter um pedido de amizade aceito, você cria um vínculo; ao publicar no seu feed, a informação flui para todos que têm vínculo com você. Representada como grafo, a rede é um conjunto de nós ligados a outros nós. Exemplos de redes: Instagram (fotos e vídeos), Facebook, YouTube (vídeos), WhatsApp (mensagens), Twitter (mensagens curtas), Snapchat, Pinterest (fotos), TikTok e LinkedIn (rede profissional).`,
        `O fluxo de informação não é unidimensional: todos podem enviar e receber, numa configuração colaborativa. LinkedIn é a rede profissional, voltada a vínculos profissionais e à seleção de profissionais.`
      ]
    ],
    practice: [
      `Descreva o modelo cliente-servidor, indicando quem inicia a comunicação, o que o servidor devolve e se o modelo só existe na internet.`,
      `Diferencie hipertexto, hipermídia e hiperlink.`,
      `Qual a diferença entre HTTP e HTML? Descreva o caminho de uma requisição de página.`,
      `Qual a diferença entre os campos Para, Cc e Cco? Em que caso você usaria o Cco?`,
      `Cite os três elementos básicos de uma rede social e as três formas de grupos de discussão.`
    ],
    answers: [
      `O modelo separa clientes e servidores ligados por uma rede. O cliente (navegador, identificado por um IP) inicia a solicitação; o servidor a recebe, lê e devolve, na maioria das vezes, uma página HTML. Não existe só na internet: também funciona na rede local de uma empresa.`,
      `Hipertexto: textos acessados por ligações digitais, os hiperlinks. Hipermídia: documentos de hipertexto que incluem também imagens, sons e vídeos. Hiperlink: a ligação ou referência dentro do hipertexto que leva a outro conteúdo.`,
      `HTTP é o protocolo de transferência de hipertexto; HTML é a linguagem de marcação de hipertexto, que estrutura a página. O cliente faz uma requisição HTTP, o servidor a recebe e responde enviando um HTML, que o navegador exibe.`,
      `Para: destinatário original. Cc: cópia a interessado que apenas toma ciência; todos veem os endereços. Cco: cópia oculta; os demais não veem os endereços. Usa-se o Cco quando você não quer que os destinatários saibam quem mais recebeu a mensagem.`,
      `Elementos da rede social: atores (nós), vínculos e fluxos de informação. Grupos de discussão: comunidades, grupos de e-mail (listas de discussão) e fóruns.`
    ]
  });

  window.PCPE_DEEPENING[topic] = {
    1: [
      ['h', `Aula 1 · Modelo cliente-servidor`],
      ['p', `Quando você abre uma página na internet, o navegador acessa um servidor por meio do protocolo HTTP, e esse servidor devolve a página. Esse tipo de relação é conhecido como modelo cliente-servidor, e entendê-lo é a base para tudo o que vem depois neste tópico.`],
      ['h', `Definição`],
      ['p', `O modelo cliente-servidor é um modelo computacional que separa clientes e servidores, interligados entre si geralmente por uma rede de computadores. No caso da navegação, essa rede é a internet, a grande rede de computadores.`],
      ['h', `Não existe só na internet`],
      ['p', `O mesmo modelo existe de forma local. Numa empresa, os computadores de cada setor acessam, pela rede local, um servidor da própria empresa. Os clientes são as estações de trabalho; o servidor atende a elas. Portanto, a internet é apenas um caso do modelo cliente-servidor, e não o único.`],
      ['h', `Como o esquema funciona`],
      ['ol', [
        `De um lado fica o cliente; do outro, o servidor. O servidor costuma ser desenhado como uma nuvem, e é daí que vem a ideia de computação em nuvem: a tendência é os dados não ficarem mais nos dispositivos do usuário, mas em grandes computadores, com grande capacidade de armazenamento e de processamento.`,
        `O usuário realiza uma solicitação. É sempre o usuário (cliente) quem faz a solicitação.`,
        `O servidor recebe a solicitação e responde ao usuário com o que foi solicitado.`
      ]],
      ['h', `Lado do cliente e lado do servidor`],
      ['ul', [
        `Cliente: representado na internet por meio do navegador. Tem um endereço IP, que o identifica unicamente naquela rede. Solicita dados a um servidor web. O navegador percebe a resposta, formata a informação pedida e a apresenta ao usuário.`,
        `Servidor web: recebe as requisições, lê os dados e retorna ao cliente. Na maioria das vezes, o retorno é uma página HTML.`
      ]],
      ['h', `Pegadinhas`],
      ['ul', [
        `Dizer que o servidor inicia a comunicação: quem solicita é o cliente.`,
        `Achar que o modelo só funciona na internet: também vale para a rede local de uma empresa.`,
        `Achar que o cliente é um tipo de máquina específica: ele é representado pelo navegador (ver lição seguinte).`
      ]],
      ['h', `Resumo de revisão`],
      ['ul', [
        `Modelo cliente-servidor: separa clientes e servidores interligados por uma rede (internet ou rede local).`,
        `O cliente solicita; o servidor recebe, lê e responde.`,
        `O cliente é identificado por um endereço IP e representado pelo navegador.`,
        `O retorno do servidor web é, na maioria das vezes, uma página HTML.`,
        `Servidor desenhado como nuvem: computação em nuvem, dados em grandes computadores.`
      ]]
    ],
    2: [
      ['h', `Aula 1 · Navegador (cliente web) e servidor web`],
      ['p', `Na lição anterior você viu o esquema geral. Agora vamos fixar quem é quem, porque as bancas gostam de trocar os papéis.`],
      ['h', `Navegador`],
      ['p', `O navegador é o aplicativo, ou seja, um programa que disponibiliza ferramentas básicas para o acesso à internet. Por isso ele é o cliente web. Atenção ao detalhe: você pode pensar que o cliente é a pessoa, mas a pessoa é representada na internet pelo navegador. O navegador é a interface que representa uma pessoa buscando informações na internet.`],
      ['h', `Servidor web`],
      ['p', `Servidores web são computadores com grande capacidade de armazenamento e grande capacidade de processamento, que disponibilizam serviços da internet. Um desses serviços é a página web.`],
      ['h', `Comparando as máquinas`],
      ['ul', [
        `Cliente: uma máquina mais simples, como smartphone, notebook, smart TV ou computador desktop de mesa.`,
        `Servidor: uma máquina "parruda", de grande capacidade de processamento e armazenamento, que atende milhares e milhares de acessos ao mesmo tempo.`
      ]],
      ['h', `O que a página web oferece`],
      ['p', `A página web, que você acessa o tempo todo, disponibiliza vários tipos de conteúdo: mensagens e e-mails, figuras, vídeos, arquivos e redes sociais. Os itens de e-mail, grupos de discussão e redes sociais serão vistos nas próximas lições.`],
      ['h', `Pegadinhas`],
      ['ul', [
        `"Cliente é o usuário": a pessoa é representada pelo navegador, que é o cliente web.`,
        `"Navegador é o servidor": o navegador é o cliente; o servidor é o computador que armazena e entrega as páginas.`,
        `"Servidor é um computador comum": é uma máquina de grande capacidade de armazenamento e de processamento.`
      ]],
      ['h', `Resumo de revisão`],
      ['ul', [
        `Navegador = programa de acesso à internet = cliente web.`,
        `Servidor web = computador de grande capacidade de armazenamento e processamento que disponibiliza serviços, como a página web.`,
        `Cliente roda em máquinas simples (smartphone, notebook, smart TV, desktop); servidor atende milhares de acessos simultâneos.`
      ]]
    ],
    3: [
      ['h', `Aula 1 · Hipertexto, hipermídia e hiperlink`],
      ['p', `Três nomenclaturas com o prefixo "hiper" aparecem quando se fala de páginas web. Os termos são parecidos e até certo ponto similares, por isso vale separar bem cada definição.`],
      ['h', `Hipertexto`],
      ['p', `Hipertexto são textos cujo acesso se dá por meio de ligações digitais, denominadas hiperlinks. Os documentos da internet não são apenas textos em um formato qualquer: o acesso a eles se dá por meio dessas ligações. Quando você acessa uma página web, está acessando um hipertexto.`],
      ['h', `Hiperlink`],
      ['p', `Hiperlink é a ligação, a referência existente dentro de um hipertexto. Quando você está num site de notícias e há um link para ver mais detalhes daquela informação, esse link é um hiperlink. Você clica e vai a outro conteúdo.`],
      ['h', `Hipermídia`],
      ['p', `Hipermídia são os documentos formados de hipertexto que incluem, além do texto, imagens, sons e vídeos. Toda essa gama de formatos de conteúdo existente na internet é a hipermídia.`],
      ['h', `Como diferenciar`],
      ['ul', [
        `Hipertexto: textos acessados por hiperlinks; o documento da internet.`,
        `Hiperlink: as ligações que existem dentro do hipertexto.`,
        `Hipermídia: vai além do texto, incluindo imagens, sons e vídeos.`
      ]],
      ['h', `Pegadinhas`],
      ['ul', [
        `Trocar "hipertexto" por "hipermídia": só a hipermídia envolve imagens, sons e vídeos.`,
        `Chamar o hiperlink de documento: ele é a ligação dentro do documento.`
      ]],
      ['h', `Resumo de revisão`],
      ['ul', [
        `Hipertexto = textos acessados por hiperlinks.`,
        `Hiperlink = ligação digital, referência dentro de um hipertexto.`,
        `Hipermídia = hipertexto com imagens, sons e vídeos.`,
        `Uma página web é um hipertexto.`
      ]]
    ],
    4: [
      ['h', `Aula 1 · HTTP x HTML`],
      ['p', `HTTP e HTML são siglas que caem muito em prova justamente por serem parecidas. Aprenda o nome em inglês de cada uma e a função: isso resolve a questão.`],
      ['h', `HTTP`],
      ['p', `HTTP vem de Hypertext Transfer Protocol: protocolo de transferência de hipertexto. É um protocolo padrão para a transferência de hipertexto, ou seja, a forma pela qual o cliente e o servidor trocam as páginas.`],
      ['h', `HTML`],
      ['p', `HTML vem de HyperText Markup Language: linguagem de marcação de hipertexto. É uma linguagem, e o documento HTML estrutura toda a página web, para que seja exibida aquilo que você vê, com as informações organizadas. É o documento da internet, no qual as informações do hipertexto são formatadas.`],
      ['p', `Para ver isso na prática, abra qualquer site, clique com o botão direito do mouse e peça para exibir o código-fonte: o navegador mostrará o HTML que há por trás da página, cheio de marcações (tags). Por ser um documento de hipertexto, ele traz muito texto e muitas marcações.`],
      ['h', `O fluxo completo`],
      ['ol', [
        `O cliente solicita uma página na internet: faz uma requisição por meio do protocolo HTTP.`,
        `O servidor recebe a requisição.`,
        `O servidor responde enviando um HTML ao cliente que o solicitou.`,
        `O navegador do cliente exibe a página formatada.`
      ]],
      ['h', `Pegadinhas`],
      ['ul', [
        `Chamar o HTTP de linguagem: ele é protocolo (transferência).`,
        `Chamar o HTML de protocolo: ele é linguagem (marcação) e documento da internet.`,
        `Inverter o fluxo: a requisição HTTP parte do cliente; o HTML é a resposta do servidor.`
      ]],
      ['h', `Resumo de revisão`],
      ['ul', [
        `HTTP = protocolo de transferência de hipertexto.`,
        `HTML = linguagem de marcação de hipertexto; estrutura a página web.`,
        `Cliente faz requisição HTTP; servidor responde com HTML.`,
        `Botão direito > exibir código-fonte mostra o HTML da página.`
      ]]
    ],
    5: [
      ['h', `Aula 1 · Correio eletrônico: endereço, caixa de entrada e anexos`],
      ['p', `O correio eletrônico, ou e-mail, é o serviço de envio e recebimento de mensagens eletrônicas pela rede. Foi uma das primeiras tecnologias de troca de mensagens na internet e continua muito usado, até porque as pessoas precisam do endereço de e-mail para se cadastrar em plataformas, e o endereço é uma das formas de identificação do usuário.`],
      ['h', `Endereço de e-mail`],
      ['p', `Para ter um endereço, você precisa de uma conta em um provedor de e-mail. O padrão é o símbolo de arroba (@), usado para separar e diferenciar o nome do usuário do nome do domínio, que é o provedor do serviço ou a instituição.`],
      ['ul', [
        `Modelo: nomedousuario@nomedodomínio.`,
        `Domínios de provedores: gmail.com, hotmail.com, entre outros.`,
        `Domínio de instituição: quem ingressa numa instituição pública recebe um endereço terminado no domínio dela, como .gov.br.`
      ]],
      ['h', `Caixa de entrada`],
      ['p', `A caixa de entrada é um diretório (um local onde as coisas ficam organizadas e armazenadas) em que você encontra todas as mensagens recebidas.`],
      ['h', `Provedores`],
      ['p', `Os dois mais comuns são o Gmail, do Google, e o Outlook, da Microsoft. Existem ainda provedores mais antigos, ainda em uso por quem criou o primeiro endereço há muito tempo. Você pode enviar uma mensagem a qualquer pessoa que tenha uma conta de e-mail, independentemente do provedor dela.`],
      ['h', `Anexos`],
      ['p', `É possível anexar qualquer tipo de arquivo (PDF, DOC, DOCX, vídeos), desde que não ultrapasse o tamanho permitido pelo provedor. No Gmail, o limite de anexos é de 25 MB. Se o arquivo for maior, o Gmail avisa e passa a compartilhá-lo pelo Google Drive, que deixa o arquivo disponível por link; isso se liga à computação em nuvem.`],
      ['h', `Pegadinhas`],
      ['ul', [
        `Afirmar que só se anexam arquivos de texto: qualquer tipo pode ser anexado, respeitado o limite de tamanho.`,
        `Dizer que o e-mail se tornou obsoleto: continua sendo usado e é meio de identificação em cadastros.`,
        `Confundir o domínio com o nome do usuário: o arroba separa as duas partes.`
      ]],
      ['h', `Resumo de revisão`],
      ['ul', [
        `E-mail = serviço de envio e recebimento de mensagens eletrônicas.`,
        `Formato: usuário@domínio; o arroba separa o nome do usuário do domínio.`,
        `Caixa de entrada = diretório das mensagens recebidas.`,
        `Provedores: Gmail (Google) e Outlook (Microsoft).`,
        `Anexos: qualquer tipo de arquivo, dentro do tamanho permitido (Gmail: 25 MB; acima disso, vira link do Drive).`
      ]]
    ],
    6: [
      ['h', `Aula 1 · Para, Cc e Cco`],
      ['p', `Ao criar uma nova mensagem, você coloca o destinatário no campo Para e pode também usar os campos Cc e Cco. A diferença entre eles está em quem consegue ver os endereços de quem mais recebeu a mesma mensagem. É um assunto muito cobrado, e a regra é simples.`],
      ['h', `Para`],
      ['p', `É o destinatário original, aquele diretamente interessado. Se você envia a mensagem para apenas uma pessoa, coloca o endereço em Para. Se for para duas pessoas igualmente interessadas, pode colocar as duas em Para; nesse caso, elas verão no cabeçalho do e-mail que a mensagem foi enviada para a outra também.`],
      ['h', `Cc (com cópia)`],
      ['p', `É a sigla de "carbon copy": cópia de carbono, como o antigo papel carbono. Serve para enviar a mensagem a algum interessado que não é o destinatário principal. Exemplo: você envia um e-mail a um funcionário da empresa, mas quer que o chefe dele fique sabendo; o funcionário vai em Para e o e-mail do chefe, ou do departamento, vai em Cc. Fica claro que a mensagem é para o funcionário, e o chefe apenas toma ciência.`],
      ['p', `Todos os que recebem a mensagem conseguem ver o endereço de quem mais recebeu. Quem estava em Para vê quem está em Cc, e vice-versa.`],
      ['h', `Cco (com cópia oculta)`],
      ['p', `É a sigla de "blind carbon copy": cópia de carbono cega, ou às escuras (no inglês, Bcc). Também é uma cópia, mas quem recebe a mensagem não consegue ver quem mais recebeu cópia oculta. Ninguém vê os endereços colocados em Cco.`],
      ['p', `Exemplo: você, docente de informática, vai enviar um aviso a cinco alunos e não quer que cada um saiba quem mais recebeu, para evitar conversa depois na sala de aula. Você coloca os endereços dos cinco no campo Cco; assim, nenhum aluno vê os endereços dos outros.`],
      ['h', `Quadro comparativo`],
      ['ul', [
        `Para: destinatário original, diretamente interessado. Endereços visíveis a todos os que receberam.`,
        `Cc: interessado que não é o principal e apenas toma ciência. Endereços visíveis a todos.`,
        `Cco: usado quando você não quer que as pessoas vejam quem mais recebeu a mensagem. Endereços não visíveis.`
      ]],
      ['h', `Pegadinhas`],
      ['ul', [
        `Achar que o Cco "esconde a mensagem": ele esconde o endereço de quem foi colocado nesse campo, não o conteúdo.`,
        `Trocar o significado das siglas: Cc é cópia de carbono (visível); Cco é cópia de carbono oculta.`,
        `Colocar todos em Para ou Cc quando se quer privacidade: todos verão os endereços uns dos outros.`
      ]],
      ['h', `Resumo de revisão`],
      ['ul', [
        `Para = destinatário original; Cc = cópia a quem só precisa tomar ciência; Cco = cópia oculta.`,
        `Em Para e Cc, todos veem quem mais recebeu; em Cco, os endereços ficam ocultos.`,
        `Cc: carbon copy (papel carbono); Cco: blind carbon copy (carbono cego).`,
        `Use Cco quando não quiser revelar quem mais recebeu a mensagem.`
      ]]
    ],
    7: [
      ['h', `Aula 1 · Grupos de discussão`],
      ['p', `Grupos de discussão são formados por indivíduos que compartilham interesses semelhantes e se reúnem para discutir, tirar dúvidas, resolver problemas ou fazer comentários a respeito de um determinado tópico. Existem três formas que você precisa reconhecer.`],
      ['h', `1. Comunidades`],
      ['p', `Comunidade é um grupo de discussão formado na internet, uma comunidade digital. Nela, pessoas que usam uma determinada tecnologia tiram dúvidas e respondem às dúvidas dos outros. Exemplo: uma comunidade de programadores da linguagem Java, em que os mais antigos ajudam quem está começando ou quem encontrou um problema que não conseguiu resolver sozinho. Existem comunidades para muitos temas: informática, direito, engenharias e assim por diante.`],
      ['h', `2. Grupos de e-mail (listas de discussão)`],
      ['p', `Também chamados de grupos de Gmail ou listas de discussão. O serviço de e-mail permite criar grupos de e-mail, nos quais você coloca todos os endereços que ficarão vinculados ao grupo. Cada vez que alguém tem um tema, evento ou congresso para divulgar, publica no grupo, e todos os cadastrados recebem o e-mail, podendo participar e dar retorno sobre o tema. Exemplo: uma lista da área de informática na educação, para a qual o endereço de e-mail de cada participante é cadastrado.`],
      ['h', `3. Fóruns`],
      ['p', `O fórum é uma ferramenta para discutir um tema por meio de tópicos. Dentro de uma comunidade, como a da linguagem de programação Java, existem vários fóruns com tópicos sobre temas específicos (por exemplo, como fazer um comando de entrada e saída, como criar uma classe). Alguém lança uma pergunta no fórum e as pessoas respondem logo abaixo. Você já deve ter caído em um fórum ao pesquisar algo na internet: alguém já havia feito a pergunta e outras pessoas responderam.`],
      ['h', `Um exemplo histórico: as comunidades do Orkut`],
      ['p', `O Orkut, uma das primeiras redes sociais (só entrava quem era convidado), trouxe o conceito de comunidade: grupos de pessoas que participavam e discutiam um determinado tema.`],
      ['h', `Pegadinhas`],
      ['ul', [
        `Confundir a lista de discussão com a comunidade: a lista funciona por e-mail, com endereços cadastrados no grupo.`,
        `Achar que fórum e rede social são a mesma coisa: o fórum organiza a discussão em tópicos de perguntas e respostas.`
      ]],
      ['h', `Resumo de revisão`],
      ['ul', [
        `Grupos de discussão: pessoas com interesses semelhantes que debatem, tiram dúvidas e comentam um tópico.`,
        `Formas: comunidades (comunidades digitais), grupos de e-mail ou listas de discussão e fóruns.`,
        `Lista de discussão: todos os endereços cadastrados recebem as mensagens publicadas.`,
        `Fórum: tópicos com perguntas e respostas.`
      ]]
    ],
    8: [
      ['h', `Aula 1 · Redes sociais`],
      ['p', `Rede social é uma estrutura social composta por pessoas e organizações conectadas por um ou vários tipos de relações, que compartilham valores e objetivos comuns.`],
      ['h', `Os três elementos básicos`],
      ['ol', [
        `Atores: as pessoas e as organizações. Também são chamados de nós da rede. Você, em uma rede social, é um ator (um nó).`,
        `Vínculos: as ligações entre os atores. Quando você começa a seguir outra pessoa, ou faz uma amizade e a pessoa aceita o pedido, forma-se um vínculo.`,
        `Fluxos de informação: as informações que circulam. Você pode mandar mensagem a alguém e essa pessoa pode mandar a você; ou pode publicar no seu feed de notícias, e a publicação é mostrada a todos os que têm vínculo com você.`
      ]],
      ['p', `O fluxo raramente é unidimensional, com apenas uma pessoa mandando mensagem. A rede social tem configuração de rede colaborativa: as pessoas colaboram publicando informações.`],
      ['h', `Rede social como grafo`],
      ['p', `Visto de forma científica, o conjunto de uma rede social é um grafo: cada ator é um nó ligado por vínculos a outros nós. Assim, a rede é formada por pessoas e instituições compartilhando enorme quantidade de informação.`],
      ['h', `Principais redes sociais`],
      ['ul', [
        `Instagram: compartilhamento de fotos e vídeos; muitas instituições divulgam produtos e as pessoas as seguem para ficar por dentro das novidades.`,
        `Facebook: semelhante ao Instagram, com uma pegada mais voltada ao pessoal; também muito usado por instituições; permite publicar fotos.`,
        `Google Plus: tentativa do Google de entrar no meio das redes sociais, que não deu muito certo.`,
        `YouTube: publicação de vídeos.`,
        `WhatsApp: troca de mensagens. Instagram, Facebook e WhatsApp têm o mesmo dono.`,
        `Twitter: mensagens curtas, de poucos caracteres.`,
        `Snapchat: compartilhamento de informações e vídeos; ficou conhecido pelos "stories".`,
        `Pinterest: compartilhamento de fotos.`,
        `TikTok: rede de vídeos curtos.`,
        `LinkedIn: rede profissional, voltada a criar vínculos profissionais e a manter as informações atualizadas para seleção de profissionais.`,
        `Orkut: uma das primeiras redes sociais; trouxe o conceito de comunidade.`
      ]],
      ['h', `Pegadinhas`],
      ['ul', [
        `Trocar "atores" por "usuários" apenas: os atores incluem pessoas e organizações.`,
        `Achar que o fluxo é sempre de um para muitos: pode ser nos dois sentidos, de forma colaborativa.`,
        `Confundir a finalidade: LinkedIn é profissional; WhatsApp é troca de mensagens; YouTube, vídeos.`
      ]],
      ['h', `Resumo de revisão`],
      ['ul', [
        `Rede social = estrutura social de pessoas e organizações conectadas por relações, com valores e objetivos comuns.`,
        `Três elementos: atores (nós), vínculos e fluxos de informação.`,
        `Representada como grafo; configuração colaborativa.`,
        `LinkedIn é a rede profissional; Orkut trouxe o conceito de comunidade.`
      ]]
    ]
  };

  window.PCPE_QUESTOES[topic] = [
    {
      text: `Sobre o modelo cliente-servidor, é correto afirmar que:`,
      options: [
        `separa clientes e servidores interligados por uma rede, que pode ser a internet ou a rede local de uma empresa; o cliente solicita e o servidor responde.`,
        `só existe na internet, porque depende de páginas web.`,
        `o servidor sempre inicia a comunicação, enviando páginas ao cliente sem solicitação.`,
        `o cliente é um computador de grande capacidade de processamento que atende milhares de acessos ao mesmo tempo.`
      ],
      correct: 0,
      exp: `O modelo separa clientes e servidores em rede; vale também para a rede local da empresa; quem solicita é o cliente. Grande capacidade e milhares de acessos descrevem o servidor, não o cliente.`
    },
    {
      text: `Na navegação na internet, o navegador (browser) é:`,
      options: [
        `o servidor web, que armazena as páginas e atende a milhares de acessos.`,
        `um protocolo de transferência de hipertexto.`,
        `o cliente web: o programa que oferece as ferramentas básicas de acesso e que representa o usuário na internet.`,
        `a linguagem que estrutura a página web.`
      ],
      correct: 2,
      exp: `O navegador é um aplicativo e o cliente web, que representa a pessoa na internet. Servidor é o computador de grande capacidade; protocolo é o HTTP; linguagem de marcação é o HTML.`
    },
    {
      text: `Os textos cujo acesso se dá por meio de ligações digitais denominadas hiperlinks são chamados de:`,
      options: [
        `hipermídia, que é exclusivamente texto.`,
        `hipertexto; já a hipermídia reúne, além do texto, imagens, sons e vídeos.`,
        `hiperlinks, e o hipertexto é a ligação existente entre eles.`,
        `HTML, e a hipermídia é o protocolo que os transfere.`
      ],
      correct: 1,
      exp: `Hipertexto são textos acessados por hiperlinks; hipermídia vai além, incluindo imagens, sons e vídeos. O hiperlink é a ligação dentro do hipertexto, e HTML e protocolo são outros conceitos.`
    },
    {
      text: `Assinale a alternativa que relaciona corretamente as siglas HTTP e HTML:`,
      options: [
        `HTTP é a linguagem de marcação de hipertexto; HTML é o protocolo de transferência.`,
        `HTTP e HTML são dois protocolos de transferência de hipertexto.`,
        `HTTP e HTML são linguagens usadas apenas por servidores de e-mail.`,
        `HTTP é o protocolo de transferência de hipertexto; HTML é a linguagem de marcação que estrutura a página web.`
      ],
      correct: 3,
      exp: `HTTP = Hypertext Transfer Protocol (protocolo); HTML = HyperText Markup Language (linguagem de marcação). As demais alternativas invertem ou igualam as duas siglas.`
    },
    {
      text: `Ao digitar o endereço de um site, o usuário faz uma requisição. A sequência correta do que acontece é:`,
      options: [
        `o servidor envia um HTML ao navegador, que depois faz uma requisição HTTP.`,
        `o servidor faz uma requisição HTML e o cliente responde com o protocolo HTTP.`,
        `o cliente faz uma requisição via HTTP; o servidor a recebe e responde enviando um HTML, que o navegador exibe.`,
        `o cliente envia um HTML e o servidor responde com um protocolo.`
      ],
      correct: 2,
      exp: `A requisição HTTP parte do cliente; o servidor responde com um HTML, que o navegador formata e exibe. As demais alternativas invertem a ordem ou os papéis.`
    },
    {
      text: `Sobre o correio eletrônico, é correto afirmar que:`,
      options: [
        `o símbolo @ separa o nome do usuário do domínio, e é possível anexar qualquer tipo de arquivo, desde que respeitado o tamanho permitido.`,
        `só é possível anexar arquivos de texto, como DOC e DOCX.`,
        `a caixa de entrada é o diretório onde ficam as mensagens enviadas.`,
        `só se envia e-mail a pessoas que usam o mesmo provedor do remetente.`
      ],
      correct: 0,
      exp: `O arroba separa usuário e domínio, e qualquer arquivo pode ser anexado dentro do limite do provedor. A caixa de entrada guarda as mensagens recebidas, e é possível escrever a qualquer pessoa com conta de e-mail, de qualquer provedor.`
    },
    {
      text: `Um funcionário envia uma mensagem a um colega, que é o destinatário principal, e deseja que o chefe do colega apenas tome ciência do conteúdo, sem ser o destinatário principal. Nessa situação, o chefe deve ser colocado no campo:`,
      options: [
        `Cco, porque assim o chefe é o destinatário original.`,
        `Para, junto com o colega, porque o chefe precisa ser destinatário principal.`,
        `Cco, pois o campo Cc oculta o endereço do chefe do colega.`,
        `Cc (com cópia), mantendo o colega em Para; todos os que receberem a mensagem verão o endereço de quem mais recebeu.`
      ],
      correct: 3,
      exp: `Cc serve para enviar a interessado que não é o destinatário principal e apenas toma ciência; em Para e Cc os endereços são visíveis a todos. Cco serve para ocultar endereços e Para é do destinatário original.`
    },
    {
      text: `Um docente precisa enviar o mesmo aviso a cinco alunos, mas não quer que um aluno saiba quem mais recebeu a mensagem. O mais adequado é colocar os endereços no campo:`,
      options: [
        `Cc, porque a cópia de carbono impede que os endereços apareçam.`,
        `Cco, cópia de carbono oculta, em que os destinatários não veem os endereços de quem mais recebeu a cópia.`,
        `Para, pois assim cada aluno vê apenas o próprio endereço.`,
        `Para e Cc ao mesmo tempo, pois a repetição oculta os endereços.`
      ],
      correct: 1,
      exp: `O Cco (blind carbon copy) oculta os endereços dos demais destinatários. Em Para e em Cc todos veem quem mais recebeu, e repetir os campos não muda isso.`
    },
    {
      text: `Os grupos de discussão reúnem pessoas com interesses semelhantes para tirar dúvidas e comentar um tópico. Uma lista em que os endereços de e-mail dos participantes são cadastrados, de modo que todos recebem por e-mail o que cada um publica, é chamada de:`,
      options: [
        `fórum, em que perguntas são respondidas logo abaixo, em tópicos.`,
        `rede social, composta por atores, vínculos e fluxos.`,
        `grupo de e-mail (lista de discussão).`,
        `hipermídia, composta de textos, imagens e vídeos.`
      ],
      correct: 2,
      exp: `Grupo de e-mail ou lista de discussão: os endereços ficam vinculados ao grupo e todos recebem as publicações. O fórum organiza perguntas e respostas em tópicos, e rede social e hipermídia são outros conceitos.`
    },
    {
      text: `Os três elementos básicos de uma rede social são:`,
      options: [
        `atores (pessoas e organizações, também chamados de nós), vínculos e fluxos de informação.`,
        `comunidades, fóruns e listas de discussão.`,
        `cliente, servidor e protocolo.`,
        `hipertexto, hipermídia e hiperlink.`
      ],
      correct: 0,
      exp: `A rede social se estrutura em atores (nós), vínculos (ligações entre eles) e fluxos de informação. As demais alternativas listam as formas de grupos de discussão, o modelo cliente-servidor e os conceitos de hipertexto.`
    }
  ];
})();
