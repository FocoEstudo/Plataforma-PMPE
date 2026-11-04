// Edital PPPE (Polícia Penal de Pernambuco) - banca Cebraspe.
// Fonte: conteúdo programático informado pelo responsável; conferir com o edital oficial antes de publicar.
window.PPPE_EDITAL = {
  concurso: "pppe",
  nome: "Polícia Penal de Pernambuco",
  banca: "Cebraspe",
  questoes: { gerais: 20, especificas: 40 },
  redacao: { tipo: "dissertativa", maxLinhas: 30, foco: "Direitos Humanos e realidade do sistema prisional / segurança pública" },
  blocos: [
    {
      id: "gerais",
      titulo: "Conhecimentos Gerais",
      questoes: 20,
      disciplinas: [
        {
          id: "portugues",
          nome: "Língua Portuguesa",
          topicos: [
            "Compreensão e interpretação de textos de gêneros variados",
            "Reconhecimento de tipos e gêneros textuais",
            "Ortografia oficial",
            "Acentuação gráfica",
            "Emprego das classes de palavras",
            "Sintaxe da oração e do período",
            "Pontuação",
            "Concordância nominal e verbal",
            "Regência nominal e verbal",
            "Emprego do sinal indicativo de crase",
            "Reescrita de frases"
          ]
        },
        {
          id: "logica",
          nome: "Raciocínio Lógico",
          topicos: [
            "Estruturas lógicas",
            "Lógica de argumentação: analogias, deduções e conclusões",
            "Diagramas lógicos",
            "Princípios de contagem e probabilidade",
            "Operações com conjuntos",
            "Problemas aritméticos e geométricos"
          ]
        },
        {
          id: "informatica",
          nome: "Noções de Informática",
          topicos: [
            "Sistemas operacionais (Windows e Linux)",
            "Navegação e correio eletrônico",
            "Redes de computadores",
            "Segurança da informação: vírus, backup e firewalls",
            "Organização e gerenciamento de arquivos e pastas"
          ]
        },
        {
          id: "legislacao-estadual",
          nome: "Legislação Estadual",
          topicos: [
            "Constituição do Estado de Pernambuco",
            "Código Penitenciário do Estado de Pernambuco (Lei nº 15.755/2016)",
            "Normas disciplinares dos Policiais Penais (Lei Complementar nº 106/2007)",
            "Atribuições do cargo (Lei Complementar nº 422/2019)"
          ]
        },
        {
          id: "atualidades",
          nome: "Atualidades",
          topicos: [
            "Segurança pública nacional",
            "Sistema prisional",
            "Desenvolvimento sustentável e ecologia",
            "Direitos humanos"
          ]
        }
      ]
    },
    {
      id: "especificos",
      titulo: "Conhecimentos Específicos",
      questoes: 40,
      disciplinas: [
        {
          id: "lep",
          nome: "Execução Penal (LEP)",
          prioridade: "alta",
          topicos: [
            "Lei nº 7.210/1984",
            "Direitos e deveres do preso",
            "Regimes de cumprimento de pena",
            "Faltas disciplinares",
            "Órgãos da execução penal",
            "Estabelecimentos penais",
            "Trabalho e assistência ao preso"
          ]
        },
        {
          id: "constitucional",
          nome: "Noções de Direito Constitucional",
          topicos: [
            "Princípios fundamentais da CF/88",
            "Direitos e garantias fundamentais: individuais, coletivos e sociais",
            "Segurança pública (art. 144 da CF)",
            "Organização do Estado e dos Poderes"
          ]
        },
        {
          id: "administrativo",
          nome: "Noções de Direito Administrativo",
          topicos: [
            "Estado, governo e administração pública",
            "Atos administrativos: requisitos, atributos e invalidação",
            "Agentes públicos: normas constitucionais, deveres e responsabilidades",
            "Poderes da administração",
            "Responsabilidade civil do Estado"
          ]
        },
        {
          id: "penal",
          nome: "Noções de Direito Penal",
          topicos: [
            "Aplicação da lei penal: tempo e lugar do crime",
            "Conceito de crime, ilicitude e culpabilidade",
            "Crimes contra a pessoa: homicídio e lesão corporal",
            "Crimes contra o patrimônio",
            "Crimes contra a administração pública: peculato, concussão, corrupção e prevaricação"
          ]
        },
        {
          id: "processo-penal",
          nome: "Noções de Direito Processual Penal",
          topicos: [
            "Inquérito policial",
            "Ação penal",
            "Prisão em flagrante, preventiva e temporária",
            "Disposições constitucionais aplicadas ao processo penal"
          ]
        },
        {
          id: "legislacao-especial",
          nome: "Legislação Especial",
          topicos: [
            "Lei de Tortura (Lei nº 9.455/1997)",
            "Lei de Abuso de Autoridade (Lei nº 13.869/2019)",
            "Lei de Drogas (Lei nº 11.343/2006)",
            "Estatuto do Desarmamento (Lei nº 10.826/2003)",
            "Lei de Organizações Criminosas (Lei nº 12.850/2013)"
          ]
        },
        {
          id: "direitos-humanos",
          nome: "Noções de Direitos Humanos e Participação Social",
          topicos: [
            "Declaração Universal dos Direitos Humanos",
            "Convenção Americana sobre Direitos Humanos (Pacto de San José)",
            "Regras Mínimas da ONU para o Tratamento de Presos (Regras de Mandela)",
            "Proteção dos direitos humanos nas prisões"
          ]
        }
      ]
    }
  ]
};
