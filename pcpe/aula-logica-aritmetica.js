(function () {
  'use strict';
  window.PCPE_TOPIC_GUIDES = window.PCPE_TOPIC_GUIDES || {};
  window.PCPE_DEEPENING = window.PCPE_DEEPENING || {};
  window.PCPE_QUESTOES = window.PCPE_QUESTOES || {};
  const topic = 'Problemas aritméticos';
  const base = window.PCPE_TOPIC_GUIDES[topic] || {};
  window.PCPE_TOPIC_GUIDES[topic] = Object.assign({}, base, {
    lessons: [
      [
        `Questão 1 · Montando a tabela de percentuais`,
        `Quando o enunciado traz uma tabela com a distribuição de um total em faixas percentuais, as faixas somam 100%. Se uma delas está faltando (por exemplo, "não informaram"), você a descobre por complemento: 100% menos a soma das faixas conhecidas.`,
        `Pesquisa sobre a intenção de participar de um evento cultural, com quatro faixas: jovens, adultos, idosos e não informaram. Jovens = 25%, as outras duas faixas conhecidas = 20% e 40%. Soma: 25 + 20 + 40 = 85%. Falta 100 - 85 = 15%, que é o "não informado".`,
        `Antes de qualquer conta, descubra o dado que o enunciado esconde. Aqui, o percentual de "não informado" não está dado; sem ele, você não consegue usar a informação do número de pessoas.`
      ],
      [
        `Questão 1 · De uma parte conhecida ao total (100%)`,
        `O enunciado dá o número de pessoas que corresponde a um percentual (jovens + não informado = 460 pessoas). Primeiro, converta as faixas em percentual somado: 25% + 15% = 40%. Depois, descubra quanto vale 100% por regra de três ou, de forma mais rápida, achando o valor de 10%.`,
        `40% correspondem a 460 pessoas. Dividindo por 4: 10% = 460 / 4 = 115. Multiplicando por 10: 100% = 1.150 pessoas.`,
        `Antes de calcular, relacione a parte ao percentual correto. Se você usar só 15% (não informado) ou só 25% (jovens) com os 460, o total ficará errado.`
      ],
      [
        `Questão 1 · Resposta final e erro comum`,
        `Leia o que a pergunta pede: o número de pessoas que NÃO manifestou interesse. Como 80% manifestaram, 20% não manifestaram. Calcule 20% do total de 1.150: 10% = 115, então 20% = 230. A alternativa correta é a B (230).`,
        `Caminho alternativo: como 20% é a metade de 40% e 40% correspondem a 460, 20% = 460 / 2 = 230 sem precisar achar o total.`,
        `Erro típico: usar o 15% (não informado) como se fosse o percentual dos desinteressados. O percentual dos sem interesse é 20% (100% - 80%). Releia a pergunta e confirme a que grupo o percentual se refere.`
      ],
      [
        `Questão 2 · "Reduzir em" ou "reduzir para"`,
        `Em problemas de velocidade, a primeira armadilha é a expressão "reduzir em 20" (subtrair 20 da velocidade) contra "reduzir para 20" (a nova velocidade é 20). Na questão da equipe de entregas, 210 km a 70 km/h levam 3 horas; a velocidade foi reduzida em 20, logo a nova velocidade média é 70 - 20 = 50 km/h.`,
        `Trajeto de 210 km, velocidade normal 70 km/h, tempo normal 3 horas. Obras na rodovia: velocidade reduzida em 20, ou seja, passa a 50 km/h. Pergunta: qual o tempo adicional gasto para completar o mesmo trajeto?`,
        `Quem leu "reduzir para 20" e montou 20 km/h erra todo o resto. Subtraia: 70 - 20 = 50. O trajeto é o mesmo, então você nem precisa usar os 210 km na regra de três.`
      ],
      [
        `Questão 2 · Regra de três inversa em minutos`,
        `Velocidade e tempo, para o mesmo trajeto, são grandezas inversamente proporcionais: mais lento, mais tempo. Por isso a regra de três é inversa, e você multiplica os valores "em linha reta" (horizontalmente). Converta o tempo para minutos antes de calcular.`,
        `70 km/h está para 180 minutos (3 h), assim como 50 km/h está para x. Como é inversa: 50 x = 70 x 180, ou seja, x = 12.600 / 50 = 252 minutos. O tempo adicional é 252 - 180 = 72 minutos.`,
        `A pergunta é o tempo ADICIONAL, não o tempo total. Se você parar em 252, errou: precisa subtrair os 180 minutos que já eram gastos.`
      ],
      [
        `Questão 2 · Conferência em horas e conversão de unidades`,
        `Você pode resolver em horas e conferir. O resultado em horas, 4,2, precisa ser convertido: a parte decimal é uma fração da hora. 0,2 hora é 20% de 60 minutos, que dá 12 minutos. Portanto, 4,2 horas é 4 horas e 12 minutos, o mesmo que 252 minutos.`,
        `Em horas: 70 x 3 = 50 x t, t = 210 / 50 = 4,2 horas = 4 h 12 min. O adicional é 4 h 12 min - 3 h = 1 h 12 min = 72 minutos. Mesmo resultado, porém com mais risco de errar a conversão.`,
        `Em horas, a vírgula engana: 4,2 horas NÃO é 4 h 20 min. Por isso é mais seguro converter tudo para minutos antes de começar e trabalhar com números inteiros.`
      ]
    ],
    practice: [
      `Uma pesquisa distribuiu os entrevistados em quatro faixas: 25%, 20%, 40% e "não informaram". Qual é o percentual de "não informaram"?`,
      `Sabendo que 40% de um total correspondem a 460 pessoas, explique como achar o total e dê o resultado.`,
      `Se 80% dos entrevistados manifestaram interesse e o total é 1.150, quantos não manifestaram? Mostre um segundo caminho que dispensa o total.`,
      `Qual é a diferença entre "reduzir a velocidade em 20" e "reduzir a velocidade para 20"? Aplique a uma velocidade de 70 km/h.`,
      `Resolva: 70 km/h gastam 3 horas num trajeto; a 50 km/h, quanto tempo adicional se gasta? Resolva em minutos e confira em horas.`
    ],
    answers: [
      `25 + 20 + 40 = 85; 100 - 85 = 15%.`,
      `Ache 10% dividindo por 4 (460 / 4 = 115) e multiplique por 10 para obter 100%: 1.150 pessoas. Ou monte a regra de três: 40% está para 460 assim como 100% está para x.`,
      `Não manifestaram 100% - 80% = 20%; 10% de 1.150 = 115, então 20% = 230. Segundo caminho: como 40% = 460, metade (20%) = 230.`,
      `Reduzir EM 20 é subtrair: 70 - 20 = 50 km/h. Reduzir PARA 20 é a nova velocidade valer 20 km/h.`,
      `Regra de três inversa: 50 x = 70 x 180, x = 252 min; adicional = 252 - 180 = 72 min. Em horas: 210 / 50 = 4,2 h = 4 h 12 min; adicional 1 h 12 min = 72 min.`
    ]
  });

  window.PCPE_DEEPENING[topic] = {
    1: [
      ['h', 'O que esta questão pede'],
      ['p', 'Uma pesquisa sobre a intenção de participar de um evento cultural foi feita com os habitantes de uma cidade. Os entrevistados foram distribuídos em quatro faixas: jovens, adultos, idosos e "não informaram" (quem não quis dizer a idade), conforme uma tabela de percentuais. O enunciado dá dois dados: a soma do número de entrevistados nas faixas "jovens" e "não informado" corresponde a 460 pessoas, e, do total de entrevistados, 80% disseram ter interesse. A pergunta é o número de pessoas que NÃO manifestou interesse.'],
      ['h', 'Primeira decisão: o que falta descobrir'],
      ['p', 'Para usar os 460, você precisa saber que percentual do total é "jovens + não informado". O percentual dos jovens está na tabela (25%), mas o dos "não informaram" não está dado. Então o primeiro passo é achar o percentual de "não informado".'],
      ['p', 'Em uma tabela de distribuição, as faixas somam 100%. As faixas conhecidas são 25% (jovens) e outras duas faixas de 20% e 40%. Some: 25 + 20 = 45 e 45 + 40 = 85. Falta 100 - 85 = 15, portanto "não informado" = 15%.'],
      ['ol', [
        'Some todas as faixas que o enunciado ou a tabela mostram: 25% + 20% + 40% = 85%.',
        'Subtraia de 100%: 100% - 85% = 15%.',
        'Confira: 25% + 20% + 40% + 15% = 100%.'
      ]],
      ['h', 'Pegadinha: calcular certo, no dado errado'],
      ['p', 'Neste ponto da questão aparece um erro frequente: o candidato acha o 15% e segue, mas esquece que o 15% ainda não é a resposta; ele só serve para montar o percentual dos 460. Resolver passo a passo evita que você misture os percentuais (15% de não informado, 20% de sem interesse, 25% de jovens).'],
      ['h', 'Resumo de revisão'],
      ['ul', [
        'Percentuais de uma tabela de distribuição somam 100%.',
        'Percentual faltante = 100% - soma dos conhecidos.',
        'Não informado = 100% - (25% + 20% + 40%) = 15%.',
        'Não confunda o percentual que você achou com o que a pergunta pede.'
      ]]
    ],
    2: [
      ['h', 'Juntando as faixas dos 460'],
      ['p', 'O enunciado diz que jovens e não informado correspondem juntos a 460 pessoas. Como os jovens são 25% e os não informados são 15%, a soma é 25% + 15% = 40%. Ou seja: 40% do total correspondem a 460 pessoas.'],
      ['h', 'Descobrindo 100%: regra de três'],
      ['p', 'O que você precisa agora é do valor de 100% (o total de entrevistados). Em regra de três direta: 40% está para 460 assim como 100% está para x, ou seja, x = 460 x 100 / 40 = 1.150.'],
      ['h', 'Atalho: achar 10% primeiro'],
      ['p', 'Como 40% é 4 vezes 10%, dividir por 4 dá o valor de 10%. Esse atalho é muito mais rápido que a regra de três completa.'],
      ['ol', [
        'Divida o percentual por 4: 40% / 4 = 10%.',
        'Divida a quantidade por 4: 460 / 4 = 115. Então 10% = 115 pessoas.',
        'Multiplique por 10 para chegar a 100%: 115 x 10 = 1.150.'
      ]],
      ['p', 'Conferência: 115 x 4 = 460 (o que bate com os 40%) e 115 x 10 = 1.150. O total de entrevistados é 1.150.'],
      ['p', 'Outra forma é somar percentuais a partir de 40%: como a questão pede também os 20% sem interesse, 40% + 20% de 1.150 também serviria. O caminho é o mesmo; o importante é ter um método e conferir.'],
      ['h', 'Pegadinha'],
      ['p', 'Ao dividir 460 por 4, o resultado é 115 (e não 150 nem 155). Faça a conta devagar: 4 x 100 = 400, sobram 60; 4 x 15 = 60. Logo, 115.'],
      ['h', 'Resumo de revisão'],
      ['ul', [
        'Jovens (25%) + não informado (15%) = 40%, que correspondem a 460 pessoas.',
        '10% = 460 / 4 = 115.',
        '100% = 115 x 10 = 1.150 pessoas.',
        'Regra de três: x = 460 x 100 / 40 = 1.150.'
      ]]
    ],
    3: [
      ['h', 'Leia o que a pergunta quer'],
      ['p', 'A pergunta é: qual é o número de pessoas que não manifestou interesse? O enunciado disse que 80% do total manifestaram interesse; logo, 20% não manifestaram (100% - 80% = 20%).'],
      ['h', 'Calculando 20% de 1.150'],
      ['ol', [
        '10% de 1.150 = 115 (basta deslocar a vírgula uma casa).',
        '20% é o dobro de 10%: 2 x 115 = 230.',
        'Resposta: 230 pessoas não manifestaram interesse, alternativa B.'
      ]],
      ['h', 'Segundo caminho, sem achar o total'],
      ['p', 'Uma alternativa é perceber que os 20% procurados são metade dos 40% que correspondem a 460: 460 / 2 = 230. Você chega ao mesmo resultado sem calcular os 1.150, o que economiza tempo e serve como conferência.'],
      ['h', 'Onde está o erro de quem não chega ao gabarito'],
      ['p', 'O erro típico é calcular e usar o 15% (o percentual de "não informado" que acabou de achar) como se fosse o percentual das pessoas sem interesse. O percentual de sem interesse é outro: 20%. Quem cometeu esse erro até achou o total corretamente (1.150); errou na última etapa, por falta de atenção ao que a pergunta pede.'],
      ['p', 'Passo a passo completo da questão:'],
      ['ol', [
        'Achar o não informado em percentual: 100% - 85% = 15%.',
        'Somar jovens e não informado: 25% + 15% = 40%, que correspondem a 460 pessoas.',
        'Achar 100%: 1.150 pessoas.',
        'Ler a pergunta (sem interesse): 100% - 80% = 20%.',
        'Calcular 20% de 1.150 = 230.'
      ]],
      ['h', 'Resumo de revisão'],
      ['ul', [
        'Sem interesse = 100% - 80% = 20%.',
        '20% de 1.150 = 230 (10% = 115; dobro = 230).',
        'Gabarito: alternativa B (230).',
        'Atalho: 20% é a metade de 40%, e 460 / 2 = 230.',
        'Erro comum: usar 15% (não informado) em vez de 20%.'
      ]]
    ],
    4: [
      ['h', 'O enunciado'],
      ['p', 'Uma equipe de entregas de suprimentos precisa percorrer um trajeto de 210 km entre um centro de distribuição e o ponto final. Em condições normais, à velocidade média constante de 70 km/h, ela gasta 3 horas. Por causa de obras na rodovia, foi obrigada a reduzir a velocidade média em 20. Assumindo que o trajeto é o mesmo, qual o tempo adicional gasto para completar o trajeto?'],
      ['h', 'A armadilha da expressão "em 20"'],
      ['p', 'Reduzir a velocidade EM 20 não é o mesmo que reduzir PARA 20. Quem trata como "para 20" monta "20 km/h" e erra. Aqui, a velocidade que era 70 km/h passa a ser 70 - 20 = 50 km/h.'],
      ['h', 'Os dados que você de fato usa'],
      ['ul', [
        'Velocidade normal: 70 km/h, que gasta 3 horas.',
        'Velocidade com obras: 50 km/h, que gastará x.',
        'O trajeto é o mesmo (assumido no enunciado); por isso você NÃO precisa usar os 210 km na regra de três.'
      ]],
      ['p', 'Uma regra de três que misture o tempo de 3 horas com uma velocidade de 20 km/h (por ter interpretado "reduzir para 20") dá resultado errado. O comando "reduzir em 20" vem logo antes da pergunta; leia-o devagar.'],
      ['h', 'O que se pergunta'],
      ['p', 'A questão pede o tempo ADICIONAL: a diferença entre o tempo com as obras e o tempo normal. Guarde essa informação para o final.'],
      ['h', 'Resumo de revisão'],
      ['ul', [
        'Reduzir EM 20: 70 - 20 = 50 km/h. Reduzir PARA 20: 20 km/h.',
        'Mesmo trajeto: use só velocidade e tempo na regra de três.',
        'A pergunta é o tempo adicional, não o tempo total.'
      ]]
    ],
    5: [
      ['h', 'Que tipo de regra de três'],
      ['p', 'Se você anda mais devagar, demora mais para fazer o mesmo percurso. Quando uma grandeza diminui e a outra aumenta, as grandezas são inversamente proporcionais e a regra de três é inversa. Use a pergunta-teste: "estou mais lento, vou demorar mais ou menos?". Mais, logo as setas apontam em sentidos opostos (inversa).'],
      ['h', 'Conversão para minutos'],
      ['p', 'Trabalhar em horas com decimais é arriscado. Converta 3 horas para minutos: 3 x 60 = 180 minutos.'],
      ['h', 'Montagem e conta'],
      ['p', 'Monte a tabela com as duas velocidades e os dois tempos:'],
      ['ul', [
        '70 km/h ............ 180 min',
        '50 km/h ............ x'
      ]],
      ['p', 'Como a regra é inversa, multiplicam-se os valores em linha reta (horizontalmente): 50 x x = 70 x 180. Isolando: x = (70 x 180) / 50.'],
      ['ol', [
        'Simplifique cortando o zero: 70/50 = 7/5, portanto x = 7 x 180 / 5.',
        'Dividindo 180 por 5: 36. Então x = 7 x 36 = 252. (Outro caminho: simplificar 70 e 50 por 5 dá 14 e 10; 14 x 18 = 252.)',
        'Conferência da multiplicação: 14 x 18 = 10 x 18 + 4 x 18 = 180 + 72 = 252.'
      ]],
      ['p', 'Então x = 252 minutos é o tempo total a 50 km/h, mas a pergunta é o tempo adicional.'],
      ['h', 'O tempo adicional'],
      ['p', 'O tempo adicional é o tempo novo menos o tempo normal: 252 - 180 = 72 minutos. Resposta: 72 minutos a mais.'],
      ['h', 'Pegadinha'],
      ['p', 'Marcar 252 (o tempo total) em vez de 72 (o adicional) é o erro clássico de quem não relê a pergunta. O "adicional" exige a subtração final.'],
      ['h', 'Resumo de revisão'],
      ['ul', [
        'Velocidade e tempo no mesmo trajeto: inversamente proporcionais.',
        'Regra inversa: multiplique em linha reta: 50 x = 70 x 180.',
        'x = 252 minutos (tempo total a 50 km/h).',
        'Adicional = 252 - 180 = 72 minutos.'
      ]]
    ],
    6: [
      ['h', 'Resolvendo em horas'],
      ['p', 'Quem prefere trabalhar direto em horas monta a mesma regra inversa: 70 km/h gasta 3 horas e 50 km/h gasta t horas. Então 50 t = 70 x 3 = 210, e t = 210 / 50 = 4,2 horas. Você chega à resposta 4,2 horas, mas ainda não terminou: é preciso interpretar essa vírgula.'],
      ['h', 'O que significa ",2" hora'],
      ['p', 'A parte decimal 0,2 é uma fração da hora: 20% de 1 hora, ou seja, 20% de 60 minutos = 12 minutos. Por isso, 4,2 horas = 4 horas e 12 minutos (e não 4 horas e 20 minutos). Convertendo para minutos: 4 x 60 + 12 = 252 minutos, exatamente o que a regra de três em minutos já tinha dado.'],
      ['h', 'Tempo adicional na unidade que preferir'],
      ['ol', [
        'Tempo com obras: 4 h 12 min.',
        'Tempo normal: 3 h.',
        'Adicional: 4 h 12 min - 3 h = 1 h 12 min.',
        'Em minutos: 1 h 12 min = 60 + 12 = 72 minutos.'
      ]],
      ['p', 'Dá na mesma: 72 minutos. A diferença é que, em horas, existe o risco extra de errar a conversão de decimal para minutos. Por isso, o método recomendado é transformar tudo para minutos logo no começo.'],
      ['h', 'Por que preferir minutos'],
      ['ul', [
        'Os números ficam inteiros (180, 252, 72), sem vírgula.',
        'Você evita o erro de ler 4,2 h como 4 h 20 min.',
        'A conferência (252 - 180) é imediata.'
      ]],
      ['h', 'Roteiro geral para problemas de porcentagem e regra de três'],
      ['ol', [
        'Leia o enunciado e destaque os dados e a pergunta (o que o enunciado pede, de fato).',
        'Identifique o dado escondido (o percentual faltante, a velocidade nova).',
        'Escolha a operação certa: complemento de 100%, atalho dos 10%, regra de três direta ou inversa.',
        'Converta unidades antes de calcular (horas para minutos).',
        'Releia a pergunta e responda exatamente o que ela pede (sem interesse, tempo adicional).'
      ]],
      ['h', 'Resumo de revisão'],
      ['ul', [
        'Em horas: 210 / 50 = 4,2 h = 4 h 12 min (0,2 h = 12 min).',
        'Adicional: 1 h 12 min = 72 minutos, igual ao resultado em minutos.',
        'Prefira minutos: números inteiros e menos risco.',
        'Sempre confira a pergunta: a resposta final é o que ela pede, não o resultado intermediário.'
      ]]
    ]
  };

  window.PCPE_QUESTOES[topic] = [
    {
      text: `Uma pesquisa distribuiu os entrevistados em quatro faixas: 30%, 35%, 25% e "não informaram". Qual é o percentual da faixa "não informaram"?`,
      options: [
        `5%`,
        `10%`,
        `15%`,
        `20%`
      ],
      correct: 1,
      exp: `As faixas somam 100%. As conhecidas somam 30 + 35 + 25 = 90%; faltam 100 - 90 = 10%. Os demais valores não completam 100% com as faixas dadas.`
    },
    {
      text: `Os jovens (25%) e os que não informaram a idade (15%) correspondem, juntos, a 460 entrevistados. Quantos entrevistados há no total?`,
      options: [
        `1.150`,
        `1.840`,
        `1.550`,
        `690`
      ],
      correct: 0,
      exp: `25% + 15% = 40%, que correspondem a 460. 10% = 460 / 4 = 115 e 100% = 115 x 10 = 1.150. 1.840 seria 460 x 4 (multiplicar em vez de dividir); 1.550 vem de erro de conta; 690 resulta de somar 460 e a metade.`
    },
    {
      text: `Do total de 1.150 entrevistados, 80% manifestaram interesse em participar do evento. Quantas pessoas NÃO manifestaram interesse?`,
      options: [
        `172`,
        `460`,
        `230`,
        `920`
      ],
      correct: 2,
      exp: `Sem interesse = 100% - 80% = 20%. 10% de 1.150 = 115, logo 20% = 230. 920 são os 80% que manifestaram interesse; 460 corresponde a 40%; 172 é aproximadamente 15%, percentual que não é o pedido.`
    },
    {
      text: `Um candidato calculou corretamente o total (1.150), mas errou a resposta ao calcular o número de pessoas sem interesse. Qual é o erro mais provável, segundo a resolução da questão?`,
      options: [
        `Dividiu 460 por 2 em vez de por 4.`,
        `Somou 25% e 15% e obteve 50%.`,
        `Calculou 20% de 1.150 em vez de 15%.`,
        `Usou o percentual de "não informado" (15%) em vez do percentual dos sem interesse (20%).`
      ],
      correct: 3,
      exp: `O erro típico é aplicar 15% (o percentual de "não informado") ao total, quando a pergunta pede os sem interesse, que são 20%. Calcular 20% é justamente o certo, portanto C está invertida; A e B contradizem o fato de que o total foi achado corretamente.`
    },
    {
      text: `A velocidade média de uma equipe é de 70 km/h. Em um trecho com obras, ela foi reduzida EM 20. Qual é a nova velocidade média?`,
      options: [
        `20 km/h`,
        `50 km/h`,
        `90 km/h`,
        `14 km/h`
      ],
      correct: 1,
      exp: `Reduzir em 20 é subtrair: 70 - 20 = 50 km/h. "Reduzir para 20" daria 20 km/h (A); 90 é uma soma; 14 é uma divisão sem sentido.`
    },
    {
      text: `Para um mesmo trajeto, ao reduzir a velocidade média, o tempo de viagem aumenta. Qual é a relação entre velocidade e tempo e o tipo de regra de três?`,
      options: [
        `Inversamente proporcionais; regra de três inversa.`,
        `Diretamente proporcionais; regra de três direta.`,
        `Inversamente proporcionais; regra de três direta.`,
        `Não são proporcionais; não se usa regra de três.`
      ],
      correct: 0,
      exp: `Mais lento, mais tempo: uma grandeza diminui quando a outra aumenta, o que caracteriza grandezas inversamente proporcionais e exige regra de três inversa (multiplicação em linha reta). As demais combinações ignoram essa relação.`
    },
    {
      text: `Um trajeto de 120 km é feito a 60 km/h em 2 horas. Devido a obras, a velocidade média foi reduzida em 20. Qual é o tempo adicional, assumindo o mesmo trajeto?`,
      options: [
        `30 minutos`,
        `45 minutos`,
        `90 minutos`,
        `60 minutos`
      ],
      correct: 3,
      exp: `Nova velocidade: 60 - 20 = 40 km/h. Em minutos: 60 km/h gasta 120 min; 40 km/h gasta x. Regra inversa: 40 x = 60 x 120, x = 180 min. Adicional: 180 - 120 = 60 minutos. 180 é o tempo total (pegadinha); 30 e 45 não decorrem da regra de três.`
    },
    {
      text: `O tempo de 4,2 horas, obtido numa conta feita em horas, corresponde a:`,
      options: [
        `4 horas e 20 minutos`,
        `4 horas e 12 minutos`,
        `4 horas e 2 minutos`,
        `4 horas e 42 minutos`
      ],
      correct: 1,
      exp: `A parte decimal 0,2 é 20% de 60 minutos = 12 minutos; logo, 4,2 h = 4 h 12 min (252 min). O erro comum é ler ",2" como 20 minutos (A); C e D tratam o decimal como minutos.`
    },
    {
      text: `Na questão da equipe de entregas, uma pessoa resolveu a regra de três e encontrou 252 minutos para o trajeto a 50 km/h, e marcou 252 como resposta. A pergunta era o tempo adicional gasto. Qual é a resposta correta?`,
      options: [
        `72 minutos`,
        `180 minutos`,
        `252 minutos`,
        `432 minutos`
      ],
      correct: 0,
      exp: `O adicional é o tempo novo menos o tempo normal: 252 - 180 = 72 minutos. 252 é o tempo total; 180 é o tempo normal; 432 soma os dois, o que não responde à pergunta.`
    },
    {
      text: `Sabendo que 40% de um total correspondem a 320 pessoas, qual é o total (100%), usando o atalho de achar primeiro 10%?`,
      options: [
        `1.280`,
        `400`,
        `800`,
        `640`
      ],
      correct: 2,
      exp: `10% = 320 / 4 = 80; 100% = 80 x 10 = 800. 1.280 resulta de multiplicar por 4 em vez de dividir; 640 dobra os 320 (80%); 400 é um valor sem relação com a conta.`
    }
  ];
})();
