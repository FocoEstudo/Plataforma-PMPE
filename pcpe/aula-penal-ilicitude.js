(function () {
  'use strict';
  window.PCPE_TOPIC_GUIDES = window.PCPE_TOPIC_GUIDES || {};
  window.PCPE_DEEPENING = window.PCPE_DEEPENING || {};
  window.PCPE_QUESTOES = window.PCPE_QUESTOES || {};
  const topic = 'Ilicitude, culpabilidade, imputabilidade e punibilidade';
  const base = window.PCPE_TOPIC_GUIDES[topic] || {};
  window.PCPE_TOPIC_GUIDES[topic] = Object.assign({}, base, {
    lessons: [
      [
        `Aula 1 · Culpabilidade: conceito e três elementos`,
        `Culpabilidade é a reprovabilidade da conduta: o juízo de que a pessoa, nas circunstâncias do fato, podia ter agido de outro modo e escolheu cometer o crime. É o terceiro elemento do conceito analítico de crime (fato típico, ilicitude e culpabilidade) e se decompõe em três elementos: imputabilidade, potencial consciência da ilicitude e exigibilidade de conduta diversa. Sem culpabilidade o fato continua típico e ilícito, mas o agente não pode ser punido.`,
        `Uma criança de 10 anos pega uma faca e, brincando, fere gravemente um colega. Há fato típico? Sim. É ilícito, sem causa de justificação? Sim. É culpável? Não, porque a criança é inimputável. Sem imputabilidade não se chega nem a falar em culpabilidade.`,
        `Não basta alguém ter matado, furtado ou roubado: é preciso saber se podia ser responsabilizado. Guarde os três elementos na ordem: imputabilidade, potencial consciência da ilicitude, exigibilidade de conduta diversa. Note que se exige a potencial consciência (poder saber), e não a consciência efetiva.`
      ],
      [
        `Aula 1 · Excludentes de culpabilidade, personalidade da pena e responsabilidade objetiva`,
        `Excluem a culpabilidade a coação moral irresistível, a obediência hierárquica a ordem não manifestamente ilegal e o erro de proibição inevitável. Além de decidir se há ou não punição, a culpabilidade orienta a dosimetria (art. 59 do CP) e sustenta dois princípios: a pena é pessoal (ninguém responde por fato alheio) e a responsabilidade penal objetiva é proibida (sem dolo ou culpa não há punição).`,
        `Um rapaz furta um celular de um carro com a janela aberta. Se é imputável, sabia que era errado e podia agir de outro modo, é culpável. Se só furtou porque traficantes o ameaçaram de morte e exigiram dinheiro em poucas horas, a culpabilidade pode estar comprometida. Já o motorista que, em estrada escura e com toda a cautela, atropela quem atravessa fora da faixa e não tinha como evitar o acidente não é culpável.`,
        `Coação física exclui a própria conduta; coação moral irresistível exclui a culpabilidade. A obediência hierárquica só vale se a ordem não for manifestamente ilegal: o soldado que executa um inocente por ordem superior não escapa. Erro de proibição inevitável isenta; o evitável apenas reduz a pena.`
      ],
      [
        `Aula 2 · Imputabilidade, doença mental e menoridade`,
        `Imputar é atribuir responsabilidade. É imputável quem tem plena capacidade de entender o caráter ilícito do fato e de se autodeterminar conforme esse entendimento. A imputabilidade só é afastada excepcionalmente: o Código Penal prevê doença mental ou desenvolvimento mental incompleto (art. 26), menoridade (art. 27) e embriaguez fortuita completa (art. 28, § 1º). Emoção e paixão não excluem a imputabilidade (art. 28, I).`,
        `Doença mental: o Brasil adota o critério biopsicológico, que exige juntos o fator biológico (doença ou desenvolvimento mental incompleto) e o psicológico (ao tempo da ação ou omissão, o agente não entendia o caráter ilícito do fato ou não conseguia se determinar). O inimputável é absolvido de forma imprópria e recebe medida de segurança. Menoridade: os menores de 18 anos são inimputáveis por presunção absoluta e respondem pelo ato infracional segundo o ECA.`,
        `Não basta ter doença mental: ela precisa ter tornado o agente incapaz no momento do fato. Na menoridade não se pergunta se o jovem era emancipado nem se sabia o que fazia: o critério é puramente etário. A medida de segurança se funda na periculosidade, e não na culpabilidade.`
      ],
      [
        `Aula 2 · Embriaguez e actio libera in causa`,
        `Embriaguez é a alteração psicomotora provocada por álcool ou substância de efeito análogo. O Código Penal adota a teoria da actio libera in causa (ação livre na causa): a liberdade do agente é analisada no momento em que ele ingere a substância, e não no momento do crime. Por isso só a embriaguez fortuita completa isenta de pena; a fortuita incompleta reduz a pena; e as demais não afastam a imputabilidade.`,
        `Alguém coloca droga na bebida de um terceiro sem que ele perceba, e esse terceiro causa um acidente de trânsito: embriaguez fortuita completa, com isenção de pena (art. 28, § 1º). Já quem acha que aguenta bebida e fica totalmente embriagado com um copo de cerveja tem embriaguez culposa e responde pelo crime.`,
        `Cinco tipos: preordenada, voluntária (dolosa), culposa, fortuita e patológica. Só a fortuita completa isenta. A preordenada, além de não isentar, é agravante (art. 61, II, l). A patológica é tratada como doença mental (art. 26), e não como embriaguez.`
      ],
      [
        `Aula 3 · Excludentes de ilicitude: onde estão na árvore do crime`,
        `Excludentes de ilicitude são situações em que o agente comete um fato típico, mas ele não é antijurídico e, por isso, não há crime (art. 23 do CP). São quatro: estado de necessidade, legítima defesa, estrito cumprimento de dever legal e exercício regular de direito. Retirado o segundo elemento da árvore do crime, o crime cai por inteiro.`,
        `Policial de folga encontra um bandido perigoso que dispara contra ele; o tiro passa rente à sua cabeça. Em vez de esperar o segundo disparo, ele saca a arma e mata o agressor. Houve conduta dolosa, nexo causal, tipicidade e resultado, mas, como todos os elementos da legítima defesa estavam presentes, o direito autoriza a reação: o fato é típico, porém não antijurídico.`,
        `Memorize: todo fato antijurídico é típico, mas nem todo fato típico é antijurídico. O Código Penal não é proibitivo, é descritivo: ele descreve condutas (matar alguém) e comina a pena. No art. 23 estão as quatro excludentes; só o estado de necessidade (art. 24) e a legítima defesa (art. 25) têm conceito legal próprio.`
      ],
      [
        `Aula 3 · Estado de necessidade e questões comentadas`,
        `Estado de necessidade é a situação de quem sacrifica um bem jurídico alheio para salvar direito próprio ou de terceiro de um perigo atual, que não provocou por sua vontade, que não podia evitar de outro modo, e cujo sacrifício não era razoável exigir. A ideia central é o conflito de bens jurídicos: se nada for feito, ambos se perdem. Pode-se sacrificar bem de valor igual ou menor ao protegido, nunca de valor maior.`,
        `Duas pessoas num navio que afunda e só um colete: ele pode salvar a própria vida, sacrificando a do outro (igual por igual). Pode também sacrificar patrimônio para salvar a vida (menor por maior). Mas não pode matar alguém para salvar uma mala de ouro (maior por menor). E quem já planejava matar o desafeto, aproveitando o naufrágio para executá-lo, não age em estado de necessidade.`,
        `Decore os requisitos como as peças do navio: perigo atual, não provocado voluntariamente, inevitabilidade do comportamento, direito próprio ou alheio, razoabilidade do sacrifício e requisito subjetivo. Nas questões, a pegadinha é inverter a regra: o bem sacrificado nunca pode ser mais valioso, mas pode ser igual.`
      ],
      [
        `Aula 4 · Punibilidade e extinção: morte do agente`,
        `Punibilidade não é elemento do crime: o conceito analítico tem apenas fato típico, ilicitude e culpabilidade. Em regra o crime é punível, mas há casos de crime sem punibilidade desde o início (escusas absolutórias) e casos em que a punibilidade existia e se extingue depois. As causas de extinção estão no art. 107 do CP, em rol não taxativo; a primeira é a morte do agente (art. 107, I).`,
        `Escusa absolutória: crime contra o patrimônio, sem violência nem grave ameaça, cometido entre cônjuges na constância da sociedade conjugal: há fato típico, ilícito e culpável, mas não há punibilidade (art. 181). Se a vítima for pessoa idosa, não vale a escusa (art. 183). Extinção pela morte: a multa não passa aos herdeiros, mas a obrigação civil de reparar o dano passa.`,
        `A punibilidade extinta existia e deixou de existir; a escusa absolutória nunca existiu. A morte do agente extingue a punibilidade (mors omnia solvit), mas só quanto às consequências penais em sentido estrito. A morte da vítima, em regra, não extingue nada; a única exceção é a ação penal privada personalíssima (art. 236).`
      ],
      [
        `Aula 4 · Anistia, graça e indulto`,
        `O art. 107, II, prevê três institutos de perdão estatal: anistia (concedida por lei), graça (indulto individual) e indulto (indulto coletivo, concedido por decreto do Presidente da República). Em todos, o crime continua existindo, com fato típico, ilícito e culpável, mas deixa de haver punibilidade. Eles não se aplicam aos crimes hediondos e equiparados.`,
        `A Lei de Anistia de 1979 perdoou crimes de motivação política praticados na ditadura, de meados de 1967 a agosto de 1979. Ela alcançou fatos passados. Um crime cometido no dia seguinte seria punido: anistia não é carta branca para o futuro. Se a lei deixa de considerar a conduta criminosa, isso é abolitio criminis (art. 107, III), não anistia.`,
        `Cuidado com o vocabulário: a lei chama de graça o que a doutrina chama de indulto individual, e chama de indulto o que a doutrina chama de indulto coletivo ou geral. Anistia é lei em sentido material e formal; graça e indulto são decreto do Presidente. A anistia retroage; a abolitio criminis descriminaliza a conduta.`
      ]
    ],
    practice: [
      `Quais são os três elementos da culpabilidade e por que a criança de 10 anos que fere um colega com uma faca não é culpável?`,
      `Explique o critério biopsicológico da doença mental e diga qual é a consequência para o inimputável e para o semi-imputável.`,
      `Diferencie embriaguez preordenada, voluntária, culposa, fortuita completa e fortuita incompleta quanto à responsabilidade penal.`,
      `Liste os requisitos do estado de necessidade e explique, com os exemplos do navio, em que casos o sacrifício do bem é permitido e em que casos não é.`,
      `Diferencie escusa absolutória de extinção da punibilidade e explique o que a morte do agente e a morte da vítima provocam, e o que distingue anistia, graça e indulto.`
    ],
    answers: [
      `Os elementos são imputabilidade, potencial consciência da ilicitude e exigibilidade de conduta diversa. A criança comete fato típico e ilícito, mas é inimputável: não tem a maturidade necessária para ser responsabilizada, e sem imputabilidade não há culpabilidade.`,
      `Exige-se a soma do critério biológico (doença mental ou desenvolvimento mental incompleto) com o psicológico (ao tempo da ação ou omissão, incapacidade de entender o caráter ilícito do fato ou de se determinar). O inimputável é isento de pena, absolvido de forma imprópria e sujeito a medida de segurança; o semi-imputável tem a pena reduzida de um a dois terços (art. 26, parágrafo único).`,
      `Preordenada: o agente se embriaga para cometer o crime; responde e ainda tem agravante (art. 61, II, l). Voluntária (dolosa): quer se embriagar; responde. Culposa: bebe sem querer se embriagar, mas se embriaga; responde. Fortuita completa: sem consciência ou vontade de ingerir; isenta de pena (art. 28, § 1º). Fortuita incompleta: pena reduzida de um a dois terços (art. 28, § 2º).`,
      `Perigo atual, não provocado voluntariamente, inevitabilidade do comportamento, direito próprio ou alheio, razoabilidade do sacrifício e requisito subjetivo. Pode-se sacrificar bem igual ao salvo (uma vida por outra) ou menor (patrimônio para salvar a vida); não se pode sacrificar bem maior (matar para salvar uma mala de ouro).`,
      `Na escusa absolutória o crime existe, mas a punibilidade nunca existiu (por exemplo, patrimonial sem violência entre cônjuges). Na extinção, a punibilidade existia e deixou de existir. A morte do agente extingue a punibilidade; a morte da vítima só extingue na ação penal privada personalíssima. Anistia é lei e perdoa fatos passados; graça é indulto individual; indulto é coletivo; os dois últimos são decreto presidencial.`
    ]
  });

  window.PCPE_DEEPENING[topic] = {
    1: [
      ['h', 'O que é culpabilidade'],
      ['p', `Culpabilidade é a reprovabilidade da conduta. Quando você pergunta se alguém é culpável, está perguntando se aquela pessoa, diante das circunstâncias em que o fato foi cometido, podia ter agido de outro modo e escolheu fazer o que fez. É uma exigência de responsabilidade individual: o agente precisava ter capacidade de entender o caráter ilícito da ação e de se comportar de acordo com esse entendimento. É no juízo de culpabilidade que o direito penal avalia se a pessoa pode ou não ser responsabilizada pelo que fez.`],
      ['h', 'Onde ela se encaixa: a estrutura tripartida do crime'],
      ['p', `No direito penal brasileiro, adota-se o conceito analítico tripartido de crime. Para que alguém seja considerado criminoso e punido, três coisas precisam estar presentes:`],
      ['ol', [
        `Fato típico: o fato se encaixa numa descrição legal (o tipo).`,
        `Ilicitude: o fato é contrário ao direito, isto é, não existe causa de justificação como a legítima defesa ou o estado de necessidade.`,
        `Culpabilidade: o agente é culpável, ou seja, a conduta lhe pode ser reprovada.`
      ]],
      ['h', 'Os três elementos da culpabilidade'],
      ['p', `A análise da culpabilidade depende de três elementos. Decore-os nesta ordem:`],
      ['ul', [
        `Imputabilidade: ter capacidade de entender o que está fazendo e de se autodeterminar. Por isso crianças, adolescentes e pessoas com doença mental grave são consideradas inimputáveis: não têm, ou não tinham no momento do fato, a maturidade ou a sanidade necessárias para responder como adultos plenamente conscientes.`,
        `Potencial consciência da ilicitude: no momento do fato, o agente tinha condições de saber que aquilo era errado. Não se exige que soubesse de fato, mas que tivesse potencial para saber. Isso muda tudo.`,
        `Exigibilidade de conduta diversa: era realmente possível exigir que ele agisse de outro modo? Esse elemento considera a pressão das circunstâncias, o quanto a pessoa estava numa situação em que era possível dizer não.`
      ]],
      ['h', 'Exemplo-chave: a criança de 10 anos'],
      ['p', `Imagine uma criança de 10 anos que pega uma faca e, brincando, atinge gravemente um coleguinha. Faça a pergunta em cada degrau da árvore do crime. Houve fato típico? Sim. Esse fato é ilícito? Sim, não há causa de justificação. A criança é culpável? Não, porque é inimputável. A imputabilidade é a base da responsabilidade penal: sem ela, não se pode sequer falar em culpabilidade.`],
      ['h', 'Potencial consciência da ilicitude, com exemplo'],
      ['p', `Pense numa pessoa estrangeira, com costumes muito diferentes, que chega ao Brasil e pratica um ato comum no país dela, como bater nos filhos como forma de correção. Ela pode alegar desconhecimento da ilicitude. A pergunta que decide é: ela tinha como saber que aqui isso é proibido? Se ficar demonstrado que tinha condições de saber, será considerada culpável. Se realmente não havia meios razoáveis de saber, configura-se erro de proibição inevitável, que exclui a culpabilidade.`],
      ['h', 'Exigibilidade de conduta diversa, com exemplo'],
      ['p', `Pense numa mulher ameaçada de morte pelo marido para participar de um assalto. Ela sabe que o que faz é errado, mas era exigível que dissesse não? Se não era, ela não é culpável. A ideia reconhece que nem sempre somos totalmente livres para agir conforme a lei espera de nós, e o direito penal não pode ser cego a isso.`],
      ['h', 'Resumo de revisão'],
      ['ul', [
        `Culpabilidade = reprovabilidade da conduta: podia agir de outro modo e escolheu o crime.`,
        `Crime = fato típico + ilicitude + culpabilidade (estrutura tripartida).`,
        `Elementos: imputabilidade, potencial consciência da ilicitude, exigibilidade de conduta diversa.`,
        `Criança de 10 anos com faca: fato típico e ilícito, mas inimputável, logo não culpável.`,
        `Exige-se a potencial consciência da ilicitude, e não a consciência efetiva.`,
        `Sem imputabilidade não se fala em culpabilidade.`
      ]]
    ],
    2: [
      ['h', 'Causas que excluem a culpabilidade'],
      ['p', `Existem situações específicas em que a culpabilidade é afastada. As principais são a coação moral irresistível, a obediência hierárquica e o erro de proibição inevitável (estudado junto da potencial consciência da ilicitude). Elas se ligam, no Código Penal, aos arts. 21 e 22, que seguem a ordem da própria estrutura da culpabilidade: potencial consciência da ilicitude e exigibilidade de conduta diversa.`],
      ['h', 'Coação moral irresistível'],
      ['p', `Não confunda as duas coações. A coação física exclui a própria conduta (o agente é mero instrumento). A coação moral irresistível exclui a culpabilidade: a pessoa atua sob pressão psicológica tão intensa que não tinha como resistir. O exemplo clássico é o de quem comete um crime porque tem um ente querido sequestrado e sofre ameaças graves: o medo e o desespero podem ser tão fortes que não se pode exigir conduta diferente, e isso afasta a culpabilidade.`],
      ['h', 'Obediência hierárquica'],
      ['p', `Quando um agente público cumpre ordem de superior hierárquico, pode ter a culpabilidade excluída e não ser responsabilizado. A condição é decisiva: só exclui se a ordem não for manifestamente ilegal. Se um soldado recebe uma ordem absurda, como executar um inocente, e cumpre, não pode alegar obediência hierárquica, porque a ilegalidade era evidente. Se cumpre ordem cuja ilegalidade não é clara, pode estar isento de culpabilidade.`],
      ['h', 'Erro de proibição: inevitável x evitável'],
      ['p', `A culpabilidade também impede a punição de quem age sob erro de proibição inevitável: quem acredita sinceramente estar autorizado a agir daquela forma porque não teve meios razoáveis de saber o contrário. Exemplo: caçar numa área de preservação ambiental sem saber que ali era proibido, sem placas nem orientação clara. Se o erro é inevitável, isto é, qualquer pessoa razoável poderia errar do mesmo modo, a culpabilidade é afastada.`],
      ['p', `Quando o erro é evitável, a culpabilidade permanece, com menor reprovabilidade, e a pena pode ser reduzida. A pessoa não fica isenta de culpa, mas é punida de forma mais branda. Complemento do art. 21 do CP: o erro inevitável isenta de pena; o evitável permite diminuí-la de um sexto a um terço.`],
      ['h', 'Princípio da personalidade da pena'],
      ['p', `A pena é pessoal: ninguém pode ser punido por fato cometido por outra pessoa. A culpabilidade exige uma análise individual e concreta do caso, porque cada ser humano é único e o direito penal precisa respeitar essa individualidade.`],
      ['h', 'Culpabilidade e fixação da pena (art. 59 do CP)'],
      ['p', `A culpabilidade do agente é um dos critérios do art. 59 do Código Penal, que orienta o juiz na fixação da pena-base. Quem age com alto grau de culpabilidade, com frieza, premeditação e insensibilidade diante do sofrimento alheio, pode receber pena maior. Quem, apesar do crime, age com baixa reprovabilidade pessoal, pode ter a pena fixada em patamar mais baixo. Aqui a culpabilidade deixa de ser só um critério para saber se a pessoa pode ser punida e vira também um fator de dosimetria.`],
      ['h', 'Culpabilidade x responsabilidade objetiva'],
      ['p', `Em certas áreas do direito civil alguém pode ser responsabilizado mesmo sem dolo ou culpa. No direito penal isso é vedado: não se admite punição sem dolo ou culpa. Ninguém pode ser punido apenas pelo resultado de um ato, sem que se possa afirmar que podia agir de forma diferente. Essa exigência protege contra arbitrariedades e é um limite ético ao poder de punir.`],
      ['p', `Exemplo: um motorista que atropela uma pessoa que atravessa fora da faixa, à noite, numa estrada escura, e que agiu com toda a cautela possível. Se não tinha como evitar o acidente, ele não é culpável. Pode até ter praticado um fato típico, mas não há como atribuir-lhe responsabilidade penal.`],
      ['h', 'Aplicação: o furto do celular'],
      ['p', `Um rapaz adulto, plenamente saudável, pega um celular dentro de um carro estacionado com a janela aberta. Se é imputável, sabia que era errado e podia ter evitado a conduta, é culpável. Agora imagine que ele estava sendo ameaçado de morte por traficantes e só furtou porque foi obrigado a conseguir dinheiro em poucas horas para não morrer: a culpabilidade pode estar comprometida. Isso não é justificar o crime, é reconhecer que as circunstâncias podem tornar a conduta penalmente não reprovável. É esse o papel da culpabilidade: humanizar o direito penal.`],
      ['h', 'Resumo de revisão'],
      ['ul', [
        `Coação física exclui a conduta; coação moral irresistível exclui a culpabilidade (exigibilidade de conduta diversa).`,
        `Obediência hierárquica: exclui a culpabilidade só se a ordem não for manifestamente ilegal.`,
        `Erro de proibição inevitável isenta; evitável mantém a culpabilidade e reduz a pena.`,
        `A pena é pessoal (personalidade da pena).`,
        `Culpabilidade é critério do art. 59 do CP na fixação da pena-base.`,
        `Responsabilidade penal objetiva é vedada: sem dolo ou culpa e sem poder agir de outro modo, não há punição.`
      ]]
    ],
    3: [
      ['h', 'Conceito de imputabilidade'],
      ['p', `A imputabilidade é um dos elementos da culpabilidade, ao lado da exigibilidade de conduta diversa e da potencial consciência da ilicitude. Imputabilidade vem de imputar, que significa atribuir responsabilidade. Falar em imputabilidade é falar de hipótese em que se pode atribuir responsabilidade penal a alguém.`],
      ['p', `É imputável quem tem plena capacidade de entender a natureza dos fatos e de se autodeterminar de acordo com esse entendimento. O inimputável, a quem não se pode imputar responsabilidade, não é só quem não compreende o mundo à sua volta: é também quem, embora compreenda, não consegue controlar seus impulsos, tomar decisões e se autodeterminar com base na realidade dos fatos.`],
      ['h', 'As hipóteses de inimputabilidade'],
      ['p', `A imputabilidade é afastada só excepcionalmente. O Código Penal prevê três hipóteses:`],
      ['ol', [
        `Doença mental ou desenvolvimento mental incompleto (art. 26).`,
        `Menoridade (art. 27).`,
        `Embriaguez fortuita completa (art. 28, § 1º).`
      ]],
      ['p', `Atenção: a emoção e a paixão não excluem a imputabilidade (art. 28, I).`],
      ['h', 'Doença mental: art. 26'],
      ['p', `O caput do art. 26 diz que é isento de pena o agente que, por doença mental ou desenvolvimento mental incompleto, era, ao tempo da ação ou da omissão, inteiramente incapaz de entender o caráter ilícito do fato ou de determinar-se de acordo com esse entendimento. Importa pouco o tipo de doença: verifica-se apenas se ela tinha aptidão para, ao tempo da conduta, tornar o agente incapaz de entender o caráter ilícito do fato. Entram aqui, por exemplo, maníacos, psicopatas e dependentes químicos.`],
      ['h', 'Critério biopsicológico'],
      ['p', `Em relação à doença mental, o Brasil não adota o critério biológico puro, e sim o biopsicológico, que exige a soma de dois fatores:`],
      ['ul', [
        `Critério biológico: doença mental ou desenvolvimento mental incompleto.`,
        `Critério psicológico: durante a ação ou omissão, o agente não conseguia entender o caráter ilícito do fato ou não conseguia se determinar de acordo com esse entendimento.`
      ]],
      ['h', 'Consequência: absolvição imprópria e medida de segurança'],
      ['p', `A inimputabilidade afasta a culpabilidade e, por consequência, o próprio crime. O inimputável por doença mental não é condenado: é absolvido. A doutrina chama essa decisão de absolvição imprópria, porque o juiz reconhece a inimputabilidade e, embora absolva, aplica medida de segurança. Diante de fato típico praticado por indivíduo nessas condições, aplica-se medida de segurança, e não pena.`],
      ['p', `O que fundamenta a medida de segurança não é a reprovabilidade da conduta, cujo parâmetro é a culpabilidade, e sim a periculosidade do agente. Embora não seja pena, a jurisprudência a trata como espécie de sanção penal e, por isso, entende que deve haver limite máximo. Para o STF, a Constituição veda sanções penais de caráter perpétuo (e não apenas penas), então o limite máximo da medida de segurança é o mesmo da pena. Veja o art. 75 do CP: o tempo de cumprimento das penas privativas de liberdade não pode ser superior a 40 anos.`],
      ['p', `Atualização importante: esse limite de 40 anos foi fixado pela Lei 13.964/2019 (pacote anticrime), que elevou o antigo teto de 30 anos. Complemento: a Súmula 527 do STJ estabelece que o tempo de duração da medida de segurança não deve ultrapassar o limite máximo da pena abstratamente cominada ao crime praticado.`],
      ['h', 'Espécies de medida de segurança: art. 96'],
      ['ul', [
        `Internação em hospital de custódia e tratamento psiquiátrico ou, à falta, em outro estabelecimento adequado.`,
        `Sujeição a tratamento ambulatorial.`,
        `Parágrafo único: extinta a punibilidade, não se impõe medida de segurança nem subsiste a que tenha sido imposta.`
      ]],
      ['h', 'Semi-imputável (fronteiriço)'],
      ['p', `No semi-imputável há perturbação da saúde mental ou desenvolvimento mental incompleto que gera apenas parcial capacidade de entender ou de se determinar. O parágrafo único do art. 26 prevê que a pena pode ser reduzida de um a dois terços (isto é, de 1/3 a 2/3). Existe aqui uma causa de diminuição de pena: o semi-imputável é culpável, só que menos.`],
      ['h', 'Menoridade: art. 27'],
      ['p', `A menoridade é um critério biológico, também chamado cronológico ou etário. O art. 27 estabelece: os menores de 18 anos são penalmente inimputáveis, ficando sujeitos às normas da legislação especial. Trata-se de presunção absoluta: o legislador não analisa o caso concreto. Não importa se o menor foi emancipado nem se sabia o que fazia: o menor de 18 anos é, de forma objetiva e absoluta, inimputável.`],
      ['p', `Como a inimputabilidade vem de presunção absoluta, não há culpa nem juízo de reprovabilidade da conduta. Entretanto, o menor pratica fato típico e ilícito, o que se chama ato infracional. O art. 103 do ECA dispõe: considera-se ato infracional a conduta descrita como crime ou contravenção penal. A medida socioeducativa é uma das possíveis respostas do Estado ao ato infracional. O menor não responde em processo penal, e sim em processo previsto no ECA, com o Código de Processo Penal aplicado apenas de forma subsidiária.`],
      ['h', 'Resumo de revisão'],
      ['ul', [
        `Imputável = capaz de entender o caráter ilícito do fato e de se autodeterminar.`,
        `Três hipóteses: doença mental (art. 26), menoridade (art. 27), embriaguez fortuita completa (art. 28, § 1º). Emoção e paixão não excluem (art. 28, I).`,
        `Doença mental: critério biopsicológico (biológico + psicológico).`,
        `Inimputável: absolvição imprópria + medida de segurança, fundada na periculosidade.`,
        `Semi-imputável: pena reduzida de 1/3 a 2/3 (art. 26, parágrafo único).`,
        `Medida de segurança é sanção penal e tem limite: o do art. 75 (40 anos), segundo o STF; veja também a Súmula 527 do STJ.`,
        `Menor de 18 anos: presunção absoluta; ato infracional (art. 103 do ECA); medidas socioeducativas.`
      ]]
    ],
    4: [
      ['h', 'O que é embriaguez para o direito penal'],
      ['p', `A embriaguez é uma alteração psicomotora do agente provocada por álcool ou substância de efeitos análogos. Nem toda embriaguez gera inimputabilidade: só uma hipótese específica, a fortuita completa, produz esse efeito (art. 28, § 1º, do CP).`],
      ['h', 'Os cinco tipos'],
      ['ol', [
        `Preordenada.`,
        `Voluntária, também chamada dolosa.`,
        `Culposa.`,
        `Fortuita.`,
        `Patológica.`
      ]],
      ['h', 'Teoria da actio libera in causa'],
      ['p', `Quando se trata de embriaguez, o Código Penal adota a teoria da actio libera in causa, que significa ação livre na causa. Você não analisa a liberdade do sujeito no momento da ação ou omissão, mas no momento da ingestão da substância. Em outras palavras: avalia-se se ele era livre quando bebeu (ou usou a substância), e não quando praticou o fato típico.`],
      ['h', 'Embriaguez preordenada'],
      ['p', `É a embriaguez realizada intencionalmente para praticar o crime: o agente usa a substância para cometê-lo. Pela actio libera in causa, não há isenção de pena. Mais que isso, ela é agravante: o art. 61, II, l, do CP diz que sempre agrava a pena, quando não constitui ou qualifica o crime, ter o agente cometido o crime em estado de embriaguez preordenada.`],
      ['h', 'Embriaguez voluntária (dolosa)'],
      ['p', `O indivíduo usa álcool ou substância análoga com o objetivo de se embriagar, e não de praticar o crime. A diferença para a preordenada é o objetivo: aqui é só embriagar-se. Também em razão da actio libera in causa, não há exclusão da culpabilidade. O próprio art. 28, II, é expresso: não excluem a imputabilidade penal a embriaguez voluntária ou culposa, pelo álcool ou substâncias de efeitos análogos.`],
      ['h', 'Embriaguez culposa'],
      ['p', `O agente quer ingerir álcool ou substância análoga, mas não pretende se embriagar. Exemplo: quem acredita ser resistente ao álcool e, com um copo de cerveja, fica completamente embriagado. Ele não quer se embriagar nem praticar crime. Mesmo assim, pela actio libera in causa, responde pelo crime: era livre quando decidiu usar a substância.`],
      ['h', 'Embriaguez fortuita: art. 28, § 1º'],
      ['p', `O § 1º do art. 28 diz que é isento de pena o agente que, por embriaguez completa proveniente de caso fortuito ou força maior, era, ao tempo da ação ou da omissão, inteiramente incapaz de entender o caráter ilícito do fato ou de determinar-se de acordo com esse entendimento. Nesse caso, o agente não opta por ingerir a substância, e por isso a actio libera in causa não sustenta responsabilização: não há voluntariedade na ingestão.`],
      ['p', `A liberdade, aqui, tem a ver com ter consciência do que está ingerindo e com ter vontade de ingerir. Se o agente não tinha consciência ou não tinha vontade, é embriaguez fortuita.`],
      ['h', 'Fortuita completa x fortuita incompleta'],
      ['ul', [
        `Fortuita completa: por força da embriaguez, o agente não entende o caráter ilícito do fato e não se determina conforme esse entendimento. Exemplo: alguém, sem chamar atenção, coloca droga na bebida de um terceiro, que depois causa um acidente de trânsito. O terceiro não tinha consciência do que ingeria. Há isenção de pena (art. 28, § 1º) por exclusão da culpabilidade.`,
        `Fortuita incompleta: no momento da ação ou omissão, o agente ainda tem parcela de consciência. Por isso existe reprovabilidade e se pode falar em culpabilidade, mas há causa de diminuição de pena. O art. 28, § 2º, prevê que a pena pode ser reduzida de um a dois terços se o agente, por embriaguez proveniente de caso fortuito ou força maior, não possuía a plena capacidade de entender o caráter ilícito do fato ou de determinar-se.`
      ]],
      ['h', 'Embriaguez patológica'],
      ['p', `É o vício em álcool ou droga, reconhecido como doença mental, inclusive pela Organização Mundial da Saúde. Pode haver exclusão da culpabilidade, mas não por causa da embriaguez: a causa é a doença mental, nos termos do art. 26 do CP.`],
      ['h', 'Quadro de revisão'],
      ['ul', [
        `Preordenada: bebe para cometer o crime. Responde e tem agravante (art. 61, II, l).`,
        `Voluntária (dolosa): bebe para se embriagar. Responde (art. 28, II).`,
        `Culposa: bebe sem querer se embriagar, mas se embriaga. Responde (art. 28, II).`,
        `Fortuita completa: sem consciência ou vontade de ingerir. Isenta de pena (art. 28, § 1º).`,
        `Fortuita incompleta: reduz a pena de um a dois terços (art. 28, § 2º).`,
        `Patológica: tratada como doença mental (art. 26).`
      ]],
      ['h', 'Resumo de revisão'],
      ['ul', [
        `Actio libera in causa: a liberdade é analisada na ingestão, e não no momento do crime.`,
        `Só a embriaguez fortuita completa isenta de pena.`,
        `Emoção e paixão também não excluem a imputabilidade (art. 28, I).`,
        `A diferença entre preordenada e voluntária está na finalidade: cometer o crime x apenas se embriagar.`
      ]]
    ],
    5: [
      ['h', 'Onde estamos na árvore do crime'],
      ['p', `Antes de estudar as excludentes, situe-se na árvore do crime. Ela se divide em fato típico, antijurídico (ilícito) e culpabilidade. O fato típico engloba a conduta, o nexo causal, a tipicidade e, nos crimes de resultado material, o resultado naturalístico. A culpabilidade, por sua vez, se divide em imputabilidade, que se divide em potencial consciência da ilicitude e exigibilidade de conduta diversa.`],
      ['p', `Percorrendo o Código Penal na ordem dos artigos, você enxerga a árvore se formando. Depois dos conceitos e princípios iniciais, dos arts. 1º ao 12, começa a teoria do crime propriamente dita:`],
      ['ul', [
        `Art. 13: relação de causalidade (conditio sine qua non, equivalência dos antecedentes causais, causas supervenientes relativamente independentes). Faz parte do fato típico.`,
        `Art. 14: crime consumado e tentado. Art. 15: desistência voluntária e arrependimento eficaz. Art. 16: arrependimento posterior. Art. 17: crime impossível.`,
        `Art. 18: dolo e culpa. Art. 19: preterdolo. Art. 20: erro de tipo, que exclui o fato típico.`,
        `Art. 21: potencial consciência da ilicitude (erro de proibição). Art. 22: coação moral irresistível e obediência hierárquica, ligados à exigibilidade de conduta diversa.`,
        `Art. 23: causas de exclusão da ilicitude. Art. 24: estado de necessidade. Art. 25: legítima defesa.`,
        `Art. 26: imputabilidade (que, na ordem do Código, aparece depois).`
      ]],
      ['p', `Esse é o raio-x da parte geral: ao estudar os elementos (vertical) e as formas de exclusão de cada um (horizontal), você enxerga como tudo se conecta.`],
      ['h', 'O que é excluir a ilicitude'],
      ['p', `Ilicitude é sinônimo de antijuridicidade: é estar contra a lei. Na prática, a lei diz para você não fazer, e você faz. Quando algo exclui a ilicitude, o fato deixa de ser contrário ao direito e passa a ser permitido: é como estar a favor da lei. O Código Penal deixa você agir no estado de necessidade, na legítima defesa e nas demais excludentes, mesmo lesionando o bem jurídico de outra pessoa, desde que você respeite os requisitos de cada uma.`],
      ['h', 'O Código Penal é descritivo, não proibitivo'],
      ['p', `Você pode pensar que o Código diz não matarás, mas ele não proíbe de forma expressa: ele descreve a conduta (matar alguém) e comina a pena (reclusão, e mais se for qualificado). Você pode cometer o fato típico e, se estiver amparado por uma causa que exclui a antijuridicidade, ele não é crime.`],
      ['h', 'As excludentes do art. 23'],
      ['p', `O art. 23 do CP diz que não há crime quando o agente pratica o fato:`],
      ['ol', [
        `Em estado de necessidade.`,
        `Em legítima defesa.`,
        `Em estrito cumprimento de dever legal.`,
        `No exercício regular de direito.`
      ]],
      ['p', `Só o estado de necessidade (art. 24) e a legítima defesa (art. 25) têm artigos próprios com conceito legal. O estrito cumprimento de dever legal e o exercício regular de direito não têm conceito legal: o conceito vem da doutrina e da jurisprudência.`],
      ['h', 'Pergunta-chave: típico x antijurídico'],
      ['p', `Raciocine assim: é correto dizer que todo fato típico é obrigatoriamente antijurídico, mas nem todo antijurídico é típico? Não, é o inverso. A afirmação certa é: todo fato antijurídico é obrigatoriamente típico, mas nem todo fato típico é obrigatoriamente antijurídico. Ilícito é o contrário à lei, e para ser penalmente ilícito precisa estar previsto como crime. Já o fato típico, o que está descrito no Código (por exemplo, o art. 121), pode estar acobertado por uma excludente.`],
      ['h', 'Exemplo resolvido: o policial e o disparo'],
      ['ol', [
        `A pergunta é: se A matou B, o fato está previsto como crime (art. 121)? Sim: é fato típico. Houve conduta dolosa, nexo causal (o tiro atingiu a cabeça e a vítima morreu), tipicidade e resultado.`,
        `Passe para a ilicitude: o fato pode ser antijurídico, mas só se não houver estado de necessidade, legítima defesa, estrito cumprimento do dever legal ou exercício regular de direito.`,
        `Aplique: o policial, de folga, encontra um bandido perigoso, que dispara em sua direção; o tiro passa rente à cabeça e não acerta. Em vez de esperar o segundo disparo, ele repele a injusta agressão e mata o agressor.`,
        `Conclusão: ele realizou o fato típico, mas, como o direito penal o autoriza a agir assim nesse caso concreto, com todos os elementos da legítima defesa, o fato não é antijurídico. Cometeu fato típico, não ilícito. Logo, não há crime.`
      ]],
      ['p', `Lembre-se de que, quando a árvore do crime exclui o primeiro pedaço, o segundo nem é analisado. Excluído qualquer elemento do crime, o crime se exclui.`],
      ['h', 'Resumo de revisão'],
      ['ul', [
        `Excludentes de ilicitude (art. 23): estado de necessidade, legítima defesa, estrito cumprimento de dever legal e exercício regular de direito.`,
        `Em todas elas o agente pratica fato típico, mas lícito: não há crime.`,
        `Todo fato antijurídico é típico; nem todo fato típico é antijurídico.`,
        `O Código Penal é descritivo, não proibitivo.`,
        `Só estado de necessidade (art. 24) e legítima defesa (art. 25) têm conceito legal próprio.`,
        `Sinônimos: ilicitude = antijuridicidade = contrariedade ao direito.`
      ]]
    ],
    6: [
      ['h', 'A história do navio'],
      ['p', `Para fixar o estado de necessidade, imagine duas pessoas, A e B, que se conhecem num cruzeiro e se apaixonam. Nenhuma sabe nadar e só há um colete salva-vidas. De repente o navio bate numa rocha e vai afundar. Cada requisito do art. 24 aparece nessa cena.`],
      ['h', 'Requisitos, aplicados no exemplo'],
      ['ul', [
        `Perigo atual: o navio está afundando, e o bem jurídico tutelado (a vida, protegida pelo art. 5º da Constituição, com segurança, propriedade e igualdade) está sendo ameaçado agora.`,
        `Perigo não provocado voluntariamente pelo agente: nenhum dos dois causou o choque.`,
        `Inevitabilidade do comportamento: não havia outro modo de evitar o perigo; se não fizesse nada, o agente morreria afogado.`,
        `Direito próprio ou alheio: A pode sacrificar a vida de B para salvar a própria (estado de necessidade próprio). Mas também há estado de necessidade de terceiro: se A e o filho estão a bordo e só há colete para o filho, A pode eliminar B para proteger o bem jurídico do filho. A lei admite as duas modalidades.`,
        `Razoabilidade do sacrifício: sacrifica-se bem de valor igual ou menor; nunca maior (explicado abaixo).`,
        `Requisito subjetivo: o agente deve agir para se salvar ou salvar outro do perigo, e não aproveitar a situação para executar um plano anterior.`
      ]],
      ['p', `Atenção: o conceito completo está no art. 24 do CP: considera-se em estado de necessidade quem pratica o fato para salvar de perigo atual, que não provocou por sua vontade, nem podia de outro modo evitar, direito próprio ou alheio, cujo sacrifício, nas circunstâncias, não era razoável exigir-se.`],
      ['h', 'Razoabilidade do sacrifício: igual, menor, maior'],
      ['p', `Aqui está o ponto em que as bancas mais cobram. Você pode afetar um bem jurídico de igual ou de menor intensidade que o bem salvo. Você não pode afetar um bem de maior valor.`],
      ['ul', [
        `Igual por igual: matar uma pessoa para salvar outra vida. Há estado de necessidade.`,
        `Menor por maior: destruir patrimônio para salvar a própria vida. Exemplo: três coletes e um dinheiro de loteria. A mulher joga o colete do dinheiro na água para preservar a vida; lesou o patrimônio de alguém, e isso é permitido.`,
        `Maior por menor: destruir uma vida para salvar patrimônio. Exemplo: dois coletes, duas pessoas e uma mala de ouro; um dos dois coloca o colete na mala e, quando a mulher tenta retirá-lo, atira na cabeça dela para preservar o ouro. Não há estado de necessidade, e a excludente de ilicitude se perde.`
      ]],
      ['h', 'O requisito subjetivo e o caso do planejamento prévio'],
      ['p', `Imagine que A e B são amigos, mas A está bravo porque B se envolveu com a mulher de A. Antes do cruzeiro, A cogita e prepara a morte de B (cogitação, preparação, execução e consumação: as fases do iter criminis). Leva uma faca e espera o melhor momento. O navio bate e alguém grita que vai afundar. A pensa: é o momento certo. Há só um colete, o perigo é atual, ele não o provocou e, se nada fizer, morre. A mata B.`],
      ['p', `Todos os requisitos objetivos estão presentes, mas falta o subjetivo: A já tinha em mente matar B muito antes. Ele não agiu para se salvar do perigo; aproveitou-se dele para executar um plano anterior. Logo, não pode alegar estado de necessidade.`],
      ['h', 'Questões comentadas'],
      ['ol', [
        `Afirmação: as causas legais de exclusão de ilicitude previstas na parte geral do Código Penal são o estado de necessidade, a legítima defesa, o estrito cumprimento de dever legal, o exercício regular de direito e o consentimento do ofendido. Resolução: ERRADA. O consentimento do ofendido não é causa legal da parte geral; são só as quatro estudadas.`,
        `Afirmação: em relação ao estado de necessidade, adota-se no Código Penal a teoria diferenciadora, podendo ser causa de exclusão de ilicitude ou de culpabilidade. Resolução: ERRADA. As teorias do estado de necessidade são estudadas adiante; para esta etapa, as causas do art. 23 excluem a antijuridicidade. Complemento: o Código Penal adota a teoria unitária; no art. 24, § 2º, quando era razoável exigir o sacrifício, só há redução de pena de um a dois terços.`,
        `Afirmação: por expressa disposição legal, não há crime quando o agente pratica o fato no exercício regular de um direito. Resolução: CORRETA, conforme o art. 23, III. O agente praticou fato típico, mas não antijurídico, e o crime fica excluído.`,
        `Afirmação: para salvar sua plantação de batatas, um agricultor desvia o curso da água por uma barragem para a chácara vizinha, causando danos; tanto a plantação do agricultor como os danos na chácara vizinha somam 50 mil reais. Nessa situação não se configura o estado de necessidade, pois a exclusão de ilicitude só se aplica quando o bem sacrificado for de menor valor. Resolução: ERRADA. A regra é que o bem sacrificado pode ser de menor ou de igual valor ao salvo; só não pode ser de maior. Como os valores são iguais, o estado de necessidade se configura.`,
        `Afirmação: a atuação em estado de necessidade só é possível se ocorrer na defesa de direito próprio, não se admitindo a defesa de terceiro. Resolução: ERRADA. O art. 24 fala em direito próprio ou alheio; admite o estado de necessidade próprio e de terceiro.`
      ]],
      ['h', 'Resumo de revisão'],
      ['ul', [
        `Requisitos: perigo atual, perigo não provocado voluntariamente, inevitabilidade do comportamento, direito próprio ou alheio, razoabilidade do sacrifício e requisito subjetivo.`,
        `O bem sacrificado pode ser de valor igual ou menor ao protegido; nunca de maior.`,
        `Vida por vida: possível. Patrimônio por vida: possível. Vida por patrimônio: não configura.`,
        `Quem já planejava o crime e se aproveita do perigo não age em estado de necessidade (falta o requisito subjetivo).`,
        `O estado de necessidade pode ser próprio ou de terceiro.`,
        `O consentimento do ofendido não está entre as causas legais da parte geral.`
      ]]
    ],
    7: [
      ['h', 'Punibilidade e o conceito de crime'],
      ['p', `O crime tem três elementos: fato típico, ilicitude e culpabilidade. A punibilidade não integra o conceito analítico de crime. Em regra, o crime é punível, mas isso não é automático. Existem duas situações bem diferentes que você precisa separar:`],
      ['ul', [
        `Crime sem punibilidade desde o início, como nas escusas absolutórias.`,
        `Crime em que a punibilidade existia e, por alguma razão, deixou de existir: é a extinção da punibilidade.`
      ]],
      ['h', 'Escusas absolutórias'],
      ['p', `As escusas absolutórias são uma espécie de imunidade pessoal à lei penal, em casos precisos definidos em lei. O exemplo são os crimes contra o patrimônio sem violência ou grave ameaça, praticados entre cônjuges na constância do casamento (sociedade conjugal, art. 181). Nesse caso, há fato típico, ilícito e culpável, mas não há punibilidade em abstrato.`],
      ['p', `Exceção: se a vítima for pessoa idosa, não vale a escusa absolutória (art. 183 do CP, hoje com o inciso que afasta a imunidade para vítima com 60 anos ou mais). Também não vale se o crime for com violência ou grave ameaça.`],
      ['h', 'Extinção da punibilidade: art. 107 do CP'],
      ['p', `Quando se fala em extinção da punibilidade, a punibilidade existia (havia crime e ele era punível), mas deixa de existir. Isso difere da escusa absolutória, em que ela nunca existiu. As hipóteses do art. 107 são o ponto de partida do estudo.`],
      ['p', `O art. 107 é um rol não taxativo (exemplificativo): há outras causas de extinção da punibilidade espalhadas pela legislação penal. Exemplos:`],
      ['ul', [
        `Crime tributário: pagamento do tributo extingue a punibilidade.`,
        `Peculato culposo: a reparação do dano, com restituição da coisa, extingue a punibilidade.`,
        `Lei 9.099/1995 (Juizados Especiais), com seus institutos despenalizadores: composição civil dos danos (art. 74), transação penal (art. 76) e suspensão condicional do processo (art. 89).`
      ]],
      ['p', `Observação: a numeração da composição civil na Lei 9.099/1995 é o art. 74 (e não o 72, como se ouve em algumas exposições orais).`],
      ['p', `O art. 107 lista, entre outras causas: morte do agente; anistia, graça ou indulto; retroatividade de lei que não mais considera o fato como criminoso; prescrição, decadência ou perempção; renúncia ao direito de queixa ou perdão aceito, nos crimes de ação privada; retratação do agente, nos casos em que a lei a admite; perdão judicial, nos casos previstos em lei. A prescrição merece destaque especial: é tratada a partir do art. 109 e é um tema muito cobrado em concurso, sobretudo nas provas práticas.`],
      ['h', 'Morte do agente: art. 107, I'],
      ['p', `A morte do agente extingue a punibilidade. Isso decorre do princípio da intranscendência das penas, também chamado de pessoalidade ou personalidade das penas: a pena não passa da pessoa do condenado. A lógica é a do brocardo mors omnia solvit: a morte apaga tudo.`],
      ['h', 'O que a morte apaga e o que não apaga'],
      ['ul', [
        `Apaga as consequências penais em sentido estrito: por exemplo, a pena de multa não é devida e não passa para o espólio.`,
        `Não apaga as repercussões extrapenais: a condenação penal torna certa a obrigação de reparar o dano, que é de natureza extrapenal e passa aos herdeiros.`
      ]],
      ['h', 'Morte da vítima: em regra, nada acontece'],
      ['p', `Em regra, a morte da vítima (ofendido) não extingue a punibilidade do agente. Há uma única exceção: na ação penal privada personalíssima, a morte da vítima extingue a punibilidade do agente. Essa causa também não está no art. 107, mais um exemplo de que o rol não é taxativo.`],
      ['p', `A ação penal privada personalíssima só existe no caso do art. 236 do CP: induzimento a erro essencial e ocultação de impedimento ao casamento (o chamado erro essencial sobre a pessoa no casamento, ou ocultação dolosa de impedimento que não seja casamento anterior). Só a vítima, o cônjuge enganado, pode processar criminalmente o agente. Se ela morre, a titularidade da queixa-crime não passa para cônjuge, ascendentes, descendentes ou irmãos, justamente por ser personalíssima. Ninguém poderá processar o agente; sem processo não há punição, e por isso se extingue a punibilidade.`],
      ['h', 'Resumo de revisão'],
      ['ul', [
        `Punibilidade não é elemento do crime.`,
        `Escusa absolutória: crime sem punibilidade desde o início (ex.: crime patrimonial sem violência entre cônjuges; não vale se a vítima for idosa).`,
        `Extinção: a punibilidade existia e deixou de existir. Art. 107 é rol não taxativo.`,
        `Outras causas: pagamento no crime tributário, reparação no peculato culposo, institutos da Lei 9.099/1995.`,
        `Morte do agente: extingue a punibilidade (intranscendência das penas). A multa não passa; a reparação civil passa aos herdeiros.`,
        `Morte da vítima: só extingue na ação penal privada personalíssima (art. 236).`,
        `Prescrição: ênfase especial, a partir do art. 109.`
      ]]
    ],
    8: [
      ['h', 'Art. 107, II: anistia, graça ou indulto'],
      ['p', `O inciso II do art. 107 reúne três institutos diferentes. Nenhum se aplica aos crimes hediondos e equiparados: a Constituição, no art. 5º, XLIII, diz que são insuscetíveis de graça ou anistia, e a Lei de Crimes Hediondos (Lei 8.072/1990) estende a vedação ao indulto. Tortura, tráfico de drogas e terrorismo são equiparados a hediondos; hoje a Lei de Anistia de 1979 não alcançaria a tortura, por exemplo.`],
      ['h', 'Anistia'],
      ['ul', [
        `É concedida por lei, em sentido material e formal. Assim, exige o processo legislativo: votação, sanção presidencial, possível veto e sua derrubada pelo Congresso.`,
        `É uma espécie de perdão a crimes pretéritos: os crimes passados, até determinada data, são perdoados.`,
        `A conduta continua sendo crime (fato típico, ilícito e culpável); o que deixa de existir é a punibilidade.`,
        `Tem efeitos pretéritos e retroativos: alcança fatos passados. Não se pode anistiar o futuro, porque isso seria carta branca para delinquir.`,
        `Em geral está vinculada a um contexto, como o político.`
      ]],
      ['p', `Exemplo: a Lei de Anistia de 1979, quando o regime militar já vivia a abertura lenta e gradual, perdoou os crimes de motivação política praticados de meados de 1967 até agosto de 1979, tanto por quem lutava contra a ditadura quanto por quem a sustentava. Aqueles crimes continuaram sendo crimes, mas não podiam mais ser punidos. Um crime cometido no dia seguinte seria punido.`],
      ['p', `Se o legislador quiser deixar de considerar a conduta criminosa daqui para a frente, o instituto não é anistia: é abolitio criminis, prevista no art. 107, III.`],
      ['h', 'Anistia por medida provisória?'],
      ['p', `O art. 62 da Constituição veda medida provisória sobre matéria de direito penal. O STF tem precedentes que admitem a medida provisória em matéria penal quando for benéfica ao réu. Sobre anistia por medida provisória não há precedente posterior à Emenda Constitucional 32; não se sabe se o Supremo admitiria.`],
      ['h', 'Graça e indulto: a mesma natureza'],
      ['p', `Do ponto de vista doutrinário, o indulto pode ser individual ou geral (coletivo). O que a lei chama de graça é o que a doutrina chama de indulto individual: perdão particularizado. O que a lei chama de indulto é o que a doutrina chama de indulto geral, de caráter coletivo.`],
      ['ul', [
        `Graça (indulto individual): perdão a uma pessoa determinada.`,
        `Indulto (indulto geral ou coletivo): perdão a um grupo de condenados.`,
        `Ambos têm a mesma natureza: perdão concedido pelo chefe do Poder Executivo federal, por decreto do Presidente da República.`
      ]],
      ['p', `A diferença para a anistia é a competência: anistia é lei, com todo o trabalho do Legislativo e a sanção presidencial; graça e indulto são ato do Presidente da República. Como a anistia, perdoam crimes pretéritos.`],
      ['h', 'Um pouco de história'],
      ['p', `O instituto vem da antiguidade: o governante de plantão podia perdoar quem fosse considerado criminoso. O exemplo conhecido é o de Pôncio Pilatos, que, por ocasião da Páscoa judaica, concedeu uma graça a Barrabás. No Brasil se fala em indulto de Natal (indulto natalino): historicamente, o chefe do Executivo costuma conceder indulto nessa época, embora nenhuma norma obrigue a isso.`],
      ['h', 'Quadro comparativo'],
      ['ul', [
        `Anistia: lei; perdoa fatos passados; o crime permanece, sem punibilidade.`,
        `Graça: decreto; individual.`,
        `Indulto: decreto; coletivo.`,
        `Abolitio criminis: lei que deixa de considerar o fato crime (art. 107, III); descriminaliza a conduta.`,
        `Nenhum deles se aplica aos crimes hediondos e equiparados (anistia e graça: vedação constitucional; indulto: vedação da Lei 8.072/1990).`
      ]],
      ['h', 'Resumo de revisão'],
      ['ul', [
        `Art. 107, II: anistia, graça ou indulto.`,
        `Anistia: lei em sentido material e formal; retroativa; o crime continua, a punibilidade acaba.`,
        `Graça = indulto individual; indulto (da lei) = indulto coletivo/geral. Ambos por decreto presidencial.`,
        `Não cabem em crimes hediondos e equiparados (tortura, tráfico de drogas, terrorismo).`,
        `Não se anistia o futuro; deixar de considerar crime é abolitio criminis.`,
        `Lei de Anistia de 1979: crimes políticos de meados de 1967 a agosto de 1979.`
      ]]
    ]
  };

  window.PCPE_QUESTOES[topic] = [
    {
      text: `A culpabilidade é um dos elementos do crime no conceito analítico tripartido. Assinale a alternativa que traz corretamente os elementos que a compõem.`,
      options: [
        `Fato típico, ilicitude e punibilidade.`,
        `Imputabilidade, potencial consciência da ilicitude e exigibilidade de conduta diversa.`,
        `Conduta, nexo causal e resultado.`,
        `Dolo, culpa e preterdolo.`
      ],
      correct: 1,
      exp: `A culpabilidade é a reprovabilidade da conduta e se decompõe em imputabilidade, potencial consciência da ilicitude e exigibilidade de conduta diversa. Fato típico e ilicitude são outros elementos do crime, e a punibilidade nem integra o conceito analítico; conduta, nexo e resultado são partes do fato típico; dolo e culpa são elementos da conduta.`
    },
    {
      text: `Uma criança de 10 anos pega uma faca e, brincando, fere gravemente um colega. Sobre a análise do crime, é correto afirmar que:`,
      options: [
        `Não há fato típico, porque a criança não tem intenção de lesionar.`,
        `O fato é típico, mas não é ilícito, porque há legítima defesa.`,
        `O fato é típico e ilícito, mas a criança não é culpável, por ser inimputável.`,
        `O fato é típico, ilícito e culpável, mas a pena é reduzida.`
      ],
      correct: 2,
      exp: `Há fato típico e ilicitude (não há causa de justificação), mas a criança é inimputável, e sem imputabilidade não se pode falar em culpabilidade. A tese da legítima defesa é incompatível com a brincadeira e a redução de pena não se aplica a quem nem sequer é culpável.`
    },
    {
      text: `Um soldado recebe de seu superior a ordem de executar um inocente e a cumpre. Em relação à culpabilidade, segundo o que se estuda sobre obediência hierárquica, é correto afirmar que:`,
      options: [
        `Ele não pode alegar obediência hierárquica, pois a ilegalidade da ordem era manifesta.`,
        `Ele tem a culpabilidade excluída, pois cumpriu ordem de superior hierárquico.`,
        `Ele tem apenas a pena reduzida, pois há coação física.`,
        `Ele é inimputável, por estar em relação de subordinação.`
      ],
      correct: 0,
      exp: `A obediência hierárquica só exclui a culpabilidade se a ordem não for manifestamente ilegal. Uma ordem para executar um inocente é evidentemente ilegal. As demais alternativas ignoram essa condição, confundem com coação física (que exclui a conduta) ou com inimputabilidade, que nada tem a ver com subordinação.`
    },
    {
      text: `A respeito da inimputabilidade por doença mental, é correto afirmar que o Código Penal adota o critério:`,
      options: [
        `Biológico puro: basta o agente ter doença mental para ser isento de pena.`,
        `Psicológico puro: basta ao agente não entender o caráter ilícito do fato.`,
        `Cronológico, pelo qual só importa a idade do agente.`,
        `Biopsicológico, que exige doença mental ou desenvolvimento mental incompleto e, ao tempo da conduta, incapacidade de entender o caráter ilícito do fato ou de se determinar.`
      ],
      correct: 3,
      exp: `O critério é o biopsicológico: soma-se o critério biológico (doença ou desenvolvimento mental incompleto) com o psicológico (incapacidade, ao tempo da ação ou omissão, de entender o ilícito ou de se determinar). Não basta ter a doença (biológico puro) nem a incapacidade isolada (psicológico puro); o critério cronológico é o da menoridade. O inimputável é absolvido (absolvição imprópria) e recebe medida de segurança.`
    },
    {
      text: `Alguém, sem chamar atenção, coloca droga na bebida de um terceiro, que, completamente embriagado e sem ter consciência do que ingeriu, provoca um acidente de trânsito. Em relação a esse terceiro, o Código Penal prevê:`,
      options: [
        `Responsabilização penal normal, pela teoria da actio libera in causa.`,
        `Aumento de pena, por tratar-se de embriaguez preordenada.`,
        `Isenção de pena, por embriaguez completa proveniente de caso fortuito (art. 28, § 1º).`,
        `Redução de pena de um a dois terços, por embriaguez fortuita incompleta.`
      ],
      correct: 2,
      exp: `Como ele não tinha consciência do que ingeria, não houve voluntariedade na ingestão; a actio libera in causa não sustenta a responsabilização. Sendo a embriaguez fortuita e completa, há isenção de pena (art. 28, § 1º). A redução de um a dois terços é para a fortuita incompleta (§ 2º), e a preordenada é a bebida usada para cometer o crime.`
    },
    {
      text: `Para ter coragem e cometer um crime que já planejava, um indivíduo ingere bebida alcoólica e, embriagado, executa o delito. De acordo com a teoria da actio libera in causa, é correto afirmar que:`,
      options: [
        `Ele é isento de pena, pois estava inteiramente incapaz no momento do crime.`,
        `Ele responde pelo crime, e a embriaguez preordenada ainda é circunstância que sempre agrava a pena (art. 61, II, l).`,
        `Ele tem direito à redução de pena de um a dois terços.`,
        `Ele é inimputável por doença mental, por embriaguez patológica.`
      ],
      correct: 1,
      exp: `Na actio libera in causa a liberdade é avaliada no momento da ingestão, não do crime; quem se embriaga de propósito para cometer o crime era livre ao beber. Por isso responde, e a embriaguez preordenada é agravante. A isenção e a redução são para a embriaguez fortuita; a patológica, que é doença mental, não é o caso.`
    },
    {
      text: `Um agricultor, para salvar sua plantação de batatas, desvia a água de uma barragem para a chácara vizinha, causando danos. A plantação do agricultor e os danos na chácara valem, cada um, 50 mil reais. Sobre o estado de necessidade, é correto afirmar que:`,
      options: [
        `Não se configura, pois o bem sacrificado deve ser sempre de menor valor.`,
        `Não se configura, pois só se admite estado de necessidade para salvar a vida.`,
        `Configura-se somente se o agricultor provocou voluntariamente o perigo.`,
        `Pode configurar-se, pois o bem sacrificado pode ser de valor igual ou menor ao salvo; só não pode ser de maior valor.`
      ],
      correct: 3,
      exp: `A razoabilidade do sacrifício permite afetar bem de igual ou menor valor; o que não se admite é sacrificar bem de maior valor. Como os valores são iguais, o estado de necessidade pode ser reconhecido, desde que presentes os demais requisitos. Quem provoca o perigo voluntariamente não pode invocá-lo, e o estado de necessidade não se limita à vida.`
    },
    {
      text: `No navio que afunda, há dois coletes e duas pessoas. Uma delas coloca um colete numa mala de ouro e, quando a outra tenta retirá-lo, atira nela para preservar o ouro. Em relação ao estado de necessidade, é correto afirmar que:`,
      options: [
        `Não há estado de necessidade, pois se sacrificou um bem de maior valor (a vida) para preservar um de menor valor (patrimônio).`,
        `Há estado de necessidade, pois o patrimônio estava sob perigo atual.`,
        `Há estado de necessidade, pois o agente não provocou o perigo.`,
        `Há estado de necessidade, porque o direito próprio pode ser defendido de qualquer forma.`
      ],
      correct: 0,
      exp: `Pode-se sacrificar bem igual ou menor, mas não maior. A vida vale mais que o patrimônio, logo a razoabilidade do sacrifício não foi atendida e a excludente se perde. O perigo atual e o fato de não ter provocado o perigo não bastam: todos os requisitos precisam estar presentes.`
    },
    {
      text: `Sobre a extinção da punibilidade pela morte, assinale a alternativa correta.`,
      options: [
        `A morte do agente extingue a punibilidade, inclusive a obrigação de reparar o dano, que não passa aos herdeiros.`,
        `A morte do agente extingue a punibilidade, mas a obrigação civil de reparar o dano passa aos herdeiros, e a multa não é devida.`,
        `A morte da vítima extingue a punibilidade do agente em todos os crimes.`,
        `A multa aplicada ao agente morto passa ao espólio, porque é obrigação patrimonial.`
      ],
      correct: 1,
      exp: `Pela intranscendência das penas, a morte do agente extingue a punibilidade e a multa não é devida. A reparação do dano é consequência extrapenal e passa aos herdeiros. A morte da vítima, em regra, não extingue a punibilidade; só na ação penal privada personalíssima (art. 236).`
    },
    {
      text: `Um decreto do Presidente da República perdoa a pena de um grupo de condenados por crime comum não hediondo. Já uma lei perdoa os crimes políticos praticados até determinada data. Sobre esses institutos, é correto afirmar que:`,
      options: [
        `Ambos são anistia, pois o perdão sempre depende de lei.`,
        `O primeiro é indulto (coletivo) e o segundo é anistia; em ambos o crime continua existindo, mas a punibilidade é extinta.`,
        `O primeiro é graça, pois toda concessão por decreto é graça; o segundo é abolitio criminis.`,
        `O segundo é indulto, pois alcança fatos passados, e o primeiro é anistia, porque atinge vários condenados.`
      ],
      correct: 1,
      exp: `Decreto presidencial que beneficia um grupo é indulto (coletivo); lei que perdoa fatos passados é anistia. Nos dois, o crime permanece e só a punibilidade desaparece. A graça é o indulto individual; a abolitio criminis ocorre quando a lei deixa de considerar a conduta como crime (art. 107, III), o que não é o caso. A anistia não depende de decreto e o indulto não é lei.`
    }
  ];
})();
