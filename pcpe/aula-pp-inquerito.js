(function () {
  'use strict';
  window.PCPE_TOPIC_GUIDES = window.PCPE_TOPIC_GUIDES || {};
  window.PCPE_DEEPENING = window.PCPE_DEEPENING || {};
  window.PCPE_QUESTOES = window.PCPE_QUESTOES || {};
  const topic = 'Inquérito policial';
  const base = window.PCPE_TOPIC_GUIDES[topic] || {};
  window.PCPE_TOPIC_GUIDES[topic] = Object.assign({}, base, {
    lessons: [
      [
        `Conceito e funções do inquérito policial`,
        `O inquérito policial é um procedimento administrativo, inquisitório e preparatório, presidido pelo delegado de polícia. Consiste em um conjunto de diligências da polícia investigativa para identificar fontes de prova e colher elementos de informação sobre autoria e materialidade da infração penal, a fim de que o titular da ação penal possa ingressar em juízo. Ele cumpre duas funções: preservadora e preparatória.`,
        `Conceito completo, na linha de Renato Brasileiro: "procedimento administrativo inquisitório e preparatório, presidido pelo delegado de polícia, que consiste em um conjunto de diligências realizadas pela polícia investigativa, objetivando a identificação das fontes de prova e a colheita de elementos de informação quanto à autoria e materialidade da infração penal, a fim de possibilitar que o titular da ação penal possa ingressar em juízo".`,
        `Inquérito é procedimento, não processo. Essa é uma pegadinha que cai demais: ele está na fase pré-processual da persecução penal e, em regra, nele não se produzem provas, apenas elementos informativos.`
      ],
      [
        `Prazos de conclusão do inquérito`,
        `O prazo para concluir o inquérito varia conforme o crime, o investigado e a condição do investigado (preso ou solto). É um dos temas que mais caem em concurso. Você precisa memorizar o quadro: justiça estadual, justiça federal, Lei de Drogas, economia popular e justiça militar, sempre separando "preso" de "solto".`,
        `Quadro de prazos: Justiça estadual: preso, 10 dias (com possibilidade de prorrogação por 15 dias pelo Pacote Anticrime); solto, 30 dias. Justiça federal: preso, 15 dias + 15; solto, 30 dias. Lei de Drogas (art. 51): preso, 30 dias + 30; solto, 90 dias + 90. Economia popular: 10 dias, preso ou solto. Justiça militar: preso, 20 dias; solto, 40 dias + 20.`,
        `O prazo muda com a legislação aplicável, então identifique primeiro o ramo (estadual, federal, drogas, economia popular ou militar) e só depois a situação do indiciado. Em economia popular o prazo é igual para preso e solto: 10 dias.`
      ],
      [
        `Natureza jurídica e vícios do inquérito`,
        `A natureza jurídica do inquérito é a de procedimento administrativo preliminar de caráter informativo. Como é peça meramente informativa, destinada a sustentar a admissibilidade da inicial acusatória, os vícios ocorridos nele não se transmitem automaticamente ao processo. Esse é o entendimento do STJ, em julgado de 2021.`,
        `Julgado do STJ (2021): "eventuais vícios ocorridos no inquérito policial não se transmutam automaticamente para o processo, por se tratar de peça meramente informativa destinada à sustentação de admissibilidade da inicial acusatória". Em termos simples: vícios formais no inquérito não contaminam o processo penal.`,
        `Se a questão afirmar que a nulidade do inquérito anula automaticamente a ação penal, está errada. Procedimento, caráter informativo e ausência de contaminação do processo caminham juntos.`
      ],
      [
        `Características I: inquisitivo e a Súmula Vinculante 14`,
        `O inquérito é um procedimento inquisitivo: há concentração de poder em uma autoridade única e, em regra, não há partes, contraditório nem ampla defesa. Isso não impede que o advogado acompanhe o cliente, e a Súmula Vinculante 14 garante ao defensor acesso amplo aos elementos de prova já documentados.`,
        `Súmula Vinculante 14 do STF: é direito do defensor, no interesse do representado, ter acesso amplo aos elementos de prova que, já documentados em procedimento investigatório realizado por órgão com competência de polícia judiciária, digam respeito ao exercício do direito de defesa. Conclusão: o advogado não tem acesso às diligências em andamento, mas tem acesso às já documentadas.`,
        `A presença do advogado no inquérito é direito do investigado, não dever: se ele comparecer sozinho e abrir mão da assistência técnica, será ouvido normalmente. Na fase judicial é diferente: interrogar o réu sem advogado gera nulidade absoluta por ausência de defesa técnica.`
      ],
      [
        `Características II: discricionário, sigiloso, escrito e temporário`,
        `O inquérito é discricionário porque o delegado o conduz com margem de conveniência e oportunidade, dentro dos limites da lei. É sigiloso porque o elemento surpresa é essencial para identificar fontes de prova. É escrito porque os atos orais são reduzidos a termo e as folhas são rubricadas (art. 9º do CPP). E é temporário, pois deve respeitar prazos fixados em lei.`,
        `Sigilo: se o inquérito fosse público, os investigados fugiriam e esconderiam as provas. Duração: a Lei de Abuso de Autoridade (art. 31) tipifica como crime estender injustificadamente a investigação, procrastinando-a em prejuízo do investigado ou fiscalizado, o que reforça o caráter temporário.`,
        `Não confunda: o sigilo vale contra o público e não contra o defensor, que tem acesso aos elementos já documentados (SV 14). E o inquérito não pode durar anos a fio: o investigado sofre socialmente com a investigação eterna.`
      ],
      [
        `Características III: indisponível e dispensável`,
        `Indisponível significa que, uma vez instaurado o inquérito, o delegado não pode arquivá-lo em nenhuma hipótese (art. 17 do CPP). Dispensável significa que o inquérito não é indispensável para a ação penal: se já existirem elementos suficientes de convicção, o titular da ação pode propor a ação sem ele.`,
        `Art. 17 do CPP: a autoridade policial não poderá mandar arquivar autos de inquérito. A doutrina majoritária sustenta que ele é dispensável por ser peça meramente informativa, desnecessária diante de elementos suficientes para fundamentar a ação penal.`,
        `Memorize: o inquérito é INDISPONÍVEL e DISPENSÁVEL. As bancas adoram trocar por "disponível" ou "indispensável", que estão erradas. São palavras parecidas, mas diferentes.`
      ],
      [
        `Indiciamento`,
        `Indiciar é atribuir a autoria ou a participação em uma infração penal a uma pessoa, apontando-a como provável autora ou partícipe do crime no bojo do inquérito. O indiciamento é ato privativo do delegado, que não se sujeita à requisição do Ministério Público nem do juiz. Exige despacho motivado, com análise técnico-jurídica.`,
        `Requisitos: despacho motivado do delegado, em análise técnico-jurídica, apontando os indícios de autoria, a materialidade e as circunstâncias da infração. Momento: em qualquer ponto da investigação, desde a instauração do inquérito até o relatório final. Depois de iniciada a ação penal, o indiciamento não é mais cabível.`,
        `Somente o delegado decide sobre o indiciamento: nem o promotor nem o juiz podem requisitá-lo. Limite temporal: com a ação penal iniciada, não se indicia mais ninguém.`
      ]
    ],
    practice: [
      `Qual é a natureza jurídica do inquérito policial e por que ele não é um processo?`,
      `Cite os prazos de conclusão do inquérito na justiça estadual e na federal, para investigado preso e solto.`,
      `O que diz a Súmula Vinculante 14 e qual é o limite do acesso do advogado?`,
      `Explique a diferença entre inquérito "indisponível" e "dispensável".`,
      `Quem pode indiciar, quais os requisitos do despacho e até quando o indiciamento é possível?`
    ],
    answers: [
      `Procedimento administrativo preliminar de caráter informativo. Não é processo porque está na fase pré-processual da persecução penal e, em regra, não produz provas, apenas elementos informativos; por isso vícios do inquérito não contaminam automaticamente o processo.`,
      `Justiça estadual: preso, 10 dias (prorrogação de 15 dias pelo Pacote Anticrime); solto, 30 dias. Justiça federal: preso, 15 dias + 15; solto, 30 dias.`,
      `É direito do defensor ter acesso amplo aos elementos de prova já documentados em procedimento investigatório de polícia judiciária que digam respeito ao direito de defesa. O advogado não acessa as diligências em andamento.`,
      `Indisponível: instaurado o inquérito, o delegado não pode arquivá-lo (art. 17 do CPP). Dispensável: o inquérito não é indispensável para a ação penal quando já há elementos suficientes de convicção.`,
      `Somente o delegado de polícia, sem requisição do MP ou do juiz. O despacho deve ser motivado, com análise técnico-jurídica apontando indícios de autoria, materialidade e circunstâncias da infração. Pode ocorrer da instauração até o relatório final; iniciada a ação penal, não cabe mais.`
    ]
  });
  window.PCPE_DEEPENING[topic] = {
    1: [
      ['h', 'O que é o inquérito policial'],
      ['p', `Para Renato Brasileiro, o inquérito policial é um procedimento administrativo inquisitório e preparatório, presidido pelo delegado de polícia, que consiste em um conjunto de diligências realizadas pela polícia investigativa, objetivando a identificação das fontes de prova e a colheita de elementos de informação quanto à autoria e à materialidade da infração penal, a fim de possibilitar que o titular da ação penal possa ingressar em juízo. É um conceito completo e você deve guardá-lo.`],
      ['p', `Repare nas palavras-chave: procedimento administrativo, inquisitório, preparatório, delegado de polícia, polícia investigativa, fontes de prova, elementos de informação, autoria, materialidade e titular da ação penal. Cada uma delas pode ser trocada por uma pegadinha na prova.`],
      ['h', 'As duas funções do inquérito'],
      ['ul', [
        `Função preservadora: a existência prévia de um inquérito inibe ou afasta a instauração de um processo penal infundado, temerário e perigoso. Com isso, resguarda a liberdade do inocente e evita custos desnecessários para o Estado.`,
        `Função preparatória: o inquérito fornece elementos de informação para que o titular da ação penal, que é o Ministério Público, ingresse em juízo. Além disso, acautela meios de prova que poderiam desaparecer com o decurso do tempo.`
      ]],
      ['h', 'Procedimento, e não processo'],
      ['p', `O inquérito é um procedimento administrativo preliminar. Não se trata de processo, e isso é uma pegadinha que cai demais em prova. Ele está situado na fase pré-processual da persecução penal.`],
      ['p', `Ele é de caráter informativo, porque em regra não são produzidas provas no inquérito policial, apenas elementos informativos. É presidido pela autoridade policial, que é o delegado de polícia, e tem prazo certo; esse prazo pode variar conforme o crime, o investigado e a condição do investigado, tema da próxima lição.`],
      ['h', 'Como a banca cobra'],
      ['p', `Uma assertiva do tipo "o inquérito policial é um processo administrativo..." está errada: o correto é procedimento. Outra assertiva comum atribui ao inquérito a função de produzir prova definitiva para condenar; isso contraria o caráter informativo.`],
      ['h', 'Resumo de revisão'],
      ['ul', [
        `Inquérito = procedimento administrativo, inquisitório e preparatório, presidido pelo delegado.`,
        `Objetivo: identificar fontes de prova e colher elementos de informação sobre autoria e materialidade.`,
        `Destinatário: o titular da ação penal (Ministério Público), que poderá ingressar em juízo.`,
        `Funções: preservadora (evita processo temerário, protege o inocente e poupa custos) e preparatória (fornece elementos e acautela meios de prova).`,
        `Não é processo: fase pré-processual, caráter informativo, em regra sem provas.`
      ]]
    ],
    2: [
      ['h', 'Por que o prazo sempre cai'],
      ['p', `O prazo de conclusão do inquérito varia conforme o crime, o investigado e a sua condição (preso ou solto). Por ser um tema que sempre cai em concurso, você deve memorizar o quadro completo. A regra de ouro é identificar o ramo da legislação aplicável e depois verificar se o indiciado está preso ou solto.`],
      ['h', 'Quadro de prazos'],
      ['ul', [
        `Justiça estadual: investigado preso, 10 dias (com possibilidade de prorrogação por 15 dias, segundo o Pacote Anticrime, a ser autorizada pelo juiz); investigado solto, 30 dias.`,
        `Justiça federal: preso, 15 dias, prorrogáveis por mais 15; solto, 30 dias.`,
        `Lei de Drogas (art. 51): preso, 30 dias, prorrogáveis por mais 30; solto, 90 dias, prorrogáveis por mais 90.`,
        `Economia popular: 10 dias se preso e também 10 dias se solto.`,
        `Justiça militar: preso, 20 dias; solto, 40 dias, prorrogáveis por mais 20.`
      ]],
      ['h', 'Como memorizar'],
      ['p', `Observe os padrões: em quase todos os ramos o prazo do preso é menor que o do solto, porque a prisão exige agilidade. A exceção é a economia popular, em que o prazo é o mesmo (10 dias) para os dois. A Lei de Drogas tem os maiores prazos: 30 + 30 para o preso e 90 + 90 para o solto.`],
      ['p', `Exemplo de raciocínio: se a questão traz um inquérito da justiça federal com o investigado preso, você pensa em 15 dias com possibilidade de mais 15. Se traz crime de tráfico de drogas com o investigado solto, pense em 90 dias, prorrogáveis por mais 90.`],
      ['h', 'Resumo de revisão'],
      ['ul', [
        `Estadual: preso 10 dias (prorrogação de 15 pelo Pacote Anticrime); solto 30 dias.`,
        `Federal: preso 15 + 15; solto 30.`,
        `Drogas (art. 51): preso 30 + 30; solto 90 + 90.`,
        `Economia popular: 10 dias, preso ou solto.`,
        `Militar: preso 20; solto 40 + 20.`,
        `Primeiro identifique o ramo, depois a situação do investigado.`
      ]]
    ],
    3: [
      ['h', 'Natureza jurídica'],
      ['p', `A natureza jurídica do inquérito policial é a de procedimento administrativo preliminar de caráter informativo. Dessa natureza se extrai uma jurisprudência muito relevante sobre os vícios do inquérito.`],
      ['h', 'O entendimento do STJ (2021)'],
      ['p', `Segundo o STJ, em 2021, eventuais vícios ocorridos no inquérito policial não se transmutam automaticamente para o processo, por se tratar de peça meramente informativa destinada à sustentação de admissibilidade da inicial acusatória.`],
      ['p', `Traduzindo: aqueles vícios formais não contaminam o processo penal. Se o inquérito tiver uma irregularidade, ela não leva, por si só, à nulidade da ação penal. A lógica é a do caráter informativo: a condenação não se baseia no inquérito, que serve para que o titular da ação decida se propõe a ação.`],
      ['h', 'Como a banca cobra'],
      ['ul', [
        `Assertiva dizendo que os vícios do inquérito contaminam automaticamente o processo: errada.`,
        `Assertiva dizendo que o inquérito é peça meramente informativa e que seus vícios não se transmitem automaticamente ao processo: correta.`,
        `Assertiva chamando o inquérito de "processo": errada; é procedimento.`
      ]],
      ['h', 'Resumo de revisão'],
      ['ul', [
        `Natureza jurídica: procedimento administrativo preliminar de caráter informativo.`,
        `Vícios do inquérito não se transmutam automaticamente para o processo (STJ, 2021).`,
        `Fundamento: peça meramente informativa, destinada a sustentar a admissibilidade da inicial acusatória.`,
        `Resumo mnemônico: vícios no inquérito policial não contaminam o processo penal.`
      ]]
    ],
    4: [
      ['h', 'Procedimento inquisitivo'],
      ['p', `Procedimentos inquisitivos são caracterizados pela concentração de poder em autoridade única. Usualmente não há partes, contraditório nem ampla defesa. No inquérito, a autoridade que conduz a investigação é o delegado de polícia, e o investigado não é parte, e sim objeto da investigação.`],
      ['h', 'O advogado e a Súmula Vinculante 14'],
      ['p', `Ser inquisitivo não significa que o advogado fique de fora. De acordo com o Estatuto da OAB, é direito do advogado acompanhar o cliente perante qualquer autoridade investigante. Nesse sentido, existe a Súmula Vinculante 14 do Supremo Tribunal Federal.`],
      ['p', `Conteúdo da SV 14: é direito do defensor, no interesse do representado, ter acesso amplo aos elementos de prova que, já documentados em procedimento investigatório realizado por órgão com competência de polícia judiciária, digam respeito ao exercício do direito de defesa. Essa súmula é essencial.`],
      ['p', `Conclusão que você deve tirar dela: o advogado não terá acesso às diligências em andamento, mas às já documentadas ele pode ter acesso.`],
      ['h', 'Direito, e não dever'],
      ['p', `A presença do advogado é um direito do investigado, e não um dever. Se o suspeito comparecer sozinho e abrir mão da assistência técnica no inquérito, ele será ouvido normalmente.`],
      ['p', `Na fase judicial a situação é diferente: se o réu for interrogado sem advogado, há nulidade absoluta por ausência de defesa técnica. Guarde o contraste: inquérito, ouvido normalmente; processo, nulidade absoluta.`],
      ['h', 'Contraditório e ampla defesa'],
      ['p', `Em regra, não há contraditório e ampla defesa na investigação. A exceção apontada é o inquérito para expulsão de estrangeiro.`],
      ['h', 'Resumo de revisão'],
      ['ul', [
        `Inquisitivo: poder concentrado em autoridade única; em regra, sem partes, contraditório ou ampla defesa.`,
        `Exceção: inquérito para expulsão de estrangeiro.`,
        `Estatuto da OAB: direito de acompanhar o cliente perante qualquer autoridade investigante.`,
        `SV 14: acesso amplo às provas já documentadas; sem acesso às diligências em andamento.`,
        `Advogado no inquérito é direito; sem advogado, o investigado é ouvido normalmente.`,
        `No processo, réu interrogado sem advogado = nulidade absoluta.`
      ]]
    ],
    5: [
      ['h', 'Discricionário'],
      ['p', `O inquérito é um procedimento discricionário porque o delegado o conduz com margem de conveniência e oportunidade. Discricionariedade, nesse caso, implica liberdade de atuação nos limites traçados pela lei. Isso não significa agir fora da lei: o delegado escolhe as diligências mais úteis, mas sempre dentro dos limites legais.`],
      ['h', 'Sigiloso'],
      ['p', `O objetivo do inquérito é investigar infrações penais, identificando fontes de prova e colhendo elementos de informação. Por isso o sigilo é característica fundamental para o sucesso do trabalho investigatório: o elemento surpresa é muito importante. Se o inquérito fosse público, todo mundo fugiria com as provas.`],
      ['p', `Lembre da lição anterior: o sigilo convive com a SV 14. O defensor acessa os elementos já documentados, mas não as diligências em andamento.`],
      ['h', 'Escrito'],
      ['p', `Os atos produzidos oralmente são reduzidos a termo no inquérito policial, e a autoridade também deve rubricar todas as laudas, conferindo autenticidade ao documento. Essa regra está no art. 9º do CPP.`],
      ['h', 'Temporário'],
      ['p', `O delegado deve atender a prazos prefixados em lei, em razão da razoável duração da investigação. A natureza temporária ganha reforço com a Lei de Abuso de Autoridade, cujo art. 31 tipifica como crime a conduta do agente público que estende injustificadamente a investigação, procrastinando-a em prejuízo do investigado ou fiscalizado.`],
      ['p', `Em outras palavras, o inquérito policial não pode durar anos e anos a fio. Ele precisa ter prazo de duração razoável para que o investigado não sofra socialmente.`],
      ['h', 'Resumo de revisão'],
      ['ul', [
        `Discricionário: margem de conveniência e oportunidade, nos limites da lei.`,
        `Sigiloso: o elemento surpresa é fundamental para identificar fontes de prova.`,
        `Escrito: atos orais reduzidos a termo; folhas rubricadas pela autoridade (art. 9º do CPP).`,
        `Temporário: prazos fixados em lei; art. 31 da Lei de Abuso de Autoridade pune a procrastinação injustificada.`
      ]]
    ],
    6: [
      ['h', 'Indisponível'],
      ['p', `Uma vez instaurado o inquérito policial, em nenhuma hipótese o delegado poderá arquivá-lo. O art. 17 do CPP diz que a autoridade policial não poderá mandar arquivar autos de inquérito. Por isso o inquérito é indisponível: a autoridade policial não pode dispor dele.`],
      ['h', 'Dispensável'],
      ['p', `A doutrina majoritária defende que o inquérito é dispensável, pois se trata de peça meramente informativa. Ele pode ser dispensado diante da existência de elementos suficientes de convicção para fundamentar a ação penal. Ou seja, o titular da ação penal não precisa esperar um inquérito se já tiver o que precisa.`],
      ['h', 'A pegadinha das palavras parecidas'],
      ['p', `As questões adoram colocar que o inquérito é um procedimento "disponível" ou "indispensável". Isso está errado: ele é indisponível (para o delegado, que não pode arquivá-lo) e dispensável (para a ação penal). São palavras parecidas, mas diferentes.`],
      ['ul', [
        `Indisponível: o delegado não pode arquivar o inquérito instaurado (art. 17 do CPP).`,
        `Dispensável: a ação penal pode ser proposta sem inquérito, se houver elementos suficientes.`,
        `Erros típicos de prova: "disponível" e "indispensável".`
      ]],
      ['h', 'Resumo de revisão'],
      ['ul', [
        `Indisponível = não pode ser arquivado pelo delegado (art. 17).`,
        `Dispensável = não é indispensável para a ação penal quando há elementos suficientes.`,
        `Fundamento do dispensável: peça meramente informativa.`,
        `Cuidado com a troca por "disponível" e "indispensável".`
      ]]
    ],
    7: [
      ['h', 'O que é indiciamento'],
      ['p', `Indiciar é atribuir a autoria ou a participação em uma infração penal a uma pessoa. É apontar uma pessoa como provável autora ou partícipe de um crime no bojo do inquérito policial.`],
      ['h', 'Quem decide'],
      ['p', `O indiciamento é ato privativo do delegado de polícia, que não se sujeita à requisição do Ministério Público ou do juiz para indiciar qualquer pessoa. Portanto, somente o delegado de polícia pode decidir acerca do indiciamento de alguém.`],
      ['h', 'Requisitos'],
      ['p', `É necessário despacho motivado do delegado, em análise técnico-jurídica, apontando:`],
      ['ul', [
        `os indícios de autoria;`,
        `a materialidade;`,
        `as circunstâncias da infração.`
      ]],
      ['h', 'Momento do indiciamento'],
      ['p', `O indiciamento pode ocorrer em qualquer momento durante o curso das investigações. Desde a instauração do inquérito até a elaboração do relatório final, é possível realizar o indiciamento. Porém, é muito importante saber que, após iniciada a ação penal, não é mais cabível o indiciamento.`],
      ['h', 'Como a banca cobra'],
      ['ul', [
        `"O juiz pode requisitar o indiciamento": errada, pois é ato privativo do delegado.`,
        `"O indiciamento pode ocorrer mesmo após o início da ação penal": errada.`,
        `"O indiciamento exige despacho motivado com indícios de autoria, materialidade e circunstâncias": correta.`
      ]],
      ['h', 'Resumo de revisão'],
      ['ul', [
        `Indiciar = atribuir autoria ou participação a uma pessoa, apontando-a como provável autora ou partícipe.`,
        `Ato privativo do delegado; não depende de requisição do MP ou do juiz.`,
        `Requisito: despacho motivado, análise técnico-jurídica, com indícios de autoria, materialidade e circunstâncias.`,
        `Momento: da instauração até o relatório final; após iniciada a ação penal, não cabe mais.`
      ]]
    ]
  };
  window.PCPE_QUESTOES[topic] = [
    {
      text: `Sobre o conceito e a natureza do inquérito policial, assinale a alternativa correta.`,
      options: [
        `É um processo administrativo presidido pelo Ministério Público, que produz provas definitivas para a condenação.`,
        `É um procedimento administrativo inquisitório e preparatório, presidido pelo delegado de polícia, voltado a identificar fontes de prova e colher elementos de informação sobre autoria e materialidade.`,
        `É um processo judicial, presidido pelo juiz, em que o investigado exerce plenamente o contraditório.`,
        `É um procedimento facultativo e público, instaurado pelo juiz para preparar o julgamento.`
      ],
      correct: 1,
      exp: `O conceito completo é o da alternativa B. A A erra ao chamar de processo, atribuir a presidência ao MP e falar em provas definitivas; a C trata como processo judicial; a D fala em público (o inquérito é sigiloso) e instaurado pelo juiz.`
    },
    {
      text: `A existência prévia de um inquérito policial inibe ou afasta a instauração de um processo penal infundado, temerário e perigoso, resguardando a liberdade do inocente e evitando custos desnecessários ao Estado. Essa é a função do inquérito chamada de:`,
      options: [
        `preparatória.`,
        `punitiva.`,
        `preservadora.`,
        `cautelar-condenatória.`
      ],
      correct: 2,
      exp: `Evitar processo infundado e proteger o inocente é a função preservadora. A preparatória fornece elementos ao titular da ação e acautela meios de prova que poderiam desaparecer; punitiva e cautelar-condenatória não são funções do inquérito.`
    },
    {
      text: `Em relação aos prazos de conclusão do inquérito, é correto afirmar:`,
      options: [
        `Na Lei de Drogas (art. 51), preso, 30 dias + 30; solto, 90 dias + 90.`,
        `Na justiça estadual, preso, 30 dias; solto, 10 dias.`,
        `Na economia popular, preso, 10 dias; solto, 30 dias.`,
        `Na justiça federal, preso, 10 dias; solto, 15 dias.`
      ],
      correct: 0,
      exp: `A Lei de Drogas é 30 + 30 (preso) e 90 + 90 (solto). Na justiça estadual os prazos são invertidos na B (preso 10; solto 30). Na economia popular o prazo é de 10 dias para preso e solto. Na federal, preso 15 + 15 e solto 30.`
    },
    {
      text: `Um inquérito da justiça federal em que o investigado está preso e outro, estadual, em que o investigado está solto, têm, respectivamente, como prazos de conclusão, segundo o quadro estudado:`,
      options: [
        `10 dias e 30 dias.`,
        `15 dias (+ 15) e 10 dias.`,
        `30 dias e 15 dias.`,
        `15 dias (+ 15) e 30 dias.`
      ],
      correct: 3,
      exp: `Justiça federal, preso: 15 dias + 15. Justiça estadual, solto: 30 dias. As demais alternativas trocam os prazos entre os ramos ou entre preso e solto.`
    },
    {
      text: `De acordo com o entendimento do STJ (2021) sobre eventuais vícios ocorridos no inquérito policial, assinale a alternativa correta.`,
      options: [
        `Os vícios contaminam automaticamente o processo penal, que deve ser anulado.`,
        `Os vícios só podem ser alegados após a sentença condenatória.`,
        `O inquérito é peça obrigatória, e qualquer vício impede o oferecimento da denúncia.`,
        `Os vícios não se transmutam automaticamente para o processo, por se tratar de peça meramente informativa.`
      ],
      correct: 3,
      exp: `Por ser peça meramente informativa, destinada à sustentação da admissibilidade da inicial acusatória, seus vícios não contaminam automaticamente o processo. As demais afirmam contaminação automática, inventam momento de alegação ou tratam o inquérito como obrigatório, o que contradiz seu caráter dispensável.`
    },
    {
      text: `A respeito da Súmula Vinculante 14 e da atuação do advogado no inquérito, assinale a alternativa correta.`,
      options: [
        `O advogado tem acesso amplo aos elementos de prova já documentados, mas não às diligências em andamento.`,
        `O advogado tem acesso irrestrito, inclusive às diligências em andamento.`,
        `O inquérito é inquisitivo, de modo que o advogado não pode ter acesso a nenhum elemento.`,
        `A presença do advogado é obrigatória e, sem ele, o interrogatório no inquérito é nulo.`
      ],
      correct: 0,
      exp: `A SV 14 garante acesso aos elementos já documentados, preservando o sigilo das diligências em andamento. A B ignora o limite; a C nega a súmula; a D confunde com a fase judicial: no inquérito o advogado é um direito, e o suspeito que abre mão é ouvido normalmente.`
    },
    {
      text: `Durante o inquérito policial, o suspeito comparece à delegacia sozinho e abre mão da assistência técnica. Em seguida, na fase judicial, o réu é interrogado sem advogado. Quanto aos efeitos, é correto afirmar:`,
      options: [
        `Ambos os atos são nulos de pleno direito.`,
        `No inquérito, ele será ouvido normalmente; no interrogatório judicial sem advogado há nulidade absoluta por ausência de defesa técnica.`,
        `Ambos os atos são válidos, pois a defesa técnica é um dever do réu.`,
        `No inquérito há nulidade absoluta, e no processo o interrogatório é válido.`
      ],
      correct: 1,
      exp: `A presença do advogado no inquérito é direito do investigado, e não dever; já na fase judicial o interrogatório sem advogado gera nulidade absoluta. As outras alternativas invertem ou igualam as duas fases.`
    },
    {
      text: `Sobre as características do inquérito policial, assinale a alternativa correta.`,
      options: [
        `É um procedimento público, pois o contraditório é regra em toda investigação.`,
        `Os atos orais são reduzidos a termo e a autoridade rubrica todas as laudas (art. 9º do CPP), e a duração injustificadamente estendida pode configurar crime previsto na Lei de Abuso de Autoridade (art. 31).`,
        `É um procedimento verbal, em que o delegado não precisa registrar os atos.`,
        `É um procedimento vinculado, em que o delegado não tem nenhuma margem de conveniência e oportunidade.`
      ],
      correct: 1,
      exp: `O inquérito é escrito (art. 9º do CPP) e temporário, com tipificação do art. 31 da Lei de Abuso de Autoridade. É sigiloso (não público), escrito (não verbal) e discricionário (não vinculado).`
    },
    {
      text: `Considere as afirmativas sobre o inquérito policial: (I) ele é indisponível; (II) ele é dispensável. Assinale a alternativa que explica corretamente essas características.`,
      options: [
        `Disponível, pois o delegado pode arquivá-lo; e indispensável, pois sem ele não há ação penal.`,
        `Indisponível, pois o delegado pode arquivá-lo; e dispensável, pois não serve para nada.`,
        `Indisponível, pois, instaurado, o delegado não pode arquivá-lo (art. 17 do CPP); e dispensável, pois, havendo elementos suficientes, a ação penal pode ser proposta sem ele.`,
        `Indisponível, pois o juiz pode arquivá-lo de ofício; e indispensável, pois é peça obrigatória.`
      ],
      correct: 2,
      exp: `Indisponível: art. 17 do CPP veda o arquivamento pelo delegado. Dispensável: por ser peça meramente informativa, pode ser dispensada diante de elementos suficientes. As demais usam as palavras trocadas (disponível/indispensável) ou fundamentos errados.`
    },
    {
      text: `Sobre o indiciamento, assinale a alternativa correta.`,
      options: [
        `Pode ser requisitado pelo Ministério Público ou pelo juiz ao delegado, que está obrigado a cumpri-lo.`,
        `Pode ocorrer mesmo após iniciada a ação penal, enquanto não houver sentença.`,
        `É ato privativo do delegado de polícia, exige despacho motivado com indícios de autoria, materialidade e circunstâncias, e pode ocorrer da instauração do inquérito até o relatório final.`,
        `Dispensa fundamentação, bastando a lavratura do boletim de ocorrência.`
      ],
      correct: 2,
      exp: `O indiciamento é privativo do delegado, sem requisição do MP ou do juiz (A errada), exige despacho motivado (D errada) e não cabe mais depois de iniciada a ação penal (B errada).`
    }
  ];
})();
