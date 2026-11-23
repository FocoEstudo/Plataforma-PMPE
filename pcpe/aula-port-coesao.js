(function () {
  'use strict';
  window.PCPE_TOPIC_GUIDES = window.PCPE_TOPIC_GUIDES || {};
  window.PCPE_DEEPENING = window.PCPE_DEEPENING || {};
  window.PCPE_QUESTOES = window.PCPE_QUESTOES || {};
  const topic = 'Coesão textual e correlação de tempos e modos verbais';
  const base = window.PCPE_TOPIC_GUIDES[topic] || {};
  window.PCPE_TOPIC_GUIDES[topic] = Object.assign({}, base, {
    lessons: [
      [
        `Aula 1 · Tempos, modos e a lógica da correlação (oração principal no presente)`,
        `Correlacionar tempos e modos verbais é verificar se os verbos de uma mesma frase combinam entre si. Toda frase com correlação a analisar tem pelo menos dois verbos (oração principal e oração subordinada), e a combinação errada deixa o texto incoerente. Os tempos fundamentais são pretérito, presente e futuro; os modos são indicativo, subjuntivo e imperativo. Quando a principal está no presente do indicativo, quatro correlações funcionam: presente do indicativo, futuro do presente do indicativo, pretérito perfeito composto e presente do subjuntivo.`,
        `"Eu sei que você come muito durante as festas" (presente + presente do indicativo, a correlação "pipi"). "Eu sei que você comerá muito durante as festas" (presente + futuro do presente, a correlação "pifi", ou "de cá para lá"). "Espero que ele tenha trazido um presente para mim" (presente + pretérito perfeito composto). "Espero que ele traga um presente para mim" (presente do indicativo + presente do subjuntivo, que aqui indica hipótese, não futuro).`,
        `Tempo composto é aquele em que aparece "ter" ou "haver" mais o verbo principal no particípio (terminado em -ado ou -ido). E cuidado: "traga" é presente do subjuntivo, e não futuro; o subjuntivo indica hipótese.`
      ],
      [
        `Aula 1 · Oração principal no pretérito`,
        `Quando a oração principal está no passado, o pretérito perfeito do indicativo se correlaciona com quatro formas: pretérito imperfeito do subjuntivo, pretérito imperfeito do indicativo, pretérito mais-que-perfeito (simples ou composto) e futuro do pretérito do indicativo. Além delas, o pretérito imperfeito do indicativo correlaciona com o mais-que-perfeito composto do subjuntivo, o imperfeito do subjuntivo correlaciona com o futuro do pretérito, e o mais-que-perfeito composto do subjuntivo com o futuro do pretérito composto.`,
        `"Solicitei que fizesse um bolo" (perfeito do indicativo + imperfeito do subjuntivo). "Percebi que você ia colar na prova" (perfeito + imperfeito do indicativo, evitando a ideia de ações simultâneas). "Passou na prova de tanto que estudara" ou "de tanto que havia estudado" (perfeito + mais-que-perfeito). "Disseram que seria uma apresentação rápida" (perfeito + futuro do pretérito). "Queria que ele tivesse falado a verdade". "Se você estudasse, saberia as respostas". "Se ele tivesse feito a compra do mês, a esposa não teria ficado brava."`,
        `A correlação "imperfeito do subjuntivo + futuro do pretérito" ("estudasse... saberia") é a mais cobrada em provas de concurso, principalmente da banca Cebraspe. Hoje se usa o composto ("havia estudado", "tinha estudado") no lugar do mais-que-perfeito simples ("estudara").`
      ],
      [
        `Aula 1 · Oração principal no futuro e quadro-síntese`,
        `Com a principal no futuro, existem três possibilidades: futuro do pretérito do indicativo com pretérito imperfeito do subjuntivo; futuro do presente do indicativo com pretérito perfeito do indicativo; e futuro do subjuntivo com futuro do presente do indicativo. Para estudar, você monta uma tabelinha com todas as correlações e a aplica na prova.`,
        `"Gostaria que namorasse aquela moça" (inversão do esquema "estudasse... saberia"). "Teremos aquilo que nos prometeram" (futuro do presente + perfeito, porque a promessa já foi feita). "Quando eu passar por lá, avisarei a você" (futuro do subjuntivo + futuro do presente: dois futuros que se correlacionam bem).`,
        `Futuro do subjuntivo é o "quando eu passar, quando eu disser, quando eu fizer, quando eu tiver". Ele pede futuro do presente do indicativo ("avisarei", "farei", "falarei"), não pretérito.`
      ],
      [
        `Aula 2 · Retomada: o "que" e as preposições como conectivos`,
        `Coesão sequencial é a ligação de uma oração à seguinte. O "que" tem dois papéis que você precisa separar: quando equivale a "o qual", "a qual" e retoma um termo antecedente, é pronome relativo (referencial e sequencial, e inicia oração subordinada adjetiva); quando a oração equivale a "isso", é conjunção integrante, que não retoma nada e inicia oração subordinada substantiva. Preposições e locuções prepositivas também funcionam como conectores.`,
        `Se o Cebraspe perguntar se esse "que" retoma um termo anterior e a oração for substituível por "isso", a resposta é não: ele integra a oração à anterior. Preposições com valor de conectivo: "para" e "a fim de" (finalidade), "ao sair de casa" (tempo), "apesar de" e "a despeito de" (concessão), "por" e "devido a" (causa).`,
        `Não é só a conjunção que tem valor de conectivo. A banca cobra muito o "para" e o "por"; foque neles.`
      ],
      [
        `Aula 2 · "Para" e "por": finalidade só com verbo anterior`,
        `Para a banca, "para + infinitivo" indica finalidade, mas finalidade é circunstância adverbial, e o advérbio, quando se trata de oração, precisa estar ligado a um verbo. Se a oração em "para" completa um substantivo (um nome), ela é completiva nominal, não finalidade. Já "por + infinitivo" costuma indicar causa, mas pode ter valor de "para"; a prova é a substituição por "a fim de" ou "para".`,
        `Questão do TCE-PE (Cebraspe): "consiste também no acompanhamento dos eventos para verificar a qualidade dos serviços prestados". A afirmação de que a oração com "para" expressa finalidade está errada: "para verificar" liga-se a "acompanhamento" (substantivo), logo é completiva nominal. "Cacilda se levantou para ver o jogo" é finalidade (liga-se ao verbo "levantou"); "Não há previsão para começar o jogo" liga-se ao substantivo "previsão" e é completiva nominal. Em "uma mulher se esforçava por me fazer feliz", o "por" equivale a "para" (se esforçava a fim de me fazer feliz): há finalidade, afirmação correta. Em "para se vacinar, as pessoas devem apresentar documento de identidade...", "para" é conectivo e a oração expressa finalidade, afirmação correta.`,
        `Pergunte sempre a que o "para + infinitivo" está ligado: a um verbo (finalidade) ou a um nome (completiva nominal). E nem todo "por" é causa: se couber "a fim de" ou "para", é finalidade.`
      ],
      [
        `Aula 2 · Preposição x conjunção e conjunções coordenativas`,
        `Preposição e conjunção são termos invariáveis, mas diferem na função: a preposição liga dois elementos subordinando o segundo ao primeiro ("casa de madeira"); a conjunção liga elementos de mesma natureza sintática ou morfológica ("Pedro e João", dois núcleos do sujeito; "linda e meiga", dois adjetivos) ou orações. As coordenativas são cinco: aditivas, adversativas, alternativas, conclusivas e explicativas.`,
        `Aditivas: e, nem, mas também ("não só estuda, mas também trabalha"; "como também"). Adversativas: mas, porém, contudo, todavia, entretanto, no entanto, não obstante. Alternativas: ou, ora... ora. Conclusivas: logo, portanto, por conseguinte. Explicativas: porque, pois. "Estudou e foi aprovado" (e = adição); "Estudou e foi reprovado" (e = contraste). Com sujeitos diferentes, o "e" pede vírgula obrigatória: "Maricota saiu de casa, e Antônio reclamou muito."`,
        `O "pois" antes do verbo é explicativo, depois do verbo é conclusivo; e, entre vírgulas, é conclusivo em qualquer posição (equivale a "portanto" ou "logo"). Não confunda "contudo" (oposição) com "portanto" (conclusão). O "porquê" junto só dá explicação ou causa; nunca conclusão.`
      ],
      [
        `Aula 2 · Conjunções subordinativas e valores semânticos`,
        `As subordinativas (e as locuções conjuntivas, grupos de palavras que terminam em conjunção, como "já que", "desde que", "por mais que", "para que") expressam causa, concessão, condição, conformidade, comparação, consequência, finalidade, tempo e proporção. Concessiva é a oração que expressa algo que tem tudo para acontecer e não acontece (ou o contrário), contrariando o senso comum. Conformativa é a coisa esperada que acontece. Consecutiva se reconhece por "tão", "tal", "tanto" ou "tamanho" antecedendo o "que".`,
        `Concessiva: "Embora fosse muito rico, vestia-se com trapos". Conformativa: "Fizemos tudo conforme combinamos ontem à noite". Consecutiva: "Ela comeu tanta sopa que passou mal", "Ela é tão bonita que até assusta", "Sua vontade de vencer foi tamanha que superou todos os obstáculos". O "porque" junto e sem acento é a conjunção que dá causa (subordinada) ou explicação (coordenada); o valor de finalidade ("orai por que não entreis") é arcaico e pouco cobrado.`,
        `A concessiva se parece com a adversativa da coordenação (as duas contrariam), mas a concessiva é subordinada. Não pense que toda conjunção iniciada por "c" é condicional.`
      ],
      [
        `Aula 2 · Valor semântico: o verbo define; "se", "na medida em que" e "que"`,
        `A conjunção sozinha não decide o valor da oração: o verbo também decide. Verbo no indicativo traz certeza e se liga a causa e efeito; verbo no subjuntivo traz hipótese e se liga a condição. Por isso, "se" equivale a "caso" quando é condicional, mas a "já que" quando é causal. A locução "na medida em que" equivale a "já que" e "uma vez que" (causa), e não a proporção, que se faz com "à medida que".`,
        `"Se o Brasil investe em educação, será um país forte no futuro": indicativo, causa. Com o verbo no futuro do subjuntivo ou no imperfeito do subjuntivo ("se o Brasil investir... será", "se o Brasil investisse... seria"), o valor muda para condição. "Na medida em que estuda, aprende mais": causa, e não proporção. "Não sabemos se ela viajou": ao inverter o período, o "se" completa o verbo da outra oração; é oração subordinada substantiva (objeto direto), e o valor é de integração.`,
        `Teste do "caso": se cabe "caso", é condição; se cabe "já que", é causa. Se a oração completa o verbo da outra, é integrante, sem valor semântico adverbial.`
      ],
      [
        `Aula 2 · As armadilhas do "-anto" e questões de prova`,
        `Cinco conjunções terminadas em "-anto"/"-quanto" derrubam muita gente. "Entretanto" é coordenativa adversativa (equivale a "porém" e "contudo"). "Portanto" é coordenativa conclusiva (equivale a "logo" e "por isso"). "Porquanto" pode ser explicativa ou causal, como o "porque". "Conquanto" é subordinativa concessiva (equivale a "embora" e "malgrado"). "Enquanto" é temporal que indica simultaneidade, diferente de "quando", que indica tempo subsequente. Macete do Pork: "por quanto" tem o "por" de "porque"; "com quanto" tem o "com" de concessão.`,
        `"Quando ele chegou, todos aplaudiram" (primeiro chega, depois aplaudem); "Enquanto ele falava, todos anotavam" (ao mesmo tempo). Questão da Emap 2018 (Cebraspe, texto do Juca): trocar o ponto final por ponto de interrogação em "...mais impenetráveis do reino animal" mantém a pergunta retórica, mas desfaz o "porque" conjunção, que vira "por que" (preposição + pronome); portanto, a correção gramatical não se mantém, e o item é errado. "O porém expressa conclusão e poderia ser substituído por portanto": errado, "porém" é adversativa. "De que adiantaria tornar a lei mais rigorosa se nem nas condições atuais..." : o "se" não é condição, equivale a "já que" (causa); item errado.`,
        `Teste de substituição é a arma: se cabe "já que", é causa, não condição. Pergunta retórica é a que não busca resposta, mas leva à reflexão; mesmo assim, a mudança de pontuação pode quebrar a correção gramatical.`
      ]
    ],
    practice: [
      `Monte a correlação de tempos e modos quando a oração principal está no presente do indicativo e dê um exemplo de cada.`,
      `Cite a correlação de tempos e modos mais cobrada em concursos e escreva uma frase que a contenha.`,
      `Como você decide se "para + infinitivo" expressa finalidade ou é completiva nominal? Aplique em "Não há previsão para começar o jogo".`,
      `Explique como o verbo decide se "se" tem valor de causa ou de condição usando "Se o Brasil investe em educação, será um país forte".`,
      `Diferencie "porquanto" de "conquanto" e "enquanto" de "quando" usando o macete e os exemplos.`
    ],
    answers: [
      `Presente + presente do indicativo ("Sei que você come"); presente + futuro do presente ("Sei que você comerá"); presente + pretérito perfeito composto ("Espero que ele tenha trazido"); presente + presente do subjuntivo ("Espero que ele traga").`,
      `Pretérito imperfeito do subjuntivo + futuro do pretérito do indicativo: "Se você estudasse, saberia as respostas".`,
      `Veja a que o "para + infinitivo" se liga: se for a um verbo, é finalidade; se for a um substantivo, é completiva nominal. Em "previsão para começar", o "para" liga-se ao substantivo "previsão"; logo, completiva nominal.`,
      `Verbo no indicativo traz certeza, causa e efeito: "investe... será" dá causa ("já que"). Se o verbo fosse "investir" (futuro do subjuntivo) ou "investisse" (imperfeito do subjuntivo), traria hipótese e a oração seria condicional ("caso").`,
      `"Por quanto" tem o "por" de "porque" (explicativa ou causal); "com quanto" tem o "com" de concessão (equivale a "embora"). "Enquanto" é simultaneidade ("enquanto ele falava, todos anotavam"); "quando" é tempo subsequente ("quando ele chegou, todos aplaudiram").`
    ]
  });

  window.PCPE_DEEPENING[topic] = {
    1: [
      ['h', `Aula 1 · Tempos, modos e a lógica da correlação (oração principal no presente)`],
      ['p', `Correlação de tempos e modos verbais é um assunto que, quando aparece em prova, derruba muita gente. A ideia é simples: dentro de uma frase você tem pelo menos dois verbos, e precisa entender como eles se correlacionam para que o que você escreveu não fique incoerente. Muitas vezes uma redação fica incoerente justamente porque o candidato não consegue criar essa correlação entre tempos e modos verbais.`],
      ['h', `Os tempos e os modos`],
      ['ul', [
        `Os três tempos fundamentais são o pretérito (passado), o presente e o futuro. Existem formas diferentes de trazer esses tempos: pretérito perfeito, pretérito imperfeito, pretérito mais-que-perfeito.`,
        `Os modos são o indicativo, o subjuntivo e o imperativo.`,
        `A análise sempre parte de uma frase com uma oração principal e uma oração subordinada: você olha o verbo da principal e verifica com que verbo ele pode se correlacionar.`
      ]],
      ['h', `Quando a oração principal está no presente`],
      ['p', `Com o verbo da principal no presente do indicativo, existem quatro correlações possíveis. Anote-as:`],
      ['ol', [
        `Presente do indicativo + presente do indicativo (a correlação "pipi"), que sempre dá certo. Exemplos: "Eu sei que você come muito durante as festas"; "Eu digo que você faz falta".`,
        `Presente do indicativo + futuro do presente do indicativo (a correlação "pifi", de "daqui para lá"). Exemplo: "Eu sei que você comerá muito durante as festas". Outro exemplo: "Eu sei que você irá amanhã à prova", em que "sei" está no presente e "irá" (com "amanhã") indica o futuro. A correlação é perfeita e não fica incoerente.`,
        `Presente do indicativo + pretérito perfeito composto. Exemplo: "Espero que ele tenha trazido um presente para mim". Tempo composto é aquele que traz "ter" ou "haver" no meio da forma verbal, com o verbo principal no particípio (terminado em -ado ou -ido). Observação para você não se perder na hora de analisar: nesse exemplo, "tenha trazido" está na forma do subjuntivo; ainda assim, é a correlação do "presente + perfeito composto" que você deve reconhecer.`,
        `Presente do indicativo + presente do subjuntivo. Exemplo: "Eu espero que ele traga um presente para mim". Aqui "traga" não é futuro: é presente do subjuntivo, porque o subjuntivo indica uma hipótese. A correlação é funcional, sem problemas.`
      ]],
      ['h', `Como você aplica`],
      ['p', `Diante de uma frase de prova, localize os dois verbos, identifique o tempo e o modo de cada um e confira se o par está na lista das correlações aceitas. Se o par não estiver na lista, a frase ficou incoerente. Nas aulas seguintes da apostila você vê as correlações com o pretérito e com o futuro.`],
      ['h', `Resumo de revisão`],
      ['ul', [
        `Pelo menos dois verbos na frase: a correlação existe para a frase não ficar incoerente.`,
        `Tempos: pretérito, presente, futuro. Modos: indicativo, subjuntivo, imperativo.`,
        `Principal no presente: presente do indicativo (pipi), futuro do presente (pifi, daqui para lá), pretérito perfeito composto, presente do subjuntivo (hipótese).`,
        `Tempo composto = ter ou haver + particípio (-ado, -ido).`
      ]]
    ],
    2: [
      ['h', `Aula 1 · Oração principal no pretérito`],
      ['p', `Agora o verbo da oração principal está no passado. As correlações a seguir você anota na sua tabelinha e aplica na prova. Todas estão na ordem ensinada; acompanhe cada exemplo localizando os dois verbos.`],
      ['ol', [
        `Pretérito perfeito do indicativo + pretérito imperfeito do subjuntivo. No subjuntivo só existe um pretérito: o imperfeito. Exemplo: "Solicitei que minha mãe fizesse um bolo". Tudo está no passado, mas um verbo é do indicativo e o outro do subjuntivo.`,
        `Pretérito perfeito do indicativo + pretérito imperfeito do indicativo. A combinação de ação perfeita e imperfeita evita dar a ideia de ações concomitantes (ao mesmo tempo). Exemplo: "Eu percebi que você ia colar na prova" (o "ia" é imperfeito). Eu percebi, ação finalizada, e você ia fazer aquilo, ação imperfeita.`,
        `Pretérito perfeito do indicativo + pretérito mais-que-perfeito. É a correlação mais tradicional: "Passou na prova de tanto que estudara". As duas ações já terminaram, e a segunda é anterior à primeira. Hoje ninguém mais fala "estudara": usa-se o composto, e você pode dizer "passou na prova de tanto que havia estudado" ou "tinha estudado", que é o pretérito mais-que-perfeito composto. Essa correlação também é possível.`,
        `Pretérito perfeito do indicativo + futuro do pretérito do indicativo (a ideia de condicional). Exemplo: "Disseram que seria uma apresentação rápida".`,
        `Pretérito imperfeito do indicativo + pretérito mais-que-perfeito composto do subjuntivo. Exemplo: "Eu queria que ele tivesse falado a verdade". O "tivesse falado" é mais-que-perfeito composto do subjuntivo (você reconhece pelo "tivesse", forma do subjuntivo). Outro exemplo: "Queria que ele pudesse voltar".`,
        `Pretérito imperfeito do subjuntivo + futuro do pretérito do indicativo. É a correlação que mais cai em provas, principalmente da banca Cebraspe. Exemplo: "Se você estudasse, saberia as respostas". "Estudasse", com dois "s" no meio, é pretérito imperfeito do subjuntivo; "saberia" é futuro do pretérito.`,
        `Pretérito mais-que-perfeito composto do subjuntivo + futuro do pretérito composto do indicativo. Exemplo: "Se ele tivesse feito a compra do mês, a esposa não teria ficado brava". "Tivesse feito" é mais-que-perfeito composto (os dois "s" e o particípio); "teria ficado" é futuro do pretérito composto, porque o simples seria "ficaria". Para memorizar: tivesse + teria.`
      ]],
      ['h', `Pegadinhas e macetes`],
      ['ul', [
        `Não existe mais de um pretérito no subjuntivo (só o imperfeito), por isso "pretérito + pretérito" do indicativo com o subjuntivo sempre aparece como "perfeito + imperfeito do subjuntivo".`,
        `A correlação com "tivesse/teria" é a versão composta de "estudasse/saberia". Sempre que você vir "se + tivesse + particípio", espere "teria + particípio".`,
        `Na prova, procure reconhecer o tempo composto pelo auxiliar (ter ou haver) mais o particípio.`
      ]],
      ['h', `Resumo de revisão`],
      ['ul', [
        `Perfeito do indicativo combina com: imperfeito do subjuntivo ("Solicitei que fizesse"), imperfeito do indicativo ("percebi que ia colar"), mais-que-perfeito ("estudara"/"havia estudado") e futuro do pretérito ("disseram que seria").`,
        `Imperfeito do indicativo + mais-que-perfeito composto do subjuntivo: "Queria que ele tivesse falado".`,
        `Imperfeito do subjuntivo + futuro do pretérito: "estudasse, saberia" (a mais cobrada, principalmente no Cebraspe).`,
        `Mais-que-perfeito composto do subjuntivo + futuro do pretérito composto: "tivesse feito, teria ficado".`
      ]]
    ],
    3: [
      ['h', `Aula 1 · Oração principal no futuro e quadro-síntese`],
      ['p', `Quando a oração principal traz verbo no futuro, existem três possibilidades. Elas são, em boa parte, a inversão do que você viu na lição anterior.`],
      ['ol', [
        `Futuro do pretérito do indicativo + pretérito imperfeito do subjuntivo. Exemplo: "Gostaria de que namorasse aquela moça"; "gostaria que falasse". É a mesma lógica de "estudasse... saberia", só que a frase começa pelo futuro do pretérito e inverte para o imperfeito do subjuntivo.`,
        `Futuro do presente do indicativo + pretérito perfeito do indicativo. Exemplo: "Nós teremos aquilo que nos prometeram". "Teremos" é futuro; "prometeram" é passado. Dá certo porque a promessa está no passado e o recebimento no futuro.`,
        `Futuro do subjuntivo + futuro do presente do indicativo. O futuro do subjuntivo é "quando eu passar", "quando eu disser", "quando eu fizer", "quando eu tiver". Exemplo: "Quando eu passar por lá, avisarei a você"; "Quando eu tiver, eu falarei". É uma correlação que cai bastante, porque os dois futuros se correlacionam bem.`
      ]],
      ['h', `Quadro-síntese para você montar e treinar`],
      ['ul', [
        `Presente do indicativo → presente do indicativo; futuro do presente do indicativo; pretérito perfeito composto; presente do subjuntivo.`,
        `Pretérito perfeito do indicativo → imperfeito do subjuntivo; imperfeito do indicativo; mais-que-perfeito (simples ou composto); futuro do pretérito.`,
        `Pretérito imperfeito do indicativo → mais-que-perfeito composto do subjuntivo ("queria que tivesse falado").`,
        `Imperfeito do subjuntivo → futuro do pretérito ("estudasse, saberia").`,
        `Mais-que-perfeito composto do subjuntivo → futuro do pretérito composto ("tivesse feito, teria ficado").`,
        `Futuro do pretérito → imperfeito do subjuntivo ("gostaria que namorasse").`,
        `Futuro do presente → pretérito perfeito do indicativo ("teremos aquilo que prometeram").`,
        `Futuro do subjuntivo → futuro do presente ("quando eu passar, avisarei").`
      ]],
      ['h', `Como estudar`],
      ['p', `Anote a tabelinha, repita os exemplos em voz alta e treine localizando em cada frase de prova os dois verbos, o tempo e o modo de cada um. Marque primeiro o verbo da oração principal e depois procure, na lista, o par possível.`],
      ['h', `Resumo de revisão`],
      ['ul', [
        `Futuro do pretérito + imperfeito do subjuntivo: "gostaria que namorasse".`,
        `Futuro do presente + perfeito do indicativo: "teremos aquilo que nos prometeram".`,
        `Futuro do subjuntivo + futuro do presente: "quando eu passar, avisarei".`,
        `Os dois futuros correlacionam bem: o futuro do subjuntivo traz a condição e o futuro do presente traz o resultado.`
      ]]
    ],
    4: [
      ['h', `Aula 2 · Retomada: o "que" e as preposições como conectivos`],
      ['p', `O domínio dos mecanismos de coesão textual passa pelos elementos de referenciação, substituição, repetição e conectores. Antes de entrar nas questões, você precisa dominar duas retomadas: a palavra "que" e as preposições com valor de conectivo.`],
      ['h', `O "que" relativo`],
      ['p', `Quando o "que" tem o sentido de "o qual" ou "a qual", ele está retomando um termo antecedente. É um pronome relativo, com característica referencial e sequencial: retoma o antecedente e, ao mesmo tempo, inicia uma oração subordinada adjetiva.`],
      ['h', `O "que" conjunção integrante`],
      ['p', `O "que" tem várias funções sintáticas e morfológicas. Ele pode iniciar uma oração subordinada substantiva, e essa oração equivale a "isso". Nesse caso, ele é conjunção integrante: não tem referente, não retoma nada. Se o Cebraspe (ou qualquer banca) perguntar se esse "que" retoma um termo anterior, a resposta é não: ele é sequencial e integra uma oração à oração anterior.`],
      ['h', `Preposições com valor de conectivo`],
      ['p', `Não é só a conjunção que tem valor de conectivo. Preposições e locuções prepositivas também funcionam como conectores e, logo, como elementos coesivos. A banca exige que você conheça isso. Exemplos que você deve ter na ponta da língua:`],
      ['ul', [
        `"para" e "a fim de": finalidade.`,
        `"ao" (ao sair de casa, encontrou o amigo na rua): tempo.`,
        `"apesar de" e "a despeito de": concessão.`,
        `"por" e "devido a": causa.`
      ]],
      ['p', `Foque no "para" e no "por": a cobrança dessas preposições é muito intensa. Nas próximas lições você vê como a banca monta as armadilhas com elas.`],
      ['h', `Resumo de revisão`],
      ['ul', [
        `"Que" = "o qual/a qual", retoma antecedente: pronome relativo; inicia oração subordinada adjetiva.`,
        `"Que" substituível por "isso": conjunção integrante; inicia oração subordinada substantiva; não retoma termo nenhum.`,
        `Preposições e locuções prepositivas também são conectores (para, a fim de, ao, apesar de, a despeito de, por, devido a).`,
        `Mais cobrados: "para" e "por".`
      ]]
    ],
    5: [
      ['h', `Aula 2 · "Para" e "por": finalidade só com verbo anterior`],
      ['p', `A regra que você já conhece é que "para + verbo no infinitivo" indica finalidade. Ela continua certa, mas a banca arma uma armadilha: finalidade é uma característica própria de orações subordinadas adverbiais (ou de termos adverbiais simples). E qual é o critério para haver circunstância adverbial (finalidade, tempo, concessão, causa, conformidade, proporção)? O advérbio deve estar ligado a um verbo. Quando se trata de oração, ela tem que estar ligada a um verbo; se não estiver, não é finalidade.`],
      ['h', `Questão 1 (TCE-PE, Cebraspe): "para verificar" é finalidade?`],
      ['p', `O texto trata da auditoria e diz que ela "consiste também no acompanhamento dos eventos para verificar a qualidade dos serviços prestados por esses agentes". Para localizar o período, lembre-se de que ele vai da letra maiúscula até o ponto final; o parágrafo tinha dois períodos, e o segundo começa em "consiste também...". A questão afirma que, no segundo período do primeiro parágrafo, a oração introduzida pela preposição "para" ("para verificar...") introduz a finalidade da cobrança de valores nos contratos analisados.`],
      ['p', `Resolução: está errado. O "para verificar" não se liga ao verbo "consiste", e sim ao substantivo "acompanhamento" (acompanhamento para quê? para verificar a qualidade). Como se liga a um nome, é complemento do nome: oração subordinada completiva nominal, que completa o sentido do substantivo. Não há finalidade.`],
      ['h', `Dois exemplos para fixar a diferença`],
      ['ul', [
        `"Cacilda se levantou para ver o jogo": "para ver o jogo" liga-se ao verbo "levantou" (levantou para quê?). É finalidade.`,
        `"Não há previsão para começar o jogo": "para começar" liga-se ao substantivo "previsão". É oração completiva nominal; não dá para afirmar finalidade.`
      ]],
      ['h', `Questão 2: "por me fazer feliz" expressa finalidade?`],
      ['p', `Trecho: "Mas aquela casa me protegia e dentro dela uma mulher se esforçava por me fazer feliz". A pergunta é se a oração "por me fazer feliz" expressa ideia de finalidade. Aqui não há a armadilha anterior: o "por" não está ligado a um substantivo; está ligado ao verbo "esforçar-se", que vem antes. É uma oração reduzida de infinitivo.`],
      ['p', `Você poderia pensar: mas "por + infinitivo" não era causa? Normalmente sim, mas é preciso testar a substituição. Em "uma mulher se esforçava por me fazer feliz", o "por" pode ser trocado por "para" ou "a fim de": "se esforçava a fim de me fazer feliz". Logo, o "por" tem valor de "para" e a ideia é de finalidade. Resposta: certo. Aquilo que parecia não ser finalidade é, e a que parecia ser (a do TCE-PE) não é.`],
      ['h', `Questão 3 (concurso de Alagoas, 2018): "para se vacinar"`],
      ['p', `Texto: o Estado de São Paulo realiza o Dia D da vacinação contra a febre amarela e pretende imunizar 9,2 milhões de pessoas; "para se vacinar, as pessoas devem apresentar documento de identidade e carteiras do SUS e de vacinação". O item afirma que a preposição "para" exerce o papel de conectivo e introduz oração que expressa finalidade, e você julga as duas partes.`],
      ['ul', [
        `Conectivo? Sim. A preposição "para" estabelece coesão sequencial: une uma oração a outra, dentro do período, com um valor semântico específico (tempo, modo, causa, finalidade, proporção etc.).`,
        `Finalidade? Sim. O "para + infinitivo" precisa estar vinculado a um verbo da outra oração, e está: as pessoas devem apresentar o documento (com que finalidade? para se vacinar). A oração principal vem depois da subordinada, mas a ligação com o verbo existe. Item correto.`
      ]],
      ['h', `Resumo de revisão`],
      ['ul', [
        `"Para + infinitivo" só é finalidade se se ligar a um verbo; se se liga a um substantivo, é completiva nominal.`,
        `Teste: pergunte "faz o quê, para quê?" ao verbo; ou veja se o "para" depende de um nome ("previsão para", "acompanhamento para").`,
        `"Por + infinitivo" pode ter valor de "para": se couber "a fim de" ou "para", é finalidade.`,
        `Preposição "para" é conectivo: estabelece coesão sequencial entre orações.`
      ]]
    ],
    6: [
      ['h', `Aula 2 · Preposição x conjunção e conjunções coordenativas`],
      ['h', `Preposição ou conjunção?`],
      ['p', `É muito comum o aluno que começa a estudar gramática confundir preposição e conjunção. O que há de semelhante: ambas são termos invariáveis (não têm singular, plural, masculino ou feminino). A diferença está na função:`],
      ['ul', [
        `A preposição liga o elemento A ao elemento B fazendo com que B se subordine a A. Em "casa de madeira", o "de madeira" se liga à casa: a preposição "de" subordina "madeira" a "casa" e expressa matéria.`,
        `A conjunção liga elementos de mesma natureza (mesmo valor sintático e morfológico) e também liga orações. Em "Pedro e João são primos", o "e" liga dois núcleos do sujeito (dois substantivos); em "a sua irmã é linda e meiga", o "e" liga dois adjetivos.`,
        `Macete das principais preposições: "sobre, para, de, com, por, até, contra, em, a" (percebeu o "Ema"?). Não são todas, mas são as mais importantes.`
      ]],
      ['h', `Conjunções coordenativas`],
      ['p', `As conjunções se dividem em coordenativas (independência entre as orações) e subordinativas. As coordenativas são cinco. Vale decorar as principais:`],
      ['ul', [
        `Aditivas (adição, soma, acréscimo): e, nem, mas também, como também. Cuidado: o "mais" ou "mas" isolado é adversativa; o "mas também" aparece em "não só estuda, mas também trabalha" ou "não só estuda, como também trabalha".`,
        `Adversativas (contraste, oposição): mas, porém, contudo, todavia, entretanto, no entanto, não obstante.`,
        `Alternativas (alternância): ou, ou... ou, ora... ora.`,
        `Conclusivas (conclusão ou consequência na coordenação): logo, portanto, por conseguinte.`,
        `Explicativas: porque, pois.`
      ]],
      ['p', `Aluno confunde "portanto" com "contudo": "contudo" indica oposição; "portanto" indica conclusão. Não misture.`],
      ['h', `O "porquê" e o "pois"`],
      ['ul', [
        `O "porque" (junto e sem acento) como conjunção só dá duas ideias: explicação (coordenação) ou causa (subordinação). Se a banca perguntar se esse "porque" conclui algo em relação à oração anterior, a resposta é não. No português mais arcaico existia também o "porque" com valor de finalidade ("orai por que não entreis em tentação"), que não se usa mais; basta saber que é possível.`,
        `"Pois" antes do verbo: explicativo. "Pois" depois do verbo: conclusivo. Mas há um detalhe que aparece em várias questões: quando o "pois" está entre vírgulas, não importa a posição, ele é conclusivo, e pode ser substituído por "portanto" ou "logo".`
      ]],
      ['h', `A conjunção "e": valor e vírgula`],
      ['ul', [
        `"Estudou e foi aprovado no concurso": o "e" tem valor de adição (aconteceu o esperado).`,
        `"Estudou e foi reprovado no concurso": o "e" indica contraste, porque logo depois da primeira ideia vem uma ideia oposta. Aqui o "e" tem valor de "mas".`,
        `Três situações de vírgula antes do "e": duas facultativas e uma obrigatória. Facultativa quando o "e" tem valor de "mas" ("estudou, e foi reprovado"), e quando o "e" se repete (polissíndeto: "chega e fala e grita e senta e cai e morre"). Obrigatória quando orações coordenadas ligadas pelo "e" têm sujeitos diferentes: "Maricota saiu de casa, e Antônio reclamou muito" (quem saiu foi Maricota; quem reclamou foi Antônio). O Cebraspe adora cobrar isso.`
      ]],
      ['h', `Resumo de revisão`],
      ['ul', [
        `Preposição subordina B a A; conjunção liga elementos de mesma natureza ou orações.`,
        `Coordenativas: aditivas (e, nem, mas também), adversativas (mas, porém, contudo...), alternativas (ou, ora... ora), conclusivas (logo, portanto, por conseguinte), explicativas (porque, pois).`,
        `"Porque" junto: explicação ou causa, nunca conclusão.`,
        `"Pois" antes do verbo: explicativo; depois do verbo: conclusivo; entre vírgulas: conclusivo sempre.`,
        `"E" com sujeitos diferentes pede vírgula obrigatória; "e" com valor de "mas" admite vírgula facultativa.`
      ]]
    ],
    7: [
      ['h', `Aula 2 · Conjunções subordinativas e valores semânticos`],
      ['p', `Do outro lado estão as conjunções subordinativas, que também aparecem em locuções conjuntivas. Locução é qualquer grupo de duas ou mais palavras com um só valor, um só sentido na frase; na prática, as locuções conjuntivas são grupos de palavras que terminam em conjunção ("que"): já que, uma vez que, desde que, por mais que, salvo se, de forma que, para que, a fim de que. Quando a conjunção vira um quebra-cabeça, lembre-se: a sintaxe é um quebra-cabeça em que você ganha uma peça a cada aula e só monta tudo no fim.`],
      ['h', `Os nove valores das subordinativas`],
      ['ul', [
        `Causais (causa), concessivas, condicionais, conformativas, comparativas, consecutivas (consequência), finais (finalidade), temporais e proporcionais.`,
        `O "porque" junto e sem acento pode ser conjunção final (pouco usada), causal e explicativa (coordenação). Foque em causal e explicativa.`
      ]],
      ['h', `Concessiva x conformativa`],
      ['ul', [
        `Concessiva: expressa uma coisa que tem tudo para acontecer, mas não acontece (ou tem tudo para não acontecer e acontece), contrariando o senso comum. É muito parecida com a adversativa da coordenação, pois há uma contradição. Exemplos: "Embora fosse muito rico, vestia-se com trapos"; "Embora fosse muito feio, namorava uma mulher linda".`,
        `Conformativa: o oposto, é o que você espera, e acontece, de acordo com o combinado. Exemplo: "Fizemos tudo conforme combinamos ontem à noite" (combinamos uma coisa e, ao fazê-la, fizemos tudo conforme o combinado).`
      ]],
      ['h', `Causal e consecutiva`],
      ['p', `A causa traz a conjunção da causa; a consecutiva traz o "que" antecedido por "tão", "tal", "tanto" ou "tamanho". Exemplos: "Ela comeu tanta sopa que passou mal"; "Ela é tão bonita que até assusta"; "Ele comeu tanto bolo que ficou doente"; "Sua vontade de vencer foi tamanha que superou todos os obstáculos". A ideia é de consequência.`],
      ['p', `Guarde esta distinção: a consequência na coordenação é a das conclusivas (logo, portanto, por conseguinte), e a consequência na subordinação é a consecutiva (tão... que). Por isso, a conclusiva "por conseguinte" expressa mais consequência do que a conclusão em si.`],
      ['h', `Resumo de revisão`],
      ['ul', [
        `Locução conjuntiva: grupo de palavras que termina em conjunção (já que, desde que, para que, a fim de que).`,
        `Subordinativas: causais, concessivas, condicionais, conformativas, comparativas, consecutivas, finais, temporais, proporcionais.`,
        `Concessiva: tem tudo para acontecer e não acontece (embora, conquanto, malgrado).`,
        `Conformativa: acontece o esperado (conforme combinamos).`,
        `Consecutiva: tão/tal/tanto/tamanho + que.`
      ]]
    ],
    8: [
      ['h', `Aula 2 · Valor semântico: o verbo define; "se", "na medida em que" e "que"`],
      ['p', `O pulo do gato é este: não basta decorar que "se" é condicional. A banca monta frases em que a conjunção está disfarçada. Você analisa a oração destacada fazendo duas perguntas: existe mesmo uma condição (um fato que, para acontecer, depende de outro)? Cabe "caso" no lugar do "se"? Se não couber, não é condicional.`],
      ['h', `Exemplo 1: "Se o Brasil investe em educação, será um país forte no futuro"`],
      ['p', `Quem decora conjunção responde "condicional", porque começa com "se". Está errado: o "se" aqui tem valor de causa e equivale a "já que" (já que o Brasil investe em educação, será um país forte). O que determina a ideia de causa é o verbo "investe", no presente do indicativo, que traz certeza e convicção, ligada à relação de causa e efeito.`],
      ['p', `Se você reescrever com o verbo no futuro do subjuntivo ("se o Brasil investir em educação, será...") ou no imperfeito do subjuntivo ("se o Brasil investisse em educação, seria um país forte"), o valor muda e passa a ser condição. Repare na correlação verbal: "investisse... seria". O subjuntivo estabelece a ideia de hipótese, possibilidade, incerteza, que se atrela à condição; o indicativo dá certeza, que se atrela a causa e efeito. Em resumo: o que determina o valor é o verbo, não a conjunção.`],
      ['h', `Exemplo 2: "Na medida em que estuda, aprende mais"`],
      ['p', `Quem decora aponta "proporção". Errado: a proporção se faz com a locução conjuntiva "à medida que" (com crase, "a medida que", engessada). A locução "na medida em que" tem outro valor: equivale a "já que", "posto que", "uma vez que", ou seja, é causa. As duas são engessadas: não se pode dizer "na medida que" nem "a medida em que". Uma indica proporção e a outra, causa; essa é uma pegadinha clássica.`],
      ['h', `Exemplo 3: "Não sabemos se ela viajou"`],
      ['p', `Aqui a banca tenta fazer você marcar condicional. Teste: existe um fato que, para ocorrer, dependa do outro? Não. Inverta o período: "se ela viajou, não sabemos" não faz sentido; o que existe é uma oração que complementa o verbo da outra ("não sabemos o quê?"). A oração é subordinada substantiva, com valor de objeto direto; não há causa, proporção ou condição. O valor semântico é de integração: uma oração é integrada à outra por uma conjunção integrante, equivalente a "isso".`],
      ['h', `Resumo de revisão`],
      ['ul', [
        `Verbo no indicativo = certeza: causa e efeito; verbo no subjuntivo = hipótese: condição.`,
        `"Se" condicional equivale a "caso"; "se" causal equivale a "já que".`,
        `"Na medida em que" = causa; "à medida que" = proporção.`,
        `Oração que completa o verbo da outra é integrante (substantiva): o "se" de "não sabemos se ela viajou" não é condição.`
      ]]
    ],
    9: [
      ['h', `Aula 2 · As armadilhas do "-anto" e questões de prova`],
      ['p', `Existem cinco conjunções em "-anto" que confundem muito e servem de armadilha. Aprenda uma a uma:`],
      ['ul', [
        `Entretanto: coordenativa adversativa. Contraste, equivale a "porém" e "contudo".`,
        `Portanto: coordenativa conclusiva. Equivale a "logo" e "por isso". Não confunda com "contudo".`,
        `Porquanto: pode ser coordenativa (explicativa) ou subordinativa (causal), como o "porque". São conjunções "gêmeas".`,
        `Conquanto: subordinativa concessiva, equivale a "embora" e a "malgrado" (arcaico, só o Cebraspe e outras bancas usam de vez em quando). Exemplo: "Conquanto fosse muito alegre, naquele dia estava triste".`,
        `Enquanto: subordinativa adverbial temporal, indica simultaneidade, equivale a "ao passo que".`
      ]],
      ['h', `Macete do "Pork"`],
      ['p', `Para não confundir "por quanto" com "com quanto": "por quanto" tem o "por" do "porque" (explicativo ou causal); "com quanto" tem o "com" de concessão (equivale a "embora"). Lembre do Pork: por-quanto = porque; com-quanto = concessão.`],
      ['h', `Enquanto x quando`],
      ['p', `Ambas são conjunções temporais, mas "quando" indica tempo subsequente: "Quando ele chegou, todos aplaudiram" (ele chega, as pessoas aplaudem); "Quando ele saiu, todos comentaram" (ele sai, as pessoas comentam). Já "enquanto" indica tempo simultâneo, concomitante: "Enquanto ele falava, todos anotavam".`],
      ['h', `Questão 1 (Emap 2018, Cebraspe): o ponto de interrogação`],
      ['p', `Texto do Juca, "pessoas sensíveis": "...até que esse exame de consciência era cortado pela voz do interlocutor, que começava a falar de outras coisas que, aliás, o Juca não estava ouvindo, porque as pessoas sensíveis são as criaturas mais egoístas, mais coriáceas, mais impenetráveis do reino animal". A questão diz que, se após "animal" o ponto final fosse substituído por ponto de interrogação, tanto a correção gramatical quanto os sentidos do texto seriam preservados, pois a pergunta teria efeito apenas retórico.`],
      ['p', `Resolução: errado. Pergunta retórica é aquela que não busca resposta; apenas leva à reflexão ou a uma linha argumentativa. Esse efeito, de fato, resultaria. Mas a correção gramatical não se mantém: com a interrogação, o "porque" (conjunção explicativa ou causal, junto e sem acento) deixa de ser conjunção e passa a "por que" (preposição + pronome, separados). Se você mantivesse o "porque" como está, não teria correção. Uma simples interrogação desfaz a conjunção.`],
      ['h', `Questão 2: "o porém expressa conclusão"`],
      ['p', `Texto sobre alfabetizador e alfabetizando: "...eu, porém, sou capaz de não apenas sentir a caneta... mas também de escrever caneta...". A questão diz que "porém" expressa conclusão e poderia ser trocada por "portanto". Errado: "porém", "mas", "contudo", "entretanto", "todavia", "no entanto", "não obstante" são adversativas: estabelecem contraste com a oração anterior. "Portanto" tem valor de conclusão (logo, por isso).`],
      ['h', `Questão 3: o "se" da linha 21`],
      ['p', `Texto: "Não foi a lei que não funcionou, mas os responsáveis pelo dinheiro público, que por alguma razão não a cumpriram. De que adiantaria, então, tornar a lei mais rigorosa se nem nas condições atuais esses responsáveis estão sendo capazes de cumpri-la?" A questão diz que o "se" introduz oração interpretada como a condição para tornar a lei mais rigorosa. Teste do "caso": "de que adiantaria tornar a lei mais rigorosa caso nem nas condições atuais...?" não funciona. Já "já que nem nas condições atuais..." cabe, e "já que" é causa. Item errado: o "se" tem valor causal.`],
      ['h', `Resumo de revisão`],
      ['ul', [
        `Entretanto = adversativa; portanto = conclusiva; porquanto = explicativa ou causal; conquanto = concessiva; enquanto = temporal simultânea.`,
        `Macete do Pork: por quanto = porque; com quanto = concessão.`,
        `Interrogação depois de "porque" transforma conjunção em "por que" (preposição + pronome): perde a correção gramatical.`,
        `"Porém" é adversativa, não conclusiva.`,
        `Teste de substituição: "caso" = condição; "já que" = causa.`
      ]]
    ]
  };

  window.PCPE_QUESTOES[topic] = [
    {
      text: `Segundo a tabela de correlações de tempos e modos verbais, qual é a correlação mais cobrada em provas de concurso, especialmente da banca Cebraspe?`,
      options: [
        `Presente do indicativo com presente do indicativo.`,
        `Pretérito imperfeito do subjuntivo com futuro do pretérito do indicativo.`,
        `Futuro do subjuntivo com futuro do presente do indicativo.`,
        `Pretérito perfeito do indicativo com pretérito mais-que-perfeito.`
      ],
      correct: 1,
      exp: `A correlação mais cobrada é o imperfeito do subjuntivo com o futuro do pretérito ("Se você estudasse, saberia as respostas"). As demais são correlações válidas, mas não a mais cobrada.`
    },
    {
      text: `Assinale a alternativa em que a oração principal e a subordinada estão em correlação adequada, com a principal no presente do indicativo.`,
      options: [
        `Espero que ele trouxera um presente para mim.`,
        `Espero que ele traria um presente para mim.`,
        `Espero que ele traga um presente para mim.`,
        `Espero que ele trazia um presente para mim.`
      ],
      correct: 2,
      exp: `Presente do indicativo combina com presente do subjuntivo, que indica hipótese ("espero que ele traga"). As outras formas (mais-que-perfeito, futuro do pretérito e imperfeito) não correlacionam com o presente.`
    },
    {
      text: `Qual das frases traz a correlação "tivesse feito... teria ficado" (mais-que-perfeito composto do subjuntivo + futuro do pretérito composto) corretamente?`,
      options: [
        `Se ele tivesse feito a compra do mês, a esposa não teria ficado brava.`,
        `Se ele fizesse a compra do mês, a esposa não teria ficado brava.`,
        `Se ele tivesse feito a compra do mês, a esposa não ficou brava.`,
        `Se ele fez a compra do mês, a esposa não teria ficado brava.`
      ],
      correct: 0,
      exp: `O composto "tivesse feito" pede o futuro do pretérito composto "teria ficado". As outras alternativas misturam tempos que não se correlacionam: imperfeito com composto, composto com perfeito ou perfeito com composto.`
    },
    {
      text: `Em "Quando eu passar por lá, avisarei a você", a correlação verbal é:`,
      options: [
        `Pretérito perfeito do indicativo com futuro do presente.`,
        `Presente do subjuntivo com pretérito imperfeito do indicativo.`,
        `Futuro do pretérito com pretérito imperfeito do subjuntivo.`,
        `Futuro do subjuntivo com futuro do presente do indicativo.`
      ],
      correct: 3,
      exp: `"Passar" é futuro do subjuntivo ("quando eu passar, quando eu disser, quando eu fizer") e "avisarei" é futuro do presente: dois futuros correlacionam bem. As demais alternativas trocam tempos e modos.`
    },
    {
      text: `Em "consiste também no acompanhamento dos eventos para verificar a qualidade dos serviços prestados", julgue a afirmação de que a oração introduzida por "para" expressa finalidade.`,
      options: [
        `Correta, porque "para + infinitivo" sempre indica finalidade.`,
        `Errada, porque "para verificar" se liga ao substantivo "acompanhamento" e é completiva nominal.`,
        `Correta, porque o "para" liga a oração ao verbo "consiste".`,
        `Errada, porque "para" é conjunção integrante e não conectivo.`
      ],
      correct: 1,
      exp: `Finalidade exige ligação com um verbo. O "para verificar" completa o substantivo "acompanhamento", logo é completiva nominal. "Sempre" é falso, o "para" não se liga a "consiste" e "para" não é conjunção integrante.`
    },
    {
      text: `Em "uma mulher se esforçava por me fazer feliz", julgue a afirmação de que a oração "por me fazer feliz" expressa ideia de finalidade.`,
      options: [
        `Certa, porque "por" pode ser substituído por "para" e se liga ao verbo "esforçava".`,
        `Errada, porque "por + infinitivo" sempre indica causa.`,
        `Errada, porque está ligada a um substantivo.`,
        `Certa, porque toda preposição indica finalidade.`
      ],
      correct: 0,
      exp: `O "por" equivale a "para" ou "a fim de" e se liga ao verbo "esforçava", logo há finalidade. "Sempre causa" é falso; não há substantivo antecedente; e nem toda preposição indica finalidade.`
    },
    {
      text: `Na frase "Estudou como nunca fizera antes, conseguiu, pois, a aprovação", o "pois" é:`,
      options: [
        `Explicativo, porque equivale a "porque" e introduz uma causa.`,
        `Adversativo, porque indica oposição.`,
        `Alternativo, porque oferece uma opção.`,
        `Conclusivo, porque está entre vírgulas e equivale a "portanto" ou "logo".`
      ],
      correct: 3,
      exp: `O "pois" entre vírgulas é conclusivo, independentemente da posição, e pode ser trocado por "portanto" ou "logo". Não é explicativo, nem adversativo, nem alternativo.`
    },
    {
      text: `Sobre a conjunção "porque" na pergunta: "...porque as pessoas sensíveis são as criaturas mais egoístas do reino animal?", se o ponto final fosse trocado por interrogação, é correto afirmar que:`,
      options: [
        `A correção gramatical e o sentido seriam mantidos, e o "porque" continuaria como conjunção.`,
        `O "porque" passaria a conclusivo.`,
        `A pergunta deixaria de ser retórica e o "porque" passaria a explicativo.`,
        `O "porque" deixaria de ser conjunção e viraria "por que" (preposição mais pronome), sem manter a correção gramatical.`
      ],
      correct: 3,
      exp: `A pergunta retórica se manteria, mas, sem a conjunção, a forma correta passaria a ser "por que" (preposição + pronome). "Porque" nunca é conclusivo e a pergunta continua retórica.`
    },
    {
      text: `Para não confundir "porquanto" e "conquanto", use o macete do Pork. Assinale a alternativa que o aplica corretamente.`,
      options: [
        `"Porquanto" é concessiva e "conquanto" é causal.`,
        `Ambas são conclusivas e equivalem a "logo".`,
        `"Porquanto" equivale a "porque" (explicativa ou causal) e "conquanto" equivale a "embora" (concessiva).`,
        `"Porquanto" equivale a "embora" e "conquanto" equivale a "porque".`
      ],
      correct: 2,
      exp: `"Por quanto" tem o "por" de "porque" (explicação ou causa); "com quanto" tem o "com" de concessão (embora, malgrado). As demais alternativas invertem ou ignoram o macete.`
    },
    {
      text: `Em "Se o Brasil investe em educação, será um país forte no futuro", o valor semântico da oração iniciada por "se" é:`,
      options: [
        `Condição, porque começa pela conjunção "se".`,
        `Causa, porque o verbo no presente do indicativo traz certeza e "se" equivale a "já que".`,
        `Proporção, porque o país melhora à medida que investe.`,
        `Concessão, porque contraria o senso comum.`
      ],
      correct: 1,
      exp: `O verbo "investe" está no indicativo (certeza), o que liga a oração à ideia de causa e efeito; "se" cabe trocar por "já que". Com "investir" ou "investisse" (subjuntivo) o valor seria condicional. Não há proporção nem concessão.`
    }
  ];
})();
