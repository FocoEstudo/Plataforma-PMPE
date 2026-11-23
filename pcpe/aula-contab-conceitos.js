(function () {
  'use strict';
  window.PCPE_TOPIC_GUIDES = window.PCPE_TOPIC_GUIDES || {};
  window.PCPE_DEEPENING = window.PCPE_DEEPENING || {};
  window.PCPE_QUESTOES = window.PCPE_QUESTOES || {};
  const topic = 'Conceitos, objetivos e finalidades';
  const base = window.PCPE_TOPIC_GUIDES[topic] || {};
  window.PCPE_TOPIC_GUIDES[topic] = Object.assign({}, base, {
    lessons: [
      [
        `1 · A contabilidade é uma ciência: o que ela estuda e quais são suas funções`,
        `A contabilidade é uma ciência, e não apenas uma técnica. Ela estuda e pratica as funções de orientação, controle e registro dos atos e fatos de uma administração econômica. Sua função precípua é, portanto, ajudar a orientar, controlar e registrar o que acontece na entidade.`,
        `Controlar o estoque de mercadorias, saber quanto há em caixa, informar aos acionistas quanto será pago de dividendos e quanto a empresa deve são tarefas em que a contabilidade orienta, controla e registra. Já se cobrou em prova (Receita Federal, 1992) a pergunta se a contabilidade é ciência ou técnica: a resposta é ciência.`,
        `Não confunda ato com fato contábil. Ato contábil é o acontecimento que não altera o patrimônio; fato contábil é o que altera o patrimônio. Atos não geram lançamento, mas, se forem relevantes, são divulgados em notas explicativas.`
      ],
      [
        `2 · Finalidade da contabilidade e usuários primários`,
        `A finalidade da contabilidade é fornecer informações úteis aos seus usuários. Segundo o CPC 00 (Estrutura Conceitual), os usuários primários são os investidores (acionistas, existentes e potenciais) e os credores (existentes e potenciais). É para atender a esses usuários que as demonstrações contábeis existem.`,
        `Imagine que você queira investir em ações de uma grande varejista listada na bolsa. Você não vai perguntar a cada loja quanto vendeu: precisa de informação resumida, como receita, lucratividade, caixa e endividamento. Ela está nas demonstrações contábeis e nos indicadores extraídos delas. Credor também não é só banco: uma pessoa jurídica que compra debêntures da empresa empresta dinheiro e, portanto, é credora.`,
        `A palavra-chave da finalidade é "informações úteis aos usuários". Se uma alternativa trouxer como finalidade principal algo como "apurar tributos" ou "cumprir a lei" no lugar do fornecimento de informação útil, desconfie. Lembre-se de que investidores e credores, existentes ou potenciais, formam o grupo dos usuários primários.`
      ],
      [
        `3 · Escrituração: como a contabilidade funciona na prática`,
        `A contabilidade funciona por meio da escrituração. Escrituração é a técnica contábil que lança os fatos contábeis nos livros contábeis. Os principais livros são o Diário e o Razão. Ela transforma milhares de acontecimentos individuais em informação condensada, que pode ser consultada e usada para decidir.`,
        `Pense em uma rede com centenas de lojas: cada venda gera cupom ou nota fiscal, e ninguém consegue analisar loja por loja e máquina por máquina. A empresa pega todos esses registros e os condensa em livros. Esse ato de pegar os fatos, todos esses acontecimentos, e lançá-los nos livros é a escrituração.`,
        `Escrituração não é o balanço nem a demonstração: é o ato de lançar nos livros (Diário e Razão). Hoje tudo é digitalizado, mas a lógica teórica continua a mesma, e a prova cobra a teoria.`
      ],
      [
        `4 · Objeto de estudo: o patrimônio e as demonstrações principais`,
        `O objeto de estudo da contabilidade é o patrimônio. Patrimônio é o conjunto de bens, direitos e obrigações da entidade. Dele se ocupam as duas principais demonstrações contábeis: o balanço patrimonial, dividido em ativo, passivo e patrimônio líquido, e a demonstração do resultado do exercício, que traz as receitas e as despesas.`,
        `Um caminhão, o dinheiro em caixa, o terreno e o valor a receber de um cliente (bens e direitos) formam um lado do patrimônio. O valor devido a um fornecedor é uma obrigação. Quando você junta bens, direitos e obrigações de uma empresa, você está descrevendo o patrimônio dela.`,
        `Cuidado com a troca de termos: o objeto de estudo é o patrimônio, e não o lucro, o caixa ou o balanço. Memorize "bens, direitos e obrigações". A definição formal de ativo e passivo do CPC 00 é mais precisa e é vista com o tema de patrimônio, ativo, passivo e patrimônio líquido.`
      ],
      [
        `5 · Razonetes e o método das partidas dobradas`,
        `Na teoria, os lançamentos são feitos em razonetes: o lado esquerdo é o débito e o lado direito, o crédito. A contabilidade funciona pelo método das partidas dobradas, também chamado de método veneziano: o total dos débitos é sempre igual ao total dos créditos. Em uma contabilidade regular, essa regra não comporta exceções.`,
        `Quem levou a contabilidade ao mundo foi Frei Luca Pacioli, que condensou o método em uma obra de aritmética publicada em 1494. Ele é considerado o pai da contabilidade, mas não é o inventor das partidas dobradas: ele condensou e divulgou o que já se praticava.`,
        `Pegadinha clássica: atribuir a invenção das partidas dobradas a Pacioli. Ele a divulgou, mas não a criou. Outra: achar que há exceção à igualdade entre débitos e créditos em contabilidade regular. Não há.`
      ]
    ],
    practice: [
      `Qual é a função precípua da contabilidade e qual é a diferença entre ato contábil e fato contábil?`,
      `Qual é a finalidade da contabilidade e quem são os usuários primários segundo o CPC 00?`,
      `O que é escrituração, em quais livros ela é feita e por que a empresa precisa condensar seus registros?`,
      `Qual é o objeto de estudo da contabilidade e como ele se relaciona com o balanço patrimonial e com a demonstração do resultado?`,
      `Como funciona um razonete e o que diz o método das partidas dobradas? Pacioli foi o inventor desse método?`
    ],
    answers: [
      `A função precípua é ajudar a orientar, controlar e registrar os atos e fatos de uma administração econômica. Ato contábil é o que não altera o patrimônio (e, se relevante, é divulgado em notas explicativas); fato contábil é o que altera o patrimônio.`,
      `A finalidade é fornecer informações úteis aos usuários. Os usuários primários, segundo o CPC 00, são os investidores (acionistas) e os credores, existentes e potenciais.`,
      `Escrituração é a técnica contábil que lança os fatos contábeis nos livros contábeis; os principais são o Diário e o Razão. Ela condensa em um registro organizado as informações que, de outro modo, estariam dispersas em milhares de documentos.`,
      `O objeto de estudo é o patrimônio, conjunto de bens, direitos e obrigações da entidade. O balanço patrimonial (ativo, passivo e patrimônio líquido) mostra o patrimônio, e a demonstração do resultado do exercício traz as receitas e as despesas.`,
      `No razonete, o lado esquerdo é o débito e o direito, o crédito. Pelo método das partidas dobradas (método veneziano), o total dos débitos é sempre igual ao total dos créditos. Pacioli o condensou em 1494, mas não o inventou: é considerado o pai da contabilidade.`
    ]
  });

  window.PCPE_DEEPENING[topic] = {
    1: [
      ['h', 'A contabilidade como ciência'],
      ['p', `A primeira coisa que você precisa fixar é que a contabilidade é uma ciência. Esse ponto parece óbvio, mas já foi cobrado em prova: em 1992, a Receita Federal perguntou se a contabilidade era uma ciência ou uma técnica. A resposta é: ciência. Como ciência, ela estuda e pratica as funções de orientação, controle e registro dos atos e fatos de uma administração econômica.`],
      ['h', 'As três funções: orientar, controlar e registrar'],
      ['ul', [
        `Orientar: ajudar os gestores e os usuários a decidir, com base nas informações produzidas.`,
        `Controlar: acompanhar, por exemplo, as mercadorias em estoque, o caixa disponível, as dívidas e o que será pago de dividendos aos acionistas.`,
        `Registrar: lançar os atos e fatos, deixando-os documentados nos livros contábeis.`
      ]],
      ['p', `A contabilidade ajuda você a controlar mercadorias, saber quanto tem em caixa, informar os acionistas sobre o dividendo a pagar e conhecer o total de dívidas. Por isso se diz que a função precípua (principal) é orientar, controlar e registrar.`],
      ['h', 'Atos contábeis e fatos contábeis'],
      ['p', `A contabilidade lida com atos e fatos. A diferença é simples e muito cobrada:`],
      ['ul', [
        `Ato contábil: acontecimento que não gera alteração no patrimônio. Exemplos: a contratação de empregados (uma simples seleção) e a fiança ou o aval dados em favor de uma controlada.`,
        `Fato contábil: acontecimento que gera alteração no patrimônio.`
      ]],
      ['p', `O ato, por si só, não gera contabilização. Mas atenção: quando o ato pode se tornar relevante (uma fiança ou um aval, por exemplo, podem vir a se transformar em obrigação), ele deve ser divulgado nas notas explicativas, que integram o conjunto das demonstrações contábeis. As notas explicativas são, aliás, uma das partes mais importantes de qualquer demonstração, porque elucidam os acontecimentos que aparecem nas demonstrações. A classificação dos fatos (permutativos, modificativos e mistos) é estudada com a escrituração.`],
      ['h', 'Como a banca cobra'],
      ['p', `Em geral, a prova traz uma afirmação como "A contabilidade é uma técnica, e não uma ciência" (errada) ou descreve um acontecimento e pergunta se é ato ou fato. Pergunte-se sempre: este evento altera o patrimônio? Se não altera, é ato; se altera, é fato.`],
      ['h', 'Resumo de revisão'],
      ['ul', [
        `Contabilidade é ciência.`,
        `Estuda e pratica as funções de orientação, controle e registro dos atos e fatos de uma administração econômica.`,
        `Ato contábil: não altera o patrimônio; se relevante, vai para notas explicativas.`,
        `Fato contábil: altera o patrimônio.`
      ]]
    ],
    2: [
      ['h', 'Para que serve a contabilidade'],
      ['p', `A finalidade da contabilidade é fornecer informações úteis aos seus usuários. Tudo o que ela produz (balanço, demonstração do resultado, notas explicativas) existe para ser útil a quem toma decisões com base nessas informações.`],
      ['h', 'Quem são os usuários primários'],
      ['p', `O CPC 00 (Estrutura Conceitual) chama de usuários primários aqueles que mais dependem das demonstrações. São os investidores (acionistas) e os credores, existentes e potenciais.`],
      ['ul', [
        `Investidor/acionista: possui ações (ou pode vir a possuir) de uma companhia. Você, pessoa física, só consegue decidir se compra ações de uma empresa listada na bolsa olhando as demonstrações contábeis e os indicadores econômicos.`,
        `Credor: quem empresta dinheiro à entidade. Não é necessariamente um banco: outras pessoas jurídicas também emprestam, por exemplo comprando debêntures, títulos de dívida que a empresa emite junto ao público.`,
        `Existentes e potenciais: tanto quem já investe ou já emprestou quanto quem ainda pode vir a fazê-lo.`
      ]],
      ['h', 'Exemplo: por que o investidor precisa de informação resumida'],
      ['p', `Imagine que você queira investir em ações de uma grande rede de lojas de departamento. O que você quer saber? Se ela é lucrativa, como gera receita, como está o caixa e como está o endividamento. Seria impossível perguntar a cada loja e a cada máquina quanto vendeu no ano. Você precisa da informação resumida, e é isso que a contabilidade entrega: as demonstrações contábeis, a partir das quais você calcula indicadores e decide se investe.`],
      ['h', 'Armadilhas'],
      ['ul', [
        `A finalidade não é "apurar impostos", "satisfazer o fisco" ou "enriquecer a empresa": é fornecer informações úteis aos usuários.`,
        `Investidores e credores são usuários primários; mas o conceito importa para as questões que tratam de "quais são os usuários principais".`
      ]],
      ['h', 'Resumo de revisão'],
      ['ul', [
        `Finalidade: fornecer informações úteis aos usuários.`,
        `CPC 00: usuários primários são investidores e credores, existentes e potenciais.`,
        `O investidor decide a compra de ações com base nas demonstrações contábeis.`,
        `Credor não é só banco: quem compra debêntures também é credor.`
      ]]
    ],
    3: [
      ['h', 'O que é escrituração'],
      ['p', `A contabilidade funciona por meio da escrituração. Escrituração é a técnica contábil que lança os fatos contábeis nos livros contábeis. É nela que cada acontecimento deixa de ser apenas um papel solto (nota fiscal, cupom, recibo) e passa a ser um registro organizado.`],
      ['h', 'Exemplo: a rede de lojas'],
      ['p', `Pense em uma rede com centenas de lojas em um mesmo estado. Cada loja emite cupons e notas fiscais de venda a todo momento. Se você, investidor, quisesse saber quanto a rede vendeu no ano, não adiantaria perguntar a cada máquina de cada loja. Por isso a empresa reúne todos os documentos (cupons, notas fiscais de venda, tudo o que tem) e os condensa em livros. Esse ato de pegar todos os fatos contábeis, todos esses acontecimentos, e lançá-los nos livros contábeis chama-se escrituração.`],
      ['h', 'Os principais livros'],
      ['ul', [
        `Livro Diário.`,
        `Livro Razão.`
      ]],
      ['p', `Quando você ouvir "escrituração", lembre-se de dois pontos: é uma técnica (o modo de registrar) e seu produto são os livros, sendo o Diário e o Razão os principais.`],
      ['h', 'Como cai em prova'],
      ['p', `A pergunta costuma ser uma definição: "Escrituração é a técnica contábil que lança os fatos contábeis nos livros contábeis." Alternativas que dizem que escrituração é "a elaboração das demonstrações" ou "a análise dos indicadores" estão erradas: demonstrar e analisar vêm depois do registro.`],
      ['h', 'Resumo de revisão'],
      ['ul', [
        `Escrituração = técnica contábil que lança os fatos contábeis nos livros contábeis.`,
        `Principais livros: Diário e Razão.`,
        `Ela condensa milhares de registros em informação organizada.`
      ]]
    ],
    4: [
      ['h', 'Objeto de estudo: o patrimônio'],
      ['p', `Todo ramo do conhecimento tem um objeto de estudo. O da contabilidade é o patrimônio, entendido como o conjunto de bens, direitos e obrigações da entidade. Memorize essa tríade: bens, direitos e obrigações.`],
      ['ul', [
        `Bens: o que a entidade possui, como terrenos, veículos, máquinas, mercadorias, dinheiro.`,
        `Direitos: o que a entidade tem a receber, como valores devidos por clientes.`,
        `Obrigações: o que a entidade deve a terceiros, como o valor a pagar a fornecedores.`
      ]],
      ['p', `Bens e direitos, grosso modo, formam o ativo; as obrigações formam o passivo; e a diferença entre eles é o patrimônio líquido. A definição formal desses grupos, segundo o CPC 00, é estudada no tema de patrimônio, ativo, passivo e patrimônio líquido, porque a ideia de "bens e direitos" é só uma referência didática.`],
      ['h', 'As duas principais demonstrações'],
      ['ul', [
        `Balanço patrimonial: dividido em ativo, passivo e patrimônio líquido.`,
        `Demonstração do resultado do exercício (DRE): contempla as receitas e as despesas.`
      ]],
      ['p', `O balanço patrimonial mostra o patrimônio; a DRE mostra as receitas e despesas, e o seu resultado (lucro ou prejuízo) é transferido para o patrimônio líquido.`],
      ['h', 'Como cai em prova'],
      ['p', `Se a questão pergunta "qual é o objeto de estudo da contabilidade?", a resposta é o patrimônio. Se pergunta o que é patrimônio, a resposta é o conjunto de bens, direitos e obrigações da entidade. Alternativas com "lucro", "caixa" ou "tributos" como objeto de estudo são distratores.`],
      ['h', 'Resumo de revisão'],
      ['ul', [
        `Objeto de estudo da contabilidade: o patrimônio.`,
        `Patrimônio = conjunto de bens, direitos e obrigações da entidade.`,
        `Principais demonstrações: balanço patrimonial (ativo, passivo, PL) e DRE (receitas e despesas).`
      ]]
    ],
    5: [
      ['h', 'O razonete'],
      ['p', `Na prática de hoje, tudo é digitalizado, mas na teoria os lançamentos contábeis são representados em razonetes. O razonete tem a forma de um "T": no lado esquerdo fica o débito e, no lado direito, o crédito. Ele tem esse nome justamente por ter formato de uma pequena conta em "T".`],
      ['h', 'O método das partidas dobradas'],
      ['p', `A contabilidade funciona por meio do método das partidas dobradas, também conhecido como método veneziano. A regra é: o total dos débitos é sempre igual ao total dos créditos. Em uma contabilidade regular, essa regra não comporta exceções. Mais adiante você verá que a equação fundamental da contabilidade, Ativo = Passivo + Patrimônio Líquido, decorre dele.`],
      ['h', 'Quem inventou?'],
      ['p', `Quando perguntam quem é o inventor do método das partidas dobradas, muita gente responde "Luca Pacioli". Pacioli não é o inventor. Ele condensou o método em uma obra de aritmética publicada em 1494 e é considerado o pai da contabilidade, porque levou a contabilidade ao mundo. Mas o método já existia (daí "método veneziano").`],
      ['h', 'Aplicação'],
      ['p', `Se um lançamento tem um valor debitado, deve haver o mesmo valor creditado. Se uma afirmação disser que "em uma contabilidade regular, o total dos débitos pode ser maior que o total dos créditos", ela está errada.`],
      ['h', 'Resumo de revisão'],
      ['ul', [
        `Razonete: lado esquerdo = débito; lado direito = crédito.`,
        `Partidas dobradas (método veneziano): total de débitos = total de créditos.`,
        `Sem exceção em uma contabilidade regular.`,
        `Pacioli (obra de 1494) condensou o método e é o pai da contabilidade, mas não o inventor.`
      ]]
    ]
  };

  window.PCPE_QUESTOES[topic] = [
    {
      text: `Sobre a natureza e as funções da contabilidade, é correto afirmar que ela:`,
      options: [
        `é uma técnica de registro, sem caráter de ciência.`,
        `é uma ciência que estuda e pratica as funções de orientação, controle e registro dos atos e fatos de uma administração econômica.`,
        `limita-se a registrar fatos já ocorridos, sem função de controle.`,
        `restringe-se ao cumprimento de obrigações fiscais da entidade.`
      ],
      correct: 1,
      exp: `A contabilidade é uma ciência e estuda e pratica as funções de orientação, controle e registro. As demais afirmações a reduzem a técnica, retiram sua função de controle ou a limitam a obrigações fiscais.`
    },
    {
      text: `Segundo o CPC 00, quais são os usuários primários das demonstrações contábeis?`,
      options: [
        `Apenas os acionistas controladores.`,
        `Somente o fisco e os órgãos reguladores.`,
        `Os empregados e os fornecedores da entidade.`,
        `Os investidores e os credores, existentes e potenciais.`
      ],
      correct: 3,
      exp: `Os usuários primários são investidores (acionistas) e credores, existentes e potenciais. Os demais grupos não são os usuários primários definidos.`
    },
    {
      text: `Uma empresa contrata um novo empregado após processo seletivo e, no mesmo período, presta fiança em favor de uma controlada. Esses acontecimentos, por si sós, não alteram o patrimônio. Em relação a eles, é correto afirmar que:`,
      options: [
        `são fatos contábeis modificativos e devem ser lançados em receita.`,
        `são atos contábeis, que não geram lançamento, mas, se relevantes, são divulgados em notas explicativas.`,
        `são fatos permutativos, pois trocam um elemento do ativo por outro.`,
        `são fatos mistos, porque envolvem um fato permutativo e um modificativo.`
      ],
      correct: 1,
      exp: `Contratação de empregado e fiança não alteram o patrimônio: são atos contábeis, sem lançamento, mas divulgados em notas explicativas quando relevantes. Fatos (permutativos, modificativos ou mistos) alteram ou trocam elementos patrimoniais.`
    },
    {
      text: `A técnica contábil que lança os fatos contábeis nos livros contábeis, sendo o Diário e o Razão os principais livros, é denominada:`,
      options: [
        `balanço patrimonial.`,
        `plano de contas.`,
        `escrituração.`,
        `demonstração do resultado.`
      ],
      correct: 2,
      exp: `Essa é exatamente a definição de escrituração. Balanço e demonstração do resultado são relatórios produzidos depois; plano de contas é o conjunto das contas da entidade.`
    },
    {
      text: `Uma rede de lojas emite milhares de cupons e notas fiscais por dia. Para que um investidor consiga avaliar suas vendas no ano, a empresa reúne todos esses documentos e os lança nos livros. Esse procedimento corresponde:`,
      options: [
        `à análise de indicadores econômicos.`,
        `à escrituração.`,
        `à auditoria independente.`,
        `à elaboração de notas explicativas.`
      ],
      correct: 1,
      exp: `Pegar os fatos e lançá-los nos livros contábeis é escrituração. Análise de indicadores, auditoria e notas explicativas são etapas ou atividades distintas.`
    },
    {
      text: `O objeto de estudo da contabilidade é:`,
      options: [
        `o lucro apurado no exercício.`,
        `o dinheiro disponível em caixa.`,
        `o patrimônio, conjunto de bens, direitos e obrigações da entidade.`,
        `o conjunto das obrigações tributárias da empresa.`
      ],
      correct: 2,
      exp: `O objeto de estudo é o patrimônio, definido como o conjunto de bens, direitos e obrigações. Lucro e caixa são resultados ou componentes do patrimônio, e não o objeto de estudo.`
    },
    {
      text: `Em relação às principais demonstrações contábeis, assinale a alternativa correta.`,
      options: [
        `O balanço patrimonial é dividido em receitas e despesas.`,
        `A demonstração do resultado do exercício é dividida em ativo, passivo e patrimônio líquido.`,
        `O balanço patrimonial é dividido em ativo, passivo e patrimônio líquido, e a DRE contempla as receitas e as despesas.`,
        `Receitas e despesas compõem o passivo do balanço patrimonial.`
      ],
      correct: 2,
      exp: `Balanço = ativo, passivo e PL; DRE = receitas e despesas. As demais alternativas trocam os grupos de uma demonstração pelos da outra.`
    },
    {
      text: `Sobre o método das partidas dobradas, assinale a alternativa correta.`,
      options: [
        `Foi inventado por Luca Pacioli, que o publicou em 1494.`,
        `Em contabilidade regular, o total dos débitos é sempre igual ao total dos créditos.`,
        `Admite exceções, quando há lançamentos de ajuste.`,
        `Prevê que o lado direito do razonete é o débito e o esquerdo, o crédito.`
      ],
      correct: 1,
      exp: `A essência do método é a igualdade entre o total de débitos e o total de créditos, sem exceções em contabilidade regular. Pacioli condensou o método, mas não o inventou; e no razonete o débito fica à esquerda e o crédito à direita.`
    },
    {
      text: `Um investidor pessoa física afirma que só consegue decidir se compra ações de uma companhia aberta analisando as demonstrações contábeis e indicadores econômicos. Isso ilustra principalmente:`,
      options: [
        `a finalidade da contabilidade de fornecer informações úteis aos seus usuários.`,
        `a função da contabilidade de arrecadar tributos.`,
        `a natureza da contabilidade como técnica de escrituração.`,
        `o conceito de ato contábil.`
      ],
      correct: 0,
      exp: `O investidor usa a informação contábil para decidir: é a finalidade de fornecer informações úteis aos usuários primários. As demais alternativas tratam de tributação, escrituração ou atos, sem relação com o uso da informação para decidir.`
    },
    {
      text: `Assinale a alternativa que contém afirmação correta sobre Luca Pacioli.`,
      options: [
        `É considerado o pai da contabilidade, pois condensou o método das partidas dobradas em obra publicada em 1494, mas não é seu inventor.`,
        `Foi o inventor do método das partidas dobradas, conhecido por isso como método veneziano.`,
        `Criou a equação fundamental da contabilidade em obra publicada no século XX.`,
        `Foi o autor do CPC 00 e da definição de usuários primários.`
      ],
      correct: 0,
      exp: `Pacioli condensou o método em uma obra de 1494 e é considerado o pai da contabilidade, mas não o inventor. As demais alternativas lhe atribuem invenção do método, equação do século XX ou autoria do CPC 00, sem fundamento.`
    }
  ];
})();
