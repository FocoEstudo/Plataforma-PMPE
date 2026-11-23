(function () {
  'use strict';
  window.PCPE_TOPIC_GUIDES = window.PCPE_TOPIC_GUIDES || {};
  window.PCPE_DEEPENING = window.PCPE_DEEPENING || {};
  window.PCPE_QUESTOES = window.PCPE_QUESTOES || {};
  const topic = 'Patrimônio, ativo, passivo e patrimônio líquido';
  const base = window.PCPE_TOPIC_GUIDES[topic] || {};
  window.PCPE_TOPIC_GUIDES[topic] = Object.assign({}, base, {
    lessons: [
      [
        `1 · Como funcionam as contas: débito e crédito por grupo`,
        `Para lançar corretamente, você precisa saber como cada grupo de contas se comporta. Ativo aumenta a débito e diminui a crédito. Passivo aumenta a crédito e diminui a débito. Patrimônio líquido (PL), como a conta Capital Social, também aumenta a crédito e diminui a débito. Receitas aumentam a crédito; despesas são lançadas a débito.`,
        `Compra de uma mercadoria a prazo: o estoque (ativo) aumenta, e isso se faz a débito; a dívida com o fornecedor (passivo) aumenta, e isso se faz a crédito. O total debitado é igual ao total creditado. Salários pagos: despesa de salário lançada a débito.`,
        `Essas regras são convenções da contabilidade; o caminho para a prova é decorá-las, e não tentar deduzi-las. Receitas e despesas são contas unilaterais: receita é conta credora e despesa é lançada a débito.`
      ],
      [
        `2 · Balanço patrimonial: aplicação x origem de recursos`,
        `O ativo é o lado da aplicação de recursos: é onde o dinheiro está aplicado, em bens e direitos. O passivo e o patrimônio líquido são o lado da origem: o passivo é o capital de terceiros, que financia a entidade, e o PL é o capital próprio, que vem dos sócios. Essa é uma definição didática; a formal está no CPC 00.`,
        `O capital aplicado em bens e direitos pode vir de duas fontes: capital próprio (PL) e capital de terceiros (passivo). O indicador passivo sobre PL mostra quanto dos bens e direitos é financiado com dinheiro emprestado e quanto é financiado com capital dos sócios. Quanto mais o endividamento supera o capital próprio, mais alavancada é a empresa.`,
        `Troca de termos: aplicação de recursos é o ativo; origem é passivo e PL. Capital próprio é o PL; capital de terceiros é o passivo; capital aplicado é o ativo. Na prática, o balanço não precisa mais ter ativo à esquerda e passivo/PL à direita, pois não há obrigação legal de lado.`
      ],
      [
        `3 · Equação fundamental da contabilidade e os termos da prova`,
        `A equação fundamental da contabilidade é Ativo = Passivo + Patrimônio Líquido. Ela decorre do método das partidas dobradas. Daí saem os termos equivalentes que as bancas usam: aplicação de recursos (ativo), origem de recursos (passivo e PL), capital próprio (PL), capital de terceiros (passivo) e capital aplicado (ativo).`,
        `Se o ativo é 500 e o passivo é 500, o PL é zero (500 = 500 + 0). Se o ativo é 500 e o passivo é zero, então o PL é 500: o ativo é totalmente financiado por capital próprio.`,
        `Sempre traduza o termo do enunciado para a equação: "capital de terceiros" é passivo, "capital próprio" é PL. Se a questão trocar os dois, a afirmação está errada.`
      ],
      [
        `4 · Passivo total: Lei 6.404/76 x pronunciamentos contábeis`,
        `Pela Lei 6.404/76 (art. 178), o lado direito do balanço, chamado passivo total, é dividido em passivo circulante, passivo não circulante e patrimônio líquido: o PL faz parte do passivo total. Já os pronunciamentos contábeis (normas internacionais) não fazem essa distinção: passivo é o passivo exigível, e PL é um grupo separado.`,
        `Questão no estilo da banca: "Segundo a Lei 6.404, o passivo é composto por passivo circulante, passivo não circulante e patrimônio líquido": correta. "Segundo os pronunciamentos contábeis, o passivo é composto pelo passivo e pelo PL": errada, porque, para as normas, são grupos separados.`,
        `Leia o fundamento citado no enunciado. Se for Lei 6.404, o PL entra na conta do passivo total; se for pronunciamento contábil (CPC), passivo e PL são grupos distintos.`
      ],
      [
        `5 · Patrimônio bruto, patrimônio líquido e situação líquida`,
        `Patrimônio bruto é o ativo. Quando você tira do ativo o passivo (o que a entidade deve), obtém o patrimônio líquido. Pela doutrina, o patrimônio líquido só existe quando a situação líquida é maior que zero. Situação líquida é a expressão mais abrangente: Ativo − Passivo.`,
        `Passivo de 200 e PL de 800: o ativo é 1.000 (800 + 200); o PL é positivo. Ativo de 500 e passivo de 700: PL de −200; é o passivo a descoberto. Ativo de 500 e passivo de 500: PL zero; é a situação líquida nula.`,
        `Doutrinariamente, patrimônio líquido negativo não existiria. Mas bancas como o CESPE já aceitam a expressão "patrimônio líquido negativo". Ativo e passivo nunca são negativos; o PL pode ser. Passivo a descoberto: obrigação sem fonte de recursos para pagar.`
      ],
      [
        `6 · Contas patrimoniais e contas de resultado`,
        `Contas patrimoniais são as que representam bens, direitos, obrigações e patrimônio líquido: ativo, passivo e PL. Contas de resultado são as receitas e as despesas. Essa separação é a chamada teoria patrimonialista.`,
        `Salário pago é uma despesa (conta de resultado); o valor devido a fornecedores é um passivo (conta patrimonial); o capital social é PL (conta patrimonial); a receita de vendas é conta de resultado.`,
        `Ativo, passivo e PL = patrimoniais; receita e despesa = resultado. O conteúdo já caiu em prova de concurso da Polícia Federal.`
      ],
      [
        `7 · Definições formais do CPC 00: ativo, passivo e patrimônio líquido`,
        `Ativo é um recurso econômico presente, controlado pela entidade como resultado de eventos passados; recurso econômico é um direito que tem o potencial de produzir benefício econômico. Passivo é uma obrigação presente da entidade de transferir um recurso econômico como resultado de eventos passados. Patrimônio líquido é o valor residual dos ativos da entidade depois de deduzidos todos os seus passivos.`,
        `Mercadoria em estoque é ativo: é um recurso controlado pela entidade, resultado de uma compra passada, e vai gerar benefício econômico quando for vendida, produzindo lucro. Conta de fornecedores é passivo: a entidade deve naquele momento, terá de transferir recurso (pagar) e a dívida nasceu de uma compra passada.`,
        `A definição de PL como valor residual coincide com a equação fundamental. Ativo, nessa definição, não é "bens e direitos": é recurso econômico controlado, resultado de eventos passados.`
      ],
      [
        `8 · Composição do patrimônio líquido: capital, reservas de capital e ações em tesouraria`,
        `O PL é formado por capital social, reservas de capital, ajustes de avaliação patrimonial, reservas de lucros, ações em tesouraria e prejuízos acumulados. Capital social é o dinheiro que os sócios entregam para a empresa funcionar; capital a realizar é a parte que ainda falta entregar. Reserva de capital reúne transações com sócios que não ficam no capital social e também não são receitas.`,
        `Uma ação tem valor patrimonial de 10, mas, como a empresa é muito boa, as pessoas pagam 15 na emissão. Os 5 de diferença são ágio e vão para a reserva de ágio na emissão de ações, que é reserva de capital.`,
        `Sempre que o nome for "reserva", é conta do PL. Ações em tesouraria são ações que a companhia compra dela mesma. Gastos com a emissão de ações, a partir de 2008, não são despesa do período.`
      ],
      [
        `9 · Lucro, reservas de lucros, dividendos e juros sobre capital próprio`,
        `O que faz o PL crescer é o lucro apurado na DRE; o dividendo, ao contrário, sai do PL e vai para o passivo. Hoje a sociedade anônima não pode manter saldo de lucros acumulados ao final do exercício: todo o lucro deve ser destinado (capitalização, reservas de lucros ou dividendos). Por isso a lei fala apenas em prejuízos acumulados.`,
        `Ilustração numérica: lucro líquido de 1.000, reserva legal de 50, reserva para contingências de 100 com reversão de 20 e reserva de incentivos fiscais de 30. Lucro líquido ajustado = 1.000 − 50 − 100 + 20 − 30 = 840. Com o estatuto omisso, o dividendo obrigatório é 50% de 840 = 420; se o estatuto for alterado depois, o mínimo é 25% de 840 = 210.`,
        `Reserva legal é a única obrigatória: 5% do lucro líquido do exercício, limitada a 20% do capital social realizado. Juros sobre capital próprio têm, contabilmente, o mesmo tratamento do dividendo: saem do PL e vão para o passivo.`
      ]
    ],
    practice: [
      `Como aumenta e diminui cada grupo de contas: ativo, passivo, patrimônio líquido, receitas e despesas?`,
      `Por que se diz que o ativo é a aplicação de recursos e que o passivo e o PL são a origem? O que mede o indicador passivo sobre patrimônio líquido?`,
      `Qual é a equação fundamental da contabilidade? Com ativo 500 e passivo 700, qual é o PL e como se chama essa situação?`,
      `Qual é a diferença entre o tratamento do passivo pela Lei 6.404 e pelos pronunciamentos contábeis?`,
      `Quais são as contas do PL e por que, hoje, o PL de uma S.A. não pode terminar o exercício com saldo de lucros acumulados?`
    ],
    answers: [
      `Ativo aumenta a débito e diminui a crédito. Passivo e PL aumentam a crédito e diminuem a débito. Receitas aumentam a crédito (contas credoras) e despesas são lançadas a débito.`,
      `Porque o ativo mostra onde os recursos foram aplicados (bens e direitos), enquanto o passivo (capital de terceiros) e o PL (capital próprio) mostram de onde vieram. O indicador passivo sobre PL mostra quanto da estrutura é financiada por terceiros em relação ao capital dos sócios.`,
      `Ativo = Passivo + PL. Com ativo 500 e passivo 700, o PL é −200. Doutrinariamente, é o passivo a descoberto: as obrigações superam o ativo e há passivo sem fonte de recursos para pagar.`,
      `Pela Lei 6.404, o passivo total é composto por passivo circulante, passivo não circulante e PL (o PL faz parte do passivo). Pelos pronunciamentos contábeis, passivo e PL são grupos separados.`,
      `As contas são capital social, reservas de capital, ajustes de avaliação patrimonial, reservas de lucros, ações em tesouraria e prejuízos acumulados. Desde os exercícios encerrados a partir de 2008, o lucro deve ser todo destinado (capitalização, reservas ou dividendos), de modo que a conta lucros acumulados não pode ficar com saldo.`
    ]
  });

  window.PCPE_DEEPENING[topic] = {
    1: [
      ['h', 'Por que decorar'],
      ['p', `A melhor forma de entender o funcionamento da contabilidade é conhecer o funcionamento das contas, e, para a prova, isso é decoreba. O ativo aumenta daquele jeito porque foi convencionado daquela forma, e o mesmo vale para o passivo. Contabilidade é uma ciência com convenções próprias; se você quiser entender os porquês, estude depois, mas, para resolver a prova, saiba o mecanismo.`],
      ['h', 'O quadro das contas'],
      ['ul', [
        `Ativo (bens e direitos): aumenta a débito; diminui a crédito.`,
        `Passivo (obrigações, como fornecedores): aumenta a crédito; diminui a débito.`,
        `Patrimônio líquido (capital próprio, capital dos sócios, como Capital Social): aumenta a crédito; diminui a débito.`,
        `Receitas (os ganhos, como receita de vendas): aumentam a crédito. São contas credoras.`,
        `Despesas (as perdas, como despesa de salário): são lançadas a débito.`
      ]],
      ['p', `Ativo é o oposto de passivo e PL: o que aumenta o ativo (débito) é o que diminui o passivo e o PL; o que aumenta passivo e PL (crédito) diminui o ativo. Receitas e despesas são contas unilaterais: não se lançam receitas dos dois lados, pois receita é ganho e fica do lado do crédito, enquanto despesa fica do lado do débito.`],
      ['h', 'Aplicação'],
      ['p', `Comprar mercadoria a prazo: debita-se Mercadorias (ativo aumenta a débito) e credita-se Fornecedores (passivo aumenta a crédito). Pagar o fornecedor: debita-se Fornecedores (passivo diminui a débito) e credita-se Caixa (ativo diminui a crédito). Em ambos os casos, o total debitado é igual ao total creditado.`],
      ['h', 'Resumo de revisão'],
      ['ul', [
        `Ativo: D aumenta, C diminui.`,
        `Passivo e PL: C aumenta, D diminui.`,
        `Receita: crédito. Despesa: débito.`,
        `Esse funcionamento é convenção: decore.`
      ]]
    ],
    2: [
      ['h', 'Os dois lados do balanço'],
      ['p', `O balanço patrimonial é dividido em ativo, passivo e patrimônio líquido. Na prática de ensino, o ativo fica do lado esquerdo e o passivo e o PL do lado direito; as empresas de hoje não são obrigadas a apresentar assim, e as demonstrações são feitas de forma corrida. O que importa é a ideia dos lados.`],
      ['ul', [
        `Ativo = lado da aplicação de recursos: é onde o dinheiro foi aplicado, nos bens e direitos.`,
        `Passivo = capital de terceiros: são terceiros que estão financiando a entidade.`,
        `PL = lado da origem de capital próprio: dinheiro que vem dos sócios.`
      ]],
      ['p', `Todo o dinheiro que vem de terceiros e dos sócios é aplicado nos bens e direitos, isto é, no ativo. Essa leitura é didática: a definição formal está no CPC 00 (veja a lição 7).`],
      ['h', 'Capital próprio e capital de terceiros'],
      ['p', `O capital aplicado em bens e direitos pode vir de duas fontes básicas: capital próprio, quando vem do PL, e capital de terceiros, quando vem do passivo (das obrigações). O indicador passivo sobre patrimônio líquido, ou seja, a composição do capital, indica quantos por cento dos bens e direitos estão sendo financiados com capital de terceiros e quantos com capital próprio. Empresas com estrutura de capital mais conservadora têm menos dívida; empresa alavancada é a que tem endividamento muito maior do que o capital próprio.`],
      ['h', 'Armadilhas'],
      ['ul', [
        `Aplicação = ativo. Origem = passivo + PL.`,
        `Capital de terceiros = passivo; capital próprio = PL.`,
        `Passivo/PL mede a composição do capital (terceiros x próprio), e não a liquidez.`
      ]],
      ['h', 'Resumo de revisão'],
      ['ul', [
        `Ativo: aplicação de recursos (bens e direitos).`,
        `Passivo: capital de terceiros (origem).`,
        `PL: capital próprio, dos sócios (origem).`,
        `Passivo sobre PL: quanto é financiado por terceiros em relação ao capital próprio.`
      ]]
    ],
    3: [
      ['h', 'A equação'],
      ['p', `A equação fundamental da contabilidade é: Ativo = Passivo + Patrimônio Líquido. Anote que ela é uma decorrência do método das partidas dobradas.`],
      ['h', 'Termos equivalentes'],
      ['ul', [
        `Ativos: bens e direitos.`,
        `Passivos: obrigações.`,
        `Patrimônio líquido: capital próprio dos sócios.`,
        `Aplicação de recursos: ativo.`,
        `Origem de recursos: passivo e PL.`,
        `Capital próprio: patrimônio líquido.`,
        `Capital de terceiros: passivo.`,
        `Capital aplicado: ativo.`
      ]],
      ['h', 'Cálculos que a equação permite'],
      ['ul', [
        `PL = Ativo − Passivo.`,
        `Passivo = Ativo − PL.`,
        `Ativo 500 e passivo 500: PL = 500 − 500 = 0.`,
        `Ativo 500 e passivo zero: PL = 500 (ativo = PL).`,
        `Passivo 200 e PL 800: Ativo = 200 + 800 = 1.000.`
      ]],
      ['h', 'Como cai em prova'],
      ['p', `A banca troca os termos: "o capital de terceiros é registrado no patrimônio líquido" (errado, é passivo), ou "origem de recursos é o ativo" (errado, é passivo e PL). Sempre volte à equação e à lista de equivalências.`],
      ['h', 'Resumo de revisão'],
      ['ul', [
        `Ativo = Passivo + PL (decorre das partidas dobradas).`,
        `Aplicação = ativo; origem = passivo + PL.`,
        `Capital próprio = PL; capital de terceiros = passivo; capital aplicado = ativo.`
      ]]
    ],
    4: [
      ['h', 'O que diz a Lei 6.404/76'],
      ['p', `A Lei 6.404/76, a lei das sociedades por ações (art. 178), classifica as contas do passivo nos seguintes grupos: passivo circulante, passivo não circulante e patrimônio líquido. O passivo circulante reúne as obrigações de curto prazo; o passivo não circulante, as de longo prazo. A lei trata o lado direito do balanço como passivo total, e o PL faz parte dele.`],
      ['h', 'O que dizem os pronunciamentos contábeis'],
      ['p', `As normas internacionais, mais atualizadas, e os pronunciamentos contábeis não tratam dessa forma. Para eles, passivo é o passivo exigível (o que são as reivindicações de terceiros) e patrimônio líquido é patrimônio líquido: duas categorias separadas. O PL não é "passivo".`],
      ['p', `Anote: pela Lei 6.404, o passivo total é composto tanto pelo passivo exigível quanto pelo PL, que é o capital dos sócios. Para os pronunciamentos contábeis, não há essa distinção: passivo é exigível, PL é PL.`],
      ['h', 'Aplicação em prova'],
      ['ul', [
        `"Segundo a Lei 6.404, o passivo é composto pelo passivo circulante, pelo passivo não circulante e pelo patrimônio líquido": CORRETA.`,
        `"Segundo os pronunciamentos contábeis e as normas internacionais, o passivo é composto pelo passivo e pelo PL": ERRADA, porque a norma internacional trata como grupos separados.`
      ]],
      ['h', 'Resumo de revisão'],
      ['ul', [
        `Lei 6.404 (art. 178): passivo total = PC + PNC + PL.`,
        `CPC/normas internacionais: passivo (exigível) e PL são grupos separados.`,
        `Sempre confirme qual fonte o enunciado cita.`
      ]]
    ],
    5: [
      ['h', 'Patrimônio bruto e patrimônio líquido'],
      ['p', `Na contabilidade existe o chamado patrimônio bruto, que é o ativo. Quando você pega o ativo (bens e direitos) e retira o que deve (o passivo), obtém o patrimônio líquido. Doutrinariamente, o patrimônio líquido só existe quando a situação líquida é maior do que zero. A situação líquida é uma expressão mais abrangente, que pode ser positiva, nula ou negativa.`],
      ['p', `A ESAF cobrou esse ponto (auditor fiscal da Receita Federal, 2012) em uma questão confusa: para ser chamado de patrimônio líquido, em tese, tem de ser maior que zero. Em contrapartida, o CESPE já aceitou a expressão "patrimônio líquido negativo". Portanto, se cair na prova, leia o contexto.`],
      ['h', 'Os tipos de situação líquida'],
      ['ol', [
        `Ativo maior que passivo: PL positivo. Exemplo: passivo de 200 e PL de 800; o ativo é 1.000. É a situação das empresas com estrutura de capital conservadora: patrimônio líquido robusto e dívida pequena.`,
        `Ativo menor que passivo: PL negativo. Exemplo: ativo de 500 e passivo de 700; PL = 500 − 700 = −200. Doutrinariamente, é o passivo a descoberto: há obrigação sem fonte de recursos para pagar.`,
        `Ativo igual ao passivo: PL zero. Exemplo: ativo e passivo de 500; PL = 0. É a situação líquida nula.`
      ]],
      ['p', `Ainda: se o ativo é igual ao PL (por exemplo, 500 e 500), o passivo é zero.`],
      ['h', 'Observação'],
      ['p', `Ativo e passivo não podem ser negativos, mas o PL pode. Isso explica por que a expressão "passivo a descoberto" nasce quando o passivo supera o ativo.`],
      ['h', 'Resumo de revisão'],
      ['ul', [
        `Patrimônio bruto = ativo.`,
        `PL = Ativo − Passivo (situação líquida).`,
        `Ativo > passivo: PL positivo. Ativo < passivo: passivo a descoberto (PL negativo). Ativo = passivo: situação líquida nula.`,
        `Doutrina: só há PL se a situação líquida for maior que zero; o CESPE aceita "PL negativo".`
      ]]
    ],
    6: [
      ['h', 'Dois grandes grupos de contas'],
      ['p', `Na contabilidade, as contas se dividem em patrimoniais e de resultado. Contas patrimoniais representam bens, direitos, obrigações e o patrimônio líquido da empresa: ativo, passivo e PL. Contas de resultado são as receitas e as despesas. Essa divisão é a chamada teoria patrimonialista.`],
      ['ul', [
        `Contas patrimoniais: ativo, passivo e PL.`,
        `Contas de resultado: receitas e despesas.`
      ]],
      ['h', 'Como classificar'],
      ['ul', [
        `Fornecedores: passivo, conta patrimonial.`,
        `Capital Social: PL, conta patrimonial.`,
        `Caixa e Mercadorias: ativo, contas patrimoniais.`,
        `Receita de Vendas e Despesa de Salário: contas de resultado.`
      ]],
      ['p', `As contas de resultado apuram o lucro ou o prejuízo, que é depois transferido ao PL (veja a lição 9). Esse ponto já caiu no último concurso da Polícia Federal, então vale reforçar: a pergunta é simples, ativo, passivo e PL são patrimoniais; receitas e despesas são de resultado.`],
      ['h', 'Resumo de revisão'],
      ['ul', [
        `Teoria patrimonialista: patrimoniais (ativo, passivo, PL) x de resultado (receitas, despesas).`,
        `O resultado das contas de resultado vai para o PL.`
      ]]
    ],
    7: [
      ['h', 'A definição formal (CPC 00)'],
      ['p', `Até aqui, você usou a definição didática "ativo = bens e direitos". A definição formal está no CPC 00:`],
      ['ul', [
        `Ativo: recurso econômico presente controlado pela entidade como resultado de eventos passados. Recurso econômico é um direito que tem o potencial de produzir benefício econômico.`,
        `Passivo: obrigação presente da entidade de transferir um recurso econômico como resultado de eventos passados.`,
        `Patrimônio líquido: valor residual dos ativos da entidade depois de deduzidos todos os seus passivos.`
      ]],
      ['h', 'Aplicando os critérios'],
      ['p', `Mercadoria como ativo: (1) é recurso controlado pela entidade, sim; (2) resultado de evento passado, sim: ela foi comprada; (3) vai gerar benefício econômico, sim: quando vendida, gera lucro. Logo, é ativo.`],
      ['p', `Conta de fornecedores como passivo: (1) obrigação presente, sim: a entidade deve naquele momento; (2) vai transferir um recurso econômico, sim: terá de pagar o fornecedor; (3) resultado de evento passado, sim: a compra de mercadoria feita lá atrás. Logo, é passivo.`],
      ['p', `Patrimônio líquido: é o que sobra do ativo depois de retirar todas as obrigações, o que coincide com a equação fundamental e com a estrutura conceitual básica da contabilidade.`],
      ['h', 'Resumo de revisão'],
      ['ul', [
        `Ativo: recurso econômico presente, controlado, de eventos passados.`,
        `Recurso econômico: direito com potencial de produzir benefício econômico.`,
        `Passivo: obrigação presente de transferir recurso econômico, de eventos passados.`,
        `PL: valor residual (ativo − passivos).`
      ]]
    ],
    8: [
      ['h', 'As contas do patrimônio líquido'],
      ['p', `O PL é formado por: capital social, reservas de capital, ajustes de avaliação patrimonial, reservas de lucros, ações em tesouraria e prejuízos acumulados. Sempre que o nome da conta for "reserva", você sabe que é uma conta do PL.`],
      ['ul', [
        `Capital social: o capital dos sócios, o dinheiro que os sócios entregam para a empresa funcionar.`,
        `Capital a realizar: o que os sócios ainda não integralizaram, ou seja, o que falta entregar.`,
        `Reserva de capital: transações com sócios que ficam no PL; não ficam no capital social, mas também não são receitas.`,
        `Ajuste de avaliação patrimonial: conta inserida pela Lei 11.638.`,
        `Reservas de lucros: fatia do lucro retida no PL (lição 9).`,
        `Prejuízos acumulados.`
      ]],
      ['h', 'Reservas de capital'],
      ['ul', [
        `Ágio na emissão de ações: o valor patrimonial da ação é 10, mas as pessoas pagam 15 por ela. Os 5 de diferença são o ágio e ficam na reserva de capital. O mercado confia na empresa e paga mais do que o valor patrimonial.`,
        `Produto da alienação de partes beneficiárias: títulos que dão direito a uma participação nos lucros da companhia.`,
        `Produto da alienação de bônus de subscrição: título pelo qual se paga um valor antecipado para ter preferência de subscrever capital.`,
        `Prêmio na emissão de debêntures.`
      ]],
      ['p', `A subvenção governamental era reserva de capital, mas hoje não é mais: é lançada como receita na DRE e depois vai para o PL como reserva de incentivos fiscais (lição 9). Os gastos com a emissão de ações, a partir de 2008, não são despesa do período: reduzem o valor captado no PL.`],
      ['h', 'Ações em tesouraria'],
      ['p', `São ações que a companhia compra dela mesma, retirando-as de circulação. Com menos ações em circulação, o lucro é dividido entre menos acionistas, e o pedaço de cada um aumenta. Também servem para remunerar executivos com ações (pagamento baseado em ações, CPC 10), alinhando os interesses da administração aos dos acionistas. Nos Estados Unidos, onde os dividendos são tributados, a recompra é uma forma de remunerar sócios.`],
      ['h', 'Resumo de revisão'],
      ['ul', [
        `PL: capital social, reservas de capital, ajustes de avaliação patrimonial, reservas de lucros, ações em tesouraria, prejuízos acumulados.`,
        `"Reserva" é sempre PL.`,
        `Ágio na emissão: ação de 10 emitida por 15 gera 5 de reserva de capital.`,
        `Subvenção governamental hoje passa pela DRE como receita.`
      ]]
    ],
    9: [
      ['h', 'Lucro cresce o PL; dividendo o reduz'],
      ['p', `Muita gente confunde: o que faz o PL da empresa crescer é o lucro apurado na DRE. O dividendo sai do PL para o passivo: é a fatia do lucro que vai para o bolso dos sócios. Empresas de crescimento podem pagar pouco ou nenhum dividendo e, ainda assim, crescer, porque o que enriquece a empresa é o lucro.`],
      ['h', 'O lucro tem de ser destinado'],
      ['p', `Antes das alterações legais, existia a conta lucros acumulados. Para sociedades anônimas, nos exercícios encerrados a partir de 2008, a companhia não pode mais ter saldo de lucros acumulados ao final do exercício de forma injustificada. A conta continua existindo (o lucro da DRE é transferido para ela), mas ela não pode ficar com saldo: o lucro deve ser todo destinado, de três formas:`],
      ['ul', [
        `Incorporar parcela ao capital social (bonificação).`,
        `Constituir reservas de lucros.`,
        `Pagar dividendos, que é a remuneração do capital dos sócios.`
      ]],
      ['p', `Por isso a lei fala somente em prejuízos acumulados, que podem ficar com saldo.`],
      ['h', 'Reservas de lucros'],
      ['ul', [
        `Reserva legal: única obrigatória pela Lei 6.404. Constituída pela destinação de 5% do lucro líquido do exercício, limitada a 20% do capital social realizado. Há ainda o limite facultativo: quando reserva legal mais reservas de capital atingem 30% do capital social realizado.`,
        `Reservas estatutárias: previstas no estatuto, que deve indicar os critérios e o limite.`,
        `Reserva para contingências: guarda parte do lucro para compensar uma perda futura julgada provável e cujo valor possa ser estimado (por exemplo, por seca ou enchente).`,
        `Reserva de incentivos fiscais: parte do lucro relativa à subvenção governamental. Antes era reserva de capital; hoje a subvenção passa pela DRE e depois forma essa reserva.`,
        `Reserva de retenção de lucros (também chamada de reserva orçamentária ou de investimentos): empresas de crescimento retêm lucro para investir.`,
        `Reserva de lucros a realizar: quando o lucro inclui receitas ainda não recebidas (a prazo) e o dividendo a pagar exige caixa, a diferença pode ser retida nessa reserva.`,
        `Reserva especial para dividendo obrigatório não distribuído: quando a situação da companhia não permite a distribuição.`
      ]],
      ['h', 'Dividendo obrigatório'],
      ['p', `O estatuto pode fixar o dividendo no percentual que quiser (art. 202). Se o estatuto for omisso, o dividendo é de 50% do lucro líquido ajustado, calculado assim:`],
      ['p', `Lucro líquido ajustado = lucro líquido do exercício − reserva legal − reserva para contingências + reversão de reserva para contingências − reserva de incentivos fiscais (esta, facultativa).`],
      ['p', `Se o estatuto for omisso e depois for alterado para fixar o dividendo, o mínimo é de 25% do lucro líquido ajustado.`],
      ['p', `Exemplo numérico (ilustração): lucro líquido do exercício 1.000; reserva legal 50; reserva para contingências 100; reversão 20; reserva de incentivos fiscais 30. Lucro líquido ajustado = 1.000 − 50 − 100 + 20 − 30 = 840. Dividendo com estatuto omisso: 50% × 840 = 420. Mínimo com estatuto alterado depois: 25% × 840 = 210.`],
      ['h', 'Juros sobre capital próprio'],
      ['p', `Os juros sobre capital próprio são outra forma de remunerar o sócio. Contabilmente, têm o mesmo tratamento do dividendo: são destinação do lucro, saem do PL e vão para o passivo.`],
      ['h', 'Resumo de revisão'],
      ['ul', [
        `Lucro (DRE) aumenta o PL; dividendo e JCP saem do PL e vão para o passivo.`,
        `Sem saldo de lucros acumulados no fim do exercício (S.A., a partir de 2008); prejuízo acumulado pode ficar.`,
        `Reserva legal: 5% do lucro líquido, limite 20% do capital social realizado; é a única obrigatória.`,
        `Estatuto omisso: 50% do lucro líquido ajustado; fixado depois: mínimo de 25%.`
      ]]
    ]
  };

  window.PCPE_QUESTOES[topic] = [
    {
      text: `Sobre o funcionamento das contas, assinale a alternativa correta.`,
      options: [
        `Ativo aumenta a crédito e diminui a débito.`,
        `Passivo aumenta a débito e diminui a crédito.`,
        `O patrimônio líquido, como a conta Capital Social, aumenta a crédito e diminui a débito.`,
        `Receitas aumentam a débito e despesas, a crédito.`
      ],
      correct: 2,
      exp: `PL (e passivo) aumentam a crédito e diminuem a débito. O ativo faz o contrário (aumenta a débito); receitas são contas credoras e despesas são lançadas a débito.`
    },
    {
      text: `Considerando a estrutura do balanço patrimonial, é correto afirmar que:`,
      options: [
        `o ativo representa a aplicação de recursos, e o passivo e o PL representam a origem, sendo o passivo capital de terceiros e o PL, capital próprio.`,
        `o ativo representa a origem de recursos e o passivo representa a aplicação.`,
        `o PL representa o capital de terceiros e o passivo, o capital próprio.`,
        `ativo e PL formam o capital de terceiros.`
      ],
      correct: 0,
      exp: `O ativo é a aplicação de recursos; passivo (terceiros) e PL (sócios) são a origem. As demais trocam ou misturam os conceitos.`
    },
    {
      text: `Uma empresa tem passivo de 200 e patrimônio líquido de 800. O valor do ativo e a classificação da situação líquida são:`,
      options: [
        `ativo de 600; passivo a descoberto.`,
        `ativo de 1.000; situação líquida positiva (PL maior que zero).`,
        `ativo de 800; situação líquida nula.`,
        `ativo de 1.600; passivo a descoberto.`
      ],
      correct: 1,
      exp: `Ativo = Passivo + PL = 200 + 800 = 1.000. Como o ativo é maior que o passivo, o PL é positivo. Passivo a descoberto ocorre quando o passivo supera o ativo, e não é o caso.`
    },
    {
      text: `Uma entidade possui ativo de 500 e passivo de 700. Sobre essa situação, assinale a alternativa correta.`,
      options: [
        `O PL é positivo em 200.`,
        `A situação líquida é nula.`,
        `O PL é negativo em 200, caracterizando passivo a descoberto.`,
        `O PL é de 1.200.`
      ],
      correct: 2,
      exp: `PL = 500 − 700 = −200. Quando o passivo supera o ativo, há passivo a descoberto: obrigação sem fonte de recursos. A situação nula exigiria ativo igual ao passivo.`
    },
    {
      text: `Segundo a Lei 6.404/76 (art. 178), as contas do passivo são classificadas nos seguintes grupos:`,
      options: [
        `passivo circulante e passivo não circulante, apenas, sendo o PL um grupo à parte.`,
        `passivo circulante, passivo não circulante e patrimônio líquido.`,
        `passivo exigível e ativo a descoberto.`,
        `capital próprio e capital aplicado.`
      ],
      correct: 1,
      exp: `Para a Lei 6.404, o passivo total é composto por PC, PNC e PL. É o pronunciamento contábil que trata o PL como grupo separado do passivo.`
    },
    {
      text: `Ativo, passivo e PL são contas patrimoniais, e receitas e despesas são contas de resultado. Considerando essa classificação, a conta Despesa de Salário e a conta Capital Social são, respectivamente:`,
      options: [
        `de resultado e patrimonial.`,
        `patrimonial e de resultado.`,
        `ambas de resultado.`,
        `ambas patrimoniais.`
      ],
      correct: 0,
      exp: `Despesa de salário é despesa (resultado); Capital Social integra o PL (patrimonial).`
    },
    {
      text: `Segundo o CPC 00, patrimônio líquido é:`,
      options: [
        `a obrigação presente da entidade de transferir recurso econômico.`,
        `um recurso econômico controlado pela entidade.`,
        `o valor residual dos ativos da entidade depois de deduzidos todos os seus passivos.`,
        `o conjunto de bens e direitos da entidade.`
      ],
      correct: 2,
      exp: `PL é o valor residual do ativo após dedução de todos os passivos. A primeira alternativa define passivo; a segunda, ativo; a quarta é a ideia didática de ativo.`
    },
    {
      text: `A empresa comprou mercadorias que controla, resultado de uma compra feita anteriormente, e espera obter lucro ao vendê-las. Quanto à definição do CPC 00, as mercadorias:`,
      options: [
        `não são ativo, pois não são bens imóveis.`,
        `são passivo, porque resultam de evento passado.`,
        `são ativo, pois são recurso controlado, resultado de evento passado, com potencial de gerar benefício econômico.`,
        `são patrimônio líquido, porque geram lucro.`
      ],
      correct: 2,
      exp: `Atendem aos três critérios do ativo: controle, evento passado e potencial de benefício econômico. Passivo é obrigação; PL é valor residual.`
    },
    {
      text: `Uma ação com valor patrimonial de 10 é emitida por 15, pois o mercado confia na empresa. A diferença de 5 deve ser registrada:`,
      options: [
        `como receita na demonstração do resultado.`,
        `como despesa de emissão no período.`,
        `como reserva de lucros.`,
        `como reserva de capital (ágio na emissão de ações).`
      ],
      correct: 3,
      exp: `O ágio na emissão de ações é reserva de capital: transação com sócios que não é receita nem fica no capital social. Não é reserva de lucros, pois não decorre do lucro.`
    },
    {
      text: `Lucro líquido do exercício: 1.000; reserva legal: 50; reserva para contingências: 100, com reversão de 20; reserva de incentivos fiscais: 30. Com o estatuto omisso, qual é o dividendo obrigatório?`,
      options: [
        `500.`,
        `420.`,
        `210.`,
        `250.`
      ],
      correct: 1,
      exp: `Lucro líquido ajustado = 1.000 − 50 − 100 + 20 − 30 = 840; 50% de 840 = 420. 500 aplicaria o percentual sobre o lucro sem ajuste; 210 e 250 correspondem a 25% (de 840 ou de 1.000), que é o mínimo apenas quando o estatuto é alterado depois.`
    }
  ];
})();
