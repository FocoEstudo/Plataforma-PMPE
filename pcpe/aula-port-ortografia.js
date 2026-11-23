(function () {
  'use strict';
  window.PCPE_TOPIC_GUIDES = window.PCPE_TOPIC_GUIDES || {};
  window.PCPE_DEEPENING = window.PCPE_DEEPENING || {};
  window.PCPE_QUESTOES = window.PCPE_QUESTOES || {};
  const topic = 'Ortografia oficial e acentuação gráfica';
  const base = window.PCPE_TOPIC_GUIDES[topic] || {};
  window.PCPE_TOPIC_GUIDES[topic] = Object.assign({}, base, {
    lessons: [
      [
        'Aula 1 · Ortografia na prova e hífen diante de H',
        `Ortografia é a escrita oficial das palavras. Muita coisa você escreve por memória fotográfica (abacaxi com x, enxaqueca com x, casa com s), mas a prova cobra sobretudo o uso do hífen e as acentuações que mudaram depois do Acordo Ortográfico. A primeira regra do hífen: se a segunda palavra (o elemento seguinte) começa por H, separe com hífen.`,
        `extra-humano, anti-higiênico. Exceção: com co- e re- a grafia é sempre junta, mesmo diante de H ou de vogal: coabitação, reeleição, cooperar, reeditar.`,
        `Sub- é caso à parte: sub-humano pode ser escrito também subumano (sem hífen e sem o H, forma registrada no VOLP). Já sobre- exige hífen: sobre-humano.`
      ],
      [
        'Aula 1 · Diferentes se juntam, iguais se separam (e a duplicação de R e S)',
        `Quando a última letra do primeiro elemento é diferente da primeira letra do segundo, as palavras se juntam; quando são iguais, separam-se com hífen. Se o segundo elemento começa por R ou S e o primeiro termina em vogal, junte e duplique a consoante. RR e SS só existem entre vogais.`,
        `Diferentes se juntam: autoescola, mototáxi, paraquedas, contracheque, mandachuva, semijoias. Iguais se separam: anti-inflamatório, micro-ônibus, inter-regional, super-religioso. Duplicação: minissaia, semirreta. Antes de consoante: transexual, transcontinental.`,
        `Microrganismo (reduzido, só um o) é variante admitida; micro-ônibus não admite a redução: microônibus não existe. Em inter-regional e super-religioso o R já era do primeiro elemento, por isso há hífen e não duplicação.`
      ],
      [
        'Aula 1 · Pré, pós, pró, sem, ex, recém, vice; bem e mal',
        `Pré-, pós- e pró- (tônicos, com acento), sem-, ex-, recém-, circum- e vice- levam hífen sem regra de apoio: é decoreba. O advérbio bem sempre leva hífen (com exceção das formas de querer e fazer, que admitem forma junta com N). Mal tem regras próprias: hífen só diante de vogal, H ou L.`,
        `pré-vestibular, pós-graduação, pró-armas, sem-terra, ex-aluno, recém-casado, vice-prefeito; bem-humorado, bem-sucedido, bem-querer/benquerer, bem-feitor/benfeitor; mal-educado, mal-humorado, mal-lavado, malsucedido.`,
        `Se pre- não tem acento, junta-se: preocupado (e não pré-ocupado). E não confunda mal (contrário de bem, ou tempo: "mal ele entrou") com mau (antônimo de bom).`
      ],
      [
        'Aula 1 · Preposição, origem, cargos e formas consagradas',
        `Palavras ligadas por preposição não levam hífen: dia a dia, fim de semana, pôr do sol, pé de moleque. Exceções: nomes de fauna e flora, que levam hífen, e algumas expressões consagradas pelo uso, que você decora. Também levam hífen as expressões que indicam origem (nacionalidades) e cargos.`,
        `Fauna e flora: castanha-do-pará, joão-de-barro, pimenta-do-reino. Origem: euro-asiático, luso-brasileiro. Cargos: diretor-geral, tenente-brigadeiro. Consagradas: água-de-colônia, arco-da-velha, mais-que-perfeito, pé-de-meia, cor-de-rosa.`,
        `Compare: pé de moleque (sem hífen) e pé-de-meia (com hífen). A diferença não é regra, é tradição de uso: escreva as consagradas muitas vezes para fixar.`
      ],
      [
        'Aula 1 · Acentos que mudaram e acentos que ficaram (ortografia pós-acordo)',
        `Depois do Acordo, perderam o acento: vogais duplicadas (voo, leem, creem, deem, veem), as paroxítonas de ditongo aberto (assembleia, ideia, joia, jiboia) e vários diferenciais (polo, pelo, para). Permaneceram: o circunflexo de plural em têm/vêm e derivados, o pôr (verbo) e o pôde (passado).`,
        `Ele tem / eles têm; ele obtém / eles obtêm; o frasco contém / os frascos contêm; ele vem / eles vêm; ele advém / eles advêm; eles detêm o poder. Vou pôr a mesa. Como você pôde me enganar? Exceção às paroxítonas em ditongo aberto: Méier e destróier (paroxítonas terminadas em R).`,
        `Em obtém, contém, advém e detém o acento agudo existe porque são oxítonas terminadas em -em; no plural o circunflexo é diferencial e marca a concordância com o sujeito plural.`
      ],
      [
        'Aula 2 · Sílabas, encontros vocálicos e separação silábica',
        `Para acentuar bem você precisa separar bem as sílabas. Monossílaba tem 1 sílaba, dissílaba 2, trissílaba 3 e polissílaba 4 ou mais. Toda sílaba tem pelo menos uma vogal; a consoante depende de uma vogal para se separar. Encontro de vogais na mesma sílaba é ditongo; em sílabas diferentes, hiato; três na mesma sílaba, tritongo.`,
        `a-man-te, pneu, bí-ceps, op-ci-o-nal, nup-ci-al, pro-ble-ma, su-bem-pre-go, ca-cho-rra-da, cre-em, a-nões, i-dei-a → i-deia (2 + 1), joi-a, as-sem-blei-a, Pa-ra-guai (tritongo).`,
        `Quando há três vogais e o i está no meio, vale 2 + 1: duas ficam juntas e a última se separa. Dígrafos (ch, lh, nh) nunca se separam; RR e SS sempre se separam; consoante seguida de R ou L (grupo final) não se separa.`
      ],
      [
        'Aula 2 · Tonicidade e as quatro regras gerais',
        `A sílaba mais forte define a classificação: oxítona (última), paroxítona (penúltima), proparoxítona (antepenúltima). Para justificar o acento, tente sempre primeiro as quatro regras gerais, na ordem: monossílabas tônicas, oxítonas, paroxítonas e proparoxítonas.`,
        `Monossílabas tônicas e oxítonas: a, e, o (e plurais), mais -em/-ens nas oxítonas: pá, fé, dó, cajá, você, avó, armazéns. Proparoxítonas: todas acentuadas (física, átomo, lâmpada). Paroxítonas: acentuam-se as terminadas em L, I(S), R, N, U(S), X, UM(UNS), PS, ON, Ã(S), ÃO(S) e ditongo.`,
        `Vi, cru, Saci e caju não levam acento (terminam em i/u). E atenção ao pronome ligado ao verbo: em dá-lo, vê-lo, vendê-lo, comprá-las, o -lo/-las não conta: a análise é sobre a forma verbal (dá, vê, vendê, comprá).`
      ],
      [
        'Aula 2 · Regras específicas: hiato, ditongo aberto e acentos diferenciais',
        `Se nenhuma regra geral justificar o acento, use as específicas. Hiato: acentuam-se o i ou o u tônicos quando forem a segunda vogal do hiato, estiverem sozinhos na sílaba ou seguidos de S, e não forem seguidos de NH. Ditongos abertos (ei, eu, oi): mantêm acento nas oxítonas e monossílabas e o perderam nas paroxítonas. Diferenciais que sobraram: 2PTVF.`,
        `Hiato: saúde, faísca, saída, juízes, país. Sem acento: cairdes, juiz, rainha, xiita. Ditongo aberto: chapéu, anéis, céu, dói (com acento) × ideia, joia, assembleia (sem). 2PTVF: pôr, pôde, tem/têm, vem/vêm, e forma/fôrma (opcional).`,
        `Regra geral prevalece sobre a específica: veículo é justificada como proparoxítona, não como hiato. E história: paroxítona terminada em ditongo (padrão) ou proparoxítona eventual (his-tó-ri-a), que não é a mesma justificativa de médico (proparoxítona real).`
      ],
      [
        'Aula 3 · Acentuação de ditongos e hiatos, com exercícios',
        `Ditongo é o encontro de vogal e semivogal na mesma sílaba. Os ditongos que podem receber acento são ei, eu, oi, e só quando estão em monossílabos tônicos ou em oxítonas. A segunda vogal do hiato (i ou u) recebe acento quando está sozinha na sílaba ou seguida de S e não é seguida de NH.`,
        `Monossílabos: céu, méis (de mel), mói. Oxítonas: herói, papéis, mausoléu. Perderam acento nas paroxítonas: ideia, colmeia, heroico, joia. Hiato: juízes, saúde, país (com acento); rainha, moinho (sem acento, por causa do NH).`,
        `País (com acento) e pais (sem acento) são palavras diferentes. Ditongo crescente vai do som fraco para o forte (semivogal + vogal: pátria); decrescente vai do forte para o fraco (vogal + semivogal: herói).`
      ]
    ],
    practice: [
      'Escreva corretamente e justifique a grafia: co + habitação, re + eleição, anti + higiênico, sub + humano (duas formas) e sobre + humano.',
      'Aplique "diferentes se juntam, iguais se separam" (e a duplicação de R/S) a: auto + escola, anti + inflamatório, micro + ônibus, mini + saia, semi + reta, inter + regional, trans + sexual, trans + continental.',
      'Explique a diferença entre mal e mau e diga quando mal leva hífen; depois, escreva bem + humorado, bem + querer, bem + feitor, mal + educado, mal + humorado, mal + sucedido.',
      'Justifique, pela regra geral, o acento de: cajá, armazéns, amável, órfão, álbum, bíceps, física. Diga por que Saci e caju não são acentuados.',
      'Separe as sílabas e justifique o acento ou a ausência dele em: ideia, saúde, rainha, juízes, história (duas separações possíveis), herói e veículo.'
    ],
    answers: [
      'coabitação e reeleição (co- e re- sempre juntos, mesmo diante de H ou vogal); anti-higiênico (segundo elemento começa por H, hífen); sub-humano ou subumano (as duas formas são aceitas); sobre-humano (sobre- exige hífen).',
      'autoescola (o e e são diferentes: junta), anti-inflamatório (i e i: iguais, separa), micro-ônibus (o e ô: iguais, separa; microônibus não existe), minissaia (i + s: junta e duplica o s), semirreta (i + r: junta e duplica o r), inter-regional (r e r: iguais, hífen), transexual (trans + sexual: o SS só existe entre vogais, então fica um só S) e transcontinental (s + c: junto).',
      'Mal com L é o contrário de bem ou indica tempo; mau com U é o contrário de bom. Mal só leva hífen diante de vogal, H ou L. Bem sempre leva hífen: bem-humorado; com querer e fazer admite também a forma junta com N: bem-querer/benquerer e bem-feitor/benfeitor. Mal: mal-educado (vogal), mal-humorado (H), malsucedido (junto).',
      'cajá: oxítona terminada em a; armazéns: oxítona terminada em -ens; amável: paroxítona terminada em L; órfão: paroxítona terminada em ão; álbum: paroxítona terminada em um; bíceps: paroxítona terminada em ps; física: proparoxítona (todas são acentuadas). Saci e caju são oxítonas terminadas em i e u, que não recebem acento.',
      'i-dei-a (2 + 1; paroxítona de ditongo aberto, perdeu o acento); sa-ú-de (hiato, u é a segunda vogal e está sozinho: acento); rai-nha (o i vem seguido de NH: sem acento); ju-í-zes (i sozinho na sílaba: acento); his-tó-ria (paroxítona terminada em ditongo, padrão) ou his-tó-ri-a (proparoxítona eventual); he-rói (oxítona terminada em oi); ve-í-cu-lo (justificada como proparoxítona, regra geral).'
    ]
  });

  window.PCPE_DEEPENING[topic] = {
    1: [
      ['h', 'Ortografia: o que a prova realmente cobra'],
      ['p', 'Ortografia é a escrita oficial das palavras. Boa parte do que você escreve no dia a dia não obedece a uma regra que você recita: você escreve abacaxi com x, enxaqueca com x, casa com s e não com z, saci com c, e as escreve assim pela chamada memória fotográfica. Essa memória visual ajuda bastante nas questões de grafia comum.'],
      ['p', 'Quando o concurso é da banca IBFC, o que ela mais cobra no quesito ortografia é o uso do hífen e as acentuações que mudaram depois do Acordo Ortográfico. Por isso o estudo se organiza em regras que você pode testar palavra por palavra, como num ditado: você ouve a regra, escreve as palavras e só depois anota a regra na frente delas.'],
      ['h', 'Regra 1: segunda palavra começando por H, use hífen'],
      ['p', 'Quando o segundo elemento da palavra composta começa pela letra H, separe os dois com hífen. A letra H é o motivo da separação.'],
      ['ul', [
        'extra-humano (extra + humano)',
        'anti-higiênico (anti + higiênico)',
        'Faça uma chave na sua anotação: segunda com H usa hífen.'
      ]],
      ['h', 'A exceção mais importante: co- e re-'],
      ['p', 'Os prefixos co- e re- caem demais em prova. Eles formam palavras sempre juntas, independentemente do que vier depois, mesmo que a próxima letra seja H ou vogal. Anote: co- e re- = tudo junto.'],
      ['ul', [
        'coabitação (e não co-habitação, apesar de habitação começar por H)',
        'reeleição, reeditar',
        'cooperar'
      ]],
      ['h', 'Sub-humano, subumano e sobre-humano'],
      ['p', 'A palavra sub-humano é escrita com hífen, porque o segundo elemento começa por H. Só que o VOLP (Vocabulário Ortográfico da Língua Portuguesa) registra também a forma subumano, tudo junto e sem o H. As duas são aceitas. Já o prefixo sobre- continua exigindo hífen: sobre-humano. Cuidado para não confundir os dois: o fato de sub- admitir a variante não permite juntar sobre-.'],
      ['h', 'Resumo de revisão'],
      ['ul', [
        'Ortografia = escrita oficial; a prova cobra sobretudo hífen e acentuação pós-acordo.',
        'Segundo elemento com H: hífen (extra-humano, anti-higiênico).',
        'co- e re-: sempre juntos (coabitação, reeleição, cooperar, reeditar).',
        'sub-humano ou subumano (as duas formas); sobre-humano (só com hífen).'
      ]]
    ],
    2: [
      ['h', 'Diferentes se juntam, iguais se separam'],
      ['p', 'Quando a última letra do primeiro elemento é diferente da primeira letra do segundo, as palavras se juntam; quando são iguais, separam-se por hífen. Memorize em voz alta: diferentes se juntam, iguais se separam.'],
      ['p', 'Exemplos em que as letras são diferentes (junta): autoescola (o e e), mototáxi (o e t: mantém o acento do táxi), paraquedas (a e q), contracheque (a e ch), mandachuva (a e ch) e semijoias (i e j).'],
      ['p', 'Exemplos em que as letras são iguais (separa): anti-inflamatório (i e i), micro-ônibus (o e o) e inter-regional (r e r).'],
      ['h', 'Microrganismo e a armadilha do micro-ônibus'],
      ['p', 'Micro + organismo seria, pela regra, micro-organismo (o e o iguais). Por força do uso, nas áreas médica e da biologia, admite-se também a forma microrganismo, com um só o e tudo junto. A banca pode explorar isso para enganar você: reduzir uma das letras e juntar tudo em outra palavra, como micro-ônibus. Essa redução não vale: micro-ônibus se escreve com os dois o e com hífen; microônibus não existe.'],
      ['h', 'R e S: junta e duplica'],
      ['p', 'Se o segundo elemento começa por R ou S e o primeiro termina em vogal, junte e duplique a consoante. Perceba que as letras são diferentes (a vogal e a consoante), por isso juntam, e a consoante dobra.'],
      ['ul', [
        'mini + saia = minissaia',
        'semi + reta = semirreta'
      ]],
      ['p', 'Você pode estranhar: por que semirreta tem dois R juntos e inter-regional não? Porque em inter-regional o primeiro R pertence ao elemento anterior (inter termina em R) e o segundo elemento também começa por R: as letras iguais se separam. Do mesmo modo, super + religioso fica super-religioso: o R já existia no elemento anterior, e letras iguais se separam.'],
      ['h', 'RR e SS só existem entre vogais'],
      ['p', 'O prefixo trans- termina em S. Diante de uma palavra começada por S, o esperado seria separar (S e S iguais), mas por convenção fica um só S, porque dois S não devem existir antes de consoante: transexual. Diante de consoante também fica um só S: transcontinental (trans + continental).'],
      ['ul', [
        'transexual (e não transsexual)',
        'transcontinental'
      ]],
      ['h', 'Resumo de revisão'],
      ['ul', [
        'Diferentes se juntam: autoescola, mototáxi, paraquedas, contracheque, mandachuva, semijoias.',
        'Iguais se separam: anti-inflamatório, micro-ônibus, inter-regional, super-religioso.',
        'Microrganismo é variante admitida; microônibus não existe.',
        'Segundo elemento com R ou S depois de vogal: junta e duplica (minissaia, semirreta).',
        'RR e SS só entre vogais: transexual, transcontinental.'
      ]]
    ],
    3: [
      ['h', 'Prefixos e elementos que levam hífen sem regra de apoio'],
      ['p', 'Pré-, pós- e pró- (com acento, tônicos), sem-, ex-, recém-, circum- e vice- levam hífen sem uma regra que os explique: você precisa decorar. Os exemplos trabalhados são:'],
      ['ul', [
        'pré-vestibular',
        'pós-graduação',
        'pró-armas',
        'sem-terra',
        'ex-aluno',
        'recém-casado',
        'vice-prefeito',
        'circum-: elemento que leva hífen diante de vogal, m e n (por exemplo, circum-navegação).'
      ]],
      ['p', 'Esses elementos recebem hífen porque pré, pós e pró são acentuados. Se o pre- não tiver acento, a grafia é junta: preocupado (e não pré-ocupado). Regra prática: se tem acento, separe por hífen.'],
      ['h', 'Bem: sempre com hífen, com uma dupla grafia'],
      ['p', 'Repita o mantra: o bem sempre vai ter hífen. Ele cai demais em concurso. Exemplos: bem-humorado (também por causa do H) e bem-sucedido.'],
      ['p', 'O VOLP registra uma dupla grafia quando bem se junta a derivados de querer e fazer: a forma com hífen e a forma junta, com o M virando N. Ambas estão corretas.'],
      ['ul', [
        'bem-querer ou benquerer',
        'bem-feitor ou benfeitor (derivado de fazer)',
        'O M só é usado antes de P e B; por isso, ao juntar, o M vira N.'
      ]],
      ['h', 'Mal: primeiro distinga mal e mau'],
      ['p', 'Mal com L é o contrário de bem, ou indica relação de tempo (mal ele entrou, no sentido de assim que entrou). Mau com U é o antônimo de bom: ele é um bom rapaz × ele é um mau rapaz. As regras de hífen a seguir valem para o mal com L.'],
      ['h', 'Mal: as três situações em que leva hífen'],
      ['p', 'O mal só se separa por hífen em três casos, que você anota: (1) quando o segundo elemento começa por H; (2) quando começa por L (letras iguais se separam); (3) quando começa por vogal. Nos demais casos, junta.'],
      ['ul', [
        'mal-lavado (mal termina em L e lavado começa por L: letras iguais)',
        'mal-educado (segunda palavra começa por vogal)',
        'mal-humorado (segunda palavra começa por H)',
        'malsucedido (a segunda não começa nem por L, nem por H, nem por vogal: tudo junto)'
      ]],
      ['h', 'Resumo de revisão'],
      ['ul', [
        'Pré-, pós-, pró-, sem-, ex-, recém-, vice-: hífen por convenção; se pre- não tem acento, junta (preocupado).',
        'Bem sempre com hífen; com querer e fazer há dupla grafia (bem-querer/benquerer, bem-feitor/benfeitor).',
        'Mal com L = contrário de bem ou tempo; mau com U = contrário de bom.',
        'Mal leva hífen diante de vogal, H ou L; nos demais casos é junto (malsucedido).'
      ]]
    ],
    4: [
      ['h', 'Palavras unidas por preposição: sem hífen'],
      ['p', 'Depois do Acordo Ortográfico, os hífens caíram nas locuções com preposição no meio. Você escreve tudo separado e sem hífen:'],
      ['ul', [
        'dia a dia',
        'fim de semana',
        'pôr do sol',
        'pé de moleque'
      ]],
      ['h', 'A exceção da fauna e da flora'],
      ['p', 'Se a locução com preposição nomeia espécies da fauna (animais) ou da flora (plantas, comidas naturais), ela leva hífen. Atenção ao nome próprio no meio: o Pará em castanha-do-pará fica com inicial minúscula.'],
      ['ul', [
        'castanha-do-pará',
        'joão-de-barro (um animal: fauna)',
        'pimenta-do-reino (flora)'
      ]],
      ['h', 'Origem e nacionalidade; cargos'],
      ['p', 'Sempre que a expressão denotar origem (nacionalidades combinadas), use hífen: euro-asiático, luso-brasileiro. Também leva hífen o que denota cargos: diretor-geral da União, tenente-brigadeiro.'],
      ['h', 'Formas consagradas pelo uso'],
      ['p', 'Algumas formas são chamadas de consagradas pelo uso e não têm regra: exigem memória visual. Em geral são expressões muito antigas, mantidas com hífen por tradição, mesmo sem serem fauna ou flora. Escreva cada uma várias vezes para fixar.'],
      ['ul', [
        'água-de-colônia',
        'arco-da-velha',
        'mais-que-perfeito (o tempo verbal)',
        'pé-de-meia',
        'cor-de-rosa'
      ]],
      ['p', 'Note o contraste: pé de moleque (sem hífen) × pé-de-meia (com hífen). Um segue a regra geral; o outro é consagrado. Em dúvida entre as duas, pergunte se a expressão é de fauna, flora, muito antiga/tradicional ou não.'],
      ['h', 'Resumo de revisão'],
      ['ul', [
        'Preposição no meio: sem hífen (dia a dia, fim de semana, pôr do sol, pé de moleque).',
        'Fauna e flora: com hífen (castanha-do-pará, joão-de-barro, pimenta-do-reino).',
        'Origem e cargos: com hífen (euro-asiático, luso-brasileiro, diretor-geral, tenente-brigadeiro).',
        'Consagradas: água-de-colônia, arco-da-velha, mais-que-perfeito, pé-de-meia, cor-de-rosa.'
      ]]
    ],
    5: [
      ['h', 'Letras duplicadas: o circunflexo caiu'],
      ['p', 'Sempre que houver vogais iguais juntas, o acento deixou de existir depois do Acordo. Compare as formas antigas e atuais: vôo passou a voo; lêem, crêem, dêem e vêem passaram a leem, creem, deem e veem. (Na separação silábica essas letras iguais se separam: cre-em.)'],
      ['h', 'Diferenciais que caíram'],
      ['ul', [
        'Polo Norte (e não pólo): polo.',
        'O pelo do gato (e não pêlo): pelo.',
        'O verbo parar no presente: ele para aqui todos os dias (e não pára).'
      ]],
      ['h', 'Diferencial que permanece: têm e vêm'],
      ['p', 'O verbo ter, no singular, não é acentuado: ele tem. No plural recebe circunflexo: eles têm. O mesmo vale para o verbo vir: ele vem × eles vêm. Esse acento é diferencial e marca a concordância com um sujeito no plural.'],
      ['p', 'Os derivados de ter e vir seguem a mesma regra. No singular levam acento agudo (oxítonas terminadas em -em); no plural, circunflexo.'],
      ['ul', [
        'ele obtém / eles obtêm',
        'o frasco contém / os frascos contêm',
        'ele mantém / eles mantêm',
        'ele intervém / eles intervêm',
        'ele advém / eles advêm',
        'ele detém / eles detêm (o poder)'
      ]],
      ['h', 'Paroxítonas de ditongo aberto: perderam o acento'],
      ['p', 'Assembleia, ideia, joia e jiboia deixaram de ser acentuadas porque são paroxítonas com ditongo aberto. (O motivo é detalhado nas lições sobre acentuação gráfica.) Duas exceções caem muito em prova e você pode confundir: Méier (o bairro do Rio de Janeiro) e destróier continuam acentuadas, porque são paroxítonas terminadas em R.'],
      ['h', 'Pôr e pôde'],
      ['p', 'O verbo pôr (sinônimo de colocar) mantém o acento para se diferenciar da preposição por: vou pôr a mesa. O verbo poder no presente não leva acento (você pode me enganar), mas o passado leva: como você pôde me enganar?'],
      ['h', 'Resumo de revisão'],
      ['ul', [
        'Vogais duplicadas perderam o acento: voo, leem, creem, deem, veem.',
        'Perderam acento: polo, pelo, para (verbo).',
        'Singular sem acento, plural com circunflexo: tem/têm, vem/vêm; derivados: obtém/obtêm, contém/contêm, advém/advêm, detém/detêm.',
        'Ideia, joia, assembleia, jiboia: sem acento; Méier e destróier: com acento (paroxítonas em R).',
        'pôr (verbo) × por (preposição); pode (presente) × pôde (passado).'
      ]]
    ],
    6: [
      ['h', 'Classificação pelo número de sílabas'],
      ['p', 'Monossílaba tem uma sílaba (pão); dissílaba, duas (café); trissílaba, três (médico); polissílaba, quatro ou mais (borboleta). Poli quer dizer várias.'],
      ['h', 'A sílaba e a vogal'],
      ['p', 'Não existe sílaba sem vogal: cada sílaba tem ao menos uma vogal, e uma vogal sozinha já forma sílaba. A consoante depende de uma vogal; ela só se separa quando encontra uma vogal para se apoiar. A sequência normal é consoante + vogal (CV) ou só vogal. Por isso, na separação a-man-te, o M se separa porque encontrou o a; o N não encontra vogal antes do T e fica na sílaba anterior.'],
      ['ul', [
        'pneu: o P não fica sozinho.',
        'bí-ceps: o P e o S não encontram vogal e ficam na mesma sílaba.',
        'op-ci-o-nal: o P não encontra vogal e fica na sílaba anterior; as vogais i e o ficam em sílabas diferentes (hiato).',
        'nup-ci-al: idem; i e a em sílabas diferentes (hiato).'
      ]],
      ['h', 'Grupos que não se separam'],
      ['p', 'Quando duas consoantes seguidas terminam em R ou L, o grupo não se separa: pro-ble-ma (o P e o L ficam juntos), su-bem-pre-go (o M fica na sílaba anterior, mas o P e o R não se separam). Os dígrafos clássicos CH, LH e NH jamais se separam (ca-cho-rra-da). RR e SS sempre se separam: iguais se separam (ca-cho-rra-da; cre-em).'],
      ['h', 'Ditongo, hiato e tritongo'],
      ['ul', [
        'Hiato: duas vogais em sílabas separadas (nup-ci-al: i-a).',
        'Ditongo: duas vogais na mesma sílaba. (Na verdade uma é vogal e a outra é semivogal, mas é mais didático falar em duas vogais.) O til sobre a vogal une as duas: a-nões.',
        'Tritongo: três vogais na mesma sílaba, como em Pa-ra-guai e Uruguai.'
      ]],
      ['h', 'Três vogais com o i no meio: 2 + 1'],
      ['p', 'Quando houver três vogais juntas e a do meio for a letra i, a sequência é 2 + 1: as duas primeiras ficam juntas na sílaba anterior e a última se separa. Isso é essencial porque ideia, joia e assembleia perderam o acento.'],
      ['ul', [
        'i-dei-a (ideia)',
        'joi-a (joia)',
        'as-sem-blei-a (assembleia)'
      ]],
      ['h', 'Iato acentuado: onde recai o acento'],
      ['p', 'Quando o acento recai sobre a segunda vogal, elas se separam e formam um hiato: gra-ú-do (graúdo). Quando recai sobre a primeira, ficam juntas e formam um ditongo aberto: cha-péu (chapéu). Pense em pronúncia: dizemos chapéu, com o aberto; compare com seu, em que o ditongo é fechado. Nenhum ditongo fechado tem acento; alguns abertos têm.'],
      ['h', 'Duas vogais no fim da palavra, com sílaba anterior acentuada'],
      ['p', 'Quando duas vogais encerram a palavra e a sílaba anterior é acentuada, há duas separações possíveis. A primeira tem preferência: deixe as duas vogais juntas, formando ditongo (his-tó-ria; plá-gio). A segunda é eventual: separe-as (his-tó-ri-a; plá-gi-o). Na banca Cebraspe (antiga Cespe), as duas separações são aceitas como corretas, mas você deve usar a primeira como prioridade.'],
      ['h', 'Resumo de revisão'],
      ['ul', [
        'Monossílaba, dissílaba, trissílaba e polissílaba (4 ou mais).',
        'Cada sílaba tem pelo menos uma vogal; consoante busca vogal.',
        'R e L finais do grupo consonantal ficam juntos; ch, lh, nh nunca se separam; rr e ss sempre se separam.',
        'Hiato (sílabas separadas), ditongo (mesma sílaba) e tritongo (Paraguai).',
        'Três vogais com i no meio: 2 + 1 (i-dei-a, joi-a, as-sem-blei-a).',
        'Acento na 2ª vogal: hiato (gra-ú-do); na 1ª: ditongo aberto (cha-péu).',
        'História e plágio: preferência pelo ditongo; separação eventual em hiato.'
      ]]
    ],
    7: [
      ['h', 'Acentos e sinais'],
      ['p', 'Existem o acento agudo (som aberto: céu), o circunflexo (som fechado: prêmio) e o grave (a crase, indicada no a). O til não é acento: é apenas sinal de nasalização. Por isso, se perguntarem por que a palavra anã recebe acento, a resposta é que ela não recebe: o til sobre as vogais nasais não é acento.'],
      ['h', 'Tonicidade'],
      ['p', 'Tônica é a sílaba mais forte. Última: oxítona; penúltima: paroxítona; antepenúltima: proparoxítona. Veja:'],
      ['ul', [
        'Oxítonas: café, pó, si, chegar, repor.',
        'Oxítonas que muita gente pronuncia errado: cateter (ca-te-TER, e não catéter), ureter, ruim (ru-IM, dissílaba), Nobel, mister e xerox (xe-ROX).',
        'Paroxítonas: útil, preto, festa, mesa, tórax; e as pronunciadas errado: rubrica (ru-BRI-ca), recorde (re-COR-de), pudico, ibero, maquinaria, Normandia.',
        'Proparoxítonas: lâmpada, cômodo, ímprobo (e não improbo) e ínterim.'
      ]],
      ['p', 'Sobre xerox: o VOLP registra as duas pronúncias. Se você pronunciar como paroxítona, deve escrever com acento: xérox.'],
      ['h', 'As quatro regras gerais'],
      ['p', 'Primeiro tente justificar a palavra por uma destas quatro regras: monossílabas tônicas, oxítonas, paroxítonas, proparoxítonas.'],
      ['p', 'Monossílabas tônicas e oxítonas quase se igualam. Acentuam-se as terminadas em a, e, o (e seus plurais: as, es, os). Nas oxítonas acrescentam-se -em e -ens. Quando a última letra é i ou u, não há acento. Escreva e justifique cada palavra:'],
      ['ul', [
        'pá, fé, dó: monossílabas tônicas terminadas em a, e, o.',
        'vi, cru: monossílabas terminadas em i e u: sem acento.',
        'cajá (oxítona em a), você (oxítona em e), avó (oxítona em o), armazéns (oxítona em ens).',
        'Saci e caju não recebem acento: oxítonas terminadas em i e u. (Não ponha acento em caju, nem na fruta nem na polpa.)'
      ]],
      ['h', 'A pegadinha dos pronomes ligados ao verbo'],
      ['p', 'Em dá-lo, vê-lo, vendê-lo e comprá-las, o pronome (-lo, -las) não faz parte da palavra. Quem vale é o verbo: dá é uma monossílaba tônica terminada em a (acentua); vendê é uma oxítona terminada em e; comprá é uma oxítona terminada em a. Já em formas como parti-lo, a oxítona termina em i e não é acentuada. O aluno vê duas sílabas e erra: lembre que só se analisa a forma verbal.'],
      ['h', 'Proparoxítonas e paroxítonas'],
      ['p', 'Todas as proparoxítonas são acentuadas: física, átomo, lâmpada. A justificativa é única: são proparoxítonas.'],
      ['p', 'Paroxítonas são acentuadas quando terminam em: L, I(S), R, N, U(S), X, UM(UNS), PS, ON, Ã(S), ÃO(S) e ditongo. Para decorar, faça um esquema com essas terminações; o ditongo é a mais importante. Um modo de estudar: sublinhe as terminações de uma letra e circule as de duas.'],
      ['ul', [
        'amável: paroxítona terminada em L',
        'biquíni: paroxítona terminada em I',
        'revólver: paroxítona terminada em R',
        'pólen: paroxítona terminada em N',
        'bônus: paroxítona terminada em US',
        'tórax: paroxítona terminada em X',
        'álbum: paroxítona terminada em UM',
        'bíceps: paroxítona terminada em PS',
        'íon: paroxítona terminada em ON',
        'órfã: paroxítona terminada em Ã',
        'órfão: paroxítona terminada em ÃO'
      ]],
      ['h', 'Paroxítona terminada em ditongo e proparoxítona eventual'],
      ['p', 'Na palavra história, a separação padrão é his-tó-ria, e a justificativa é paroxítona terminada em ditongo. A separação eventual é his-tó-ri-a; nesse caso, a gramática a classifica como proparoxítona eventual (ou aparente). Médico, por sua vez, é proparoxítona real. Portanto história e médico não se justificam pela mesma regra: uma é real, a outra é eventual. O mesmo vale para plágio: padrão, paroxítona terminada em ditongo; eventual, plá-gi-o, proparoxítona eventual.'],
      ['h', 'Resumo de revisão'],
      ['ul', [
        'Til não é acento; agudo = aberto; circunflexo = fechado.',
        'Oxítona = última; paroxítona = penúltima; proparoxítona = antepenúltima.',
        'Monossílabas tônicas: a, e, o (e plurais). Oxítonas: a, e, o, em, ens (e plurais).',
        'Formas pronominais: analise só o verbo (dá-lo, vendê-lo, comprá-las).',
        'Proparoxítonas: todas acentuadas.',
        'Paroxítonas: L, I(S), R, N, U(S), X, UM(UNS), PS, ON, Ã(S), ÃO(S) e ditongo.',
        'História: paroxítona terminada em ditongo (padrão) ou proparoxítona eventual; médico: proparoxítona real.'
      ]]
    ],
    8: [
      ['h', 'Quando usar regras específicas'],
      ['p', 'Tente sempre primeiro as quatro regras gerais. Só quando nenhuma justificar o acento você recorre às regras específicas, que são o hiato, o ditongo aberto e os acentos diferenciais. As gerais prevalecem sobre as específicas.'],
      ['h', 'Hiato: o mantra do i e do u'],
      ['p', 'Decore o mantra: i ou u, segunda vogal do hiato, seguido ou não de S, longe de NH. Se a palavra se encaixa, escreva e justifique como hiato.'],
      ['ul', [
        'saúde (sa-ú-de): o u é a segunda vogal do hiato e está sozinho.',
        'faísca (fa-ís-ca): o i é a segunda vogal e vem seguido de S.',
        'saída (sa-í-da): o i está sozinho.',
        'país (pa-ís): i seguido de S (pais, sem acento, é outra palavra).',
        'juízes (ju-í-zes): o i está sozinho na sílaba.'
      ]],
      ['p', 'Quando o i ou o u vem acompanhado de outra consoante que não seja S, não leva acento: cair-des (cairdes) e juiz (o i vem com Z; no plural, juízes, o i fica sozinho e leva acento). Rainha não tem acento porque depois do i vem NH. Xiita não tem acento porque o i se repete.'],
      ['h', 'Veículo: regra geral vence regra específica'],
      ['p', 'Na palavra veículo, o i parece ser a segunda vogal de um hiato. Mas a palavra é proparoxítona: a regra geral a justifica, e o hiato só é aceito quando não existir regra geral aplicável. Justifique veículo como proparoxítona. Já houve oscilação até em grandes bancas, mas a justificativa que prevalece é essa.'],
      ['h', 'Ditongos abertos: grupo A e grupo B'],
      ['p', 'Faça o quadro no caderno. Grupo A (sem acento): ideia, joia, assembleia. Grupo B (com acento): chapéu, anéis, céu, dói. Todos têm ditongo aberto (ei, eu, oi); a pronúncia é aberta (ideia, joia, assembleia, chapéu, anéis).'],
      ['p', 'Antes do Acordo todos os ditongos abertos eram acentuados. Hoje se preservam nas oxítonas e monossílabas (chapéu, anéis, céu, dói); as paroxítonas perderam o acento (ideia, joia, assembleia). Para justificar: chapéu é oxítona de ditongo aberto; céu e dói, monossílabas de ditongo aberto; ideia, joia e assembleia perderam o acento por serem paroxítonas de ditongo aberto.'],
      ['h', 'Diferenciais: a sigla 2PTVF'],
      ['p', 'Antes da reforma havia muitos acentos diferenciais (por exemplo, polo, pelo e pára). Sobraram cinco, que você decora como 2PTVF: dois P, um T, um V e um F.'],
      ['ul', [
        'Primeiro P: pôr (verbo, sinônimo de colocar) × por (preposição). Vou pôr a mesa × Fiz tudo por você. Teste: se dá para trocar por colocar, é o verbo, com acento.',
        'Segundo P: poder. Presente sem acento (Você pode me ajudar); passado com acento (Como você pôde me enganar). Pôde (passado) × pode (presente).',
        'T: ter. Ele tem (singular, sem acento) × eles têm (plural, circunflexo).',
        'V: vir. Ele vem × eles vêm.',
        'F: forma/fôrma: o acento é opcional e só se usa em caso de ambiguidade. Pão de forma não gera ambiguidade; em forma, não leva acento.'
      ]],
      ['p', 'Os derivados de ter e vir também seguem essa regra: ele mantém (oxítona terminada em -em) × eles mantêm (acento diferencial); ele intervém × eles intervêm; ele obtém × eles obtêm. O circunflexo marca a concordância com um sujeito no plural.'],
      ['h', 'Resumo de revisão'],
      ['ul', [
        'Primeiro as regras gerais; depois as específicas.',
        'Hiato: i ou u, segunda vogal, sozinho ou com S, longe de NH (saúde, faísca, saída, país, juízes).',
        'Sem acento: cairdes, juiz, rainha, xiita.',
        'Veículo se justifica como proparoxítona (geral vence específica).',
        'Ditongos abertos: acento em oxítonas e monossílabas (chapéu, anéis, céu, dói); sem acento nas paroxítonas (ideia, joia, assembleia).',
        '2PTVF: pôr, pôde, tem/têm, vem/vêm e forma/fôrma (opcional).'
      ]]
    ],
    9: [
      ['h', 'Ditongos que podem receber acento'],
      ['p', 'Ditongo é o encontro de uma vogal e uma semivogal na mesma sílaba. A vogal é o som mais forte; a semivogal, o mais fraco. Os ditongos que podem ser acentuados são ei, eu e oi, mas somente quando estão em monossílabos tônicos ou em oxítonas.'],
      ['ul', [
        'Monossílabos tônicos: céu (eu), méis (plural de mel; ei), mói (verbo moer; oi).',
        'Oxítonas: herói (oi), papéis (papel; ei), mausoléu (eu).'
      ]],
      ['p', 'Se a palavra é monossílaba com ditongo ei, vem quase sempre do plural: mel → méis. Oxítona é a palavra com pelo menos duas sílabas cuja última sílaba é a tônica.'],
      ['h', 'Paroxítonas: o acento caiu'],
      ['p', 'Antigamente os ditongos ei, eu, oi também eram acentuados nas paroxítonas (ideia, colmeia, heroico, joia). A mudança veio com o último acordo ortográfico, em vigor desde 2009. Agora ideia, colmeia, heroico e joia não têm acento, e a pronúncia continua a mesma. Só monossílabos tônicos e oxítonas mantêm.'],
      ['h', 'Hiato: o passo a passo'],
      ['p', 'Acentuam-se as segundas vogais do hiato quando forem i ou u, estiverem sozinhas na sílaba ou seguidas de S e não vierem seguidas de NH. Separe as sílabas e faça as perguntas, nesta ordem:'],
      ['ol', [
        'A segunda vogal do hiato é i ou u?',
        'Ela está sozinha na sílaba (ou acompanhada de S)?',
        'Depois dela vem NH? Se vier, não acentue.',
        'Se as respostas forem sim, sim e não, acentue.'
      ]],
      ['ul', [
        'rainha (ra-i-nha): o i é a 2ª vogal do hiato e está sozinho, mas vem NH depois: sem acento.',
        'moinho (mo-i-nho): idem, NH depois: sem acento.',
        'juízes (ju-í-zes): sozinho; depois vem Z: acentua.',
        'saúde (sa-ú-de): sozinho; sem NH: acentua.',
        'país (pa-ís): i acompanhado de S: acentua; sem o acento seria pais, outra palavra (os pais).'
      ]],
      ['h', 'Ditongo crescente e decrescente'],
      ['p', 'Ditongo crescente sai do som fraco para o forte: semivogal + vogal (pátria). Decrescente sai do som forte para o fraco: vogal + semivogal (herói, chapéu, leite, pai). Rabisque as sílabas e marque as vogais na prova.'],
      ['h', 'Exercícios resolvidos'],
      ['p', 'Questão 1. As palavras madeira, uruguaiano e lua têm, respectivamente, quais encontros vocálicos? Identifique cada um. Madeira tem ei: ditongo. Uruguaiano tem uai: tritongo. Lua separa as vogais (lu-a): hiato. A alternativa certa traz, nessa ordem, ditongo, tritongo e hiato (letra D).'],
      ['p', 'Questão 2. Qual é a única palavra que não tem hiato? Separe as sílabas. Raiz (ra-iz) tem hiato; álcool (al-co-ol) tem hiato; bainha (ba-i-nha) tem hiato; poeta (po-e-ta) tem hiato. Pai (pai) tem ditongo, não hiato (letra C). Atenção: a pergunta é sobre quem não tem hiato, não sobre acentuação.'],
      ['p', 'Questão 3. Qual alternativa apresenta um ditongo crescente e um decrescente, nesta ordem? Chapéu/leite: dois decrescentes (éu, ei). Juiz/raiz: hiatos, não ditongos. Pátria/herói: pátria (ia: semivogal + vogal = crescente) e herói (oi: vogal + semivogal = decrescente). É a alternativa certa.'],
      ['p', 'Questão 4 (resolva você). Qual alternativa tem apenas palavras com ditongo? As palavras apresentadas foram: papai, boi, céu, hiato, cadeira, lua, leite, navio, sabão, saguão. Grupo papai, boi, céu: ai, oi, eu, todos ditongos. Em outros grupos aparecem hiato (hi-a-to; lu-a) e saguão (uão, que forma tritongo), por isso não servem.'],
      ['h', 'Resumo de revisão'],
      ['ul', [
        'Ditongo = vogal + semivogal na mesma sílaba; só ei, eu, oi são acentuados, em monossílabos tônicos e oxítonas.',
        'Exemplos: céu, méis, mói; herói, papéis, mausoléu.',
        'Paroxítonas perderam o acento: ideia, colmeia, heroico, joia.',
        'Hiato: i ou u, sozinhos ou com S, sem NH depois (juízes, saúde, país × rainha, moinho).',
        'Crescente: semivogal + vogal (pátria); decrescente: vogal + semivogal (herói).',
        'Pai tem ditongo; raiz, álcool, bainha e poeta têm hiato.'
      ]]
    ]
  };

  window.PCPE_QUESTOES[topic] = [
    {
      text: 'Quanto ao emprego do hífen diante de palavras iniciadas por H, assinale a alternativa em que todas as formas estão corretas.',
      options: [
        'co-habitação, re-eleição, anti-higiênico, extra-humano',
        'coabitação, reeleição, anti-higiênico, extra-humano',
        'coabitação, reeleição, antihigiênico, extrahumano',
        'co-habitação, reeleição, antihigiênico, extra-humano'
      ],
      correct: 1,
      exp: 'Co- e re- se juntam sempre, mesmo diante de H ou vogal (coabitação, reeleição). Quando o segundo elemento começa por H, usa-se hífen (anti-higiênico, extra-humano). As demais trazem co-habitação, re-eleição ou omitem o hífen diante do H.'
    },
    {
      text: 'Aplicando a regra "diferentes se juntam, iguais se separam", assinale a alternativa corretamente grafada.',
      options: [
        'autoescola, mototáxi, contracheque, anti-inflamatório',
        'auto-escola, mototáxi, contracheque, anti-inflamatório',
        'autoescola, moto-táxi, contra-cheque, antiinflamatório',
        'autoescola, mototáxi, contracheque, microônibus'
      ],
      correct: 0,
      exp: 'Autoescola (o/e), mototáxi (o/t) e contracheque (a/ch) têm letras diferentes e se juntam; anti-inflamatório (i/i) tem letras iguais e se separa. As demais erram ao separar letras diferentes, ao juntar letras iguais (antiinflamatório) ou ao reduzir micro-ônibus (microônibus não existe).'
    },
    {
      text: 'Considerando o prefixo, a duplicação de R e S e as letras iguais, assinale a alternativa em que todas as palavras estão corretas.',
      options: [
        'mini-saia, semi-reta, interregional, trans-sexual',
        'minisaia, semirreta, inter-regional, transsexual',
        'minissaia, semirreta, inter-regional, transexual',
        'minissaia, semireta, interregional, transexual'
      ],
      correct: 2,
      exp: 'Prefixo terminado em vogal + palavra com R ou S: junta e duplica (minissaia, semirreta). Inter + regional tem R e R iguais: hífen. Trans + sexual perde um S, porque SS só existe entre vogais: transexual. As demais não duplicam, juntam letras iguais ou mantêm o SS depois de consoante.'
    },
    {
      text: 'Sobre pré-, pós-, pró-, ex-, vice- e o prefixo sem acento pre-, assinale a alternativa correta.',
      options: [
        'prévestibular, pósgraduação, exaluno, viceprefeito',
        'pré vestibular, pós graduação, ex aluno, vice prefeito',
        'pré-vestibular, pós-graduação, ex-aluno, pré-ocupado',
        'pré-vestibular, pós-graduação, ex-aluno, vice-prefeito, preocupado'
      ],
      correct: 3,
      exp: 'Pré-, pós-, pró-, ex- e vice- levam hífen sem regra de apoio. Quando o pre- não tem acento, a palavra se junta: preocupado, e não pré-ocupado. As outras alternativas omitem o hífen, separam sem hífen ou escrevem pré-ocupado.'
    },
    {
      text: 'Quanto a bem e mal, assinale a alternativa em que todas as formas estão corretas.',
      options: [
        'bem humorado, malsucedido, mal-educado, mal-humorado',
        'bem-humorado, malsucedido, mal-educado, mal-humorado',
        'bem-humorado, mal-sucedido, maleducado, mal-humorado',
        'bem-humorado, malsucedido, maleducado, malhumorado'
      ],
      correct: 1,
      exp: 'Bem sempre leva hífen (bem-humorado). Mal leva hífen só diante de vogal (mal-educado), de H (mal-humorado) ou de L; nos demais casos junta (malsucedido). As outras erram ao tirar o hífen de bem ou ao juntar mal diante de vogal ou H.'
    },
    {
      text: 'Segundo as regras para palavras unidas por preposição, assinale a alternativa corretamente grafada.',
      options: [
        'dia-a-dia, fim-de-semana, joão-de-barro, pimenta do reino',
        'dia a dia, fim-de-semana, joão de barro, pimenta-do-reino',
        'dia a dia, fim de semana, joão-de-barro, pimenta-do-reino',
        'dia-a-dia, fim de semana, joão de barro, pimenta do reino'
      ],
      correct: 2,
      exp: 'Locuções com preposição não levam hífen (dia a dia, fim de semana), exceto fauna e flora: joão-de-barro (animal) e pimenta-do-reino (planta). As demais hifenizam o que não deve ou deixam sem hífen nomes de fauna e flora.'
    },
    {
      text: 'Depois do Acordo Ortográfico, assinale a alternativa em que todas as palavras estão acentuadas corretamente.',
      options: [
        'voo, leem, ideia, eles têm',
        'vôo, leem, ideia, eles têm',
        'voo, lêem, ideia, eles têm',
        'voo, leem, ideia, eles tem'
      ],
      correct: 0,
      exp: 'Vogais duplicadas perderam o circunflexo (voo, leem), ideia é paroxítona de ditongo aberto e perdeu o acento, e o plural do verbo ter mantém o circunflexo diferencial (eles têm). As outras trazem vôo, lêem ou eles tem (sem acento no plural).'
    },
    {
      text: 'Assinale a alternativa em que todas as palavras são paroxítonas.',
      options: [
        'cateter, rubrica, recorde, pudico',
        'rubrica, recorde, pudico, ímprobo',
        'rubrica, recorde, ruim, ibero',
        'rubrica, recorde, pudico, ibero'
      ],
      correct: 3,
      exp: 'Rubrica (ru-BRI-ca), recorde (re-COR-de), pudico (pu-DI-co) e ibero (i-BE-ro) têm a penúltima sílaba tônica. Cateter (ca-te-TER) e ruim (ru-IM) são oxítonas; ímprobo é proparoxítona.'
    },
    {
      text: 'A palavra veículo tem o i como segunda vogal de um hiato, mas, ao justificar seu acento, deve-se dizer que ela é acentuada por ser:',
      options: [
        'hiato, com i segunda vogal sozinha na sílaba',
        'proparoxítona, pois as regras gerais prevalecem sobre as específicas',
        'paroxítona terminada em ditongo',
        'oxítona terminada em o'
      ],
      correct: 1,
      exp: 'Veículo (ve-í-cu-lo) tem a sílaba tônica na antepenúltima: proparoxítona. O hiato só é usado quando nenhuma regra geral justifica o acento. Não é paroxítona terminada em ditongo (história) nem oxítona.'
    },
    {
      text: 'Segundo a regra do hiato (i ou u como segunda vogal, sozinhos ou seguidos de S, sem NH depois), assinale a palavra que NÃO recebe acento.',
      options: [
        'juízes',
        'saúde',
        'rainha',
        'país'
      ],
      correct: 2,
      exp: 'Em rainha (ra-i-nha) o i vem seguido de NH, então não se acentua. Juízes (i sozinho), saúde (u sozinho) e país (i seguido de S) são acentuados por hiato.'
    }
  ];
})();
