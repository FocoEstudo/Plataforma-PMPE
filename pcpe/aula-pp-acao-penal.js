(function () {
  'use strict';
  window.PCPE_TOPIC_GUIDES = window.PCPE_TOPIC_GUIDES || {};
  window.PCPE_DEEPENING = window.PCPE_DEEPENING || {};
  window.PCPE_QUESTOES = window.PCPE_QUESTOES || {};
  const topic = 'Ação penal e sujeitos do processo';
  const base = window.PCPE_TOPIC_GUIDES[topic] || {};
  window.PCPE_TOPIC_GUIDES[topic] = Object.assign({}, base, {
    lessons: [
      [
        `Conceito de ação penal`,
        `Ação penal é o instrumento que o Estado tem para a persecução penal: processar um possível criminoso e, ao final, condenar o culpado ou absolver o inocente. Ela vem depois da investigação e se submete às garantias constitucionais do acusado: devido processo legal, contraditório, ampla defesa, pessoalidade e proporcionalidade da pena. O tema é o mesmo no CPP e no Código Penal.`,
        `Alguém praticou um crime e foi preso em flagrante. O Estado não pode simplesmente aplicar "5 anos de prisão": é preciso investigação, devido processo legal e, depois da investigação, a persecução promovida por meio da ação penal.`,
        `Fala-se em "possível" ou "suposto" criminoso porque vigora a presunção de inocência. Ação penal não é condenação: ela é o instrumento para chegar a uma condenação justa ou a uma absolvição.`
      ],
      [
        `Espécies: ação penal pública e privada; denúncia e queixa-crime`,
        `No Brasil há duas grandes espécies de ação penal. Na pública, o titular é o Ministério Público (o promotor de justiça) e a peça de acusação é a denúncia; é a regra. Na privada, o titular é o ofendido ou seu representante legal, por meio de advogado, e a peça é a queixa-crime; é a exceção.`,
        `Crime contra a honra (por exemplo, injúria): o interesse maior é da vítima, então a ação é privada. A vítima precisa contratar advogado e apresentar queixa-crime, pois não adianta esperar que o promotor aja. Na delegacia, a vítima leva a notícia-crime para o registro do boletim de ocorrência.`,
        `Termos técnicos trocados são pegadinha: denúncia é peça do Ministério Público (ação pública); queixa-crime é peça do ofendido ou representante legal (ação privada). Quando o crime não diz nada sobre a ação penal, ela é pública incondicionada.`
      ],
      [
        `Ação penal pública incondicionada`,
        `É a regra no Brasil. Se o crime não menciona nada sobre ação penal, ela é pública incondicionada. O promotor não depende de nenhuma condição para denunciar: precisa apenas de justa causa, que é o binômio indícios de autoria e prova da materialidade. Presente a justa causa, incide o princípio da obrigatoriedade: o promotor é obrigado a denunciar.`,
        `Em um roubo, o delegado instaura o inquérito e a investigação busca justa causa: apontar o suposto autor (indícios de autoria) e provar que o crime aconteceu (materialidade). Ao receber o inquérito com essas duas informações, o promotor é obrigado a denunciar, sem precisar da opinião da vítima, do juiz ou do delegado.`,
        `São de ação pública incondicionada a maioria esmagadora dos crimes, praticamente todos os graves (roubo, homicídio, latrocínio, furto qualificado), e também todas as contravenções penais. Tudo o que vem depois é exceção à regra.`
      ],
      [
        `Ação penal pública condicionada à representação do ofendido`,
        `É exceção: o Ministério Público continua titular da ação, mas só pode denunciar se a vítima manifestar interesse, por meio da representação. A representação não tem forma rígida, está sujeita a prazo decadencial de seis meses contados do conhecimento da autoria e pode ser retratada até o oferecimento da denúncia. Em caso de morte ou ausência da vítima, pode ser exercida por cônjuge, ascendente, descendente ou irmão (CAD).`,
        `Crime de ameaça: alguém diz "vou te matar amanhã". Sem representação da vítima, o promotor não pode denunciar. Se a vítima ameaçada descobre o autor no dia 10, o prazo de seis meses conta do dia 10 e não do dia da ameaça. Se ela morrer dentro do prazo, entra a linha sucessória: cônjuge, depois ascendentes, depois descendentes, e por último irmão.`,
        `Pegadinhas: o prazo não conta da data do crime e sim do conhecimento da autoria; a retratação vai até o oferecimento da denúncia (e não até o recebimento); passados seis meses sem representação, ocorre decadência e extinção da punibilidade.`
      ],
      [
        `Ação penal pública condicionada à requisição do Ministro da Justiça`,
        `É a outra exceção na ação pública, em que há interesse político. O Ministério Público continua titular, mas só pode denunciar se o Ministro da Justiça requisitar. Se ele não requisitar, o Ministério Público fica de mãos atadas.`,
        `Crime contra a honra do Presidente da República: se o Ministério Público denunciasse por conta própria, pareceria um estado de censura contra quem o xingou. Por isso cabe ao Ministro da Justiça, homem de confiança do Presidente, requisitar a denúncia; se requisitar, é uma carta branca para o promotor denunciar.`,
        `A condicionada à requisição é do Ministro da Justiça, e não de prefeito, município ou órgão ofendido. Mesmo condicionada, a ação continua pública: a peça é a denúncia e o titular é o Ministério Público.`
      ],
      [
        `Ação penal privada propriamente dita e personalíssima`,
        `Na ação penal privada há maior interesse do ofendido, que, ou seu representante legal, é o titular e apresenta queixa-crime. A propriamente dita (ou comum) é a regra da ação privada: se a vítima morre ou está ausente, o CAD (cônjuge, ascendente, descendente, irmão) pode apresentar a queixa. A personalíssima é aquela em que só a vítima pode apresentar a queixa: não existe CAD.`,
        `Propriamente dita: calúnia, difamação e injúria, em que a vítima apresenta queixa-crime; se ela falece, o CAD pode exercê-la, no mesmo prazo decadencial de seis meses contados do conhecimento da autoria. Personalíssima: o único crime é o de ocultação de impedimento a casamento. O noivo já casado esconde isso da noiva e se casa com ela; o filho dela, maior de idade, não pode apresentar a queixa, porque só a vítima pode.`,
        `Na personalíssima, se a vítima morrer, estiver ausente ou não quiser agir, há extinção da punibilidade e o criminoso é beneficiado. É o único crime da espécie; cai pouco em concurso, mas a diferença para a propriamente dita (CAD) é o que a prova cobra.`
      ],
      [
        `Ação penal privada subsidiária da pública e quadro-resumo`,
        `Nasce pública e, pela inércia do Ministério Público, que não denuncia no prazo, ganha a possibilidade de queixa-crime do ofendido. Está prevista na Constituição (art. 5º) e decorre da inafastabilidade do provimento jurisdicional. A natureza continua pública: muda apenas a legitimidade para a iniciativa. O prazo decadencial é de seis meses, contados do término do prazo do Ministério Público para denunciar.`,
        `Roubo em que o Ministério Público recebe o inquérito e o promotor fica inerte: o prazo para denunciar é de cinco dias se o indiciado está preso e quinze se está solto. Esgotado esse prazo, a vítima, por advogado, tem seis meses para apresentar queixa-crime subsidiária. O promotor é intimado e pode aceitar a queixa, aditá-la, ou repudiá-la e oferecer denúncia; se o juiz recebe a acusação, o Ministério Público retoma a titularidade.`,
        `Duas pegadinhas: o prazo decadencial de seis meses conta do término do prazo do MP, e não do conhecimento do autor; e o promotor pode denunciar tardiamente, mesmo após o prazo da vítima, enquanto o crime não tiver prescrito. A vítima, porém, não pode apresentar queixa depois dos seis meses.`
      ],
      [
        `Questões resolvidas I: retratação, abuso de autoridade e subsidiária`,
        `Duas questões recentes mostram como a banca cobra o tema. A primeira cobra o momento até o qual a representação é retratável (art. 25 do CPP): até o oferecimento da denúncia. A segunda mistura ação pública incondicionada, inércia do Ministério Público, ação privada subsidiária e prazo decadencial de seis meses.`,
        `Questão 1 (2024): "Conforme o art. 25 do CPP, na ação penal pública a representação será irretratável depois...": a resposta é o oferecimento da denúncia, pois o promotor já "moveu a máquina pública". Questão 2 (2024): o servidor que expulsou a pessoa do atendimento, abuso de autoridade, crime de ação pública incondicionada; o MP ficou inerte; um ano depois, um familiar prestou queixa; a queixa não foi acolhida porque já tinha passado o prazo de seis meses.`,
        `Não acrescente nem retire informações do enunciado: use apenas o que a banca trouxe. O enunciado da questão 2 era mal formulado, mas a regra era clara: seis meses do término do prazo do MP, e já se passara um ano.`
      ],
      [
        `Questões resolvidas II: subsidiária, decadência e crimes de ação pública`,
        `Estas três questões testam a natureza pública da ação subsidiária, a decadência do direito de queixa e o conhecimento das peças e titulares das espécies. A chave é lembrar o mapa mental: ação pública, titular Ministério Público, peça denúncia; ação privada, titular ofendido, peça queixa-crime.`,
        `Questão 3 (2023, juiz): roubo de Orestes contra Saulo, MP inerte, Saulo ajuíza a subsidiária, que é recebida, e depois deixa de dar andamento ao processo por seis meses; a resposta correta é "o Ministério Público retoma a ação como parte principal", pois não há perempção, decadência, renúncia ou perdão. Questão 4: queixa-crime apresentada 12 meses após o conhecimento da autoria; deve ser rejeitada por decadência do direito de queixa. Questão 5: nos crimes de ação pública, a ação é promovida por denúncia do Ministério Público.`,
        `Perempção, renúncia e perdão são causas de extinção da punibilidade da ação privada; na subsidiária, a ação continua pública, então eles não incidem. Trocas de termos (queixa x denúncia; decadência x perempção x prescrição) são a principal pegadinha.`
      ]
    ],
    practice: [
      `Diferencie ação penal pública e privada quanto ao titular, à peça e à regra/exceção.`,
      `O que é justa causa e o que significa o princípio da obrigatoriedade?`,
      `Explique o prazo, o termo inicial e o limite da retratação da representação.`,
      `Qual a diferença entre ação penal privada propriamente dita e personalíssima?`,
      `Como nasce a ação penal privada subsidiária da pública, qual é seu prazo e por que sua natureza continua sendo pública?`
    ],
    answers: [
      `Pública: titular é o Ministério Público (promotor), peça é a denúncia; é a regra. Privada: titular é o ofendido ou representante legal, por advogado, peça é a queixa-crime; é a exceção.`,
      `Justa causa é o binômio indícios de autoria e prova da materialidade. Com ela, na ação pública incondicionada, o promotor é obrigado a denunciar (obrigatoriedade), sem depender da opinião da vítima, do juiz ou do delegado.`,
      `Prazo decadencial de seis meses, contados do conhecimento da autoria (e não da data do crime). A retratação é possível dentro do prazo e até o oferecimento da denúncia, não do recebimento. Passado o prazo sem representação, há decadência e extinção da punibilidade.`,
      `Na propriamente dita, se a vítima morrer ou estiver ausente, o CAD (cônjuge, ascendente, descendente, irmão) pode agir. Na personalíssima (ocultação de impedimento a casamento) só a vítima pode apresentar a queixa e não há CAD; sem ela, extingue-se a punibilidade.`,
      `Nasce da inércia do Ministério Público, que não oferece denúncia no prazo (art. 5º da CF, inafastabilidade). A vítima tem seis meses, contados do término do prazo do MP. A natureza segue pública: só amplia a legitimidade para a iniciativa; o MP pode aditar, repudiar e oferecer denúncia, e retoma a titularidade se a queixa é recebida.`
    ]
  });
  window.PCPE_DEEPENING[topic] = {
    1: [
      ['h', 'O que é ação penal'],
      ['p', `Ação penal é o instrumento que o Estado tem para a persecução penal: processar um possível criminoso e, ao final, condenar um culpado ou absolver um inocente. Às vezes um inocente está respondendo criminalmente, e a ação penal serve também para absolvê-lo. E o culpado merece uma pena justa, e é aí que entra a ação penal. O tema é o mesmo seja no CPP, seja no Código Penal, e muitos artigos são parecidos.`],
      ['h', 'Garantias do acusado'],
      ['p', `A Constituição Federal traz vários instrumentos que protegem o sujeito e lhe dão garantias para se defender. Entre eles:`],
      ['ul', [
        `devido processo legal;`,
        `contraditório;`,
        `ampla defesa;`,
        `princípio da pessoalidade da pena;`,
        `penas proporcionais.`
      ]],
      ['p', `Por causa dessas garantias, o Estado não pode simplesmente sair aplicando pena a quem acabou de praticar um crime. Um exemplo: alguém é preso em flagrante e não se pode dizer "vamos aplicar cinco anos de prisão". É preciso investigação e devido processo legal. A persecução penal, depois da investigação, é promovida por meio da ação penal.`],
      ['h', 'Posição da ação penal na persecução'],
      ['p', `Pense na sequência: crime, investigação (inquérito), ação penal. A ação penal é o instrumento do Estado para processar criminalmente alguém que é apenas um possível criminoso, e por isso vigora a presunção de inocência.`],
      ['h', 'Resumo de revisão'],
      ['ul', [
        `Ação penal = instrumento do Estado para a persecução penal (processar, condenar o culpado ou absolver o inocente).`,
        `Vem após a investigação e respeita devido processo legal, contraditório, ampla defesa, pessoalidade e proporcionalidade das penas.`,
        `O processado é possível criminoso: presunção de inocência.`,
        `O tema é o mesmo no CPP e no Código Penal.`
      ]]
    ],
    2: [
      ['h', 'As duas grandes espécies'],
      ['p', `No Brasil existem duas grandes espécies de ação penal: a pública e a privada. A diferença está em quem é o titular e na peça acusatória que ele utiliza.`],
      ['h', 'Ação penal pública'],
      ['ul', [
        `Titular: Ministério Público, representado por seu membro, o promotor de justiça, que é quem vai denunciar o criminoso.`,
        `Peça de acusação: denúncia, o instrumento acusatório do promotor.`,
        `É a regra no Brasil: há grande interesse do Estado em punir.`,
        `Quando o crime, no Código Penal ou no CPP, não diz nada sobre ação penal, ele é perseguido por ação penal pública incondicionada.`
      ]],
      ['h', 'Ação penal privada'],
      ['ul', [
        `Titular: o próprio ofendido (a vítima) ou seu representante legal, por meio de advogado.`,
        `Peça de acusação: queixa-crime.`,
        `É a exceção: em alguns crimes há interesse maior do particular do que do Estado. Exemplo: nos crimes contra a honra, a honra é da vítima.`,
        `Não adianta esperar que o promotor faça algo: a vítima precisa contratar advogado e apresentar a queixa-crime.`
      ]],
      ['h', 'Termos técnicos que a banca troca'],
      ['p', `Quem não é do direito costuma dizer "fui à delegacia fazer a denúncia" ou "fazer uma queixa". Tecnicamente está errado. Denúncia quem faz é o promotor, na ação pública. Queixa-crime é apresentada pela vítima ou seu representante, por advogado, na ação privada.`],
      ['p', `O que a pessoa leva à delegacia é a notícia-crime: informa o fato para que o boletim de ocorrência seja registrado.`],
      ['h', 'Resumo de revisão'],
      ['ul', [
        `Duas espécies: pública (regra) e privada (exceção).`,
        `Pública: titular MP; peça denúncia.`,
        `Privada: titular ofendido ou representante legal; peça queixa-crime, por advogado.`,
        `Notícia-crime: informação levada à delegacia para o boletim de ocorrência.`,
        `Cada espécie tem suas subespécies, vistas nas próximas lições.`
      ]]
    ],
    3: [
      ['h', 'Regra: pública incondicionada'],
      ['p', `Exemplos de crimes de ação penal pública incondicionada: roubo, homicídio, latrocínio e furto qualificado. Quando o crime em si não fala nada sobre ação penal, ele é de ação pública incondicionada. A expressão "incondicionada" é um recado ao promotor: este é um crime em que ele não depende de nenhuma condição para denunciar.`],
      ['h', 'Justa causa'],
      ['p', `Ao promotor basta a justa causa, que abrange um binômio:`],
      ['ul', [
        `indícios de autoria: apontar um suposto criminoso, ainda que o delegado tenha certeza, porque vigora a presunção de inocência;`,
        `prova da materialidade: a prova de que o crime aconteceu.`
      ]],
      ['h', 'Exemplo: roubo'],
      ['p', `Instaurado o inquérito policial, o objetivo do delegado é atingir a justa causa: num crime de roubo, provar que o crime aconteceu e apontar o suposto autor. Reunidas as duas informações, ele envia o inquérito ao Ministério Público.`],
      ['h', 'Princípio da obrigatoriedade'],
      ['p', `A partir do momento em que o promotor recebe o inquérito com justa causa, incide o princípio da obrigatoriedade: ele é obrigado a denunciar. Não precisa da opinião da vítima, do Estado, do juiz, do delegado, de ninguém. Se tem indícios de autoria e prova da materialidade, ele é obrigado a denunciar.`],
      ['h', 'Abrangência'],
      ['ul', [
        `A maioria esmagadora dos crimes no Brasil é de ação pública incondicionada, praticamente todos os crimes graves.`,
        `Todas as contravenções penais também são perseguidas por ação pública incondicionada.`,
        `Tudo o que vem depois (pública condicionada à representação, pública condicionada à requisição do Ministro da Justiça, privada personalíssima, privada propriamente dita, privada subsidiária da pública) é exceção à regra.`
      ]],
      ['h', 'Resumo de revisão'],
      ['ul', [
        `Regra: ação penal pública incondicionada.`,
        `Sem condição para o promotor denunciar; basta justa causa (indícios de autoria + prova da materialidade).`,
        `Princípio da obrigatoriedade: havendo justa causa, o promotor é obrigado a denunciar.`,
        `Crimes graves e todas as contravenções penais.`
      ]]
    ],
    4: [
      ['h', 'Por que existe a condição'],
      ['p', `A primeira exceção dentro da ação pública é a condicionada. São casos em que há duplo interesse: o Estado continua titular (por isso é o Ministério Público), mas reconhece que pode haver interesse maior da própria vítima. Se a vítima não quiser dar início, nem se mexe com isso. É a ação pública condicionada à representação do ofendido.`],
      ['p', `Exemplo clássico: crime de ameaça. Alguém diz "eu vou te matar amanhã". Mesmo que o titular da ação seja o promotor, ele precisa da representação da vítima. Representar é demonstrar o interesse na ação penal.`],
      ['h', 'Forma da representação'],
      ['p', `Não há forma rígida prevista em lei. Pode ser verbal ou escrita. Qualquer manifestação de vontade em que a vítima queira que o criminoso seja responsabilizado é representação: no boletim de ocorrência, no inquérito, em uma carta ao Ministério Público ou verbalmente, com alguém reduzindo a termo.`],
      ['h', 'Prazo: seis meses (decadência)'],
      ['p', `O prazo para representar é de seis meses, o chamado prazo decadencial: um prazo fatal. Passado esse prazo sem representar, ocorre a extinção da punibilidade, e o sujeito não será mais punido. Se o autor te ameaçou hoje, você sabe quem é e nada faz, um ano depois já não adianta: houve decadência.`],
      ['p', `Termo inicial: pegadinha. O prazo não começa a contar do crime, e sim do conhecimento da autoria do fato. Exemplo: alguém ameaçou pela internet, com perfil falso. Se contasse do crime, beneficiaria só o criminoso. Se a ameaça foi no dia 1 e a vítima descobriu quem foi no dia 10, os seis meses contam do dia 10.`],
      ['h', 'Retratação'],
      ['p', `A vítima pode se retratar: representa e depois, arrependida, retira a representação, desde que dentro do prazo de seis meses. Além disso, a retratação só é possível até o oferecimento da denúncia pelo promotor. Depois que o promotor denunciou, ele já moveu a máquina pública e a ação segue por parte do Estado: não dá mais para voltar atrás.`],
      ['p', `Cuidado com o termo: é até o oferecimento da denúncia, e não até o recebimento. É o que diz o art. 25 do CPP.`],
      ['h', 'Morte ou ausência: o CAD'],
      ['p', `Se a vítima ameaçada morre dois dias depois, mas ainda dentro dos seis meses, abre-se uma linha sucessória para evitar impunidade: o famoso CAD (cônjuge, ascendentes, descendentes ou irmão). A ordem é contínua: primeiro o cônjuge; na ausência dele, os ascendentes (pai e mãe); depois os descendentes; e por último o irmão. Um não pode furar a fila do outro.`],
      ['h', 'Resumo de revisão'],
      ['ul', [
        `Pública condicionada à representação: MP é titular, mas depende da vítima (exemplo: ameaça).`,
        `Representação sem forma rígida, verbal ou escrita.`,
        `Prazo decadencial de 6 meses contados do conhecimento da autoria; decadência = extinção da punibilidade.`,
        `Retratação até o oferecimento da denúncia (não o recebimento).`,
        `Morte ou ausência: CAD, em ordem (cônjuge, ascendentes, descendentes, irmão).`
      ]]
    ],
    5: [
      ['h', 'A segunda exceção da ação pública'],
      ['p', `A ação penal pública condicionada à requisição do Ministro da Justiça é a outra exceção. A diferença está no interesse envolvido: aqui há interesses políticos. O Ministério Público continua titular, mas depende de uma requisição.`],
      ['h', 'Exemplo: crimes contra a honra do Presidente da República'],
      ['p', `Se alguém xinga o Presidente (injúria), o Ministério Público denunciar por conta própria poderia dar a impressão de estado de censura, o que seria um problema político. Por isso cabe ao Ministro da Justiça, homem de confiança do Presidente, requisitar a denúncia.`],
      ['ul', [
        `Se o Ministro da Justiça requisitar, é como dar carta branca ao promotor: este homem tem que ser denunciado.`,
        `Se não requisitar, o Ministério Público fica de mãos atadas.`
      ]],
      ['p', `Na prática, a requisição quase não ocorre, justamente pelo interesse político: imagine se todos fossem processados por ofender o Presidente da República.`],
      ['h', 'Ponto de atenção'],
      ['p', `Quem requisita é o Ministro da Justiça, e não município, Estado ou órgão ofendido. Na prova, quando houver interesse do ente público em um crime em detrimento de seu patrimônio, a ação continua sendo pública incondicionada, sem requisição desse ente.`],
      ['h', 'Resumo de revisão'],
      ['ul', [
        `Pública condicionada à requisição do Ministro da Justiça: interesse político.`,
        `Exemplo: crimes contra a honra do Presidente da República.`,
        `Titular continua sendo o MP; a peça é a denúncia.`,
        `Sem requisição, o MP não pode denunciar.`
      ]]
    ],
    6: [
      ['h', 'Ação penal privada: titular e peça'],
      ['p', `Na ação penal privada há o maior interesse do ofendido, por isso o ofendido ou o seu representante legal são os titulares e exercem a acusação por meio da queixa-crime. Essa é a peça acusatória da ação penal privada.`],
      ['h', 'Propriamente dita (comum)'],
      ['p', `A ação penal privada propriamente dita é a ação penal privada normal, a regra da ação privada. Exemplo: os crimes contra a honra (calúnia, difamação e injúria) são perseguidos por ação privada, em que o ofendido oferece a acusação por meio da queixa-crime.`],
      ['ul', [
        `Se a vítima falecer ou estiver ausente, existe o CAD: cônjuge, ascendente, descendente ou irmão podem exercer a queixa-crime.`,
        `Aqui também vale o prazo decadencial de seis meses, contados do conhecimento da autoria.`
      ]],
      ['h', 'Personalíssima'],
      ['p', `Só existe um crime no Brasil de ação penal privada personalíssima: o de ocultação de impedimento a casamento. Esse crime cai pouco em concurso, mas o exemplo ajuda a entender a diferença.`],
      ['p', `Exemplo: bigamia é crime; quem já é casado não pode casar de novo. Imagine o sujeito casado no Rio de Janeiro que, em São Paulo, oculta de sua noiva que já tem um casamento. Esse segundo casamento é nulo. Ela compra o vestido, prepara a lua de mel e se casa. A partir do segundo casamento houve o crime de ocultação de impedimento a casamento, e a segunda esposa é a vítima.`],
      ['p', `Ela descobre na lua de mel que o casamento era nulo, e fica tão mal que sofre um infarto e morre. O filho dela, maior de idade, fruto de outro relacionamento, indignado, contrata advogado para apresentar queixa-crime. Ele não pode. Esse é o detalhe: a ação é personalíssima porque só a vítima pode apresentar a queixa-crime. Não existe CAD.`],
      ['p', `Se a vítima morrer, estiver ausente ou simplesmente não quiser fazer nada, há extinção da punibilidade, e o criminoso é beneficiado. Essa é a diferença para a propriamente dita, que tem a linha sucessória.`],
      ['h', 'Resumo de revisão'],
      ['ul', [
        `Privada: titular ofendido ou representante legal; peça queixa-crime.`,
        `Propriamente dita: calúnia, difamação e injúria; CAD em caso de morte ou ausência; prazo de 6 meses do conhecimento da autoria.`,
        `Personalíssima: só um crime (ocultação de impedimento a casamento); só a vítima; sem CAD; sem ela, extinção da punibilidade.`
      ]]
    ],
    7: [
      ['h', 'Por que é uma das mais cobradas'],
      ['p', `A ação penal privada subsidiária da pública está prevista na Constituição Federal, no art. 5º, que reúne os direitos e garantias fundamentais. Ela é uma das espécies mais cobradas em concurso.`],
      ['p', `Ela deveria estar listada na ação pública, porque nasce pública. Por inércia do Ministério Público, ela se torna privada, mas apenas quanto à iniciativa.`],
      ['h', 'Exemplo e prazo do Ministério Público'],
      ['p', `Imagine um roubo: a vítima é assaltada com arma na cabeça, há câmeras que identificam o criminoso, o inquérito reúne indícios de autoria e prova da materialidade e segue para o Ministério Público. O promotor tem prazo para denunciar: cinco dias se o indiciado está preso e quinze dias se está solto.`],
      ['p', `Se passam os quinze dias e o promotor fica inerte (omisso), nasce a possibilidade da ação subsidiária. O fundamento é o princípio constitucional da inafastabilidade do provimento jurisdicional: o judiciário não pode se omitir, e a vítima tem direito de provocá-lo.`],
      ['h', 'Prazo da vítima'],
      ['p', `Também há prazo decadencial de seis meses, mas atenção: não é do conhecimento do autor, e sim do término do prazo do Ministério Público para denunciar. A vítima contrata advogado e apresenta a queixa-crime dentro desse período. Se passar, perde a possibilidade de queixa subsidiária.`],
      ['h', 'A natureza continua pública'],
      ['ul', [
        `A ação permanece pública; só aumenta a legitimidade para a iniciativa. A vítima ganha legitimidade para acusar.`,
        `O promotor é intimado após a queixa. Ele pode aceitar a queixa, aditá-la (complementar), ou repudiá-la e oferecer denúncia.`,
        `Se o juiz recebe a acusação, o Ministério Público retoma a titularidade.`,
        `O promotor pode denunciar mesmo tardiamente (por exemplo, depois de um ano ou dois), enquanto o crime não estiver prescrito. A vítima, não: ela tem seis meses.`
      ]],
      ['p', `Em concurso, a questão costuma apenas contar prazos: colocam várias datas, e a vítima perdeu o prazo de seis meses e não pode mais apresentar queixa-crime subsidiária.`],
      ['h', 'Quadro-resumo de todas as espécies'],
      ['ul', [
        `Pública (regra): titular Ministério Público; peça denúncia. Subespécies: incondicionada (regra), condicionada à representação do ofendido e condicionada à requisição do Ministro da Justiça.`,
        `Privada (exceção): titular ofendido ou representante legal; peça queixa-crime. Subespécies: propriamente dita, personalíssima e subsidiária da pública.`,
        `Prazo decadencial de 6 meses, contados do conhecimento da autoria, para representação, requisição e ação privada.`,
        `Subsidiária: o mesmo prazo de 6 meses, mas contado a partir do esgotamento do prazo do MP para oferecer denúncia.`
      ]],
      ['h', 'Resumo de revisão'],
      ['ul', [
        `Subsidiária: nasce pública; a inércia do MP dá à vítima o direito de queixa (art. 5º da CF).`,
        `Prazo do MP: 5 dias (preso) ou 15 dias (solto); depois, 6 meses para a vítima.`,
        `Natureza continua pública; apenas a iniciativa muda.`,
        `O MP pode aditar, repudiar e denunciar, e retoma a titularidade se o juiz recebe.`,
        `Vítima fora do prazo não pode mais apresentar queixa; o MP pode denunciar até a prescrição.`
      ]]
    ],
    8: [
      ['h', 'Questão 1 (2024): retratação da representação'],
      ['p', `Enunciado: conforme o art. 25 do Código de Processo Penal, na ação penal pública a representação será irretratável, ou seja, não dá mais para voltar atrás, quando houver: (A) a instauração do inquérito policial; (B) o oferecimento da denúncia; (C) a renúncia ao direito de queixa; (D) o recebimento da denúncia.`],
      ['p', `Raciocínio: quem estudou de verdade costuma confundir "oferecimento" com "recebimento", mas a regra é o oferecimento. O promotor não é criança: ele trabalhou, moveu a máquina pública. Quando oferece a denúncia, já não cabe mais retratação da representação. Gabarito: oferecimento da denúncia (B).`],
      ['h', 'Questão 2 (2024): abuso de autoridade e ação subsidiária'],
      ['p', `Enunciado: um servidor público se negou a atender uma pessoa e a retirou do recinto de atendimento sem qualquer explicação ou motivo. O fato, entendido como abuso de autoridade, foi publicado na mídia, mas não houve ação do Ministério Público. Um ano após o ocorrido, um familiar da pessoa que necessitava de atendimento resolveu prestar queixa sobre o fato. A queixa não foi acolhida e processada. Por quê?`],
      ['ul', [
        `(A) Porque é de ação pública condicionada;`,
        `(B) Porque o Ministério Público não aceita queixa em ação pública;`,
        `(C) Porque já havia passado o prazo para a ação privada;`,
        `(D) Porque apenas o ofendido pode denunciá-la;`,
        `(E) Porque o que o servidor fez não é crime.`
      ]],
      ['p', `Raciocínio: não acrescente nem retire informação do enunciado; use o que a banca trouxe. O enunciado diz que é abuso de autoridade, e o abuso de autoridade, previsto em lei especial, é crime de ação pública incondicionada. O Ministério Público ficou inerte e não ofereceu a denúncia, e o enunciado já pula para a conclusão: perdeu o prazo. Daí nasce a ação penal privada subsidiária da pública, com prazo decadencial de seis meses, contados do término do prazo do MP.`],
      ['ul', [
        `A está errada: o crime de abuso de autoridade é de ação pública incondicionada.`,
        `B está errada: quem deveria receber a queixa é o juiz; o MP não "aceita" a queixa nesse sentido.`,
        `C é a correta: o prazo de seis meses (decadencial) já havia passado, pois a queixa veio um ano depois.`,
        `D está errada: não é só o ofendido, pois na ausência ou morte há o CAD; além disso, ofendido não denuncia (denuncia o MP; ofendido apresenta queixa-crime).`,
        `E está errada: o próprio enunciado diz que houve abuso de autoridade, logo houve crime.`
      ]],
      ['p', `Observação: a questão foi mal formulada porque não diz quem é o familiar (cônjuge, ascendente, descendente ou irmão pode ser; um tio não faz parte do CAD) e contou o ano desde o fato, e não desde o fim do prazo do MP. Mas, como o prazo de seis meses está dentro de um ano, a questão não foi anulada.`],
      ['h', 'Resumo de revisão'],
      ['ul', [
        `Representação: irretratável depois do oferecimento da denúncia (art. 25 do CPP).`,
        `Abuso de autoridade: ação pública incondicionada; inércia do MP gera a subsidiária.`,
        `Queixa subsidiária: seis meses a partir do término do prazo do MP; depois, decadência.`,
        `Troca de termos: o MP denuncia; o ofendido apresenta queixa-crime.`,
        `Use só o que o enunciado traz; não acrescente informação.`
      ]]
    ],
    9: [
      ['h', 'Questão 3 (2023, juiz): ação subsidiária e inércia do ofendido'],
      ['p', `Enunciado: em crime de roubo praticado por Orestes, do qual Saulo figurou como ofendido, o Ministério Público, ao fim da investigação, não ofereceu denúncia, tampouco se manifestou no prazo legal. Diante disso, Saulo, por intermédio de seu advogado, ajuizou a ação penal privada subsidiária da pública, recebida pelo juízo. Contudo, no curso do feito, Saulo, apesar de devidamente intimado por três vezes, deixou de promover o andamento do processo por seis meses seguidos. Nessa hipótese, é correto afirmar que deverá:`],
      ['ul', [
        `(A) o juiz declarar a ocorrência de perempção e a consequente extinção da punibilidade;`,
        `(B) o Ministério Público requerer a extinção do feito em razão da decadência;`,
        `(C) o juiz declarar a ocorrência de renúncia tácita de Saulo e a consequente extinção da punibilidade;`,
        `(D) o Ministério Público retomar a ação como parte principal em razão da negligência de Saulo;`,
        `(E) o juiz declarar a ocorrência de perdão.`
      ]],
      ['p', `Raciocínio: é pegadinha. A ação subsidiária é só quanto à iniciativa: a partir do momento em que o juiz recebe, o Ministério Público permanece como titular, intimado de todos os atos. Se Saulo não se manifesta, pouco importa: não incide nenhuma causa extintiva da punibilidade, porque a ação permanece pública, e a vida segue. A banca joga uma casca de banana para você confundir com a ação penal privada propriamente dita.`],
      ['ul', [
        `A: perempção é causa extintiva da punibilidade na ação privada (quando o sujeito deixa de dar andamento ao processo por mais de 30 dias), mas não incide na subsidiária.`,
        `B: não há decadência, porque a ação ainda é pública.`,
        `C: renúncia também é causa extintiva da punibilidade da ação privada, que não se aplica aqui porque a natureza é pública.`,
        `D: correta; o MP, que ficou inerte para oferecer a denúncia, retoma a titularidade.`,
        `E: perdão é outra causa extintiva da punibilidade das ações privadas.`
      ]],
      ['h', 'Questão 4: decadência do direito de queixa'],
      ['p', `Enunciado: Honório, 12 meses após tomar conhecimento de quem era o autor do fato, ajuizou queixa-crime, por intermédio de advogado com a devida procuração, contra Alarico, imputando-lhe o delito de difamação. A queixa-crime deve ser rejeitada pelo juízo em razão da ocorrência de: (A) perempção do direito de queixa; (B) prescrição do direito de difamação; (C) decadência do direito de queixa.`],
      ['p', `Raciocínio: o prazo decadencial de seis meses conta do conhecimento da autoria, e já se passaram doze. Logo, houve decadência do direito de queixa. Quem estudou sabe que o termo e o prazo (seis meses) são a chave.`],
      ['h', 'Questão 5: assinale a correta sobre a ação penal no CPP (arts. 24 a 42)'],
      ['ul', [
        `(A) Nos crimes de ação pública condicionada, esta será promovida por queixa do ofendido: errada; a ação é pública, logo é por denúncia, mesmo que dependa de representação.`,
        `(B) Seja qual for o crime, quando praticado em detrimento de patrimônio ou interesse da União, Estado ou Município, dependerá de requisição do órgão ofendido: errada; se há interesse público, a ação é pública incondicionada, e a requisição é do Ministro da Justiça (por exemplo, crimes contra a honra do Presidente).`,
        `(C) A representação será retratável a qualquer momento: errada; tem o prazo decadencial de seis meses e a retratação só vai até o oferecimento da denúncia.`,
        `(D) No caso de morte do ofendido ou declarado ausente, o direito de representação se extingue: errada; surge o CAD (cônjuge, ascendente, descendente, irmão).`,
        `(E) Nos crimes de ação pública, esta será promovida por denúncia do Ministério Público: correta.`
      ]],
      ['p', `Com o mapa mental (ação pública = titular MP e peça denúncia), essa questão se resolve sozinha.`],
      ['h', 'Resumo de revisão'],
      ['ul', [
        `Subsidiária: depois de recebida a queixa, o MP continua parte principal; não incidem perempção, renúncia, perdão ou decadência.`,
        `Perempção, renúncia e perdão são causas extintivas da punibilidade da ação privada, não da subsidiária.`,
        `Decadência: 6 meses do conhecimento da autoria (representação, requisição, privada).`,
        `Ação pública: titular MP, peça denúncia, mesmo quando condicionada à representação ou à requisição do Ministro da Justiça.`,
        `Morte ou ausência da vítima não extingue o direito: abre-se o CAD.`
      ]]
    ]
  };
  window.PCPE_QUESTOES[topic] = [
    {
      text: `Sobre as espécies de ação penal, assinale a alternativa correta.`,
      options: [
        `Na ação penal pública, o titular é o ofendido, que apresenta queixa-crime por advogado.`,
        `Na ação penal privada, o titular é o Ministério Público, que apresenta denúncia.`,
        `Na ação penal pública, o titular é o Ministério Público, por meio do promotor, e a peça é a denúncia; na privada, o titular é o ofendido ou seu representante legal, e a peça é a queixa-crime.`,
        `A ação penal privada é a regra no Brasil, e a pública é a exceção.`
      ],
      correct: 2,
      exp: `Pública: titular MP, peça denúncia, regra. Privada: titular ofendido ou representante legal, peça queixa-crime, exceção. As demais trocam titulares, peças ou a regra.`
    },
    {
      text: `Um crime do Código Penal não traz nenhuma menção sobre a espécie de ação penal. Nessa situação, a ação é:`,
      options: [
        `privada propriamente dita, pois o interesse é da vítima.`,
        `pública condicionada à representação do ofendido.`,
        `privada personalíssima.`,
        `pública incondicionada.`
      ],
      correct: 3,
      exp: `Se o crime não diz nada sobre ação penal, é pública incondicionada, que é a regra. As exceções (condicionada à representação, à requisição, privadas) vêm expressamente indicadas.`
    },
    {
      text: `Em um crime de roubo, o delegado instaura inquérito e reúne indícios de autoria e prova da materialidade. Ao receber os autos, o promotor:`,
      options: [
        `depende da opinião da vítima para decidir se denuncia.`,
        `é obrigado a denunciar, em razão do princípio da obrigatoriedade, por haver justa causa.`,
        `deve aguardar a requisição do Ministro da Justiça.`,
        `deve aguardar o juiz autorizar a propositura da ação.`
      ],
      correct: 1,
      exp: `Roubo é de ação pública incondicionada: com justa causa (indícios de autoria e prova da materialidade), o promotor é obrigado a denunciar, sem precisar da opinião da vítima, do juiz ou do delegado. A e C descrevem espécies condicionadas.`
    },
    {
      text: `Tício foi ameaçado em 1º de março (crime de ação pública condicionada à representação), mas só em 10 de março descobriu quem era o autor, que usava perfil falso. A contagem do prazo decadencial para a representação:`,
      options: [
        `começa em 1º de março, data do crime, e dura seis meses.`,
        `começa em 10 de março, data em que Tício soube quem era o autor, e dura seis meses.`,
        `começa no dia do oferecimento da denúncia.`,
        `não tem prazo, pois a representação pode ocorrer a qualquer momento.`
      ],
      correct: 1,
      exp: `O prazo decadencial de seis meses conta do conhecimento da autoria, e não da data do crime. Contar do crime beneficiaria o criminoso que se esconde; a representação não é feita a qualquer momento.`
    },
    {
      text: `Sobre a retratação da representação, assinale a alternativa correta.`,
      options: [
        `Pode ocorrer até o recebimento da denúncia pelo juiz.`,
        `Pode ocorrer a qualquer momento, mesmo depois da sentença.`,
        `Não é admitida em nenhuma hipótese.`,
        `Pode ocorrer dentro do prazo de seis meses e até o oferecimento da denúncia.`
      ],
      correct: 3,
      exp: `A retratação é possível no prazo decadencial e até o oferecimento da denúncia (art. 25 do CPP), porque depois disso o Ministério Público já moveu a máquina pública. A A confunde oferecimento com recebimento.`
    },
    {
      text: `A vítima de ameaça morre dois dias depois do fato, ainda dentro do prazo para representar. Quem pode representar, na ordem?`,
      options: [
        `Cônjuge, ascendentes, descendentes e, por último, irmão.`,
        `Irmão, descendentes, ascendentes e cônjuge, em qualquer ordem.`,
        `Ninguém, pois o direito de representação se extingue com a morte.`,
        `Somente o Ministro da Justiça.`
      ],
      correct: 0,
      exp: `Abre-se a linha sucessória do CAD, em ordem contínua: cônjuge, ascendentes, descendentes e irmão, sem furar a fila. Não há extinção automática do direito, e o Ministro da Justiça só requisita nos crimes de interesse político.`
    },
    {
      text: `Sobre a ação penal pública condicionada à requisição do Ministro da Justiça, assinale a alternativa correta.`,
      options: [
        `Aplica-se a todo crime praticado em detrimento de patrimônio de município.`,
        `A peça acusatória é a queixa-crime, apresentada pela vítima.`,
        `É exemplo o crime contra a honra do Presidente da República, por existir interesse político; sem a requisição, o Ministério Público fica de mãos atadas.`,
        `O promotor denuncia livremente, e a requisição serve apenas como sugestão.`
      ],
      correct: 2,
      exp: `A condicionada à requisição existe em razão de interesse político, como nos crimes contra a honra do Presidente. A peça segue sendo a denúncia, e a requisição é condição: sem ela, o MP não denuncia.`
    },
    {
      text: `Sobre a ação penal privada personalíssima, assinale a alternativa correta.`,
      options: [
        `É a ação dos crimes contra a honra, e o CAD pode apresentar a queixa-crime.`,
        `É o caso da ocultação de impedimento a casamento: só a vítima pode apresentar a queixa-crime, e sem ela há extinção da punibilidade, sem CAD.`,
        `Nasce da inércia do Ministério Público e é apresentada pelo cônjuge da vítima.`,
        `Depende de requisição do Ministro da Justiça.`
      ],
      correct: 1,
      exp: `A personalíssima só admite a queixa da própria vítima (ocultação de impedimento a casamento); se ela morre, está ausente ou não quer agir, extingue-se a punibilidade. Os crimes contra a honra são de ação privada propriamente dita (com CAD), e a subsidiária nasce da inércia do MP.`
    },
    {
      text: `Em um roubo, o Ministério Público recebe o inquérito, mas não oferece denúncia no prazo legal. Segundo o que se estuda sobre a ação penal privada subsidiária da pública, é correto afirmar que:`,
      options: [
        `a vítima poderá apresentar queixa-crime em seis meses a contar do término do prazo do Ministério Público, mas a natureza da ação continua pública.`,
        `a vítima terá seis meses a contar do conhecimento da autoria, e a ação passa a ser privada.`,
        `o Ministério Público perde definitivamente o direito de denunciar, ainda que o crime não tenha prescrito.`,
        `o juiz deve extinguir a punibilidade por decadência do direito do Ministério Público.`
      ],
      correct: 0,
      exp: `Na subsidiária o prazo de seis meses conta do término do prazo do MP, e a ação continua pública. O MP pode denunciar tardiamente enquanto o crime não estiver prescrito, e não há decadência do direito do MP nem perda definitiva.`
    },
    {
      text: `Em ação penal privada subsidiária da pública recebida pelo juiz, o ofendido, intimado três vezes, deixa de promover o andamento do processo por seis meses. Segundo o raciocínio estudado, a consequência é:`,
      options: [
        `perempção e extinção da punibilidade.`,
        `renúncia tácita e extinção da punibilidade.`,
        `perdão e extinção da punibilidade.`,
        `o Ministério Público retoma a ação como parte principal, pois a ação permanece pública.`
      ],
      correct: 3,
      exp: `Como a ação subsidiária mantém a natureza pública, a inércia do ofendido não extingue a punibilidade: o Ministério Público retoma a titularidade. Perempção, renúncia e perdão são institutos da ação privada, e a banca os usa como casca de banana.`
    }
  ];
})();
