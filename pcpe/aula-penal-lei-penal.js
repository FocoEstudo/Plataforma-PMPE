(function () {
  'use strict';
  window.PCPE_TOPIC_GUIDES = window.PCPE_TOPIC_GUIDES || {};
  window.PCPE_DEEPENING = window.PCPE_DEEPENING || {};
  window.PCPE_QUESTOES = window.PCPE_QUESTOES || {};
  const topic = 'Aplicação da lei penal';
  const base = window.PCPE_TOPIC_GUIDES[topic] || {};
  window.PCPE_TOPIC_GUIDES[topic] = Object.assign({}, base, {
    lessons: [
      [
        `Lei penal no tempo · Anterioridade e irretroatividade`,
        `A anterioridade da lei penal está no art. 1º do Código Penal: não há crime sem lei anterior que o defina e não há pena sem prévia cominação legal. É preciso existir uma lei dizendo que o comportamento é contrário ao direito antes de ele acontecer; só assim o Estado pode reprimir quem pratica condutas ilícitas. Por isso a lei penal só pode voltar no tempo (retroagir) quando for para beneficiar o réu, e jamais para prejudicá-lo.`,
        `Se hoje uma conduta não é crime e amanhã uma lei a transforma em crime, quem a praticou ontem não pode ser punido. Se, ao contrário, a lei nova for mais favorável, ela alcança o fato passado.`,
        `Guarde a regra em uma frase: a lei penal nunca retroage para prejudicar o acusado; só retroage para beneficiá-lo. Qualquer alternativa que diga que a lei mais severa alcança fatos anteriores está errada.`
      ],
      [
        `Lei penal no tempo · Momento do crime: as três teorias e o art. 4º`,
        `Para saber em que momento o crime foi praticado existem três teorias: a da atividade (vale o momento da conduta, isto é, da ação ou omissão), a do resultado (vale o momento do resultado) e a da ubiquidade ou mista (valem os dois: conduta e resultado). O Código Penal adotou a teoria da atividade, no art. 4º: considera-se praticado o crime no momento da ação ou omissão, ainda que outro seja o momento do resultado.`,
        `No dia 1º de janeiro, fulano atira em beltrano para matá-lo; beltrano é levado ao hospital e morre no dia 5. Pela atividade, o crime foi praticado em 1º de janeiro (o disparo); pelo resultado seria 5 de janeiro (a morte); pela ubiquidade, as duas datas. O Código adota a primeira: dia 1º. Se fulano tinha 17 anos no disparo e completou 18 no dia 3, antes da morte, ele ainda responde por ato infracional (Estatuto da Criança e do Adolescente), porque a imputabilidade se avalia na data da conduta.`,
        `Cuidado para não confundir as teorias: no tempo, o Código Penal adota a atividade; no espaço (próxima etapa), adota a ubiquidade. A banca gosta de trocar uma pela outra.`
      ],
      [
        `Lei penal no tempo · Tempus regit actum, extratividade, retroatividade e ultra-atividade`,
        `A regra é aplicar a lei vigente à época dos fatos: tempus regit actum (o tempo rege o ato). No campo penal, aplica-se a lei que estava em vigor no dia do crime. A exceção é a extratividade, a aplicação da lei a fatos ocorridos fora do seu período de vigência, e ela só vale quando a lei é mais benéfica. Ela se divide em retroatividade e ultra-atividade.`,
        `Imagine que, no dia do fato, a pena máxima do crime fosse de 20 anos e, no dia seguinte, o Congresso aprovasse uma alteração elevando a pena máxima para 30 anos. A lei nova não se aplica a quem já praticou o crime, porque não retroage para prejudicar. No julgamento, vale o máximo de 20 anos, mesmo com a lei antiga já revogada: isso é a ultra-atividade.`,
        `Retroatividade: lei posterior mais benéfica aplicada a fato anterior à sua vigência. Ultra-atividade: lei anterior mais benéfica, já revogada, aplicada a fato ocorrido durante a sua vigência. Em ambas, o fio condutor é o benefício do réu.`
      ],
      [
        `Lei penal no espaço · Objetivos, internacionalidade e art. 6º`,
        `Na lei penal no espaço há dois objetivos: determinar onde ocorreu o crime para fins penais e decidir se a lei brasileira pode ser aplicada a ele. As normas do Código Penal sobre o lugar do crime só entram quando o crime envolve mais de um país (internacionalidade do delito). Conflitos sobre o lugar do crime dentro do Brasil se resolvem pelas regras de competência e jurisdição do Código de Processo Penal. Para o lugar do crime, o art. 6º adota a teoria da ubiquidade: é praticado no lugar da ação ou omissão e também no do resultado.`,
        `Se a questão pergunta se o processo cabe à Justiça Federal ou à Estadual, ou à Justiça do Paraná ou à de São Paulo, esqueça as teorias da lei penal no espaço: é direito processual penal (competência). Já um crime que toca mais de um país, em que a conduta ocorre em um e o resultado em outro, é resolvido pelo Código Penal.`,
        `Macete: se o crime de alguma forma tocou o Brasil (conduta ou resultado aqui), vale a lei brasileira. Não aplique a ubiquidade ao momento do crime, só ao lugar.`
      ],
      [
        `Lei penal no espaço · Territorialidade e conceito de território`,
        `A territorialidade é a regra (art. 5º): aplica-se a lei penal brasileira ao crime cometido dentro do território nacional, sem prejuízo de convenções, tratados e regras de direito internacional. O território divide-se em território propriamente dito (superfície terrestre, mar territorial, águas interiores e espaço aéreo acima) e território por extensão ou ficto (embarcações e aeronaves públicas ou a serviço do governo brasileiro, onde quer que estejam, e as privadas brasileiras que estejam em alto-mar ou no espaço aéreo sobre o alto-mar).`,
        `Um embaixador estrangeiro que pratica crime no Brasil não é processado aqui, mas em seu país de origem, por força da imunidade diplomática (norma de direito internacional): exceção à territorialidade. Navio ou avião público ou a serviço do governo: lei do país a que pertence. Navio ou avião privado: em regra, a lei do país onde estiver (mar territorial ou espaço aéreo de um país); em alto-mar ou no espaço aéreo sobre o alto-mar, a lei do país de matrícula.`,
        `Imunidade diplomática é a exceção típica à territorialidade. E a divisão público x privado é a chave dos casos de navios e aeronaves: público segue a bandeira em qualquer lugar; privado segue o local onde está, salvo em alto-mar.`
      ],
      [
        `Lei penal no espaço · Extraterritorialidade incondicionada (art. 7º, I)`,
        `A extraterritorialidade é a aplicação da lei brasileira a crimes cometidos no exterior. Ela é incondicionada quando sujeita o agente à lei brasileira sem depender de nenhuma condição. Está no art. 7º, I, que lista quatro situações: crimes contra a vida ou a liberdade do Presidente da República; crimes contra o patrimônio ou a fé pública de entes públicos (União, Estados, Município etc.); crimes contra a administração pública por quem está a seu serviço; e genocídio, quando o agente for brasileiro ou domiciliado no Brasil.`,
        `Nessas quatro hipóteses, a lei brasileira é aplicada qualquer que seja o país onde ocorreu o delito, e o agente é punido segundo ela ainda que tenha sido absolvido ou condenado no estrangeiro (art. 7º, §1º). Se o Estado brasileiro conseguir capturar o autor, ele será submetido ao Código Penal brasileiro.`,
        `Decore a lista de quatro situações (Presidente, entes públicos, administração pública, genocídio). Só o genocídio exige que o agente seja brasileiro ou domiciliado no Brasil; nos outros três, a nacionalidade do autor é irrelevante.`
      ],
      [
        `Lei penal no espaço · Extraterritorialidade condicionada (art. 7º, II e §2º)`,
        `Na extraterritorialidade condicionada, a lei brasileira só se aplica se forem preenchidas condições. As hipóteses são três (art. 7º, II): crimes que o Brasil se obrigou a reprimir por tratado ou convenção; crimes praticados por brasileiro; e crimes praticados em aeronaves ou embarcações brasileiras, mercantes ou privadas, em território estrangeiro, quando ali não sejam julgados. As condições (art. 7º, §2º) são cinco, e todas precisam ocorrer.`,
        `Condições cumulativas: (a) o agente entrar no território nacional; (b) o fato ser punível também no país onde foi praticado; (c) o crime estar entre os que a lei brasileira autoriza a extradição; (d) o agente não ter sido absolvido no estrangeiro nem ter cumprido a pena lá; (e) o agente não ter sido perdoado no estrangeiro nem estar extinta a punibilidade. Complemento do art. 7º, §3º: também se aplica a lei brasileira ao crime cometido por estrangeiro contra brasileiro fora do Brasil, desde que reunidas essas condições, não tenha sido pedida ou tenha sido negada a extradição e haja requisição do Ministro da Justiça.`,
        `Compare com a incondicionada: lá a lei brasileira é aplicada sempre e o agente responde mesmo se absolvido no exterior; aqui, a absolvição ou o cumprimento da pena no estrangeiro, entre outras condições, afasta a lei brasileira.`
      ]
    ],
    practice: [
      `Explique o que diz o art. 1º do Código Penal e em que única hipótese a lei penal pode retroagir.`,
      `Quais são as três teorias sobre o momento do crime, qual o Código Penal adota (art. 4º) e como ela se aplica ao autor que tinha 17 anos no disparo e completou 18 antes da morte da vítima?`,
      `Diferencie retroatividade de ultra-atividade, usando o exemplo da pena máxima de 20 anos que passa a 30 anos.`,
      `Qual teoria o art. 6º adota para o lugar do crime e por que a questão sobre competência entre Justiça Federal e Estadual não se resolve por ela?`,
      `Liste as quatro hipóteses de extraterritorialidade incondicionada e as cinco condições da extraterritorialidade condicionada.`
    ],
    answers: [
      `O art. 1º diz que não há crime sem lei anterior que o defina nem pena sem prévia cominação legal. A lei penal só pode retroagir para beneficiar o réu, nunca para prejudicá-lo.`,
      `Atividade (momento da conduta), resultado (momento do resultado) e ubiquidade ou mista (conduta e resultado). O Código adota a atividade: o crime se considera praticado no momento da ação ou omissão. Como o autor tinha 17 anos no disparo, é inimputável e responde por ato infracional pelo ECA, mesmo que a morte ocorra depois dos 18.`,
      `Retroatividade é aplicar lei posterior mais benéfica a fato anterior à sua vigência. Ultra-atividade é aplicar lei anterior mais benéfica, já revogada, a fato ocorrido durante a sua vigência. No exemplo, o crime foi cometido sob pena máxima de 20 anos e a lei nova elevou para 30: vale a antiga (20), por ultra-atividade.`,
      `O art. 6º adota a ubiquidade: o lugar do crime é o da ação ou omissão e o do resultado. A competência entre Justiça Federal ou Estadual (ou de Estados diferentes) é conflito interno ao Brasil, resolvido pelo Código de Processo Penal; a lei penal no espaço só se usa em crimes que envolvem mais de um país.`,
      `Incondicionada: crimes contra a vida ou liberdade do Presidente da República; contra o patrimônio ou a fé pública de entes públicos; contra a administração pública por quem está a seu serviço; genocídio com agente brasileiro ou domiciliado no Brasil. Condições: entrar no território nacional; fato punível também no país de origem; crime sujeito à extradição pela lei brasileira; agente não absolvido nem tendo cumprido pena no exterior; agente não perdoado nem com punibilidade extinta.`
    ]
  });

  window.PCPE_DEEPENING[topic] = {
    1: [
      ['h', `Lei penal no tempo · Anterioridade e irretroatividade`],
      ['p', `A aplicação da lei penal no tempo e no espaço é um dos primeiros assuntos de quem começa a estudar direito penal e tem muitos detalhes, mas, explicado com calma, fica simples. Comece pela lei penal no tempo, e o primeiro aspecto é a anterioridade.`],
      ['h', `O que diz o art. 1º do Código Penal`],
      ['p', `Segundo o art. 1º, é necessário que exista uma lei dispondo que determinado comportamento é contrário ao direito. Não há crime sem lei anterior que o defina e não há pena sem prévia cominação legal. Só assim o Estado pode reprimir a pessoa que pratica condutas ilícitas que atrapalham o bem-estar da sociedade: a repressão depende de lei já existente quando a conduta aconteceu.`],
      ['ul', [
        `Crime: só existe se uma lei anterior à conduta o definir.`,
        `Pena: só pode ser aplicada se a lei, antes do fato, a previu (prévia cominação legal).`,
        `Consequência prática: ninguém é punido por algo que, no momento em que o fez, não era crime.`
      ]],
      ['h', `A regra da retroatividade`],
      ['p', `A lei penal só pode retroagir (voltar no tempo e alcançar fatos passados) se for para beneficiar o réu. A lei jamais volta no tempo para prejudicar o acusado. Essa frase resolve boa parte das questões: leia a alternativa e pergunte se a lei nova é mais favorável ou mais severa. Se for mais severa, ela não alcança fatos anteriores.`],
      ['h', `Como aplicar`],
      ['ol', [
        `Identifique a data do fato (veja a próxima lição: é o momento da ação ou omissão).`,
        `Identifique se houve lei nova depois do fato.`,
        `Compare: a lei nova é mais benéfica ou mais prejudicial?`,
        `Mais benéfica: retroage e beneficia o réu. Mais prejudicial: não retroage; vale a lei do tempo do fato.`
      ]],
      ['h', `Pegadinha`],
      ['p', `Se a alternativa disser que uma lei mais severa pode ser aplicada a crimes já praticados porque o Estado precisa reprimir a conduta, ela está errada: a anterioridade é justamente a garantia contra isso. Já a lei mais benéfica não encontra esse obstáculo.`],
      ['h', `Resumo de revisão`],
      ['ul', [
        `Art. 1º do CP: não há crime sem lei anterior que o defina; não há pena sem prévia cominação legal.`,
        `A lei penal só retroage para beneficiar o réu.`,
        `A lei penal jamais volta no tempo para prejudicar o acusado.`,
        `A repressão estatal depende de lei já existente quando a conduta foi praticada.`
      ]]
    ],
    2: [
      ['h', `Lei penal no tempo · Momento do crime: as três teorias e o art. 4º`],
      ['p', `Para aplicar a lei penal no tempo é preciso saber em que momento o crime foi praticado. Isso nem sempre é óbvio, porque a conduta e o resultado podem ocorrer em datas diferentes. Para resolver, existem três teorias.`],
      ['h', `O exemplo-base`],
      ['p', `No dia 1º de janeiro, fulano efetua um disparo de arma de fogo contra seu desafeto beltrano, com a intenção de matá-lo. Beltrano é levado ao hospital, mas morre no dia 5 de janeiro em razão do ferimento. Qual é o momento do crime: o dia da conduta (o disparo) ou o dia do resultado (a morte)?`],
      ['h', `As três teorias`],
      ['ul', [
        `Teoria da atividade: considera praticado o crime no momento da conduta, isto é, da ação ou omissão delituosa. No exemplo, o dia do disparo (1º de janeiro).`,
        `Teoria do resultado: considera praticado o crime no momento do resultado. No exemplo, o dia do óbito (5 de janeiro).`,
        `Teoria da ubiquidade (ou mista): considera praticado o crime tanto no momento da conduta quanto no do resultado.`
      ]],
      ['h', `Qual o Código Penal adotou?`],
      ['p', `O Código adotou a teoria da atividade. Segundo o art. 4º, considera-se praticado o crime no momento da ação ou omissão, ainda que seja outro o momento do resultado. No exemplo, o crime é considerado praticado em 1º de janeiro, quando fulano atirou.`],
      ['h', `Consequência prática: a imputabilidade`],
      ['p', `A imputabilidade do agente deve ser observada no momento em que o crime é praticado, pouco importando a data do resultado. Variante do exemplo: ao efetuar os disparos, em 1º de janeiro, fulano tinha 17 anos; em 3 de janeiro, completou 18; em 5 de janeiro, beltrano morreu. No momento da morte, fulano já era maior de idade, mas, como era menor no momento da conduta, ele responde por ato infracional, segundo as normas do Estatuto da Criança e do Adolescente.`],
      ['ol', [
        `Marque a data da conduta (ação ou omissão).`,
        `Verifique a idade do agente nessa data: 17 anos, menor.`,
        `Ignore o fato de ele ter completado 18 antes do resultado.`,
        `Conclusão: ato infracional (ECA), não crime.`
      ]],
      ['h', `Pegadinha`],
      ['p', `A mesma palavra, ubiquidade, aparece na lei penal no espaço, mas lá ela vale (art. 6º). No tempo, a teoria adotada é a da atividade. Se a alternativa disser que, no tempo, se adota o resultado ou a ubiquidade, está errada.`],
      ['h', `Resumo de revisão`],
      ['ul', [
        `Três teorias: atividade (conduta), resultado e ubiquidade/mista (ambos).`,
        `Art. 4º do CP: o crime se considera praticado no momento da ação ou omissão, ainda que outro seja o momento do resultado.`,
        `Imputabilidade avaliada na data da conduta: menor de 18 na conduta responde por ato infracional (ECA).`,
        `No exemplo, o crime foi praticado em 1º de janeiro (disparo), não em 5 de janeiro (morte).`
      ]]
    ],
    3: [
      ['h', `Lei penal no tempo · Tempus regit actum, extratividade, retroatividade e ultra-atividade`],
      ['p', `A teoria da atividade também se aplica quando a lei muda depois do crime. A regra é aplicar a lei vigente à época dos fatos, expressa no latim tempus regit actum: o tempo rege o ato. Em direito penal, vale a lei que estava em vigor no dia do crime.`],
      ['h', `O exemplo da pena de 20 para 30 anos`],
      ['p', `Imagine que, no dia do fato, a pena máxima para o crime era de 20 anos. No dia seguinte, o Congresso Nacional aprova uma alteração no Código Penal e a pena máxima passa a 30 anos. Isso será aplicado aos crimes já praticados? Não, porque a lei não retroage para prejudicar o réu. No julgamento, será considerada a pena máxima de 20 anos, mesmo que essa lei já tenha sido revogada.`],
      ['h', `A exceção: extratividade`],
      ['p', `Se acontecer o contrário e a lei penal for mais benéfica, há um caso de extratividade, que é a exceção. Extratividade é a aplicação da lei a fatos ocorridos fora do seu âmbito de vigência. Ela tem duas formas:`],
      ['ul', [
        `Retroatividade: aplicação de lei penal mais benéfica a um fato criminoso acontecido antes do período de sua vigência. Se uma lei posterior ao crime é mais benéfica ao réu, ela retroage para beneficiá-lo.`,
        `Ultra-atividade: aplicação da lei penal mais benéfica, porém já revogada, aos fatos ocorridos durante a sua vigência. No exemplo, a lei com pena máxima de 20 anos, revogada pela de 30 anos, continua sendo aplicada ao fato praticado quando ela vigorava.`
      ]],
      ['h', `Como decidir qual lei aplicar`],
      ['ol', [
        `Fixe a data do crime (art. 4º: momento da ação ou omissão).`,
        `Descubra qual lei vigia nesse dia: é a regra (tempus regit actum).`,
        `Veja se houve lei posterior ou revogação.`,
        `Se a outra lei for mais benéfica ao réu, aplique-a: retroatividade (se for posterior) ou ultra-atividade (se for a antiga, revogada).`,
        `Se a outra lei for mais severa, ignore-a.`
      ]],
      ['h', `Complemento do texto da lei (art. 2º do CP)`],
      ['p', `O art. 2º reforça a retroatividade benéfica: ninguém pode ser punido por fato que lei posterior deixa de considerar crime, cessando em virtude dela a execução e os efeitos penais da sentença condenatória; e a lei posterior que, de qualquer modo, favorecer o agente aplica-se aos fatos anteriores, ainda que decididos por sentença condenatória transitada em julgado.`],
      ['h', `Pegadinha`],
      ['p', `Não confunda os nomes: retroatividade olha para trás a partir da lei nova; ultra-atividade faz a lei antiga seguir valendo depois de revogada. As duas só valem se forem benéficas. Em ambas, a lei mais severa nunca prevalece sobre fatos anteriores.`],
      ['h', `Resumo de revisão`],
      ['ul', [
        `Regra: tempus regit actum; vale a lei vigente no dia do crime.`,
        `Extratividade: aplicação da lei fora do seu período de vigência, exceção que só vale se beneficiar o réu.`,
        `Retroatividade: lei posterior mais benéfica atinge fato anterior à sua vigência.`,
        `Ultra-atividade: lei anterior mais benéfica, já revogada, atinge fato ocorrido durante a sua vigência.`,
        `Exemplo: pena máxima de 20 que passa para 30 anos; o réu responde pela de 20.`
      ]]
    ],
    4: [
      ['h', `Lei penal no espaço · Objetivos, internacionalidade e art. 6º`],
      ['p', `Quando se estuda a lei penal no espaço, existem dois objetivos: determinar onde ocorreu o crime para fins penais e determinar se a lei penal brasileira pode ser aplicada a esse crime.`],
      ['h', `Só vale para crimes que envolvem mais de um país`],
      ['p', `As normas de direito penal sobre o lugar do crime só devem ser usadas quando o crime é perpetrado em mais de um país: é a internacionalidade dos delitos. Conflitos sobre o lugar do crime dentro das fronteiras do Brasil são solucionados pelo Código de Processo Penal, por meio das normas de competência e jurisdição. Não são assunto de direito penal, e sim de direito processual penal.`],
      ['p', `Aplicação em prova: se a questão trata da competência da Justiça Federal ou Estadual, ou se cabe à Justiça do Paraná ou de São Paulo conduzir um processo, esqueça as teorias da lei penal no espaço. Você está diante de um caso resolvido por normas de direito processual penal. Se o crime envolve mais de um país, use as normas do Código Penal sobre aplicação da lei penal no espaço.`],
      ['h', `O art. 6º e a teoria da ubiquidade`],
      ['p', `Segundo o art. 6º, considera-se praticado o crime no lugar da ação ou da omissão, bem como no lugar do resultado. Lembra das três teorias do momento do crime? Quanto à lei penal no espaço, aplica-se a teoria da ubiquidade ou mista: o lugar do crime é tanto o lugar da ação ou omissão quanto o lugar do resultado. O texto do art. 6º diz ainda: no todo ou em parte, e onde se produziu ou deveria produzir-se o resultado.`],
      ['p', `O macete: se, de alguma forma, o crime tocou o Brasil (a conduta ou o resultado aconteceu aqui), vale a lei brasileira.`],
      ['h', `Quadro comparativo`],
      ['ul', [
        `Momento do crime (art. 4º): teoria da atividade.`,
        `Lugar do crime (art. 6º): teoria da ubiquidade ou mista.`,
        `Conflitos de lugar dentro do Brasil: competência e jurisdição do Código de Processo Penal.`
      ]],
      ['h', `Pegadinha`],
      ['p', `Quando a banca cobrar o lugar do crime, não responda atividade (essa é do tempo). E quando o caso for só interno, entre Justiça Federal e Estadual ou entre Estados, a resposta não está nas teorias do Código Penal.`],
      ['h', `Resumo de revisão`],
      ['ul', [
        `Objetivos: definir onde ocorreu o crime e se a lei brasileira se aplica a ele.`,
        `Só se usa a lei penal no espaço quando o crime atinge mais de um país (internacionalidade).`,
        `Conflitos internos: Código de Processo Penal (competência e jurisdição).`,
        `Art. 6º: ubiquidade, ou seja, lugar da ação ou omissão e lugar do resultado.`,
        `Se o crime tocou o Brasil de alguma forma, vale a lei brasileira.`
      ]]
    ],
    5: [
      ['h', `Lei penal no espaço · Territorialidade e conceito de território`],
      ['p', `O Código Penal divide as possibilidades de aplicação da lei brasileira no espaço em três categorias: territorialidade, extraterritorialidade incondicionada e extraterritorialidade condicionada. Esta lição trata da primeira.`],
      ['h', `A regra: territorialidade (art. 5º)`],
      ['p', `A territorialidade é a regra: aplica-se a lei penal brasileira ao crime cometido dentro do território nacional, a não ser que haja convenção, tratado ou regra de direito internacional trazendo norma diferente. Exemplo da exceção: embaixadores estrangeiros que cometem crime no Brasil são processados em seu país de origem por força da imunidade diplomática, que é uma norma de direito internacional.`],
      ['h', `O que é território nacional`],
      ['p', `Para o legislador, o território divide-se em dois tipos:`],
      ['ul', [
        `Território propriamente dito: a superfície terrestre, o mar territorial, as águas interiores e o espaço aéreo acima do território.`,
        `Território por extensão (ou território ficto): as embarcações e aeronaves brasileiras públicas ou a serviço do governo brasileiro, onde quer que estejam, e as embarcações e aeronaves privadas matriculadas no Brasil que se encontrem em alto-mar ou no espaço aéreo sobre o alto-mar.`
      ]],
      ['h', `Navios e aeronaves: o esquema de resolução`],
      ['ol', [
        `O navio ou avião pertence a um governo (público ou a serviço do governo)? Aplica-se a lei penal do país a que pertence, onde quer que esteja.`,
        `É privado? Em regra, aplica-se a lei penal do país onde ele estiver, se for mar territorial ou espaço aéreo sobre um país.`,
        `Exceção para o privado: se estiver em alto-mar ou no espaço aéreo sobre o alto-mar, vale a lei do país em que está matriculado.`
      ]],
      ['p', `Complemento do art. 5º, §2º: também se aplica a lei brasileira aos crimes praticados a bordo de aeronaves ou embarcações estrangeiras de propriedade privada, estando aquelas em pouso no território nacional ou em voo no espaço aéreo correspondente, e estas em porto ou mar territorial do Brasil. Isso decorre da mesma regra do privado: vale a lei do local onde ele está.`],
      ['h', `Pegadinha`],
      ['p', `Não confunda: o status de navio ou avião privado em alto-mar não remete à lei do local (não há país), e sim à do país de matrícula. E a regra da territorialidade ressalva tratados, convenções e regras de direito internacional, como a imunidade diplomática.`],
      ['h', `Resumo de revisão`],
      ['ul', [
        `Territorialidade é a regra: lei brasileira para crimes cometidos no território nacional, ressalvados tratados, convenções e normas de direito internacional.`,
        `Exemplo de exceção: embaixador estrangeiro, processado no país de origem por imunidade diplomática.`,
        `Território propriamente dito: terra, mar territorial, águas interiores e espaço aéreo.`,
        `Território por extensão: navios e aeronaves públicos ou a serviço do governo brasileiro; privados brasileiros em alto-mar ou espaço aéreo sobre ele.`,
        `Privado: lei do país onde está; em alto-mar, lei do país de matrícula.`
      ]]
    ],
    6: [
      ['h', `Lei penal no espaço · Extraterritorialidade incondicionada (art. 7º, I)`],
      ['p', `Extraterritorialidade é a aplicação da lei penal brasileira a crime cometido no estrangeiro. Ela se divide em incondicionada e condicionada. A incondicionada é aquela que sujeita o agente à lei brasileira embora o crime tenha sido cometido no estrangeiro, e a aplicação não depende de nenhuma condição: são situações em que a lei brasileira sempre será aplicada.`],
      ['h', `As quatro situações do art. 7º, I`],
      ['ol', [
        `Crimes contra a vida ou a liberdade do Presidente da República.`,
        `Crimes contra o patrimônio ou a fé pública de qualquer ente da República (União, Estado, Município, Distrito Federal, empresas públicas e demais entidades públicas da lista do art. 7º, I, b).`,
        `Crimes contra a administração pública, por quem está a seu serviço.`,
        `Crime de genocídio, quando o agente for brasileiro ou domiciliado no Brasil.`
      ]],
      ['h', `Consequência`],
      ['p', `Nessas quatro situações, a lei penal brasileira será aplicada qualquer que seja o país onde ocorreu o delito e ainda que o indivíduo seja condenado ou absolvido no estrangeiro (art. 7º, §1º). Haverá aplicação da lei brasileira, quaisquer que sejam as circunstâncias. Se o Estado brasileiro conseguir capturar o autor, ele será submetido ao Código Penal brasileiro.`],
      ['h', `Como memorizar`],
      ['p', `Pense em quem o Brasil protege diretamente: o chefe do Estado (Presidente), o patrimônio e a fé pública dos entes públicos, o bom funcionamento da administração pública, e a humanidade, no caso de genocídio (aqui com a exigência de o agente ser brasileiro ou domiciliado no Brasil). Nesses casos, o interesse nacional é tão forte que o Brasil não exige condições.`],
      ['h', `Pegadinha`],
      ['p', `Só o genocídio tem requisito de pessoa (brasileiro ou domiciliado). Nos demais, não importa a nacionalidade do autor. E, ao contrário do que ocorre na condicionada, a absolvição ou condenação no exterior não afasta a lei brasileira.`],
      ['h', `Resumo de revisão`],
      ['ul', [
        `Incondicionada: lei brasileira sempre, sem depender de condições.`,
        `Quatro casos: Presidente (vida ou liberdade), patrimônio ou fé pública de entes públicos, administração pública por quem a serve, genocídio (agente brasileiro ou domiciliado).`,
        `Aplica-se ainda que o agente tenha sido absolvido ou condenado no estrangeiro.`,
        `Capturado o autor, ele responde pelo Código Penal brasileiro.`
      ]]
    ],
    7: [
      ['h', `Lei penal no espaço · Extraterritorialidade condicionada (art. 7º, II e §2º)`],
      ['p', `A extraterritorialidade condicionada acontece mediante condições. É a terceira categoria da lei penal no espaço e exige que você saiba dois conjuntos: as hipóteses (o que se aplica) e as condições (o que precisa acontecer).`],
      ['h', `As três hipóteses do art. 7º, II`],
      ['ol', [
        `Crimes que, por tratado ou convenção, o Brasil se obrigou a reprimir.`,
        `Crimes praticados por brasileiro.`,
        `Crimes praticados em aeronaves ou embarcações brasileiras, mercantes ou de propriedade privada, quando em território estrangeiro e aí não sejam julgados.`
      ]],
      ['h', `As cinco condições (art. 7º, §2º), todas necessárias`],
      ['ol', [
        `O agente precisa entrar em território nacional.`,
        `O fato precisa ser punível também no país em que foi praticado.`,
        `O crime deve estar incluído entre aqueles em que a lei brasileira autoriza a extradição.`,
        `O agente não pode ter sido absolvido no estrangeiro nem ter cumprido a pena lá.`,
        `O agente não pode ter sido perdoado no estrangeiro nem estar extinta a punibilidade, segundo a lei mais favorável.`
      ]],
      ['p', `Em resumo, as hipóteses são três e as condições são cinco; só havendo a hipótese e todas as condições se aplica a lei brasileira.`],
      ['h', `Complemento do texto da lei (art. 7º, §3º)`],
      ['p', `Aplica-se ainda a lei brasileira ao crime cometido por estrangeiro contra brasileiro fora do Brasil, se, reunidas as condições do §2º, não foi pedida ou foi negada a extradição e houve requisição do Ministro da Justiça.`],
      ['h', `Quadro comparativo: incondicionada x condicionada`],
      ['ul', [
        `Incondicionada (art. 7º, I): quatro hipóteses; a lei brasileira se aplica sempre, ainda que o agente tenha sido absolvido ou condenado no exterior.`,
        `Condicionada (art. 7º, II): três hipóteses; só se aplica se estiverem presentes as cinco condições, entre elas não ter sido absolvido, não ter cumprido a pena, nem ter sido perdoado no exterior.`
      ]],
      ['h', `Pegadinha`],
      ['p', `Se a alternativa disser que a lei brasileira se aplica a crime cometido por brasileiro no exterior sem nenhuma condição, está errada: é hipótese condicionada, e o agente precisa ao menos entrar no território nacional. Se disser que, na incondicionada, a lei brasileira exige que o fato seja punível no outro país, também está errada.`],
      ['h', `Resumo de revisão`],
      ['ul', [
        `Condicionada: depende de condições.`,
        `Hipóteses (art. 7º, II): tratado ou convenção, crime praticado por brasileiro, crime em aeronave ou embarcação brasileira (mercante ou privada) em território estrangeiro, sem julgamento lá.`,
        `Condições (art. 7º, §2º): entrar no território nacional; fato punível também no país de origem; crime sujeito à extradição pela lei brasileira; agente não absolvido nem tendo cumprido pena no exterior; agente não perdoado nem com punibilidade extinta.`,
        `Resumo das três categorias: territorialidade (regra), extraterritorialidade incondicionada e extraterritorialidade condicionada.`
      ]]
    ]
  };

  window.PCPE_QUESTOES[topic] = [
    {
      text: `Segundo o art. 1º do Código Penal, a lei penal que define crimes e comina penas:`,
      options: [
        `pode retroagir sempre que o Estado precisar reprimir a conduta ilícita, mesmo em prejuízo do réu.`,
        `deve existir antes do fato, e só pode retroagir para beneficiar o réu.`,
        `pode ser criada depois do fato, desde que a pena seja branda.`,
        `aplica-se apenas à pena, e não à definição do crime.`
      ],
      correct: 1,
      exp: `O art. 1º exige lei anterior que defina o crime e prévia cominação legal da pena, e a lei só retroage para beneficiar o réu. A alternativa A inverte a garantia, a C permite lei posterior ao fato e a D separa pena de crime, quando a anterioridade vale para ambos.`
    },
    {
      text: `Fulano, com 17 anos, efetua disparos contra beltrano em 1º de janeiro. Em 3 de janeiro completa 18 anos e, em 5 de janeiro, beltrano morre em razão dos ferimentos. Aplicando o art. 4º do Código Penal, fulano:`,
      options: [
        `responde como imputável, pois era maior de 18 anos no momento do resultado.`,
        `responde como imputável, pois o Código adota a teoria da ubiquidade para o tempo do crime.`,
        `não responde por nada, pois a morte ocorreu quando ele já era maior de idade.`,
        `responde por ato infracional, pois o crime se considera praticado no momento da conduta, quando era menor.`
      ],
      correct: 3,
      exp: `O Código adotou a teoria da atividade: o crime é praticado no momento da ação ou omissão (1º de janeiro), e a imputabilidade se verifica nessa data. Como tinha 17 anos, responde por ato infracional pelo ECA. As demais tratam o resultado ou a ubiquidade como critérios do tempo, ou afastam toda responsabilidade, o que não é correto.`
    },
    {
      text: `Sobre as teorias do momento do crime, assinale a alternativa correta.`,
      options: [
        `A teoria do resultado considera praticado o crime no momento do resultado, e a da atividade no da conduta.`,
        `A teoria da ubiquidade considera praticado o crime apenas no momento da conduta.`,
        `A teoria da atividade considera praticado o crime no momento do resultado.`,
        `O Código Penal adotou a teoria do resultado para o momento do crime.`
      ],
      correct: 0,
      exp: `Atividade é a conduta; resultado é o resultado; ubiquidade ou mista é conduta e resultado. A B restringe a ubiquidade à conduta, a C troca atividade por resultado e a D atribui ao Código a teoria errada: o art. 4º adota a atividade.`
    },
    {
      text: `No dia do crime, a pena máxima prevista era de 20 anos. No dia seguinte, uma lei elevou o máximo para 30 anos. No julgamento, será aplicada a pena máxima de 20 anos, mesmo com a lei antiga já revogada. Esse fenômeno é chamado de:`,
      options: [
        `retroatividade da lei penal mais benéfica.`,
        `ultra-atividade da lei penal mais benéfica.`,
        `retroatividade da lei penal mais severa.`,
        `territorialidade da lei penal.`
      ],
      correct: 1,
      exp: `Ultra-atividade é a aplicação da lei mais benéfica, já revogada, aos fatos ocorridos durante sua vigência. Retroatividade seria aplicar lei posterior mais benéfica a fato anterior; a lei mais severa jamais retroage, e territorialidade pertence à lei penal no espaço.`
    },
    {
      text: `Uma questão de concurso pergunta se a Justiça Federal ou a Estadual deve processar certo crime ocorrido inteiramente no Brasil. Para resolvê-la, o candidato deve:`,
      options: [
        `aplicar a teoria da atividade do art. 4º.`,
        `aplicar a teoria do resultado.`,
        `usar as normas de competência e jurisdição do Código de Processo Penal, pois não é caso de lei penal no espaço.`,
        `aplicar a extraterritorialidade condicionada.`
      ],
      correct: 2,
      exp: `Os conflitos de lugar dentro do Brasil, como competência entre Justiça Federal ou Estadual, são resolvidos pelo Código de Processo Penal. As teorias e a extraterritorialidade só valem para crimes que envolvem mais de um país; a teoria da atividade é do tempo, não do lugar.`
    },
    {
      text: `Um crime teve a conduta praticada no Paraguai, mas o resultado se produziu em território brasileiro. Quanto ao lugar do crime, o Código Penal (art. 6º):`,
      options: [
        `exclui a lei brasileira, pois a conduta foi no exterior.`,
        `aplica a teoria da atividade e considera o crime praticado no Paraguai.`,
        `adota a ubiquidade: o crime também se considera praticado no Brasil, onde ocorreu o resultado.`,
        `remete a questão ao Código de Processo Penal, por envolver competência.`
      ],
      correct: 2,
      exp: `O art. 6º considera praticado o crime no lugar da ação ou omissão e também no do resultado (ubiquidade). Se o crime tocou o Brasil, vale a lei brasileira. A atividade é do momento; a competência interna é tema do CPP, mas aqui há dois países.`
    },
    {
      text: `Um navio privado de bandeira brasileira, matriculado no Brasil, encontra-se em alto-mar, e a bordo é praticado um crime. A lei aplicável é:`,
      options: [
        `a do país onde o navio estiver, em qualquer caso.`,
        `a lei brasileira, por ser território por extensão, uma vez que o navio privado brasileiro está em alto-mar.`,
        `nenhuma lei, por estar fora de qualquer território.`,
        `a lei do país do autor, sempre.`
      ],
      correct: 1,
      exp: `Embarcações e aeronaves privadas matriculadas no Brasil que se encontram em alto-mar (ou espaço aéreo sobre o alto-mar) são território por extensão e se submetem à lei do país de matrícula. A alternativa A vale para privados em mar territorial ou espaço aéreo de um país; C e D não têm base na regra.`
    },
    {
      text: `Um embaixador estrangeiro pratica crime no Brasil e, por força da imunidade diplomática, é processado em seu país de origem. Esse caso é exemplo de:`,
      options: [
        `extraterritorialidade incondicionada.`,
        `exceção à territorialidade, por norma de direito internacional.`,
        `aplicação da teoria da ubiquidade.`,
        `retroatividade da lei penal.`
      ],
      correct: 1,
      exp: `A territorialidade é a regra, mas ressalva convenções, tratados e normas de direito internacional; a imunidade diplomática é a exceção clássica. A extraterritorialidade incondicionada é a aplicação da lei brasileira a crimes cometidos fora, e ubiquidade e retroatividade são outros temas.`
    },
    {
      text: `Um brasileiro, no estrangeiro, mata o Presidente da República brasileiro. Sobre a aplicação da lei brasileira, é correto afirmar que:`,
      options: [
        `depende de o agente entrar no território nacional e de o fato ser punível no país onde ocorreu.`,
        `não se aplica, se o agente já foi absolvido no estrangeiro.`,
        `aplica-se apenas se o agente for brasileiro ou domiciliado no Brasil.`,
        `aplica-se a lei brasileira sem depender de condições, ainda que o agente tenha sido absolvido ou condenado no exterior.`
      ],
      correct: 3,
      exp: `Crimes contra a vida ou a liberdade do Presidente são hipótese de extraterritorialidade incondicionada (art. 7º, I): a lei brasileira se aplica sem depender de condições, mesmo com absolvição ou condenação no exterior. A, B e C trazem condições, próprias da condicionada, ou exigência de nacionalidade só do genocídio.`
    },
    {
      text: `Para que a lei brasileira se aplique a crime praticado por brasileiro no exterior (extraterritorialidade condicionada), é condição:`,
      options: [
        `o agente ter sido absolvido no país estrangeiro.`,
        `o agente ter sido perdoado no país estrangeiro.`,
        `o fato ser punível também no país em que foi praticado.`,
        `o agente ter cumprido a pena no exterior.`
      ],
      correct: 2,
      exp: `Entre as condições do art. 7º, §2º, estão entrar o agente no território nacional, ser o fato punível também no país de origem e estar o crime entre os que autorizam a extradição. Absolvição, perdão ou cumprimento da pena no exterior são situações que afastam a lei brasileira, pois exige-se o contrário.`
    }
  ];
})();
