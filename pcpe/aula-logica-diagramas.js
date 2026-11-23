(function () {
  'use strict';
  window.PCPE_TOPIC_GUIDES = window.PCPE_TOPIC_GUIDES || {};
  window.PCPE_DEEPENING = window.PCPE_DEEPENING || {};
  window.PCPE_QUESTOES = window.PCPE_QUESTOES || {};
  const topic = 'Diagramas e álgebra de proposições';
  const base = window.PCPE_TOPIC_GUIDES[topic] || {};
  window.PCPE_TOPIC_GUIDES[topic] = Object.assign({}, base, {
    lessons: [
      [
        `Aula 1 · O que é equivalência lógica`,
        `Duas proposições são equivalentes quando têm exatamente o mesmo sentido e o mesmo valor lógico, mesmo que estejam escritas com palavras e estruturas gramaticais diferentes. Em vez de resolver as proposições longas das provas pelo sentido das palavras, você usa duas ferramentas mecânicas: a regra "nega, nega, troca, troca" e a regra do OU.`,
        `"Eu sou feliz" e "Eu não sou infeliz" têm palavras diferentes (há até uma dupla negação), mas carregam a mesma carga de verdade: são equivalentes.`,
        `Equivalência não é conversa de intuição: ela se prova por transformação com regra ou por tabela-verdade. Se a frase nova mudar o valor lógico em alguma linha da tabela, ela não é equivalente.`
      ],
      [
        `Aula 1 · Regra "nega, nega, troca, troca" (condicional)`,
        `Para a condicional "se p, então q", o primeiro caminho de equivalência tem três passos: (1) negue o antecedente; (2) negue o consequente; (3) troque os dois de lugar, mantendo o conectivo "se... então". Em símbolos: p -> q é equivalente a ~q -> ~p.`,
        `"Se estiver sol, vou para a praia" equivale a "Se não fui para a praia, não estava sol": "fui para a praia" foi negado e foi para o início; "estava sol" foi negado e foi para o final.`,
        `Você precisa fazer os três passos juntos: negar sem trocar, ou trocar sem negar, produz uma frase que NÃO é equivalente. Os blocos mudam de posição e ganham negação; o "se... então" permanece.`
      ],
      [
        `Aula 1 · Regra do OU e negação do ou (De Morgan)`,
        `O segundo caminho para a condicional é a regra do OU: (1) negue o antecedente; (2) troque o conectivo "se... então" por "ou"; (3) mantenha o consequente exatamente como está. Em símbolos: p -> q é equivalente a ~p v q. Aqui os blocos NÃO trocam de lugar. Para negar uma disjunção ("ou"), você nega as duas partes e troca "ou" por "e": ~(p v q) é equivalente a ~p ^ ~q (e, simetricamente, ~(p ^ q) é equivalente a ~p v ~q).`,
        `"Se colocar o dedo no bolo, ficará de castigo" vira "Não coloque o dedo no bolo ou ficará de castigo". "Se João não é bandido, ele não foi preso" vira "João é bandido ou ele não foi preso" (que você pode ler como "João não foi preso ou ele é bandido").`,
        `Na regra do OU só o antecedente é negado; o consequente fica intacto. Quando você negar um bloco que contém "ou" ou "e", lembre que o conectivo interno também se troca (ou vira e; e vira ou).`
      ],
      [
        `Aula 1 · Questões resolvidas e proposições complexas`,
        `Escolha a ferramenta pela forma da frase: antecedente simples permite a regra do OU (ou a contrapositiva); antecedente composto pede, em geral, "nega, nega, troca, troca", lembrando de trocar o conectivo interno ao negar. Nas fórmulas simbólicas grandes e nos textos densos, fatie a frase em blocos (A, B, P, Q, R), aplique a regra e compare cada conectivo com o da alternativa.`,
        `"Se João chegou, então Maria está atrasada" equivale a "João não chegou ou Maria está atrasada". "Se chove ou neva, então o chão fica molhado" equivale a "Se o chão não está molhado, então não choveu e não nevou". "O bom jornalista não faz reportagem em benefício próprio nem deixa de fazer aquela que prejudique seus interesses" equivale a "Não é verdade que o jornalista faça a primeira ou deixe de fazer a segunda".`,
        `Em questões com símbolos, o erro da banca costuma estar em um único conectivo (um "e" que deveria ser "ou", por exemplo). Aplique a regra completa e confira conectivo por conectivo antes de marcar certo ou errado.`
      ],
      [
        `Aula 2 · Simbologia e conjuntos numéricos`,
        `Operar com conjuntos exige conhecer a simbologia: ∩ (U de cabeça para baixo) é interseção; ∪ (U normal) é união; ∈ é "pertence" e ∉ é "não pertence"; ⊂ é "está contido", ⊄ é "não está contido", ⊃ é "contém" e ⊅ é "não contém". Pertence e não pertence ligam ELEMENTO a conjunto; contido, não contido, contém e não contém ligam CONJUNTO a conjunto. Os conjuntos numéricos formam uma cadeia: naturais estão contidos nos inteiros, que estão contidos nos racionais, que estão contidos nos reais; racionais ∪ irracionais = reais.`,
        `Questão Fundatec 2022: U = {0, 5, 10, 15, 20, 25}. (1) Para todo x em U, x é múltiplo de 5: verdadeira. (2) Existe x em U tal que 3x + 5 = 25: 3x = 20, x = 20/3, que não está em U; falsa. (3) Para todo x em U, x² >= 0: verdadeira. Logo, 1 e 3 são verdadeiras e 2 é falsa.`,
        `Com B = {1, 2, 3}, diga "1 pertence a B" (elemento para conjunto), nunca "1 está contido em B". Um conjunto relaciona-se com outro por inclusão, não por pertinência.`
      ],
      [
        `Aula 2 · Representação, pertinência, subconjuntos e conjunto das partes`,
        `Um conjunto pode ser representado por designação (listar os elementos), por característica (x tal que x tem a propriedade P) ou por diagrama; o diagrama é o preferido por ser visual. Todo conjunto é subconjunto de si mesmo, e o conjunto vazio é subconjunto de qualquer conjunto. O conjunto das partes de A reúne todos os subconjuntos de A; se A tem n elementos, ele tem 2^n subconjuntos.`,
        `A = {1, 2} tem partes: vazio, {1}, {2} e {1, 2}, ou seja, 4 = 2^2. B = {3, 4, 5} tem 8 subconjuntos = 2^3. Um conjunto de 5 elementos tem 2^5 = 32 subconjuntos.`,
        `A ordem dos elementos não importa: {3, 4} e {4, 3} são o mesmo subconjunto. Cuidado para não esquecer de contar o vazio e o próprio conjunto entre os 2^n.`
      ],
      [
        `Aula 2 · Operações com conjuntos e fórmulas de contagem`,
        `União (A ∪ B) reúne os elementos de A ou de B, sem repetir nenhum. Interseção (A ∩ B) traz o que está nos dois; se for vazia, os conjuntos são disjuntos. Diferença (A - B) mantém o que é de A e não é de B. Diferença simétrica reúne o que está em só um dos conjuntos: (A - B) ∪ (B - A), equivalente à disjunção exclusiva. Complementar de A é tudo que está no universo e não está em A. Para contar: n(A ∪ B) = n(A) + n(B) - n(A ∩ B); com três conjuntos, n(A ∪ B ∪ C) = n(A) + n(B) + n(C) - n(A ∩ B) - n(A ∩ C) - n(B ∩ C) + n(A ∩ B ∩ C).`,
        `Com A = {1, 2, 3, 4} e B = {3, 5}: A ∩ B = {3}; A ∪ B = {1, 2, 3, 4, 5}; A - B = {1, 2, 4}; B - A = {5}; diferença simétrica = {1, 2, 4, 5}. Numa sala, 60 gostam de exercício, 50 de cinema e 10 de ambos: só exercício = 50, só cinema = 40 e o total é 50 + 10 + 40 = 100 (ou 60 + 50 - 10 = 100).`,
        `Comece sempre pela interseção ao preencher o diagrama e use as regiões (só A, só B, ambos, fora). Quando o problema pede poucos elementos para listar, contar direto pode ser mais rápido que a fórmula de três conjuntos.`
      ],
      [
        `Aula 2 · Questões resolvidas, parte 1 (diagramas e conjuntos)`,
        `Nesta bateria você resolve com a ordem: ler o universo, anotar a interseção, subtrair para achar as regiões exclusivas, conferir a soma com o total. Para afirmações sobre diagramas (esportes), atenção ao conectivo usado ("ou" é inclusivo; "qualquer" significa "todo") e à diferença entre "apenas X" e "X".`,
        `Esportes de aventura (Vunesp): gabarito C, "os praticantes de paraquedismo que não são apenas de P praticam M ou praticam A". Turma de 40 alunos (futebol 18, vôlei 22, 4 sem esporte, 8 só outros): praticam futebol e vôlei 12. Conjuntos A, B e C com união {0, ..., 9}: 10 elementos. 30 jogadores (16 esquerda, 20 direita): 24 usam só uma perna. Henrique e os 45 convidados (28 boi, 15 porco, 7 veganos): 5 comem boi e porco.`,
        `Ao verificar uma alternativa que diz "A" (o conjunto inteiro), conte também as interseções de A com os outros conjuntos. "Apenas A" exclui as interseções.`
      ],
      [
        `Aula 2 · Questões resolvidas, parte 2 (união, pesquisas e pegadinhas)`,
        `Aqui você aplica o mesmo método a união simples, pesquisas com "nem um nem outro" e a leitura de um diagrama de Venn com três serviços. O total do universo menos a união dá os que ficam fora dos conjuntos. A palavra "todos" (todos comeram algo) significa que fora da união há zero elemento.`,
        `A = {1, 3, 5, 7} e B = {2, 4, 5, 9, 10}: A ∪ B = {1, 2, 3, 4, 5, 7, 9, 10} (8 elementos, com o 5 contado uma vez). Pesquisa com 103 pessoas (67 gelo, 47 limão, 28 ambos): 17 não gostam de nenhum. Classe de 30 (18 matemática, 12 ciência, 5 ambas): 5 não gostam de nenhuma. Festa (10 só pizza, 15 só lasanha, 5 ambos, todos comeram algo): 30 pessoas.`,
        `Na questão da oficina (serviços A, B e C), "não existe realização apenas do serviço B" é verdadeira (zero), mas "não existe realização do serviço B" é falsa: B inclui as interseções. A banca induz o erro trocando "apenas" por "completamente considerado".`
      ]
    ],
    practice: [
      `Escreva a regra "nega, nega, troca, troca" e aplique-a em "Se estiver sol, vou para a praia". Depois escreva a regra do OU e aplique-a em "Se João chegou, então Maria está atrasada".`,
      `Dê a negação de "chove ou neva" e a equivalente de "Se chove ou neva, então o chão fica molhado". Por que o conectivo muda?`,
      `Para que servem os símbolos de pertence e de contido? Dê um exemplo de cada com B = {1, 2, 3}.`,
      `Quantos subconjuntos tem {3, 4, 5}? Liste-os. Qual é a fórmula geral?`,
      `Numa pesquisa com 103 pessoas, 67 gostam de gelo, 47 de limão e 28 dos dois. Quantas não gostam de nenhum? Resolva por diagrama e por fórmula.`
    ],
    answers: [
      `Nega o antecedente, nega o consequente e troca-os de lugar: "Se não fui para a praia, não estava sol". Regra do OU: nega o antecedente, troca "se... então" por "ou" e mantém o consequente: "João não chegou ou Maria está atrasada".`,
      `~(p v q) = ~p ^ ~q, então a negação é "não chove e não neva". A equivalente é "Se o chão não está molhado, então não choveu e não nevou". O "ou" vira "e" porque, ao negar um "ou", você nega as duas partes e troca o conectivo.`,
      `Pertence/não pertence relacionam elemento e conjunto (1 pertence a B; 5 não pertence a B). Contido/contém relacionam conjunto e conjunto (A = {1, 2} está contido em B; B contém A).`,
      `São 2^3 = 8: vazio, {3}, {4}, {5}, {3, 4}, {3, 5}, {4, 5} e {3, 4, 5}. Fórmula: 2^n, em que n é o número de elementos.`,
      `Diagrama: interseção 28; só gelo = 67 - 28 = 39; só limão = 47 - 28 = 19; união = 39 + 28 + 19 = 86; 103 - 86 = 17. Fórmula: 67 + 47 - 28 = 86; 103 - 86 = 17.`
    ]
  });

  window.PCPE_DEEPENING[topic] = {
    1: [
      ['h', 'Equivalência: o que você procura'],
      ['p', 'Quando as provas pedem uma "proposição equivalente", você procura outra frase com exatamente o mesmo sentido e o mesmo valor lógico. As palavras e a estrutura gramatical podem mudar completamente; o que não pode mudar é a essência da verdade da frase. Se a original é verdadeira, a equivalente também é; se a original é falsa, a equivalente também é, em todas as situações possíveis.'],
      ['p', 'O exemplo mais simples é do dia a dia: "Eu sou feliz" e "Eu não sou infeliz". Gramaticalmente parecem estruturas diferentes (aparece até uma dupla negação), mas, com as lentes da lógica, carregam a mesma carga de verdade. Em símbolos, negar duas vezes devolve a proposição original: ~(~p) é equivalente a p.'],
      ['h', 'Dois modos de comprovar uma equivalência'],
      ['ol', [
        'Tabela-verdade: monte as linhas com todas as combinações de V e F das proposições simples e compare a coluna final das duas fórmulas. Se as colunas forem iguais em todas as linhas, são equivalentes.',
        'Transformação por regras: aplique ferramentas mecânicas que já sabidamente preservam o valor lógico. Nas provas, é o caminho mais rápido porque dispensa montar a tabela.'
      ]],
      ['h', 'Roteiro de estudo desta lição e das seguintes'],
      ['p', 'Em vez de resolver proposições longas lendo e relendo o sentido das palavras (o que cansa e confunde), você vai tratar os pedaços da frase como blocos de montar. Duas ferramentas resolvem a imensa maioria das questões de equivalência da condicional: a regra "nega, nega, troca, troca" e a regra do OU. Em seguida você as aplica a questões, a símbolos e a textos densos, e fecha com um quadro de memorização.'],
      ['ul', [
        'Equivalência: mesmo sentido e mesmo valor lógico.',
        'Regra 1 (condicional): nega, nega, troca, troca.',
        'Regra 2 (condicional): regra do OU.',
        'Negação do ou e do e: nega as partes e troca o conectivo (De Morgan).',
        'Aplicação em questões, símbolos e textos longos.'
      ]],
      ['h', 'Pegadinha'],
      ['p', 'Uma frase "parecida" não é necessariamente equivalente. Trocar uma palavra, inverter a ordem sem negar ou negar sem inverter altera o valor lógico em pelo menos uma linha da tabela-verdade. Por isso, sempre use as regras completas, nunca a intuição do texto.'],
      ['h', 'Resumo de revisão'],
      ['ul', [
        'Equivalentes têm o mesmo sentido e o mesmo valor lógico, mesmo escritas de forma diferente.',
        '"Eu sou feliz" e "Eu não sou infeliz": exemplo de dupla negação, ~(~p) = p.',
        'Comprove por tabela-verdade ou por regras de transformação.',
        'Duas ferramentas: nega, nega, troca, troca e regra do OU.'
      ]]
    ],
    2: [
      ['h', 'A regra para a condicional "se... então"'],
      ['p', 'A condicional tem duas partes: o antecedente (depois do "se") e o consequente (depois do "então"). Em símbolos, p -> q. A primeira ferramenta para encontrar proposições equivalentes trata essas partes como blocos físicos de montar, como peças de Lego, e é uma fórmula mecânica de três passos.'],
      ['ol', [
        'Passo 1: negue a parte inicial (o antecedente).',
        'Passo 2: negue a parte final (o consequente).',
        'Passo 3, o mais decisivo: troque os dois blocos de lugar; o que estava no começo vai para o final, e o que estava no final vai para o começo, mantendo o conectivo original "se... então".'
      ]],
      ['p', 'Em símbolos: p -> q é equivalente a ~q -> ~p. Esta é a chamada contrapositiva.'],
      ['h', 'Exemplo resolvido: a praia'],
      ['p', 'Frase original: "Se estiver sol, vou para a praia". Antecedente p = "estiver sol"; consequente q = "vou para a praia".'],
      ['ol', [
        'Negue o antecedente: "não estava sol".',
        'Negue o consequente: "não fui para a praia".',
        'Troque de lugar: o consequente negado vai para o início e o antecedente negado vai para o final.'
      ]],
      ['p', 'Resultado: "Se não fui para a praia, não estava sol". É uma equivalência perfeita: a parte "ir à praia" sofreu a negação e veio para o início; a parte "estar sol" também foi negada e foi para o final.'],
      ['h', 'Conferindo com a tabela-verdade'],
      ['p', 'Linhas (p, q): VV, VF, FV, FF. Para p -> q, os resultados são V, F, V, V (só é falsa quando p é V e q é F). Para ~q -> ~p, nas mesmas linhas: em VV, ~q = F e ~p = F, então F -> F = V; em VF, ~q = V e ~p = F, então V -> F = F; em FV, ~q = F e ~p = V, então F -> V = V; em FF, ~q = V e ~p = V, então V -> V = V. Resultado: V, F, V, V. As colunas coincidem em todas as linhas: são equivalentes.'],
      ['h', 'Pegadinhas'],
      ['ul', [
        'Só trocar de lugar, sem negar ("Se vou para a praia, então estiver sol"), NÃO é equivalente.',
        'Só negar, sem trocar ("Se não estiver sol, não vou para a praia"), NÃO é equivalente.',
        'Os três passos andam juntos: negar os dois e trocar a posição, mantendo o "se... então".',
        'Quando um dos blocos for composto (com "ou" ou "e"), ao negá-lo troque também o conectivo interno; veja a lição 4.'
      ]],
      ['h', 'Resumo de revisão'],
      ['ul', [
        'Nega, nega, troca, troca: p -> q é equivalente a ~q -> ~p.',
        'Três passos: nega o antecedente, nega o consequente, troca os blocos de lugar.',
        '"Se estiver sol, vou para a praia" equivale a "Se não fui para a praia, não estava sol".',
        'A tabela-verdade de p -> q e de ~q -> ~p é V, F, V, V nas linhas VV, VF, FV, FF.'
      ]]
    ],
    3: [
      ['h', 'A regra do OU'],
      ['p', 'A segunda ferramenta resulta de negar a implicação duas vezes e é um atalho poderoso. Diferentemente da primeira regra, aqui os blocos ficam exatamente onde estão; o que muda é a estrutura no meio deles.'],
      ['ol', [
        'Passo 1: negue o antecedente.',
        'Passo 2: altere o conectivo de "se... então" para "ou" (o grande pulo do gato).',
        'Passo 3: mantenha o consequente do jeitinho que estava, sem mexer em nada.'
      ]],
      ['p', 'Em símbolos: p -> q é equivalente a ~p v q.'],
      ['h', 'Exemplos resolvidos'],
      ['p', 'Exemplo 1. "Se colocar o dedo no bolo, ficará de castigo". Negue a primeira parte e troque o conectivo por "ou": "Não coloque o dedo no bolo ou ficará de castigo". O alerta continua o mesmo, só com outra estrutura.'],
      ['p', 'Exemplo 2. "Se João não é bandido, ele não foi preso". Negue o antecedente: "João não é bandido" vira "João é bandido". Troque o conectivo por "ou" e mantenha o consequente intacto: "João é bandido ou ele não foi preso". Invertendo só a ordem de leitura, para soar natural em português: "João não foi preso ou ele é bandido". Como "ou" é comutativo (p v q = q v p), a ordem das partes não altera o valor lógico.'],
      ['h', 'Conferindo com a tabela-verdade'],
      ['p', 'Linhas (p, q): VV, VF, FV, FF. p -> q: V, F, V, V. ~p v q: em VV, F v V = V; em VF, F v F = F; em FV, V v V = V; em FF, V v F = V. Resultado V, F, V, V: coluna igual à da condicional. A regra do OU é verdadeira.'],
      ['h', 'Negação do OU e do E (Leis de De Morgan)'],
      ['p', 'Você precisará negar blocos compostos nas próximas questões. Regra: ao negar um "ou", negue as duas partes e troque "ou" por "e". Simetricamente, ao negar um "e", negue as duas partes e troque "e" por "ou".'],
      ['ul', [
        '~(p v q) é equivalente a ~p ^ ~q. Exemplo: negar "chove ou neva" dá "não chove e não neva".',
        '~(p ^ q) é equivalente a ~p v ~q.'
      ]],
      ['p', 'Verificação de ~(p v q) = ~p ^ ~q nas linhas VV, VF, FV, FF: ~(p v q) = F, F, F, V; ~p ^ ~q = F, F, F, V. Verificação de ~(p ^ q) = ~p v ~q: ~(p ^ q) = F, V, V, V; ~p v ~q = F, V, V, V.'],
      ['h', 'Pegadinhas'],
      ['ul', [
        'Na regra do OU, só o antecedente é negado; o consequente permanece igual.',
        'Aqui os blocos não trocam de posição (ao contrário da regra 1).',
        'Quando o antecedente já é uma negação, a negação "some": ~(~a) = a, como em "João não é bandido" que virou "João é bandido".',
        'Ao negar um bloco com "ou" ou "e", troque também o conectivo interno.'
      ]],
      ['h', 'Resumo de revisão'],
      ['ul', [
        'Regra do OU: p -> q é equivalente a ~p v q (nega o 1º, troca por "ou", mantém o 2º).',
        '"Se colocar o dedo no bolo, ficará de castigo" equivale a "Não coloque o dedo no bolo ou ficará de castigo".',
        '"Se João não é bandido, ele não foi preso" equivale a "João não foi preso ou ele é bandido".',
        'De Morgan: ~(p v q) = ~p ^ ~q; ~(p ^ q) = ~p v ~q.'
      ]]
    ],
    4: [
      ['h', 'Como escolher a ferramenta'],
      ['p', 'Diante de uma questão de equivalência com condicional, decida: se o antecedente é simples e a alternativa tem "ou", use a regra do OU; se a alternativa tem "se... então" com partes negadas, use a contrapositiva (nega, nega, troca, troca). Se o antecedente é composto (com "ou" ou "e"), a contrapositiva exige lembrar da negação do conectivo interno.'],
      ['h', 'Questão 1: "Se João chegou, então Maria está atrasada"'],
      ['p', 'A pergunta é a qual alternativa essa frase equivale logicamente. Aplique a regra do OU: negue a primeira parte ("João chegou" vira "João não chegou"), troque o "se... então" por "ou" e mantenha a segunda parte ("Maria está atrasada") sem encostar nela.'],
      ['p', 'Resposta: "João não chegou ou Maria está atrasada". Por tabela-verdade (p = João chegou; q = Maria está atrasada) é a mesma regra ~p v q = p -> q da lição 3. Pela contrapositiva, uma outra frase equivalente seria "Se Maria não está atrasada, João não chegou".'],
      ['h', 'Questão 2: "Se chove ou neva, então o chão fica molhado"'],
      ['p', 'O antecedente é composto: "chove ou neva". Use nega, nega, troca, troca.'],
      ['ol', [
        'Negue o consequente e traga-o para a frente: "o chão fica molhado" vira "Se o chão não está molhado".',
        'Negue o antecedente inteiro: ~(chove ou neva). Pela negação do ou, as duas partes são negadas e o "ou" vira "e": "não choveu e não nevou".',
        'Coloque no final, depois do "então".'
      ]],
      ['p', 'Resposta: "Se o chão não está molhado, então não choveu e não nevou". O ponto de atenção é justamente a troca do conectivo: ao jogar "chove ou neva" para o final, o "ou" obrigatoriamente vira "e".'],
      ['h', 'Proposições simbólicas complexas'],
      ['p', 'Quando a questão traz uma fórmula grande, cheia de letras e setas, e pergunta se ela é equivalente a outra, a resposta sai das mesmas duas regras. O segredo é aplicar a regra ao bloco inteiro, negar o bloco composto com De Morgan e comparar o conectivo final com o que a banca apresentou.'],
      ['p', 'Ilustração do procedimento: (P ^ Q) -> R. Pela contrapositiva, nega-se o consequente (~R) e o antecedente inteiro, que é um "e": ~(P ^ Q) = ~P v ~Q. Logo, (P ^ Q) -> R é equivalente a ~R -> (~P v ~Q). Se a alternativa trouxer ~R -> (~P ^ ~Q), o conectivo "e" está no lugar do "ou": as peças não se encaixam e a afirmação de equivalência é falsa.'],
      ['p', 'Esse é o raciocínio que mostra que uma afirmação de equivalência com "e" no lugar de "ou" está errada: a regra completa expõe que as peças não se encaixam, e a premissa da questão é que estava errada.'],
      ['h', 'Texto denso: o bom jornalista'],
      ['p', 'Enunciado: "O bom jornalista não faz reportagem em benefício próprio nem deixa de fazer aquela que prejudique seus interesses". A pergunta é se isso equivale a uma frase longa começando com "Não é verdade que...". Não leia e releia pelo sentido: fatie em dois blocos.'],
      ['ol', [
        'Seja A = "o jornalista faz reportagem em benefício próprio" e B = "o jornalista deixa de fazer a reportagem que prejudica seus interesses".',
        'O texto original diz que ele não faz A e não faz B: ~A ^ ~B ("nem" equivale a "e não").',
        '"Não é verdade que o jornalista faça A ou deixe de fazer B" é a negação do bloco: ~(A v B).',
        'Aplicando De Morgan: ~(A v B) = ~A ^ ~B. Resultado idêntico ao original.'
      ]],
      ['p', 'Conclusão: a afirmação de equivalência está correta. O jornalista não faz A e nem deixa de fazer B.'],
      ['h', 'Quadro de memorização'],
      ['ul', [
        'Equivalência: manter o mesmo sentido lógico da ideia original.',
        'Se... então: nega, nega, troca, troca (p -> q = ~q -> ~p).',
        'Regra do OU: nega a primeira parte, troca o conectivo para "ou" e mantém o final (p -> q = ~p v q).',
        'Negar "ou": nega as duas partes e troca por "e". Negar "e": nega as duas partes e troca por "ou".'
      ]],
      ['h', 'Resumo de revisão'],
      ['ul', [
        '"Se João chegou, então Maria está atrasada" = "João não chegou ou Maria está atrasada".',
        '"Se chove ou neva, então o chão fica molhado" = "Se o chão não está molhado, então não choveu e não nevou".',
        'Em fórmula grande, aplique a regra ao bloco e confira cada conectivo (e/ou).',
        '"Não é verdade que A ou B" equivale a "não A e não B".'
      ]]
    ],
    5: [
      ['h', 'Por que a simbologia importa'],
      ['p', 'Diagramas e conjuntos são ferramentas que você usa para resolver questões com técnica. Ao falar de união, interseção, diferença e complementar, é natural falar de simbologia: se você não sabe que o U de cabeça para baixo é interseção, não consegue nem ler o enunciado.'],
      ['ul', [
        'U de cabeça para baixo (∩): interseção.',
        'U normal (∪): união.',
        '∈: pertence; ∉ (∈ cortado): não pertence.',
        '⊂: está contido; ⊄ (cortado): não está contido.',
        '⊃ (⊂ virado): contém; ⊅ (virado e cortado): não contém.'
      ]],
      ['h', 'Elemento para conjunto x conjunto para conjunto'],
      ['p', 'Pertence e não pertence relacionam sempre elemento e conjunto. Com B = {1, 2, 3}: o número 1 pertence a B; o número 5 não pertence a B.'],
      ['p', 'Está contido, não está contido, contém e não contém relacionam sempre conjunto e conjunto. Sendo A um subconjunto de B, você pode dizer que A está contido em B ou que B contém A. Um conjunto C que tem elementos fora de B não está contido em B (e B não contém C).'],
      ['p', 'Na linguagem lógica ainda aparecem os quantificadores: "para todo" e "existe". O conjunto vazio é aquele que não tem elemento.'],
      ['h', 'Questão Fundatec 2022 (resolvida)'],
      ['p', 'Universo da variável x: U = {0, 5, 10, 15, 20, 25}. As afirmações são julgadas uma a uma, sempre testando elementos de U.'],
      ['ol', [
        'Para todo x pertencente a U, x é múltiplo de 5: os elementos 0, 5, 10, 15, 20 e 25 são todos múltiplos de 5. Verdadeira.',
        'Existe x pertencente a U tal que 3x + 5 = 25: 3x + 5 = 25, então 3x = 20 e x = 20/3. Esse valor não pertence a U. Falsa.',
        'Para todo x pertencente a U, x² é maior ou igual a zero: 0, 25, 100 e assim por diante, todos >= 0. Verdadeira.'
      ]],
      ['p', 'Conclusão: as afirmações 1 e 3 são verdadeiras e a 2 é falsa. Lição: "para todo" exige que valha para todos os elementos; "existe" exige achar pelo menos um dentro do universo.'],
      ['h', 'Revisão dos conjuntos numéricos'],
      ['ul', [
        'Naturais: os números usados para contar (0, 1, 2, 3...), sem negativos.',
        'Inteiros: naturais mais os negativos (-1, -2, -3...).',
        'Racionais: os que podem ser escritos na forma a/b com b diferente de 0 (1/2, 3/5, 6/3 e também as dízimas periódicas).',
        'Irracionais: não podem ser escritos como fração (por exemplo, raízes não exatas e o número pi).',
        'Reais: racionais e irracionais juntos.'
      ]],
      ['p', 'Em diagrama: os naturais estão dentro dos inteiros, que estão dentro dos racionais, que estão dentro dos reais; os irracionais são um conjunto à parte que, unido aos racionais, forma os reais. Ou seja: naturais ⊂ inteiros ⊂ racionais ⊂ reais, e racionais ∪ irracionais = reais.'],
      ['h', 'Resumo de revisão'],
      ['ul', [
        '∩ interseção; ∪ união; ∈ pertence; ⊂ está contido; ⊃ contém (cortados são as negações).',
        'Pertence: elemento para conjunto. Contido/contém: conjunto para conjunto.',
        'Na Fundatec 2022: afirmações 1 e 3 verdadeiras, 2 falsa (x = 20/3 não está em U).',
        'Naturais ⊂ inteiros ⊂ racionais ⊂ reais; racionais ∪ irracionais = reais.'
      ]]
    ],
    6: [
      ['h', 'Três formas de representar um conjunto'],
      ['ul', [
        'Por designação: listar os elementos. Exemplo: {a, e, i, o, u}.',
        'Por característica: x tal que x tem a propriedade P. Exemplo: {x | x é vogal}.',
        'Por diagrama: desenhar o conjunto e colocar os elementos dentro. Em questões, é o mais usado por ser visual, mais fácil de enxergar e de resolver que a designação ou a característica.'
      ]],
      ['p', 'Exemplo da dificuldade da característica: {x | x é múltiplo de 5 mais 2} resulta em 2, 7, 12, 17, 22... Dá trabalho para enxergar; no diagrama, os elementos ficam visíveis. Durante as questões você usará a forma algébrica e os diagramas, mas verá que o diagrama é mais agradável.'],
      ['h', 'Pertinência'],
      ['p', 'Todo conjunto é formado por um ou vários objetos chamados elementos. Pertinência é a relação de elemento para conjunto. Dado o conjunto M = {1, 2, 3, 4, 6, 8, 10}, complete com pertence ou não pertence: 2 pertence a M; 10 pertence a M; um número que não está listado, como 5, não pertence a M.'],
      ['h', 'Subconjuntos e igualdade'],
      ['p', 'Dizer que A é subconjunto de B é dizer que A está contido em B (ou B contém A). Se A for apenas um elemento, você pode dizer "A pertence a B"; se A for um conjunto, o correto é "A está contido em B". É relação de conjunto para conjunto.'],
      ['p', 'Dois conjuntos são iguais (idênticos) quando todos os elementos coincidem. A ordem não importa. Exemplo: A = {5, 7, 11} e B = {x | x é primo e 5 <= x <= 11}. Os primos de 5 a 11 são 5, 7 e 11, logo A = B. Do mesmo modo, {2, 4, 6} = {4, 2, 6}.'],
      ['h', 'Termos que você deve reconhecer'],
      ['ul', [
        'Conjunto universo: todos os elementos disponíveis no problema.',
        'Conjunto vazio: sem elementos.',
        'Conjunto unitário: com um único elemento.',
        'Conjuntos disjuntos: não têm interseção (a interseção é vazia).',
        'Conjuntos iguais ou idênticos: mesmos elementos.'
      ]],
      ['h', 'Subconjuntos especiais'],
      ['p', 'Se todos os elementos de A são também elementos de B, A é subconjunto de B. Isso inclui o caso A = B: todo conjunto é subconjunto de si mesmo. O conjunto vazio é subconjunto de qualquer conjunto. Por isso, qualquer conjunto já nasce com dois subconjuntos: ele próprio e o vazio.'],
      ['h', 'Conjunto das partes'],
      ['p', 'O conjunto das partes de A é o conjunto formado por todos os subconjuntos de A. Exemplos:'],
      ['ul', [
        'A = {1, 2}: vazio, {1}, {2}, {1, 2}. São 4 subconjuntos.',
        'B = {3, 4, 5}: vazio, {3}, {4}, {5}, {3, 4}, {3, 5}, {4, 5}, {3, 4, 5}. São 8 subconjuntos. {4, 3} não é outro subconjunto, porque a ordem não importa.',
        'Um conjunto de 2 elementos (como {a, e}) também tem 4: vazio, {a}, {e}, {a, e}.'
      ]],
      ['p', 'Fórmula: se A tem n elementos, o número de subconjuntos (elementos do conjunto das partes) é 2^n. Com n = 2: 2^2 = 4; com n = 3: 2^3 = 8; com n = 5: 2^5 = 32. O vazio e o próprio conjunto fazem parte da contagem.'],
      ['h', 'Inclusão'],
      ['p', 'Inclusão é a relação de conjunto para conjunto (contém, não contém, está contido, não está contido). Exemplo: {1, 2, 5} está contido em {1, 2, 3, 4, 5}, porque todos os elementos do primeiro estão no segundo.'],
      ['h', 'Resumo de revisão'],
      ['ul', [
        'Representações: designação, característica e diagrama (preferido).',
        'Pertinência: elemento para conjunto. Inclusão: conjunto para conjunto.',
        'A = B quando têm os mesmos elementos; ordem não conta.',
        'Todo conjunto é subconjunto de si mesmo; o vazio é subconjunto de todos.',
        'Número de subconjuntos: 2^n (2 elementos: 4; 3 elementos: 8; 5 elementos: 32).'
      ]]
    ],
    7: [
      ['h', 'As operações'],
      ['p', 'Esta é a parte crucial: teoria pronta, hora de operar. Para cada operação, pense em quais regiões do diagrama ela pinta.'],
      ['ul', [
        'União (A ∪ B): elementos que pertencem a A ou a B. É todo mundo que está dentro de A ou de B. Não há repetição: se o 3 está nos dois conjuntos, ele aparece uma vez só na união.',
        'Interseção (A ∩ B): elementos que estão em A e em B ao mesmo tempo. Se não há elemento comum, a interseção é vazia e os conjuntos são disjuntos.',
        'Diferença (A - B): pegue A e elimine B; sobra o que é de A e não é de B. B - A é outra coisa: o que é de B e não é de A.',
        'Diferença simétrica: o que está em um e não está no outro e vice-versa; na lógica proposicional corresponde à disjunção exclusiva. É a união das diferenças, (A - B) ∪ (B - A); a interseção fica de fora.',
        'Complementar de A: tudo o que, no universo, não é A (toda a parte do universo fora de A).'
      ]],
      ['h', 'Exemplo numérico'],
      ['p', 'Sejam A = {1, 2, 3, 4} e B = {3, 5}. Interseção: {3}. União: {1, 2, 3, 4, 5} (o 3 não se repete). A - B: tirando o 3 de A, resta {1, 2, 4}. B - A: tirando de B o que também está em A (o 3), resta {5}. Diferença simétrica: {1, 2, 4} ∪ {5} = {1, 2, 4, 5}. Com A = {2, 3, 4} e B = {5, 7}, não há interseção: os conjuntos são disjuntos e a interseção é vazia.'],
      ['p', 'Preste atenção: no diagrama, desenhe A e B com a interseção. Na diferença B - A, "elimine" o que é de A e veja o que sobra de B. O elemento 5, por exemplo, só aparece em B.'],
      ['h', 'Contando elementos por diagrama'],
      ['p', 'Problema: numa sala, 60 alunos gostam de exercício e 50 gostam de cinema; 10 gostam das duas coisas. Todos optaram por pelo menos uma das atividades. Quantos alunos foram pesquisados?'],
      ['ol', [
        'Desenhe dois círculos (exercício e cinema) e comece pela interseção: 10.',
        'Só cinema: 50 - 10 = 40. Só exercício: 60 - 10 = 50.',
        'Total: 50 + 10 + 40 = 100 alunos. Como todos optaram por ao menos uma atividade, não há ninguém fora dos círculos.'
      ]],
      ['h', 'Fórmulas de contagem'],
      ['p', 'Dois conjuntos: n(A ∪ B) = n(A) + n(B) - n(A ∩ B). Subtrai-se a interseção porque ela foi contada duas vezes. No problema anterior: x = 60 + 50 - 10 = 100. O resultado é o mesmo do diagrama; o diagrama costuma ser mais seguro e mais visual.'],
      ['p', 'Três conjuntos: n(A ∪ B ∪ C) = n(A) + n(B) + n(C) - n(A ∩ B) - n(A ∩ C) - n(B ∩ C) + n(A ∩ B ∩ C). A fórmula muda um pouco: subtraem-se as três interseções duas a duas e soma-se de volta a interseção dos três.'],
      ['h', 'Quando usar a fórmula de três conjuntos'],
      ['p', 'Dependendo do problema, a fórmula ajuda; dependendo, só atrapalha. Se os conjuntos são listas pequenas, escrever o conjunto união sem repetir elementos e contar costuma ser bem mais rápido que contar interseções. Veja a questão 3 da lição seguinte.'],
      ['h', 'Resumo de revisão'],
      ['ul', [
        'União: está em A ou em B, sem repetir. Interseção: está em A e em B. Disjuntos: interseção vazia.',
        'Diferença: A - B é o que é de A e não é de B; B - A é diferente.',
        'Diferença simétrica = (A - B) ∪ (B - A) = disjunção exclusiva; complementar = fora de A, dentro do universo.',
        'n(A ∪ B) = n(A) + n(B) - n(A ∩ B); com três conjuntos, soma as três, subtrai as três interseções duas a duas e soma a tripla.',
        'Preencha o diagrama começando sempre pela interseção.'
      ]]
    ],
    8: [
      ['h', 'Método para toda questão de contagem'],
      ['ol', [
        'Anote o universo (total).',
        'Desenhe os conjuntos e coloque a interseção primeiro.',
        'Subtraia a interseção de cada conjunto para achar as regiões "apenas".',
        'Some todas as regiões e compare com o total; o que sobra vai para fora dos conjuntos.',
        'Confira se a soma das regiões bate com o universo.'
      ]],
      ['h', 'Questão 1 (Vunesp): esportes de aventura'],
      ['p', 'Uma enquete com jovens que praticam esportes de aventura (alpinismo A, paraquedismo P, mergulho M e surf S), com um diagrama que mostra os resultados e tem elementos em todas as regiões. O que é logicamente verdadeiro? Raciocínio por alternativa, sempre com o diagrama:'],
      ['ul', [
        'Qualquer praticante de surf que também pratica mergulho é praticante de alpinismo: "qualquer" significa "todo". Só alguns dos que praticam S e M praticam A. Falsa.',
        'Todos os praticantes de surf são praticantes de mergulho, alpinismo e paraquedismo: há surfistas que não praticam os outros esportes. Falsa.',
        'Os praticantes de paraquedismo que não são apenas de P são praticantes de mergulho ou de alpinismo: excluídos os que praticam só P, os restantes praticam A (e, em alguns casos, também M). Com "ou" inclusivo, é verdadeira. Gabarito: C.',
        'Quem pratica alpinismo e não pratica surf nem paraquedismo é praticante de mergulho: há quem pratique só alpinismo. Falsa.',
        'Quem pratica paraquedismo e surf e não pratica alpinismo: todos os que praticam P e S também praticam A. Falsa.'
      ]],
      ['p', 'Aprendizado: atenção ao conectivo. "Ou" significa um, o outro ou os dois; se a alternativa dissesse "M e A", a resposta mudaria.'],
      ['h', 'Questão 2: turma de 40 estudantes'],
      ['p', 'Dados: 18 praticam futebol; 22 praticam vôlei; 4 não praticam nada; 8 praticam apenas outros esportes (nem futebol, nem vôlei). Pergunta: quantos praticam futebol e também vôlei?'],
      ['ol', [
        'Fora de futebol e vôlei estão 4 + 8 = 12 estudantes.',
        'Logo, n(F ∪ V) = 40 - 12 = 28.',
        'Como 18 + 22 = 40 e a união é 28, a interseção é 40 - 28 = 12.',
        'Só futebol = 18 - 12 = 6; só vôlei = 22 - 12 = 10.',
        'Conferência: 6 + 12 + 10 + 4 + 8 = 40.'
      ]],
      ['p', 'Resposta: 12 estudantes (alternativa B). Pela fórmula: 28 = 18 + 22 - x, então x = 12.'],
      ['h', 'Questão 3: união de três conjuntos'],
      ['p', 'A = {0, 1, 3, 5, 7}, B = {2, 3, 5, 7, 9} e C = {2, 4, 5, 6, 7, 8}. X é a união dos três; quantos elementos tem X? Em vez da fórmula grande, liste sem repetir: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9. São 10 elementos. A fórmula daria muito mais trabalho que olhar e traduzir direto para X.'],
      ['h', 'Questão 4: 30 jogadores'],
      ['p', 'Dados: 30 jogadores; 16 chutam com a esquerda; 20 chutam com a direita; alguns chutam com as duas. Todos chutam com pelo menos uma. Pergunta: quantos chutam apenas com uma das pernas?'],
      ['ol', [
        'Pela fórmula: 30 = 16 + 20 - x, logo x = 36 - 30 = 6 (ambidestros).',
        'Só esquerda = 16 - 6 = 10; só direita = 20 - 6 = 14.',
        'Apenas uma perna: 10 + 14 = 24.'
      ]],
      ['p', 'Resposta: 24. Pelo diagrama: 6 na interseção, 10 só com a esquerda e 14 só com a direita.'],
      ['h', 'Questão 5: churrasco de Henrique'],
      ['p', 'Dados: 45 convidados; 28 comem carne de boi; 15 comem carne de porco; 7 são veganos (não comem nenhuma carne). Pergunta: quantos comem boi e porco?'],
      ['ol', [
        'Carnívoros: 45 - 7 = 38 (só esses estão dentro dos dois círculos).',
        'Boi + porco = 28 + 15 = 43, mas a união é 38; a diferença é a interseção: 43 - 38 = 5.',
        'Só boi = 28 - 5 = 23; só porco = 15 - 5 = 10.',
        'Conferência: 23 + 5 + 10 + 7 = 45.'
      ]],
      ['p', 'Resposta: 5 pessoas comem boi e porco.'],
      ['h', 'Resumo de revisão'],
      ['ul', [
        'Vunesp: gabarito C; "ou" é inclusivo; "qualquer" significa "todo".',
        '40 alunos (18 futebol, 22 vôlei, 4 nada, 8 outros): 12 praticam futebol e vôlei.',
        'União de A, B e C = {0, ..., 9}: 10 elementos, sem usar a fórmula grande.',
        '30 jogadores: interseção 6, só uma perna = 24.',
        '45 convidados: interseção 5 (boi e porco).'
      ]]
    ],
    9: [
      ['h', 'Questão 6: união de A e B'],
      ['p', 'A = {1, 3, 5, 7} e B = {2, 4, 5, 9, 10}. Qual é a união? Há interseção ({5}), então o 5 conta uma vez só. Juntando tudo, em ordem: 1, 2, 3, 4, 5, 7, 9, 10. Na união não há repetição de elementos. A união tem 8 elementos.'],
      ['h', 'Questão 7: água com gás (103 pessoas)'],
      ['p', 'Em uma pesquisa com 103 pessoas, 67 gostam de gelo, 47 gostam de limão e 28 gostam dos dois. Quantas não gostam nem de gelo, nem de limão?'],
      ['ol', [
        'Comece pela interseção: 28.',
        'Só gelo = 67 - 28 = 39. Só limão = 47 - 28 = 19.',
        'União = 39 + 28 + 19 = 86.',
        'Fora dos conjuntos: 103 - 86 = 17.'
      ]],
      ['p', 'Pela fórmula: n(gelo ∪ limão) = 67 + 47 - 28 = 86; 103 - 86 = 17. Mesma resposta. Resposta: 17 pessoas (alternativa B).'],
      ['h', 'Questão 8: oficina de lanternagem (diagrama de Venn)'],
      ['p', 'Três serviços (A, B e C) com a quantidade realizada por mês num diagrama de Venn. As informações que você usa: os três serviços juntos acontecem 13 vezes; o serviço A (todas as regiões que contêm A) soma 80; o serviço C isolado soma 50; e o serviço B isolado tem zero (nenhuma realização apenas de B). Análise das alternativas:'],
      ['ul', [
        'Alternativa que diz que o serviço A completamente considerado é realizado menos vezes que o serviço C isoladamente: falsa. O serviço A soma 80, e o C isolado, 50; 80 > 50.',
        'Alternativa que diz que não existe realização do serviço B: falsa. Olhando só a região "apenas B", o aluno desavisado vê zero, mas B é todas as regiões que contêm B (B com C, B com A e A com B e C). A banca induz ao erro.',
        'Alternativa que diz que os três serviços são realizados 13 vezes e o serviço A só 22 vezes: a primeira parte está certa, mas a segunda erra; A, completamente considerado, é 80. Falsa.',
        'Alternativa que diz que não existe realização apenas do serviço B: verdadeira, porque a região exclusiva de B é zero. Gabarito: E.'
      ]],
      ['p', 'Lição de leitura: "A" é todo o conjunto A, inclusive as interseções; "apenas A" é só a parte que não toca em B nem em C.'],
      ['h', 'Questão 9: 30 alunos (matemática e ciência)'],
      ['p', 'Dados: 30 alunos; 18 gostam de matemática; 12 gostam de ciência; 5 gostam das duas. Quantos não gostam de nada?'],
      ['ol', [
        'Interseção: 5.',
        'Só matemática = 18 - 5 = 13. Só ciência = 12 - 5 = 7.',
        'Dentro dos conjuntos: 13 + 5 + 7 = 25.',
        'Fora: 30 - 25 = 5.'
      ]],
      ['p', 'Pela fórmula: n(M ∪ C) = 18 + 12 - 5 = 25; 30 - 25 = 5. Resposta: 5 alunos não gostam de nenhuma.'],
      ['h', 'Questão 10: festa de pizza e lasanha'],
      ['p', 'Todos os convidados comeram pizza e/ou lasanha. 10 pessoas comeram apenas pizza, 15 comeram apenas lasanha e 5 comeram os dois. Quantas pessoas foram à festa? Some as três regiões: 10 + 5 + 15 = 30. A informação decisiva é "todos comeram alguma coisa": do lado de fora dos círculos há zero pessoas, então todos estão na união. Resposta: 30 pessoas.'],
      ['h', 'Resumo de revisão'],
      ['ul', [
        'União não repete elementos: {1, 3, 5, 7} ∪ {2, 4, 5, 9, 10} tem 8 elementos.',
        '103 pessoas, 67 gelo, 47 limão, 28 ambos: 17 não gostam de nenhum.',
        'Na oficina: "apenas B" é zero (verdadeiro), mas "B" é todas as regiões com B (falso dizer que não existe B).',
        '30 alunos, 18 matemática, 12 ciência, 5 ambas: 5 não gostam de nenhuma.',
        'Festa: 10 só pizza + 5 ambos + 15 só lasanha = 30; "todos comeram" significa zero fora.'
      ]]
    ]
  };

  window.PCPE_QUESTOES[topic] = [
    {
      text: `Pela regra "nega, nega, troca, troca", qual é a proposição equivalente a "Se Ana viaja, então Bia fica em casa"?`,
      options: [
        `Se Bia fica em casa, então Ana viaja.`,
        `Se Ana não viaja, então Bia não fica em casa.`,
        `Se Bia não fica em casa, então Ana não viaja.`,
        `Ana viaja e Bia não fica em casa.`
      ],
      correct: 2,
      exp: `Negam-se o antecedente e o consequente e trocam-se de lugar: ~q -> ~p, ou seja, "Se Bia não fica em casa, então Ana não viaja". As outras opções só trocam (A), só negam (B) ou mudam a estrutura para uma conjunção (D), e não são equivalentes.`
    },
    {
      text: `Pela regra do OU, a proposição "Se chove, então o jogo é cancelado" equivale a:`,
      options: [
        `Não chove ou o jogo é cancelado.`,
        `Chove ou o jogo é cancelado.`,
        `Não chove e o jogo é cancelado.`,
        `Chove e o jogo não é cancelado.`
      ],
      correct: 0,
      exp: `Na regra do OU, nega-se o antecedente, troca-se "se... então" por "ou" e mantém-se o consequente: ~p v q. A opção B não nega o antecedente; C usa "e" em vez de "ou"; D nega o consequente e não é equivalente.`
    },
    {
      text: `A negação da proposição "Chove ou neva" é:`,
      options: [
        `Não chove ou não neva.`,
        `Não chove e não neva.`,
        `Chove e neva.`,
        `Se chove, então não neva.`
      ],
      correct: 1,
      exp: `Ao negar um "ou", negam-se as duas partes e troca-se "ou" por "e": ~(p v q) = ~p ^ ~q. A opção A mantém o "ou", C não nega as partes e D tem outra estrutura.`
    },
    {
      text: `Qual das alternativas é equivalente a "Se chove ou neva, então o chão fica molhado"?`,
      options: [
        `Se o chão fica molhado, então chove ou neva.`,
        `Se não chove ou não neva, então o chão não fica molhado.`,
        `Se o chão não fica molhado, então não chove ou não neva.`,
        `Se o chão não fica molhado, então não chove e não neva.`
      ],
      correct: 3,
      exp: `A contrapositiva nega e troca: ~(molhado) -> ~(chove ou neva). Ao negar o "ou", as partes são negadas e o "ou" vira "e": "não chove e não neva". As alternativas A (só troca), B e C (usam "ou" onde devia haver "e") não são equivalentes.`
    },
    {
      text: `A proposição "Se João não é bandido, ele não foi preso" é equivalente, pela regra do OU, a:`,
      options: [
        `João não é bandido ou ele foi preso.`,
        `João não foi preso ou ele é bandido.`,
        `João é bandido e ele não foi preso.`,
        `Se João é bandido, ele foi preso.`
      ],
      correct: 1,
      exp: `Nega-se o antecedente ("João não é bandido" vira "João é bandido"), troca-se por "ou" e mantém-se "ele não foi preso": "João é bandido ou ele não foi preso", que é o mesmo que "João não foi preso ou ele é bandido". A é incorreta porque não nega o antecedente nem mantém o consequente; C troca "ou" por "e"; D inverte a ideia.`
    },
    {
      text: `Sendo B = {1, 2, 3} e A = {1, 2}, qual afirmação usa corretamente a simbologia?`,
      options: [
        `1 pertence a B e A está contido em B.`,
        `1 está contido em B e A pertence a B.`,
        `A pertence a B e 1 está contido em B.`,
        `1 contém B e A não está contido em B.`
      ],
      correct: 0,
      exp: `Pertence relaciona elemento a conjunto (1 pertence a B); contido relaciona conjunto a conjunto (A está contido em B, pois todos os elementos de A estão em B). As outras alternativas misturam as relações ou negam uma relação verdadeira.`
    },
    {
      text: `Quantos subconjuntos possui um conjunto com 6 elementos?`,
      options: [
        `12`,
        `32`,
        `64`,
        `36`
      ],
      correct: 2,
      exp: `O número de subconjuntos é 2^n; com n = 6, 2^6 = 64. Os valores 12 e 36 resultam de multiplicações erradas (6 x 2 e 6 x 6); 32 seria o resultado para 5 elementos.`
    },
    {
      text: `Em um grupo, 70 pessoas praticam corrida, 40 praticam natação e 20 praticam as duas atividades. Todos praticam pelo menos uma. Quantas pessoas há no grupo?`,
      options: [
        `130`,
        `110`,
        `100`,
        `90`
      ],
      correct: 3,
      exp: `n(A ∪ B) = 70 + 40 - 20 = 90. Por diagrama: só corrida 50, só natação 20, ambas 20; 50 + 20 + 20 = 90. O valor 110 resulta de somar 70 + 40 sem subtrair a interseção; 130 soma as três quantidades; 100 não resulta de nenhum cálculo correto.`
    },
    {
      text: `Em uma pesquisa com 80 pessoas, 45 gostam de café, 35 gostam de chá e 15 gostam dos dois. Quantas não gostam de nenhum dos dois?`,
      options: [
        `0`,
        `15`,
        `20`,
        `25`
      ],
      correct: 1,
      exp: `União = 45 + 35 - 15 = 65. Fora dos conjuntos: 80 - 65 = 15. Pelo diagrama: só café 30, só chá 20, ambos 15; 30 + 20 + 15 = 65. Quem esquece de subtrair a interseção obtém 80 - 80 = 0 (A).`
    },
    {
      text: `Em um diagrama de Venn com os conjuntos A e B, há 10 elementos apenas em A, 6 elementos na interseção de A com B e 4 elementos apenas em B. Quantos elementos tem o conjunto A, "completamente considerado"?`,
      options: [
        `10`,
        `6`,
        `16`,
        `20`
      ],
      correct: 2,
      exp: `O conjunto A inclui sua parte exclusiva e a interseção: 10 + 6 = 16. "Apenas A" seria 10 (A). A região só de B (4) não pertence a A, e 20 é a soma das três regiões, ou seja, n(A ∪ B).`
    }
  ];
})();
