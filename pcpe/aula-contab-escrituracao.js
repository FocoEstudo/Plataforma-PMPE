(function () {
  'use strict';
  window.PCPE_TOPIC_GUIDES = window.PCPE_TOPIC_GUIDES || {};
  window.PCPE_DEEPENING = window.PCPE_DEEPENING || {};
  window.PCPE_QUESTOES = window.PCPE_QUESTOES || {};
  const topic = 'Escrituração, contas e balanço patrimonial';
  const base = window.PCPE_TOPIC_GUIDES[topic] || {};
  window.PCPE_TOPIC_GUIDES[topic] = Object.assign({}, base, {
    lessons: [
      [
        `1 · Elementos do lançamento (ITG 2000) e plano de contas`,
        `A ITG 2000, norma do Conselho Federal de Contabilidade sobre escrituração contábil, diz que o lançamento deve conter, no mínimo: data, conta(s) devedora(s), conta(s) credora(s), histórico (ou código de histórico), valor e informação que permita identificar de forma unívoca todos os registros que integram o mesmo lançamento. Plano de contas é o conjunto de todas as contas existentes em uma entidade, para uniformizar os registros contábeis.`,
        `Compra de mercadorias em que metade foi paga à vista e metade a prazo, com uma parte entregue em um local e outra parte em outro: o histórico e a identificação do lançamento devem permitir ligar todos os registros (à vista, a prazo, local de entrega) a uma mesma operação.`,
        `O histórico pode ser substituído por um código, mas, nesse caso, o código precisa estar em tabela auxiliar inclusa em livro próprio, que segue as mesmas formalidades (autenticação etc.), para evitar fraude. Cada entidade tem seu plano de contas: ele varia conforme o tipo de empresa.`
      ],
      [
        `2 · Como ler o lançamento: "a", "diversos" e as fórmulas 11, 12, 21 e 22`,
        `Em um lançamento, a conta precedida da preposição "a" é a conta creditada. O termo "diversos" indica mais de uma conta daquele lado. As quatro fórmulas de lançamento seguem o macete 11, 12, 21, 22: 1ª fórmula = um débito e um crédito; 2ª = um débito e dois ou mais créditos; 3ª = dois ou mais débitos e um crédito; 4ª = dois ou mais débitos e dois ou mais créditos.`,
        `Compra de mercadorias à vista: Mercadorias a Caixa (a conta Caixa, depois do "a", é creditada; 1ª fórmula). Compra de mercadorias metade à vista e metade a prazo: Mercadorias a Diversos (Caixa e Fornecedores). Há um débito e dois créditos: 2ª fórmula.`,
        `O primeiro número do macete é o de débitos e o segundo, o de créditos: 11, 12, 21, 22 correspondem à 1ª, 2ª, 3ª e 4ª fórmulas. O número 2 significa "dois ou mais".`
      ],
      [
        `3 · Fatos contábeis: permutativos, modificativos e mistos`,
        `Fatos permutativos não alteram o patrimônio líquido: apenas permutam elementos patrimoniais. Fatos modificativos alteram o PL, e podem ser aumentativos ou diminutivos. Fatos mistos são fato permutativo e fato modificativo ao mesmo tempo (também chamados de fatos compostos) e podem ser aumentativos ou diminutivos, conforme aumentem ou diminuam o PL.`,
        `Receita de juros: fato modificativo aumentativo. Despesa de salários: fato modificativo diminutivo. Pagamento de duplicata com juros: fato misto diminutivo. Recebimento de duplicata com juros: fato misto aumentativo.`,
        `Macete: fatos mistos costumam envolver pagamento ou recebimento de duplicatas (fornecedores, clientes) com juros ou desconto. Veja se o efeito sobre o PL é de aumento (receita) ou de redução (despesa). Não confunda com ato contábil, que não altera o patrimônio.`
      ],
      [
        `4 · Demonstrações obrigatórias, exercício social e comparabilidade`,
        `Segundo o art. 176 da Lei 6.404, ao fim do exercício social a diretoria elabora as demonstrações contábeis obrigatórias. A companhia aberta publica balanço patrimonial, DRE, DLPA, DFC e DVA. A companhia fechada publica balanço, DRE e DLPA; a DFC só é obrigatória se o PL for maior que 2 milhões, e a DVA é facultativa.`,
        `O Banco do Brasil negocia ações em bolsa e é companhia aberta; a Caixa Econômica não tem ações listadas e é companhia fechada, mesmo sendo de grande porte. O exercício social dura um ano, e a data de término é fixada no estatuto.`,
        `A DLPA pode estar contida na DMPL; a DMPL não é obrigatória pela Lei 6.404, mas é pelo CPC 26. A DOAR deixou de ser obrigatória com as Leis 11.638/07 e 11.941/09. O CPC 26 obriga a demonstração do resultado abrangente (DRA).`
      ],
      [
        `5 · Balanço patrimonial: ativo circulante, ordem de liquidez e realizável a longo prazo`,
        `Pela Lei 6.404, o ativo se divide em circulante e não circulante; o não circulante compõe-se de realizável a longo prazo, investimentos, imobilizado e intangível. No ativo, as contas são dispostas em ordem decrescente de grau de liquidez: da mais líquida (caixa) para a menos líquida (terrenos e edifícios). O ativo circulante compõe-se de disponibilidades, direitos realizáveis no curso do exercício social subsequente e despesas do exercício seguinte.`,
        `Caso CVC: um diretor compra um pacote de viagem (venda usual para a empresa) e vai pagar em três meses; é direito de curto prazo, ativo circulante. Outro diretor pede um empréstimo para pagar em três meses; como emprestar a diretor não é atividade usual da CVC, é realizável a longo prazo, mesmo com prazo de três meses.`,
        `Seguros a apropriar são despesa antecipada (ativo circulante) e são apropriados mês a mês como despesa, pelo regime de competência. O marco da classificação é o fim do exercício social: o que vence no exercício subsequente é circulante; o que vence depois é não circulante. Na prática, usa-se 12 meses.`
      ],
      [
        `6 · Ativo não circulante: investimentos, imobilizado, intangível e teste de recuperabilidade`,
        `Investimentos são participações permanentes em outras sociedades, sem caráter especulativo, e propriedades para investimento. O imobilizado reúne bens corpóreos destinados à manutenção das atividades; o intangível, bens incorpóreos. Investimentos em coligadas e controladas são avaliados pelo método da equivalência patrimonial (MEP); os demais, pelo custo. Pelo teste de recuperabilidade (impairment), se o valor contábil for maior que o valor recuperável, reconhece-se perda.`,
        `Ilustração do teste (valores didáticos): valor contábil de 100; valor em uso de 70; valor de venda de 80. O recuperável é o maior (80); como 100 > 80, a perda a reconhecer é 20. Se o valor recuperável fosse 120, não se faria nada.`,
        `Coligada é a sociedade sobre a qual há influência significativa, presumida quando se tem 20% ou mais do capital votante (CPC 18). Controlada é aquela em que a controladora tem, de modo permanente, preponderância nas deliberações e o poder de eleger a maioria dos administradores. Propriedade para investimento é terreno ou edifício mantido para aluguel ou valorização, não para uso nem para venda.`
      ],
      [
        `7 · Passivo, receita diferida e provisões`,
        `O passivo exigível se divide em passivo circulante (obrigações de curto prazo) e passivo não circulante (obrigações de longo prazo). A receita diferida, que substituiu o resultado de exercícios futuros (extinto pela Lei 11.941), fica sempre no passivo não circulante. Provisão (CPC 25) é um passivo de prazo ou valor incerto, com saída de recursos provável (mais para sim do que para não) e é contabilizada no passivo.`,
        `Auto de infração lavrado contra a empresa: se o jurídico avalia que é provável a empresa ter de pagar, é provisão e vai ao passivo. Se a probabilidade é mais para não do que para sim, é passivo contingente: não se contabiliza, mas se divulga em notas explicativas. Se a chance de pagar é remota, nem se contabiliza nem se divulga.`,
        `Receita diferida é receita já recebida, mas ainda não reconhecida na DRE pelo regime de competência; não há dever de pagar nada a ninguém, por isso fica no passivo não circulante. Diferença para o adiantamento de clientes: este pode ter de ser devolvido; a receita diferida não.`
      ],
      [
        `8 · Mensuração: custo dos estoques e do ativo imobilizado`,
        `Estoques e imobilizado são medidos inicialmente pelo custo. No estoque, entram o preço de compra, impostos de importação e outros tributos não recuperáveis, frete sobre compras, seguro, manuseio e custos diretamente atribuídos; ficam de fora os tributos recuperáveis, os descontos comerciais (incondicionais) e os abatimentos. Depois, o estoque é mensurado pelo menor valor entre o custo e o valor realizável líquido.`,
        `Estoque (ilustração): preço de compra de 10.000, com ICMS recuperável de 1.200 incluído; frete de 500; seguro de 300; manuseio de 100. Custo = 10.000 − 1.200 + 500 + 300 + 100 = 9.700. Imobilizado (ilustração): máquina de 50.000, frete de 2.000, instalação de 3.000, testes de 1.000, treinamento de 4.000 e propaganda de 5.000. Custo = 50.000 + 2.000 + 3.000 + 1.000 = 56.000; treinamento e propaganda ficam de fora.`,
        `Valor realizável líquido = preço de venda − despesas de venda. Manutenção periódica (troca de óleo) é despesa; parada programada (troca do motor de um avião) é ativada, com baixa do motor antigo. Valor residual e vida útil são revistos ao final de cada exercício, e a mudança afeta a depreciação daí em diante.`
      ],
      [
        `9 · DRE, DFC e DVA`,
        `Pelo CPC 26 e pelo CPC 47, a DRE começa pela receita líquida; a Lei 6.404 começa pela receita bruta. Pela lei, despesas financeiras são operacionais; pelo CPC 26, receitas e despesas financeiras ficam separadas, e há a linha de resultado líquido das operações descontinuadas (CPC 31). A DFC (CPC 03) evidencia a variação de caixa e equivalentes de caixa, em três fluxos: operacional, de investimento e de financiamento. A DVA evidencia a riqueza gerada e sua distribuição.`,
        `Compra de mercadoria a prazo não altera o fluxo de caixa; o pagamento ao fornecedor, sim. Na DVA, o valor adicionado total a distribuir é igual ao total distribuído (item 7 = item 8).`,
        `O método direto e o indireto da DFC diferem somente no fluxo operacional. Equivalentes de caixa têm liquidez imediata e risco insignificante de mudança de valor; o CPC 03 sugere o prazo de até 90 dias, mas ele não é obrigatório. Na DVA, FGTS não é tributo: entra em pessoal.`
      ]
    ],
    practice: [
      `Quais são os elementos essenciais de um lançamento contábil segundo a ITG 2000 e o que é plano de contas?`,
      `O que significam o "a" e o termo "diversos" em um lançamento? Qual é a fórmula de lançamento com um débito e dois créditos?`,
      `Diferencie fato permutativo, modificativo e misto, dando um exemplo de cada. Como identificar se um fato misto é aumentativo ou diminutivo?`,
      `Quais demonstrações a companhia aberta e a companhia fechada são obrigadas a publicar segundo a Lei 6.404, e quanto dura o exercício social?`,
      `Como se classificam provisão, passivo contingente possível e passivo contingente remoto, e o que se faz com cada um?`
    ],
    answers: [
      `Data; conta(s) devedora(s); conta(s) credora(s); histórico (ou código, em tabela auxiliar em livro próprio, com as mesmas formalidades); valor; e informação que permita identificar de forma unívoca os registros do mesmo lançamento. Plano de contas é o conjunto de todas as contas existentes na entidade, para uniformizar os registros; cada entidade tem o seu.`,
      `O "a" antecede a conta creditada; "diversos" indica mais de uma conta do lado (débito ou crédito). Um débito e dois ou mais créditos é a 2ª fórmula (12).`,
      `Permutativo: não altera o PL (ex.: compra de veículo à vista). Modificativo: altera o PL (aumentativo, como receita de juros; diminutivo, como despesa de salários). Misto: permutativo mais modificativo (ex.: pagamento de duplicata com juros). Para saber se é aumentativo ou diminutivo, veja se o efeito sobre o PL é de aumento (receita) ou de redução (despesa).`,
      `Companhia aberta: balanço, DRE, DLPA, DFC e DVA. Companhia fechada: balanço, DRE e DLPA, sendo a DFC obrigatória só com PL maior que 2 milhões e a DVA facultativa. O exercício social dura um ano e a data de término é fixada no estatuto.`,
      `Provisão (saída provável): contabiliza-se no passivo. Passivo contingente possível (mais para não que para sim): não se contabiliza, mas se divulga em notas explicativas. Passivo contingente remoto: nem se contabiliza nem se divulga.`
    ]
  });

  window.PCPE_DEEPENING[topic] = {
    1: [
      ['h', 'Os elementos do lançamento contábil'],
      ['p', `A ITG 2000 é a norma editada pelo Conselho Federal de Contabilidade que trata da escrituração contábil. Ela diz que a escrituração em forma contábil deve conter, no mínimo, os elementos abaixo. Pense em quem audita: se alguém pede o livro para conferir os lançamentos e não há data, a pessoa fica perdida, sem saber o que ocorreu e quando.`],
      ['ul', [
        `Data do lançamento.`,
        `Conta(s) devedora(s).`,
        `Conta(s) credora(s). Todo lançamento tem sempre uma conta devedora e uma credora.`,
        `Histórico: por exemplo, "compra de mercadorias". Pode ser substituído por um código, desde que o código esteja em tabela auxiliar inclusa em livro próprio (que pode ser o próprio Diário ou outro livro, com as mesmas formalidades, como a autenticação), para evitar fraude.`,
        `Valor.`,
        `Informação que permita identificar de forma unívoca todos os registros que integram o mesmo lançamento.`
      ]],
      ['h', 'Exemplo da identificação unívoca'],
      ['p', `Você comprou mercadorias: metade à vista e metade a prazo; uma parte será entregue em um local e outra em outro. O lançamento tem vários registros, e o histórico deve permitir identificar que todos eles pertencem à mesma operação: compra de mercadoria, metade à vista, metade a prazo, parte entregue aqui, parte entregue ali.`],
      ['h', 'Plano de contas'],
      ['p', `Plano de contas é o conjunto de todas as contas existentes em uma entidade, para uniformizar os registros contábeis. Cada entidade pode ter o seu: uma empresa de educação não terá o mesmo plano de contas de uma locadora de automóveis, nem uma fabricante de bebidas terá o mesmo de uma rede de lojas de roupas. O plano de contas varia conforme o tipo de sociedade e de atividade. É um conceito cobrado com frequência por CESPE e Consulplan, e já caiu no exame de suficiência (2019.2).`],
      ['h', 'Resumo de revisão'],
      ['ul', [
        `ITG 2000: data, conta devedora, conta credora, histórico (ou código), valor e identificação unívoca.`,
        `Código no lugar do histórico: exige tabela auxiliar em livro próprio, com as mesmas formalidades.`,
        `Plano de contas: conjunto de todas as contas da entidade; uniformiza registros; varia de entidade para entidade.`
      ]]
    ],
    2: [
      ['h', 'O "a" e o "diversos"'],
      ['p', `No lançamento, a conta precedida da preposição "a" é a conta creditada. Quando há mais de uma conta de um lado, usa-se o termo "diversos". Veja:`],
      ['ul', [
        `Compra de mercadorias à vista: Mercadorias a Caixa. O "a" indica que Caixa é a conta creditada; Mercadorias é a debitada.`,
        `Compra de mercadorias metade à vista e metade a prazo: Mercadorias a Diversos (Caixa e Fornecedores). O "diversos" mostra que há mais de uma conta creditada.`
      ]],
      ['p', `Ilustração com valores: compra de 1.000, sendo 500 à vista e 500 a prazo. Débito: Mercadorias, 1.000. Créditos: Caixa, 500; Fornecedores, 500. Débitos (1.000) = créditos (500 + 500): as partidas dobradas se mantêm.`],
      ['h', 'As quatro fórmulas de lançamento'],
      ['p', `Os lançamentos podem ser de primeira, segunda, terceira ou quarta fórmula. O macete é o 11, 12, 21 e 22: o primeiro algarismo indica o número de débitos; o segundo, o de créditos; e o algarismo 2 significa "dois ou mais".`],
      ['ol', [
        `1ª fórmula (11): um débito e um crédito.`,
        `2ª fórmula (12): um débito e dois ou mais créditos.`,
        `3ª fórmula (21): dois ou mais débitos e um crédito.`,
        `4ª fórmula (22): dois ou mais débitos e dois ou mais créditos.`
      ]],
      ['h', 'Aplicação'],
      ['p', `"Mercadorias a Caixa" é 1ª fórmula (um débito e um crédito). "Mercadorias a Diversos (Caixa e Fornecedores)" é 2ª fórmula (um débito e dois créditos). Quando houver "Diversos a ..." você sabe que há mais de uma conta debitada, o que levaria à 3ª fórmula (se houver um crédito) ou à 4ª (se houver mais de um crédito).`],
      ['h', 'Resumo de revisão'],
      ['ul', [
        `"a" antecede a conta creditada.`,
        `"Diversos" = mais de uma conta daquele lado.`,
        `11 / 12 / 21 / 22 = 1ª / 2ª / 3ª / 4ª fórmulas (débitos / créditos).`
      ]]
    ],
    3: [
      ['h', 'Os três tipos de fatos contábeis'],
      ['p', `Os fatos contábeis alteram o patrimônio e são de três tipos: permutativos, modificativos e mistos. O que muda é o efeito sobre o patrimônio líquido.`],
      ['h', 'Fatos permutativos'],
      ['p', `Não alteram o patrimônio líquido: constituem apenas permutações entre elementos patrimoniais. Podem ocorrer entre:`],
      ['ul', [
        `uma conta de ativo e outra de ativo;`,
        `uma conta de ativo e uma de passivo;`,
        `uma conta de passivo e outra de passivo;`,
        `contas do próprio PL: uma aumenta e outra diminui o mesmo valor, e o PL total permanece igual (por exemplo, o PL era 100, diminui 10 em uma conta e aumenta 10 em outra, e continua 100).`
      ]],
      ['h', 'Fatos modificativos'],
      ['p', `Alteram o valor do PL. Podem ser:`],
      ['ul', [
        `Aumentativos: aumentam o PL. Geralmente envolvem aumento de receita ou diminuição de despesa. O lucro maior é transferido para o PL. Exemplo: receita de juros.`,
        `Diminutivos: diminuem o PL. Geralmente envolvem diminuição de receita ou aumento de despesa, gerando mais prejuízo, que se transfere ao PL. Exemplo: despesa de salários.`
      ]],
      ['p', `As contas de resultado ajudam a apurar o lucro ou o prejuízo; depois de apurado, o resultado vai para o balanço patrimonial, para o PL.`],
      ['h', 'Fatos mistos (ou compostos)'],
      ['p', `Fato misto é aquele que contempla, ao mesmo tempo, um fato permutativo e um fato modificativo: são dois fatos em um. O CESPE já chamou o fato misto de "permutativo e modificativo". O fato misto pode ser aumentativo ou diminutivo, conforme aumente ou diminua o PL.`],
      ['p', `Macete: fatos mistos são o pagamento ou o recebimento de duplicatas (fornecedores, clientes) com juros ou com desconto. Verifique o efeito sobre o PL:`],
      ['ul', [
        `Pagamento de duplicata com juros: despesa aumenta, PL diminui, fato misto diminutivo.`,
        `Pagamento de duplicata com desconto: obtém-se um ganho, PL aumenta, fato misto aumentativo.`,
        `Recebimento de duplicata com juros: receita, PL aumenta, fato misto aumentativo.`,
        `Recebimento de duplicata com desconto concedido: perda, PL diminui, fato misto diminutivo.`
      ]],
      ['p', `Ilustração numérica: pagar uma duplicata de 1.000 com juros de 100. Lançamento: débito Fornecedores 1.000, débito Despesa de juros 100, crédito Caixa 1.100. Os 1.000 são a parte permutativa (diminui passivo e diminui ativo no mesmo valor); os 100 de juros são a parte modificativa diminutiva (despesa; PL reduz em 100).`],
      ['h', 'Resumo de revisão'],
      ['ul', [
        `Permutativo: não altera o PL.`,
        `Modificativo: altera o PL (aumentativo ou diminutivo).`,
        `Misto: permutativo + modificativo; aumentativo ou diminutivo.`,
        `Duplicata paga/recebida com juros ou desconto = fato misto; olhe o efeito no PL.`
      ]]
    ],
    4: [
      ['h', 'Demonstrações obrigatórias (art. 176 da Lei 6.404)'],
      ['p', `O art. 176 da Lei 6.404 se aplica às sociedades anônimas: ao fim do exercício social, a diretoria elabora as demonstrações contábeis obrigatórias. Na prática, muitas empresas publicam demonstrações trimestrais, por causa dos acionistas, mas a obrigação legal é anual. A obrigação segundo o CPC 26 é mais ampla.`],
      ['p', `As obrigações dependem do tipo de companhia. Companhia aberta é a que negocia seus títulos e valores mobiliários no mercado de valores mobiliários, por exemplo, ações na bolsa. O Banco do Brasil é companhia aberta; a Caixa Econômica, ainda que de grande porte, é companhia fechada, pois não tem ações listadas na bolsa.`],
      ['ul', [
        `Companhia aberta: balanço patrimonial, DRE, DLPA (demonstração de lucros ou prejuízos acumulados), DFC (demonstração de fluxos de caixa) e DVA (demonstração do valor adicionado).`,
        `Companhia fechada: balanço patrimonial, DRE e DLPA. A DFC só é obrigatória se o PL for maior que 2 milhões. A DVA é facultativa.`
      ]],
      ['h', 'Pontos que a banca cobra'],
      ['ul', [
        `Nas companhias abertas, a DLPA pode estar contida dentro da DMPL (demonstração das mutações do patrimônio líquido).`,
        `A DMPL não é obrigatória pela Lei 6.404, mas é obrigatória pelo CPC 26 (apresentação das demonstrações contábeis).`,
        `A DOAR (demonstração de origens e aplicações de recursos) deixou de ser obrigatória com as modificações das Leis 11.638/07 e 11.941/09; já caiu várias vezes em prova (exame de suficiência e TCM-BA, por exemplo).`,
        `O CPC 26 obriga a elaboração e a publicação da demonstração do resultado abrangente (DRA).`
      ]],
      ['h', 'Exercício social e comparabilidade'],
      ['p', `O exercício social tem duração de um ano, e a data de término é fixada no estatuto. As demonstrações do exercício são publicadas com a indicação dos valores correspondentes às do exercício anterior: quem publica o balanço de 2020 publica também o de 2019. Isso dá às demonstrações valor preditivo (com base em 2019, você faz uma previsão) e valor confirmatório (em 2020, você confirma a previsão, como a receita esperada). Também ajuda na comparabilidade, outra característica qualitativa das demonstrações contábeis (CPC 00).`],
      ['h', 'Resumo de revisão'],
      ['ul', [
        `Cia aberta: BP, DRE, DLPA, DFC e DVA. Cia fechada: BP, DRE e DLPA (DFC só se PL > 2 milhões; DVA facultativa).`,
        `DMPL: obrigatória pelo CPC 26, não pela Lei 6.404. DOAR: não é mais obrigatória. DRA: exigida pelo CPC 26.`,
        `Exercício social: um ano; término fixado no estatuto.`,
        `Valores do exercício anterior: valor preditivo e confirmatório; comparabilidade.`
      ]]
    ],
    5: [
      ['h', 'Estrutura do balanço pela Lei 6.404'],
      ['p', `Segundo a Lei 6.404, o ativo se divide em circulante e não circulante; o passivo, em circulante, não circulante e patrimônio líquido. O ativo não circulante é dividido em realizável a longo prazo, investimentos, imobilizado e intangível.`],
      ['h', 'Ordem decrescente de grau de liquidez'],
      ['p', `No ativo, as contas são dispostas em ordem decrescente de grau de liquidez (tema já cobrado no exame de suficiência 2018.2 e 2019.1). Liquidez é a expectativa de conversão em dinheiro; decrescente é do maior para o menor. A primeira conta é a mais líquida, o próprio dinheiro (caixa); depois vêm bancos e aplicações financeiras de liquidez imediata; no final ficam as menos líquidas, como terrenos e edifícios.`],
      ['h', 'Ativo circulante'],
      ['p', `Compõe-se de:`],
      ['ul', [
        `Disponibilidades: caixa e equivalentes de caixa (aplicações financeiras de liquidez imediata, prontamente conversíveis em montante conhecido de caixa e sujeitas a risco insignificante de mudança de valor; por exemplo, Tesouro Selic ou CDB com resgate imediato).`,
        `Direitos realizáveis no curso do exercício social subsequente: clientes e duplicatas a receber em até 12 meses e até estoques.`,
        `Aplicações de recursos em despesas do exercício seguinte, as despesas antecipadas. O clássico é a conta Seguros a Apropriar. A seguradora cobra antes do uso; como a contabilidade usa o regime de competência, não se reconhece a despesa toda de uma vez: ela fica no ativo e vai sendo apropriada à DRE mês a mês. Também se enquadram assinaturas de revistas e jornais.`
      ]],
      ['p', `Ilustração: seguro de 1.200 pago adiantado para 12 meses. No pagamento, vai a ativo (Seguros a Apropriar, 1.200); a cada mês, 100 passam para despesa.`],
      ['h', 'Realizável a longo prazo'],
      ['p', `São os direitos a receber após o término do exercício seguinte, mais os direitos derivados de vendas, adiantamentos ou empréstimos a coligadas, controladas, diretores, administradores, acionistas ou participantes do lucro, que não constituam negócios usuais na exploração do objeto da companhia. Essas operações são tratadas pelo CPC 05 (partes relacionadas).`],
      ['h', 'O caso CVC'],
      ['p', `Para classificar um direito contra diretor, você aplica três perguntas: é venda, adiantamento ou empréstimo? É com coligada, controlada, diretor, administrador, acionista ou participante do lucro? Não é usual no objeto da empresa?`],
      ['ul', [
        `Diretor A compra um pacote de viagem para pagar em três meses: é venda a diretor, mas vender pacote de viagem é usual para a CVC. Reprovou na terceira pergunta; classifica-se pelo prazo: três meses, ativo circulante.`,
        `Diretor B pede empréstimo para pagar em três meses: empréstimo a diretor, e emprestar dinheiro não é o objeto social da CVC (que vende pacotes e passagens). Não usual: pela Lei 6.404, vai ao realizável a longo prazo, mesmo com prazo de três meses.`
      ]],
      ['h', 'Curto e longo prazo na prática'],
      ['p', `A lei toma como marco o fim do exercício social. Se o fim é 31/12/2020, o exercício subsequente é 2021. O que for realizar até 31/12/2021 é curto prazo; o que for realizar a partir de 2022 é longo prazo. Na prática, trata-se de 12 meses.`],
      ['h', 'Resumo de revisão'],
      ['ul', [
        `Ativo: ordem decrescente de liquidez (caixa primeiro; terrenos e edifícios por último).`,
        `AC: disponibilidades, direitos do exercício seguinte e despesas antecipadas (seguros a apropriar).`,
        `ANC: realizável a longo prazo, investimentos, imobilizado e intangível.`,
        `Empréstimo a diretor não usual no objeto social vai ao longo prazo, mesmo a curto prazo.`
      ]]
    ],
    6: [
      ['h', 'Investimentos'],
      ['p', `No grupo investimentos ficam as participações permanentes em outras sociedades, isto é, em sociedades cujo caráter não é especulativo: não se compra para vender amanhã. É o caso de investimentos em coligadas e controladas. Esses investimentos são avaliados por dois métodos: o método da equivalência patrimonial (MEP) e o método de custo.`],
      ['ul', [
        `Pela Lei 6.404: coligadas, controladas, sociedades do mesmo grupo e sob controle comum são avaliadas pelo MEP; os demais investimentos, pelo custo (critério residual).`,
        `Pelo CPC 48 (instrumentos financeiros): o que não for avaliado pelo MEP deve ser avaliado pelo valor justo (valor de mercado da participação); se não for possível, pelo valor de custo.`
      ]],
      ['p', `Controlada é a sociedade em que a controladora, diretamente ou por meio de outras controladas, é titular de direitos de sócio que lhe assegurem, de modo permanente, preponderância nas deliberações sociais e o poder de eleger a maioria dos administradores. Coligadas são sociedades em que há influência significativa: o poder de participar das decisões políticas, financeiras ou operacionais da investida, sem controlá-la. Pelo CPC 18, presume-se influência significativa quando a investidora é titular de 20% ou mais do capital votante. A presunção não é absoluta: pode haver influência com menos de 20% e pode não haver com mais.`],
      ['p', `Propriedade para investimento (CPC 28): terreno, edifício ou parte de edifício, ou ambos, mantido para auferir aluguel ou para valorização de capital, ou ambos. Não é usado na produção ou no fornecimento de bens ou serviços, em finalidades administrativas nem para vender no curso ordinário do negócio.`],
      ['h', 'Imobilizado e arrendamento'],
      ['p', `No ativo imobilizado ficam os bens corpóreos destinados à manutenção das atividades da companhia: terrenos e edificações, máquinas, equipamentos, móveis e utensílios, veículos. Segundo o CPC 27, é o item tangível mantido para uso na produção ou no fornecimento de mercadorias, bens ou serviços, para aluguel a terceiros ou para fins administrativos, e que se espera utilizar por mais de um período. Com a mudança do CPC 06 em 2019, para o arrendatário deixou de haver a distinção entre arrendamento operacional e financeiro: qualquer arrendamento é lançado no ativo, ainda que o bem não seja da companhia.`],
      ['h', 'Intangível'],
      ['p', `A Lei 11.638 trouxe o ativo intangível, isto é, ativo incorpóreo. Segundo a Lei 6.404, ficam no intangível os direitos que tenham por objeto bens incorpóreos destinados à manutenção das atividades da companhia, inclusive o fundo de comércio adquirido (goodwill, ágio por expectativa de rentabilidade futura). No balanço consolidado, o goodwill fica no intangível; no balanço individual, em investimentos, o que é uma imprecisão técnica da lei.`],
      ['h', 'Teste de recuperabilidade (impairment)'],
      ['p', `Previsto no art. 183, § 3º, da Lei 6.404 (inserido pela Lei 11.638/07) e no CPC 01, o teste se aplica ao imobilizado e ao intangível (e, pelo CPC 01, a outros grupos). Todo ativo deve produzir benefício econômico futuro. Se o valor contábil estiver acima do que a entidade conseguirá recuperar (usando o ativo ou vendendo-o), há perda.`],
      ['ul', [
        `Valor contábil maior que o valor recuperável: reconhece-se a perda e baixa-se o valor contábil.`,
        `Valor recuperável maior ou igual ao contábil: não se faz nada.`
      ]],
      ['p', `Ilustração (valores didáticos): contábil 100; em uso 70; de venda 80. Recuperável = maior dos dois = 80; perda = 100 − 80 = 20. Além disso, revisa-se a vida útil e ajustam-se depreciação, amortização e exaustão. Nenhum ativo pode ficar registrado por valor superior ao benefício econômico que vai gerar (prudência).`],
      ['h', 'Resumo de revisão'],
      ['ul', [
        `Investimentos: participações permanentes; coligadas e controladas pelo MEP; demais pelo custo (Lei 6.404).`,
        `CPC 48: o que não for MEP, valor justo; senão custo.`,
        `Coligada: influência significativa, presumida com 20% ou mais do capital votante.`,
        `Imobilizado: bens corpóreos; intangível: incorpóreos (goodwill); propriedade para investimento: aluguel/valorização.`,
        `Impairment: valor contábil > valor recuperável = perda; caso contrário, nada.`
      ]]
    ],
    7: [
      ['h', 'Passivo circulante e não circulante'],
      ['p', `O passivo exigível se divide em passivo circulante, as obrigações de curto prazo, e passivo não circulante, as obrigações de longo prazo. O grupo "resultado de exercícios futuros" foi extinto pela Lei 11.941; em seu lugar, usa-se a conta receita diferida, que fica no passivo não circulante.`],
      ['h', 'Receita diferida'],
      ['p', `Receita diferida é uma receita que a companhia já recebeu e a que tem direito, mas que ainda não foi lançada na DRE porque ainda não ocorreu o regime de competência. Fica sempre no passivo não circulante, por uma razão: ela não é uma obrigação de pagar nada a ninguém; você já recebeu a receita e não deve nada a ninguém. Ela fica ali aguardando o regime de competência para ser reconhecida como receita na DRE.`],
      ['p', `Diferença para o adiantamento de clientes: o adiantamento pode ter de ser devolvido, se o cliente quiser, e por isso fica no passivo como obrigação; a receita diferida não será devolvida.`],
      ['h', 'Provisão x passivo contingente (CPC 25)'],
      ['p', `Provisão é um passivo de prazo ou valor incertos. É contabilizada no passivo. Exemplo: um fiscal lavra um auto de infração contra uma empresa; o advogado avalia que muito provavelmente terá de pagar (mais para sim do que para não). A empresa não sabe quando nem quanto vai pagar, mas é provável que pague: constitui provisão.`],
      ['ul', [
        `Saída de recursos provável: provisão. Contabiliza-se no passivo.`,
        `Saída possível, mas mais para não do que para sim (probabilidade menor que 50%): passivo contingente. Não se contabiliza; divulga-se em notas explicativas.`,
        `Saída com possibilidade remota (por exemplo, auto de infração lavrado por quem não tinha competência, de modo que a chance de pagar é muito pequena): nem se contabiliza nem se divulga.`
      ]],
      ['p', `Pegadinha de exame de suficiência: "a empresa reverteu um passivo contingente anteriormente reconhecido". Se o passivo é contingente, ele não é contabilizado; logo, não há o que reverter. A afirmação é falsa.`],
      ['h', 'Resumo de revisão'],
      ['ul', [
        `PC: curto prazo; PNC: longo prazo.`,
        `Receita diferida: sempre no PNC; não se devolve. Adiantamento de clientes: pode ter de ser devolvido.`,
        `Provisão: provável, contabiliza. Contingente possível: divulga. Remoto: nada.`
      ]]
    ],
    8: [
      ['h', 'Estoques'],
      ['p', `A avaliação inicial dos estoques é feita pelo custo histórico, o valor pago. Posteriormente, o estoque é mensurado pelo menor valor entre o custo e o valor realizável líquido. Valor realizável líquido é o preço pelo qual se consegue vender o estoque menos as despesas de venda.`],
      ['p', `Entram no custo do estoque:`],
      ['ul', [
        `preço de compra;`,
        `impostos de importação e outros tributos não recuperáveis;`,
        `frete sobre compras;`,
        `seguro;`,
        `manuseio;`,
        `custos diretamente atribuídos (por exemplo, taxas).`
      ]],
      ['p', `Não entram:`],
      ['ul', [
        `tributos recuperáveis (os que podem ser compensados depois; por exemplo, ICMS, PIS/COFINS não cumulativos e IPI);`,
        `descontos comerciais (incondicionais), aqueles negociados no ato da compra: um produto que custava 100 e saiu por 90 teve 10 de desconto incondicional;`,
        `abatimentos: valor que o comprador recebe do vendedor para ficar com a mercadoria (por exemplo, o produto veio com defeito ou diferente do pedido, o comprador não o devolve, e o vendedor reduz o preço).`
      ]],
      ['p', `Não confunda o desconto comercial com o desconto financeiro (condicional): este depende de uma condição, como pagar antes do vencimento (comprou por 100, mas pagando antes paga 90).`],
      ['p', `Ilustração: preço de compra de 10.000, incluindo ICMS recuperável de 1.200; frete de 500; seguro de 300; manuseio de 100. Custo do estoque = 10.000 − 1.200 + 500 + 300 + 100 = 9.700.`],
      ['h', 'Custo do ativo imobilizado'],
      ['p', `O imobilizado, como o estoque, é medido inicialmente pelo custo histórico; depois fica sujeito a depreciação, amortização, exaustão e perda por recuperabilidade. Entram no custo:`],
      ['ul', [
        `preço de aquisição, mais impostos de importação e tributos não recuperáveis;`,
        `preparação do local (limpeza do terreno);`,
        `frete e manuseio, se pagos pelo comprador;`,
        `instalação e montagem;`,
        `testes para ver se o ativo funciona;`,
        `honorários profissionais (engenheiro, arquiteto);`,
        `custos de desmontagem e remoção futuros, trazidos a valor presente: se vai gastar 1.000.000 no futuro, mas isso vale 600.000 hoje, lança-se 600.000 no custo;`,
        `outros custos diretamente atribuíveis, como taxas.`
      ]],
      ['p', `Não entram: descontos comerciais e abatimentos; custo de abertura de nova instalação; frete pago pelo vendedor; propaganda e atividades promocionais; treinamento de funcionários; transferência posterior de local; custos administrativos e outros custos indiretos; remoção ou desmontagem de máquinas antigas. A regra é "cada um no seu quadrado": gastos com a máquina B não entram no custo da máquina A.`],
      ['p', `Ilustração: máquina de 50.000; frete de 2.000; instalação de 3.000; testes de 1.000; treinamento de 4.000; propaganda de 5.000. Custo do imobilizado = 50.000 + 2.000 + 3.000 + 1.000 = 56.000.`],
      ['h', 'Gastos subsequentes e revisões'],
      ['ul', [
        `Manutenção periódica (trocar o óleo da máquina, a correia dentada do carro): não agrega valor ao bem; é despesa.`,
        `Parada programada (por exemplo, trocar o motor de um avião a cada cinco anos, embora a carcaça dure dez): ativa-se o novo motor, dá-se baixa no antigo; são gastos de capital, contabilizados no custo do ativo.`,
        `Valor residual e vida útil: antes eram fixos; hoje são revistos ao final de cada exercício social. Se mudarem, a depreciação é recalculada daí em diante (mudança de estimativa, sem efeito retroativo). Exemplo: o valor residual passa de 200 mil para 300 mil, ou a vida útil de 5 para 7 anos.`
      ]],
      ['h', 'Resumo de revisão'],
      ['ul', [
        `Estoque: custo; depois o menor entre custo e valor realizável líquido (preço de venda − despesas de venda).`,
        `Fora do custo do estoque: tributos recuperáveis, descontos comerciais e abatimentos.`,
        `Imobilizado: entram preço, frete, instalação, testes, honorários, desmontagem futura a valor presente; não entram treinamento, propaganda, frete do vendedor e custos administrativos.`,
        `Manutenção periódica = despesa; parada programada = ativada.`,
        `Vida útil e valor residual revistos ao fim do exercício; ajuste só para frente.`
      ]]
    ],
    9: [
      ['h', 'DRE: Lei 6.404 x CPC 26 e CPC 47'],
      ['p', `A DRE tem duas estruturas: a da Lei 6.404 e a do CPC 26 (apresentação das demonstrações contábeis), reforçada pelo CPC 47.`],
      ['ul', [
        `Início: pelo CPC 26 e pelo CPC 47, a DRE começa pela receita líquida. A Lei 6.404 começa pela receita bruta, da qual deduz descontos incondicionais, abatimentos e tributos sobre vendas. Esses valores não são riqueza que fica na companhia; mostrar a receita bruta pode levar o usuário a enxergar uma receita maior do que a real. Na prática, a maioria apresenta pela receita líquida e, se quiser, concilia a receita bruta nas notas explicativas.`,
        `Despesa financeira: na Lei 6.404, receitas e despesas financeiras fazem parte do operacional. No CPC 26, são separadas: chega-se ao resultado antes das receitas e despesas financeiras, soma-se ou subtrai-se o resultado financeiro e chega-se ao resultado antes dos tributos sobre o lucro (imposto de renda e contribuição social sobre o lucro).`,
        `Operações descontinuadas (CPC 31): o CPC 26 tem a linha "resultado líquido das operações descontinuadas". Se a empresa descontinua uma linha de produtos, não lança suas receitas e despesas na parte operacional: lança o resultado líquido (lucro ou prejuízo) dessa parte nessa linha. A Lei 6.404 não prevê essa separação.`
      ]],
      ['h', 'DFC (CPC 03)'],
      ['p', `A demonstração dos fluxos de caixa evidencia a variação na conta caixa e equivalentes de caixa. Equivalentes de caixa são aplicações financeiras de liquidez imediata, sujeitas a risco insignificante de mudança de valor. Liquidez é a possibilidade de conversão em dinheiro; o CPC 03 sugere o prazo de até 90 dias (3 meses), mas ele não é obrigatório. Tesouro Selic, poupança e CDB são exemplos.`],
      ['ul', [
        `Fluxo operacional: principais atividades geradoras de caixa da companhia (vender roupa, vender calçado, cobrar mensalidade).`,
        `Fluxo de investimento: compra ou venda de imobilizado e de investimentos (o que se chama de capex).`,
        `Fluxo de financiamento: valores recebidos dos sócios e de empréstimos.`
      ]],
      ['p', `Só interessa o que entra ou sai do caixa: comprar mercadoria a prazo não altera o fluxo de caixa; pagar o fornecedor, sim. Métodos: direto (pagamentos e recebimentos) e indireto (parte-se do lucro líquido da DRE, com uma série de ajustes). A diferença entre os métodos está apenas no fluxo operacional.`],
      ['h', 'DVA'],
      ['p', `A DVA evidencia a riqueza gerada pela companhia e como ela foi distribuída. Estrutura:`],
      ['ol', [
        `Receitas (incluem todos os tributos, recuperáveis ou não).`,
        `Menos insumos adquiridos de terceiros (também incluem tributos recuperáveis ou não), incluindo o custo da mercadoria vendida: resulta no valor adicionado bruto.`,
        `Menos retenções (depreciação, amortização e exaustão do período; se for de período anterior, não entra): resulta no valor adicionado líquido produzido.`,
        `Mais valor adicionado recebido em transferência (riquezas que não foram geradas pela entidade, como resultado de equivalência patrimonial, receitas financeiras e receitas de aluguel): resulta no valor adicionado total a distribuir.`
      ]],
      ['p', `Depois vem a distribuição do valor adicionado, cujo total é igual ao valor adicionado total a distribuir (o item 7 é igual ao item 8). A distribuição é feita a: pessoal (salários, benefícios e FGTS, que não é tributo); impostos, taxas e contribuições (federais, estaduais e municipais); remuneração de capital de terceiros (juros e aluguéis); e remuneração de capital próprio (juros sobre capital próprio, dividendos, lucros retidos do exercício e participação de não controladores). A DVA é obrigatória para companhias abertas.`],
      ['h', 'Resumo de revisão'],
      ['ul', [
        `CPC 26/47: DRE começa pela receita líquida; resultado financeiro separado; operações descontinuadas em linha própria. Lei 6.404: começa pela receita bruta; despesa financeira é operacional.`,
        `DFC: operacional, investimento e financiamento; métodos direto e indireto diferem só no operacional; equivalente de caixa: liquidez imediata, até 90 dias sugeridos.`,
        `DVA: receitas − insumos = VA bruto; − retenções = VA líquido; + transferência = total a distribuir (igual ao total distribuído).`
      ]]
    ]
  };

  window.PCPE_QUESTOES[topic] = [
    {
      text: `Segundo a ITG 2000, ao fazer um lançamento contábil usando um código no lugar do histórico, é correto que:`,
      options: [
        `o código é permitido desde que conste de tabela auxiliar inclusa em livro próprio, com as mesmas formalidades, como a autenticação.`,
        `o código é vedado, pois o histórico é sempre obrigatório por extenso.`,
        `o código é permitido sem qualquer exigência adicional.`,
        `o código é permitido, mas dispensa a indicação das contas devedora e credora.`
      ],
      correct: 0,
      exp: `O código pode substituir o histórico se estiver em tabela auxiliar inclusa em livro próprio, com as mesmas formalidades (autenticação etc.), para evitar fraude. As demais alternativas vedam o código, dispensam a tabela ou dispensam as contas.`
    },
    {
      text: `O lançamento "Mercadorias a Diversos (Caixa e Fornecedores)" corresponde, quanto à fórmula de lançamento, à:`,
      options: [
        `1ª fórmula, pois há um débito e um crédito.`,
        `3ª fórmula, pois há dois ou mais débitos e um crédito.`,
        `2ª fórmula, pois há um débito (Mercadorias) e dois créditos (Caixa e Fornecedores).`,
        `4ª fórmula, pois há dois ou mais débitos e dois ou mais créditos.`
      ],
      correct: 2,
      exp: `O "a" antecede as contas creditadas e "diversos" indica mais de uma: um débito e dois créditos é a 2ª fórmula (12). Na 1ª há um débito e um crédito; na 3ª, dois ou mais débitos e um crédito; na 4ª, vários de cada lado.`
    },
    {
      text: `Uma empresa paga uma duplicata de 1.000 a fornecedor, com juros de 100, desembolsando 1.100. Esse fato contábil é:`,
      options: [
        `permutativo, pois apenas troca elementos patrimoniais.`,
        `misto diminutivo, pois combina a parte permutativa (1.000) e a parte modificativa diminutiva (juros de 100).`,
        `misto aumentativo, pois os juros aumentam o patrimônio líquido.`,
        `modificativo aumentativo, pois o pagamento aumenta o passivo.`
      ],
      correct: 1,
      exp: `Pagar duplicata com juros é fato misto: os 1.000 permutam ativo e passivo; os 100 de juros são despesa, que reduz o PL (diminutivo). Não é apenas permutativo, nem aumentativo.`
    },
    {
      text: `Constitui exemplo de fato contábil permutativo:`,
      options: [
        `o reconhecimento de receita de juros.`,
        `o pagamento de salários do mês.`,
        `a contratação de empregado por meio de seleção.`,
        `a compra de um veículo à vista, com saída de dinheiro do caixa.`
      ],
      correct: 3,
      exp: `Comprar um veículo à vista troca ativo por ativo (Caixa por Veículos), sem alterar o PL. Receita de juros e salários alteram o PL (modificativos); a contratação, por si só, é um ato, que não altera o patrimônio.`
    },
    {
      text: `Sobre as demonstrações contábeis obrigatórias, segundo a Lei 6.404 e o CPC 26, assinale a alternativa correta.`,
      options: [
        `A companhia fechada é obrigada a publicar a DVA e a DOAR.`,
        `A DOAR continua obrigatória, apesar das Leis 11.638/07 e 11.941/09.`,
        `A DMPL é obrigatória pela Lei 6.404, mas não pelo CPC 26.`,
        `A companhia aberta publica balanço, DRE, DLPA, DFC e DVA, e a DMPL é obrigatória pelo CPC 26.`
      ],
      correct: 3,
      exp: `Companhia aberta publica BP, DRE, DLPA, DFC e DVA; a DMPL é exigida pelo CPC 26, não pela Lei 6.404. A DOAR deixou de ser obrigatória, e a DVA é facultativa para a companhia fechada.`
    },
    {
      text: `Uma agência de viagens (cujo objeto é vender pacotes e passagens) empresta dinheiro a um diretor, que vai pagar em três meses. Como esse direito deve ser classificado?`,
      options: [
        `Ativo circulante, pois o prazo é de apenas três meses.`,
        `Passivo circulante.`,
        `Patrimônio líquido, por se tratar de operação com diretor.`,
        `Ativo não circulante, realizável a longo prazo, pois é empréstimo a diretor que não é negócio usual do objeto da companhia.`
      ],
      correct: 3,
      exp: `Empréstimos a diretores que não constituam negócios usuais na exploração do objeto social vão ao realizável a longo prazo, independentemente do prazo. Se fosse venda de pacote de viagem (negócio usual), prevaleceria o prazo.`
    },
    {
      text: `Uma mercadoria foi comprada por 10.000, valor que inclui ICMS recuperável de 1.200. A empresa pagou frete de 500, seguro de 300 e manuseio de 100. Qual é o custo do estoque?`,
      options: [
        `10.900.`,
        `9.700.`,
        `11.200.`,
        `9.200.`
      ],
      correct: 1,
      exp: `Custo = 10.000 − 1.200 (tributo recuperável não integra o custo) + 500 + 300 + 100 = 9.700. 10.900 não exclui o ICMS recuperável; 11.200 soma o ICMS; 9.200 deixa de somar o manuseio e outros gastos.`
    },
    {
      text: `Uma máquina foi adquirida por 50.000. A empresa pagou ainda frete de 2.000 (por sua conta), instalação de 3.000, testes de 1.000, treinamento de funcionários de 4.000 e propaganda do produto a ser fabricado de 5.000. Qual é o custo do ativo imobilizado?`,
      options: [
        `65.000.`,
        `60.000.`,
        `56.000.`,
        `50.000.`
      ],
      correct: 2,
      exp: `Entram preço, frete, instalação e testes: 50.000 + 2.000 + 3.000 + 1.000 = 56.000. Treinamento e propaganda não entram no custo do imobilizado.`
    },
    {
      text: `Uma empresa recebeu um auto de infração. O departamento jurídico avalia que a probabilidade de a empresa ter de pagar é mais para sim do que para não. Segundo o CPC 25, essa situação deve ser tratada como:`,
      options: [
        `provisão, contabilizada no passivo.`,
        `passivo contingente, divulgado apenas em notas explicativas.`,
        `passivo contingente remoto, sem contabilização nem divulgação.`,
        `receita diferida, no passivo não circulante.`
      ],
      correct: 0,
      exp: `Saída provável (mais para sim do que para não): provisão, contabilizada no passivo. Passivo contingente é a saída possível, mas mais para não; o remoto não se contabiliza nem se divulga; receita diferida é outro conceito.`
    },
    {
      text: `Sobre a DRE segundo o CPC 26 e o CPC 47, quando comparada com a estrutura da Lei 6.404, é correto afirmar que:`,
      options: [
        `a DRE começa pela receita bruta, e as despesas financeiras são operacionais.`,
        `não há diferença entre as estruturas.`,
        `a DRE começa pela receita líquida, as receitas e despesas financeiras ficam separadas do operacional e há a linha de resultado líquido das operações descontinuadas.`,
        `o CPC 26 veda a conciliação da receita bruta nas notas explicativas.`
      ],
      correct: 2,
      exp: `O CPC 26/47 começa pela receita líquida, separa o resultado financeiro e traz o resultado líquido de operações descontinuadas (CPC 31). A primeira alternativa descreve a Lei 6.404. Quem quiser apresentar a receita bruta pode conciliá-la nas notas explicativas.`
    }
  ];
})();
