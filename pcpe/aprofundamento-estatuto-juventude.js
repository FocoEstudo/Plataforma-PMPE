(function () {
  const topic = 'Estatuto da Juventude (Lei nº 12.852/2013)';
  const guide = window.PCPE_TOPIC_GUIDES?.[topic];
  if (!guide || guide.lessons.length !== 6 || guide.practice.length !== 6 || guide.answers.length !== 6) {
    throw new Error('O guia completo do Estatuto da Juventude precisa ser carregado antes do aprofundamento.');
  }

  const details = [
    {
      summary: 'A lei define a faixa etária de quinze a vinte e nove anos e preserva a aplicação do ECA aos adolescentes quando compatível com a proteção integral.',
      example: 'Aos dezessete anos, a pessoa é jovem para fins do Estatuto, mas eventual ato infracional continua submetido ao ECA.',
      attention: 'Faixa etária não equivale a maioridade penal.'
    },
    {
      summary: 'Autonomia, participação, diversidade, não discriminação e desenvolvimento integral orientam as políticas de juventude.',
      example: 'Uma política pública deve ouvir jovens e adaptar ações para diferentes realidades sociais e territoriais.',
      attention: 'Princípios não dispensam a competência legal nem os procedimentos de cada política pública.'
    },
    {
      summary: 'Educação, profissionalização, trabalho, renda, diversidade, igualdade e saúde são direitos tratados em capítulos próprios.',
      example: 'A oferta de educação de jovens e adultos deve considerar as necessidades da juventude e as normas educacionais aplicáveis.',
      attention: 'A lei deve ser lida em conjunto com a legislação educacional, trabalhista e sanitária.'
    },
    {
      summary: 'Cultura, comunicação, liberdade de expressão, desporto, lazer, território, mobilidade, sustentabilidade e meio ambiente também integram o Estatuto.',
      example: 'A execução de um projeto cultural pode exigir articulação com transporte e acesso a equipamentos públicos.',
      attention: 'O catálogo de direitos não se limita à educação e ao trabalho.'
    },
    {
      summary: 'Segurança pública, acesso à Justiça, cidadania e participação social e política são dimensões expressas dos direitos juvenis.',
      example: 'O atendimento policial deve se basear em fatos e requisitos legais, não em estereótipos associados à idade.',
      attention: 'Ser jovem não constitui prova de autoria nem fundamento autônomo para tratamento discriminatório.'
    },
    {
      summary: 'O SINAJUVE organiza a articulação das políticas de juventude e envolve responsabilidades dos entes federativos, conforme a lei e sua regulamentação.',
      example: 'Um plano municipal deve se articular às políticas nacional e estadual e prever participação social.',
      attention: 'O sistema de políticas públicas não é um órgão policial nem um regime penal.'
    }
  ];

  window.PCPE_DEEPENING = window.PCPE_DEEPENING || {};
  window.PCPE_DEEPENING[topic] = {};
  details.forEach((detail, index) => {
    window.PCPE_DEEPENING[topic][index + 1] = [
      ['h', 'Resumo essencial'],
      ['p', detail.summary],
      ['h', 'Exemplo resolvido'],
      ['p', detail.example],
      ['h', 'Ponto de atenção'],
      ['p', detail.attention],
      ['h', 'Mini-exercício (estilo Cebraspe)'],
      ['p', `${guide.practice[index]} ${guide.answers[index]}`]
    ];
  });
})();
