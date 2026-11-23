(function () {
  'use strict';
  window.PCPE_TOPIC_GUIDES = window.PCPE_TOPIC_GUIDES || {};
  window.PCPE_DEEPENING = window.PCPE_DEEPENING || {};
  window.PCPE_QUESTOES = window.PCPE_QUESTOES || {};
  const topic = 'Amostragem, gráficos e tabelas';
  const base = window.PCPE_TOPIC_GUIDES[topic] || {};
  window.PCPE_TOPIC_GUIDES[topic] = Object.assign({}, base, {
    lessons: [
      [
        `Aula 1 · Variáveis e variáveis qualitativas`,
        `Variável é aquilo que muda de um elemento para outro quando você coleta informações em uma pesquisa: sexo, estado civil, cor dos olhos, salário, número de imóveis, número de empregados, número de alunos. As variáveis se dividem em dois grandes grupos: qualitativas (falam de qualidade) e quantitativas (falam de quantidade). Toda vez que as respostas forem palavras, e não quantidades, a variável é qualitativa.`,
        `Sexo (masculino ou feminino), estado civil (casado, solteiro, viúvo) e cor dos olhos (castanho, preto, azul, verde) são qualitativas. Mesmo que um questionário codifique masculino como 1 e feminino como 2, a variável continua qualitativa: o número só facilita o processamento e não expressa quantidade.`,
        `Não se deixe enganar por números usados como código. Pergunte sempre: o dado informa uma quantidade ou uma qualidade? Respostas do tipo sim ou não também são qualitativas.`
      ],
      [
        `Aula 1 · Variáveis quantitativas: discretas e contínuas`,
        `Variável quantitativa é aquela cujo resultado é um número que expressa quantidade (número de empregados, número de imóveis, salário, altura, peso). Ela se subdivide em duas: a quantitativa discreta só assume valores inteiros (contagens), e a quantitativa contínua pode assumir valores quebrados, entre dois limites.`,
        `Discretas: número de alunos (5, 10, 15, 28... nunca 23,5), número de filhos (0, 1, 2, 3...) e número de cartões de crédito (você tem 3 ou 4, nunca 3 e meio). Contínuas: hora de dormir, peso, altura, distância e salário.`,
        `Teste prático: o valor "quebrado" faz sentido? Se não faz (não existe 3,5 filhos), é discreta; se faz (1,72 m de altura), é contínua.`
      ],
      [
        `Aula 1 · População e amostra`,
        `População é o conjunto de todos os elementos do mesmo universo que você quer estudar. Amostra é um subconjunto da população, a parte que você de fato pesquisa para tirar conclusões sobre o todo. A população depende do que você define como objeto da pesquisa: se o estudo é com os alunos de uma faculdade, a população são todos eles; se é só com os de Administração, a população passa a ser os alunos de Administração.`,
        `Exemplo do sangue: para saber como está sua saúde, você colhe uma amostra de sangue, não todo o sangue. A amostra informa a situação de todo o organismo. Do mesmo modo, uma pesquisa eleitoral ouve alguns milhares de pessoas e tira conclusões sobre todo o país.`,
        `Amostra sempre é um subconjunto da população, nunca o contrário. E a população é definida pelo recorte da pesquisa: mudou o recorte, mudou a população.`
      ],
      [
        `Aula 1 · Técnicas de amostragem: aleatória simples e estratificada`,
        `Amostragem aleatória simples é o sorteio: você tem o total de elementos, escolhe quantos vai pesquisar e sorteia. Amostragem estratificada é mais refinada: você divide a população em estratos (subconjuntos) e retira de cada um uma parte proporcional ao seu tamanho, de modo que a amostra tenha os mesmos percentuais da população. Se você não respeitar a proporção, a amostra fica distorcida.`,
        `Aleatória simples: de 200 alunos do turno da manhã você quer 10%. 10% de 200 = 20. Numere os alunos de 1 a 200, escreva os números em papéis, coloque numa urna e retire 20. Estratificada: faculdade com 70% de alunos, 10% de professores e 20% de colaboradores; a amostra também deve ter 70%, 10% e 20%. Em pesquisa nacional com 5.000 pessoas, se o estado de São Paulo representa 20% do eleitorado, 20% de 5.000 = 1.000 pessoas da amostra devem ser de São Paulo.`,
        `Na estratificada, calcule a porcentagem sobre cada estrato separadamente, e não sobre o total. Quando o resultado for quebrado, arredonde para inteiro, pois não existe 11,8 aluno.`
      ],
      [
        `Aula 1 · Exercícios: classificando variáveis`,
        `Para classificar uma variável, siga a ordem: (1) a resposta é palavra ou categoria? Então é qualitativa. (2) É número que expressa quantidade? Então é quantitativa. (3) Dentro da quantitativa, só admite inteiros? Discreta. Admite valores quebrados? Contínua.`,
        `Cor dos olhos: qualitativa. Comprimento do prego: quantitativa contínua. Número de filhos: quantitativa discreta. Número de livros da biblioteca: quantitativa discreta. Pontos obtidos na jogada de um dado: quantitativa discreta. Usuário de internet em casa (sim ou não): qualitativa. Diâmetro externo de uma peça cilíndrica: quantitativa contínua. Salário dos funcionários: quantitativa contínua. Sexo dos filhos: qualitativa. Número de cartões de crédito do cliente: quantitativa discreta.`,
        `Quem pergunta "usuário de internet?" colhe sim ou não, ou seja, qualidade, e não quantidade. Já o dado do lançamento (1 a 6) nunca é 3,5: é discreto.`
      ],
      [
        `Aula 1 · Exercício resolvido de amostra estratificada`,
        `Quando a população tem dois ou mais grupos identificáveis, você aplica o percentual da amostra a cada grupo e depois ajusta os números para inteiros. O total da amostra deve continuar igual ao percentual pedido sobre a população.`,
        `População de 200 alunos: 118 meninos e 82 meninas. Amostra representativa de 10%. Meninos: 118 × 10% = 11,8, que arredonda para 12. Meninas: 82 × 10% = 8,2, que arredonda para 8. Amostra final: 12 meninos + 8 meninas = 20 alunos, que é 10% de 200. Como há mais meninos na população, a amostra também tem mais meninos, na mesma proporção.`,
        `Conferência obrigatória: some os resultados já arredondados e confira se o total bate com o percentual sobre a população (20 = 10% de 200). O percentual (10%) foi estabelecido no enunciado; você poderia ter usado outro, e o método seria o mesmo.`
      ],
      [
        `Aula 2 · Tabelas e gráfico de colunas`,
        `Os dados de uma pesquisa podem ser apresentados em tabelas ou em gráficos. Uma tabela pode ser transformada em gráfico, e do gráfico você extrai as mesmas informações da tabela. No gráfico de colunas, as barras ficam na vertical: no eixo horizontal vão as categorias (por exemplo, os anos) e no eixo vertical, as quantidades. A altura de cada coluna é o valor daquela categoria.`,
        `Dados do INPE sobre focos de incêndio de 1991 a 1995, em milhares de queimadas: o valor 17,8 significa 17,8 mil, isto é, 17.800 queimadas. O gráfico mostra visualmente que o maior valor (cerca de 39,9 mil, quase 40) ocorre em 1995, e que ao longo dos anos há quedas e aumentos. Esse é o objetivo do gráfico: mostrar a informação de forma visual.`,
        `Leia sempre a unidade do eixo. "Em milhares" quer dizer que 17,8 é 17.800. Esquecer isso gera erros de mil vezes.`
      ],
      [
        `Aula 2 · Interpretando o gráfico (ENEM): filhos, chuva e enquete`,
        `Questão de gráfico exige interpretação, e não apenas leitura: você precisa identificar o que cada barra mede e o que a pergunta realmente pede (pessoas, filhos, meses, percentuais) e, quando o enunciado exige, converter uma coisa na outra. Em prova sem calculadora, use arredondamentos inteligentes para ganhar tempo.`,
        `(1) Filhos de 23 ex-alunas: 8 mulheres sem filhos, 7 com um filho, 6 com dois e 2 com três (8 + 7 + 6 + 2 = 23). Um prêmio é sorteado entre os filhos; qual a probabilidade de ser filho único? Total de filhos: 0×8 + 1×7 + 2×6 + 3×2 = 0 + 7 + 12 + 6 = 25. Filhos únicos: 7. Probabilidade = 7/25. Quem divide por 23 erra, pois o sorteio é entre os filhos, não entre as mães; 7 é primo e 25 não é múltiplo de 7, logo a fração não reduz. (2) Chuva e anfíbios: os anfíbios se reproduzem mais quando há água em abundância, então procure os meses de maior precipitação. A pegadinha é que o gráfico é anual: as quatro barras mais altas ficam em novembro, dezembro, janeiro e fevereiro; ao terminar o ano, começa o outro. A resposta é novembro a fevereiro (e não setembro a dezembro, janeiro a abril, março a junho ou maio a agosto). (3) Enquete de 2010 com 279 internautas: 25% responderam "não". As alternativas eram faixas, como "mais de 50 e menos de 75". Arredonde 279 para 280: 25% é dividir por 4, e 280 ÷ 4 = 70, um pouco menos que 70 (o exato é 69,75). Cai entre 50 e 75, sem calculadora.`,
        `Três cuidados: (a) a probabilidade é "parte ÷ total", e o total precisa ser da mesma natureza da parte (filhos com filhos); (b) a sequência dos meses é circular; (c) quando as alternativas são faixas, não precisa do valor exato: aproxime.`
      ],
      [
        `Aula 2 · Gráfico de barras`,
        `O gráfico de barras é muito parecido com o de colunas: quando os retângulos estão na vertical, é gráfico de colunas; quando estão na horizontal, é gráfico de barras. A leitura é a mesma, e muitas questões trazem percentuais junto com uma quantidade conhecida, que você usa para descobrir o total ou outra categoria.`,
        `Escola com aulas em três períodos: manhã, tarde e noite. A noite tem 300 alunos; a tarde, 40% e a manhã, 35%. Passo a passo: 40% + 35% = 75%; logo a noite é 25%. Se 25% são 300 alunos, 1% é 300 ÷ 25 = 12. A tarde, com 40%, tem 40 × 12 = 480 alunos. Pela regra de três: 300 × 40 ÷ 25 = 480. (A manhã teria 35 × 12 = 420.)`,
        `Quando o gráfico informa a quantidade de uma categoria e o percentual das outras, descubra primeiro o percentual que falta (100% menos a soma) e só então calcule o valor de 1%.`
      ]
    ],
    practice: [
      `Uma pesquisa registra "sexo" com códigos 1 (masculino) e 2 (feminino). A variável é qualitativa ou quantitativa? Justifique.`,
      `Classifique cada variável como qualitativa, quantitativa discreta ou quantitativa contínua: número de livros em uma biblioteca; altura dos alunos; cor dos olhos; pontos obtidos em uma jogada de dado.`,
      `Uma população de 300 alunos terá uma amostra aleatória simples de 10%. Quantos alunos serão sorteados e como se faz o sorteio?`,
      `Em uma população de 150 meninos e 50 meninas será extraída amostra estratificada de 10%. Quantos de cada sexo entram na amostra?`,
      `Em um gráfico de barras, a noite representa 20% e tem 200 alunos; a tarde representa 45%. Quantos alunos há à tarde?`
    ],
    answers: [
      `Qualitativa. O número é só um código para facilitar o processamento; a informação é uma categoria (masculino ou feminino), não uma quantidade.`,
      `Número de livros: quantitativa discreta (só inteiros). Altura: quantitativa contínua (admite valores quebrados). Cor dos olhos: qualitativa. Pontos do dado: quantitativa discreta (1 a 6, inteiros).`,
      `10% de 300 = 30 alunos. Numeram-se os alunos de 1 a 300, escrevem-se os números em papéis, colocam-se em uma urna e retiram-se 30.`,
      `Meninos: 150 × 10% = 15. Meninas: 50 × 10% = 5. Total: 20 alunos, que é 10% de 200.`,
      `Se 20% são 200 alunos, 1% é 200 ÷ 20 = 10. A tarde, com 45%, tem 45 × 10 = 450 alunos (regra de três: 200 × 45 ÷ 20 = 450).`
    ]
  });

  window.PCPE_DEEPENING[topic] = {
    1: [
      ['h', 'O que é variável'],
      ['p', `Em uma pesquisa estatística, você pega um conjunto de itens e anota informações sobre cada um deles. Essas informações variam de item para item, e é por isso que se chamam variáveis. Variável é o resultado possível de um fenômeno observado. São exemplos: sexo, estado civil, cor dos olhos, salário, número de imóveis, número de empregados de uma empresa e número de alunos de uma escola. Quando você aplica um questionário, cada pergunta gera uma variável.`],
      ['h', 'Os dois grandes grupos'],
      ['p', `As variáveis se classificam em dois grandes grupos: qualitativas e quantitativas. O nome já diz: a primeira trata de qualidade, a segunda trata de quantidade.`],
      ['h', 'Variável qualitativa'],
      ['p', `Toda vez que as respostas forem palavras, categorias, atributos, e não quantidades, a variável é qualitativa. Os dados não são números que expressem quantidade. Exemplos:`],
      ['ul', [
        `Sexo: masculino ou feminino.`,
        `Estado civil: casado, solteiro, viúvo e assim por diante.`,
        `Cor dos olhos: castanho, preto, azul, verde.`,
        `Respostas do tipo sim ou não (por exemplo, "usa internet em casa?").`
      ]],
      ['h', 'A pegadinha do código numérico'],
      ['p', `Às vezes o questionário codifica o sexo assim: 1 para masculino e 2 para feminino. Isso não torna a variável quantitativa. A informação continua sendo qualitativa (masculino ou feminino); o número serve apenas para facilitar o processamento depois e não tem relação com quantidade. A regra é: analise o tipo de informação. Se ela não é uma quantidade, é qualitativa.`],
      ['h', 'Como identificar na prova'],
      ['ol', [
        `Leia qual é a variável (o que está sendo medido ou perguntado).`,
        `Pergunte-se: a resposta é palavra/categoria ou é um número que mede quantidade?`,
        `Se for categoria (ainda que codificada por número), classifique como qualitativa.`,
        `Se for quantidade, passe para a classificação entre discreta e contínua (próxima lição).`
      ]],
      ['h', 'Resumo de revisão'],
      ['ul', [
        `Variável é o resultado possível de um fenômeno; ela varia de item para item.`,
        `Qualitativa: respostas em palavras ou categorias (sexo, estado civil, cor dos olhos, sim/não).`,
        `Quantitativa: respostas em números que expressam quantidade (salário, altura, número de empregados).`,
        `Número usado como código (1 = masculino, 2 = feminino) não torna a variável quantitativa.`
      ]]
    ],
    2: [
      ['h', 'Variável quantitativa'],
      ['p', `Variável quantitativa é aquela cujo resultado é um número que representa quantidade: número de empregados, número de imóveis, salário, altura, peso, e assim por diante. Dentro dela há dois subgrupos: as discretas e as contínuas.`],
      ['h', 'Quantitativa discreta'],
      ['p', `Discreta tem a ver com números inteiros. Toda vez que os dados só podem ser inteiros (normalmente resultado de contagem), a variável é quantitativa discreta. Ela é o contrário de contínua.`],
      ['ul', [
        `Número de alunos: 5, 10, 15, 20, 28... não pode ser 23,5; não há como ter aluno quebrado.`,
        `Número de filhos: 0, 1, 2, 3, 4...; não existe filho quebrado.`,
        `Número de cartões de crédito: você tem 3 ou 4; não existe "3 cartões e meio".`
      ]],
      ['h', 'Quantitativa contínua'],
      ['p', `Quando a variável pode assumir valores quebrados, entre dois limites quaisquer, ela é quantitativa contínua. São medidas, como hora de dormir, peso, altura, distância e salário. Uma pessoa pode ter 1,72 m e pesar 68,4 kg; entre dois valores sempre cabe outro.`],
      ['h', 'Teste do valor quebrado'],
      ['p', `Um jeito rápido de decidir: pergunte se faz sentido um valor quebrado. Não faz sentido ter 2,5 filhos nem 3,5 cartões: discreta. Faz sentido medir 1,72 m ou receber R$ 1.481,58: contínua. Atenção: o fato de os valores de uma amostra por acaso serem redondos não torna a variável discreta. O que importa é se a variável poderia assumir valor quebrado.`],
      ['h', 'Esquema completo'],
      ['ul', [
        `Variável qualitativa: categorias (palavras).`,
        `Variável quantitativa discreta: números inteiros, normalmente contagens.`,
        `Variável quantitativa contínua: números que admitem valores quebrados, normalmente medidas.`
      ]],
      ['h', 'Resumo de revisão'],
      ['ul', [
        `Quantitativa se divide em discreta (inteiros) e contínua (quebrados).`,
        `Discretas: número de alunos, de filhos, de cartões, de livros.`,
        `Contínuas: hora de dormir, peso, altura, distância, salário.`,
        `Teste: "faz sentido um valor quebrado?" Se sim, contínua; se não, discreta.`
      ]]
    ],
    3: [
      ['h', 'População'],
      ['p', `Em Estatística, população é o conjunto de elementos do mesmo universo que você deseja estudar. É o todo das informações que poderiam ser coletadas. Se você vai fazer uma pesquisa com alunos de uma faculdade, a população são todos os alunos daquela faculdade.`],
      ['h', 'Amostra'],
      ['p', `Amostra é um subconjunto da população: a parte que você realmente seleciona e pesquisa. Se de todos os alunos da faculdade você escolher 100 para responder à pesquisa, esses 100 formam a amostra. A ideia é que, analisando a amostra, você consiga conclusões sobre o todo.`],
      ['h', 'A população depende do recorte'],
      ['p', `A população é definida pelo objeto da pesquisa. Se a análise for apenas entre os alunos do curso de Administração, a população deixa de ser todos os alunos da faculdade e passa a ser todos os alunos de Administração. A amostra, então, é um subconjunto dos alunos de Administração.`],
      ['h', 'Dois exemplos para fixar'],
      ['ul', [
        `Exame de sangue: para saber como está a sua saúde, você não retira todo o sangue; colhe uma amostra, e ela informa a situação de todo o organismo.`,
        `Pesquisa eleitoral: em uma eleição presidencial, ouve-se uma amostra de alguns milhares de pessoas, e a conclusão vale para toda a população do país.`
      ]],
      ['h', 'Por que usar amostra'],
      ['p', `Pesquisar toda a população costuma ser inviável ou desnecessário. Com uma amostra bem escolhida e de tamanho adequado, é possível tirar conclusões sobre o todo. Existem técnicas especiais de amostragem para que a amostra represente bem a população; as principais estão na próxima lição.`],
      ['h', 'Resumo de revisão'],
      ['ul', [
        `População: todos os elementos do universo em estudo.`,
        `Amostra: subconjunto da população, efetivamente pesquisado.`,
        `Mudando o recorte da pesquisa, muda a população (todos os alunos x alunos de Administração).`,
        `A análise da amostra permite concluir sobre toda a população (exame de sangue, pesquisa eleitoral).`
      ]]
    ],
    4: [
      ['h', 'Amostragem aleatória simples'],
      ['p', `Na amostragem aleatória simples você tem um total de elementos, decide quantos vai pesquisar e faz um sorteio. Todos os elementos têm a mesma chance de entrar na amostra.`],
      ['p', `Exemplo: obter uma amostra representativa de 10% de uma população de 200 alunos do período da manhã.`],
      ['ol', [
        `Calcule o tamanho da amostra: 10% de 200 = 20 alunos.`,
        `Numere os alunos de 1 a 200.`,
        `Escreva os números em pedaços de papel e coloque em uma urna.`,
        `Retire 20 papéis da urna. Os alunos cujos números forem sorteados formam a amostra.`
      ]],
      ['h', 'Amostragem estratificada'],
      ['p', `A amostragem estratificada é mais refinada. A população é formada por subconjuntos (estratos) e a amostra deve respeitar a proporção de cada um deles. Isto é, a amostra precisa ter os mesmos percentuais da população; se não, a amostra fica distorcida.`],
      ['p', `Exemplo: uma faculdade tem 70% de alunos, 10% de professores e 20% de colaboradores (os que trabalham lá). Em uma pesquisa com essas pessoas, a amostra deve ter 70% de alunos, 10% de professores e 20% de colaboradores. Se você pesquisasse, por exemplo, mais professores do que a proporção, o resultado refletiria excessivamente a opinião deles.`],
      ['h', 'Aplicação real: pesquisa eleitoral'],
      ['p', `O estado de São Paulo é o maior colégio eleitoral do país e tem um percentual em relação ao total de eleitores. Ao pesquisar, é preciso tirar da amostra uma proporção igual a esse percentual. Se a amostra tem 5.000 pessoas e São Paulo representa 20% dos eleitores, então 20% de 5.000 = 1.000 pessoas da amostra devem ser de São Paulo. Isso é amostragem estratificada: os estratos (estados) entram na amostra em pedaços proporcionais ao que representam na população.`],
      ['h', 'Aleatória simples x estratificada'],
      ['ul', [
        `Aleatória simples: sorteio direto entre todos os elementos; todos têm a mesma chance.`,
        `Estratificada: divide-se a população em estratos e sorteia-se em cada um, na mesma proporção que ele ocupa no todo.`,
        `A estratificada é a mais refinada e evita distorções quando a população é heterogênea.`
      ]],
      ['h', 'Resumo de revisão'],
      ['ul', [
        `Aleatória simples: calcule o tamanho da amostra, numere, sorteie (urna).`,
        `Exemplo: 10% de 200 alunos = 20 sorteados.`,
        `Estratificada: a amostra mantém os mesmos percentuais dos estratos da população.`,
        `Exemplos: 70% alunos, 10% professores, 20% colaboradores; 20% de 5.000 = 1.000 de São Paulo.`
      ]]
    ],
    5: [
      ['h', 'Procedimento de classificação'],
      ['p', `Aplique sempre a mesma sequência: primeiro, a variável é palavra/categoria ou número de quantidade? Se for categoria, qualitativa. Se for número, é quantitativa; então, só admite valores inteiros (discreta) ou admite valores quebrados (contínua)?`],
      ['h', 'Exercícios resolvidos (população e variável)'],
      ['ol', [
        `População: alunos de uma escola. Variável: cor dos olhos. Castanho, preto, azul, verde: é qualidade, não quantidade. Qualitativa.`,
        `População: pregos produzidos por uma máquina. Variável: comprimento do prego. É uma medida que pode ser quebrada. Quantitativa contínua.`,
        `População: casais residentes em um bairro. Variável: número de filhos. É quantidade, mas só inteira (1, 2, 3). Quantitativa discreta.`,
        `População: livros de uma biblioteca. Variável: número de livros. Quantidade inteira; não existe livro quebrado. Quantitativa discreta.`,
        `População: jogadas de um dado. Variável: pontos obtidos em cada jogada. Só podem ser 1 a 6, inteiros; não sai 3,5. Quantitativa discreta.`,
        `População: funcionários de uma empresa. Variável: usuário de internet em casa (sim ou não). Não é quantidade. Qualitativa.`,
        `População: peças produzidas por uma máquina. Variável: diâmetro externo de um cilindro. Medida que pode ser quebrada. Quantitativa contínua.`,
        `População: funcionários de uma empresa. Variável: salário. Pode ter valores quebrados. Quantitativa contínua.`,
        `População: funcionários de uma empresa. Variável: sexo dos filhos (masculino ou feminino). Qualitativa.`,
        `População: clientes de uma loja. Variável: quantos cartões de crédito possui. Quantidade inteira. Quantitativa discreta.`
      ]],
      ['h', 'Pegadinhas'],
      ['ul', [
        `Variável "usa internet?" (sim/não) parece simples, mas é qualitativa: a resposta não é quantidade.`,
        `Número de qualquer coisa que se conta (filhos, livros, cartões, pontos de dado) é discreta.`,
        `Medidas (comprimento, diâmetro, peso, altura, distância, salário) são contínuas.`
      ]],
      ['h', 'Resumo de revisão'],
      ['ul', [
        `Palavra/categoria = qualitativa (cor dos olhos, sexo dos filhos, usa internet sim/não).`,
        `Contagem inteira = quantitativa discreta (filhos, livros, cartões, pontos do dado).`,
        `Medida que admite valor quebrado = quantitativa contínua (comprimento, diâmetro, salário).`
      ]]
    ],
    6: [
      ['h', 'Problema'],
      ['p', `Uma população de 200 alunos é formada por 118 meninos e 82 meninas. Deseja-se extrair uma amostra representativa de 10% da população, estratificada por sexo. O percentual de 10% foi estabelecido no enunciado (poderia ser 15% ou qualquer outro; o método é o mesmo).`],
      ['h', 'Resolução passo a passo'],
      ['ol', [
        `Identifique os estratos: o critério que permite separar a população em dois níveis é o sexo (118 meninos e 82 meninas; 118 + 82 = 200).`,
        `Aplique 10% a cada estrato: meninos 118 × 10% = 11,8; meninas 82 × 10% = 8,2. A soma é 20 (11,8 + 8,2 = 20), o que bate com 10% de 200.`,
        `Arredonde para inteiros, pois não existe 11,8 aluno: 11,8 está mais próximo de 12; 8,2 (abaixo de 8,5) fica em 8.`,
        `Amostra final: 12 meninos e 8 meninas, 20 alunos no total.`
      ]],
      ['h', 'Por que é estratificada'],
      ['p', `Há mais meninos do que meninas na população, e a amostra também tem mais meninos (12 contra 8). A amostra reproduz a mesma proporção da população: é isso que caracteriza a amostragem estratificada. Uma amostra aleatória simples poderia, por acaso, trazer mais meninas do que a proporção real.`],
      ['h', 'Dicas de execução'],
      ['ul', [
        `Use a calculadora ou calcule 10% movendo a vírgula uma casa: 118 vira 11,8 e 82 vira 8,2.`,
        `Sempre confira: a soma dos estratos arredondados deve ser igual ao tamanho total da amostra (20).`,
        `Cuidado com arredondamentos: em casos limite a soma pode divergir em uma unidade, e então se ajusta conforme o enunciado.`
      ]],
      ['h', 'Resumo de revisão'],
      ['ul', [
        `Passo 1: separe os estratos (meninos 118, meninas 82).`,
        `Passo 2: aplique o percentual a cada estrato (11,8 e 8,2).`,
        `Passo 3: arredonde para inteiros (12 e 8).`,
        `Passo 4: confira o total (20 = 10% de 200).`
      ]]
    ],
    7: [
      ['h', 'Tabela e gráfico'],
      ['p', `A apresentação dos dados de uma pesquisa estatística pode ser feita em tabelas ou em gráficos. Os dois mostram a mesma informação: de uma tabela você faz um gráfico e do gráfico você recupera os dados da tabela. O gráfico tem a vantagem de permitir enxergar visualmente tendências (queda, aumento, o maior valor) sem ler número por número.`],
      ['h', 'Gráfico de colunas'],
      ['p', `No gráfico de colunas, as barras ficam na vertical. Convenção de leitura:`],
      ['ul', [
        `Eixo horizontal: a categoria (anos, meses, número de filhos etc.).`,
        `Eixo vertical: a quantidade, com uma escala (por exemplo 10, 20, 30, 40).`,
        `Altura da coluna: o valor da categoria; compare com a escala para ler o número.`
      ]],
      ['h', 'Exemplo: focos de incêndio (INPE), 1991 a 1995'],
      ['p', `A tabela traz a quantidade de queimadas por ano, em milhares. Em milhares significa que 17,8 equivale a 17,8 mil, ou seja, 17.800 queimadas; com a vírgula, você completa os zeros que faltam. Ao transformar em gráfico, os anos 91, 92, 93, 94 e 95 vão no eixo horizontal e a quantidade no vertical, com escala indo até cerca de 40 (o maior valor, em 1995, é de 39,9 mil). Visualmente você percebe que houve queda de um ano para outro, depois aumento, nova queda e novo aumento, e que o maior valor está em 1995.`],
      ['h', 'O que fazer na prova'],
      ['ol', [
        `Leia o título e a unidade (milhares? percentual? mm?).`,
        `Identifique o que está em cada eixo.`,
        `Leia o que a questão pede (maior, menor, aumento, quantidade em determinado ano).`,
        `Só então localize a barra e leia a altura, convertendo a unidade se preciso.`
      ]],
      ['h', 'Resumo de revisão'],
      ['ul', [
        `Tabela e gráfico trazem a mesma informação; o gráfico é visual.`,
        `Gráfico de colunas: barras verticais; categorias no eixo horizontal, quantidade no vertical.`,
        `Unidade "em milhares": 17,8 equivale a 17.800.`,
        `Leia título, eixos e unidade antes de olhar as barras.`
      ]]
    ],
    8: [
      ['h', 'Ler e interpretar são coisas diferentes'],
      ['p', `Nas questões do ENEM com gráficos, ler a altura da barra é só o primeiro passo. É preciso interpretar: entender o que cada barra representa e o que a pergunta pede. Muita gente erra porque pega o dado do gráfico e sai respondendo sem verificar se aquele é o dado que a questão quer.`],
      ['h', 'Exemplo 1: probabilidade do filho único'],
      ['p', `Enunciado: 23 ex-alunas de uma turma, formadas há dez anos, se reencontram. Várias se casaram e tiveram filhos. Um prêmio será sorteado entre todos os filhos dessas ex-alunas. Qual é a probabilidade de a criança premiada ser filho único? O gráfico de colunas mostra, no eixo horizontal, o número de filhos (nenhum, 1, 2 ou 3) e, no vertical, o número de mulheres: 8 mulheres sem filhos, 7 com um filho, 6 com dois filhos e 2 com três filhos (8 + 7 + 6 + 2 = 23).`],
      ['ol', [
        `O sorteio é entre os filhos, não entre as mulheres. Então calcule o total de filhos, multiplicando o número de filhos pelo número de mulheres.`,
        `Sem filhos: 0 × 8 = 0. Um filho: 1 × 7 = 7. Dois filhos: 2 × 6 = 12. Três filhos: 3 × 2 = 6.`,
        `Total de filhos: 0 + 7 + 12 + 6 = 25 crianças.`,
        `Filhos únicos: as 7 mulheres com um filho geram 7 filhos únicos. (Quem tem dois ou três filhos não gera filho único.)`,
        `Probabilidade = parte ÷ total = 7/25. Não dá para simplificar: 7 é primo e 25 não é múltiplo de 7. Em percentual, 7 ÷ 25 = 0,28 = 28%.`
      ]],
      ['p', `A pegadinha: muita gente responde 7/23 porque o número de mulheres é 23. Mas 23 é o total de mães, e a pergunta é sobre filhos. Em probabilidade, o denominador sempre é o total do universo sorteado; aqui, 25 filhos.`],
      ['h', 'Exemplo 2: regime de chuvas e anfíbios'],
      ['p', `O gráfico mostra a precipitação (chuva, em milímetros) mês a mês, de janeiro a dezembro: começa alta, cai no meio do ano e volta a subir no fim. O texto informa que a maioria dos anfíbios depende de água para se reproduzir e o faz quando há água em abundância. Logo, os meses de maior reprodução são os de maior precipitação (barras mais altas). Opções: setembro a dezembro; novembro a fevereiro; janeiro a abril; março a junho; maio a agosto.`],
      ['p', `Os meses de meio de ano têm barras baixas; março a junho e maio a agosto ficam descartados. Setembro a dezembro pega a parte alta do fim do ano, mas janeiro a abril pegaria só o começo. A pegadinha: o gráfico mostra um ano, mas o ano seguinte recomeça logo depois de dezembro. As quatro barras mais altas são novembro, dezembro (final) e janeiro, fevereiro (começo). Como o ano termina e outro começa, o período correto é novembro a fevereiro. Não basta olhar o gráfico: é preciso interpretá-lo.`],
      ['h', 'Exemplo 3: enquete com 279 internautas'],
      ['p', `Em 2010 uma enquete perguntou se as atividades humanas provocam aquecimento global, com três opções: sim, não ou não sei avaliar. Responderam 279 internautas. O gráfico mostra que 25% responderam "não". Quantos internautas foram? As alternativas eram faixas, como "mais de 50 e menos de 75".`],
      ['ol', [
        `No ENEM não se usa calculadora; use arredondamento inteligente: 279 é quase 280.`,
        `25% equivale a dividir por 4 (como um real tem quatro moedas de 25 centavos).`,
        `280 ÷ 4 = 70. Como 279 é um pouco menor que 280, o resultado é um pouco menor que 70 (exatamente, 279 ÷ 4 = 69,75).`,
        `O valor fica entre 50 e 75, o que basta para escolher a alternativa. Não pedir valor exato é sinal de que a aproximação resolve.`
      ]],
      ['h', 'Resumo de revisão'],
      ['ul', [
        `Interpretar o gráfico é identificar o que a pergunta realmente quer (filhos, não mães; meses, não barras isoladas).`,
        `Probabilidade = parte ÷ total, com o total da mesma natureza do que se sorteia (7/25, não 7/23).`,
        `Em gráfico mensal, a sequência é circular: nov, dez, jan, fev formam quatro meses seguidos de barras altas.`,
        `25% = dividir por 4. Quando as alternativas são faixas, arredonde e economize tempo.`
      ]]
    ],
    9: [
      ['h', 'Colunas x barras'],
      ['p', `O gráfico de barras é muito parecido com o de colunas. A diferença é só de orientação: se os retângulos estão na vertical, é gráfico de colunas; se estão na horizontal, é gráfico de barras. Em ambos, o comprimento (ou altura) do retângulo representa o valor da categoria. Na prática, as questões costumam dar uma quantidade absoluta de uma categoria e percentuais das demais, e você completa o resto por proporção.`],
      ['h', 'Exercício resolvido: alunos por período'],
      ['p', `Uma escola tem aulas em três períodos: manhã, tarde e noite. De acordo com o gráfico, a noite tem 300 alunos, a tarde representa 40% e a manhã, 35%. Quantos alunos frequentam a tarde?`],
      ['ol', [
        `Some os percentuais conhecidos: 40% + 35% = 75%.`,
        `O que falta para 100% é a noite: 100% - 75% = 25%.`,
        `Se 25% correspondem a 300 alunos, descubra o valor de 1%: 300 ÷ 25 = 12 alunos para cada 1%.`,
        `Tarde = 40% = 40 × 12 = 480 alunos.`
      ]],
      ['p', `Pela regra de três, o mesmo resultado: 25% está para 300, assim como 40% está para x. Então x = 300 × 40 ÷ 25 = 480. Resposta: 480 alunos. Como conferência, a manhã (35%) teria 35 × 12 = 420 e o total da escola seria 420 + 480 + 300 = 1.200 alunos (12 × 100).`],
      ['h', 'Método geral'],
      ['ul', [
        `Descubra o percentual que falta (100% menos o que o gráfico informa).`,
        `Associe a quantidade conhecida ao seu percentual.`,
        `Calcule o valor de 1% (quantidade ÷ percentual).`,
        `Multiplique por 1% da categoria pedida, ou use a regra de três.`
      ]],
      ['h', 'Resumo de revisão'],
      ['ul', [
        `Barras na vertical: gráfico de colunas. Barras na horizontal: gráfico de barras.`,
        `Gráfico com percentuais: some, ache o que falta para 100% e use a quantidade conhecida para achar o valor de 1%.`,
        `Exemplo: noite = 25% = 300 alunos, 1% = 12, tarde 40% = 480 alunos.`,
        `Confira o total: 100% = 100 × 12 = 1.200 alunos.`
      ]]
    ]
  };

  window.PCPE_QUESTOES[topic] = [
    {
      text: `Em um questionário, a variável "sexo" é registrada com o código 1 para masculino e 2 para feminino. Quanto à classificação dessa variável, é correto afirmar que ela é:`,
      options: [
        `quantitativa discreta, pois os valores são números inteiros.`,
        `qualitativa, pois a informação é uma categoria; o número é só um código.`,
        `quantitativa contínua, pois o código poderia assumir valores intermediários.`,
        `qualitativa apenas se for registrada com palavras, nunca com números.`
      ],
      correct: 1,
      exp: `A classificação depende do tipo de informação: sexo é categoria (masculino ou feminino), logo qualitativa. O número é apenas código para facilitar o processamento e não expressa quantidade. As demais tratam o código como se fosse quantidade, ou condicionam a classificação à forma de registro.`
    },
    {
      text: `Considere as variáveis: I) número de cartões de crédito de um cliente; II) altura dos alunos de uma turma; III) pontos obtidos em uma jogada de dado; IV) cor dos olhos. A sequência correta de classificação é:`,
      options: [
        `discreta, contínua, discreta, qualitativa.`,
        `contínua, contínua, discreta, qualitativa.`,
        `discreta, discreta, contínua, qualitativa.`,
        `discreta, contínua, qualitativa, qualitativa.`
      ],
      correct: 0,
      exp: `Cartões e pontos do dado são contagens inteiras (não existe 3 cartões e meio, nem se tira 3,5 no dado): quantitativas discretas. Altura admite valores quebrados: quantitativa contínua. Cor dos olhos é categoria: qualitativa. As demais trocam discreta por contínua ou tratam os pontos do dado como qualidade.`
    },
    {
      text: `Uma pesquisa será feita apenas com os alunos do curso de Administração de uma faculdade, e serão escolhidos 100 deles para responder. Nesse caso, a população e a amostra são, respectivamente:`,
      options: [
        `todos os alunos da faculdade; os alunos de Administração.`,
        `os 100 alunos escolhidos; todos os alunos de Administração.`,
        `todos os alunos de Administração; os 100 alunos escolhidos.`,
        `todos os alunos da faculdade; os 100 alunos escolhidos.`
      ],
      correct: 2,
      exp: `A população é definida pelo recorte da pesquisa: todos os alunos de Administração. A amostra é o subconjunto efetivamente pesquisado: os 100 alunos. As demais invertem os conceitos ou usam como população um universo maior que o do recorte.`
    },
    {
      text: `Deseja-se uma amostra aleatória simples de 10% de uma população de 300 alunos do turno da manhã. O procedimento correto é:`,
      options: [
        `numerar os alunos de 1 a 300 e sortear 10 números.`,
        `escolher 10% de cada sala, mantendo as proporções de cada uma.`,
        `numerar os alunos de 1 a 300 e sortear 30 números.`,
        `sortear 300 números, por serem 10% de 3.000.`
      ],
      correct: 2,
      exp: `10% de 300 = 30. Na aleatória simples numeram-se os elementos e sorteiam-se 30 números (por exemplo, numa urna). Sortear 10 seria 10 elementos, não 10%; a segunda opção descreve estratificação; sortear 300 é a própria população.`
    },
    {
      text: `Uma faculdade tem 70% de alunos, 10% de professores e 20% de colaboradores. Será feita uma pesquisa estratificada com amostra de 500 pessoas. A composição correta da amostra é:`,
      options: [
        `350 alunos, 100 professores e 50 colaboradores.`,
        `350 alunos, 50 professores e 100 colaboradores.`,
        `250 alunos, 125 professores e 125 colaboradores.`,
        `400 alunos, 50 professores e 50 colaboradores.`
      ],
      correct: 1,
      exp: `A amostra deve repetir os percentuais da população: 70% de 500 = 350 alunos; 10% de 500 = 50 professores; 20% de 500 = 100 colaboradores (350 + 50 + 100 = 500). A primeira troca as proporções de professores e colaboradores; as demais não respeitam as proporções.`
    },
    {
      text: `Uma população de 200 alunos tem 126 meninos e 74 meninas. Para uma amostra estratificada de 10%, calcula-se 10% de cada estrato e arredonda-se para inteiros. A amostra terá:`,
      options: [
        `12 meninos e 8 meninas.`,
        `13 meninos e 7 meninas.`,
        `13 meninos e 8 meninas.`,
        `12 meninos e 7 meninas.`
      ],
      correct: 1,
      exp: `Meninos: 126 × 10% = 12,6, que arredonda para 13. Meninas: 74 × 10% = 7,4, que arredonda para 7. Total: 13 + 7 = 20 = 10% de 200. As demais arredondam errado ou fecham total diferente de 20 (21 ou 19).`
    },
    {
      text: `Um gráfico de colunas mostra o número de mulheres de um grupo conforme a quantidade de filhos: 6 sem filhos, 5 com um filho, 4 com dois filhos e 3 com três filhos. Um prêmio será sorteado entre todos os filhos dessas mulheres. A probabilidade de a criança premiada ser filho único é:`,
      options: [
        `5/18`,
        `5/22`,
        `5/9`,
        `5/16`
      ],
      correct: 1,
      exp: `O sorteio é entre os filhos. Total de filhos: 0×6 + 1×5 + 2×4 + 3×3 = 0 + 5 + 8 + 9 = 22. Filhos únicos: 5. Probabilidade = 5/22. A alternativa 5/18 usa o número de mulheres (6 + 5 + 4 + 3 = 18) como total, o erro clássico; as demais não correspondem ao total de filhos.`
    },
    {
      text: `Em um gráfico de colunas com a precipitação mensal de janeiro a dezembro, as quatro barras mais altas correspondem a janeiro, fevereiro, novembro e dezembro. O período de quatro meses consecutivos de maior precipitação, a ser indicado, é:`,
      options: [
        `janeiro a abril.`,
        `setembro a dezembro.`,
        `novembro a fevereiro.`,
        `março a junho.`
      ],
      correct: 2,
      exp: `A sequência dos meses é circular: ao terminar dezembro começa o outro ano, então novembro, dezembro, janeiro e fevereiro são quatro meses consecutivos com as barras mais altas. As demais incluem meses de barras baixas (março a junho) ou cobrem só metade do bloco alto (janeiro a abril, setembro a dezembro).`
    },
    {
      text: `Em um gráfico de barras sobre os períodos de uma escola, a noite tem 200 alunos e corresponde a 25% do total; a manhã corresponde a 30%; a tarde, aos 45% restantes. Quantos alunos frequentam a tarde?`,
      options: [
        `360`,
        `450`,
        `240`,
        `90`
      ],
      correct: 0,
      exp: `Se 25% são 200 alunos, 1% = 200 ÷ 25 = 8. Tarde = 45 × 8 = 360 (regra de três: 200 × 45 ÷ 25 = 360). Total da escola: 800 alunos. 450 aplica 45 sobre um valor errado; 240 corresponde à manhã (30 × 8); 90 é 45% de 200, tomando 200 como total.`
    },
    {
      text: `Em uma tabela, a quantidade de queimadas de um ano aparece como 23,5 "em milhares". Esse valor corresponde a:`,
      options: [
        `23,5 queimadas.`,
        `235 queimadas.`,
        `2.350 queimadas.`,
        `23.500 queimadas.`
      ],
      correct: 3,
      exp: `"Em milhares" indica que o número está multiplicado por mil: 23,5 mil = 23.500 queimadas. As demais ignoram a unidade ou usam o fator errado (1, 10 ou 100).`
    }
  ];
})();
