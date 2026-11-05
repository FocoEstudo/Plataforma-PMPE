// Módulos de estudo da PPPE (Edital nº 1 - SAD/SEAP-PE, Cebraspe, item 20.2).
// Cada módulo gera uma apostila (PDF) cujo conteúdo está em pdf-*.js, indexado pelo campo "topic".
window.PPPE_MODULOS = [
  // ---------- LÍNGUA PORTUGUESA ----------
  { sub: "Língua Portuguesa", topic: "Compreensão, interpretação e tipologia textual", escopo: ["Compreensão e interpretação de textos de gêneros variados", "Reconhecimento de tipos e gêneros textuais"] },
  { sub: "Língua Portuguesa", topic: "Ortografia oficial e acentuação gráfica", escopo: ["Emprego das letras", "Emprego da acentuação gráfica"] },
  { sub: "Língua Portuguesa", topic: "Coesão textual e correlação de tempos e modos verbais", escopo: ["Referenciação, substituição e repetição", "Conectores e elementos de sequenciação", "Emprego e correlação de tempos e modos verbais"] },
  { sub: "Língua Portuguesa", topic: "Coordenação e subordinação no período", escopo: ["Relações de coordenação entre orações e entre termos", "Relações de subordinação entre orações e entre termos"] },
  { sub: "Língua Portuguesa", topic: "Pontuação e colocação dos pronomes átonos", escopo: ["Emprego dos sinais de pontuação", "Colocação dos pronomes átonos"] },
  { sub: "Língua Portuguesa", topic: "Concordância verbal e nominal e crase", escopo: ["Concordância verbal e nominal", "Emprego do sinal indicativo de crase"] },
  { sub: "Língua Portuguesa", topic: "Reescritura de frases e retextualização", escopo: ["Substituição de palavras ou de trechos de texto", "Retextualização de diferentes gêneros e níveis de formalidade"] },

  // ---------- ÉTICA NO SERVIÇO PÚBLICO ----------
  { sub: "Ética no Serviço Público", topic: "Ética e moral, princípios e valores", escopo: ["Ética e moral", "Ética, princípios e valores"] },
  { sub: "Ética no Serviço Público", topic: "Ética, democracia, cidadania e função pública", escopo: ["Ética e democracia: exercício da cidadania", "Ética e função pública", "Ética no setor público"] },
  { sub: "Ética no Serviço Público", topic: "Lei nº 8.112/1990: procedimentos disciplinares e sindicâncias", escopo: ["Espécies de procedimento disciplinar", "Sindicâncias investigativa, patrimonial e acusatória"] },
  { sub: "Ética no Serviço Público", topic: "Processo administrativo disciplinar: ritos e fases", escopo: ["Processo administrativo disciplinar", "Ritos ordinário e sumário", "Instauração, inquérito e julgamento"] },
  { sub: "Ética no Serviço Público", topic: "Comissão disciplinar: requisitos, suspeição, impedimento e prazos", escopo: ["Requisitos da comissão", "Suspeição e impedimento", "Prazo para conclusão, prorrogação e recondução"] },
  { sub: "Ética no Serviço Público", topic: "Decreto nº 46.852/2018: Código de Ética dos Agentes Públicos de Pernambuco", escopo: ["Código de Ética dos Agentes Públicos da Administração Direta e Indireta do Poder Executivo Estadual"] },

  // ---------- LEGISLAÇÃO ESTADUAL ----------
  { sub: "Legislação Estadual", topic: "Código Penitenciário de PE (Lei nº 15.755/2016): princípios, direitos e deveres", escopo: ["Lei estadual nº 15.755/2016 e alterações: disposições gerais, princípios, direitos e deveres das pessoas presas"] },
  { sub: "Legislação Estadual", topic: "Código Penitenciário de PE (Lei nº 15.755/2016): unidades, disciplina e organização", escopo: ["Lei estadual nº 15.755/2016 e alterações: estabelecimentos, segurança, disciplina, órgãos e organização do sistema"] },
  { sub: "Legislação Estadual", topic: "Lei Complementar nº 106/2007: normas disciplinares dos policiais penais", escopo: ["Normas disciplinares dos policiais penais de Pernambuco"] },
  { sub: "Legislação Estadual", topic: "Constituição do Estado de Pernambuco", escopo: ["Constituição do Estado de Pernambuco e suas alterações"] },
  { sub: "Legislação Estadual", topic: "Lei Complementar nº 422/2019: atribuições do policial penal", escopo: ["Descrições sumárias de atribuições do cargo de policial penal de Pernambuco"] },
  { sub: "Legislação Estadual", topic: "Lei nº 6.123/1968 e Lei Complementar nº 150/2009", escopo: ["Regime jurídico dos funcionários públicos civis do Estado de Pernambuco (Lei nº 6.123/1968)", "Lei Complementar estadual nº 150/2009 e alterações"] },
  { sub: "Legislação Estadual", topic: "Lei Complementar nº 487/2022 e Emenda Constitucional nº 53/2020", escopo: ["Lei Complementar estadual nº 487/2022 e alterações", "Emenda constitucional nº 53/2020"] },

  // ---------- NOÇÕES DE INFORMÁTICA ----------
  { sub: "Noções de Informática", topic: "Sistema operacional Windows", escopo: ["Conceitos e uso do Windows", "Área de trabalho, janelas, configurações e atalhos"] },
  { sub: "Noções de Informática", topic: "Microsoft Office 365: textos, planilhas e apresentações", escopo: ["Edição de textos (Word)", "Planilhas (Excel)", "Apresentações (PowerPoint)"] },
  { sub: "Noções de Informática", topic: "Redes de computadores, Internet, intranet e navegadores", escopo: ["Conceitos básicos de redes", "Internet e intranet", "Microsoft Edge e Google Chrome"] },
  { sub: "Noções de Informática", topic: "Correio eletrônico, sítios de busca, grupos de discussão e redes sociais", escopo: ["Programas de correio eletrônico", "Sítios de busca e pesquisa", "Grupos de discussão", "Redes sociais"] },
  { sub: "Noções de Informática", topic: "Organização e gerenciamento de arquivos, pastas e programas", escopo: ["Conceitos de organização e gerenciamento de informações, arquivos, pastas e programas"] },
  { sub: "Noções de Informática", topic: "Segurança da informação e procedimentos de segurança", escopo: ["Segurança da informação", "Procedimentos de segurança"] },
  { sub: "Noções de Informática", topic: "LGPD: Lei nº 13.709/2018", escopo: ["Lei Geral de Proteção de Dados Pessoais e atualizações"] },

  // ---------- ATUALIDADES (PROVA DISCURSIVA) ----------
  { sub: "Atualidades", topic: "Segurança prisional nacional", escopo: ["Tópicos relevantes e atuais de segurança prisional nacional"] },
  { sub: "Atualidades", topic: "Direitos humanos, política, sociedade e cultura", escopo: ["Direitos humanos e suas inter-relações com política, sociedade, educação, saúde e cultura"] },
  { sub: "Atualidades", topic: "Como escrever a prova discursiva (até 30 linhas)", escopo: ["Estrutura do texto dissertativo", "Critérios de correção e desconto por erros (NPD)"] },

  // ---------- DIREITO ADMINISTRATIVO ----------
  { sub: "Noções de Direito Administrativo", topic: "Regime jurídico-administrativo e princípios da administração", escopo: ["Conceito e fontes do direito administrativo", "Supremacia do interesse público e indisponibilidade", "Princípios expressos e implícitos"] },
  { sub: "Noções de Direito Administrativo", topic: "Organização administrativa: administração direta, indireta e entidades paralelas", escopo: ["Organização, descentralização, desconcentração e órgãos públicos", "Administração pública em sentido amplo/estrito e objetivo/subjetivo", "Administração indireta e entidades paralelas"] },
  { sub: "Noções de Direito Administrativo", topic: "Atos administrativos: conceito, requisitos, atributos e classificação", escopo: ["Conceitos, requisitos, elementos, pressupostos e classificação", "Fato e ato administrativo", "Silêncio administrativo", "Validade, eficácia e autoexecutoriedade", "Simples, complexos e compostos; unilaterais, bilaterais e multilaterais; gerais e individuais; vinculados e discricionários", "Mérito e discricionariedade"] },
  { sub: "Noções de Direito Administrativo", topic: "Atos administrativos: espécies, vícios, extinção e convalidação", escopo: ["Atos administrativos em espécie", "Formação do ato e procedimento", "Ato inexistente; nulos e anuláveis; vícios; teoria das nulidades", "Teoria dos motivos determinantes", "Revogação, anulação, convalidação e cassação"] },
  { sub: "Noções de Direito Administrativo", topic: "Poderes e deveres da administração; uso e abuso do poder", escopo: ["Poder hierárquico, disciplinar, regulamentar e de polícia", "Liberdades públicas e poder de polícia", "Dever de agir, eficiência, probidade e prestação de contas", "Uso e abuso do poder"] },
  { sub: "Noções de Direito Administrativo", topic: "Intervenção do Estado na propriedade e bens públicos", escopo: ["Intervenção do Estado sobre a propriedade privada e no domínio econômico", "Bens públicos: regime jurídico, aquisição, alienação e utilização por particulares"] },
  { sub: "Noções de Direito Administrativo", topic: "Licitações, contratos administrativos e contratação direta", escopo: ["Licitações: modalidades e procedimentos", "Contratos administrativos: modalidades, tipos, procedimento, anulação e revogação", "Dispensa e inexigibilidade"] },
  { sub: "Noções de Direito Administrativo", topic: "Convênios, consórcios, parcerias público-privadas e concessões", escopo: ["Convênios e consórcios administrativos", "PPP: Lei nº 11.079/2004", "Concessão, permissão e autorização: Lei nº 8.987/1995"] },
  { sub: "Noções de Direito Administrativo", topic: "Controle da administração e processo administrativo (Lei nº 9.784/1999)", escopo: ["Controle administrativo, judicial e legislativo", "Lei nº 9.784/1999", "Processo administrativo disciplinar"] },
  { sub: "Noções de Direito Administrativo", topic: "Agentes públicos e responsabilidade civil, penal e administrativa", escopo: ["Espécies e classificação", "Cargo, emprego e função públicos", "Provimento e vacância", "Responsabilidade civil, penal e administrativa"] },
  { sub: "Noções de Direito Administrativo", topic: "Improbidade administrativa", escopo: ["Lei nº 8.429/1992 e alterações da Lei nº 14.230/2021"] },

  // ---------- DIREITO CONSTITUCIONAL ----------
  { sub: "Noções de Direito Constitucional", topic: "Constituição, poder constituinte, aplicabilidade e interpretação", escopo: ["Conceito, objeto, elementos e classificações", "Supremacia, aplicabilidade e interpretação", "Mutação constitucional", "Poder constituinte originário e derivado"] },
  { sub: "Noções de Direito Constitucional", topic: "Princípios fundamentais e direitos e deveres individuais e coletivos", escopo: ["Princípios fundamentais", "Direitos e deveres individuais e coletivos (art. 5º)", "Ente estatal titular de direitos fundamentais"] },
  { sub: "Noções de Direito Constitucional", topic: "Remédios constitucionais, direitos sociais e direitos políticos", escopo: ["Habeas corpus, mandado de segurança, mandado de injunção e habeas data", "Direitos sociais", "Direitos políticos e partidos políticos"] },
  { sub: "Noções de Direito Constitucional", topic: "Organização do Estado e intervenção", escopo: ["Organização político-administrativa e Estado federal", "União, Estados, Municípios, Distrito Federal e Territórios", "Intervenção federal e dos Estados nos Municípios"] },
  { sub: "Noções de Direito Constitucional", topic: "Administração pública e servidores públicos na Constituição", escopo: ["Disposições gerais (art. 37)", "Servidores públicos"] },
  { sub: "Noções de Direito Constitucional", topic: "Organização dos Poderes e funções essenciais à justiça", escopo: ["Freios e contrapesos", "Poder Legislativo, Executivo e Judiciário", "Ministério Público, advocacia pública e Defensoria Pública"] },
  { sub: "Noções de Direito Constitucional", topic: "Controle de constitucionalidade", escopo: ["Sistemas e sistema brasileiro", "Controle incidental e abstrato", "ADC, ADI, ADPF, ADO e ADI interventiva"] },
  { sub: "Noções de Direito Constitucional", topic: "Defesa do Estado e das instituições democráticas e segurança pública", escopo: ["Estado de defesa e estado de sítio", "Forças armadas", "Segurança pública (art. 144)"] },
  { sub: "Noções de Direito Constitucional", topic: "Sistema tributário, finanças públicas, ordem econômica e Sistema Financeiro Nacional", escopo: ["Sistema Tributário Nacional", "Finanças públicas e orçamentos", "Ordem econômica e financeira", "Sistema Financeiro Nacional"] },
  { sub: "Noções de Direito Constitucional", topic: "Ordem social, EC nº 103/2019, indígenas e quilombolas", escopo: ["Ordem social", "Emenda Constitucional nº 103/2019", "Populações indígenas", "Comunidades remanescentes de quilombos"] },

  // ---------- DIREITO PENAL ----------
  { sub: "Noções de Direito Penal", topic: "Aplicação da lei penal", escopo: ["Legalidade e anterioridade", "Lei penal no tempo e no espaço", "Tempo e lugar do crime", "Lei excepcional, especial e temporária", "Territorialidade e extraterritorialidade", "Contagem de prazo, interpretação, analogia e irretroatividade"] },
  { sub: "Noções de Direito Penal", topic: "Teoria geral do crime: fato típico, tentativa e concurso de crimes", escopo: ["Conceitos e evolução", "Infração penal, sujeitos ativo e passivo", "Fato típico e seus elementos", "Crime consumado e tentado", "Concurso de crimes"] },
  { sub: "Noções de Direito Penal", topic: "Ilicitude, culpabilidade, imputabilidade e punibilidade", escopo: ["Ilicitude e causas de exclusão", "Excesso punível", "Culpabilidade e causas de exclusão", "Imputabilidade penal", "Punibilidade"] },
  { sub: "Noções de Direito Penal", topic: "Concurso de pessoas", escopo: ["Concurso de pessoas"] },
  { sub: "Noções de Direito Penal", topic: "Crimes contra a pessoa", escopo: ["Crimes contra a pessoa"] },
  { sub: "Noções de Direito Penal", topic: "Crimes contra o patrimônio", escopo: ["Crimes contra o patrimônio"] },
  { sub: "Noções de Direito Penal", topic: "Crimes contra a dignidade sexual, a incolumidade pública e a paz pública", escopo: ["Crimes contra a dignidade sexual", "Crimes contra a incolumidade pública", "Crimes contra a paz pública"] },
  { sub: "Noções de Direito Penal", topic: "Crimes contra a fé pública e contra a administração pública", escopo: ["Crimes contra a fé pública", "Crimes contra a administração pública"] },

  // ---------- DIREITO PROCESSUAL PENAL ----------
  { sub: "Noções de Direito Processual Penal", topic: "Princípios, lei processual penal e sistemas processuais", escopo: ["Princípios gerais, conceito, finalidade, características e fontes", "Lei processual penal: eficácia, interpretação, analogia, imunidades", "Sistemas de processo penal"] },
  { sub: "Noções de Direito Processual Penal", topic: "Inquérito policial", escopo: ["Natureza, finalidade, características, titularidade, valor probatório", "Formas de instauração, notitia criminis, delatio criminis", "Indiciamento, garantias do investigado, conclusão e prazos"] },
  { sub: "Noções de Direito Processual Penal", topic: "Ação penal e sujeitos do processo", escopo: ["Processo criminal: finalidade, pressupostos e sistemas", "Ação penal: conceito, características, espécies e condições", "Juiz, Ministério Público, acusado, defensor, assistente, auxiliares da justiça, impedimentos e suspeições"] },
  { sub: "Noções de Direito Processual Penal", topic: "Competência, juizados especiais criminais e termo circunstanciado", escopo: ["Competência", "Juizados especiais criminais e aplicação na justiça federal", "Termo circunstanciado de ocorrência; atos processuais: forma, lugar e tempo"] },
  { sub: "Noções de Direito Processual Penal", topic: "Provas: teoria geral, ilicitude e meios de prova", escopo: ["Conceito, objeto, classificação e sistemas de avaliação", "Princípios, procedimento probatório, valoração e ônus", "Provas ilícitas", "Perícias, interrogatório, confissão, testemunhas, reconhecimento, acareação, documentos e indícios"] },
  { sub: "Noções de Direito Processual Penal", topic: "Busca e apreensão, exame de corpo de delito e cadeia de custódia", escopo: ["Busca e apreensão pessoal e domiciliar", "Exame de corpo de delito, cadeia de custódia e perícias"] },
  { sub: "Noções de Direito Processual Penal", topic: "Prisão: flagrante, temporária, preventiva, fiança e liberdade provisória", escopo: ["Conceito, espécies, mandado e cumprimento", "Prisão em flagrante, temporária e preventiva", "Necessidade, prisão especial, liberdade provisória e fiança"] },
  { sub: "Noções de Direito Processual Penal", topic: "Medidas cautelares, citação, sentença, ações autônomas e procedimentos", escopo: ["Medidas cautelares diversas da prisão", "Citação, intimação, interdição de direito", "Crimes de responsabilidade dos funcionários públicos", "Sentença, coisa julgada, habeas corpus e mandado de segurança", "Processo dos crimes comuns"] },

  // ---------- LEGISLAÇÃO ESPECIAL ----------
  { sub: "Legislação Especial", topic: "Lei de Drogas (Lei nº 11.343/2006)", escopo: ["Tráfico ilícito e uso indevido de substâncias entorpecentes"] },
  { sub: "Legislação Especial", topic: "Abuso de autoridade (Lei nº 13.869/2019)", escopo: ["Direito de representação e processo de responsabilidade administrativa, civil e penal nos casos de abuso de autoridade"] },
  { sub: "Legislação Especial", topic: "Tortura (Lei nº 9.455/1997) e crimes hediondos (Lei nº 8.072/1990)", escopo: ["Crimes de tortura", "Crimes hediondos"] },
  { sub: "Legislação Especial", topic: "Estatuto da Criança e do Adolescente (Lei nº 8.069/1990)", escopo: ["Estatuto da Criança e do Adolescente e alterações"] },
  { sub: "Legislação Especial", topic: "Estatuto do Desarmamento (Lei nº 10.826/2003)", escopo: ["Estatuto do Desarmamento e alterações"] },
  { sub: "Legislação Especial", topic: "Crimes ambientais (Lei nº 9.605/1998) e crimes de trânsito (Lei nº 9.503/1997)", escopo: ["Crimes ambientais", "Crimes de trânsito"] },
  { sub: "Legislação Especial", topic: "Maria da Penha, Estatuto da Pessoa Idosa e Estatuto da Juventude", escopo: ["Lei nº 11.340/2006", "Lei nº 10.741/2003", "Lei nº 12.852/2013"] },
  { sub: "Legislação Especial", topic: "Organizações criminosas, lavagem de dinheiro e marco legal do crime organizado", escopo: ["Lei nº 12.850/2013", "Lei nº 9.613/1998", "Lei nº 15.358/2026"] },
  { sub: "Legislação Especial", topic: "Racismo (Lei nº 7.716/1989), crimes eleitorais (Lei nº 4.737/1965) e Juizados Especiais Criminais (Lei nº 9.099/1995)", escopo: ["Crimes resultantes de preconceito de raça ou cor", "Crimes eleitorais", "Juizados especiais criminais"] },
  { sub: "Legislação Especial", topic: "Interceptação telefônica (Lei nº 9.296/1996) e investigação criminal (Lei nº 12.830/2013)", escopo: ["Interceptação telefônica: conceito, provas ilícitas e disposições legais", "Investigação criminal conduzida pelo delegado de polícia"] },

  // ---------- EXECUÇÃO PENAL ----------
  { sub: "Execução Penal (LEP)", topic: "LEP: objeto, princípios, classificação e assistência", escopo: ["Lei nº 7.210/1984: objeto, aplicação, classificação dos condenados e assistências"] },
  { sub: "Execução Penal (LEP)", topic: "LEP: direitos, deveres e disciplina", escopo: ["Direitos e deveres do preso", "Disciplina: faltas, sanções, procedimento disciplinar, RDD"] },
  { sub: "Execução Penal (LEP)", topic: "LEP: trabalho e remição", escopo: ["Trabalho interno e externo", "Remição pelo trabalho, estudo e leitura"] },
  { sub: "Execução Penal (LEP)", topic: "LEP: estabelecimentos penais, regimes, progressão e saídas", escopo: ["Estabelecimentos penais", "Regimes de cumprimento", "Progressão e regressão", "Autorizações de saída, livramento condicional e monitoração eletrônica"] },
  { sub: "Execução Penal (LEP)", topic: "LEP: órgãos da execução, execução das penas e incidentes", escopo: ["Órgãos da execução penal", "Execução das penas privativas de liberdade, restritivas de direitos e medidas de segurança", "Incidentes, recursos e Juízo da execução"] },
  { sub: "Execução Penal (LEP)", topic: "Sistema Penitenciário Federal: Lei nº 11.671/2008 e Decreto nº 6.877/2009", escopo: ["Lei nº 11.671/2008", "Decreto nº 6.877/2009"] },
  { sub: "Execução Penal (LEP)", topic: "Saúde e educação no sistema prisional: Portaria Interministerial nº 1/2014, Decreto nº 7.626/2011 e Resolução CNPCP nº 3/2009", escopo: ["Portaria Interministerial MS/MJ nº 1/2014", "Decreto nº 7.626/2011", "Resolução CNPCP nº 3/2009"] },
  { sub: "Execução Penal (LEP)", topic: "Resoluções CNPCP nº 1/2014 e nº 9/2009 e Portaria Interministerial nº 210/2014 (mulheres)", escopo: ["Resolução CNPCP nº 1/2014 (saúde mental)", "Resolução CNPCP nº 9/2009 (proporção de agentes)", "Portaria Interministerial MJ/SPM nº 210/2014"] },

  // ---------- DIREITOS HUMANOS E PARTICIPAÇÃO SOCIAL ----------
  { sub: "Noções de Direitos Humanos e Participação Social", topic: "Teoria geral e afirmação histórica dos direitos humanos", escopo: ["Conceitos, terminologia, estrutura normativa, fundamentação", "Afirmação histórica"] },
  { sub: "Noções de Direitos Humanos e Participação Social", topic: "Direitos humanos, responsabilidade do Estado, Constituição e tratados", escopo: ["Direitos humanos e responsabilidade do Estado", "Direitos humanos na Constituição Federal", "Constituição e tratados internacionais de direitos humanos"] },
  { sub: "Noções de Direitos Humanos e Participação Social", topic: "Declaração Universal dos Direitos Humanos (1948)", escopo: ["Resolução 217-A (III) da Assembleia Geral da ONU"] },
  { sub: "Noções de Direitos Humanos e Participação Social", topic: "Pacto de São José da Costa Rica (Decreto nº 678/1992)", escopo: ["Convenção Americana sobre Direitos Humanos"] },
  { sub: "Noções de Direitos Humanos e Participação Social", topic: "Regras Mínimas da ONU para o tratamento de pessoas presas (Regras de Mandela)", escopo: ["Regras mínimas da ONU para o tratamento de pessoas presas"] },
  { sub: "Noções de Direitos Humanos e Participação Social", topic: "Política Nacional de Direitos Humanos: Decreto nº 7.037/2009 (PNDH-3)", escopo: ["Política Nacional de Direitos Humanos", "Programa Nacional de Direitos Humanos"] },
  { sub: "Noções de Direitos Humanos e Participação Social", topic: "CNPCP, conselhos penitenciários e conselhos da comunidade", escopo: ["CNPCP: arts. 62 a 64 da LEP", "Conselhos penitenciários: arts. 69 e 70", "Conselhos da comunidade: arts. 80 e 81"] }
];
