(function () {
  'use strict';
  const allowed = {
    'Língua Portuguesa': null,
    'Noções de Informática': /Windows|Redes de computadores|Correio eletrônico|Segurança da informação/,
    'Noções de Direito Administrativo': /Regime jurídico|Organização administrativa|Atos administrativos|Poderes e deveres|Licitações|Agentes públicos/,
    'Noções de Direito Constitucional': /Princípios fundamentais|Remédios constitucionais|Organização do Estado|Administração pública e servidores|Organização dos Poderes|Defesa do Estado/,
    'Noções de Direito Penal': /Aplicação da lei penal|Teoria geral do crime|Ilicitude|Concurso de pessoas|Crimes contra a pessoa|Crimes contra o patrimônio|Crimes contra a fé pública/,
    'Noções de Direito Processual Penal': /Inquérito policial|Ação penal|Prisão:|Medidas cautelares/
  };
  const shared = (window.PPPE_MODULOS || []).filter(module => Object.prototype.hasOwnProperty.call(allowed, module.sub) && (!allowed[module.sub] || allowed[module.sub].test(module.topic)));
  const additional = [
    { sub: 'Noções de Informática', topic: 'Linux: sistema operacional e arquivos', escopo: ['Linux, comandos e permissões'] },
    { sub: 'Legislação Estadual', topic: 'Estatuto dos Policiais Civis de Pernambuco', escopo: ['Regime jurídico e deveres dos policiais civis de Pernambuco'] },
    { sub: 'Legislação Estadual', topic: 'Constituição de Pernambuco: segurança pública', escopo: ['Organização da segurança pública no Estado de Pernambuco'] },
    { sub: 'Raciocínio Lógico', topic: 'Estruturas e argumentação lógica', escopo: ['Proposições, conectivos e argumentos'] },
    { sub: 'Raciocínio Lógico', topic: 'Diagramas e álgebra de proposições', escopo: ['Equivalências, negações e conjuntos'] },
    { sub: 'Raciocínio Lógico', topic: 'Problemas aritméticos', escopo: ['Razão, proporção e porcentagem'] },
    { sub: 'Estatística', topic: 'Amostragem, gráficos e tabelas', escopo: ['Amostragem e análise de dados'] },
    { sub: 'Estatística', topic: 'Média, mediana e moda', escopo: ['Medidas de tendência central'] },
    { sub: 'Estatística', topic: 'Dispersão e probabilidade', escopo: ['Medidas de dispersão e probabilidade'] }
  ];
  const cargo = window.PCPE_ROLE === 'escrivao'
    ? [
      { sub: 'Noções de Arquivologia', topic: 'Arquivo: conceito, princípios e funções', escopo: ['Conceito, princípios e funções de arquivo'] },
      { sub: 'Noções de Arquivologia', topic: 'Gestão de documentos e protocolo', escopo: ['Gestão documental e protocolo'] },
      { sub: 'Noções de Arquivologia', topic: 'Preservação e conservação de documentos', escopo: ['Preservação e conservação documental'] }
    ]
    : [
      { sub: 'Contabilidade Geral', topic: 'Conceitos, objetivos e finalidades', escopo: ['Fundamentos da contabilidade'] },
      { sub: 'Contabilidade Geral', topic: 'Patrimônio, ativo, passivo e patrimônio líquido', escopo: ['Composição e equação patrimonial'] },
      { sub: 'Contabilidade Geral', topic: 'Escrituração, contas e balanço patrimonial', escopo: ['Contas, partidas dobradas e balanço patrimonial'] }
    ];
  window.PCPE_MODULOS = [...shared, ...additional, ...cargo];
})();