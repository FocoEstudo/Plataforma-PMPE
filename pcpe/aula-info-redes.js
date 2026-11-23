(function () {
  'use strict';
  window.PCPE_TOPIC_GUIDES = window.PCPE_TOPIC_GUIDES || {};
  window.PCPE_DEEPENING = window.PCPE_DEEPENING || {};
  window.PCPE_QUESTOES = window.PCPE_QUESTOES || {};
  const topic = 'Redes de computadores, Internet, intranet e navegadores';
  const base = window.PCPE_TOPIC_GUIDES[topic] || {};
  window.PCPE_TOPIC_GUIDES[topic] = Object.assign({}, base, {
    lessons: [
      [
        `Aula 1 · Navegadores de Internet`,
        `Navegador (browser) é o programa que você usa para acessar a internet, no computador, no celular ou em outros aparelhos. Os principais são o Google Chrome, o Mozilla Firefox, o Microsoft Edge (da mesma empresa do Windows), o Safari (usado principalmente em aparelhos da Apple) e o Opera. Todos fazem o mesmo trabalho: você digita o endereço de um site na barra de endereço ou pesquisa um assunto, e o navegador abre a página.`,
        `Para acessar o site da Caixa, você digita o endereço completo na barra de cima (www.caixa.gov.br) e aperta Enter; se não souber o endereço, pesquisa "caixa" no Google e clica no resultado. Para guardar um site que você usa sempre, clique na estrelinha no canto superior direito, dê um nome e conclua: ele vira um favorito, e você o acessa depois pela lista de favoritos, sem pesquisar de novo.`,
        `Google é um site de busca, não um navegador; Chrome é o navegador. Cada navegador tem seu jeito de mostrar os favoritos, e um pode ser mais rápido que outro. Ao digitar dados, confira se o endereço começa com https e se há o cadeado ou o escudinho: isso indica um site mais seguro.`
      ],
      [
        `Aula 2 · Endereço IP, tipos de IP e DHCP`,
        `O endereço IP é o número único que identifica cada máquina na internet (ou em qualquer rede). Ele é formado por quatro números de 0 a 255, separados por ponto (exemplo: 200.250.8.1). Duas máquinas não podem ter o mesmo IP na mesma rede, senão a informação não é entregue: o protocolo TCP/IP usa origem e destino, que são endereços IP, e um IP repetido gera conflito.`,
        `Ao se conectar ao provedor, sua máquina recebe um IP que fica com ela até a desconexão: é o IP dinâmico, fornecido por um servidor DHCP, que consulta sua tabela de endereços, entrega o primeiro livre e o recolhe quando você se desconecta, passando-o ao próximo. O IP fixo é configurado direto na placa de rede ou no modem e nunca muda; é usado em grandes empresas que oferecem serviços na internet ou acesso de colaboradores à rede.`,
        `Faixas iniciadas em 10, 172.16 e 192.168 são reservadas para redes internas e não são rastreáveis na internet. O DHCP distribui IP de forma dinâmica; não confunda com DNS, que traduz nomes.`
      ],
      [
        `Aula 2 · URL, domínio e DNS`,
        `Os computadores trabalham com IP, mas você trabalha com nomes. O nome amigável é a URL (Uniform Resource Locator), o localizador de recursos, que indica o protocolo e o endereço para acessar informações na internet. A estrutura é sempre: protocolo, dois pontos e duas barras (://), servidor e domínio. Quem traduz o nome em número de IP é o DNS (Domain Name System), uma base de dados hierárquica e distribuída.`,
        `Em https://www.google.com, https é o protocolo (navegação segura), www.google é o servidor e .com é o domínio comercial. Em http://www.uol.com.br, o domínio é .com.br (comercial do Brasil). Ao digitar google.com, seu computador pergunta ao DNS qual é o IP desse nome; recebido o número, ele consegue trocar informações com o servidor do Google.`,
        `Domínio funciona como a agenda de contatos: você guarda o nome, não o número (o CPF) da pessoa. A mnemônica: DNS converte nome em número. Sem sufixo de país, como em .com, o endereço é dos Estados Unidos ou global.`
      ],
      [
        `Aula 3 · O que é rede, meios físicos e cabos`,
        `Rede é um conjunto de dispositivos interligados, compartilhando recursos e serviços; o único objetivo de uma rede é o compartilhamento. Recurso é a parte física (uma impressora compartilhada, por exemplo); serviço é a parte lógica (programas, software). Cada dispositivo ligado é um nó (também chamado de host ou estação de trabalho). O meio físico pode ser guiado (com cabo) ou não guiado (sem fio, wireless).`,
        `Cabo coaxial: simples (um fio de cobre revestido), sofre interferência eletromagnética e é típico da topologia barramento (conectores BNC e T). Cabo de par trançado (UTP, ou STP se blindado): é o cabo de rede ou ethernet, com várias categorias e taxas de 10, 100, 1000 e 10.000 Mbps (padrão IEEE 802.3). Fibra óptica: fios de vidro, maior velocidade, menor degradação, imune à interferência eletromagnética, usada em interconexões intercontinentais; é cara e sensível a dobras.`,
        `Se a questão fala mal de um cabo, desconfie: ela costuma estar errada (por exemplo, dizer que o par trançado só alcança 10 Mbps). Sem fio: infravermelho, NFC, Bluetooth, Wi-Fi, WiMAX e satélite; o wireless também é meio físico, pois são ondas de rádio que enfrentam barreiras.`
      ],
      [
        `Aula 3 · Topologias, tipos de comunicação e equipamentos`,
        `Topologia é o desenho (layout) da rede, e a cobrada é a topologia física. Barramento: um cabo único (coaxial); se um computador falha, a rede continua; só para se o cabo romper; custo baixo, mas lenta quando há muitos computadores. Anel: circuito fechado, unidirecional, lenta; se um computador falha, toda a rede para. Estrela: um concentrador (hub, switch ou roteador) no centro; rápida, usa cabo UTP, fácil de diagnosticar, custo alto de cabeamento; se o concentrador para, toda a rede para; é a mais usada em empresas.`,
        `Quanto à comunicação: Simplex é unidirecional (a TV da Rede Globo transmite e você só recebe); half duplex vai e vem, mas um de cada vez (o rádio comunicador, com "câmbio"); full duplex é simultâneo (a internet). Os concentradores se diferenciam: o hub é "burro", difunde para todos; o switch entrega só ao destinatário (enlace); o roteador define a melhor rota (rede) e é o mais complexo.`,
        `Para o anel, pense só em coisas ruins. Para o hub, pense em difusão para todos. Não esqueça que, na estrela, a parada de um computador não derruba a rede; a parada do concentrador, sim.`
      ],
      [
        `Aula 3 · Abrangência física (PAN, LAN, MAN, WAN) e lógica (Internet, intranet, extranet)`,
        `A abrangência física é o tamanho da rede, e a primeira letra da sigla diz qual é: PAN (pessoal), LAN (local), MAN (metropolitana) e WAN (de longa distância, de larga escala). Com "W" na frente (WPAN, WLAN), a rede é sem fio. A abrangência lógica separa Internet (rede pública, aberta, a rede das redes), intranet (rede privada, de acesso restrito, com autenticação obrigatória) e extranet (acesso externo à intranet, por parceiros e colaboradores, por meio da internet ou VPN).`,
        `Exemplos: um celular com o fone Bluetooth é PAN; uma empresa ou lan house é LAN; os pontos de uma cidade interligados pelo provedor formam uma MAN; passou de uma cidade, é WAN, e a internet é o exemplo clássico. Na extranet, uma revendedora que se cadastra numa empresa de cosméticos acessa parte do conteúdo corporativo, e quem trabalha em casa e entra na rede da empresa também usa a extranet.`,
        `Internet e intranet usam os mesmos protocolos, serviços e tecnologias; o que muda é o objetivo (aberta x privada). Afirmar que usam tecnologias diferentes está errado. A intranet não é a sua casa: é uma rede corporativa de acesso restrito.`
      ],
      [
        `Aula 3 · Como a conexão acontece, Surface Web, Deep Web e Dark Web, e questões da primeira bateria`,
        `Para acessar a internet, seu dispositivo precisa de um modem, contratado de um provedor (ISP, provedor de serviço de internet). O sinal viaja pelos cabos das ruas, chega aos roteadores do provedor e, depois, por fibra óptica, rádio ou satélite até o servidor de destino. Seu dispositivo e o servidor do Google se comunicam por números de IP, como dois números de telefone, e não por nomes.`,
        `Quanto ao conteúdo, a Surface Web (web, a "ponta do iceberg") contém o que os mecanismos de busca indexam (Google, Facebook). A Deep Web contém o que não é indexado (conta bancária, dados de universidades, do governo e de empresas) e precisa de proteção. A Dark Web só é acessada por software específico (como o Tor) e por endereços terminados em .onion. Em questões: wireless significa sem fio; hotspot é o ponto de acesso; anel é unidirecional; barramento usa coaxial; Bluetooth é PAN; a internet é o exemplo de WAN.`,
        `VPN é a rede virtual privada que dá acesso seguro à distância à intranet, e esse acesso configura extranet. A internet é aberta ao público, mas pode ter login e senha: o que define a intranet é o acesso restrito ao conteúdo corporativo.`
      ],
      [
        `Aula 3 · Protocolos: TCP/IP, camadas, HTTP, HTTPS, FTP, DNS e e-mail`,
        `Protocolo é um conjunto de regras que permite a comunicação entre dois sistemas. O conjunto padrão usado na internet, na intranet e na extranet é o TCP/IP, organizado em camadas (aplicação, transporte, rede, enlace e física). No transporte, o TCP é confiável, orientado à conexão e garante a entrega; o UDP é rápido, não confiável e não garante a entrega, e serve para lives e streaming (Zoom, Meet, Teams).`,
        `Na camada de aplicação: HTTP transfere hipertexto sem criptografia; HTTPS é o HTTP com segurança (criptografia, certificado e cadeado, com TLS/SSL); FTP envia e baixa arquivos (portas 20 e 21); DNS converte nome em IP; DHCP distribui IP; Telnet é acesso remoto sem segurança, e SSH é com segurança. No e-mail, o SMTP envia, e o POP ou o IMAP recebem: o POP baixa e remove do servidor, e o IMAP mantém uma cópia no servidor.`,
        `Site HTTP não quer dizer site com vírus nem perigoso; só não protege os dados digitados. O SMTP é obrigatório para enviar, e o recebimento usa POP ou IMAP, nunca os dois juntos. VoIP leva a voz pela internet usando IP. O ICMP trata de erros na rede.`
      ],
      [
        `Aula 3 · IP versão 4, versão 6, MAC, IoT e questões finais`,
        `O IPv4 é formado por quatro grupos (octetos) de 0 a 255, separados por ponto, num total de 32 bits (4 x 8); o IPv6 tem oito grupos separados por dois pontos, em hexadecimal (números de 0 a 9 e letras de A a F, nunca além do F), num total de 128 bits. O IPv6 foi criado porque os cerca de 4 bilhões de endereços do IPv4 não bastam. O IP pode ser dinâmico ou fixo, e identifica sites, computadores, celulares, tablets e servidores; a Internet das Coisas (IoT) conecta lâmpadas, geladeiras e aspiradores a essa rede.`,
        `Para reconhecer um IPv4 numa questão, conte os grupos e confira o limite: precisam ser quatro grupos e nenhum pode passar de 255. Questões costumam usar três ou cinco grupos, ou um número como 257 ou 308, para errar o item. O número MAC é o endereço físico da placa de rede, único e exclusivo (como um CPF); o IP é como a comanda de restaurante, que você devolve ao sair e pode mudar.`,
        `No IPv6, o número pode ser qualquer um, mas a letra não ultrapassa F. Não confunda IP com MAC nem com o IMEI do celular (que é de identificação do aparelho celular e não da rede de computadores).`
      ]
    ],
    practice: [
      `Descreva como você abre um site e salva um favorito no navegador, e diga a diferença entre navegador e site de busca.`,
      `Explique a estrutura de um endereço IPv4, o que é IP dinâmico e fixo e qual a função do DHCP e a do DNS.`,
      `Compare as topologias barramento, anel e estrela e o que acontece em cada uma se um computador falhar; diferencie hub, switch e roteador.`,
      `Diferencie PAN, LAN, MAN e WAN, e Internet, intranet e extranet, citando o papel da VPN.`,
      `Diferencie HTTP e HTTPS, TCP e UDP, e POP e IMAP; diga para que servem FTP, DNS e SMTP.`
    ],
    answers: [
      `Digite o endereço na barra de endereço e aperte Enter (ou pesquise e clique no link do resultado); clique na estrelinha, dê um nome e conclua para salvar o favorito. Navegador (Chrome, Edge, Firefox) é o programa que acessa a internet; o site de busca (Google) é um site para pesquisar.`,
      `IPv4: quatro grupos de 0 a 255 separados por ponto. Dinâmico: entregue por um servidor DHCP enquanto você está conectado; fixo: configurado na placa de rede ou no modem e sempre o mesmo. DHCP distribui IP; DNS traduz nome em IP.`,
      `Barramento: um cabo (coaxial); se um computador falha, a rede segue; se o cabo rompe, para. Anel: circuito fechado, unidirecional e lento; a falha de um para tudo. Estrela: concentrador no centro; se um computador falha, a rede segue; se o concentrador falha, para. Hub difunde para todos; switch entrega ao destinatário; roteador escolhe a melhor rota.`,
      `PAN: pessoal (Bluetooth); LAN: local; MAN: cidade; WAN: mais que uma cidade (internet). Internet é pública; intranet é privada, com autenticação; extranet é acesso externo à intranet, por parceiros ou à distância, e a VPN é a rede virtual privada que o viabiliza.`,
      `HTTP transfere hipertexto sem criptografia; HTTPS tem criptografia e certificado (cadeado). TCP é confiável e garante a entrega; UDP é rápido, sem garantia (streaming). POP baixa e remove do servidor; IMAP mantém no servidor. FTP envia e baixa arquivos; DNS converte nome em IP; SMTP envia e-mail.`
    ]
  });

  window.PCPE_DEEPENING[topic] = {
    1: [
      ['h', `Aula 1 · Navegadores de Internet`],
      ['p', `Navegadores são os programas que você usa para acessar a internet, seja no computador, no celular ou em outros aparelhos. Para entrar na internet você precisa de um programa específico, e esse programa é o navegador (em inglês, browser).`],
      ['h', `Os principais navegadores e como reconhecê-los`],
      ['ul', [
        `Google Chrome: ícone colorido em três cores com uma bolinha azul no meio. É um dos dois mais utilizados hoje.`,
        `Microsoft Edge: o outro dos dois mais usados, da mesma empresa que fez o Windows.`,
        `Mozilla Firefox: símbolo de uma raposa em laranja, com uma bolinha no centro.`,
        `Safari: ícone azul, usado principalmente em computadores da Apple e em celulares como o iPhone.`,
        `Opera: também pode ser encontrado em alguns computadores.`
      ]],
      ['p', `Existem outros, mas esses são os principais. Se você encontrar qualquer um desses símbolos, pode clicar para navegar. Por isso esses programas se chamam navegadores.`],
      ['h', `Como abrir um navegador`],
      ['p', `Na área de trabalho (a tela principal do Windows) pode haver ícones de navegadores, e clicar em qualquer um abre o programa. Se o ícone não estiver lá, clique no botão Iniciar e procure o navegador na lista ou digite o nome do programa (por exemplo, "Edge") e abra-o.`],
      ['h', `Pesquisando e digitando endereços`],
      ['p', `O Chrome normalmente abre direto na página do Google, por ser da mesma empresa. Você pode fazer a pesquisa na barra de pesquisa ou digitar o endereço do site na barra de endereço, no alto. Por exemplo, digitando www.caixa.gov.br e apertando Enter, você vai direto ao site da Caixa, porque digitou o endereço correto. Se não souber o endereço completo, volte ao Google, pesquise "caixa" e aperte Enter: aparece o site da Caixa e opções de áreas do site (FGTS, Fale Conosco, boletos), além de endereços, localização e notícias.`],
      ['p', `Você também pode pesquisar uma pergunta, como "o que é um átomo". O Google traz a resposta de acordo com o dicionário, um resumo da Wikipédia à direita e vários sites. As linhas em azul são links: quando você passa o ponteiro, aparece uma mãozinha, e ao clicar o navegador abre aquele site. Para voltar, use a seta no canto superior esquerdo. No site aberto você pode selecionar um trecho, copiar e colar no lugar onde vai usar a pesquisa.`],
      ['h', `Refinando a pesquisa`],
      ['p', `Abaixo da barra, há guias para especificar o que você quer sobre o assunto: Imagens (imagens de átomo), Shopping (para comprar livros sobre o tema), Vídeos e Notícias. Também há ferramentas para filtrar, como pesquisas mais recentes ou com determinada data. O Google é um dos sites de busca mais utilizados do mundo.`],
      ['h', `Favoritos`],
      ['p', `Se você acessa um site com frequência, como o da Caixa, não precisa pesquisar toda vez. Com o site aberto, clique na estrelinha no canto superior direito, escreva um nome (pode ser "Caixa") e clique em concluir. Nas próximas vezes, abra o navegador e procure o site na lista de favoritos; no Chrome, a lista fica no menu de três pontinhos, em Favoritos, e os que você salvou na barra aparecem em cima. Cada navegador tem seu jeito.`],
      ['p', `No Firefox o procedimento é bem parecido: pesquise "caixa", clique no resultado, clique na estrelinha, escolha a barra de favoritos e salve. Mesmo que você feche e abra o Firefox de novo, o site já estará lá.`],
      ['h', `Velocidade e segurança`],
      ['p', `A mesma pesquisa feita em outro navegador traz as mesmas respostas; a diferença está na velocidade, e é por isso que algumas pessoas preferem um navegador a outro. Quanto à segurança, observe sempre o endereço completo e o escudinho ou cadeado ao lado dele: sites que começam com https indicam conexão mais segura. Você verá o porquê na lição sobre protocolos.`],
      ['h', `Resumo de revisão`],
      ['ul', [
        `Navegador é o programa para acessar a internet: Chrome, Edge, Firefox, Safari, Opera.`,
        `Google é um site de busca (não é o navegador); a barra de endereço aceita o endereço do site; links (azuis, com mãozinha) abrem outras páginas.`,
        `Guias de pesquisa: imagens, shopping, vídeos, notícias; ferramentas filtram por data e relevância.`,
        `Favorito: estrelinha, nome, concluir. Cada navegador mostra a lista de um jeito.`,
        `Confira o endereço completo, o https e o cadeado ou escudo antes de digitar dados.`
      ]]
    ],
    2: [
      ['h', `Aula 2 · Endereço IP, tipos de IP e DHCP`],
      ['p', `Cada máquina da internet tem um número único que a identifica na rede mundial de computadores. Esse número é o IP. Ao acessar o provedor de internet, sua máquina recebe um IP, que fica com você até o momento em que se desconecta. Ele é composto por uma sequência de quatro números que variam de 0 a 255, separados por ponto. Exemplo: 200.250.8.1.`],
      ['h', `Por que o IP precisa ser único`],
      ['p', `Não podem existir dois computadores com o mesmo endereço IP dentro da mesma rede (a internet ou qualquer outra). O protocolo TCP/IP existe para haver troca de informações, e a primeira parte do cabeçalho dele é composta por origem e destino: de qual máquina vai e para qual máquina vai, cada uma identificada por um endereço IP. Se dois computadores tiverem o mesmo IP, ou seja, o mesmo destino, a informação não é entregue. Isso gera conflito e não há troca de informação. Por isso o IP é o endereço que identifica a máquina de maneira única.`],
      ['h', `Endereços reservados`],
      ['p', `Alguns endereços são reservados para redes internas e não são rastreáveis na rede principal, a internet: os iniciados em 10, em 172.16 e em 192.168. Em uma rede doméstica, por exemplo, o roteador costuma entregar números que começam em 192.168.`],
      ['h', `IP dinâmico e IP fixo`],
      ['p', `Há duas maneiras de receber um IP para navegar na internet:`],
      ['ul', [
        `Dinâmico: fornecido ao computador por um servidor DHCP. O DHCP é uma máquina que guarda uma tabela com todos os endereços possíveis. Quando você solicita acesso, o provedor procura nessa tabela o primeiro endereço livre e o associa a você até que se desconecte. Quando você sai, o endereço volta à tabela, e a próxima pessoa que se conectar pode pegá-lo. Daí o nome: o endereço é atribuído de forma dinâmica a várias pessoas.`,
        `Fixo: o endereço é atribuído diretamente na placa de rede ou no modem e será sempre aquele, nunca muda. Hoje é raro; aparece em grandes empresas, que oferecem serviços na internet (como uma página) ou permitem o acesso de colaboradores à rede e, por isso, não podem ficar mudando o endereço.`
      ]],
      ['p', `A sigla DHCP é Dynamic Host Configuration Protocol, protocolo de configuração dinâmica de hosts.`],
      ['h', `Resumo de revisão`],
      ['ul', [
        `IP: endereço único da máquina na rede; quatro números de 0 a 255 separados por ponto (exemplo 200.250.8.1).`,
        `Dois IPs iguais na mesma rede geram conflito: a informação (origem e destino) não é entregue.`,
        `Faixas iniciadas em 10, 172.16 e 192.168: redes internas, não rastreáveis na internet.`,
        `Dinâmico: entregue pelo DHCP (primeiro livre da tabela, devolvido ao desconectar); fixo: configurado na placa de rede ou no modem, nunca muda (empresas).`
      ]]
    ],
    3: [
      ['h', `Aula 2 · URL, domínio e DNS`],
      ['p', `Os computadores conectados à internet usam o IP para se localizar e trocar informações. Já nós, usuários, usamos nomes amigáveis, porque é mais fácil trabalhar com um nome do que com o endereço da máquina. Esses nomes são as URLs. O computador trabalha com o IP, e você, com o nome.`],
      ['h', `O que é URL e como ela se organiza`],
      ['p', `URL é Uniform Resource Locator, o localizador de destino padrão: uma indicação do protocolo e do endereço para acessar informações na internet. A estrutura nunca muda:`],
      ['ol', [
        `Protocolo, seguido de dois pontos e duas barras (://).`,
        `Servidor.domínio.`,
        `Antes do nome do servidor e do domínio pode vir um complemento, como www (que indica navegação numa página) ou uma seção, como "imagens", em imagens.google.com. O último elemento é sempre o servidor e o domínio.`
      ]],
      ['h', `Exemplos`],
      ['ul', [
        `https://www.google.com: navegação segura (https) na página do servidor Google, de domínio comercial (.com).`,
        `http://www.uol.com.br: navegação na página do servidor UOL, de domínio comercial do Brasil (.com.br).`
      ]],
      ['p', `O Google não tem ".br" porque, quando o domínio é global ou dos Estados Unidos, só se usa ".com": não existe nomenclatura de país.`],
      ['h', `Terminações de domínio`],
      ['ul', [
        `.com: comercial. .gov: governo. .mil: militar. .med: medicina. .edu: educação.`,
        `.br: Brasil. No Brasil, também se pode indicar o estado: em avare.sp.gov.br, .sp é o estado, .gov é governo e .br é Brasil.`
      ]],
      ['h', `Domínio e DNS`],
      ['p', `Domínio é uma forma de facilitar o acesso das pessoas na internet: damos nome ao que, em número, não tem significado. Um endereço IP não significa nada para você, como o CPF de uma pessoa: você prefere chamar seus amigos pelo nome, não pelo CPF. Só que os computadores trocam informação por números. Quem faz a ponte entre nome e número é o DNS.`],
      ['p', `DNS é Domain Name System, o sistema de nomes de domínio: uma base de dados hierárquica e distribuída para a resolução, ou seja, a tradução, de nomes de domínio em endereços IP. Em termos simples, é uma coleção de bancos de dados que traduz nomes de hosts em endereços únicos de IP. É um servidor que mantém as tabelas associando cada nome a um IP.`],
      ['p', `Quando você acessa google.com, o computador, que só trabalha com IP, pergunta ao DNS quem é google.com, e o DNS responde com o número (por exemplo, um endereço como 216.58.217.46). A partir daí o computador consegue trocar informação com o servidor do Google. A base de dados é distribuída pelo mundo; você pode ter a sua própria dentro da rede, mas em geral os servidores já têm as bases distribuídas: o Google tem seu próprio DNS e a Microsoft também.`],
      ['h', `Os quatro conceitos juntos`],
      ['ul', [
        `DHCP: distribui o IP de maneira dinâmica.`,
        `DNS: faz a tradução de nome em IP.`,
        `URL: representa o endereço da página, o nome amigável, que o DNS traduz.`,
        `IP: o endereço único de cada máquina disponível na internet.`
      ]],
      ['h', `Resumo de revisão`],
      ['ul', [
        `URL = Uniform Resource Locator: protocolo://servidor.domínio.`,
        `Terminações: .com, .gov, .mil, .med, .edu, .br; estado antes de .gov.br (exemplo .sp).`,
        `DNS = Domain Name System: traduz nome (domínio) em IP; base de dados hierárquica e distribuída.`,
        `Mnemônica: o DNS converte nome em número.`
      ]]
    ],
    4: [
      ['h', `Aula 3 · O que é rede, meios físicos e cabos`],
      ['p', `Rede é o conjunto de dispositivos interligados compartilhando recursos e serviços. Conectar um computador a outro já é uma rede. Na prova, o termo "computador" pode nem aparecer: a questão fala em "nós", porque a rede é feita de vários nós interligados, como a rede de um pescador. Um computador numa rede é chamado de nó, de host, de estação de trabalho ou de enlace. Esses outros nomes existem porque numa rede há também servidores, roteadores, televisões, tablets e celulares, e não apenas computadores.`],
      ['h', `Para que serve uma rede`],
      ['p', `Guarde sempre: o único objetivo de criar uma rede é o compartilhamento de recursos e serviços. Recurso é a parte física (uma impressora usada por vários computadores de um departamento). Serviço é a parte lógica: compartilhar programas, software.`],
      ['h', `Meio físico de conexão: guiado e não guiado`],
      ['ul', [
        `Meio guiado: com cabo.`,
        `Meio não guiado: sem fio, chamado de wireless (o wi-fi é um exemplo).`
      ]],
      ['h', `Cabo coaxial`],
      ['p', `É o cabo da televisão: um fio metálico de cobre revestido por borracha. Conecta-se por conectores BNC ou pelo conector T, que permite derivar a conexão no meio do cabo. Anote três pontos:`],
      ['ul', [
        `É simples (um único fio de cobre dentro do cabo).`,
        `Sofre interferência eletromagnética: não é bom passá-lo junto do cabo de energia.`,
        `É utilizado na topologia barramento (que você verá em seguida).`
      ]],
      ['h', `Cabo de par trançado (UTP e STP)`],
      ['p', `É o cabo da internet, o cabo de rede, também chamado de cabo ethernet. UTP é o comum e STP é o blindado (com uma proteção a mais). Pontos para anotar:`],
      ['ul', [
        `Tem várias categorias, que representam sua evolução, do mais simples ao mais veloz.`,
        `Padrão ethernet; o padrão IEEE (instituto de engenheiros eletricistas e eletrônicos) do cabo é o 802.3.`,
        `Taxas de transmissão de 10, 100, 1000 e 10.000 megabits por segundo (Mbps); 1000 Mbps equivalem aproximadamente a 1 gigabit, e 10.000 a 10 gigabits. Note: é megabit, não megabyte.`
      ]],
      ['p', `Dica de prova: quando uma questão fala mal de alguma tecnologia (por exemplo, "só consegue transmitir a 10 Mbps"), abra os olhos, pois costuma estar errada. O par trançado tem taxa alta de velocidade.`],
      ['h', `Fibra óptica`],
      ['p', `Para a fibra, pense em tudo o que é positivo. Ela tem maior capacidade de transmissão (é a mais veloz), menor degradação de sinal e é imune a interferências eletromagnéticas. É utilizada em interconexões intercontinentais: o mundo todo é interligado por cabos de fibra óptica, e seu acesso ao Google passa por várias cidades, roteadores e servidores até chegar lá. É feita de fios de vidro, da espessura de um fio de cabelo. Seus dois problemas: é cara e é sensível; qualquer dobra pode danificar o cabo. A velocidade se mede em terabits por segundo.`],
      ['p', `Ordem de grandeza, da menor para a maior: bit, byte, kilo, mega, giga e tera. O mega é maior que o kilo, o giga é maior que o mega e o tera é maior que o giga.`],
      ['h', `Meios sem fio`],
      ['p', `Wireless significa sem cabo, sem fio. Exemplos:`],
      ['ul', [
        `Infravermelho (IrDA): usado no controle remoto da TV e do ar condicionado; é simples e não atravessa barreiras.`,
        `NFC: tecnologia de aproximação, como o pagamento do celular na maquininha por aproximação.`,
        `Bluetooth: rede pessoal de curto alcance (fone de ouvido que deixa de tocar quando você se afasta alguns metros).`,
        `Wi-Fi: rede local sem fio, a WLAN.`,
        `WiMAX: abrange uma cidade ou pontos de uma cidade, como o wi-fi de uma praça pública e as redes metropolitanas de operadoras.`,
        `Satélite: conexões maiores, que podem levar 3G, 4G e 5G, e a internet a qualquer lugar do mundo.`
      ]],
      ['p', `Em um shopping, como a área é grande, a rede usa vários access points (pontos de acesso, chamados também de hotspot). Conforme você caminha, seu dispositivo se conecta ao ponto mais próximo. O WiMAX pode ser considerado uma WMAN.`],
      ['p', `O wireless é um meio físico: são ondas de rádio que precisam passar por barreiras, e quanto mais barreiras, mais o sinal diminui. Por isso, em casa, em alguns pontos o sinal chega bem e em outros não.`],
      ['h', `Resumo de revisão`],
      ['ul', [
        `Rede: dispositivos interligados que compartilham recursos (físicos) e serviços (lógicos); objetivo único: compartilhar.`,
        `Nó = host = estação de trabalho; meio guiado (cabo) x não guiado (wireless).`,
        `Coaxial: simples, sofre interferência, usado no barramento. UTP/STP: cabo de rede, ethernet, IEEE 802.3, 10 a 10.000 Mbps. Fibra: mais veloz, imune a interferência, intercontinental, cara e frágil.`,
        `Sem fio: infravermelho (não passa barreiras), NFC (aproximação), Bluetooth (curto alcance), Wi-Fi (local), WiMAX (cidade), satélite (grandes distâncias).`
      ]]
    ],
    5: [
      ['h', `Aula 3 · Topologias, tipos de comunicação e equipamentos`],
      ['p', `Topologia é o desenho da rede: o layout, a estrutura. Pode ser física ou lógica, e o que cai em prova é a física. As principais são barramento, anel e estrela; existem ainda árvore, mista e malha. Para cada uma, a banca pergunta características, pontos positivos e negativos.`],
      ['h', `Tipos de comunicação`],
      ['ul', [
        `Simplex: um transmissor e um receptor; só uma direção (unidirecional). Exemplo: a Rede Globo transmite e você, receptor, só recebe; você não consegue mandar mensagem pelo controle.`,
        `Half duplex: vai e vem, mas um de cada vez. Exemplo: rádio comunicador (câmbio): enquanto um fala, o outro não pode falar.`,
        `Full duplex: vai e vem ao mesmo tempo, de forma simultânea. É o que a internet normalmente faz.`
      ]],
      ['h', `Topologia em barramento`],
      ['ul', [
        `Um cabo único do início ao fim, geralmente o cabo coaxial. Cada computador se conecta com um conector T, e há terminadores (conectores BNC) nas pontas.`,
        `Se um computador para, a rede não para: só ele fica sem rede. Essa é uma questão clássica.`,
        `Custo muito baixo (um cabo só).`,
        `Problema: quanto mais computadores conectados, mais sobrecarregada e lenta fica a rede. Se o cabo se romper, todos ficam sem rede.`
      ]],
      ['p', `Exemplo: o provedor de internet de um prédio estende um cabo e vai conectando os apartamentos a ele.`],
      ['h', `Topologia em anel`],
      ['ul', [
        `Circuito fechado: um dispositivo se conecta ao outro, formando um anel.`,
        `É unidirecional (um só sentido): para o computador A falar com o D, a mensagem passa de um por um. Por isso é lenta, e só um transmite por vez, com uma ficha (token).`,
        `Baixo custo.`,
        `Se um computador para, toda a rede para: o circuito é fechado, e se um sai, o círculo acaba.`
      ]],
      ['p', `Ao ouvir "anel", pense em coisas negativas: lenta, fraca, para tudo se um falhar.`],
      ['h', `Topologia em estrela`],
      ['p', `Há um concentrador no centro, também chamado de computador central ou comutador. São concentradores o hub, o switch e o roteador:`],
      ['ul', [
        `Hub: é "burro". Como um carteiro que nem olha o número das casas e bate de porta em porta; é uma peça difusora, entrega para todos os conectados e só o destinatário aceita.`,
        `Switch: faz enlace; define origem e destino e entrega somente à pessoa certa.`,
        `Roteador: o mais complexo e completo; define a melhor rota (como o aplicativo de mapas) e é ligado à rede.`
      ]],
      ['p', `Todos conseguem trabalhar para vários canais (broadcast e multicast). Na rede em estrela podem aparecer também pontos de acesso (access point), pontes (bridge, que conecta duas redes) e repetidores (que amplificam o sinal).`],
      ['ul', [
        `É uma rede rápida, que usa cabo UTP.`,
        `Fácil de diagnosticar: se um computador fica sem internet, o problema está na configuração, no cabo ou na porta dele.`,
        `Custo alto de cabeamento, porque cada sala precisa do seu cabo.`,
        `Se um computador para, a rede não para. Só para toda a rede se o concentrador parar (se o roteador de casa quebra, todos ficam sem internet).`,
        `É a topologia mais utilizada nas empresas.`
      ]],
      ['h', `Malha, ponto a ponto e cliente-servidor`],
      ['p', `Na malha, todos estão conectados a todos. Na rede ponto a ponto, um computador se conecta diretamente a outro. Na rede cliente-servidor, os computadores dependem de um servidor, que atende a vários simultaneamente; a internet funciona assim (o Google atende a muitas pessoas ao mesmo tempo).`],
      ['h', `Equipamentos`],
      ['ul', [
        `Modem: fornece a conexão com a internet; modula e demodula o sinal, convertendo analógico em digital e vice-versa. Toda rede com internet tem modem, e muitos roteadores já o têm incluso.`,
        `Hub, switch e roteador: concentradores.`,
        `Access point (ponto de acesso), também chamado de hotspot: comum em shoppings.`,
        `Servidor: computador robusto ao qual os demais se conectam.`,
        `Placa de rede: com fio ou sem fio, recebe os sinais e conecta o computador à rede.`,
        `Backbone: a espinha dorsal, toda a estrutura da rede (computadores, roteadores e cabos) que faz a internet funcionar.`
      ]],
      ['h', `Resumo de revisão`],
      ['ul', [
        `Simplex (uma direção), half duplex (duas direções, uma por vez), full duplex (simultâneo, como a internet).`,
        `Barramento: cabo coaxial, barato, falha de um computador não para a rede, lenta com muitos nós.`,
        `Anel: circuito fechado, unidirecional, lento, para tudo se um falhar.`,
        `Estrela: concentrador (hub, switch, roteador); rápida, UTP, fácil de diagnosticar, cabeamento caro; para se o concentrador falhar; a mais usada.`,
        `Hub difunde; switch entrega ao destino; roteador escolhe a melhor rota.`
      ]]
    ],
    6: [
      ['h', `Aula 3 · Abrangência física e lógica`],
      ['p', `A abrangência física é o tamanho da rede, ou a extensão geográfica. Todas as siglas terminam em "AN" (Area Network, rede de área), e a primeira letra indica o tamanho. Guarde principalmente a primeira letra.`],
      ['h', `PAN, LAN, MAN e WAN`],
      ['ul', [
        `PAN (Personal Area Network): rede de área pessoal. Um notebook falando com o fone, dois computadores ligados um ao outro para jogar. Sem fio: WPAN (infravermelho, NFC, Bluetooth).`,
        `LAN (Local Area Network): rede de área local, usada principalmente por empresas e na sua casa, como a lan house. Sem fio: WLAN (o wi-fi).`,
        `MAN (Metropolitan Area Network): rede metropolitana, que interliga pontos de uma cidade, como o provedor de internet da cidade.`,
        `WAN (Wide Area Network): rede de larga escala, que passa de uma cidade; é chamada de rede de área mundial, mas o W é de wide, não de world. A internet é o exemplo.`
      ]],
      ['p', `Todas podem ser com fio ou sem fio, e para ser sem fio se coloca um W na frente (wireless). Na ordem: PAN são poucos metros; LAN, centenas de metros; MAN, uma cidade; WAN, muitos quilômetros e vários estados. Se interligar duas redes locais em bairros diferentes, passa a ser uma cidade.`],
      ['h', `Abrangência lógica: Internet, intranet e extranet`],
      ['p', `Net significa rede. Internet é a rede das redes, a maior rede que existe; intranet é uma rede fechada; extranet é externa. Todas as redes precisam de identificação (o número de IP) e usam protocolo TCP/IP.`],
      ['ul', [
        `Internet: rede pública e aberta, "a praia". Você a usa para acessar serviços: e-mail, web, VoIP, streaming, sites wiki (colaborativos, como a Wikipédia), bate-papo, fóruns, redes sociais (o LinkedIn é rede social para fins profissionais) e sites de busca. A web também é chamada de www: World Wide Web, o principal serviço da internet.`,
        `Intranet: rede privada, de acesso restrito, ligada a empresas, prefeituras, bancos e delegacias. Exige autenticação (login e senha, certificado digital, token, cartão). Há níveis de permissão (o gerente do banco acessa mais que o caixa). Foi feita para os funcionários e colaboradores conversarem e compartilharem, e o conteúdo é interno: o que está dentro não deve sair da empresa.`,
        `Extranet: é o acesso externo à intranet, por clientes, funcionários que trabalham de casa e parceiros ou representantes. Exemplo: a revendedora de uma marca de cosméticos que se cadastra na empresa vê o catálogo e o que o representante ganha, mas o público em geral não vê.`
      ]],
      ['h', `A diferença que a banca cobra`],
      ['p', `O que distingue internet de intranet é o objetivo: aberta e pública x privada e restrita. Elas usam os mesmos protocolos, serviços e tecnologias. Se uma questão afirma que usam tecnologias diferentes, está errada. Pode haver login e senha na internet (ao comprar um curso, por exemplo), mas isso é só acesso a um conteúdo; a intranet é corporativa. A internet pode ter ou não autenticação, enquanto na intranet e na extranet ela é obrigatória.`],
      ['h', `Tabela de comparação`],
      ['ul', [
        `Autenticação: internet, opcional; intranet, obrigatória; extranet, obrigatória.`,
        `Acesso externo: internet, sim; intranet, só por meio de VPN; extranet, sim.`,
        `Navegador: todos podem usar; a intranet usa se a empresa quiser.`,
        `Alcance: internet é mundial; intranet é local; extranet é o que a intranet permitir ser acessado de fora.`,
        `Conversa e compartilhamento de dados: todas podem ter; na intranet, o conteúdo é interno.`
      ]],
      ['h', `VPN`],
      ['p', `VPN é a rede virtual privada: um caminho seguro para você chegar à rede da empresa à distância. Como você acessa de fora a rede da empresa, isso é extranet; mas como acessa uma intranet, não deixa de ser uma intranet. As duas leituras valem.`],
      ['h', `Resumo de revisão`],
      ['ul', [
        `PAN pessoal, LAN local, MAN cidade, WAN (wide) mais que uma cidade. W na frente = sem fio.`,
        `Internet: pública e aberta, rede das redes, protocolo TCP/IP; www é World Wide Web.`,
        `Intranet: privada, autenticação obrigatória, uso interno (funcionários e colaboradores).`,
        `Extranet: acesso externo à intranet (parceiros, clientes, home office), com a internet ou VPN.`,
        `Mesmos protocolos e serviços em todas; o que muda é o objetivo.`
      ]]
    ],
    7: [
      ['h', `Aula 3 · Como a conexão acontece, as camadas da web e questões da primeira bateria`],
      ['h', `O caminho até o site`],
      ['ol', [
        `Seu computador precisa de um modem, que é responsável pela conexão com a internet.`,
        `Você contrata um provedor, que traz o modem e, geralmente, um roteador para compartilhar a conexão.`,
        `Do modem, o sinal vai por cabos espalhados pelos postes (as ruas da internet), passa por roteadores e chega ao servidor do provedor, o ISP (provedor de serviço de internet).`,
        `Quando você pede o Google, o provedor encaminha seu pedido: por fibra óptica, rádio, satélite ou parabólica, até o servidor do Google, às vezes noutro país.`,
        `Você recebe o IP de acesso, e o Google também tem o seu. É um número conectado a outro número, como duas ligações de telefone.`
      ]],
      ['p', `A comunicação se dá por IP, e não pelo nome. Seu dispositivo (celular, computador, tablet) tem um número de IP, e o Google também.`],
      ['h', `Surface Web, Deep Web e Dark Web`],
      ['ul', [
        `Surface Web (chamada simplesmente de web): é a parte do iceberg que se vê. Serviços e sites indexados pelos mecanismos de busca: o que você acha ao pesquisar no Google (Facebook, por exemplo).`,
        `Deep Web: a profundeza da internet. Sites e serviços que não são indexados pelo mecanismo de busca e que ficam privados: aulas de universidades, sua conta bancária, dados do governo e de empresas. Hackers podem se aproveitar, por isso se protege, como com o "não sou um robô".`,
        `Dark Web: a parte obscura. São serviços que só podem ser acessados por softwares específicos, como o Tor, e com a terminação .onion no endereço. Nela, circulam também conteúdos ilegais, mas não é só para isso: foi criada para quem tem conhecimento técnico, e é descentralizada.`
      ]],
      ['h', `Questões da primeira bateria`],
      ['p', `1) Redes sem fio: wireless significa sem fio. A resposta é wireless.`],
      ['p', `2) O nome técnico das redes de computadores que não usam fios ou cabos para transmitir dados em alta velocidade: redes sem fio (wireless).`],
      ['p', `3) Para acessar a internet por wi-fi, você deve estar no raio de ação de um ponto de acesso, tecnicamente conhecido como hotspot. Entre as alternativas: switch é concentrador, não o termo técnico de ponto de acesso; firewall é de segurança; bridge é ponte, que liga duas redes; hotspot é o ponto de acesso (letra C).`],
      ['p', `4) Dispositivos conectados em série, formando um circuito fechado, com dados transmitidos de um nó em outro, unidirecionalmente, até o destino: a palavra-chave é circuito fechado e unidirecional. Barramento não é circuito fechado; estrela não é unidirecional. Resposta: topologia em anel (letra A).`],
      ['p', `5) Na topologia barramento utilizam-se tipicamente cabos coaxiais (letra B, coaxial).`],
      ['p', `6) A tecnologia Bluetooth é classificada como rede PAN (letra A).`],
      ['p', `7) Os três formatos comuns de redes citados para os hospitais: PAN, LAN e MAN (letra A). Existem outras, as quatro são exemplos.`],
      ['p', `8) Exemplo de rede de abrangência global, que interliga países e continentes: a WAN, e a internet é o exemplo (letra A).`],
      ['p', `9) Verdadeiro ou falso: "uma das topologias mais utilizadas é a estrela": certo. "Um dos maiores problemas das redes é compartilhar recurso físico e lógico": falso, pois é justamente o objetivo da rede. "O switch e o roteador são dois dispositivos muito utilizados em redes": certo. Resposta: certo, errado, certo (letra C).`],
      ['p', `10) Relacione as colunas: rede com acesso remoto para parceiros de uma organização é a extranet (acesso remoto + empresa); rede interna, fechada, exclusiva de uma organização é a intranet; rede mundial de computadores é a internet. Resposta: letra D.`],
      ['p', `11) Intranet é uma rede pública ou de uso interno de uma instituição? Uso interno de uma instituição. As ideias de rede de propaganda, sinônimo da internet ou rede de telecom caem.`],
      ['p', `12) Conceitos básicos de internet e intranet: dizer que o número de usuários da internet é limitado e o da intranet é ilimitado é falso, pois é o contrário (a intranet é restrita; a internet, aberta). Dizer que os custos de desenvolvimento e implementação de uma intranet são caríssimos também é falso, pois para uma empresa não são.`],
      ['h', `Resumo de revisão`],
      ['ul', [
        `Caminho: dispositivo, modem, provedor (ISP), roteadores, fibra, rádio ou satélite, servidor de destino; comunicação por IP.`,
        `Surface Web: indexada pelos buscadores; Deep Web: não indexada e protegida; Dark Web: software específico (Tor) e .onion.`,
        `Palavras-chave: circuito fechado e unidirecional = anel; barramento = coaxial; Bluetooth = PAN; mais de uma cidade = WAN; ponto de acesso = hotspot.`,
        `VPN dá acesso seguro à intranet à distância (extranet).`
      ]]
    ],
    8: [
      ['h', `Aula 3 · Protocolos`],
      ['p', `Protocolo é um conjunto de regras, e não uma regra só. Internet, intranet e extranet precisam de protocolos. É uma convenção que possibilita a conexão e a transferência de dados entre dois sistemas. Existem várias pilhas (IPX, NetBEUI), mas o protocolo padrão da internet, da intranet e da extranet é o TCP/IP.`],
      ['h', `As camadas do TCP/IP`],
      ['p', `Pense numa carta. Para chegar ao destino, ela passa por processos: a aplicação (o que você quer fazer: escrever a carta, mandar um e-mail, uma foto, acessar um site), o transporte (a transportadora, os Correios), a rede (onde se faz o registro; o principal é o IP, e as ruas da internet fazem parte) e o enlace (o carteiro que entrega, que é o papel do switch, ou do roteador). São camadas: aplicação, transporte, rede, enlace e física. Na prova, a camada mais cobrada é a de aplicação.`],
      ['h', `Camada de transporte: TCP e UDP`],
      ['ul', [
        `TCP: confiável, orientado a conexão, garante a entrega e faz testes até chegar ao destino. Usado para e-mail e quase tudo na internet.`,
        `UDP: pensa só em velocidade; não é confiável, não garante a entrega, não é orientado a conexão. Usado onde a velocidade importa, como lives, streaming, Zoom, Google Meet e Microsoft Teams: não adianta a voz chegar cinco minutos depois.`
      ]],
      ['h', `HTTP e HTTPS`],
      ['p', `HTTP é o protocolo de transferência de hipertexto (o conteúdo), sem criptografia, sem proteção: tudo que você escreve num site HTTP, e tudo que ele manda a você, pode ser visto na internet. Por isso, não digite dados de cartão de crédito, contas pessoais ou login e senha em sites HTTP.`],
      ['p', `Pegadinhas de prova sobre HTTP, todas falsas: dizer que um site HTTP possui vírus, que não é usado na intranet ou que é um site perigoso. O HTTP é um site normal; a diferença é que os dados que você digita podem ser roubados ou vistos facilmente.`],
      ['p', `HTTPS é o protocolo de hipertexto seguro (o S é de seguro): usa criptografia, que torna seus dados ilegíveis para quem intercepta, e certificado digital. O sinal visível é o cadeado fechado, que indica o uso de criptografia e informa quem emitiu o certificado e seu período de validade. Utiliza protocolos como TLS e SSL, que garantem segurança na comunicação. Analogia: o HTTP é o mototáxi que leva o conteúdo; no HTTPS, a carga vai criptografada.`],
      ['h', `FTP`],
      ['p', `Protocolo de transferência de arquivos. Guarde: F de foto. Quando você posta uma foto ou envia um documento (identidade, CNH) a um site, faz upload (tira o arquivo do seu computador e manda para a nuvem, a internet) com o FTP; quando baixa, faz download, também com o FTP. Ele pode agir junto com o HTTP ou o HTTPS.`],
      ['p', `Diferencial: o FTP é o único protocolo que usa duas portas ao mesmo tempo, uma para a transferência de dados (porta 20) e outra para a autenticação e o controle (porta 21).`],
      ['p', `Toda comunicação na internet usa uma porta: o HTTP usa a porta 80, por exemplo. O Firewall, como o Windows Defender Firewall, pode abrir ou fechar portas, com regras de entrada e de saída, e pode bloquear um programa.`],
      ['h', `DNS`],
      ['p', `Semelhante a uma agenda telefônica. Você guarda o nome do contato e, quando liga, o telefone converte o nome em número. Todo site tem um número de IP, e o servidor DNS (existem vários espalhados pelo mundo) traduz o nome (google.com.br) para esse número. Sem o DNS, você teria de decorar o IP de cada site. Palavras-chave: localiza, traduz, converte. A mnemônica: "DNS converte, Deus nos salva".`],
      ['h', `Acesso remoto, DHCP, IRC e NNTP`],
      ['ul', [
        `Acesso à distância (programas como TeamViewer ou VNC): o SSH é seguro, e o Telnet é sem segurança.`,
        `DHCP: entrega o IP de forma automática. Ao digitar a senha do wi-fi, aparece "obtendo endereço IP", e a configuração mostra atribuição automática.`,
        `IRC: salas de bate-papo (conversa, chat).`,
        `NNTP: fórum de discussão. Esses aparecem pouco em prova.`
      ]],
      ['h', `Protocolos de e-mail`],
      ['p', `São usados com programas de correio eletrônico, como Outlook e Mozilla Thunderbird.`],
      ['ul', [
        `SMTP: "sua mensagem tá partindo". Envia o e-mail, do cliente ao servidor e de servidor a servidor. O e-mail não vai direto ao destinatário: vai para o servidor do provedor (Gmail, Outlook). Por isso só quem envia ou recebe precisa de internet naquele momento.`,
        `POP: "pop puxa" o e-mail do provedor. Baixa e remove do servidor, e o e-mail fica só no computador do destinatário.`,
        `IMAP: mantém o e-mail no servidor e traz uma cópia para o computador. É sincronizado: você o vê no celular e no computador, e é o padrão.`
      ]],
      ['p', `O SMTP é obrigatório para enviar; para receber, você configura o POP ou o IMAP. A combinação é SMTP com POP ou SMTP com IMAP.`],
      ['h', `Outros: VoIP e ICMP`],
      ['p', `VoIP leva a voz pela internet usando o número de IP (como uma ligação por WhatsApp). O ICMP é o protocolo relacionado à informação sobre erros na rede.`],
      ['h', `Resumo de revisão`],
      ['ul', [
        `Protocolo = conjunto de regras; o padrão é o TCP/IP, em camadas (aplicação, transporte, rede, enlace, física).`,
        `TCP confiável, garante entrega; UDP rápido, sem garantia (lives, streaming, Zoom, Meet, Teams).`,
        `HTTP sem criptografia; HTTPS com criptografia, certificado e cadeado (TLS/SSL). HTTP não é sinônimo de vírus.`,
        `FTP: envio e download de arquivos; portas 20 (dados) e 21 (controle). DNS converte nome em IP. DHCP entrega IP.`,
        `Telnet sem segurança; SSH com segurança. IRC chat; NNTP fórum.`,
        `SMTP envia; POP baixa e remove; IMAP mantém no servidor e sincroniza.`
      ]]
    ],
    9: [
      ['h', `Aula 3 · IP, IPv4, IPv6, MAC, IoT e questões finais`],
      ['p', `Quando uma questão falar em noções de IP, ela é cobrada com frequência. O IP serve para identificar sites, dispositivos (computadores, celulares, tablets) e servidores. A expressão IoT (Internet of Things, a Internet das Coisas) designa a conexão à internet de objetos como televisão, lâmpada, ar condicionado, geladeira, Alexa e aspirador de pó que se controla à distância: tudo o que tem internet precisa de um número de IP.`],
      ['h', `IP e MAC`],
      ['p', `Não confunda IP com MAC. O MAC é um número físico, da placa de rede (todo dispositivo tem placa de rede), único e exclusivo de cada aparelho, como um CPF. O IP também identifica, mas pode variar: pode ser dinâmico ou fixo (manual), e na maioria dos casos é dinâmico, aleatório e muda. A analogia: o IP é como a comanda do restaurante: você a recebe, usa durante a visita, devolve ao sair, e na próxima vez pode receber outra. Por isso, ao reiniciar o roteador, o provedor lhe dá outro IP.`],
      ['p', `Também não é o IMEI, número criado pela Anatel para identificar os aparelhos celulares: é outra coisa, que trata de rede de celulares, não de rede de computadores.`],
      ['h', `IPv4`],
      ['ul', [
        `Formado por quatro grupos (octetos) separados por ponto.`,
        `Cada grupo vai de 0 a 255. Octeto porque equivale a 8 bits; 4 x 8 = 32 bits.`,
        `Exemplo de IP privado: 192.168.0.40.`,
        `Existem mais de 4 bilhões de combinações. É pouco: hoje há quase 8 bilhões de pessoas, e cada uma pode ter vários IPs (celular, casa, rastreador do carro).`,
        `Não podem existir dois IPs iguais na mesma rede.`
      ]],
      ['p', `Pegadinhas: a questão coloca três ou cinco grupos, ou um grupo com 257 ou 308. Qualquer número acima de 255 torna o item errado. A primeira coisa a fazer é contar os grupos; depois, conferir se algum ultrapassa 255.`],
      ['h', `IPv6`],
      ['p', `Foi criado porque o IPv4 não bastava. Em prova, guarde: dobra o que tinha no IPv4. Em vez de quatro grupos, são oito, separados por dois pontos. Em cada grupo você pode colocar números e letras, mas a letra não pode ultrapassar F: é o sistema hexadecimal (16 bits por grupo, 8 x 16 = 128 bits). O IPv4 é o mais cobrado, muito mais do que o IPv6.`],
      ['p', `Você pode conferir os IPs do seu computador na configuração da rede (propriedades da conexão): ali aparece a atribuição automática pelo DHCP, o endereço IPv6 (longo) e o endereço IPv4 (algo como 192.168.0.12).`],
      ['h', `Questões finais`],
      ['ul', [
        `Número de IP: conte os grupos; IPv4 precisa de quatro grupos, nenhum acima de 255.`,
        `Pop3, IMAP e SMTP: são protocolos destinados ao gerenciamento, recebimento e envio de e-mails entre clientes e servidores e entre servidores (letra D). Não são programas de criptografia, de acesso remoto ou de controle servidor-cliente.`,
        `FTP: qual é a incorreta? "Permite somente a transmissão de mensagens binárias": errada (o "somente" restringe indevidamente). As outras estão certas: após a conexão, a função get faz o download de um arquivo remoto; o TLS pode ser usado para segurança; e o FTP estabelece duas conexões, uma de dados e outra de controle.`,
        `Para transferir dados (arquivos) em internet e intranet, usa-se o FTP (letra B).`,
        `Comunicação por voz baseada no protocolo da internet: VoIP (letra C). O TCP/IP é um conjunto de protocolos, e o Outlook é um programa de e-mails.`,
        `Protocolo que gerencia informações relativas a erros nas máquinas: o ICMP, por eliminação (HTTP é hipertexto, FTP é arquivo, SSL é segurança).`,
        `Endereço eletrônico de um site: URL (letra D). Qualquer questão que pergunte pelo endereço quer a URL (também em prova de Polícia Civil).`,
        `Verdadeiro ou falso: HTTP definido como linguagem de programação: falso (é um protocolo); site que começa com https: comunicação criptografada, verdadeiro.`,
        `WWW é World Wide Web; todo computador que se comunica na internet precisa do protocolo TCP/IP; browser é o programa que permite consultar páginas.`,
        `O conjunto de protocolos mais utilizado nas redes: TCP/IP.`,
        `LAN significa Local Area Network. A rede local sem fio é a WLAN.`
      ]],
      ['h', `Resumo de revisão`],
      ['ul', [
        `IP identifica dispositivos e sites; MAC é físico, da placa de rede, único; IMEI é de celular.`,
        `IPv4: quatro grupos de 0 a 255, 32 bits (octetos). IPv6: oito grupos, hexadecimal, até F, 128 bits.`,
        `IoT: objetos conectados, cada um com seu IP.`,
        `Prova de IP: conte os grupos e procure números acima de 255 (IPv4) ou letras além de F (IPv6).`,
        `Pop3 e IMAP receberam e-mail, SMTP envia; FTP arquivos; VoIP voz; URL é o endereço; ICMP trata de erros.`
      ]]
    ]
  };

  window.PCPE_QUESTOES[topic] = [
    {
      text: `Uma empresa liga vários computadores e uma impressora, de modo que todos imprimam na mesma impressora. Segundo os conceitos de rede, essa situação ilustra:`,
      options: [
        `o uso exclusivo de uma rede para trocar mensagens de e-mail.`,
        `o compartilhamento de recursos, que é o objetivo da rede: um conjunto de dispositivos interligados compartilhando recursos e serviços.`,
        `um serviço de streaming, em que todos recebem o mesmo conteúdo ao mesmo tempo.`,
        `uma rede simplex, porque só os computadores transmitem.`
      ],
      correct: 1,
      exp: `Rede é o conjunto de dispositivos interligados compartilhando recursos (parte física, como a impressora) e serviços (parte lógica). Esse é o único objetivo da rede; as demais alternativas descrevem usos ou conceitos que não correspondem ao caso.`
    },
    {
      text: `Entre os meios físicos de conexão, o cabo que apresenta maior capacidade de transmissão, menor degradação do sinal, imunidade a interferências eletromagnéticas e é utilizado em interconexões intercontinentais é o cabo:`,
      options: [
        `de fibra óptica.`,
        `coaxial.`,
        `de par trançado UTP.`,
        `de par trançado STP, por ser blindado.`
      ],
      correct: 0,
      exp: `A fibra óptica é a mais veloz, tem menor perda, é imune a interferência eletromagnética e liga continentes; seus defeitos são o custo e a fragilidade. O coaxial é simples e sofre interferência; o par trançado (UTP/STP) é o cabo de rede, de alta taxa, mas não é o usado nas interconexões intercontinentais.`
    },
    {
      text: `Em determinada topologia, os dispositivos são conectados em série, formando um circuito fechado, e os dados são transmitidos unidirecionalmente de um nó a outro até o destino. Em relação a essa topologia, é correto afirmar que, se um computador parar de funcionar:`,
      options: [
        `somente ele fica sem rede, e os demais continuam funcionando.`,
        `a rede continua funcionando, porque há um concentrador central.`,
        `toda a rede para, pois o circuito fechado depende de todos os nós.`,
        `a rede só para se o cabo coaxial for rompido.`
      ],
      correct: 2,
      exp: `As palavras-chave circuito fechado e unidirecional indicam a topologia em anel, em que a parada de um computador interrompe toda a rede. A alternativa A descreve o barramento; B descreve a estrela; D é do barramento, que usa cabo coaxial.`
    },
    {
      text: `Sobre a topologia em estrela, é correto afirmar que:`,
      options: [
        `é unidirecional e, por isso, lenta.`,
        `se o concentrador (hub, switch ou roteador) falhar, toda a rede para; se um computador falhar, a rede continua.`,
        `usa um cabo único, com conectores T, e tem custo de cabeamento baixo.`,
        `é a mais difícil de diagnosticar, pois todos os computadores dependem uns dos outros.`
      ],
      correct: 1,
      exp: `Na estrela, o concentrador é o ponto crítico: se ele para, todos ficam sem rede; a parada de um computador não afeta os outros. É rápida, de cabeamento caro e fácil de diagnosticar. Unidirecional é o anel; cabo único com conector T é o barramento.`
    },
    {
      text: `A tecnologia Bluetooth, de curto alcance, usada para conectar um fone de ouvido a um celular, classifica-se quanto à abrangência como uma rede do tipo:`,
      options: [
        `WAN.`,
        `MAN.`,
        `LAN.`,
        `PAN.`
      ],
      correct: 3,
      exp: `A rede PAN (Personal Area Network) é de área pessoal, de poucos metros: o Bluetooth, o infravermelho e o NFC são exemplos. LAN é local (empresa, casa), MAN abrange uma cidade e WAN passa de uma cidade, como a internet.`
    },
    {
      text: `Uma empresa permite que parceiros e funcionários em home office acessem, a partir da internet, parte do conteúdo corporativo, mediante autenticação. Esse acesso externo à rede privada da empresa caracteriza a:`,
      options: [
        `extranet, e a VPN é a rede virtual privada que permite esse acesso seguro à distância.`,
        `internet, pois qualquer pessoa pode acessar sem autenticação.`,
        `intranet, que dispensa autenticação por ser uma rede interna.`,
        `rede PAN, por envolver poucos usuários.`
      ],
      correct: 0,
      exp: `Extranet é o acesso externo à intranet por clientes, parceiros e colaboradores, e a VPN é a forma segura de chegar à intranet à distância. A internet é pública e aberta; na intranet a autenticação é obrigatória; PAN é rede pessoal.`
    },
    {
      text: `Sobre os protocolos HTTP e HTTPS, é correto afirmar que:`,
      options: [
        `um site que usa HTTP necessariamente contém vírus.`,
        `o HTTP é uma linguagem de programação para criar páginas.`,
        `o HTTPS utiliza criptografia e certificado, e o cadeado fechado indica essa proteção, enquanto no HTTP os dados digitados trafegam sem proteção.`,
        `o HTTPS é proibido em intranets.`
      ],
      correct: 2,
      exp: `HTTP e HTTPS transferem hipertexto; o HTTPS adiciona criptografia e certificado (TLS/SSL), e o cadeado a sinaliza. Site HTTP não significa vírus, o HTTP é um protocolo (não uma linguagem) e não há proibição na intranet.`
    },
    {
      text: `Ao configurar o recebimento de e-mails, uma pessoa escolhe um protocolo que mantém a mensagem no servidor e traz uma cópia para o computador, permitindo ver o mesmo e-mail em outros aparelhos. O protocolo escolhido foi o:`,
      options: [
        `SMTP, que é o único usado para receber e-mails.`,
        `IMAP, que mantém o e-mail no servidor e sincroniza.`,
        `POP, que remove o e-mail do servidor após baixá-lo.`,
        `FTP, que transfere os e-mails como arquivos.`
      ],
      correct: 1,
      exp: `O IMAP mantém o e-mail no servidor e traz uma cópia, sincronizando entre aparelhos. O POP puxa e remove do servidor (o e-mail fica só no computador), o SMTP serve para enviar e o FTP é de arquivos.`
    },
    {
      text: `Ao digitar o nome de um site no navegador, o computador consulta um servidor que traduz o nome de domínio em um endereço IP, pois as máquinas trocam informações por números. Esse serviço é o:`,
      options: [
        `DHCP, que distribui o endereço IP de forma dinâmica.`,
        `FTP, que traduz o nome do arquivo em IP.`,
        `TCP, que garante a entrega dos pacotes.`,
        `DNS, o sistema de nomes de domínio.`
      ],
      correct: 3,
      exp: `O DNS (Domain Name System) converte nome em IP. O DHCP entrega o IP ao dispositivo; o FTP transfere arquivos; o TCP é protocolo de transporte confiável.`
    },
    {
      text: `Qual dos seguintes é um exemplo de endereço IPv4 válido?`,
      options: [
        `192.168.0.40`,
        `192.168.0`,
        `192.168.0.40.7`,
        `192.168.257.40`
      ],
      correct: 0,
      exp: `O IPv4 tem quatro grupos de 0 a 255 separados por ponto. 192.168.0 tem só três grupos; 192.168.0.40.7 tem cinco; 192.168.257.40 tem um grupo acima de 255.`
    }
  ];
})();
