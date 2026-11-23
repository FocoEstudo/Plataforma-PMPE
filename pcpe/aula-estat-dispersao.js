(function () {
  'use strict';
  window.PCPE_TOPIC_GUIDES = window.PCPE_TOPIC_GUIDES || {};
  window.PCPE_DEEPENING = window.PCPE_DEEPENING || {};
  window.PCPE_QUESTOES = window.PCPE_QUESTOES || {};
  const topic = 'Dispersão e probabilidade';
  const base = window.PCPE_TOPIC_GUIDES[topic] || {};
  window.PCPE_TOPIC_GUIDES[topic] = Object.assign({}, base, {
    lessons: [
      [
        `Aula 1 · Dispersão: por que a média não basta`,
        `Dispersão significa espalhamento. As medidas de dispersão complementam as medidas de posição (média, mediana e moda), porque estas, sozinhas, muitas vezes não bastam para interpretar o cenário de uma distribuição de valores. Pense no tiro ao alvo: quanto mais concentrados no centro, melhor; quanto mais espalhados, pior. Em dispersão, quanto maior a medida, mais irregular é o conjunto; quanto menor, mais regular (homogêneo).`,
        `Temperaturas em três dias seguidos. Cidade A: 11 °C, 26 °C e 35 °C. Cidade B: 23 °C, 24 °C e 25 °C. Média de A = (11 + 26 + 35) / 3 = 72 / 3 = 24 °C. Média de B = (23 + 24 + 25) / 3 = 72 / 3 = 24 °C. As médias são iguais, mas as cidades são muito diferentes: A varia bastante e B quase não varia.`,
        `Médias iguais não significam distribuições iguais. Quem decide qual conjunto é mais regular é uma medida de dispersão, e a regra é sempre a mesma: menos espalhamento = mais regular; mais espalhamento = mais irregular.`
      ],
      [
        `Aula 1 · Variância, desvio padrão e coeficiente de variação`,
        `Há três medidas de dispersão, assim como há três de tendência central: a variância, o desvio padrão e o coeficiente de variação. A variância mede o espalhamento em relação à média, usando o quadrado das diferenças. O desvio padrão é a raiz quadrada da variância. O coeficiente de variação (CV) é o desvio padrão dividido pela média, vezes 100: dá o espalhamento em porcentagem.`,
        `Cidade B (23, 24 e 25; média 24): as diferenças são −1, 0 e +1, e a soma delas é zero. Se você somasse as diferenças sem o quadrado, a soma sempre daria zero (o que está abaixo da média compensa o que está acima). Elevando ao quadrado, os negativos viram positivos e o espalhamento aparece: 1 + 0 + 1 = 2.`,
        `O quadrado é um artifício matemático para impedir que diferenças positivas e negativas se anulem. Por isso o desvio padrão tira a raiz: ela desfaz o artifício e devolve o valor à unidade original. Cuidado para não parar na variância e achar que é o desvio padrão.`
      ],
      [
        `Aula 1 · Cálculo passo a passo: as duas cidades`,
        `O roteiro de cálculo é fixo: (1) calcule a média; (2) subtraia a média de cada valor; (3) eleve cada diferença ao quadrado; (4) multiplique pela frequência f (aqui, f = 1 em cada dia); (5) some tudo; (6) divida pela soma das frequências para obter a variância; (7) extraia a raiz quadrada para obter o desvio padrão; (8) divida pela média e multiplique por 100 para obter o CV.`,
        `Cidade A: média 24; diferenças: 11 − 24 = −13; 26 − 24 = 2; 35 − 24 = 11. Quadrados: 169, 4 e 121; soma = 294. Variância = 294 / 3 = 98. Desvio padrão = raiz de 98 ≈ 9,9. CV = 9,9 / 24 × 100 ≈ 41,25%. Cidade B: variância = 2 / 3 ≈ 0,667; desvio padrão = raiz de 0,667 ≈ 0,816; CV = 0,816 / 24 × 100 ≈ 3,4%.`,
        `A cidade B é mais homogênea (CV de 3,4%) e a cidade A é mais irregular (CV de cerca de 41%). Ao elevar ao quadrado, lembre que (−13)² = 169 positivo: menos com menos dá mais. Na calculadora, coloque o negativo entre parênteses.`
      ],
      [
        `Aula 1 · Dados em tabela com frequências: idades`,
        `Quando os valores vêm numa tabela com frequências (f), o cálculo é o mesmo, só que você multiplica cada valor e cada quadrado por f. A média é a soma de x·f dividida pela soma de f. A variância é a soma de f·(x − média)² dividida pela soma de f. Depois vêm a raiz quadrada e a divisão pela média.`,
        `Tabela A: idades 10, 12, 14, 16 e 18 anos, com 2, 4, 4, 2 e 3 pessoas (total de 15). Média = (20 + 48 + 56 + 32 + 54) / 15 = 210 / 15 = 14. Quadrados vezes f: 10 → 16 × 2 = 32; 12 → 4 × 4 = 16; 14 → 0; 16 → 4 × 2 = 8; 18 → 16 × 3 = 48; soma = 104. Variância = 104 / 15 ≈ 6,93. Desvio padrão ≈ 2,63. CV = 2,63 / 14 × 100 ≈ 18,81%.`,
        `Divida o desvio padrão pela média (14), e não pela frequência nem pelo total de pessoas. Como o sinal da diferença some no quadrado, não perca tempo com ele: toda a coluna fica positiva. Ao arredondar para duas casas, 18,808 vira 18,81.`
      ],
      [
        `Aula 1 · Comparando duas tabelas e dados em classes (peso e altura)`,
        `Para comparar a regularidade de dois conjuntos, compare os coeficientes de variação: o menor CV indica o conjunto mais homogêneo. Quando os dados vêm agrupados em faixas (classes), você usa como x o ponto médio da classe, isto é, a soma dos dois extremos dividida por dois. O restante do cálculo é igual ao da tabela de frequências.`,
        `Tabela B (23 pessoas, média 14): soma de x·f = 322, e 322 / 23 = 14; soma de f·(x − 14)² = 136; variância = 136 / 23 ≈ 5,91; desvio padrão ≈ 2,43; CV ≈ 17,37%. Como 17,37% < 18,81%, a Tabela B é mais regular que a Tabela A. Peso de 35 alunos em classes de 10 em 10 kg: pontos médios 47 (de 42 a 52), 57 (de 52 a 62), 67 (de 62 a 72) e assim por diante; média = 2.485 / 35 = 71 kg; soma de f·(x − 71)² = 5.040; variância = 5.040 / 35 = 144; desvio padrão = 12; CV = 12 / 71 × 100 ≈ 16,90%. Altura da mesma turma em classes de 7 cm: pontos médios 148,5 (de 145 a 152) e 155,5 (de 152 a 159); média ≈ 168,17 cm; CV de cerca de 6%.`,
        `Na calculadora, some os extremos entre parênteses ou dê o igual antes de dividir por dois, senão a divisão atinge só o segundo número. Conclusão: altura (CV ≈ 6%) é mais homogênea que peso (CV ≈ 16,9%) na mesma turma. Unidades: a variância sai na unidade ao quadrado (kg²); o desvio padrão volta à unidade original (kg); o CV é adimensional, em %.`
      ],
      [
        `Aula 2 · Experimento aleatório e espaço amostral`,
        `Probabilidade é a chance de um evento acontecer, e só faz sentido para um experimento aleatório, isto é, que ocorre ao acaso e de boa-fé: moeda, dado e baralho honestos. Um dado lixado ou com peso, que favorece uma face, não é aleatório. O espaço amostral (S) é o conjunto de todas as possibilidades do experimento.`,
        `Lançar uma moeda: S = {cara, coroa}, com 2 elementos. Lançar um dado: S = {1, 2, 3, 4, 5, 6}, com 6 elementos. A quantidade de elementos do espaço amostral é o total de possibilidades e vai sempre no denominador da fórmula da probabilidade.`,
        `Dado, moeda e baralho só valem como modelo se forem honestos. Se o dado for adulterado, a matemática das possibilidades iguais deixa de valer: não há experimento aleatório.`
      ],
      [
        `Aula 2 · Eventos: elementar, certo e impossível`,
        `Evento é um subconjunto do espaço amostral, geralmente descrito por uma sentença. Um evento com um único elemento é o evento elementar. Se o evento contém todo o espaço amostral, é o evento certo. Se não contém nenhum elemento, é o conjunto vazio e se chama evento impossível. O símbolo de contido, ligando o evento ao espaço amostral, indica que o evento está dentro de S.`,
        `No lançamento de um dado, S = {1, 2, 3, 4, 5, 6}. Evento A: obter número par na face superior, A = {2, 4, 6}. Evento B: obter número menor ou igual a 6, B = {1, 2, 3, 4, 5, 6}, que é o evento certo. Evento C: obter o número 4, C = {4}, que é elementar. Evento D: obter número maior que 6, D = conjunto vazio, que é impossível (não existe face 8, por exemplo).`,
        `O conjunto vazio não é o número zero: é a ausência de resultados possíveis. Por isso o evento impossível tem zero casos favoráveis, e isso não quer dizer que o dado dê o número zero.`
      ],
      [
        `Aula 2 · Fórmula da probabilidade e seus exemplos`,
        `Para um experimento aleatório com espaço amostral S, a probabilidade do evento E é P(E) = n(E) / n(S): número de casos favoráveis ao evento dividido pelo número total de possibilidades do espaço amostral. O resultado fica entre 0 e 1 (ou entre 0% e 100%). Pode ser pedido em fração, em valor decimal ou em porcentagem; por isso, aprenda a converter. A fração deve vir sempre na forma mais simples, então 3/6 é apresentado como 1/2.`,
        `Moeda, evento "obter cara": P = 1/2 = 0,5 = 50% (coroa também tem 50%). Dado, número par: P = 3/6 = 1/2 = 50%. Dado, número menor ou igual a 6: P = 6/6 = 1 = 100%. Dado, número 4: P = 1/6 ≈ 0,167 ≈ 16,7%. Dado, número maior que 6: P = 0/6 = 0 = 0%.`,
        `Evento certo tem probabilidade 100% (ou 1); evento impossível, 0%. Para o decimal, divida o numerador pelo denominador (1 ÷ 2 = 0,5); para a porcentagem, multiplique por 100. O total (espaço amostral) sempre vai embaixo.`
      ]
    ],
    practice: [
      `Duas cidades têm média de temperatura igual a 24 °C. Na cidade A as temperaturas foram 11, 26 e 35 e na cidade B, 23, 24 e 25. Qual é mais regular e por quê?`,
      `Em uma tabela de frequências, a soma de f·(x − média)² é 104 e a soma das frequências é 15. Calcule a variância e explique como obter o desvio padrão e o coeficiente de variação com média 14.`,
      `Como você obtém o valor x que representa a classe "52 a 62" em uma tabela com faixas, e qual cuidado deve ter na calculadora?`,
      `Por que o evento "obter número maior que 6" ao lançar um dado é impossível, e qual é a sua probabilidade? E a do evento "obter número menor ou igual a 6"?`,
      `Calcule, em fração, decimal e porcentagem, a probabilidade de obter um número par no lançamento de um dado honesto.`
    ],
    answers: [
      `A cidade B é mais regular. Média 24 nas duas, mas A tem variância 98, desvio padrão ≈ 9,9 e CV ≈ 41%, enquanto B tem desvio padrão ≈ 0,82 e CV ≈ 3,4%. Menor dispersão (CV menor) significa mais homogeneidade.`,
      `Variância = 104 / 15 ≈ 6,93. O desvio padrão é a raiz quadrada da variância, ≈ 2,63. O CV é o desvio padrão dividido pela média e multiplicado por 100: 2,63 / 14 × 100 ≈ 18,81%.`,
      `Soma os dois extremos e divide por dois: (52 + 62) / 2 = 57. Na calculadora, dê o igual depois da soma (ou use parênteses) antes de dividir por 2; caso contrário, só o segundo número é dividido.`,
      `Porque o dado só tem faces de 1 a 6 e nenhum resultado satisfaz o evento: é o conjunto vazio. A probabilidade é 0/6 = 0%. O evento "menor ou igual a 6" contém todas as faces (6/6 = 1 = 100%): é o evento certo.`,
      `P = 3/6 = 1/2 (fração), 0,5 (decimal) e 50% (porcentagem), porque há três casos favoráveis (2, 4 e 6) em seis possibilidades.`
    ]
  });

  window.PCPE_DEEPENING[topic] = {
    1: [
      ['h', 'O que é dispersão'],
      ['p', 'A palavra dispersão vem de espalhamento. As medidas de tendência central (média, mediana e moda) fazem parte das medidas de posição e já foram estudadas; as medidas de dispersão também fazem parte desse grupo e existem porque a posição, sozinha, muitas vezes não é suficiente para interpretar o cenário de uma distribuição de valores.'],
      ['p', 'Imagine um tiro ao alvo. Quanto mais os tiros se concentram no centro, melhor; quanto mais espalhados, pior. Em estatística, a lógica é a mesma: quanto menor a medida de dispersão, mais regular (homogêneo) é o conjunto; quanto maior, mais irregular, isto é, mais espalhado.'],
      ['h', 'Exemplo-chave: temperaturas de duas cidades'],
      ['p', 'Considere a temperatura, em graus Celsius, em três dias seguidos. É um exemplo fictício, mas serve para entender o ponto.'],
      ['ul', [
        'Cidade A: 11 °C, 26 °C e 35 °C (grande variação).',
        'Cidade B: 23 °C, 24 °C e 25 °C (variação pequena).'
      ]],
      ['p', 'Calcule a média de cada cidade, somando os valores e dividindo pelo número deles.'],
      ['ol', [
        'Cidade A: (11 + 26 + 35) / 3 = 72 / 3 = 24 °C.',
        'Cidade B: (23 + 24 + 25) / 3 = 72 / 3 = 24 °C.'
      ]],
      ['p', 'A média, que é medida de tendência central, deu 24 °C nas duas cidades. Mesmo assim, elas não se parecem: em A os valores estão muito espalhados em torno de 24, e em B estão concentrados perto de 24. A dispersão de A é maior do que a de B.'],
      ['h', 'Por que quantificar'],
      ['p', 'Olhar para os números e perceber que A é mais espalhado é intuitivo, mas a prova pede um valor. As medidas de dispersão transformam esse espalhamento em número, para que você possa comparar conjuntos e dizer, com base numérica, qual é o mais regular.'],
      ['h', 'Pegadinhas'],
      ['ul', [
        'Média igual não quer dizer conjuntos iguais. A média esconde o espalhamento.',
        'Maior dispersão é pior em termos de regularidade: o conjunto é mais irregular.',
        'Menor dispersão significa conjunto mais homogêneo, mais concentrado e mais regular.'
      ]],
      ['h', 'Resumo de revisão'],
      ['ul', [
        'Dispersão = espalhamento dos valores em torno do centro.',
        'As medidas de dispersão complementam as de posição.',
        'Maior dispersão = mais irregular; menor dispersão = mais regular (homogêneo).',
        'Duas distribuições com a mesma média (24 °C) podem ter dispersões muito diferentes.'
      ]]
    ],
    2: [
      ['h', 'As três medidas de dispersão'],
      ['p', 'Assim como há três medidas de tendência central (média, mediana e moda), há três medidas de dispersão: variância, desvio padrão e coeficiente de variação. Cada uma nasce da anterior.'],
      ['ol', [
        'Variância: mede o espalhamento dos valores em relação à média. Fórmula: variância = soma de [ f × (x − média)² ] / soma de f.',
        'Desvio padrão (representado pela letra grega sigma): é a raiz quadrada da variância.',
        'Coeficiente de variação (CV): CV = (desvio padrão / média) × 100. Dá a dispersão em porcentagem.'
      ]],
      ['h', 'De onde vem o quadrado da variância'],
      ['p', 'Veja o que acontece quando você mede a diferença de cada temperatura para a média. Na cidade B, com média 24: 23 − 24 = −1; 24 − 24 = 0; 25 − 24 = +1. Somando: −1 + 0 + 1 = 0.'],
      ['p', 'Na cidade A, com média 24: 11 − 24 = −13; 26 − 24 = +2; 35 − 24 = +11. Somando: −13 + 2 + 11 = 0. A parte abaixo da média cancela exatamente a parte acima.'],
      ['p', 'A soma das diferenças em relação à média é sempre zero, então ela não serve como medida de espalhamento. Para resolver, cria-se um artifício matemático: eleva-se cada diferença ao quadrado. O quadrado de um número negativo é positivo (menos com menos dá mais), então as diferenças deixam de se anular e a soma passa a refletir o espalhamento. Cada quadrado é multiplicado pelo número de vezes (frequência) com que aquele valor aparece, e o total é dividido pela soma das frequências.'],
      ['h', 'Por que o desvio padrão existe'],
      ['p', 'Elevar ao quadrado foi um artifício. O inverso do quadrado é a raiz quadrada. O desvio padrão simplesmente tira a raiz da variância e desfaz o artifício, devolvendo o valor à unidade original dos dados. É por isso que, na prática, o desvio padrão é a medida mais usada para dizer quanto os valores se afastam da média.'],
      ['h', 'Por que o coeficiente de variação existe'],
      ['p', 'A variância e o desvio padrão dependem da unidade dos dados. O CV divide o desvio padrão pela média e multiplica por 100, produzindo um percentual: quanto o desvio padrão representa da média. Por ser percentual, ele permite comparar conjuntos de grandezas diferentes (por exemplo, peso e altura) e é a medida usada para decidir qual conjunto é mais regular. Quanto menor o CV, mais homogêneo o conjunto.'],
      ['h', 'Pegadinhas'],
      ['ul', [
        'A variância não é o desvio padrão: o desvio padrão é a raiz da variância.',
        'O CV é desvio padrão dividido pela média (e não dividido por f nem pelo total de elementos).',
        'Esqueceu de multiplicar por 100? Então você tem uma proporção, e não uma porcentagem.'
      ]],
      ['h', 'Resumo de revisão'],
      ['ul', [
        'Variância = soma de f·(x − média)² / soma de f.',
        'Desvio padrão = raiz quadrada da variância.',
        'CV = desvio padrão / média × 100 (em %).',
        'O quadrado serve para evitar que diferenças positivas e negativas se anulem (a soma delas é zero).',
        'Menor CV = conjunto mais regular (homogêneo).'
      ]]
    ],
    3: [
      ['h', 'Roteiro de cálculo'],
      ['ol', [
        'Calcule a média: soma de x·f dividida pela soma de f.',
        'Subtraia a média de cada valor (x − média).',
        'Eleve cada diferença ao quadrado.',
        'Multiplique cada quadrado pela frequência f.',
        'Some os resultados.',
        'Divida a soma pela soma de f: essa é a variância.',
        'Extraia a raiz quadrada: esse é o desvio padrão.',
        'Divida o desvio padrão pela média e multiplique por 100: esse é o CV.'
      ]],
      ['h', 'Cidade A (11, 26 e 35 °C)'],
      ['p', 'Cada temperatura aparece uma vez (f = 1), e a soma das frequências é 3. Soma de x·f = 11 + 26 + 35 = 72, então a média é 72 / 3 = 24.'],
      ['ul', [
        '11 − 24 = −13; elevado ao quadrado: (−13)² = 169.',
        '26 − 24 = 2; elevado ao quadrado: 2² = 4.',
        '35 − 24 = 11; elevado ao quadrado: 11² = 121.',
        'Soma: 169 + 4 + 121 = 294.'
      ]],
      ['p', 'Variância = 294 / 3 = 98. Desvio padrão = raiz quadrada de 98 ≈ 9,9. CV = 9,9 / 24 × 100 ≈ 41,25%, isto é, cerca de 41%.'],
      ['p', 'Na calculadora científica, digite o negativo entre parênteses antes de elevar ao quadrado: (−13)² = 169. Sem parênteses, o sinal pode ficar de fora do quadrado e o resultado sai negativo, o que está errado.'],
      ['h', 'Cidade B (23, 24 e 25 °C)'],
      ['p', 'Média: 72 / 3 = 24. As diferenças são −1, 0 e +1; seus quadrados são 1, 0 e 1; a soma é 2. Variância = 2 / 3 ≈ 0,667. Desvio padrão = raiz quadrada de 0,667 ≈ 0,816. CV = 0,816 / 24 × 100 ≈ 3,4%.'],
      ['h', 'Conclusão da comparação'],
      ['p', 'A cidade B tem CV de 3,4%, muito menor do que o CV de cerca de 41% da cidade A. Portanto, a temperatura em B varia pouco: é mais homogênea e mais regular. A cidade A tem maior dispersão, maior espalhamento e é mais irregular. Isso confirma, em números, o que se via na comparação intuitiva dos valores 11, 26 e 35 contra 23, 24 e 25.'],
      ['h', 'Pegadinhas'],
      ['ul', [
        'Não pare na variância (98 ou 0,667): a questão costuma pedir o desvio padrão ou o CV.',
        'Faça a tabela com cuidado: um erro em uma diferença contamina toda a soma.',
        'O desvio padrão de A (9,9) é maior do que o de B (0,82), mas a comparação mais completa usa o CV.'
      ]],
      ['h', 'Resumo de revisão'],
      ['ul', [
        'A: média 24; soma dos quadrados 294; variância 98; desvio padrão ≈ 9,9; CV ≈ 41,25%.',
        'B: média 24; soma dos quadrados 2; variância ≈ 0,667; desvio padrão ≈ 0,816; CV ≈ 3,4%.',
        'B é mais regular (menor CV); A é mais irregular (maior CV).',
        'Quadrados de negativos são positivos: (−13)² = 169.'
      ]]
    ],
    4: [
      ['h', 'O cálculo com frequências'],
      ['p', 'Quando os dados vêm em uma tabela com uma coluna de frequências (f), o procedimento é o mesmo do roteiro, mas cada linha entra com o seu peso. Montam-se as colunas x, f, x·f, (x − média)² e f·(x − média)². A média usa a coluna x·f; a variância usa a coluna f·(x − média)².'],
      ['h', 'Tabela A: idades de 15 pessoas'],
      ['p', 'Idades: 10, 12, 14, 16 e 18 anos. Número de pessoas com cada idade: 2, 4, 4, 2 e 3, totalizando 15.'],
      ['ol', [
        'x·f: 10 × 2 = 20; 12 × 4 = 48; 14 × 4 = 56; 16 × 2 = 32; 18 × 3 = 54. Soma = 210. Média = 210 / 15 = 14.',
        '(x − 14)²: 10 → (−4)² = 16; 12 → (−2)² = 4; 14 → 0; 16 → 2² = 4; 18 → 4² = 16.',
        'f·(x − 14)²: 16 × 2 = 32; 4 × 4 = 16; 0 × 4 = 0; 4 × 2 = 8; 16 × 3 = 48. Soma = 104.',
        'Variância = 104 / 15 ≈ 6,93.',
        'Desvio padrão = raiz de 6,93 ≈ 2,63.',
        'CV = 2,63 / 14 × 100 ≈ 18,81%.'
      ]],
      ['p', 'Veja que a média (14) aparece repetida em todas as linhas na coluna (x − média): é sempre o mesmo valor, calculado uma única vez no começo.'],
      ['h', 'Os cuidados do cálculo'],
      ['ul', [
        'O sinal da diferença não importa depois do quadrado: toda a coluna (x − média)² é positiva. Por isso, 10 − 14 = −4 e (−4)² = 16 positivo.',
        'Na hora de calcular o CV, divida o desvio padrão pela média (14), e não pela frequência.',
        'Ao arredondar em duas casas, olhe a terceira: 18,808 vira 18,81, pois o terceiro dígito (8) é 5 ou mais e faz o dígito anterior subir.',
        'Não esqueça de multiplicar por f: uma idade que aparece quatro vezes pesa quatro vezes mais.'
      ]],
      ['h', 'Resumo de revisão'],
      ['ul', [
        'Média = soma de x·f / soma de f (aqui, 210 / 15 = 14).',
        'Variância = soma de f·(x − média)² / soma de f (aqui, 104 / 15 ≈ 6,93).',
        'Desvio padrão ≈ 2,63; CV ≈ 18,81%.',
        'Divida o desvio padrão pela média, não por f.',
        'Todo (x − média)² é positivo; use o sinal apenas na subtração.'
      ]]
    ],
    5: [
      ['h', 'Comparar dois conjuntos pelo CV'],
      ['p', 'Quando o enunciado pede qual de dois conjuntos é mais regular, calcule o CV de cada um e compare. Menor CV = mais homogêneo, menos espalhado, mais regular; maior CV = mais irregular. O CV é o que permite comparar até conjuntos que usam unidades diferentes, porque é um percentual.'],
      ['h', 'Tabela B (comparada com a Tabela A)'],
      ['p', 'A Tabela B também traz idades e número de pessoas, com 23 pessoas no total. Os somatórios necessários para o cálculo são: soma de x·f = 322 e soma de f·(x − média)² = 136.'],
      ['ol', [
        'Média = 322 / 23 = 14 (igual à da Tabela A, por coincidência; poderia ser diferente).',
        'Variância = 136 / 23 ≈ 5,91.',
        'Desvio padrão = raiz de 5,91 ≈ 2,43.',
        'CV = 2,43 / 14 × 100 ≈ 17,37%.'
      ]],
      ['p', 'Conclusão: a Tabela A tem CV de 18,81% e a Tabela B tem 17,37%. A Tabela B tem menor CV, logo é mais regular e menos espalhada. A Tabela A é mais irregular.'],
      ['h', 'Dados em classes (faixas de valores)'],
      ['p', 'Quando a tabela traz faixas (intervalos de classe), você usa como valor x o ponto médio da classe: some os dois extremos e divida por dois. Depois, o procedimento é o mesmo.'],
      ['ul', [
        'Classe 42 a 52: (42 + 52) / 2 = 47.',
        'Classe 52 a 62: (52 + 62) / 2 = 57.',
        'Classe 62 a 72: (62 + 72) / 2 = 67, e assim por diante.'
      ]],
      ['p', 'Na calculadora, dê o igual (ou use parênteses) depois da soma dos extremos, antes de dividir por 2. Se você digitar 62 + 72 / 2 sem fechar a soma, a divisão atinge só o 72 e a conta dá errada.'],
      ['h', 'Exemplo: peso de 35 alunos'],
      ['p', 'O peso dos 35 alunos está em classes de 10 kg (42 a 52, 52 a 62, 62 a 72 etc.), com pontos médios 47, 57, 67 e assim por diante.'],
      ['ol', [
        'Soma de x·f = 2.485; média = 2.485 / 35 = 71 kg.',
        'Soma de f·(x − 71)² = 5.040.',
        'Variância = 5.040 / 35 = 144.',
        'Desvio padrão = raiz de 144 = 12.',
        'CV = 12 / 71 × 100 ≈ 16,90%.'
      ]],
      ['h', 'Exemplo: altura dos mesmos 35 alunos'],
      ['p', 'A altura está em centímetros, em classes de 7 cm (145 a 152, 152 a 159 etc.). Os pontos médios são 148,5 e 155,5, e assim por diante, e a média é de cerca de 168,17 cm. O resultado do CV da altura é de cerca de 6%.'],
      ['h', 'Conclusão e unidades'],
      ['p', 'Na mesma turma, a altura (CV de cerca de 6%) tem menor CV do que o peso (CV ≈ 16,90%). Portanto, a altura é mais homogênea e tem menor dispersão; o peso é mais irregular. Quanto às unidades: o peso médio é em kg; a variância é em kg², porque você elevou ao quadrado; o desvio padrão volta a kg; e o CV, ao dividir kg por kg, é adimensional e se expressa só em porcentagem. Com a altura, é igual: média em cm, variância em cm², desvio padrão em cm e CV em %.'],
      ['h', 'Pegadinhas'],
      ['ul', [
        'Comparar variâncias de grandezas diferentes (kg² e cm²) não faz sentido: use o CV.',
        'Ponto médio da classe: some os extremos e divida por 2; não use só o limite inferior.',
        'A média e os somatórios são coerentes: confira se Σx·f / Σf dá a média usada nas diferenças.'
      ]],
      ['h', 'Resumo de revisão'],
      ['ul', [
        'Tabela A: CV ≈ 18,81%; Tabela B: CV ≈ 17,37% → B mais regular.',
        'Classes: x é o ponto médio ((extremo menor + extremo maior) / 2).',
        'Peso: média 71, variância 144, desvio padrão 12, CV ≈ 16,90%.',
        'Altura: CV de cerca de 6% → mais homogênea que o peso.',
        'Variância em unidade ao quadrado; desvio padrão na unidade original; CV sem unidade (%).'
      ]]
    ],
    6: [
      ['h', 'Probabilidade: a ideia geral'],
      ['p', 'Probabilidade trata da chance de algo acontecer, ou seja, da possibilidade de determinado evento ocorrer. É um tema muito usado em jogos e que merece estudo mais profundo; aqui você aprende a base: o que é um experimento aleatório, o que é espaço amostral e como calcular a probabilidade de um evento simples.'],
      ['h', 'Experimento aleatório'],
      ['p', 'Para calcular uma probabilidade, o evento precisa ser aleatório, isto é, ao acaso. Você trabalha com moeda, dado e baralho honestos: aqueles em que todas as possibilidades têm as mesmas chances. Se alguém lixar um dado ou colocar um peso diferente nele, uma face passará a sair mais do que as outras. Isso não é experimento aleatório: é algo feito de má-fé, fora da matemática das possibilidades.'],
      ['h', 'Espaço amostral'],
      ['p', 'Sempre que você trabalha com um instrumento (moeda, dado, baralho), existe um espaço amostral (S): todas as possibilidades que existem naquele experimento.'],
      ['ul', [
        'Lançar uma moeda: S = {cara, coroa}. O espaço amostral tem 2 elementos.',
        'Lançar um dado: S = {1, 2, 3, 4, 5, 6}. O espaço amostral tem 6 elementos.'
      ]],
      ['p', 'A quantidade de elementos do espaço amostral, indicada por n(S), é o total de possibilidades. Você vai precisar dela em toda conta de probabilidade, sempre no denominador.'],
      ['h', 'Pegadinhas'],
      ['ul', [
        'Um dado de má-fé (com peso ou lixado) não é experimento aleatório.',
        'O espaço amostral é o conjunto de todas as possibilidades, e não apenas as que interessam.',
        'Dado = números de 1 a 6; moeda = cara ou coroa.'
      ]],
      ['h', 'Resumo de revisão'],
      ['ul', [
        'Experimento aleatório: ao acaso, de boa-fé (dado, moeda e baralho honestos).',
        'Espaço amostral (S): todas as possibilidades do experimento.',
        'Moeda: n(S) = 2; dado: n(S) = 6.',
        'O número de elementos do espaço amostral vai sempre no denominador da probabilidade.'
      ]]
    ],
    7: [
      ['h', 'O que é um evento'],
      ['p', 'Evento é aquilo que se deseja que aconteça, e é sempre um subconjunto do espaço amostral. Normalmente é definido por uma sentença, por exemplo: "no lançamento de um dado, obter um número par na face superior". Você traduz a sentença para os elementos de S que a satisfazem. O símbolo de contido indica que o evento está dentro do espaço amostral (E está contido em S).'],
      ['h', 'Exemplos com um dado: S = {1, 2, 3, 4, 5, 6}'],
      ['ul', [
        'Evento A: obter número par → A = {2, 4, 6}. É um evento qualquer, contido em S.',
        'Evento B: obter número menor ou igual a 6 → B = {1, 2, 3, 4, 5, 6}. É o evento certo, porque não há como errar: todo resultado do dado é menor ou igual a 6.',
        'Evento C: obter o número 4 → C = {4}. É o evento elementar, pois tem um único elemento do espaço amostral (poderia ser qualquer outro número).',
        'Evento D: obter número maior que 6 → D = conjunto vazio (representado por um zero cortado). É o evento impossível: nenhuma face satisfaz.'
      ]],
      ['h', 'Classificação dos eventos'],
      ['ol', [
        'Evento elementar: formado por um único elemento do espaço amostral.',
        'Evento certo: coincide com o espaço amostral inteiro (sempre ocorre).',
        'Evento impossível: é o conjunto vazio (nunca ocorre).',
        'Evento qualquer: um subconjunto com alguns elementos, como o dos números pares.'
      ]],
      ['h', 'Conjunto vazio não é zero'],
      ['p', 'O conjunto vazio não representa a face zero do dado. O dado não tem face 0: o conjunto vazio indica que não há nenhuma possibilidade de ocorrer. Do mesmo modo, tirar 8 num dado é impossível.'],
      ['h', 'Pegadinhas'],
      ['ul', [
        'Evento certo = espaço amostral inteiro; evento impossível = conjunto vazio.',
        'Evento elementar tem exatamente um elemento.',
        'O número par {2, 4, 6} não é nem certo nem impossível: é um evento qualquer.'
      ]],
      ['h', 'Resumo de revisão'],
      ['ul', [
        'Evento é um subconjunto do espaço amostral, descrito por uma sentença.',
        'Par num dado = {2, 4, 6}; ≤ 6 = evento certo; igual a 4 = evento elementar; > 6 = evento impossível (conjunto vazio).',
        'O conjunto vazio indica ausência de resultados, e não o número zero.'
      ]]
    ],
    8: [
      ['h', 'A fórmula'],
      ['p', 'Dado um experimento aleatório com espaço amostral S, a chance de ocorrer o evento E é P(E) = n(E) / n(S). Em palavras: número de possibilidades do evento dividido pelo número total de possibilidades do espaço amostral. O total (espaço amostral) fica sempre embaixo.'],
      ['h', 'Os exemplos resolvidos'],
      ['ol', [
        'Moeda, evento "obter cara": S = {cara, coroa}, n(S) = 2; só cara interessa, n(E) = 1. P = 1/2 = 0,5 = 50%. A chance de sair coroa também é de 50%.',
        'Dado, evento "número par": n(S) = 6; A = {2, 4, 6}, n(A) = 3. P = 3/6. A fração deve ser apresentada na forma mais simples, 1/2 (divida em cima e embaixo por 3). Decimal: 0,5. Porcentagem: 50%. A chance de ímpar também é de 50%.',
        'Dado, evento "número menor ou igual a 6": n(S) = 6 e n(E) = 6. P = 6/6 = 1 = 100%. Evento certo.',
        'Dado, evento "obter o número 4": n(E) = 1. P = 1/6 ≈ 0,167 ≈ 16,7% (0,16666...: com três casas fica 0,167).',
        'Dado, evento "número maior que 6": conjunto vazio, n(E) = 0. P = 0/6 = 0 = 0%. Evento impossível.'
      ]],
      ['h', 'Fração, decimal ou porcentagem'],
      ['p', 'A prova pode pedir a probabilidade em fração, em valor decimal (entre 0 e 1) ou em porcentagem (entre 0% e 100%). Para passar da fração ao decimal, divida o numerador pelo denominador (1 ÷ 2 = 0,5). Para chegar à porcentagem, multiplique o decimal por 100 (0,5 × 100 = 50%). Você deve ter presente as três formas, pois a banca escolhe qual pedir.'],
      ['h', 'Limites da probabilidade'],
      ['p', 'A probabilidade de qualquer evento está entre 0 e 1 (0% e 100%). O evento impossível tem P = 0; o evento certo tem P = 1 = 100%; um evento qualquer fica no meio, como o dos pares (50%).'],
      ['h', 'Pegadinhas'],
      ['ul', [
        'A fração 3/6 não aparece como resposta: ela vem simplificada, 1/2.',
        'O espaço amostral sempre vai embaixo (denominador); o evento, em cima.',
        'Quando for pedida a porcentagem, multiplique por 100: 1/6 = 0,1667 vira 16,7%.',
        'Probabilidade nunca é negativa nem maior do que 100%.'
      ]],
      ['h', 'Resumo de revisão'],
      ['ul', [
        'P(E) = n(E) / n(S).',
        'Cara na moeda = 1/2 = 50%; par no dado = 3/6 = 1/2 = 50%; ≤ 6 = 6/6 = 100%; número 4 = 1/6 ≈ 16,7%; > 6 = 0/6 = 0%.',
        'Evento certo: 100%; evento impossível: 0%.',
        'A probabilidade fica entre 0 e 1 (ou entre 0% e 100%).',
        'Apresente a fração na forma mais simples.'
      ]]
    ]
  };

  window.PCPE_QUESTOES[topic] = [
    {
      text: 'Duas distribuições têm a mesma média, mas a distribuição X tem coeficiente de variação muito menor do que a distribuição Y. Pode-se afirmar que:',
      options: [
        'X é mais irregular que Y, porque a média é igual.',
        'X é mais homogênea que Y, pois seus valores estão menos espalhados em torno da média.',
        'X e Y são idênticas, pois a média é igual.',
        'Y é mais regular que X, pois um CV maior indica menor dispersão.'
      ],
      correct: 1,
      exp: 'Menor medida de dispersão significa menos espalhamento e, portanto, conjunto mais regular (homogêneo). A média igual não torna as distribuições iguais; a dispersão maior (CV maior) é de Y, que é a mais irregular.'
    },
    {
      text: 'Na variância, as diferenças entre cada valor e a média são elevadas ao quadrado. O principal motivo é:',
      options: [
        'Evitar que as diferenças positivas e negativas se anulem, já que a soma delas em relação à média é zero.',
        'Transformar o resultado em porcentagem.',
        'Fazer com que o desvio padrão seja igual à variância.',
        'Aumentar a média dos dados.'
      ],
      correct: 0,
      exp: 'A soma das diferenças em relação à média é sempre zero; o quadrado deixa tudo positivo e permite medir o espalhamento. Não gera porcentagem (isso é o CV), não iguala desvio padrão e variância (o desvio padrão é a raiz) nem altera a média.'
    },
    {
      text: 'Em qual das situações o experimento NÃO pode ser tratado como aleatório para o cálculo de probabilidade?',
      options: [
        'Lançamento de uma moeda honesta.',
        'Retirada de uma carta de um baralho honesto.',
        'Lançamento de um dado que foi lixado para que uma das faces saia mais vezes.',
        'Lançamento de um dado honesto de seis faces.'
      ],
      correct: 2,
      exp: 'Experimento aleatório é aquele que ocorre ao acaso e de boa-fé. Um dado lixado ou com peso favorece uma face e foge da matemática das possibilidades iguais. Moeda, baralho e dado honestos são aleatórios.'
    },
    {
      text: 'Para os pesos de 35 alunos, o desvio padrão é 12 kg e a média é 71 kg. O coeficiente de variação, aproximadamente, é:',
      options: [
        '5,9%',
        '12%',
        '169%',
        '16,9%'
      ],
      correct: 3,
      exp: 'CV = desvio padrão / média × 100 = 12 / 71 × 100 ≈ 16,9%. Os 12% seriam só o desvio padrão, 5,9 é 71/12 e 169% decorre de erro de cálculo.'
    },
    {
      text: 'Nas cidades A (11, 26 e 35 °C) e B (23, 24 e 25 °C), a média é 24 °C nas duas. Os coeficientes de variação são, respectivamente, cerca de 41% e 3,4%. A conclusão correta é:',
      options: [
        'A cidade A tem temperaturas mais regulares, pois tem o maior CV.',
        'A cidade B é mais homogênea, pois tem menor dispersão.',
        'As duas cidades têm o mesmo comportamento, porque as médias coincidem.',
        'A cidade B é mais irregular, pois a temperatura dela quase não varia.'
      ],
      correct: 1,
      exp: 'Menor CV significa menor espalhamento e, portanto, maior regularidade: B (3,4%) é a mais homogênea. As demais alternativas invertem a lógica do CV ou ignoram que a média igual não garante a mesma dispersão.'
    },
    {
      text: 'Em uma tabela de frequências com 15 pessoas, a soma de f·(x − média)² é 104 e a média é 14. O desvio padrão é aproximadamente:',
      options: [
        '6,93',
        '104',
        '2,63',
        '18,81'
      ],
      correct: 2,
      exp: 'Variância = 104 / 15 ≈ 6,93. O desvio padrão é a raiz quadrada da variância: raiz de 6,93 ≈ 2,63. 6,93 é a variância, 104 é a soma e 18,81 (%) é o CV.'
    },
    {
      text: 'Em uma tabela com dados agrupados em classes, o valor x usado para a classe "52 a 62" é:',
      options: [
        '57',
        '52',
        '62',
        '114'
      ],
      correct: 0,
      exp: 'Usa-se o ponto médio: (52 + 62) / 2 = 57. O extremo inferior (52), o superior (62) ou a soma sem dividir (114) não representam a classe.'
    },
    {
      text: 'Sobre as unidades, se os pesos dos alunos são medidos em kg, é correto afirmar que:',
      options: [
        'A variância é em kg, o desvio padrão em kg² e o CV em kg.',
        'A variância, o desvio padrão e o CV são todos em kg.',
        'A variância é em kg, e o desvio padrão e o CV são adimensionais.',
        'A variância é em kg², o desvio padrão em kg e o CV não tem unidade (%).'
      ],
      correct: 3,
      exp: 'A variância usa o quadrado das diferenças, por isso sai em kg². O desvio padrão tira a raiz e volta a kg. O CV divide kg por kg e fica adimensional, em porcentagem.'
    },
    {
      text: 'No lançamento de um dado honesto, a probabilidade de obter um número par na face superior é:',
      options: [
        '3/6, que é apresentada simplificada como 1/6.',
        '1/2, igual a 0,5 ou 50%.',
        '1/3, igual a 33%.',
        '2/6, igual a 0,33.'
      ],
      correct: 1,
      exp: 'S = {1,...,6}, n(S) = 6; pares = {2, 4, 6}, n(E) = 3. P = 3/6 = 1/2 = 0,5 = 50%. As demais mostram simplificação errada ou contagem errada dos casos favoráveis.'
    },
    {
      text: 'No lançamento de um dado de seis faces, o evento "obter um número maior que 6" e o evento "obter um número menor ou igual a 6" são, respectivamente:',
      options: [
        'Elementar, com P = 1/6, e certo, com P = 0.',
        'Certo, com P = 1, e impossível, com P = 0.',
        'Impossível, com P = 0%, e certo, com P = 100%.',
        'Impossível, com P = 100%, e certo, com P = 0%.'
      ],
      correct: 2,
      exp: 'Nenhuma face é maior do que 6: conjunto vazio, evento impossível, P = 0/6 = 0%. Todas as faces são menores ou iguais a 6: espaço amostral inteiro, evento certo, P = 6/6 = 100%. As demais trocam ou misturam os valores.'
    }
  ];
})();
