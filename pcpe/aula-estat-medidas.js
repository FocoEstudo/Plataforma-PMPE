(function () {
  'use strict';
  window.PCPE_TOPIC_GUIDES = window.PCPE_TOPIC_GUIDES || {};
  window.PCPE_DEEPENING = window.PCPE_DEEPENING || {};
  window.PCPE_QUESTOES = window.PCPE_QUESTOES || {};
  const topic = 'Média, mediana e moda';
  const base = window.PCPE_TOPIC_GUIDES[topic] || {};
  window.PCPE_TOPIC_GUIDES[topic] = Object.assign({}, base, {
    lessons: [
      [
        `Aula · Medidas de tendência central e média aritmética simples`,
        `Média, moda e mediana são as medidas de tendência central (também chamadas, em alguns lugares, de medidas de posição): elas resumem um conjunto de dados por um valor que tende ao centro da distribuição. A média aritmética simples é a soma das parcelas dividida pelo número de parcelas: x-barra = (x1 + x2 + ... + xn) / n. É a conta que você faz para tirar a média de três ou quatro provas.`,
        `Uma livraria vende livros de literatura de segunda a sábado (seis dias). A soma das vendas da semana é 138 livros, então a média é 138 ÷ 6 = 23 livros por dia. Nos nascimentos de uma maternidade em 12 meses, a soma é 432, e a média é 432 ÷ 12 = 36 nascimentos por mês.`,
        `A média pode dar valor quebrado (22,5; 23,8) mesmo que os dados sejam inteiros; não há problema. O divisor é o número de parcelas: seis dias, divida por 6; doze meses, divida por 12.`
      ],
      [
        `Aula · Média aritmética ponderada`,
        `Quando os valores se repetem, a tabela traz a frequência (f), isto é, quantas vezes cada valor x ocorre. Então você multiplica cada valor pela sua frequência, soma tudo e divide pelo total de ocorrências: x-barra = soma(x · f) / soma(f). Essa é a média ponderada: ela leva em conta quantas vezes cada valor aconteceu.`,
        `Salários de uma empresa, em tabela, com 38 funcionários: as quatro primeiras linhas são 12 funcionários com R$ 600, 7 com R$ 900, 5 com R$ 1.200 e 6 com R$ 1.800, que somam 7.200 + 6.300 + 6.000 + 10.800 = 30.300; os 8 funcionários restantes completam a folha de R$ 56.300. Média = 56.300 ÷ 38 = R$ 1.481,58. Notas de 10 provas: 6 (1 vez), 7 (3 vezes), 8 (4 vezes), 9 (1 vez) e 10 (1 vez): 6 + 21 + 32 + 9 + 10 = 78; média = 78 ÷ 10 = 7,8.`,
        `Não divida por 5 só porque há cinco notas diferentes: o divisor é a soma das frequências (10 provas). A coluna f minúsculo é a frequência de cada valor; não use outra coluna (como a acumulada) para multiplicar.`
      ],
      [
        `Aula · Média com intervalos de classe`,
        `Quando os dados vêm em faixas (de 180 a 200, de 200 a 220...), você usa o ponto médio de cada classe como valor x: x = (limite inferior + limite superior) / 2. Depois aplica a mesma fórmula da média ponderada, soma(x · f) / soma(f). O ponto médio representa os valores da faixa o mais próximo possível.`,
        `Salários semanais de 40 funcionários: a classe 180 a 200 tem 4 funcionários e ponto médio (180 + 200) / 2 = 190; a de 200 a 220 tem 18 e ponto médio 210; a de 220 a 240 tem 10 e ponto médio 230; as demais classes somam 8 funcionários. A soma de x·f é 8.900, e a média é 8.900 ÷ 40 = R$ 222,50, que está na classe de 220 a 240.`,
        `Com intervalos de classe, a média é uma aproximação, pois cada pessoa da faixa é tratada como se ganhasse o ponto médio. A pergunta "em qual classe está a média?" se responde comparando o valor calculado com os limites das classes.`
      ],
      [
        `Aula · Moda`,
        `Moda é o valor que ocorre com maior frequência: o dado que mais se repete no conjunto. É o mesmo sentido de "moda" no dia a dia: o que mais gente usa. Em série de números, ordene e veja qual se repete mais. Em tabela, procure a maior frequência e responda com o valor x correspondente, não com a frequência.`,
        `Série com 10 aparecendo três vezes: a moda é 10 (mesmo se o 11 aparecesse duas vezes, ele repete menos). Série 2, 3, 4, 4, 4, 5, 6, 9, 13, 13, 13: os valores 4 e 13 aparecem três vezes cada, e a série é multimodal (aqui, duas modas). Série sem repetição: amodal. Tabela de salários em que R$ 600 tem a maior frequência (12): a moda é R$ 600, e não 12.`,
        `Pegadinha clássica: dizer que a moda é 18 porque 18 é a maior frequência. A moda é o valor da variável (x) com maior frequência. Em classe, a moda é a classe de maior frequência, e o ponto médio (210, por exemplo) pode ser usado como valor único.`
      ],
      [
        `Aula · Mediana em série de valores`,
        `Mediana é o valor central da distribuição: metade dos dados fica abaixo e metade acima. Diferente da média, a mediana exige que os dados estejam em ordem (crescente ou decrescente). Com número ímpar de valores, a mediana é o valor do meio; com número par, é a média dos dois valores centrais.`,
        `Em nove valores já ordenados, quatro ficam de cada lado do central, e o quinto valor, 40, é a mediana. Em oito valores ordenados, os dois centrais são 30 e 32, e a mediana é (30 + 32) ÷ 2 = 31.`,
        `Antes de achar a mediana (e a moda), ponha os dados em ordem; para a média não precisa. Média e mediana são confundidas com frequência em concursos e no ENEM: a média soma e divide; a mediana pega o valor do centro.`
      ],
      [
        `Aula · Mediana em tabela e frequência acumulada`,
        `Quando os dados estão em tabela, você usa a frequência acumulada (F maiúsculo), que soma as frequências linha a linha. A posição da mediana é soma(f) / 2. Procure a primeira linha cuja F acumulada alcance essa posição: o valor x dessa linha é a mediana. A resposta é o x (por exemplo, número de filhos), e não a posição nem a frequência.`,
        `Número de filhos de 34 funcionários, com frequências 2, 6, 10, 12 e 4 para 0, 1, 2, 3 e 4 filhos: F = 2, 8, 18, 30, 34. Posição da mediana = 34 ÷ 2 = 17. A primeira F que chega a 17 é 18, na linha de 2 filhos. Mediana = 2 filhos.`,
        `Não responda "18" nem "17": 17 é a posição; a mediana é o valor da variável nessa posição. A frequência acumulada também responde perguntas como "quantos funcionários têm até 2 filhos?" (18).`
      ],
      [
        `Aula · Média, moda e mediana em tabelas completas`,
        `Em tabelas de frequência você calcula as três medidas na sequência: monte F (acumulada), calcule x·f para a média, ache a maior f para a moda e a posição soma(f)/2 em F para a mediana. Com intervalos de classe, use o ponto médio em x e responda moda e mediana como classes (ou pelo ponto médio, se pedirem um valor).`,
        `Turma de RH, 50 alunos, classes de amplitude 5 a partir de 18: as frequências 8, 7, 9, 10 e 12 correspondem a 18-23, 23-28, 28-33, 33-38 e 38-43, e as classes seguintes somam 4 alunos. Soma de x·f = 1.645, média = 1.645 ÷ 50 = 32,9 anos. Posição da mediana = 25: F = 8, 15, 24, 34, logo a classe mediana é 33-38 (ponto médio 35,5). A moda é a classe de maior frequência (12): 38-43 (ponto médio 40,5).`,
        `Com 66 jogadores, a posição da mediana é 33; o número de pessoas na linha (24, por exemplo) é só a frequência, não a mediana. Em dados agrupados em classes, dê a classe, ou o ponto médio dela se for exigido um valor único.`
      ]
    ],
    practice: [
      `Uma livraria vendeu, de segunda a sábado, 20, 18, 25, 22, 28 e 25 livros. Calcule a média diária e diga em quantos dias a venda ficou abaixo da média.`,
      `As notas de um aluno em 10 provas foram: 5 (2 vezes), 7 (3 vezes) e 9 (5 vezes). Calcule a média ponderada.`,
      `Determine a mediana de 14, 9, 21, 5, 11, 17 e 7 e de 12, 8, 20, 10, 16 e 14.`,
      `Em uma tabela de número de filhos, as frequências são 5 (0 filho), 9 (1 filho), 7 (2 filhos) e 3 (3 filhos). Qual é a moda?`,
      `Na mesma tabela, qual é a mediana? Mostre a frequência acumulada e a posição.`
    ],
    answers: [
      `Soma = 20 + 18 + 25 + 22 + 28 + 25 = 138; média = 138 ÷ 6 = 23 livros por dia. Abaixo de 23: 20 e 18, ou seja, 2 dias.`,
      `soma(x · f) = 5 × 2 + 7 × 3 + 9 × 5 = 10 + 21 + 45 = 76. soma(f) = 10. Média = 76 ÷ 10 = 7,6.`,
      `Primeira série, ordenada: 5, 7, 9, 11, 14, 17, 21; são 7 valores (ímpar) e a mediana é o 4º, 11. Segunda série, ordenada: 8, 10, 12, 14, 16, 20; são 6 valores (par) e a mediana é (12 + 14) ÷ 2 = 13.`,
      `A maior frequência é 9, na linha de 1 filho. A moda é 1 filho (e não 9).`,
      `Total = 24. F = 5, 14, 21, 24. Posição = 24 ÷ 2 = 12. A primeira F que alcança 12 é 14, na linha de 1 filho. Mediana = 1 filho.`
    ]
  });

  window.PCPE_DEEPENING[topic] = {
    1: [
      ['h', 'Onde as medidas de tendência central entram'],
      ['p', `No método estatístico, os dados passam por coleta, crítica (para detectar erros), apuração e apresentação (tabelas e gráficos). A fase seguinte é a das medidas de posição, entre as quais as mais importantes são as medidas de tendência central: média, moda e mediana. Elas são chamadas de tendência central porque tendem a ocupar o centro da distribuição; em alguns lugares são chamadas de medidas de posição. Para a prova, o essencial é dominar o conceito e o cálculo de cada uma.`],
      ['h', 'Média aritmética simples'],
      ['p', `É o que você faz para a média das provas: soma as notas e divide pelo número delas. Três provas, divide por 3; quatro provas, divide por 4. Na notação matemática, a média é representada por x-barra (x com um traço em cima):`],
      ['ul', [
        `x-barra = (x1 + x2 + ... + xn) / n`,
        `Em notação de somatório: x-barra = soma(xi) / n.`,
        `xi são as parcelas (cada nota, cada venda) e n é o número de parcelas.`
      ]],
      ['p', `O símbolo de somatório parece complicado, mas significa apenas "some as parcelas".`],
      ['h', 'Exemplo 1: vendas da livraria'],
      ['p', `Uma livraria vende livros de literatura de segunda a sábado (fecha no domingo). Para a média diária, some as vendas dos seis dias e divida por 6. A soma é 138 livros, então a média é 138 ÷ 6 = 23 livros por dia.`],
      ['p', `Com a média, você já tira informação para decidir: quais dias ficaram abaixo de 23 livros? No exemplo, as vendas de quarta e de sexta ficaram abaixo da média e as demais ficaram iguais ou acima. Isso levanta a pergunta de por que se vende menos nesses dias e permite agir (promoções, escala de funcionários).`],
      ['h', 'Exemplo 2: nascimentos em uma maternidade'],
      ['p', `Os nascimentos por mês, de janeiro a dezembro, somam 432. Como são 12 meses, a média é 432 ÷ 12 = 36 nascimentos por mês. Depois você compara cada mês com 36 para ver quais ficaram abaixo, empataram ou ficaram acima.`],
      ['h', 'Valor quebrado'],
      ['p', `A média pode dar valor quebrado (22,5; 23,3; 23,8) mesmo quando todos os dados são inteiros (não se vende pedaço de livro). Não há problema: basta informar que a média é aquele valor.`],
      ['h', 'Resumo de revisão'],
      ['ul', [
        `Média, moda e mediana são as medidas de tendência central.`,
        `Média aritmética simples = soma das parcelas ÷ número de parcelas.`,
        `Livraria: 138 ÷ 6 = 23 livros por dia. Maternidade: 432 ÷ 12 = 36 nascimentos por mês.`,
        `Comparar cada valor com a média mostra quais ficaram abaixo ou acima.`,
        `A média pode ser quebrada mesmo com dados inteiros.`
      ]]
    ],
    2: [
      ['h', 'Por que ponderar'],
      ['p', `Quando um mesmo valor se repete várias vezes, a tabela traz a frequência f (quantas vezes o valor x aconteceu). Em vez de somar valor por valor, você multiplica cada x pela sua frequência. Daí o nome de média ponderada: ela pondera cada valor pelo número de vezes em que ocorre.`],
      ['ul', [
        `Fórmula: x-barra = soma(x · f) / soma(f).`,
        `Numerador: soma de x vezes f (total de salários, total de pontos).`,
        `Denominador: soma das frequências (número de funcionários, número de provas).`
      ]],
      ['h', 'Exemplo 1: salários de uma empresa'],
      ['p', `A tabela mostra os salários de 38 funcionários. Os funcionários com R$ 600 são 12; com R$ 900, 7; com R$ 1.200, 5; com R$ 1.800, 6; e os 8 restantes ocupam a faixa mais alta. Observe o significado de cada produto: 12 × 600 = 7.200 é o total pago aos 12 funcionários de R$ 600; 7 × 900 = 6.300; 5 × 1.200 = 6.000; 6 × 1.800 = 10.800. Essas quatro linhas somam 30.300. A soma total de x·f é a folha de pagamento: R$ 56.300 (então os 8 funcionários restantes recebem, juntos, 56.300 - 30.300 = 26.000).`],
      ['ol', [
        `soma(x · f) = 56.300 (folha de pagamento).`,
        `soma(f) = 12 + 7 + 5 + 6 + 8 = 38 funcionários.`,
        `Média = 56.300 ÷ 38 = 1.481,58 (valor quebrado, embora os salários sejam redondos).`
      ]],
      ['p', `Portanto, o salário médio é R$ 1.481,58. Pergunta típica: quantos funcionários ganham acima da média e qual a porcentagem? Quem ganha R$ 600, 900 ou 1.200 está abaixo de 1.481,58. Estão acima os 6 funcionários de R$ 1.800 e os 8 da faixa mais alta: 6 + 8 = 14 funcionários. Percentual: 14 ÷ 38 = 0,368, ou seja, 36,8%.`],
      ['h', 'Exemplo 2: notas de 10 atividades'],
      ['p', `Um aluno fez 10 provas e tirou: nota 6 uma vez, nota 7 três vezes, nota 8 quatro vezes, nota 9 uma vez e nota 10 uma vez (1 + 3 + 4 + 1 + 1 = 10 provas).`],
      ['ol', [
        `6 × 1 = 6 pontos; 7 × 3 = 21 pontos; 8 × 4 = 32 pontos; 9 × 1 = 9 pontos; 10 × 1 = 10 pontos.`,
        `soma(x · f) = 6 + 21 + 32 + 9 + 10 = 78 pontos.`,
        `soma(f) = 10 provas.`,
        `Média = 78 ÷ 10 = 7,8.`
      ]],
      ['p', `Erro a evitar: somar as cinco notas distintas (6, 7, 8, 9 e 10) e dividir por 5. O aluno não fez cinco provas: fez dez. É preciso considerar quantas vezes cada nota apareceu.`],
      ['h', 'Aritmética simples x ponderada'],
      ['ul', [
        `Simples: você soma os valores e divide pelo número deles.`,
        `Ponderada: você multiplica cada valor pela quantidade de vezes que ocorreu, soma e divide pelo total de ocorrências.`,
        `Salário médio = total da folha ÷ número de funcionários; nota média = total de pontos ÷ número de provas.`
      ]],
      ['h', 'Resumo de revisão'],
      ['ul', [
        `f minúsculo = frequência (quantas vezes x ocorre); soma(f) = total de elementos.`,
        `x-barra = soma(x · f) / soma(f).`,
        `Salários: 56.300 ÷ 38 = 1.481,58; acima da média: 14 funcionários, 36,8%.`,
        `Notas: 78 ÷ 10 = 7,8; o divisor é o número de provas (10), não de notas distintas.`
      ]]
    ],
    3: [
      ['h', 'Dados em classes'],
      ['p', `Em muitas tabelas os dados são agrupados em intervalos de classe (de 180 a 200, de 200 a 220 etc.). Não se conhece o valor exato de cada pessoa, só a faixa. Para calcular a média, você escolhe um valor representativo de cada classe: o ponto médio.`],
      ['ul', [
        `Ponto médio: x = (limite inferior + limite superior) / 2.`,
        `Depois use a fórmula já conhecida: x-barra = soma(x · f) / soma(f).`
      ]],
      ['h', 'Exemplo: salários semanais de 40 funcionários'],
      ['p', `A tabela mostra os salários semanais: de 180 a 200 há 4 funcionários; de 200 a 220 há 18; de 220 a 240 há 10; e as demais classes somam 8 funcionários, totalizando 40 (4 + 18 + 10 + 8 = 40).`],
      ['ol', [
        `Ponto médio de cada classe: (180 + 200) ÷ 2 = 380 ÷ 2 = 190; (200 + 220) ÷ 2 = 210; (220 + 240) ÷ 2 = 230; e assim por diante.`,
        `x · f das três primeiras classes: 4 × 190 = 760; 18 × 210 = 3.780; 10 × 230 = 2.300 (soma parcial: 6.840). As demais classes completam 2.060.`,
        `soma(x · f) = 8.900 e soma(f) = 40.`,
        `Média = 8.900 ÷ 40 = 222,50 reais por semana.`
      ]],
      ['p', `O salário médio de R$ 222,50 pertence à classe de 220 a 240. Ou seja, quando a pergunta é "qual classe contém o salário médio?", você calcula a média e vê entre quais limites ela cai.`],
      ['p', `Pergunta seguinte: qual a classe de salários mais frequente? É a de maior frequência: 18 funcionários, na classe de 200 a 220. Essa é a classe modal (veja a lição de moda).`],
      ['h', 'Por que o ponto médio'],
      ['p', `Dentro de uma classe há salários um pouco abaixo e um pouco acima do centro. Ao usar o ponto médio, você representa esses valores da forma mais próxima possível, e as diferenças tendem a se compensar. Por isso, a média com classes é uma aproximação.`],
      ['h', 'Resumo de revisão'],
      ['ul', [
        `Intervalo de classe: use o ponto médio (soma dos limites ÷ 2) como x.`,
        `180 a 200 gera x = 190; 200 a 220 gera x = 210; 220 a 240 gera x = 230.`,
        `Salários: 8.900 ÷ 40 = 222,50, que está na classe de 220 a 240.`,
        `Classe mais frequente: 200 a 220 (18 funcionários).`
      ]]
    ],
    4: [
      ['h', 'Definição'],
      ['p', `Moda é o valor que ocorre com maior frequência, aquele que mais se repete no conjunto de dados. A ideia vem do sentido cotidiano: a moda é aquilo que mais gente está usando. Em Estatística, a moda é o valor x que tem a maior frequência.`],
      ['h', 'Moda em série de números'],
      ['ol', [
        `Coloque os números em ordem (normalmente crescente).`,
        `Procure o valor que se repete mais vezes.`,
        `Esse valor é a moda.`
      ]],
      ['p', `Exemplo: em uma série ordenada em que o 10 aparece três vezes e nenhum outro valor repete tanto, a moda é 10. Mesmo se o 11 aparecesse duas vezes, a moda continuaria sendo 10, pois ele repete mais (três vezes contra duas).`],
      ['h', 'Amodal, unimodal, multimodal'],
      ['ul', [
        `Amodal (sem moda): nenhum valor se repete, todos aparecem uma só vez.`,
        `Unimodal: um único valor de maior frequência.`,
        `Multimodal: mais de um valor com a maior frequência. Em 2, 3, 4, 4, 4, 5, 6, 9, 13, 13, 13, o 4 e o 13 aparecem três vezes cada, e nenhum aparece mais que isso: os dois são moda (série multimodal, aqui com duas modas).`
      ]],
      ['h', 'Moda em tabela'],
      ['p', `Na tabela de salários da lição anterior, a maior frequência é 12, na linha de R$ 600. Pergunta: qual é a moda? A resposta é R$ 600: o salário que mais funcionários recebem. Se a pergunta é sobre salário, a moda é um salário (informação do x), e não 12 (informação do f). Portanto, o procedimento é: ache a maior frequência e responda com o x correspondente.`],
      ['h', 'Moda com intervalos de classe'],
      ['p', `Na tabela de 40 funcionários, a maior frequência é 18, na classe de 200 a 220. A moda está na faixa de 200 a 220. Se você precisar de um valor único, use o ponto médio da classe: 210. Cuidado para não dizer que a moda é 18; 18 é quantos funcionários recebem salário nessa faixa.`],
      ['h', 'Resumo de revisão'],
      ['ul', [
        `Moda = valor com maior frequência.`,
        `Série: ordene e procure o valor mais repetido; sem repetição, amodal; mais de uma moda, multimodal.`,
        `Tabela: maior f indica a linha; a moda é o x dessa linha (R$ 600, e não 12).`,
        `Classes: a moda é a classe de maior frequência (200 a 220); como valor único, o ponto médio (210).`
      ]]
    ],
    5: [
      ['h', 'Definição'],
      ['p', `Mediana é o valor central de uma distribuição ordenada: o dado que está no centro, com metade dos valores de um lado e metade do outro. É diferente da média: a média soma todos os valores e divide pelo número deles; a mediana não soma nada, apenas localiza o valor do meio. Esse contraste é muito cobrado em concursos, no ENEM e no ENADE.`],
      ['h', 'Passo 1: ordenar'],
      ['p', `Para moda e mediana você precisa colocar os dados em ordem (crescente ou decrescente). Para a média, não: somar em qualquer ordem dá o mesmo resultado. Uma série como 37, 28, 40, 41, 45... fora de ordem não pode ser usada diretamente para achar a mediana.`],
      ['h', 'Passo 2: quantidade ímpar de valores'],
      ['p', `Com número ímpar de valores, existe um valor que fica exatamente no meio. Em nove valores ordenados, há quatro valores de um lado, quatro do outro e um sozinho no centro: o quinto. Em uma série ordenada com nove valores cujo central é 40, a mediana é 40. A posição central em n ímpar é (n + 1) ÷ 2; para n = 9, a 5ª posição.`],
      ['h', 'Passo 3: quantidade par de valores'],
      ['p', `Com número par, não há valor central único: há dois valores centrais. A regra é calcular a média desses dois. Em oito valores ordenados, quatro ficam de cada lado, e os dois do meio são 30 e 32. Mediana = (30 + 32) ÷ 2 = 62 ÷ 2 = 31.`],
      ['h', 'Exemplo próprio para treinar'],
      ['p', `Série 14, 9, 21, 5, 11, 17, 7 (sete valores, fora de ordem). Ordene: 5, 7, 9, 11, 14, 17, 21. Como n = 7 é ímpar, a posição central é (7 + 1) ÷ 2 = 4; o 4º valor é 11, e a mediana é 11. Série 12, 8, 20, 10, 16, 14 (seis valores). Ordene: 8, 10, 12, 14, 16, 20. Os centrais são 12 e 14, e a mediana é (12 + 14) ÷ 2 = 13. Note que 13 não aparece na série: com quantidade par, a mediana pode ser um valor que não existe nos dados.`],
      ['h', 'Resumo de revisão'],
      ['ul', [
        `Mediana = valor central da série ordenada.`,
        `Ordene sempre antes (moda e mediana exigem ordem; média, não).`,
        `n ímpar: valor do meio (posição (n + 1) ÷ 2).`,
        `n par: média dos dois valores centrais, ex.: (30 + 32) ÷ 2 = 31.`,
        `Não confunda: média soma e divide; mediana localiza o centro.`
      ]]
    ],
    6: [
      ['h', 'Frequência acumulada'],
      ['p', `Em tabelas com frequência, a mediana usa a frequência acumulada, representada por F maiúsculo (a frequência simples é f minúsculo). A frequência acumulada soma as frequências linha após linha: a primeira F repete a primeira f; as seguintes somam a f da linha ao F da anterior. A última F é igual ao total de elementos.`],
      ['p', `Exemplo: número de filhos de 34 funcionários de uma empresa.`],
      ['ul', [
        `0 filhos: f = 2, F = 2.`,
        `1 filho: f = 6, F = 2 + 6 = 8.`,
        `2 filhos: f = 10, F = 8 + 10 = 18.`,
        `3 filhos: f = 12, F = 18 + 12 = 30.`,
        `4 filhos: f = 4, F = 30 + 4 = 34 (o total, o que serve de conferência).`
      ]],
      ['p', `A F responde diretamente a perguntas como "quantos funcionários têm até 2 filhos?": 18. E "até 3 filhos?": 30. Com muitos itens, isso evita somar tudo a cada vez.`],
      ['h', 'Posição da mediana'],
      ['p', `A mediana é o dado central. Se você colocasse os 34 funcionários em fila, ordenados pelo número de filhos, o do meio seria o 17º. Logo:`],
      ['ol', [
        `Posição da mediana = soma(f) ÷ 2 = 34 ÷ 2 = 17.`,
        `Procure na coluna F a primeira linha cuja F seja maior ou igual a 17: 2 (não), 8 (não), 18 (sim).`,
        `Essa linha é a de 2 filhos.`,
        `A mediana é o x dessa linha: 2 filhos.`
      ]],
      ['p', `Observação: com 34 (par), os dois centrais seriam o 17º e o 18º; ambos estão na linha de 2 filhos (F = 18), portanto o resultado é o mesmo: 2 filhos.`],
      ['h', 'Pegadinha: posição x valor'],
      ['p', `A posição 17 só diz onde procurar. A resposta é a variável observada (número de filhos) naquela posição, 2 filhos, e não 17 nem 18. A mediana tem a mesma unidade do dado: aqui, filhos.`],
      ['h', 'Resumo de revisão'],
      ['ul', [
        `F maiúsculo = frequência acumulada; a última F é o total.`,
        `Posição da mediana = soma(f) ÷ 2.`,
        `Mediana = x da primeira linha em que F alcança a posição.`,
        `Funcionários: posição 17, F = 2, 8, 18, 30, 34, logo a mediana é 2 filhos.`
      ]]
    ],
    7: [
      ['h', 'Roteiro único para uma tabela de frequências'],
      ['ol', [
        `Calcule F (frequência acumulada).`,
        `Média: multiplique x · f, some e divide por soma(f).`,
        `Moda: a maior frequência f indica a linha; responda com o x.`,
        `Mediana: posição = soma(f) ÷ 2; ache em F; responda com o x.`
      ]],
      ['h', 'Exemplo 1: idades de 66 jogadores'],
      ['p', `Tabela de idades (x) e frequências (f) de jogadores, total 66. Frequências: 6 jogadores com 13 anos, 12 com 14, 15 com 15, 24 com 16 e 9 com 17. A F acumulada é: 6, 18, 33, 57 e 66.`],
      ['ul', [
        `Média: x · f = 13 × 6 = 78; 14 × 12 = 168; 15 × 15 = 225; 16 × 24 = 384; 17 × 9 = 153. Soma = 1.008. Média = 1.008 ÷ 66 = 15,27 anos.`,
        `Moda: a maior frequência é 24; a idade correspondente, 16 anos, é a moda.`,
        `Mediana: posição = 66 ÷ 2 = 33. A F chega a 33 na linha de 15 anos (6, 18, 33). Mediana = 15 anos.`
      ]],
      ['p', `Cuidado para multiplicar pela coluna f minúsculo, não pela F acumulada. A coluna f é a que diz quantas vezes cada idade aparece.`],
      ['h', 'Exemplo 2: idades de 50 alunos de uma turma de RH, em classes'],
      ['p', `Classes de amplitude 5, a partir de 18: 18-23 (8 alunos), 23-28 (7), 28-33 (9), 33-38 (10), 38-43 (12), e as classes seguintes somam 4 alunos, totalizando 50.`],
      ['ol', [
        `F acumulada: 8, 15, 24, 34, 46 e 50.`,
        `Pontos médios: (18 + 23) ÷ 2 = 20,5; (23 + 28) ÷ 2 = 25,5; 30,5; 35,5; 40,5; e assim por diante.`,
        `x · f: 8 × 20,5 = 164; 7 × 25,5 = 178,5; 9 × 30,5 = 274,5; 10 × 35,5 = 355; 12 × 40,5 = 486 (soma parcial 1.458); as classes seguintes completam 187.`,
        `soma(x · f) = 1.645. Média = 1.645 ÷ 50 = 32,9 anos.`,
        `Mediana: posição = 50 ÷ 2 = 25. F = 8 (não), 15 (não), 24 (não), 34 (sim). A classe mediana é 33-38; se quiser um valor, 35,5 anos.`,
        `Moda: maior f = 12; a classe modal é 38-43; como valor, 40,5 anos.`
      ]],
      ['h', 'Como responder cada medida'],
      ['ul', [
        `Média: um número (com possível casa decimal), por exemplo 32,9 anos.`,
        `Moda: o x de maior frequência (ou a classe correspondente).`,
        `Mediana: o x que ocupa a posição central (ou a classe que a contém).`,
        `Nunca responda com a frequência, a posição ou a F acumulada.`
      ]],
      ['h', 'Resumo de revisão'],
      ['ul', [
        `Média de tabela: soma(x · f) ÷ soma(f); em classes, x é o ponto médio.`,
        `Moda de tabela: o x da maior f; em classes, a classe modal.`,
        `Mediana de tabela: posição soma(f) ÷ 2 na coluna F; em classes, a classe mediana.`,
        `Jogadores: média 15,27; moda 16; mediana 15 (posição 33). Turma de RH: média 32,9; classe mediana 33-38; classe modal 38-43.`
      ]]
    ]
  };

  window.PCPE_QUESTOES[topic] = [
    {
      text: `Uma livraria vendeu, em cinco dias, 12, 15, 18, 20 e 10 livros. A média diária de vendas, calculada pela média aritmética simples, foi de:`,
      options: [
        `14 livros.`,
        `16 livros.`,
        `15 livros.`,
        `18 livros.`
      ],
      correct: 2,
      exp: `Soma = 12 + 15 + 18 + 20 + 10 = 75; dividindo pelo número de parcelas (5): 75 ÷ 5 = 15. Os demais valores vêm de erros de soma ou de divisor.`
    },
    {
      text: `Sobre as medidas de tendência central, assinale a afirmação correta:`,
      options: [
        `Para calcular a média é preciso ordenar os dados; a mediana não exige ordenação.`,
        `Para calcular a moda e a mediana é preciso ordenar os dados; a média pode ser calculada somando em qualquer ordem.`,
        `A mediana é a soma dos valores dividida pelo número de valores.`,
        `A moda é sempre o valor central da distribuição ordenada.`
      ],
      correct: 1,
      exp: `Moda e mediana pedem os dados em ordem; a média é soma ÷ quantidade e não depende da ordem. A primeira alternativa inverte isso; a mediana é o valor central, não a soma dividida; e a moda é o valor de maior frequência, não o central.`
    },
    {
      text: `As notas de um aluno em 10 provas foram: 5 (duas vezes), 6 (três vezes) e 8 (cinco vezes). A média ponderada das notas é:`,
      options: [
        `6,3.`,
        `6,8.`,
        `7,0.`,
        `6,5.`
      ],
      correct: 1,
      exp: `soma(x · f) = 5×2 + 6×3 + 8×5 = 10 + 18 + 40 = 68; soma(f) = 10; média = 68 ÷ 10 = 6,8. A média simples das três notas distintas, (5 + 6 + 8) ÷ 3 = 6,33, ignora as frequências e é o erro típico.`
    },
    {
      text: `Em uma empresa, 10 funcionários ganham R$ 1.000, 5 ganham R$ 2.000 e 5 ganham R$ 3.000. O salário médio é:`,
      options: [
        `R$ 2.000,00.`,
        `R$ 1.500,00.`,
        `R$ 1.250,00.`,
        `R$ 1.750,00.`
      ],
      correct: 3,
      exp: `Folha = 10×1.000 + 5×2.000 + 5×3.000 = 10.000 + 10.000 + 15.000 = 35.000; funcionários = 20; média = 35.000 ÷ 20 = 1.750. R$ 2.000 é a média simples dos três salários, que ignora quantos funcionários recebem cada um.`
    },
    {
      text: `Uma tabela de salários em classes traz: de 0 a 10 reais, 4 funcionários; de 10 a 20 reais, 6 funcionários. Usando o ponto médio de cada classe, a média é:`,
      options: [
        `11,0.`,
        `10,0.`,
        `12,5.`,
        `15,0.`
      ],
      correct: 0,
      exp: `Pontos médios: (0 + 10) ÷ 2 = 5 e (10 + 20) ÷ 2 = 15. x·f = 5×4 + 15×6 = 20 + 90 = 110; soma(f) = 10; média = 11,0. 10,0 é a média dos pontos médios sem ponderar; 15,0 é o ponto médio da classe mais frequente; 12,5 não vem de cálculo ponderado algum.`
    },
    {
      text: `Considere a série ordenada: 1, 2, 2, 2, 3, 5, 5, 5, 8. Sua moda é:`,
      options: [
        `apenas 2.`,
        `apenas 5.`,
        `2 e 5; a série é multimodal.`,
        `não existe; a série é amodal.`
      ],
      correct: 2,
      exp: `O 2 e o 5 aparecem três vezes cada, e nenhum valor aparece mais que isso: as duas são modas (série multimodal). Dizer apenas 2 ou apenas 5 ignora o empate; amodal seria o caso em que nenhum valor se repete.`
    },
    {
      text: `Na tabela de número de filhos dos funcionários, as frequências são 5 (0 filho), 9 (1 filho), 7 (2 filhos) e 3 (3 filhos). A moda da distribuição é:`,
      options: [
        `9 funcionários.`,
        `1 filho.`,
        `2 filhos.`,
        `0 filho.`
      ],
      correct: 1,
      exp: `A maior frequência (9) está na linha de 1 filho; a moda é o valor da variável (x), ou seja, 1 filho. Responder 9 confunde a frequência com a moda, a pegadinha mais comum.`
    },
    {
      text: `A mediana da série 14, 9, 21, 5, 11, 17, 7 é:`,
      options: [
        `14.`,
        `9.`,
        `12,0.`,
        `11.`
      ],
      correct: 3,
      exp: `Ordenando: 5, 7, 9, 11, 14, 17, 21. São 7 valores (ímpar), o central é o 4º: 11. A mediana 14 viria de ignorar a ordenação (14 é só o primeiro termo da lista); 9 é o 3º valor ordenado; 12,0 é a média da série (84 ÷ 7 = 12), não a mediana.`
    },
    {
      text: `A mediana da série 12, 8, 20, 10, 16, 14 é:`,
      options: [
        `12.`,
        `14.`,
        `13.`,
        `15.`
      ],
      correct: 2,
      exp: `Ordenando: 8, 10, 12, 14, 16, 20. São 6 valores (par), então a mediana é a média dos dois centrais: (12 + 14) ÷ 2 = 13. Escolher só um dos centrais (12 ou 14) ignora a regra do número par; 15 não corresponde a cálculo algum (a média da série é 80 ÷ 6 = 13,33).`
    },
    {
      text: `Em uma tabela de número de filhos, as frequências são 3 (0 filho), 5 (1 filho), 8 (2 filhos), 6 (3 filhos) e 2 (4 filhos). A mediana é:`,
      options: [
        `2 filhos.`,
        `1 filho.`,
        `3 filhos.`,
        `12 filhos.`
      ],
      correct: 0,
      exp: `Total = 24, posição da mediana = 24 ÷ 2 = 12. A F acumulada é 3, 8, 16, 22 e 24; a primeira que alcança 12 é 16, na linha de 2 filhos. Mediana = 2 filhos. 12 é só a posição; 1 filho teria F = 8 < 12; 3 filhos é a linha seguinte, que só importa se a posição fosse maior que 16.`
    }
  ];
})();
