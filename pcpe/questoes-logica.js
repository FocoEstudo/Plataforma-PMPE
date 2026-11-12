(function () {
  window.PPPE_QUESTOES = window.PPPE_QUESTOES || {};
  Object.assign(window.PPPE_QUESTOES, {
    'Estruturas e argumentação lógica': [
      {text:'Qual sentença é uma proposição?',options:['Feche a porta!','Quantos anos você tem?','Recife é capital de Pernambuco.','x é maior que 3, sem definição de x.'],correct:2,exp:'É uma afirmação com valor lógico; ordem, pergunta e sentença aberta não são proposições.'},
      {text:'A conjunção p e q é verdadeira quando:',options:['Ambas são verdadeiras.','Pelo menos uma é verdadeira.','Ambas são falsas.','p é falsa e q verdadeira.'],correct:0,exp:'A conjunção só é verdadeira se as duas parcelas forem verdadeiras.'},
      {text:'Na disjunção inclusiva p ou q, o resultado é falso quando:',options:['p e q são verdadeiras.','p e q são falsas.','p é verdadeira e q falsa.','p é falsa e q verdadeira.'],correct:1,exp:'A disjunção inclusiva é falsa apenas quando ambas as proposições são falsas.'},
      {text:'A condicional p implica q é falsa quando:',options:['p e q são verdadeiras.','p e q são falsas.','p é verdadeira e q é falsa.','p é falsa e q é verdadeira.'],correct:2,exp:'Essa é a única linha falsa da condicional material.'},
      {text:'Uma tabela-verdade com três proposições simples distintas contém:',options:['3 linhas.','6 linhas.','8 linhas.','9 linhas.'],correct:2,exp:'São 2³ combinações, isto é, 8 linhas.'},
      {text:'A contrapositiva de se p então q é:',options:['Se q então p.','Se não q então não p.','Se não p então não q.','p e q.'],correct:1,exp:'A contrapositiva inverte a ordem e nega ambas as proposições.'},
      {text:'A condicional se p então q equivale a:',options:['Não p ou q.','p e não q.','p ou não q.','q implica p.'],correct:0,exp:'Não p ou q tem a mesma tabela-verdade da condicional.'},
      {text:'De p implica q e p, conclui-se validamente:',options:['Não p.','Não q.','q.','p é falsa.'],correct:2,exp:'É a forma válida denominada modus ponens.'},
      {text:'De p implica q e não q, conclui-se validamente:',options:['p.','Não p.','q.','p e q.'],correct:1,exp:'É a forma válida denominada modus tollens.'},
      {text:'Um argumento é válido quando:',options:['Sua conclusão é sempre verdadeira no mundo real.','Todas as premissas são efetivamente verdadeiras.','Não existe situação com premissas verdadeiras e conclusão falsa.','Possui uma premissa falsa.'],correct:2,exp:'A validade trata da preservação da verdade pela forma lógica.'}
    ],
    'Diagramas e álgebra de proposições': [
      {text:'A negação de p e q equivale a:',options:['Não p e não q.','Não p ou não q.','p ou q.','p e não q.'],correct:1,exp:'Pela lei de De Morgan, negam-se as parcelas e troca-se e por ou.'},
      {text:'A negação de p ou q equivale a:',options:['Não p e não q.','Não p ou não q.','p e q.','p ou não q.'],correct:0,exp:'A negação da disjunção é a conjunção das negações.'},
      {text:'A negação de se p então q é:',options:['Não p e q.','Não p ou q.','p e não q.','q implica p.'],correct:2,exp:'A condicional é falsa exatamente quando p ocorre e q não ocorre.'},
      {text:'A negação de “todos os laudos foram assinados” é:',options:['Nenhum laudo foi assinado.','Algum laudo não foi assinado.','Todos os laudos não foram assinados.','Algum laudo foi assinado.'],correct:1,exp:'A negação de todos é a existência de pelo menos uma exceção.'},
      {text:'A negação de “algum aluno faltou” é:',options:['Todos faltaram.','Algum aluno não faltou.','Nenhum aluno faltou.','Todos chegaram atrasados.'],correct:2,exp:'A negação de existir ao menos um é nenhum.'},
      {text:'Se A={1,2} e B={2,3}, a interseção é:',options:['{1,2,3}.','{1}.','{2}.','{3}.'],correct:2,exp:'A interseção contém os elementos comuns aos dois conjuntos.'},
      {text:'Se A={1,2} e B={2,3}, a união é:',options:['{1,2,3}.','{2}.','{1,3}.','Conjunto vazio.'],correct:0,exp:'A união reúne os elementos que pertencem a pelo menos um conjunto.'},
      {text:'Se |A|=20, |B|=15 e |A ∩ B|=5, a união contém:',options:['25 elementos.','30 elementos.','35 elementos.','40 elementos.'],correct:1,exp:'|A ∪ B|=20+15−5=30.'},
      {text:'Num universo de 40 pessoas, 22 estudam inglês, 15 espanhol e 5 ambos. Quantas não estudam nenhum dos dois?',options:['5.','8.','10.','13.'],correct:1,exp:'A união contém 22+15−5=32 pessoas. Fora dela há 40−32=8.'},
      {text:'A diferença A − B contém:',options:['Os elementos comuns a A e B.','Os elementos de B que não estão em A.','Os elementos de A que não estão em B.','Todo o universo.'],correct:2,exp:'A diferença A − B retém os elementos de A externos a B.'}
    ],
    'Problemas aritméticos': [
      {text:'Quanto é 25% de 80?',options:['15.','20.','25.','40.'],correct:1,exp:'25/100 multiplicado por 80 é 20.'},
      {text:'Um valor de R$ 200 recebe aumento de 10%. O novo valor é:',options:['R$ 210.','R$ 220.','R$ 240.','R$ 250.'],correct:1,exp:'Aumento de 10% é R$ 20; o total é R$ 220.'},
      {text:'Um preço sobe de R$ 100 para R$ 120. O aumento percentual é:',options:['10%.','15%.','20%.','25%.'],correct:2,exp:'O aumento de 20 é dividido pela base 100: 20%.'},
      {text:'Um valor de 100 aumenta 20% e depois diminui 20%. O resultado é:',options:['96.','100.','104.','120.'],correct:0,exp:'100 × 1,2 × 0,8 = 96; as bases são diferentes.'},
      {text:'Se 2 cadernos iguais custam R$ 10, 6 cadernos custam:',options:['R$ 15.','R$ 20.','R$ 25.','R$ 30.'],correct:3,exp:'A quantidade triplica; com preço unitário constante, o custo também triplica.'},
      {text:'Três equipes iguais concluem serviço em 4 dias. Seis equipes iguais, com produtividade constante, levam:',options:['1 dia.','2 dias.','4 dias.','8 dias.'],correct:1,exp:'Dobrar a quantidade de equipes reduz o tempo pela metade, sob as condições dadas.'},
      {text:'A média de 2, 4 e 6 é:',options:['3.','4.','5.','6.'],correct:1,exp:'(2+4+6)/3 = 4.'},
      {text:'Notas 4 e 8 com pesos 1 e 3 têm média ponderada:',options:['6.','6,5.','7.','7,5.'],correct:2,exp:'(4×1+8×3)/(1+3)=28/4=7.'},
      {text:'A razão de 12 para 4 é:',options:['1/3.','2.','3.','4.'],correct:2,exp:'12 dividido por 4 é 3.'},
      {text:'Um desconto de 15% em R$ 200 corresponde a:',options:['R$ 15.','R$ 20.','R$ 30.','R$ 35.'],correct:2,exp:'0,15 × 200 = 30.'}
    ]
  });
})();