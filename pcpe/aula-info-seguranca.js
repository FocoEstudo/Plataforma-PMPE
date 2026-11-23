(function () {
  'use strict';
  window.PCPE_TOPIC_GUIDES = window.PCPE_TOPIC_GUIDES || {};
  window.PCPE_DEEPENING = window.PCPE_DEEPENING || {};
  window.PCPE_QUESTOES = window.PCPE_QUESTOES || {};
  const topic = 'Segurança da informação e procedimentos de segurança';
  const base = window.PCPE_TOPIC_GUIDES[topic] || {};
  window.PCPE_TOPIC_GUIDES[topic] = Object.assign({}, base, {
    lessons: [
      [
        `Aula 1 · Princípios básicos: a sigla DICA`,
        `Segurança da informação é um assunto que ultrapassa a informática: envolve normas, regras e o fluxo de informações da organização (o que é sigiloso, quem acessa, como se guarda). Na prova, o que mais aparece são os princípios básicos. Princípio é algo que você deseja alcançar e que só é considerado atendido quando as condições para isso foram oferecidas. Os quatro essenciais formam a sigla DICA: Disponibilidade, Integridade, Confidencialidade e Autenticidade.`,
        `A banca escreve "princípio da autenticação" para derrubar você. Como não termina em "-idade", autenticação não é princípio; o princípio correto é autenticidade. O mesmo teste vale para os demais: disponibilidade, integridade, confidencialidade, autenticidade.`,
        `Um princípio é uma garantia de que algo não ocorreu (por exemplo, "até aqui o dado não foi alterado"), e não um bloqueio que impede a ação. Além disso, se o enunciado disser "dentre os princípios...", ele pode citar só dois ou três; e a banca pode falar em cinco princípios, incluindo o não repúdio, que é consequência da autenticidade.`
      ],
      [
        `Aula 1 · Disponibilidade e integridade (função hash)`,
        `Disponibilidade garante que a informação (ou o recurso que a protege) esteja acessível para quem precisa e quando precisa. Integridade garante a não alteração: ela não impede que o dado seja alterado, mas permite provar que ele não foi alterado. A ferramenta clássica da integridade é a função hash, um método público e matemático que gera, a partir de um arquivo, um código hash (também chamado de resumo da mensagem). O hash mais popular citado é o MD5.`,
        `Você baixa a imagem ISO de um sistema Linux. Ao lado do link do download, o site publica o código MD5 do arquivo. Você baixa um programa que aplica o MD5, gera o código do arquivo que recebeu e compara com o publicado. Se forem iguais, o arquivo está íntegro. Se forem diferentes, apague o arquivo e baixe de novo: houve falha no download ou alguém enviou um arquivo falso no lugar do original.`,
        `O código hash é curto e a operação é de via única: não é compactação, e você não reconstrói o arquivo de 80 páginas a partir do código. Mudar uma única vírgula do arquivo gera um código completamente diferente. "Resumo da mensagem" é o nome do hash; a banca usa isso para induzir a erros.`
      ],
      [
        `Aula 1 · Confidencialidade e criptografia`,
        `Confidencialidade é o princípio que garante o sigilo da informação entre quem se comunica. O recurso usado é a criptografia, que codifica a mensagem para que, mesmo interceptada, ela não seja entendida. Há dois métodos: a criptografia de chave simétrica (uma única chave, a mesma senha para fechar e abrir) e a de chaves assimétricas (duas chaves distintas e correspondentes, uma pública e uma privada).`,
        `Analogia do cadeado: a chave pública é o cadeado aberto, que qualquer um pode receber; a chave privada é a chave desse cadeado, que só o dono possui. Para me enviar algo sigiloso, você tranca a caixa com o meu cadeado (minha chave pública). Nem você consegue reabrir; só eu, com a minha chave privada. Regra de ouro: para sigilo, criptografe com a chave pública do destinatário; ele abre com a privada dele.`,
        `Truque de memória: simétrica tem um "s" (uma chave); assimétrica tem dois "s" (duas chaves). A assimétrica resolve o problema de trocar a chave com quem você nunca encontrou, mas é mais lenta; por isso, na prática, ela serve mais para trocar uma senha do que mensagens longas. O protocolo HTTPS usa as duas. Ler e entender são coisas distintas: interceptar a mensagem não significa entendê-la.`
      ],
      [
        `Aula 1 · Autenticidade, não repúdio e certificado digital`,
        `Autenticidade garante a autoria: quem enviou ou assinou é realmente quem diz ser. O não repúdio (ou irretratabilidade) é consequência dela: se a autoria foi comprovada, o autor não pode negar depois que a praticou. Na informática, a autenticidade exige certificado digital, emitido por um terceiro confiável, e o certificado digital usa chaves assimétricas.`,
        `Analogia do cartório: num contrato em papel, a rubrica em cada página e a numeração ("1 de 3", "2 de 3") protegem a integridade, evitando troca de páginas. O reconhecimento de firma por autenticidade, em que o cartório confirma que a assinatura é sua, garante a autoria. Sem esse terceiro confiável, não há como provar que você é você; o certificado digital cumpre esse papel no meio digital.`,
        `Para a autenticidade o sentido das chaves se inverte em relação ao sigilo: você usa a sua chave privada (que só você tem) e qualquer pessoa confere com a sua chave pública. Quem usou uma chave do par precisa da outra para desfazer. Se não há autenticidade, não há não repúdio. Certificado digital está ligado às chaves assimétricas, nunca à simétrica.`
      ],
      [
        `Aula 2 · Backup: conceito, atributo de marcação e ransomware`,
        `Backup é a cópia de segurança de dados em local geograficamente distinto do original, para uso futuro. Copiar um arquivo para outra pasta da mesma unidade não é backup; HD externo, pen drive, outro disco, rede ou nuvem, sim. O backup garante a disponibilidade e a integridade da informação. Backup on-site é o feito na própria instituição; off-site é o feito de forma remota.`,
        `Num ataque de ransomware, os dados do usuário são criptografados e se exige resgate, geralmente em moeda difícil de rastrear, sem nenhuma garantia de devolução. Quebrar a chave de criptografia é praticamente impossível e alguns ataques ainda trocam a chave. A melhor proteção é manter backups dos arquivos. O backup não pode ficar ligado à rede, senão o ataque criptografa também a cópia.`,
        `Cada arquivo tem um atributo de marcação (a "bandeirinha", também chamada de flag), que só aceita dois valores: 0, o arquivo não precisa de backup; 1, o arquivo foi criado ou modificado e precisa de backup. Não existe rotina padrão de backup: se a questão disser que o completo "deve ser feito a cada mês", ela está errada, pois a frequência depende da política da empresa.`
      ],
      [
        `Aula 2 · Tipos de backup: completo, incremental, diferencial, cópia e diário`,
        `Completo copia todos os dados, marcados ou não, e apaga o atributo de marcação; é a base de qualquer rotina e deve ser o primeiro a ser executado. Incremental copia só os arquivos com o atributo ativo (alterados desde o último backup, completo ou incremental) e apaga o atributo. Diferencial copia os arquivos com o atributo ativo em relação ao último completo e não apaga o atributo; por isso é cumulativo.`,
        `Mnemônico: "completo e incremental apagam" a marcação. Exemplo do diferencial: completo no fim de semana; segunda, copia 2 GB da segunda; terça, copia os 2 GB da segunda mais os da terça; e assim por diante. Para restaurar a sexta, você precisa só do último completo e do diferencial da sexta. No incremental, você precisa do último completo e de todos os incrementais até o dia desejado.`,
        `Pegadinha: o diferencial também é chamado de incremental cumulativo. Backup de cópia é uma cópia comum feita à parte, sem o sistema de backup, como antes de uma manutenção. Backup diário não olha o atributo: copia os arquivos criados ou modificados na data de hoje, pela data de modificação ou criação.`
      ],
      [
        `Aula 2 · Questões de backup resolvidas`,
        `Para resolver questões de backup, você identifica o tipo pelo que ele copia (todos, só marcados, acumulado), por quanto espaço usa e por quais backups são necessários na restauração. A pista mais forte nas provas é a restauração: se é preciso o completo mais vários backups anteriores, é incremental; se basta o completo mais o último, é diferencial.`,
        `Quatro questões: (1) CESPE: na primeira vez que se faz uma cópia de segurança, o tipo mais indicado é o completo. (2) Questão FC: copia o que mudou desde o último backup, baixo consumo de espaço, mas exige restaurar o completo e vários backups anteriores, deixando a recuperação lenta: é o incremental. (3) Vunesp: completo todo domingo; de segunda a sábado, só os arquivos alterados em relação ao backup do dia anterior: são incrementais. (4) Domingo, completo de 200 GB; segunda, alteração de 3 GB e diferencial; terça, 2 GB e diferencial; quarta, 7 GB e diferencial: os diferenciais ocupam 3, 5 e 12 GB.`,
        `Cuidado com a conta do diferencial: ele acumula, então o de terça é 3 + 2 = 5 GB e o de quarta é 5 + 7 = 12 GB. Em outra questão da CESPE, replicação de dados, que mantém uma cópia em tempo real, serve para manter automaticamente a disponibilidade do servidor em caso de falhas: item certo.`
      ],
      [
        `Aula 3 · Firewall: o que é, como funciona e como se classifica`,
        `Firewall é um recurso de segurança que impede invasões ao computador ou à rede: uma parede de fogo, uma barreira entre a sua máquina e a internet. Ele funciona como um filtro de pacotes: ora permite, ora bloqueia o tráfego, conforme regras configuradas que listam origens e destinos aceitáveis e bloqueados. O conjunto dessas regras vem das políticas de segurança da empresa.`,
        `Imagine um computador, o muro e a internet. Se o pacote é tráfego autorizado, o Firewall abre a porta; se é não autorizado, bloqueia. Ele também pode ficar entre setores da mesma rede, como a rede do departamento financeiro separada do restante dos computadores da empresa. Pode ser software (o Firewall do Windows) ou hardware (um equipamento como o WatchGuard), muito mais seguro e usado em ambientes corporativos.`,
        `Existe a distinção que a prova adora: Firewall stateless não guarda o estado das conexões, é mais simples e menos seguro; Firewall stateful guarda e lembra o estado de cada conexão, entende o contexto, impede pacotes ilegítimos e é mais seguro. A analogia do filtro de café ajuda: retém umas coisas e deixa passar outras.`
      ],
      [
        `Aula 3 · Questões de Firewall resolvidas`,
        `As questões de Firewall giram em torno de quatro pistas: filtra o tráfego, é regulado por políticas de segurança, pode ser software ou hardware, e seu objetivo é restringir o acesso a ambientes controlados. Qualquer alternativa que fale em "restringir a implantação de defesa" ou "impedir o acesso de quem tem autorização" está errada.`,
        `(1) "O Firewall pode ser implementado por software ou por hardware": certo. (2) Conceito do Firewall ligado à permissão para circularem somente as informações autorizadas: política de segurança (letra B). (3) "O sistema operacional da máquina precisa ser confiável e seguro, para que não seja facilmente invadido e o Firewall comprometido": certo, porque um sistema desatualizado e cheio de brechas compromete até um Firewall ativo. (4) Equipamento ou software que filtra dados da internet para a rede interna e vice-versa: Firewall (letra E); worm, spyware, adware e placa de rede não filtram. (5) Objetivo do Firewall: restringir acesso a ambientes controlados (letra A). (6) Barreira que regula o tráfego entre redes distintas por regras pré-definidas: Firewall (letra D), e não keylogger, antivírus, antiadware ou antispyware.`,
        `Eliminações típicas: worm é malware que se propaga em redes; spyware é programa espião; adware exibe propaganda; keylogger monitora o que se digita; antivírus procura e elimina vírus; placa de rede é só a porta de entrada e saída de dados, sem filtro algum. O Firewall não impede que o atacante chegue perto de "ameaças desconhecidas": impede o acesso ao ambiente controlado.`
      ]
    ],
    practice: [
      `Quais são os quatro princípios básicos da segurança da informação e por que "autenticação" não vale como princípio?`,
      `Como funciona a verificação de integridade de um arquivo baixado usando o código hash (MD5)?`,
      `Qual chave você usa para enviar uma mensagem sigilosa a alguém e qual chave você usa para provar a sua autoria?`,
      `Compare os backups completo, incremental e diferencial: o que copiam, se apagam o atributo de marcação e o que é preciso para restaurar.`,
      `O que é um Firewall, o que significam stateless e stateful, e quais são suas formas de implementação?`
    ],
    answers: [
      `Disponibilidade, integridade, confidencialidade e autenticidade (sigla DICA). Princípio termina em "-idade"; autenticação não é princípio. O não repúdio é consequência da autenticidade.`,
      `Gera-se o código hash do arquivo baixado e compara-se com o código publicado pelo site. Iguais: íntegro. Diferentes: apague e baixe de novo (falha ou arquivo falso).`,
      `Para sigilo, a chave pública do destinatário (ele abre com a privada dele). Para autoria, a sua chave privada, e qualquer um confere com a sua pública. Exige certificado digital.`,
      `Completo copia tudo e apaga a marcação; incremental copia só os marcados e apaga; diferencial copia os marcados e não apaga (acumula). Restauração: o incremental exige o completo mais todos os incrementais; o diferencial, o completo e o último diferencial.`,
      `Barreira que filtra pacotes conforme políticas de segurança e impede invasões. Stateless não guarda o estado da conexão (menos seguro); stateful guarda (mais seguro). Pode ser software ou hardware.`
    ]
  });
  window.PCPE_DEEPENING[topic] = {
    1: [
      ['h', 'Por que a segurança da informação vai além da informática'],
      ['p', `Segurança da informação é um tema que costuma aparecer dentro da disciplina de informática, mas os conceitos, as características e as regras dele valem também fora dela. Para oferecer sigilo de dados você não precisa de computador: precisa de regras de organização, de regulamentação dos dados da empresa e de todo o fluxo da informação (o que é um documento sigiloso, quem pode acessá-lo, como circula). Por isso há uma pincelada desse assunto em matérias como arquivologia e gestão de materiais.`],
      ['h', 'As normas técnicas ABNT NBR ISO/IEC 27001 e 27002'],
      ['p', `As normas da família 27000 reúnem regras básicas de segurança. Em concursos, as que costumam ser cobradas são a 27001 e a 27002. Elas tratam, por exemplo, de como deve ser uma senha para ser minimamente segura (formato, tipos de caracteres), de política de mesa limpa e de tela limpa. A mesa limpa tem pouca relação com a informática; a tela limpa já está no universo da informática. Quando o edital cita a norma pelo nome, a banca cobra o conteúdo dela; quando só fala em "princípios de segurança da informação", o foco são os princípios abaixo, que são a parte que mais aparece na sua prova.`],
      ['h', 'O que é um princípio'],
      ['p', `Princípio é aquilo que você almeja alcançar. Para dizer que ele foi garantido, é preciso oferecer a condição para isso; se a condição não foi satisfeita, você não tem o princípio, porque falta garantia no processo. Entenda a natureza dessa garantia: ela não impede que o evento ocorra; ela afirma que, até aqui, ele não ocorreu. É como um selo: "garanto que até aqui o dado não foi alterado". Esse é o princípio da integridade. Já o princípio que oferece sigilo é a confidencialidade, e o que garante a autoria é a autenticidade.`],
      ['h', 'A sigla DICA'],
      ['ul', [
        `Disponibilidade: os recursos (e a informação) estão acessíveis para quem precisa e quando precisa.`,
        `Integridade: a informação não foi alterada.`,
        `Confidencialidade: a informação é sigilosa; só quem deve conhece o conteúdo.`,
        `Autenticidade: garante a autoria, a veracidade de quem enviou ou criou a informação.`
      ]],
      ['p', `Estranhou a disponibilidade? Segurança evoca proteção e bloqueio, e aqui se pede o contrário: deixar disponível. A lógica é que os recursos que proporcionam a segurança também precisam estar em suas mãos, acessíveis, para que a proteção funcione.`],
      ['h', 'A pegadinha da terminação "-idade"'],
      ['p', `Para ser tomado como princípio, o termo termina em "-idade". A banca (a CESPE gosta disso) escreve "princípio da autenticação". Autenticação não termina em "-idade", logo não é princípio. O princípio é autenticidade. Aplique o teste sempre que um enunciado listar princípios.`],
      ['h', 'Quatro, cinco ou "dentre os princípios"'],
      ['p', `Os quatro da sigla DICA são o mínimo essencial. A banca pode afirmar que existem cinco princípios básicos e estar certa: o quinto é o não repúdio, que também aparece como irretratabilidade. Repare que ele não termina em "-idade" na forma "não repúdio", mas aparece com esse final como "irretratabilidade". Ele está intimamente ligado à autenticidade, como consequência dela. Fique atento também ao verbo do enunciado: se a questão disser "dentre os princípios...", ela pode citar apenas dois ou três, sem listar todos.`],
      ['h', 'Resumo de revisão'],
      ['ul', [
        `Princípios essenciais: DICA = disponibilidade, integridade, confidencialidade, autenticidade.`,
        `Princípio termina em "-idade"; "autenticação" não é princípio.`,
        `Um princípio garante que algo não ocorreu; não impede a ação.`,
        `Cinco princípios também é uma contagem válida (inclui o não repúdio, consequência da autenticidade).`,
        `As normas ISO 27001 e 27002 tratam de regras como senha, mesa limpa e tela limpa.`
      ]]
    ],
    2: [
      ['h', 'Disponibilidade: estar acessível para quem e quando precisar'],
      ['p', `O princípio da disponibilidade garante que a informação ou a ferramenta esteja disponível para quem precisa, no momento em que precisa. Quando o sistema está fora do ar, o princípio é ferido.`],
      ['p', `Exemplo 1: declaração de imposto de renda. O sistema da Receita Federal tem um prazo para o envio. Se você deixou para os últimos dias, o sistema congestionou e você não conseguiu enviar, o princípio da disponibilidade foi ferido. Atenção: a postura da Receita costuma ser rígida; o prazo foi pensado justamente para possíveis problemas, e ela pode orientar o envio numa etapa posterior que gera multa.`],
      ['p', `Exemplo 2: inscrição em concurso. Se durante a semana de inscrições a rede da instituição caiu e o site da banca ficou indisponível, também há quebra do princípio. Aqui a banca costuma prorrogar o prazo (e, muitas vezes, por mais tempo), porque tem interesse em ter mais inscritos: cada instituição trata o princípio ferido a seu modo, mas o princípio em si é sempre o mesmo, ter a informação acessível quando se precisa dela.`],
      ['p', `Relação com a segurança digital: as chaves públicas precisam estar disponíveis para quem e quando precisar. Você verá o porquê no estudo da criptografia assimétrica.`],
      ['h', 'Integridade: garante a não alteração'],
      ['p', `Integridade garante que a informação não foi alterada. A expressão típica da prova é "garante a não alteração". Cuidado: ela não impede a alteração; o arquivo pode ser alterado sim. O que o princípio fornece é a garantia de que, se houve alteração, você consegue descobrir. Afirmar que a integridade "impede a alteração" é a pegadinha.`],
      ['h', 'Como a integridade é verificada: a função hash'],
      ['ol', [
        `Você tem um documento qualquer (mensagem de texto, vídeo, um arquivo de 80 páginas).`,
        `Passa o arquivo por um programa que aplica uma função hash. Há várias; a mais popular citada é o MD5. O método é público: qualquer um tem acesso, não há segredo no método, é um processo matemático.`,
        `O programa gera um código hash, também chamado de resumo da mensagem. É um código único para aquele arquivo.`,
        `Se você mudar uma vírgula do arquivo e aplicar de novo a mesma função, o código muda completamente.`,
        `Compare o código gerado com o código de referência. Iguais, o arquivo não foi alterado; diferentes, foi.`
      ]],
      ['p', `Exemplo prático: você baixa a imagem ISO do Linux. Ao lado do arquivo, o site mostra o número do checksum (o MD5). Terminado o download, você usa um programinha que gera o MD5 da imagem baixada e confronta com o número do site. Códigos iguais: show de bola, a integridade foi verificada. Códigos diferentes: o que você baixou é diferente do que está no site; apague e baixe de novo. Pode ter havido falha no download ou alguém pode ter enviado um arquivo falso no lugar (por exemplo, com um programa espião embutido). Essa é a principal preocupação da comunidade de software livre, e por isso os sites publicam o código.`],
      ['h', 'Pontos que a banca explora no hash'],
      ['ul', [
        `O código hash é pequeno, muito menor que o arquivo original, e é único para aquele arquivo.`,
        `O processo é de via única: não dá para voltar do código ao arquivo de 80 páginas. Não é compactação.`,
        `"Resumo da mensagem" é o nome do código hash; a banca usa isso para induzir ao erro.`,
        `Gerar o código e comparar é o método; o princípio é a garantia de não alteração. Uma coisa é a definição, outra é como fazer.`
      ]],
      ['h', 'Resumo de revisão'],
      ['ul', [
        `Disponibilidade: acesso a quem e quando precisa. Sistema fora do ar fere o princípio.`,
        `Integridade: garante a não alteração; não impede a alteração.`,
        `Função hash (MD5): método público, gera o código hash (resumo da mensagem), único e curto, de via única.`,
        `Código diferente do publicado: o arquivo não está íntegro; apague e baixe de novo.`
      ]]
    ],
    3: [
      ['h', 'Confidencialidade: o princípio do sigilo'],
      ['p', `Confidencialidade garante o sigilo da informação entre os indivíduos que se comunicam. Para isso se usam algoritmos de criptografia. A criptografia nasceu para transformar a informação e escondê-la dentro de um código, de modo que, se alguém interceptar, não entenda o que está escrito. É uma arte antiga, já usada antes do Império Romano, e hoje é um método matemático.`],
      ['p', `Cuidado com a diferença: ler (acessar) uma mensagem é uma coisa, entender é outra. Num contexto de segurança, a criptografia permite que a mensagem seja interceptada sem ser compreendida.`],
      ['h', 'Dois métodos para garantir a confidencialidade'],
      ['ul', [
        `Criptografia de chave simétrica: o método mais antigo e mais simples, e também mais rápido. Usa uma única chave (senha).`,
        `Criptografia de chaves assimétricas: método mais recente, criado para suprir a falha da simétrica, que é a troca da chave. Antigamente as pessoas que queriam se comunicar já se conheciam e podiam combinar a chave; hoje você precisa enviar informação sigilosa a alguém com quem nunca teve contato. Pode ser usada com certificado digital ou sem ele.`
      ]],
      ['h', 'Chave simétrica: uma só chave'],
      ['p', `A mesma chave criptografa e descriptografa. Exemplo: no Word, você protege o documento com uma senha e envia o arquivo; só quem tiver a mesma senha abre. Igual ao compactador, que criptografa o arquivo com senha, e só abre com a mesma senha. Analogia: um cadeado fechando uma caixa e duas pessoas, cada uma com uma cópia da mesma chave: uma tranca, a outra abre, e assim se troca informação. O risco é óbvio: se uma das pessoas passar a chave a um terceiro, ele também terá acesso. Por isso a simétrica é "simples".`],
      ['h', 'Chaves assimétricas: pública e privada'],
      ['p', `São duas chaves distintas, mas correspondentes: o que uma fecha, a outra abre. Fala-se mais em "chaves" que em "senha", porque o processo é outro; a senha está mais ligada à simétrica. Truque: simétrica tem um "s", uma chave; assimétrica tem dois "s", duas chaves. Cada chave é, na prática, um código de tamanho próprio.`],
      ['ul', [
        `Chave pública: todos podem conhecer. É como o cadeado aberto que você distribui.`,
        `Chave privada: só o dono pode conhecer. É a chave daquele cadeado.`
      ]],
      ['h', 'Como garantir o sigilo com chaves assimétricas'],
      ['ol', [
        `Eu envio a você meu cadeado aberto (minha chave pública).`,
        `Você coloca a mensagem na caixa e a tranca com ele. Nem você consegue abrir de novo.`,
        `Só eu, com a minha chave privada, abro a caixa.`
      ]],
      ['p', `Regra: quem quer enviar algo sigiloso criptografa com a chave pública do destinatário; o destinatário usa a chave privada dele para abrir. Se você usou uma chave do par, o outro lado precisa usar a outra: esse casamento é inseparável.`],
      ['h', 'Simétrica x assimétrica na prática: HTTPS'],
      ['p', `O protocolo HTTPS usa os dois tipos. A assimétrica resolve a troca de chaves, mas é mais lenta porque as chaves e o algoritmo são maiores e a conta é mais complexa. Por isso é usada para transmitir uma senha (a chave que será usada na comunicação), e não para trocar todas as mensagens. Você não consegue enviar essa senha com segurança sem uma forma segura; a assimétrica faz esse papel.`],
      ['h', 'Resumo de revisão'],
      ['ul', [
        `Confidencialidade = sigilo; recurso: criptografia.`,
        `Simétrica: uma chave (senha), simples e rápida; o problema é a troca da chave.`,
        `Assimétrica: duas chaves (pública e privada), mais recente, resolve a troca, mas é mais lenta.`,
        `Sigilo: criptografe com a chave pública do destinatário; ele abre com a privada dele.`,
        `HTTPS usa simétrica e assimétrica; a assimétrica é mais usada para trocar a senha.`
      ]]
    ],
    4: [
      ['h', 'Autenticidade: garantir a autoria'],
      ['p', `Autenticidade garante a veracidade da autoria: quem é o autor real da mensagem ou da informação, se ela veio de fato daquela pessoa que diz tê-la enviado.`],
      ['h', 'Analogia do mundo do papel: cartório'],
      ['p', `O cartório é um órgão de registro, um terceiro confiável com idoneidade. Para a informática, você precisa de algo equivalente. Veja o contrato impresso:`],
      ['ul', [
        `Você assina por inteiro uma única página; nas outras, apenas rubrica.`,
        `Essas rubricas e a numeração das páginas ("1 de 3", "2 de 3", "3 de 3") garantem a integridade: evitam que alguém troque uma página por outra. Elas não garantem que você leu o contrato. Quem deixa a rubrica logo abaixo do texto, ou risca o espaço em branco, impede que alguém insira uma cláusula depois.`,
        `Já a autenticidade vem do cartório, que coloca o selo dizendo "esta assinatura é desta pessoa". Pode ser por comparação de firma (o cartório compara a assinatura com a registrada) ou por verdadeira (você assina diante do tabelião, que confirma que foi você).`
      ]],
      ['h', 'O que a informática precisa para a autenticidade'],
      ['p', `O certificado digital. Sem ele, não há como garantir a autenticidade, assim como você não prova sua autoria sem recorrer ao cartório. O certificado digital recorre a uma instituição de registro, um terceiro confiável, que tem competência para afirmar que você é você mesmo. E ele, por sua vez, faz uso de chaves assimétricas. Portanto: autenticidade exige certificado digital, e certificado digital usa chaves assimétricas, nunca a simétrica.`],
      ['h', 'Não repúdio (irretratabilidade)'],
      ['p', `É consequência da autenticidade. Se o cartório confirmou que a assinatura é sua, você não pode depois dizer que foi outra pessoa se passando por você: não pode negar a autoria. Se não houver autenticidade, não há como falar em não repúdio.`],
      ['h', 'Chaves: sigilo x autenticidade'],
      ['p', `Quem pode usar o quê: a chave pública, qualquer pessoa; a chave privada, só o dono. Usou uma, o outro lado precisa da outra.`],
      ['ul', [
        `Para sigilo (só o destino pode ler): criptografe com a chave pública do destinatário, pois só ele tem a privada.`,
        `Para autenticidade (só eu poderia ter enviado): use a minha chave privada; quem recebe usa a minha chave pública, que todos têm, para abrir. Se abriu, só podia ser eu.`
      ]],
      ['p', `Em questões de aplicação, pergunte-se: qual chave eu tenho de usar para que o outro lado use a que ele tem? Para algo que só o destinatário acesse, use o que só ele possui; para provar que sou eu, use o que só eu possuo.`],
      ['h', 'Resumo de revisão'],
      ['ul', [
        `Autenticidade = autoria; não repúdio = o autor não nega depois.`,
        `Sem autenticidade não há não repúdio.`,
        `Autenticidade exige certificado digital (terceiro confiável, como um cartório), que usa chaves assimétricas.`,
        `Rubricas e numeração das páginas protegem a integridade; o reconhecimento de firma garante a autenticidade.`,
        `Sigilo: pública do destinatário. Autenticidade: privada do remetente.`
      ]]
    ],
    5: [
      ['h', 'O que é backup'],
      ['p', `Backup é a cópia de segurança de dados em local geograficamente distinto do original, para possível utilização futura. A palavra-chave é local distinto. Se você copia um arquivo para outra pasta da mesma unidade, mantém dois arquivos iguais no mesmo lugar e isso não é backup, porque se algo ocorrer ao computador (como um incêndio), as duas cópias se perdem. É backup copiar para um HD externo, um pen drive, outro disco do computador, a rede ou a nuvem. A banca CESPE também escreve a sigla como BKP.`],
      ['p', `O assunto pode cair em redes ou em segurança da informação; se um dos dois estiver no edital, vale se preparar. Observe que as empresas realizam esses procedimentos de forma estruturada.`],
      ['h', 'Backup como proteção contra ransomware'],
      ['p', `Ransomware é um ataque que criptografa as informações do usuário e pede resgate, geralmente em Bitcoin ou outra moeda difícil de rastrear. Pagar não garante a devolução dos dados. Tentar quebrar a chave de criptografia é praticamente impossível (dias, semanas, meses), e alguns ataques ainda mudam a chave. Um exemplo lembrado foi o ataque aos servidores do STJ.`],
      ['p', `Qual é a melhor maneira de se proteger e restaurar? Efetuar backup dos arquivos. Mas o backup não pode estar ligado à rede: se estiver, o ataque criptografa os dados originais e também a cópia. Mantenha o backup desconectado.`],
      ['h', 'Backup on-site e off-site'],
      ['ul', [
        `On-site: feito na própria instituição, em servidores de backup dela.`,
        `Off-site: feito de forma remota, por exemplo em um servidor contratado.`
      ]],
      ['h', 'O atributo de marcação'],
      ['p', `Para entender os tipos de backup, você precisa conhecer o atributo de marcação, a "bandeirinha" (flag). É um campo do arquivo que aceita somente valores binários: 0 significa que o arquivo não precisa de backup; 1 significa que ele foi criado ou modificado e precisa passar por backup. Se a bandeirinha estiver levantada, o arquivo é candidato ao backup.`],
      ['h', 'Rotina de backup: não há padrão'],
      ['p', `Não existe uma rotina padrão. Se uma questão afirmar que "o backup completo deve ser feito a cada mês" ou "a cada ano", ela está errada. Quem define a frequência é a política da empresa, e quem decide isso são os analistas de segurança da informação e de redes. Só há uma exceção que a CESPE já cobrou: se os dados da empresa são alterados todos os dias, recomenda-se o backup completo, já que tudo muda.`],
      ['h', 'Que princípios o backup garante'],
      ['p', `Ele garante a integridade e a disponibilidade da informação. Disponibilidade: a informação fica disponível quando o usuário precisa. Integridade: a informação continua íntegra, e não pode ser alterada por quem não tem autorização. Anote os dois: disponibilidade e integridade.`],
      ['h', 'Replicação de dados'],
      ['p', `Replicação é manter uma cópia em tempo real, com a qual se consegue manter automaticamente a disponibilidade dos dados do servidor, mesmo com falhas. Item da CESPE sobre isso: certo.`],
      ['h', 'Resumo de revisão'],
      ['ul', [
        `Backup é cópia em local geograficamente distinto; copiar na mesma unidade não é backup.`,
        `Contra ransomware, a melhor proteção é manter backup desconectado da rede.`,
        `Atributo de marcação: 0 não precisa de backup; 1 precisa (criado ou modificado).`,
        `Não há rotina padrão: depende da política da empresa.`,
        `Backup garante disponibilidade e integridade. Replicação mantém a disponibilidade em tempo real.`
      ]]
    ],
    6: [
      ['h', 'Backup completo (normal)'],
      ['p', `Salva todos os dados em uma única cópia de segurança, independentemente de terem sido alterados, estejam ou não marcados. A execução é demorada, pela quantidade de arquivos, e o volume é grande: se o sistema tem 1 TB, copia-se e restaura-se 1 TB. Depois de feito, ele apaga o atributo de marcação. É feito com menor frequência (a cada dia, mês, semestre, conforme a política e a quantidade de dados), e é obrigatoriamente o primeiro a ser executado em um sistema que nunca passou por backup. A exceção é a empresa que altera todos os dados todos os dias: ela deve fazer o completo com frequência.`],
      ['h', 'Backup incremental'],
      ['p', `Copia apenas os dados que contêm o atributo de marcação ativo, comparados com o último backup, completo ou incremental. Depois, apaga o atributo. A execução é rápida, porque só olha os arquivos marcados e eles são menores que um completo. A restauração é demorada: exige o último completo mais todos os incrementais até o ponto desejado.`],
      ['p', `Exemplo: o completo foi feito no domingo e você precisa restaurar o backup da sexta-feira. Não basta o da sexta; é preciso restaurar o completo do domingo e todos os incrementais de segunda, terça, quarta, quinta e sexta. Essa característica é muito cobrada e é o que o diferencia do diferencial. A execução mais frequente (por exemplo diária) é indicada.`],
      ['h', 'Backup diferencial (incremental cumulativo)'],
      ['p', `Copia todos os dados com o atributo de marcação, comparados com o último completo (ou incremental). Execução: mais rápida que a do completo e mais lenta que a do incremental. Restauração: a mais rápida de todas. Ele não apaga o atributo de marcação. Por isso é cumulativo: cada dia copia de novo o que já tinha copiado nos dias anteriores desde o completo.`],
      ['p', `Exemplo: completo no sábado e domingo. Segunda: copia os 2 GB da segunda. Terça: os 2 GB da segunda e os da terça. Quarta: segunda, terça e quarta. E assim até sexta. Para restaurar a sexta, você precisa só do completo e do diferencial da sexta, pois os dados de segunda a quinta já estão dentro dele. A desvantagem é só um pouco mais de tempo e espaço na execução; a restauração é a mais rápida. Ele também é chamado de incremental cumulativo.`],
      ['p', `Diferença em uma frase: no incremental, o que não está no último você joga para o próximo; no diferencial, você sempre copia o acumulado desde o último completo.`],
      ['h', 'O mnemônico do atributo de marcação'],
      ['p', `Somente o backup completo e o incremental apagam o atributo de marcação. O diferencial não apaga. Decore: "completo e incremental apagam".`],
      ['h', 'Backup de cópia'],
      ['p', `Cópia comum dos arquivos, feita sem usar o sistema de backup. É comum antes de uma manutenção em servidor: o analista copia as informações num HD. É um procedimento de segurança: se a atualização ou manutenção der problema, você volta ao estado anterior.`],
      ['h', 'Backup diário'],
      ['p', `Copia todos os arquivos criados ou modificados na data de execução do backup. Não analisa o atributo de marcação: olha a data de modificação ou criação do arquivo. Se foi criado ou modificado hoje, é copiado.`],
      ['h', 'Quadro-resumo dos três principais'],
      ['ul', [
        `Completo: copia todos os dados; apaga a marcação; execução demorada; ocupa muito espaço.`,
        `Incremental: copia só os marcados; apaga a marcação; execução rápida; espaço pequeno; restauração demorada, pois exige o completo e todos os incrementais.`,
        `Diferencial: copia os marcados, acumulando; não apaga a marcação; execução intermediária; restauração a mais rápida entre os incrementais.`
      ]],
      ['h', 'Resumo de revisão'],
      ['ul', [
        `Primeiro backup de um sistema: completo.`,
        `Apagam a marcação: completo e incremental. Não apaga: diferencial.`,
        `Incremental: restaura com o completo + todos os incrementais. Diferencial: completo + último diferencial.`,
        `Backup de cópia: cópia comum sem o sistema de backup (ex.: antes de manutenção).`,
        `Backup diário: pela data de modificação ou criação, não pelo atributo.`
      ]]
    ],
    7: [
      ['h', 'Como atacar questões de backup'],
      ['ol', [
        `Leia o que o backup copia: tudo, só os modificados desde o último, ou o acumulado desde o completo?`,
        `Veja se a questão cita a restauração. É a melhor pista: completo mais vários backups anteriores é incremental; completo mais o último é diferencial.`,
        `Verifique o espaço e a velocidade citados.`,
        `Se a questão falar do dia anterior ou do último backup, pense em incremental; se for acumulado, em diferencial.`
      ]],
      ['h', 'Questão 1 (CESPE): primeira cópia de segurança'],
      ['p', `Enunciado: na primeira vez em que se realiza uma cópia de segurança, seja de um servidor ou de um computador pessoal, qual é o tipo de backup mais indicado? Raciocínio: "primeira vez" só pode ser o backup completo, pois nunca houve backup daquele sistema. Resposta: completo.`],
      ['h', 'Questão 2 (FC, 2019): identificar o tipo'],
      ['p', `Enunciado, resumido: o tipo de backup cria uma cópia dos dados alterados desde o último backup realizado, tem como vantagem o baixo consumo de espaço e baixo custo. No entanto, em caso de recuperação total, é preciso restaurar o full backup (completo) e vários backups anteriores desse tipo, deixando a recuperação lenta e com maior probabilidade de erros.`],
      ['p', `Raciocínio: baixo consumo de espaço já exclui o completo. Precisar do completo mais vários backups anteriores desse tipo é a característica do incremental (para restaurar a sexta, você precisa de quinta, quarta, terça, segunda e o completo de domingo). Gabarito: letra B, incremental.`],
      ['h', 'Questão 3 (Vunesp): classificar os backups de segunda a sábado'],
      ['p', `Enunciado: uma empresa faz um backup completo dos arquivos do servidor todo domingo, dia sem expediente. De segunda a sábado, em horário pós-expediente, são feitos backups apenas dos arquivos alterados ou criados em relação ao backup do dia anterior. Como são classificados os backups de segunda a sábado?`],
      ['p', `Raciocínio: os completos só ocorrem aos domingos, então não são completos; não se falou de backup espelho nem de cópia. Restam incremental e diferencial. A frase "em relação ao backup do dia anterior" indica que cada dia copia só o que mudou desde o dia anterior, sem acumular a base: é incremental. Gabarito: letra C.`],
      ['h', 'Questão 4: contas com o diferencial'],
      ['p', `Enunciado: a empresa faz um backup completo de 200 GB no domingo. Na segunda, foram alterados 3 GB, e ao fim do dia fez-se um backup diferencial. Na terça, mais 2 GB e outro diferencial. Na quarta, mais 7 GB e outro diferencial. Qual o tamanho dos backups diferenciais de segunda, terça e quarta, respectivamente?`],
      ['p', `Raciocínio: o diferencial é cumulativo. Segunda: 3 GB. Terça: 3 + 2 = 5 GB. Quarta: 5 + 7 = 12 GB. Resposta: 3, 5 e 12 GB (letra B). Não use 3, 2 e 7: isso seria incremental.`],
      ['h', 'Questão 5 (CESPE, 2016): incremental x outros'],
      ['p', `Afirmativa: o backup incremental promove uso mais eficiente do espaço de armazenamento, porque não gera cópias duplicadas, mas suas restaurações são mais lentas e mais complexas que as do backup full e do diferencial. Está correta: o incremental exige o completo mais todos os incrementais, então o tempo de restauração dele é maior.`],
      ['h', 'Questão 6 (CESPE): replicação'],
      ['p', `Afirmativa: replicação de dados é uma técnica de armazenamento para manter automaticamente a disponibilidade do servidor a despeito de falhas. Certa: a replicação mantém uma cópia em tempo real, garantindo a disponibilidade.`],
      ['h', 'Resumo de revisão'],
      ['ul', [
        `Primeira cópia: completo.`,
        `Baixo espaço + completo e vários backups anteriores na restauração: incremental.`,
        `"Em relação ao dia anterior": incremental. Acumulado desde o completo: diferencial.`,
        `Diferencial: some o acumulado (3, 3+2, 3+2+7).`,
        `Restauração do incremental é mais lenta e complexa que a do diferencial.`
      ]]
    ],
    8: [
      ['h', 'O que é um Firewall'],
      ['p', `Firewall é um recurso de segurança usado para impedir invasões ao computador ou à rede. Pense numa parede de fogo, num muro, numa barreira de proteção contra tentativas de invasão (por exemplo, vindas da internet). A matéria caiu em quase todas as provas de informática e ainda cai muito, porque está ligada à segurança da informação.`],
      ['h', 'Como ele decide: tráfego autorizado e não autorizado'],
      ['p', `Imagine seu computador, o Firewall (o muro) e a internet. Ora o Firewall permite o tráfego de dados entre a internet e o computador; ora bloqueia. Isso ocorre porque ele verifica se os pacotes são tráfego autorizado (permite) ou não autorizado (bloqueia). O Firewall é configurável: você o configura para que ele saiba distinguir os dois.`],
      ['p', `Ele não precisa ficar somente entre a internet e o computador. Em uma empresa, a área de TI pode colocar um Firewall para proteger uma rede interna de outros computadores da própria rede interna: por exemplo, isolar a rede do departamento financeiro dos demais computadores da empresa.`],
      ['h', 'Políticas de segurança'],
      ['p', `As configurações que dizem o que é tráfego autorizado e o que não é são as políticas de segurança. A política de segurança é a permissão para que somente circulem as informações autorizadas. Quem trabalha com TI primeiro conhece as políticas de segurança da empresa e depois as aplica nas configurações do Firewall.`],
      ['h', 'Filtro de pacotes'],
      ['p', `Na maioria das vezes, o Firewall funciona como filtro de pacotes. São criadas regras que listam origens e destinos aceitáveis e origens e destinos bloqueados. A imagem é a do filtro de café: deixa passar uma coisa e retém outra. Se na questão aparecer "filtrar os dados", pense em Firewall.`],
      ['h', 'Firewall stateless x stateful'],
      ['ul', [
        `Stateless: não guarda o estado de conexão. O contexto da conexão não importa para ele. É mais simples e menos poderoso em termos de segurança.`,
        `Stateful: guarda e lembra o estado de cada conexão, é sensível ao contexto, e por isso pode impedir que pacotes ilegítimos entrem ou saiam da rede. É mais poderoso e eficiente.`
      ]],
      ['h', 'Software ou hardware?'],
      ['p', `Pode ser os dois. Firewall por software é um programa instalado: o Firewall do Windows é só um software, que usa como hardware a própria máquina do usuário. Firewall por hardware é um equipamento físico, adquirido especificamente para essa função e instalado na rede, como o WatchGuard. Em comparação rápida, o hardware é bem mais seguro. O Firewall do Windows é um Firewall básico; uma empresa com grande exigência de segurança costuma adquirir um Firewall de hardware. Eles também podem ser combinados.`],
      ['h', 'Resumo de revisão'],
      ['ul', [
        `Firewall = barreira que impede invasões à máquina ou à rede.`,
        `Permite o tráfego autorizado e bloqueia o não autorizado, conforme as políticas de segurança.`,
        `Age como filtro de pacotes, com regras de origens e destinos aceitáveis e bloqueados.`,
        `Stateless não guarda o estado da conexão; stateful guarda e é mais seguro.`,
        `Pode ser software (Windows) ou hardware (equipamento, como o WatchGuard); o de hardware é mais seguro.`
      ]]
    ],
    9: [
      ['h', 'Questão 1: software ou hardware'],
      ['p', `Julgue: "o recurso de segurança denominado Firewall pode ser implementado por software ou por hardware." Resposta: certo. O Firewall do Windows é software; empresas corporativas compram equipamentos de Firewall de hardware para aumentar a segurança; e também há combinação dos dois.`],
      ['h', 'Questão 2: o conceito de "somente circulam informações autorizadas"'],
      ['p', `No Firewall, o conceito relacionado à permissão para somente circularem as informações autorizadas é: (A) token, (B) política de segurança, ou ainda multiplexação e modo protegido, entre outras opções. Resposta: política de segurança (letra B). É ela que define o que o Firewall autoriza e o que bloqueia. Quem trabalha na área primeiro conhece a política da empresa e a aplica na configuração.`],
      ['h', 'Questão 3: sistema operacional confiável'],
      ['p', `Julgue: "é importante que o sistema operacional da máquina em que o Firewall está sendo executado seja confiável e seguro, para que ela não seja facilmente invadida e o Firewall comprometido." Resposta: certo. Não basta ativar o Firewall e ter boas políticas se o sistema operacional está desatualizado, cheio de brechas e vulnerabilidades sem correção: o ataque encontra um caminho e invade, mesmo com o Firewall ativo. É preciso manter os sistemas atualizados e ter políticas adequadas.`],
      ['h', 'Questão 4: quem filtra os dados?'],
      ['p', `Enunciado: um equipamento de rede ou um software rodando em um servidor que tem por objetivo filtrar os dados que vêm da internet para a rede interna e vice-versa, dando controle à empresa ou ao usuário. Trata-se de: (A) worms, (B) spyware, (C) adware, (D) placa de rede, (E) Firewall. Resposta: E. A pista é a palavra "filtrar". As demais caem: worm é um tipo de malware, um verme que se propaga pelas redes; spyware é o programa espião que monitora atividades; adware exibe propaganda; placa de rede é apenas o hardware que conecta o computador à rede (porta de entrada e saída dos dados), sem filtro nenhum.`],
      ['h', 'Questão 5: objetivo do Firewall'],
      ['p', `Opções: (A) restringir o acesso a ambientes controlados; (B) criar pontos controlados por autorizações informais; (C) restringir a implantação de defesa em ambientes críticos; (D) impedir que haja acesso por um ponto controlado tendo autorização para tanto; (E) impedir que eventuais atacantes cheguem muito perto das ameaças desconhecidas. Resposta: A. Invasão é acessar de forma ilícita um ambiente controlado; o Firewall restringe esse acesso, permitindo só os autorizados.`],
      ['ul', [
        `B falha: o Firewall controla todo o ambiente conforme as políticas, não só autorizações "informais".`,
        `C falha: ele ajuda a implantar defesa, não a restringe.`,
        `D falha: quem tem autorização, o Firewall permite.`,
        `E falha: ele impede o acesso ao ambiente controlado, não que o atacante se aproxime de ameaças desconhecidas.`
      ]],
      ['h', 'Questão 6: barreira entre redes distintas'],
      ['p', `Enunciado: barreira de proteção de redes de computadores que regula o tráfego entre redes distintas, impedindo, por regras pré-definidas, a transmissão de dados nocivos ou não autorizados de uma rede a outra. Opções: keylogger, antivírus, antiadware, Firewall, antispyware. Resposta: Firewall (letra D). Keylogger monitora o que o usuário digita; antivírus procura e elimina vírus; antiadware impede programas que exibem propaganda; antispyware combate programas espiões. Regular o tráfego entre redes por regras definidas é do Firewall.`],
      ['h', 'Resumo de revisão'],
      ['ul', [
        `Pistas de Firewall: filtrar dados, regular tráfego entre redes, restringir acesso a ambientes controlados, política de segurança.`,
        `Software, hardware ou ambos: certo.`,
        `Sistema operacional vulnerável compromete o Firewall.`,
        `Placa de rede não filtra; worm, spyware, adware e keylogger são ameaças ou programas de outra natureza.`,
        `O Firewall nunca "restringe a implantação de defesa"; ele implementa defesa.`
      ]]
    ]
  };
  window.PCPE_QUESTOES[topic] = [
    {
      text: `Segundo a sigla que reúne os princípios básicos da segurança da informação, qual das opções abaixo é um princípio?`,
      options: [`Autenticação`, `Autenticidade`, `Criptografia`, `Autorização`],
      correct: 1,
      exp: `Princípio termina em "-idade": disponibilidade, integridade, confidencialidade e autenticidade. "Autenticação" é o termo que a banca usa para enganar; criptografia é recurso, e autorização não é um dos princípios da sigla.`
    },
    {
      text: `Você baixa a imagem ISO de um sistema e, ao gerar o código MD5 do arquivo, o resultado é diferente do código publicado no site. O que você deve concluir e fazer?`,
      options: [
        `O arquivo foi compactado; basta descompactá-lo.`,
        `O código é apenas um resumo e pode ser diferente; instale normalmente.`,
        `A integridade não foi confirmada; apague o arquivo e baixe novamente.`,
        `A confidencialidade foi quebrada; troque as chaves.`
      ],
      correct: 2,
      exp: `Códigos hash diferentes indicam que o arquivo não é o original: houve falha no download ou foi enviado um arquivo falso. Apague e baixe de novo. O hash não é compactação e não trata de sigilo.`
    },
    {
      text: `No dia do prazo final, o sistema da Receita Federal ficou fora do ar e você não conseguiu enviar sua declaração. Que princípio da segurança da informação foi ferido?`,
      options: [`Disponibilidade`, `Integridade`, `Confidencialidade`, `Autenticidade`],
      correct: 0,
      exp: `A informação ou o serviço deixou de estar acessível quando você precisou: quebra de disponibilidade. Integridade trata de não alteração, confidencialidade de sigilo e autenticidade de autoria; nada disso ocorreu no caso.`
    },
    {
      text: `Ana quer enviar a Bruno uma mensagem sigilosa usando criptografia assimétrica, de modo que só Bruno consiga lê-la. Que chave Ana deve usar e que chave Bruno usará para abri-la?`,
      options: [
        `Ana usa a chave privada dela; Bruno usa a chave pública dela.`,
        `Ana usa a chave pública dela; Bruno usa a chave privada dela.`,
        `Ana usa a chave privada de Bruno; Bruno usa a chave pública de Ana.`,
        `Ana usa a chave pública de Bruno; Bruno usa a chave privada dele.`
      ],
      correct: 3,
      exp: `Para sigilo, criptografa-se com a chave pública do destinatário (o cadeado aberto de Bruno) e só ele, com a privada, abre. A opção A é o caminho da autenticidade; as demais misturam chaves que ninguém tem (a privada de outra pessoa).`
    },
    {
      text: `Sobre autenticidade e certificado digital, está CORRETA a afirmação:`,
      options: [
        `A autenticidade pode ser garantida com chave simétrica, sem terceiros.`,
        `A autenticidade exige certificado digital, que faz uso de chaves assimétricas, e dela decorre o não repúdio.`,
        `O não repúdio existe mesmo sem autenticidade, pois depende apenas do hash.`,
        `A rubrica nas páginas de um contrato garante a autenticidade da assinatura.`
      ],
      correct: 1,
      exp: `Como no cartório, é preciso um terceiro confiável (certificado digital), que usa chaves assimétricas; o não repúdio é consequência da autenticidade. A rubrica e a numeração protegem a integridade, não a autoria, e sem autenticidade não há não repúdio.`
    },
    {
      text: `Uma empresa sofre um ataque de ransomware: seus arquivos são criptografados e se exige resgate. Qual a melhor forma de proteção e restauração?`,
      options: [
        `Pagar o resgate, pois isso garante a devolução dos dados.`,
        `Tentar quebrar a chave de criptografia, o que costuma ser rápido.`,
        `Manter backups dos arquivos, sem ligação com a rede, para que o ataque não os criptografe.`,
        `Copiar os arquivos para outra pasta da mesma unidade.`
      ],
      correct: 2,
      exp: `Backup desconectado é a melhor proteção. Pagar não dá garantia, quebrar a chave é praticamente impossível e copiar na mesma unidade não é backup, além de ser criptografado junto.`
    },
    {
      text: `Um sistema fez backup completo no domingo e backups incrementais de segunda a sexta. Você precisa restaurar a situação da quinta-feira. O que é necessário restaurar?`,
      options: [
        `O completo de domingo e os incrementais de segunda, terça, quarta e quinta.`,
        `Apenas o incremental de quinta.`,
        `O completo de domingo e apenas o incremental de quinta.`,
        `Apenas o completo de domingo.`
      ],
      correct: 0,
      exp: `No incremental cada backup contém só o que mudou desde o anterior, então é preciso o último completo e todos os incrementais até o dia desejado. Nas demais, faltam backups intermediários; "completo + último" seria o raciocínio do diferencial.`
    },
    {
      text: `Domingo: backup completo. Segunda: alteração de 4 GB e backup diferencial. Terça: mais 1 GB alterado e outro diferencial. Quarta: mais 6 GB e outro diferencial. Qual o tamanho dos diferenciais de segunda, terça e quarta?`,
      options: [`4, 1 e 6 GB`, `4, 4 e 4 GB`, `4, 5 e 6 GB`, `4, 5 e 11 GB`],
      correct: 3,
      exp: `O diferencial é cumulativo e não apaga a marcação: segunda, 4; terça, 4 + 1 = 5; quarta, 5 + 6 = 11. A opção 4, 1 e 6 é a conta do incremental; as outras não acumulam corretamente.`
    },
    {
      text: `Sobre Firewall stateless e stateful, assinale a opção correta.`,
      options: [
        `O stateless guarda o estado das conexões; o stateful não.`,
        `O stateful guarda e lembra o estado de cada conexão, sendo mais poderoso e eficiente em segurança que o stateless.`,
        `Ambos são equivalentes, pois só mudam de nome.`,
        `O stateless só existe como hardware, e o stateful só como software.`
      ],
      correct: 1,
      exp: `O stateful é sensível ao contexto, lembra o estado das conexões e impede pacotes ilegítimos, por isso é mais seguro. A opção A inverte os conceitos; nada indica que sejam equivalentes, e qualquer um pode ser software ou hardware.`
    },
    {
      text: `Um analista descreve um recurso que, por regras pré-definidas de acordo com as políticas de segurança da empresa, filtra pacotes e regula o tráfego entre a internet e a rede interna, permitindo apenas o tráfego autorizado. Trata-se de:`,
      options: [
        `Um antivírus, que elimina vírus do computador.`,
        `Uma placa de rede, que filtra o tráfego conforme as regras.`,
        `Um Firewall, que pode ser software ou hardware.`,
        `Um keylogger, que bloqueia o tráfego não autorizado.`
      ],
      correct: 2,
      exp: `Filtro de pacotes e regulação do tráfego por regras e política de segurança são as pistas do Firewall. Antivírus elimina vírus; placa de rede é só a porta de entrada e saída de dados, sem filtro; keylogger é programa que monitora o que se digita.`
    }
  ];
})();
