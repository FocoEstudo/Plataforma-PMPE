(function () {
  'use strict';
  const topic = 'Compreensão, interpretação e tipologia textual';
  const guide = window.PMPE_TOPIC_GUIDES && window.PMPE_TOPIC_GUIDES[topic];
  if (!guide || !window.PMPE_DEEPENING) {
    console.error('Apostila de interpretação não carregada: guia ou aprofundamentos ausentes.');
    return;
  }

  const lessons = [
    {
      blocks: [
        ['h', 'O que procurar no texto'],
        ['p', 'Uma informação expressa aparece no enunciado, embora a questão possa reformulá-la com outras palavras. Inferir é combinar pistas efetivamente presentes com relações de sentido necessárias à compreensão. Extrapolar é acrescentar uma causa, intenção, quantidade ou consequência que o texto não permite afirmar. Para decidir, volte ao trecho, identifique quem praticou a ação e observe o tempo verbal e as palavras que limitam o alcance da afirmação.'],
        ['p', 'Em “Alguns relatórios foram revisados”, a palavra alguns não permite concluir que todos foram revisados; tampouco permite afirmar que nenhum foi. Se o texto diz que a revisão pode reduzir erros, não garante que ela reduzirá erros em todas as situações. Possibilidade, certeza e obrigação são noções diferentes.'],
        ['h', 'Como resolver'],
        ['ol', ['Sublinhe o trecho que sustenta a alternativa.', 'Compare sujeito, ação, tempo, quantidade e grau de certeza.', 'Se a alternativa acrescentar uma relação causal ou intenção, procure evidência específica.', 'Descarte a alternativa se depender de uma hipótese que o texto não estabelece.']],
        ['h', 'Exercício comentado'],
        ['p', 'Texto: “Parte dos atendimentos foi agendada pela internet.” Afirmação: “Todos os atendimentos foram agendados pela internet.” Errado. “Parte” não equivale a “todos”; o texto não informa o meio usado nos demais atendimentos.']
      ]
    },
    {
      blocks: [
        ['h', 'Da questão geral à posição do autor'],
        ['p', 'Para identificar o tema, formule uma expressão curta que abranja o texto inteiro. Para encontrar uma tese, pergunte qual conclusão ou posicionamento o autor procura defender. Em seguida, identifique como ele procura convencer o leitor: pode apresentar dados, comparar situações, citar exemplos ou explicar consequências. Um exemplo ajuda a ilustrar uma afirmação, mas não é necessariamente a tese central.'],
        ['p', 'A ordem varia: a tese pode aparecer no início, no final ou ser construída ao longo do texto. Conectores ajudam a reconhecer as relações: “porque” pode introduzir justificativa, “portanto” costuma indicar conclusão e “por exemplo” sinaliza exemplificação. Avalie sempre o uso no contexto, sem tratar uma palavra isolada como prova suficiente.'],
        ['h', 'Como resolver'],
        ['ol', ['Identifique o assunto comum aos parágrafos.', 'Localize a posição ou conclusão defendida, se houver.', 'Separe os fundamentos e exemplos usados para sustentá-la.', 'Elimine alternativas que transformem detalhe secundário em ideia central.']],
        ['h', 'Exercício comentado'],
        ['p', 'Texto: “A formação continuada deve integrar a rotina das equipes, pois atualiza procedimentos e favorece a padronização.” Afirmação: “A tese é a necessidade de formação continuada na rotina.” Certo. A atualização e a padronização são os argumentos apresentados para essa proposta.']
      ]
    },
    {
      blocks: [
        ['h', 'Reconhecendo a organização'],
        ['p', 'A narração apresenta acontecimentos e sua progressão, geralmente com ações situadas no tempo. A descrição caracteriza pessoas, objetos, lugares ou situações. A exposição organiza informações e explica conceitos. A argumentação defende uma posição por meio de razões. A injunção orienta comportamentos ou procedimentos, como em instruções, editais e manuais. Essas categorias descrevem a organização predominante, não uma divisão rígida de cada frase.'],
        ['p', 'Um relatório pode narrar um fato e depois descrever o local. Uma reportagem pode informar dados e incluir falas argumentativas. Um manual pode combinar comandos com explicações. Para resolver a questão, observe a finalidade e a distribuição dos trechos, em vez de procurar uma única palavra que determine toda a classificação.'],
        ['h', 'Exercício comentado'],
        ['p', 'Trecho: “Antes de enviar o formulário, confira os dados e anexe os documentos exigidos.” Predomina a injunção: o trecho orienta uma sequência de ações. A menção a documentos não torna o trecho predominantemente descritivo.']
      ]
    },
    {
      blocks: [
        ['h', 'Como identificar um gênero'],
        ['p', 'Pergunte quem escreve, para quem, com qual objetivo e em que contexto o texto circula. Um relatório pode registrar resultados de uma inspeção para uma chefia; uma notícia pode relatar um acontecimento para o público; um manual pode orientar um usuário. Título, linguagem e formatação ajudam na identificação, mas o tema isolado não define o gênero.'],
        ['p', 'A distinção importa porque a banca pode combinar uma descrição com uma função comunicativa: um relatório pode conter passagens narrativas, descritivas e expositivas sem deixar de ser relatório. Do mesmo modo, um artigo de opinião frequentemente utiliza exposição de fatos para sustentar argumentos. Identifique separadamente a prática social e o modo de organização predominante.'],
        ['h', 'Exercício comentado'],
        ['p', 'Afirmação: “Todo relatório é exclusivamente descritivo.” Errado. O relatório é um gênero e pode conter descrição, narração e exposição, conforme sua finalidade e seu conteúdo.']
      ]
    }
  ];

  if (guide.lessons.length !== lessons.length) {
    console.error('Apostila de interpretação não carregada: número inesperado de aulas.');
    return;
  }
  window.PMPE_DEEPENING[topic] = Object.fromEntries(lessons.map((item, index) => [index + 1, item.blocks]));
})();
