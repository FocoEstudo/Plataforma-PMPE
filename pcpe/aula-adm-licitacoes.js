(function () {
  'use strict';
  window.PCPE_TOPIC_GUIDES = window.PCPE_TOPIC_GUIDES || {};
  window.PCPE_DEEPENING = window.PCPE_DEEPENING || {};
  window.PCPE_QUESTOES = window.PCPE_QUESTOES || {};
  const topic = 'Licitações, contratos administrativos e contratação direta';
  const base = window.PCPE_TOPIC_GUIDES[topic] || {};
  window.PCPE_TOPIC_GUIDES[topic] = Object.assign({}, base, {
    lessons: [
      [
        `Aula 1 · Lei nº 14.133/2021: alcance, vigência e transição`,
        `A Lei nº 14.133/2021, a nova Lei de Licitações e Contratos Administrativos, estabelece normas gerais de licitação e contratação para as administrações públicas diretas, autárquicas e fundacionais da União, dos Estados, do Distrito Federal e dos Municípios. Ela substituiu a Lei nº 8.666/1993 (a "Lei de Licitações"), a Lei do Pregão (Lei nº 10.520/2002) e o Regime Diferenciado de Contratações, o RDC (arts. 1º a 47-A da Lei nº 12.462/2011). Ela é a base da disciplina e aparece no conteúdo da maioria dos concursos.`,
        `Como não houve vacatio legis, a lei entrou em vigor na data da publicação (1º/4/2021), mas a revogação das normas antigas ficou diferida. Nesse intervalo, o órgão escolhia o regime: licitava pela Lei 14.133 ou pelas leis antigas, sem poder misturar os dois regimes dentro de um mesmo procedimento.`,
        `Muito material fala em "dois anos" de transição (abril de 2021 a abril de 2023). Esse foi o texto original do art. 193, II, mas o prazo foi prorrogado e a revogação da Lei 8.666, da Lei 10.520 e do RDC ocorreu em 30/12/2023. Hoje, só a Lei 14.133 rege novas licitações. A regra que importa para a prova é a vedação de mistura de regimes no mesmo procedimento.`
      ],
      [
        `Aula 1 · Modalidades de licitação`,
        `Modalidade é o tipo de procedimento licitatório definido em lei. A Lei 14.133 (art. 28) prevê cinco modalidades: pregão, concorrência, concurso, leilão e diálogo competitivo. A grande novidade é o diálogo competitivo; foram extintos o convite e a tomada de preços. É vedado criar outras modalidades ou combinar as existentes (art. 28, § 2º).`,
        `Pregão: obrigatório para bens e serviços comuns (padrões de desempenho e qualidade definidos objetivamente por especificações usuais de mercado). Concorrência: bens e serviços especiais e obras e serviços de engenharia. Concurso: trabalho técnico, científico ou artístico, com prêmio ou remuneração ao vencedor. Leilão: alienação de bens. Diálogo competitivo: objetos complexos que exigem soluções inovadoras, com debates entre licitantes previamente selecionados por critérios objetivos e proposta final ao término do diálogo.`,
        `"Concurso", na Lei de Licitações, NÃO é o concurso público para provimento de cargo. É a modalidade para escolher trabalho técnico, científico ou artístico. A prova explora essa confusão. Outra pegadinha: tomada de preços e convite não existem mais na Lei 14.133.`
      ],
      [
        `Aula 1 · Critérios de julgamento e fases da licitação`,
        `Critério de julgamento é o parâmetro usado para escolher a melhor proposta. A Lei 14.133 (art. 33) traz seis: menor preço, maior desconto, melhor técnica ou conteúdo artístico, técnica e preço, maior lance (no leilão) e maior retorno econômico. Os critérios novos têm muita chance de cobrança. Também mudou a ordem das fases: a regra agora é julgar primeiro e habilitar depois, com fase recursal única.`,
        `Sequência das fases na nova lei (art. 17): preparatória; divulgação do edital; apresentação de propostas e lances, quando for o caso; julgamento; habilitação; recursal; homologação. Na Lei 8.666, a habilitação vinha antes do julgamento das propostas. Na Lei 14.133, seguindo o modelo do pregão, a regra é julgar e depois habilitar.`,
        `Cuidado com a ordem: na Lei 8.666, habilitação antes do julgamento; na Lei 14.133, julgamento antes da habilitação. A habilitação antes é exceção, só por ato motivado e se prevista no edital.`
      ],
      [
        `Aula 2 · Contratação direta: conceito, espécies e responsabilidade`,
        `Contratação direta é a contratação feita sem licitação. É um gênero com duas espécies: a dispensa (licitação viável, mas razões legais afastam a sua realização) e a inexigibilidade (inviabilidade de competição). Quando a contratação direta é indevida e ocorre com dolo, fraude ou erro grosseiro, o contratado e o agente público responsável respondem solidariamente pelo dano ao erário, sem prejuízo de outras sanções (art. 73).`,
        `Antes das mudanças da Lei nº 14.230/2021 na Lei de Improbidade, a jurisprudência do STJ entendia que a simples contratação direta indevida já configurava improbidade. Isso acabou: hoje, a contratação direta indevida só enseja improbidade com dano patrimonial efetivo (art. 10, VIII, da Lei 8.429/92). No art. 11, V, exige-se a finalidade de obter benefício próprio ou de terceiro.`,
        `Contratação direta não é sinônimo de ilegalidade nem de improbidade automática. Ela é lícita nas hipóteses legais, e mesmo a indevida só vira improbidade se houver o elemento exigido (dano efetivo no art. 10; benefício próprio ou de terceiro no art. 11, V).`
      ],
      [
        `Aula 2 · Dispensa: dispensável x dispensada e dispensa por valores`,
        `A dispensa se divide em licitação dispensável (art. 75), em que a licitação é possível e a lei deixa a decisão à análise discricionária do gestor, e licitação dispensada (art. 76), em que a competição é possível, mas a lei veda a licitação: ato vinculado. Em ambos os casos o rol é taxativo. A que mais cai em prova é a dispensável do art. 75. As dispensas por valor estão nos incisos I e II.`,
        `Caso das duas obras: uma unidade gestora fez, no exercício, uma obra de R$ 80.000, dentro do limite do inciso I (então fixado em R$ 125.451,15). Se fizer no mesmo exercício outra obra do mesmo objeto, também de R$ 80.000, a segunda não pode ser dispensada, porque a soma ultrapassa o limite. Isso é o fracionamento, ilegal como regra.`,
        `Os valores da lei (R$ 100 mil e R$ 50 mil) não são mais os aplicados: são atualizados anualmente por decreto do Presidente da República (art. 182). Em 2026: R$ 130.984,20 e R$ 65.492,11. Exceção ao somatório: manutenção de veículos próprios, incluindo peças, até pouco mais de R$ 10 mil (art. 75, § 7º), o fracionamento lícito.`
      ],
      [
        `Aula 2 · Outras dispensas: deserta, fracassada, guerra, emergência e comissão técnica`,
        `Além dos valores, caem muito a licitação deserta e fracassada (art. 75, III), os casos de guerra, estado de defesa, estado de sítio, intervenção federal e grave perturbação da ordem (art. 75, VII), a dispensa emergencial (art. 75, VIII) e a contratação de profissionais para compor a comissão de avaliação de critérios de técnica, quando se tratar de profissional técnico de notória especialização (art. 75, XIII). Como o art. 75 tem muitos incisos, você não memoriza tudo: leia as hipóteses e resolva muitas questões para ver as mais cobradas.`,
        `Deserta: não surgiram licitantes interessados. Fracassada: não houve propostas válidas ou os preços foram manifestamente superiores aos de mercado. Qualquer uma só leva à dispensa se a contratação mantiver todas as condições do edital e a licitação tiver sido realizada há menos de um ano. Mudou as condições ou passou de um ano? Tem que licitar de novo.`,
        `Na emergência, a contratação é só para os bens necessários e para as parcelas de obras e serviços que possam ser concluídas em até um ano, vedadas a prorrogação e a recontratação da mesma empresa com base no inciso. Segundo o STF (ADI 6890), a vedação incide na mesma emergência que extrapole o prazo de um ano; a empresa pode participar de licitação ou ser contratada por outro fundamento legal ou por nova emergência.`
      ],
      [
        `Aula 2 · Inexigibilidade (art. 74)`,
        `Inexigibilidade é a contratação direta fundada na inviabilidade de competição. Não dá para competir, e por isso o rol do art. 74 é exemplificativo ("em especial"). Os incisos I a V tratam de: fornecedor, representante comercial ou produtor exclusivo; profissional do setor artístico consagrado; serviços técnicos especializados de natureza predominantemente intelectual com notória especialização; objetos contratados por credenciamento; aquisição ou locação de imóvel de características singulares.`,
        `Artista: o profissional do setor artístico consagrado pela opinião pública ou pela crítica especializada pode ser contratado diretamente ou por empresário exclusivo. Empresário exclusivo é quem tem documento de exclusividade permanente e contínua de representação no país ou em estado específico. Empresário com representação restrita a evento ou local específico (uma casa de show, uma feira) NÃO serve.`,
        `Pegadinha clássica: comissão de avaliação de critérios de técnica com profissional técnico de notória especialização é DISPENSA (art. 75, XIII). Já serviços técnicos especializados de natureza predominantemente intelectual com profissionais ou empresas de notória especialização são INEXIGIBILIDADE (art. 74, III), vedada para publicidade e divulgação. A locação ou compra de imóvel singular, dispensa na Lei 8.666, é inexigibilidade na Lei 14.133.`
      ],
      [
        `Aula 2 · Procedimento: inversão de fases, recurso único e participação social`,
        `O art. 17 fixa as fases da licitação. Como regra, apresentam-se propostas e lances, julga-se, e só depois se habilita, em regra apenas o vencedor. Excepcionalmente a habilitação pode anteceder a apresentação de propostas e o julgamento (inversão de fases), caso em que todos os licitantes têm os documentos analisados. A fase recursal é única, mesmo com inversão. Audiência pública (art. 21) e consulta pública são facultativas, embora recomendáveis.`,
        `Audiência pública: evento em dia e hora determinados, presencial ou a distância, convocado com antecedência mínima de 8 dias úteis. Consulta pública: período de tempo dentro do qual os interessados enviam sugestões, sem evento. As duas materializam a administração consensual, que abre as portas à população diretamente afetada para contribuir na decisão.`,
        `Antes da 14.133 a lei falava em audiência pública obrigatória para grandes licitações; agora não há obrigatoriedade, e o verbo da lei é "poderá". Se a questão disser que a audiência é obrigatória, é pegadinha. E se disser que a fase recursal se repete após a habilitação, também: ela é única.`
      ],
      [
        `Aula 2 · Matriz de riscos`,
        `A matriz de riscos (art. 6º, XXVII) é a cláusula contratual definidora de riscos e responsabilidades entre as partes e caracterizadora do equilíbrio econômico-financeiro inicial do contrato, quanto ao ônus financeiro de eventos supervenientes à contratação. Ela diz quais riscos são do contratante, quais são do contratado e quais são compartilhados. Mantidos os riscos com quem foi atribuído, o contrato está equilibrado.`,
        `Se um risco tributário, por exemplo, foi alocado à administração, mas acaba sendo suportado pelo contratado, o contrato fica desequilibrado, porque o risco deveria ser da administração. Por isso a alocação deve ser eficiente: atribuir todos os riscos ao contratado desvaloriza a licitação, pois risco é preço (ele cobrará mais caro ou oferecerá menos).`,
        `Como regra a matriz é facultativa (art. 22, caput: "poderá contemplar"). É obrigatória em obras e serviços de grande vulto e nas contratações integrada e semi-integrada (art. 22, § 3º). Nestas, os riscos de fatos supervenientes ligados à escolha da solução de projeto básico pelo contratado devem ser alocados a ele (art. 22, § 4º).`
      ]
    ],
    practice: [
      `Quais leis a Lei nº 14.133/2021 substituiu, e o que acontecia durante o período de transição quanto à escolha do regime?`,
      `Quais são as modalidades de licitação da Lei 14.133, quais foram extintas e para que serve o diálogo competitivo?`,
      `Em que ordem ocorrem as fases da licitação na Lei 14.133, em que difere da Lei 8.666 e como funciona a inversão de fases e a fase recursal?`,
      `Diferencie dispensa e inexigibilidade e explique, com o caso das duas obras, como se aferem os valores do art. 75, I e II.`,
      `O que é a matriz de riscos, quando é obrigatória e por que se diz que "risco é preço"?`
    ],
    answers: [
      `Substituiu a Lei 8.666/1993, a Lei do Pregão (10.520/2002) e o RDC (Lei 12.462/2011, arts. 1º a 47-A). A lei entrou em vigor na publicação, mas a revogação das antigas foi diferida; nesse intervalo o órgão escolhia o regime, sendo vedado misturar os regimes no mesmo procedimento. A revogação ocorreu em 30/12/2023 (art. 193, II, com prazo originalmente de dois anos).`,
      `Pregão, concorrência, concurso, leilão e diálogo competitivo. Foram extintos o convite e a tomada de preços. O diálogo competitivo serve a obras, serviços e compras complexos que exigem soluções inovadoras: licitantes previamente selecionados por critérios objetivos dialogam com a administração para desenvolver alternativas e, ao final, apresentam a proposta final.`,
      `Preparatória, divulgação do edital, propostas e lances, julgamento, habilitação, recursal e homologação. Na 8.666 a habilitação vinha antes do julgamento; na 14.133 a regra é julgar e depois habilitar (em regra só o vencedor). Por ato motivado e previsão no edital, a habilitação pode vir antes (inversão), e então todos são analisados. A fase recursal é única, ainda que haja inversão.`,
      `Dispensa: licitação viável, mas razões legais autorizam não realizá-la (art. 75, dispensável, discricionária; art. 76, dispensada, vinculada). Inexigibilidade: inviabilidade de competição (art. 74, rol exemplificativo). Nos valores, soma-se o gasto do exercício da unidade gestora com objetos de mesma natureza (mesmo ramo de atividade): uma segunda obra de R$ 80.000 do mesmo objeto, no mesmo exercício, ultrapassa o limite e não pode ser dispensada.`,
      `É a cláusula que define os riscos e responsabilidades do contratante, do contratado e os compartilhados, caracterizando o equilíbrio econômico-financeiro inicial. É facultativa como regra e obrigatória em obras e serviços de grande vulto e nas contratações integrada e semi-integrada. "Risco é preço": quanto mais risco se aloca ao contratado, mais caro ele cobra ou menos ele oferece, por isso a alocação deve ser eficiente.`
    ]
  });

  window.PCPE_DEEPENING[topic] = {
    1: [
      ['h', 'O que é a Lei nº 14.133/2021 e a quem ela se aplica'],
      ['p', 'A Lei nº 14.133/2021 é a nova Lei de Licitações e Contratos Administrativos. Ela estabelece normas gerais de licitação e contratação para as administrações públicas diretas, autárquicas e fundacionais da União, dos Estados, do Distrito Federal e dos Municípios. A licitação é o procedimento que a administração pública usa para analisar propostas e escolher quem vai lhe fornecer produtos ou serviços, de forma imparcial e justa.'],
      ['p', 'Você precisa conhecer essa lei porque ela é essencial para a administração pública e está presente no conteúdo programático da maioria dos concursos. Os dois focos da lei, que a prova gosta de explorar, são o objetivo de tornar a contratação mais ágil e eficiente e o fato de ter criado e extinguido modalidades.'],
      ['h', 'Quais leis foram substituídas'],
      ['ul', [
        'Lei nº 8.666/1993, a antiga "Lei de Licitações".',
        'Lei nº 10.520/2002, a Lei do Pregão.',
        'Arts. 1º a 47-A da Lei nº 12.462/2011, o Regime Diferenciado de Contratações (RDC).'
      ]],
      ['h', 'Vigência e período de transição'],
      ['p', 'Não houve vacatio legis: a lei entrou em vigor imediatamente, na data da publicação (art. 194). Porém, a revogação das normas anteriores não foi imediata; ficou para um prazo posterior (art. 193, II). Durante esse intervalo, as duas leis produziam efeitos jurídicos na prática, e o órgão escolhia qual regime adotar.'],
      ['p', 'Havia uma regra de ouro para esse intervalo: não é permitida a mistura de regimes dentro de um mesmo procedimento. Quem escolhia licitar pela lei antiga mantinha o contrato regido por ela; quem escolhia a nova seguia a nova do início ao fim (art. 191). A opção tinha de constar do edital.'],
      ['p', 'Atualização importante: o texto original previa o prazo de dois anos após a publicação, ou seja, abril de 2023. Esse prazo foi prorrogado, e a revogação da Lei 8.666, da Lei 10.520 e do RDC passou a ocorrer em 30 de dezembro de 2023 (art. 193, II, com a redação da Lei Complementar nº 198/2023). Se a prova citar "dois anos / abril de 2023", ela está cobrando o texto original; o que não muda é a lógica da transição e a proibição de misturar regimes.'],
      ['h', 'Objetivos da nova lei'],
      ['p', 'A lei busca garantir contratações imparciais e justas, sem escolhas que se desviem do interesse coletivo. Foi pensada para ser mais ágil e eficiente, otimizando o procedimento (criando novas modalidades e extinguindo outras) e tornando o processo mais célere, justo e vantajoso tanto para as empresas quanto para o governo. Em síntese, ela moderniza a forma de contratação pública. Ela também reforça o cuidado com a fase preparatória (planejamento prévio), como você verá nas fases.'],
      ['p', 'Quanto ao alcance, repare no que a lei NÃO abrange como regra: as empresas públicas e sociedades de economia mista são regidas pela Lei nº 13.303/2016, e não pelas regras gerais de licitação da Lei 14.133.'],
      ['h', 'Resumo de revisão'],
      ['ul', [
        'Lei 14.133/2021 = normas gerais de licitação e contratos para administrações diretas, autárquicas e fundacionais de todos os entes.',
        'Substituiu a Lei 8.666/93, a Lei 10.520/02 (pregão) e o RDC (Lei 12.462/11, arts. 1º a 47-A).',
        'Vigência imediata, sem vacatio legis; a revogação das leis antigas foi diferida (originalmente 2 anos; efetivada em 30/12/2023).',
        'No período de transição, o órgão escolhia o regime, mas era vedada a mistura de regimes no mesmo procedimento.',
        'Objetivo: contratações imparciais, justas, mais ágeis, eficientes e vantajosas.'
      ]]
    ],
    2: [
      ['h', 'Principal mudança: as modalidades'],
      ['p', 'A principal alteração da Lei 14.133 diz respeito às modalidades de licitação. Modalidade é o tipo de procedimento licitatório definido em lei. O art. 28 enumera cinco: pregão, concorrência, concurso, leilão e diálogo competitivo. Das antigas, permanecem a concorrência, o pregão, o concurso e o leilão; a lei traz uma nova (o diálogo competitivo) e extingue duas (o convite e a tomada de preços). Não se podem criar outras modalidades nem combinar as existentes (art. 28, § 2º).'],
      ['h', 'Pregão'],
      ['p', 'É a modalidade obrigatória para a contratação de bens ou serviços comuns. Bens e serviços comuns são aqueles cujos padrões de desempenho e qualidade podem ser definidos de forma objetiva, por meio de especificações usuais no mercado (art. 6º, XIII). O critério de julgamento é o menor preço ou o maior desconto.'],
      ['p', 'Atenção ao limite: o pregão não se aplica a serviços técnicos especializados de natureza predominantemente intelectual nem a obras e serviços de engenharia, com a exceção dos serviços comuns de engenharia (art. 29, parágrafo único). Ou seja, obras e serviços especiais de engenharia vão para a concorrência.'],
      ['h', 'Concorrência'],
      ['p', 'Aplica-se à contratação de bens e serviços especiais (aqueles que, por sua alta heterogeneidade ou complexidade, não podem ser descritos por especificações usuais de mercado) e de obras e serviços de engenharia, tanto comuns quanto especiais (art. 6º, XXXVIII). Resumo: se não é comum, ou se é obra, concorrência.'],
      ['h', 'Concurso'],
      ['p', 'Continua servindo, como antes, para a contratação de trabalho técnico, científico ou artístico, mediante um prêmio ou remuneração ao vencedor. Aqui está uma pegadinha clássica: o concurso da lei de licitações NÃO é o concurso público para provimento de cargo público. É outra coisa; não se confunda. O critério de julgamento é o de melhor técnica ou conteúdo artístico.'],
      ['h', 'Leilão'],
      ['p', 'É a modalidade para alienar (vender) bens da administração. Não pense em "quaisquer bens": o texto legal é preciso e fala em bens imóveis ou bens móveis inservíveis ou legalmente apreendidos, a quem oferecer o maior lance (art. 6º, XL). Note que o leilão é venda, e não compra.'],
      ['h', 'Diálogo competitivo (a modalidade nova)'],
      ['p', 'É modalidade para a contratação de obras, serviços e compras que devem ser utilizadas em situações complexas que exigem soluções inovadoras (art. 32 traz as condições: inovação tecnológica ou técnica, impossibilidade de satisfazer a necessidade sem adaptar soluções do mercado, e impossibilidade de a administração definir com precisão as especificações). Funciona assim:'],
      ['ol', [
        'A administração seleciona previamente os licitantes por critérios objetivos.',
        'Com eles, realiza diálogos ou debates.',
        'Nesses debates, os licitantes desenvolvem uma ou mais alternativas capazes de atender às necessidades da administração.',
        'Ao final dos diálogos, cada licitante apresenta uma proposta final de solução.'
      ]],
      ['h', 'Modalidades extintas'],
      ['p', 'Convite e tomada de preços estavam previstos na legislação anterior e passam a NÃO estar presentes na nova lei. Se uma alternativa cita "tomada de preços" como modalidade da Lei 14.133, está errada.'],
      ['h', 'Macete: escolha da modalidade pelo objeto'],
      ['ul', [
        'Comum (bens e serviços)? Pregão.',
        'Especial, ou obra e serviço de engenharia? Concorrência.',
        'Trabalho técnico, científico ou artístico com prêmio? Concurso (não é concurso público!).',
        'Vender bens? Leilão.',
        'Objeto complexo que exige solução inovadora? Diálogo competitivo.'
      ]],
      ['h', 'Resumo de revisão'],
      ['ul', [
        'Cinco modalidades: pregão, concorrência, concurso, leilão e diálogo competitivo (art. 28).',
        'Novidade: diálogo competitivo; extintos: convite e tomada de preços.',
        'Pregão é obrigatório para bens e serviços comuns; engenharia só em serviços comuns de engenharia.',
        'Concorrência: bens e serviços especiais, obras e serviços de engenharia.',
        'Concurso = escolha de trabalho técnico, científico ou artístico; não confundir com concurso público.',
        'Leilão = alienação de bens.'
      ]]
    ],
    3: [
      ['h', 'Critérios de julgamento'],
      ['p', 'O critério de julgamento é o parâmetro que a administração usa para escolher a melhor proposta. Algumas já existiam na lei anterior: menor preço, técnica e preço e maior lance (no leilão). A Lei 14.133 (art. 33) lista seis critérios, e os novos têm muita chance de cair em prova:'],
      ['ol', [
        'Menor preço.',
        'Maior desconto.',
        'Melhor técnica ou conteúdo artístico.',
        'Técnica e preço.',
        'Maior lance, no caso de leilão.',
        'Maior retorno econômico.'
      ]],
      ['h', 'Os três critérios novos, um a um'],
      ['ul', [
        'Maior desconto: passa a ser critério geral da lei, tomando como referência o preço global fixado no edital e estendendo-se o desconto a eventuais termos aditivos (art. 34, § 2º).',
        'Melhor técnica ou conteúdo artístico: pode ser utilizado no concurso e também na concorrência, em casos específicos (projetos e trabalhos de natureza técnica, científica ou artística).',
        'Maior retorno econômico: usado exclusivamente para a celebração de contrato de eficiência, em que se contrata o serviço que vai gerar a maior economia para a administração. A remuneração é variável, de acordo com a eficiência do contrato (um percentual sobre a economia efetivamente obtida).'
      ]],
      ['p', 'Macete: maior retorno econômico e contrato de eficiência andam juntos. Se a questão trouxer "maior retorno econômico" aplicado a uma compra comum, está errada.'],
      ['h', 'Mudança na ordem das fases'],
      ['p', 'A lei também alterou as fases da licitação. Na Lei 8.666, ocorria primeiro a habilitação e depois o julgamento das propostas. Na nova lei, seguem-se os moldes do pregão: a regra é o julgamento e, depois, a habilitação, com fase única de recurso. Há casos excepcionais em que a habilitação vem antes do julgamento.'],
      ['p', 'Foi também acrescentada uma camada adicional de cuidado com o processo prévio de preparação da licitação: a fase preparatória é caracterizada pelo planejamento (art. 18), com estudo técnico preliminar, definição do objeto, orçamento estimado e elaboração do edital.'],
      ['h', 'Sequência das fases (art. 17)'],
      ['ol', [
        'Preparatória.',
        'Divulgação do edital.',
        'Apresentação de propostas e lances, quando for o caso.',
        'Julgamento.',
        'Habilitação.',
        'Recursal.',
        'Homologação.'
      ]],
      ['p', 'Para decorar, você pode guardar: "prepara, divulga, propõe, julga, habilita, recorre, homologa". Observe que "julga" vem antes de "habilita".'],
      ['h', 'Resumo de revisão'],
      ['ul', [
        'Critérios: menor preço, maior desconto, melhor técnica ou conteúdo artístico, técnica e preço, maior lance (leilão) e maior retorno econômico.',
        'Maior retorno econômico serve exclusivamente ao contrato de eficiência, com remuneração variável conforme a economia obtida.',
        'Melhor técnica ou conteúdo artístico: concurso e, em casos específicos, concorrência.',
        'Fases: preparatória, divulgação do edital, propostas e lances, julgamento, habilitação, recursal, homologação.',
        'Na 8.666 habilitava-se antes; na 14.133, a regra é julgar antes e habilitar depois, com fase recursal única.'
      ]]
    ],
    4: [
      ['h', 'Conceito: contratação direta é contratação sem licitação'],
      ['p', 'A expressão "contratação direta" é um gênero que tem duas espécies: a dispensa e a inexigibilidade. Falar em contratação direta nada mais é do que falar em contratação sem a realização de licitação, feita por uma dessas duas formas. O tópico se divide, portanto, em: conceito, dispensa (art. 75 e 76) e inexigibilidade (art. 74).'],
      ['h', 'Responsabilidade pela contratação direta indevida'],
      ['p', 'Quando a contratação direta é indevida e ocorre com dolo, fraude ou erro grosseiro, o contratado e o agente público responsável respondem solidariamente pelo dano causado ao erário, sem prejuízo de outras sanções legais cabíveis (art. 73). Guarde os três requisitos de culpabilidade (dolo, fraude ou erro grosseiro) e a solidariedade entre o agente e o contratado.'],
      ['h', 'Improbidade administrativa: não é automática'],
      ['p', 'Nem toda contratação direta indevida é ato de improbidade. Antes das alterações da Lei nº 14.230/2021, a jurisprudência do STJ dizia que o simples fato de se realizar contratação direta indevida já configurava improbidade. Isso acabou.'],
      ['ul', [
        'Pelo art. 10, VIII, da Lei 8.429/92 (lesão ao erário): dispensar indevidamente o processo licitatório só enseja improbidade se houver perda patrimonial efetiva (dano efetivo). Esse inciso fecha com a expressão "acarretando perda patrimonial efetiva".',
        'Pelo art. 11, V (violação de princípios): a contratação direta indevida pode ser improbidade, mas é preciso demonstrar a finalidade de obter benefício próprio ou de terceiro. O simples fato de realizar a contratação direta, por si só, não basta.'
      ]],
      ['p', 'Atenção à fonte: o dano patrimonial efetivo é exigido pelo art. 10 da Lei de Improbidade (Lei 8.429/92, na redação da Lei 14.230/2021), e não por um dispositivo da Lei 14.133. Para a prova, guarde a ideia: sem dano efetivo, não há improbidade do art. 10.'],
      ['h', 'Caso trabalhado: pergunta sobre o art. 11, V'],
      ['p', 'Pergunta: o art. 11, V, da Lei de Improbidade pode abarcar a contratação direta? Resposta: pode, mas é preciso demonstrar o objetivo de obter benefício próprio ou de terceiro. Fazer a contratação direta indevida, só por isso, não é improbidade nesse inciso.'],
      ['h', 'Resumo de revisão'],
      ['ul', [
        'Contratação direta = contratação sem licitação; gênero com duas espécies: dispensa e inexigibilidade.',
        'Contratação direta indevida com dolo, fraude ou erro grosseiro: responsabilidade solidária do contratado e do agente público, pelo dano ao erário (art. 73).',
        'Improbidade não é automática: art. 10 exige perda patrimonial efetiva; art. 11, V exige finalidade de benefício próprio ou de terceiro.',
        'A tese antiga do STJ (improbidade pelo simples fato da contratação direta indevida) foi superada.'
      ]]
    ],
    5: [
      ['h', 'Conceito de dispensa'],
      ['p', 'Dispensa é uma espécie de contratação direta que, embora viável a competição, razões legais ensejam a sua não realização. Repare que a competição É possível; é a lei que, por razões próprias, deixa de exigir a licitação. Esse é o contraste com a inexigibilidade, em que competir é impossível.'],
      ['h', 'Duas espécies de dispensa'],
      ['ul', [
        'Licitação dispensável (art. 75): a licitação é possível, ficando a decisão numa análise discricionária do gestor. A lei deixa para o gestor decidir se licita ou não.',
        'Licitação dispensada (art. 76): a competição é viável, mas a lei VEDA a realização da licitação. Por isso é ato vinculado. O art. 76 trata da alienação de bens, e as hipóteses de dispensa da licitação são ali enumeradas.'
      ]],
      ['p', 'Em ambas há rol taxativo de hipóteses. A que cai na sua prova é a licitação dispensável do art. 75, e é nela que você vai concentrar o estudo. Como o art. 75 tem um monte de incisos (alguns com muitas alíneas), é impossível memorizar todas as hipóteses. A estratégia: ler as hipóteses mais relevantes e resolver muitas questões, para perceber a forma de cobrança e quais são as mais pedidas.'],
      ['h', 'Dispensas por valor (art. 75, I e II)'],
      ['p', 'São as chamadas dispensas por valores. É dispensável a licitação para:'],
      ['ul', [
        'Obras e serviços de engenharia ou serviços de manutenção de veículos automotores, em valores inferiores a R$ 100.000,00 na lei (inciso I).',
        'Outros serviços e compras, em valores inferiores a R$ 50.000,00 na lei (inciso II).'
      ]],
      ['p', 'Cuidado: os valores escritos na lei não são mais os aplicados. Eles são atualizados anualmente por decreto da Presidência da República (art. 182, com base no IPCA-E), embora a lei continue com os números originais. Em 2025, o limite do inciso I era de R$ 125.451,15 e o do inciso II, de R$ 62.725,59. Para 2026, o Decreto nº 12.807/2025 fixou R$ 130.984,20 e R$ 65.492,11. Em provas, é comum a questão pedir a regra (atualização anual por decreto) e não o número.'],
      ['p', 'Nessas faixas, a contratação pode ser feita por dispensa OU por licitação: dispensar é uma faculdade do gestor.'],
      ['h', 'Requisitos para aferir os valores (art. 75, § 1º)'],
      ['p', 'Nem toda obra ou serviço que cabe no valor pode ser dispensado. Para aferir os limites, devem ser observados, ao mesmo tempo:'],
      ['ol', [
        'O somatório do que for despendido no exercício financeiro pela respectiva unidade gestora.',
        'O somatório da despesa realizada com objetos de mesma natureza, entendidos como as contratações no mesmo ramo de atividade.'
      ]],
      ['p', 'Caso trabalhado. Uma unidade gestora, no exercício, realizou uma obra de R$ 80.000, dentro do limite de R$ 125.451,15, e pode dispensá-la. Se, no mesmo exercício, a mesma unidade realizar outra obra do mesmo objeto, também de R$ 80.000, essa segunda obra não poderá ser dispensada: somando as duas, o valor ultrapassa o limite legal. Muito cuidado: o fracionamento, como regra, é ilegal.'],
      ['h', 'Exceção: o fracionamento lícito'],
      ['p', 'O § 7º do art. 75 afasta a regra do somatório para contratações de serviços de manutenção de veículos automotores de propriedade do órgão ou entidade contratante, incluindo o fornecimento de peças, até um teto próprio (R$ 8.000 no texto original, atualizado anualmente; em 2026, R$ 10.478,74). Essas contratações podem ser dispensadas ainda que o somatório ultrapasse o valor do inciso I. É o chamado fracionamento lícito: normalmente o fracionamento é ilegal, mas aqui é permitido pela lei.'],
      ['h', 'Outras regras das dispensas por valor'],
      ['ul', [
        'Preferencialmente, são precedidas de aviso em sítio eletrônico oficial, por prazo mínimo de 3 dias úteis, com especificação do objeto e manifestação de interesse em obter propostas adicionais (art. 75, § 3º).',
        'Preferencialmente, são pagas por cartão de pagamento, cujo extrato é divulgado e mantido à disposição do público no PNCP (art. 75, § 4º).',
        'Os valores são duplicados quando a contratação é feita por consórcio público ou por autarquia ou fundação qualificada como agência executiva (art. 75, § 2º).'
      ]],
      ['h', 'Resumo de revisão'],
      ['ul', [
        'Dispensa = contratação direta com competição viável, mas com razões legais que afastam a licitação.',
        'Dispensável (art. 75): discricionária, rol taxativo; dispensada (art. 76): licitação vedada por lei, ato vinculado.',
        'Incisos I (obras/engenharia/manutenção de veículos) e II (outros serviços e compras): limites atualizados anualmente por decreto.',
        'Aferição: somatório no exercício, pela unidade gestora, de objetos de mesma natureza (mesmo ramo de atividade); fracionar é ilegal.',
        'Exceção lícita: manutenção de veículos próprios, com peças, até o teto do § 7º.',
        'Aviso por 3 dias úteis e pagamento por cartão são "preferenciais"; valores dobram para consórcio público e agência executiva.'
      ]]
    ],
    6: [
      ['h', 'Licitação deserta e licitação fracassada (art. 75, III)'],
      ['p', 'O inciso III permite dispensar a licitação para contratação que mantenha todas as condições definidas em edital de licitação realizada há menos de um ano, quando naquela licitação ocorreu uma de duas coisas:'],
      ['ul', [
        'Alínea "a": não surgiram licitantes interessados. Essa é a licitação deserta.',
        'Alínea "a", segunda parte, e "b": não foram apresentadas propostas válidas, ou as propostas consignaram preços manifestamente superiores aos praticados no mercado ou incompatíveis com os fixados pelos órgãos oficiais competentes. Essa é a licitação fracassada.'
      ]],
      ['p', 'Ser deserta ou fracassada, por si só, não autoriza a dispensa. É preciso observar o caput do inciso III: manter todas as condições do edital e tratar de licitação realizada há menos de um ano. Presente isso, a deserta e a fracassada podem ser objeto de dispensa.'],
      ['p', 'Passo a passo para resolver a questão: (1) a licitação deu deserta ou fracassada? (2) mantiveram-se todas as condições do edital? (3) a licitação aconteceu há menos de um ano? Se as três respostas forem sim, cabe dispensa. Se as condições forem alteradas, ou se a licitação foi há mais de um ano, não cabe mais a dispensa: é preciso licitar novamente.'],
      ['h', 'Inciso IV e inciso VII'],
      ['p', 'O inciso IV é "o terror": vai das alíneas "a" a "m" no texto original e traz muitos objetos (peças de equipamentos na garantia técnica, hortifrutigranjeiros pelo preço do dia, obras de arte, medicamentos para doenças raras, entre outros). Não dá para passar por todas; por isso, é dever de casa ler as alíneas.'],
      ['p', 'O inciso VII é curto e cai: é dispensável a licitação nos casos de guerra, estado de defesa, estado de sítio, intervenção federal ou grave perturbação da ordem.'],
      ['h', 'Dispensa emergencial (art. 75, VIII): a mais cobrada'],
      ['p', 'É a hipótese mais importante de licitação dispensável, cobrada em todas as provas. É dispensável a licitação nos casos de emergência ou calamidade pública, quando caracterizada urgência de atendimento de situação que possa ocasionar prejuízo ou comprometer a continuidade de serviços públicos ou a segurança de pessoas, obras, serviços, equipamentos e outros bens, públicos ou particulares. Os requisitos se acumulam:'],
      ['ol', [
        'Existência de emergência ou calamidade pública, com urgência de atendimento.',
        'Risco de prejuízo ou comprometimento da continuidade dos serviços ou da segurança de pessoas e bens.',
        'A contratação só pode abranger os bens necessários ao atendimento da situação emergencial ou calamitosa e as parcelas de obras e serviços que possam ser concluídas em até um ano, contado da ocorrência da emergência.',
        'Vedadas a prorrogação do contrato e a recontratação da empresa já contratada com base no inciso.'
      ]],
      ['h', 'Emergência fabricada (art. 75, § 6º)'],
      ['p', 'A emergência fabricada é aquela criada pela desídia ou falta de planejamento do gestor. A leitura ensinada é: ela enseja a dispensa (a administração precisa atender a situação), mas também enseja a responsabilização de quem causou a emergência. O § 6º exige ainda que se observem os valores de mercado e se adotem as providências necessárias para concluir o processo licitatório, sem prejuízo da apuração de responsabilidade dos agentes que deram causa à situação.'],
      ['h', 'ADI 6890/STF: a vedação de recontratação'],
      ['p', 'O STF julgou a parte final do inciso VIII, que veda a prorrogação e a recontratação. Em duas ideias:'],
      ['ol', [
        'É constitucional a vedação de recontratação da empresa contratada diretamente por dispensa em caso de emergência ou calamidade (e a prorrogação, naturalmente, também).',
        'Mas a vedação incide na recontratação fundada na mesma emergência que extrapole o prazo máximo legal de um ano. Ela não impede que a empresa participe de eventual licitação substitutiva da dispensa, nem que seja contratada diretamente por outro fundamento legal, inclusive uma nova emergência ou calamidade, sem prejuízo do controle de abusos.'
      ]],
      ['p', 'Aplicação: numa dispensa emergencial por 6 meses, ainda dentro do limite de um ano da mesma emergência, a continuidade com a mesma empresa não esbarra na vedação, segundo essa leitura do STF; ela só incide se o conjunto extrapolar o prazo máximo legal. A empresa pode vencer uma nova licitação e ser contratada; pode ser contratada por nova dispensa fundada em hipótese diferente ou em nova emergência. A vedação é para a MESMA emergência que extrapole um ano.'],
      ['h', 'Comissão de avaliação de critérios de técnica (art. 75, XIII)'],
      ['p', 'É dispensável a licitação para contratação de profissionais para compor comissão de avaliação de critérios de técnica, quando se tratar de profissional técnico de notória especialização. Se esse texto cair copiado na prova, marque que é hipótese de DISPENSA. Você vai ver a seguir por que ela costuma ser trocada com a inexigibilidade.'],
      ['h', 'Resumo de revisão'],
      ['ul', [
        'Deserta = ninguém apareceu; fracassada = propostas inválidas ou com preço manifestamente superior ao de mercado.',
        'Para dispensar: manter todas as condições do edital e licitação realizada há menos de um ano.',
        'Guerra, estado de defesa, estado de sítio, intervenção federal e grave perturbação da ordem: dispensa (inciso VII).',
        'Emergência/calamidade: só o necessário, parcelas concluídas em até 1 ano, vedadas prorrogação e recontratação.',
        'Emergência fabricada (desídia/falta de planejamento): permite a contratação, mas gera responsabilização.',
        'ADI 6890: vedação vale para a mesma emergência que extrapole 1 ano; não impede licitação, nem nova emergência ou outro fundamento.',
        'Comissão de avaliação de critérios de técnica com profissional de notória especialização: dispensa.'
      ]]
    ],
    7: [
      ['h', 'Conceito de inexigibilidade'],
      ['p', 'Inexigibilidade é uma espécie de contratação direta fundada na inviabilidade de competição. Não é possível competir. Compare: na dispensa a competição é viável e a lei afasta a licitação; na inexigibilidade a competição é inviável. As hipóteses estão no art. 74, e o rol é meramente exemplificativo (a lei diz "em especial nos casos de"), diferentemente do rol taxativo da dispensa.'],
      ['h', 'Inciso I: fornecedor, representante comercial ou produtor exclusivos'],
      ['p', 'É inexigível a licitação para a contratação de fornecedor, representante comercial ou produtor exclusivos. Esse sujeito não vai querer participar de licitação, porque é o único que fornece, o único que representa ou o único que produz. Logo, não há competição. A inviabilidade de competição se comprova mediante atestado de exclusividade, contrato de exclusividade, declaração do fabricante ou outro documento idôneo, sendo vedada a preferência por marca específica (art. 74, § 1º).'],
      ['h', 'Inciso II: profissional do setor artístico'],
      ['p', 'É inexigível a licitação para a contratação de profissional do setor artístico, diretamente ou por empresário exclusivo, desde que consagrado pela opinião pública ou pela crítica especializada. O critério é subjetivo, mas é o que a lei estabelece. O artista consagrado não precisa disputar licitação: a agenda já está cheia de shows (o exemplo clássico são os cantores sertanejos).'],
      ['p', 'Quem é o empresário exclusivo (art. 74, § 2º)? A pessoa física ou jurídica que possui contrato, declaração, carta ou outro documento que ateste a exclusividade permanente e contínua de representação, no País ou em Estado específico, do artista. Fica afastada a contratação por inexigibilidade por meio de empresário com representação restrita a evento ou local específico. Exemplos de representação restrita que NÃO valem: exclusividade para negociar o artista numa casa de show específica ou numa feira específica, como a festa de Barretos. O empresário precisa ser exclusivo para todo e qualquer evento e todo e qualquer lugar (ou no estado específico, conforme o documento).'],
      ['h', 'Inciso III: serviços técnicos especializados de natureza predominantemente intelectual'],
      ['p', 'É inexigível a licitação para a contratação de serviços técnicos especializados de natureza predominantemente intelectual com profissionais ou empresas de notória especialização (estudos técnicos, pareceres, perícias, assessorias e consultorias, auditorias, patrocínio ou defesa de causas, treinamento, restauração de obras de arte, entre outros). É vedada a inexigibilidade para serviços de publicidade e divulgação.'],
      ['h', 'A grande pegadinha: dispensa x inexigibilidade'],
      ['p', 'Compare as duas hipóteses lado a lado, porque a prova explora a troca:'],
      ['ul', [
        'Profissional técnico de notória especialização para COMPOR COMISSÃO de avaliação de critérios de técnica: DISPENSA (art. 75, XIII).',
        'Serviços técnicos especializados de natureza predominantemente intelectual com profissionais ou empresas de notória especialização: INEXIGIBILIDADE (art. 74, III), mas nunca para publicidade e divulgação.'
      ]],
      ['p', 'Dica de raciocínio: se a questão fala em "comissão de avaliação de critérios de técnica", pense em dispensa; se fala em "serviços técnicos especializados predominantemente intelectuais", pense em inexigibilidade.'],
      ['h', 'Inciso IV: credenciamento'],
      ['p', 'É inexigível a licitação para objetos que devam ou possam ser contratados por credenciamento. O credenciamento é, portanto, uma espécie de inexigibilidade (é o chamamento público em que a administração convoca interessados a prestar serviços ou fornecer bens e, preenchidos os requisitos, credencia quem quiser).'],
      ['h', 'Inciso V: aquisição ou locação de imóvel'],
      ['p', 'Também é inexigível a aquisição ou locação de imóvel cujas características de instalações e de localização tornem necessária a sua escolha. Isso é importante porque, na Lei 8.666, era hipótese de DISPENSA; na Lei 14.133, passou a ser inexigibilidade. Devem ser observados os requisitos do § 5º:'],
      ['ul', [
        'Avaliação prévia do bem, de seu estado de conservação, dos custos de adaptações e do prazo de amortização dos investimentos.',
        'Certificação da inexistência de imóveis públicos vagos e disponíveis que atendam ao objeto.',
        'Justificativas que demonstrem a singularidade do imóvel a ser comprado ou locado e a vantagem para a administração.'
      ]],
      ['h', 'Resumo de revisão'],
      ['ul', [
        'Inexigibilidade = inviabilidade de competição; rol do art. 74 exemplificativo.',
        'I: fornecedor, representante comercial ou produtor exclusivos (prova por atestado/contrato de exclusividade; vedada preferência por marca).',
        'II: artista consagrado pela opinião pública ou crítica; empresário exclusivo não pode ter representação restrita a evento ou local.',
        'III: serviços técnicos especializados predominantemente intelectuais com notória especialização; vedada para publicidade e divulgação.',
        'IV: credenciamento; V: imóvel singular (antes era dispensa na Lei 8.666).',
        'Não confundir com a dispensa do art. 75, XIII (comissão de avaliação de critérios de técnica).'
      ]]
    ],
    8: [
      ['h', 'A sequência do procedimento (art. 17)'],
      ['p', 'O art. 17 diz quais são as fases da licitação, em sequência: preparatória, divulgação do edital, apresentação de propostas e lances, julgamento de propostas e lances, habilitação, recursal e homologação. A mudança central em relação à Lei 8.666: antes, habilitava-se primeiro; agora, apresentam-se propostas e lances, julgam-se, e somente depois se procede à habilitação. Como regra, essa habilitação é apenas do licitante vencedor.'],
      ['h', 'Inversão de fases (art. 17, § 1º)'],
      ['p', 'Excepcionalmente, a fase de habilitação pode vir antes da apresentação das propostas e lances. Isso exige ato motivado, com explicitação dos benefícios, e previsão expressa no edital. Quando a habilitação antecede, todos os licitantes que comparecerem terão os documentos de habilitação analisados (serão habilitados ou inabilitados).'],
      ['ul', [
        'Regra: proposta, julgamento e habilitação só do vencedor.',
        'Exceção: inversão, com habilitação antes e análise dos documentos de todos.'
      ]],
      ['h', 'Fase recursal única'],
      ['p', 'A fase recursal é uma fase única, ainda que haja inversão de fases. Os recursos contra o julgamento das propostas e contra a habilitação ou inabilitação são apreciados em fase única (art. 165, § 1º, II). Se a questão diz que os recursos são apresentados em duas oportunidades, é pegadinha.'],
      ['h', 'Audiência pública e consulta pública (art. 21)'],
      ['p', 'Pela Lei 14.133, não existe mais audiência pública ou consulta pública obrigatória, embora ambas sejam extremamente recomendáveis. Elas materializam a administração consensual (dialógica): aquela que abre as portas para que a população diretamente afetada pela tomada de decisão possa contribuir nessa decisão. Diferencie:'],
      ['ul', [
        'Audiência pública: a administração PODERÁ convocá-la com antecedência mínima de 8 dias úteis, presencial ou a distância, sobre a licitação que pretenda realizar. É um evento, em dia e horário específicos, em que as pessoas comparecem (ou se conectam) e dão sugestões e contribuições.',
        'Consulta pública (parágrafo único): a administração também PODERÁ submeter a licitação à prévia consulta pública. É um lapso temporal (um período de tempo) dentro do qual os interessados podem dar sugestões. Não é um evento.'
      ]],
      ['p', 'Macete: audiência = evento (dia e hora); consulta = período. Ambas são faculdade ("poderá"). Se a questão disser "deverá" ou "é obrigatória", está errada.'],
      ['h', 'Resumo de revisão'],
      ['ul', [
        'Fases: preparatória, divulgação, propostas e lances, julgamento, habilitação, recursal, homologação.',
        'Regra: julga-se e depois habilita-se apenas o vencedor.',
        'Inversão de fases é excepcional (ato motivado, previsão no edital); então todos têm documentos analisados.',
        'Fase recursal única, mesmo com inversão.',
        'Audiência e consulta públicas: facultativas; audiência = evento (8 dias úteis de antecedência); consulta = período para sugestões.',
        'Ambas expressam a administração consensual.'
      ]]
    ],
    9: [
      ['h', 'Conceito (art. 6º, XXVII)'],
      ['p', 'A matriz de riscos é uma cláusula contratual definidora de riscos e responsabilidades entre as partes, que caracteriza o equilíbrio econômico-financeiro inicial do contrato quanto ao ônus financeiro decorrente de eventos supervenientes à contratação. Em palavras simples: a cláusula diz quais são os riscos do contratante, quais são os do contratado e quais serão compartilhados.'],
      ['h', 'Matriz e equilíbrio econômico-financeiro'],
      ['p', 'Se cada parte suporta os riscos que a matriz lhe atribui, o contrato está equilibrado. Se um risco é atribuído a uma parte, mas acaba suportado pela outra, o contrato fica desequilibrado. Exemplo: o risco tributário, imagine, está alocado à administração, mas quem acaba suportando é o contratado. Como esse risco deveria ser da administração, o contrato está em desequilíbrio.'],
      ['h', 'Facultativa como regra'],
      ['p', 'Na Lei 14.133, a cláusula de matriz de riscos é, como regra, uma faculdade: não há obrigação de todo contrato ter matriz (art. 22, caput: "poderá contemplar"). Mas, quando houver, a administração deverá fazer a alocação eficiente dos riscos de cada contrato e estabelecer os riscos do contratante, os do contratado e os compartilhados (art. 22, § 1º).'],
      ['h', 'Por que "alocação eficiente"? Risco é preço'],
      ['p', 'Se você atribui todos os riscos ao contratado, a licitação perde valor, porque risco é preço. Quanto maior o risco alocado ao contratado, ele ou cobrará mais caro ou pagará menos à administração (dependendo do critério de julgamento). Por isso se deve fazer uma alocação eficiente, não uma transferência total.'],
      ['h', 'Quando a matriz é obrigatória'],
      ['p', 'A lei diz que, quando a contratação se referir a obras e serviços de grande vulto, ou quando forem adotados os regimes de contratação integrada e semi-integrada, o edital obrigatoriamente contemplará a matriz de alocação de riscos entre contratante e contratado (art. 22, § 3º). Grande vulto, na lei, é o valor estimado acima de R$ 200 milhões no texto original (atualizado por decreto; R$ 261.968.421,04 em 2026).'],
      ['h', 'Regra especial para contratação integrada e semi-integrada'],
      ['p', 'Nelas, os riscos decorrentes de fatos supervenientes à contratação associados à escolha da solução de projeto básico pelo contratado devem ser alocados a ele, como responsabilidade sua, na matriz (art. 22, § 4º). A lógica é simples: se foi o contratado quem escolheu a solução do projeto básico e deu errado, como a escolha foi dele, o risco deve ser suportado por ele.'],
      ['h', 'Fechamento do tópico'],
      ['p', 'O percurso do tópico passa por: contratação direta (conceito e responsabilidade), dispensa (valores, deserta/fracassada, guerra, emergência, comissão técnica), inexigibilidade, procedimento da licitação (fases, inversão, recurso, audiência/consulta) e matriz de riscos. Releia as hipóteses dos arts. 74 e 75 e resolva muitas questões: a prova cobra sobretudo as trocas entre dispensa e inexigibilidade e os requisitos da emergência.'],
      ['h', 'Resumo de revisão'],
      ['ul', [
        'Matriz de riscos = cláusula que define riscos e responsabilidades e o equilíbrio econômico-financeiro inicial.',
        'Define riscos do contratante, do contratado e compartilhados.',
        'Risco alocado a uma parte e suportado pela outra = contrato desequilibrado.',
        'Regra: facultativa; obrigatória em obras e serviços de grande vulto e nas contratações integrada e semi-integrada.',
        'Alocação eficiente: "risco é preço"; transferir tudo ao contratado encarece ou reduz o que ele oferece.',
        'Em contratação integrada/semi-integrada, riscos da escolha da solução de projeto básico pelo contratado são dele.'
      ]]
    ]
  };

  window.PCPE_QUESTOES[topic] = [
    {
      text: `Sobre a Lei nº 14.133/2021 e o período de transição que acompanhou a sua edição, é correto afirmar que`,
      options: [
        `a lei só passou a valer após período de vacatio legis, e as leis antigas continuaram aplicáveis de forma exclusiva até lá.`,
        `a lei entrou em vigor imediatamente, as leis antigas foram revogadas ao final do prazo previsto e, nesse intervalo, o órgão escolhia o regime, sendo vedada a mistura de regimes no mesmo procedimento.`,
        `durante a transição, o órgão podia combinar dispositivos da Lei 14.133 e da Lei 8.666 no mesmo procedimento, desde que justificasse.`,
        `a lei substituiu apenas a Lei 8.666/1993, mantendo em vigor a Lei do Pregão e o RDC.`
      ],
      correct: 1,
      exp: `Não houve vacatio legis: a lei vigorou na publicação, e a revogação da 8.666, da Lei do Pregão (10.520) e do RDC (Lei 12.462) foi diferida. No intervalo, o órgão escolhia o regime, mas era vedada a mistura de regimes no mesmo procedimento. A A erra por falar em vacatio legis; a C erra por admitir mistura; a D erra porque a nova lei substituiu também o pregão e o RDC.`
    },
    {
      text: `Um órgão pretende contratar a construção de uma obra de engenharia e, em outro processo, a compra de material de escritório com especificações usuais de mercado. Segundo a Lei 14.133/2021, as modalidades adequadas são, respectivamente,`,
      options: [
        `pregão e concorrência.`,
        `leilão e pregão.`,
        `diálogo competitivo e concurso.`,
        `concorrência e pregão.`
      ],
      correct: 3,
      exp: `Obras e serviços de engenharia vão para a concorrência (o pregão só alcança serviços comuns de engenharia), e bens e serviços comuns, definidos por especificações usuais de mercado, vão para o pregão, modalidade obrigatória. A inverte as modalidades; o leilão é para alienar; o diálogo competitivo serve a objetos complexos que exigem solução inovadora, e o concurso a trabalho técnico, científico ou artístico.`
    },
    {
      text: `A administração pública pretende contratar um serviço de consultoria que gere a maior economia para o órgão, com remuneração variável conforme a eficiência obtida. O critério de julgamento adequado, previsto na Lei 14.133/2021, é o de`,
      options: [
        `maior retorno econômico.`,
        `maior lance.`,
        `maior desconto.`,
        `menor preço.`
      ],
      correct: 0,
      exp: `O maior retorno econômico é utilizado exclusivamente para o contrato de eficiência, considerando a maior economia para a administração, com remuneração variável conforme a eficiência. O maior lance é do leilão (venda); o maior desconto e o menor preço olham o custo da contratação, não a economia gerada.`
    },
    {
      text: `Sobre as fases da licitação na Lei 14.133/2021, assinale a alternativa correta.`,
      options: [
        `A regra é a habilitação antes do julgamento das propostas, como na Lei 8.666.`,
        `Se houver inversão de fases, haverá duas fases recursais: uma após a habilitação e outra após o julgamento.`,
        `A habilitação nunca pode anteceder a apresentação de propostas e lances.`,
        `A regra é apresentar propostas e lances, julgar e só então habilitar, em geral apenas o vencedor; a habilitação pode excepcionalmente vir antes, caso em que todos têm os documentos analisados, e a fase recursal é única.`
      ],
      correct: 3,
      exp: `A nova lei segue o modelo do pregão: propostas e lances, julgamento, depois habilitação (em regra só do vencedor). A inversão é excepcional, exige ato motivado e previsão no edital, e analisa os documentos de todos. A fase recursal é única, mesmo com inversão. A descreve a Lei 8.666; B contraria a fase única; C nega a possibilidade excepcional.`
    },
    {
      text: `A respeito da contratação direta, é correto afirmar que`,
      options: [
        `é gênero que comporta duas espécies, dispensa e inexigibilidade, e a contratação direta indevida com dolo, fraude ou erro grosseiro gera responsabilidade solidária do agente público e do contratado pelo dano ao erário.`,
        `toda contratação direta indevida configura, automaticamente, ato de improbidade administrativa.`,
        `a inexigibilidade e a dispensa são sinônimas, pois ambas supõem inviabilidade de competição.`,
        `a responsabilidade pelo dano recai apenas sobre o agente público, não sobre o contratado.`
      ],
      correct: 0,
      exp: `Contratação direta é contratação sem licitação, em duas espécies; havendo dolo, fraude ou erro grosseiro, respondem solidariamente o contratado e o agente público (art. 73). B erra porque, após a Lei 14.230/2021, a improbidade exige o elemento legal (por exemplo, dano patrimonial efetivo no art. 10). C erra porque na dispensa a competição é viável. D erra por excluir o contratado.`
    },
    {
      text: `Uma unidade gestora realizou, em determinado exercício financeiro, uma obra de R$ 80.000, dentro do limite de dispensa por valor para obras. No mesmo exercício, pretende contratar outra obra, de mesmo objeto, também de R$ 80.000. Segundo o raciocínio da Lei 14.133/2021, a segunda obra`,
      options: [
        `poderá ser dispensada, pois cada contrato isoladamente cabe no limite.`,
        `poderá ser dispensada apenas se contratada por consórcio público, que sempre tem limite dobrado.`,
        `não poderá ser dispensada por valor, pois, somado o que a unidade gastou no exercício com objetos da mesma natureza, o limite é ultrapassado.`,
        `poderá ser dispensada, porque o fracionamento é sempre lícito nas obras.`
      ],
      correct: 2,
      exp: `Para aferir os limites, soma-se o gasto do exercício pela unidade gestora e o gasto com objetos de mesma natureza (mesmo ramo de atividade). As duas obras somam R$ 160.000, acima do limite, e o fracionamento, como regra, é ilegal. A e D ignoram o somatório; B inventa uma regra: o dobro vale para consórcio público e agência executiva, mas não se presume no caso. O fracionamento lícito é a exceção da manutenção de veículos próprios.`
    },
    {
      text: `Uma licitação foi deserta, realizada há menos de um ano. A administração pretende contratar diretamente, mas alterou algumas condições do edital original. Nesse caso,`,
      options: [
        `é cabível a dispensa, pois a licitação deserta sempre autoriza a contratação direta.`,
        `não é cabível a dispensa do art. 75, III, pois é necessário manter todas as condições do edital; alteradas as condições, deve-se licitar novamente.`,
        `é cabível a inexigibilidade, pois não surgiram licitantes.`,
        `não é cabível a dispensa porque licitação deserta e fracassada nunca autorizam dispensa.`
      ],
      correct: 1,
      exp: `A licitação deserta (ninguém apareceu) ou fracassada (propostas inválidas ou com preço manifestamente superior ao de mercado) só leva à dispensa se mantiver todas as condições do edital e se a licitação tiver sido há menos de um ano. Alteradas as condições, ou passado um ano, é preciso licitar novamente. A erra por dizer "sempre"; C confunde com inexigibilidade (inviabilidade de competição); D nega a hipótese, que existe.`
    },
    {
      text: `Sobre a dispensa emergencial do art. 75, VIII, da Lei 14.133/2021, é correto afirmar que`,
      options: [
        `permite contratar qualquer objeto, por prazo indeterminado, enquanto durar a emergência.`,
        `a emergência fabricada pela falta de planejamento do gestor impede a contratação e exclui a responsabilização do agente.`,
        `a contratação limita-se aos bens necessários e às parcelas de obras e serviços concluídas em até um ano; a vedação de recontratação, segundo o STF, incide na mesma emergência que extrapole o prazo máximo de um ano.`,
        `a empresa contratada por emergência fica impedida de participar de qualquer licitação posterior da administração.`
      ],
      correct: 2,
      exp: `A dispensa é restrita ao necessário para atender a situação, com parcelas concluídas em até um ano, vedadas prorrogação e recontratação. Na ADI 6890, o STF decidiu que a vedação incide na recontratação pela mesma emergência que extrapole o prazo, sem impedir licitação ou contratação por outro fundamento. A erra pelo prazo indeterminado; B erra porque a emergência fabricada, embora permita a contratação, enseja a responsabilização; D erra porque a empresa pode participar de licitação substitutiva.`
    },
    {
      text: `Acerca das contratações por inexigibilidade e dispensa, assinale a alternativa correta.`,
      options: [
        `A contratação de profissional técnico de notória especialização para compor comissão de avaliação de critérios de técnica é hipótese de inexigibilidade.`,
        `O empresário exclusivo do artista pode ter representação restrita a uma casa de shows específica, sem prejuízo da inexigibilidade.`,
        `É vedada a inexigibilidade para serviços técnicos especializados de natureza predominantemente intelectual quando se tratar de publicidade e divulgação.`,
        `A locação de imóvel de características singulares continua sendo hipótese de dispensa, como na Lei 8.666.`
      ],
      correct: 2,
      exp: `Os serviços técnicos especializados predominantemente intelectuais com notória especialização são inexigíveis, mas a lei veda a inexigibilidade para publicidade e divulgação. A confunde: a comissão de avaliação de critérios de técnica é DISPENSA (art. 75, XIII). B erra porque o empresário exclusivo não pode ter representação restrita a evento ou local específico. D erra porque o imóvel singular era dispensa na 8.666 e passou a inexigibilidade na 14.133.`
    },
    {
      text: `Sobre a matriz de alocação de riscos, é correto afirmar que`,
      options: [
        `é cláusula obrigatória em todos os contratos administrativos.`,
        `a administração deve alocar todos os riscos ao contratado, para valorizar a licitação.`,
        `é facultativa como regra, mas obrigatória em obras e serviços de grande vulto e nas contratações integrada e semi-integrada, com alocação eficiente dos riscos, porque risco é preço.`,
        `o risco alocado à administração, ainda que suportado pelo contratado, mantém o equilíbrio econômico-financeiro do contrato.`
      ],
      correct: 2,
      exp: `A matriz define riscos do contratante, do contratado e compartilhados e caracteriza o equilíbrio econômico-financeiro inicial. É facultativa como regra e obrigatória em obras e serviços de grande vulto e nas contratações integrada e semi-integrada. A alocação deve ser eficiente: transferir tudo ao contratado encarece a proposta ou reduz o que ele oferece (risco é preço). A erra pela obrigatoriedade geral; B erra pela transferência total; D erra: risco da administração suportado pelo contratado desequilibra o contrato.`
    }
  ];
})();
