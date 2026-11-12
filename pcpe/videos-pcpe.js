(function () {
  const videos = window.PPPE_VIDEOS_COMPLEMENTARES;
  const pmpe = window.PMPE_VIDEO_TOPIC_MAP;
  if (!videos || !pmpe) return;
  const byTopic = {
    'Estruturas e argumentação lógica': ['Proposições Lógicas e Conectivos', 'Disjunções e Condicional (Se...Então)'],
    'Diagramas e álgebra de proposições': ['Negações e Equivalências (De Morgan, Mané, Neymar)', 'Argumentação, Diagramas Lógicos e Conjuntos']
  };
  Object.entries(byTopic).forEach(([topic, sources]) => {
    const seen = new Set();
    videos[topic] = sources.flatMap(source => pmpe[source]?.videos || []).filter(([id]) => !seen.has(id) && seen.add(id));
  });
  const extra = {
    'Linux: sistema operacional e arquivos': [['eu2w-8Uqjjs', 'Linux para concursos: sistemas, comandos e permissões']],
    'Estatuto dos Policiais Civis de Pernambuco': [['sSJdjpy9jFQ', 'PCPE: carreira e Estatuto Policial'], ['gsSjMM_UbLg', 'PCPE: Constituição estadual e Estatuto Policial']],
    'Constituição de Pernambuco: segurança pública': [['gsSjMM_UbLg', 'PCPE: Constituição estadual e segurança pública']],
    'Problemas aritméticos': [['S3kYDlqUwNE', 'Porcentagem e regra de três: questões resolvidas']],
    'Amostragem, gráficos e tabelas': [['2Q7wSgJR-g4', 'Variáveis, população e amostragem'], ['Xm204aelEkg', 'Gráficos de colunas e barras']],
    'Média, mediana e moda': [['58N4vTQQno0', 'Média, moda e mediana']],
    'Dispersão e probabilidade': [['7K2jw0IgUxM', 'Variância e desvio padrão'], ['gkOC2r1Yc9M', 'Probabilidade: espaço amostral e eventos']],
    'Conceitos, objetivos e finalidades': [['ELwxw7stViI', 'Contabilidade geral: fundamentos e usuários']],
    'Patrimônio, ativo, passivo e patrimônio líquido': [['ELwxw7stViI', 'Contabilidade geral: ativo, passivo e patrimônio líquido']],
    'Escrituração, contas e balanço patrimonial': [['ELwxw7stViI', 'Contabilidade geral: escrituração, contas e balanço']],
    'Arquivo: conceito, princípios e funções': [['SkZDrBYJ2cU', 'Princípios e teorias de Arquivologia']],
    'Gestão de documentos e protocolo': [['oY6ceNlWAis', 'Protocolo: recebimento, registro e tramitação']],
    'Preservação e conservação de documentos': [['sLbfUYqaaCQ', 'Preservação, conservação e restauração de acervos']]
  };
  Object.entries(extra).forEach(([topic, lessons]) => { videos[topic] = lessons; });
})();