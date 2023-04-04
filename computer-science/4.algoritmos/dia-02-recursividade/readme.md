# Introdução


Neste conteúdo, vamos aprender o que é recursividade, como desenvolver algoritmos recursivos e quando utilizá-los. Com essa técnica, podemos resolver problemas complexos transformando-os em problemas menores combinados a possíveis soluções.

## Por que isso é importante?
A recursividade desempenha um papel central na programação funcional e na ciência da computação. No paradigma funcional, por exemplo, a recursividade é o mecanismo básico para repetições. Além disso, muitos algoritmos importantes usam a recursão.

Com a recursividade, conseguimos solucionar alguns problemas de forma mais simplificada e harmoniosa, diminuindo assim a complexidade de escrita do código.

Normalmente, a solução recursiva é utilizada em situações nas quais o código fica com complexidade baixa, se comparado ao código da solução iterativa, para o mesmo problema.

⚠️ Aviso: Ao usarmos a recursão, não temos nenhum benefício quanto ao desempenho do programa. Ela é mais utilizada para evidenciar a resposta.

De olho na dica👀: “Os loops podem elevar o desempenho do seu programa, enquanto a recursão melhora o do seu programador. Escolha o que for mais importante para a sua situação.”

## Recursividade
Definição de recursividade
Durante seu cotidiano enquanto pessoa programadora, será demandado que você resolva problemas. Dito isso, podemos utilizar o método da recursividade para a resolução de problemas grandes.

Anota aí 🖊: Uma função que chama a si mesma é chamada de recursiva. O processo para executar tal função recursiva é chamado de recursividade.

Um problema submetido a uma solução recursiva, será quebrado em subproblemas menores até chegar a tal ponto que torna-se possível solucioná-lo trivialmente. Podemos fazer a analogia com as chamadas bonecas russas, que dentro de si tem diversas outras bonecas, cada vez menores.

## Leis da recursão
Podemos perceber que a recursividade é um excelente método para usarmos no dia a dia, entretanto, nada é perfeito! Quando formos escrever um código, temos que ter o cuidado para que não haja um loop infinito.

Observe que dentro da implementação desta solução, a função chama ela mesma.

Você pode estar se perguntando: “O que é isso!? “ 🤔

Resposta: Isso é uma chamada recursiva! Lembre-se que a recursão é quando uma função chama ela mesma. Se você executar esse código, ele ficará em loop infinito!

⚠️ Aviso: Caso tenha executado o código anterior, aperte Ctrl+C para parar a execução.

Quando estamos escrevendo uma função recursiva, precisamos informar nossa condição de parada ou caso base da recursão. Nesse sentido, podemos separar uma função recursiva em:

Caso base e Caso recursivo
O caso recursivo é a chamada da própria função novamente.

Então, como seria a correção desse código para que ele funcione de acordo com esperado?🤔 Observe a resposta abaixo:

```
def countdown(n):
    if n == 0: # caso base
        print("FIM!")
    else:
        print(n)
        countdown(n - 1) # caso recursivo

countdown(5)
```
Pronto! Agora a função funciona corretamente!

Anota aí 🖊:

Se n é igual a 0, escreva “FIM!”

Se n não for igual a 0, escreva n e chame a função novamente com n - 1

Como vimos acima, não podemos construir um código recursivo sem validar algumas condições. Sendo assim, vamos a três leis importantes:

1) Um algoritmo recursivo deve ter um caso base: quando falamos de recursão, devemos sempre lembrar do caso base, pois sem ele nosso algoritmo ficará executando infinitamente.

O caso base é a condição de parada do algoritmo recursivo, ele é o menor subproblema do problema, tornando-o possível de resolver de forma direta/trivial;

2) Um algoritmo recursivo deve mudar o seu estado e se aproximar do caso base: após o início da execução de um algoritmo recursivo, a cada nova chamada a ele mesmo, o seu estado deve se aproximar progressivamente do caso base.

Vamos imaginar a seguinte situação: queremos criar um código que irá printar números a partir de 0 e terminar em 10. O caso base do algoritmo é 10, pois é onde nossa função recursiva deve parar a execução. A primeira chamada a função terá o número 0 passado de parâmetro. A cada nova chamada à função, nosso estado deve incrementar o valor 1 ao valor do estado anterior, até chegar ao número 10. Logo, o valor do estado na primeira chamada será 0, na segunda chamada será 1, na terceira chamada será 2, e assim por diante até chegar ao valor do caso base;

3) Um algoritmo recursivo deve chamar a si mesmo, recursivamente: Essa lei é a própria definição de recursão.

Observe o gif abaixo que representa a recursividade muito bem! 🐶 ➿

Entendendo recursividade e colocando em prática
Antes de vermos como acontece a “mágica” da recursividade, vamos ver como costuma ser uma estrutura básica de uma função recursiva:

Declaramos uma função com um parâmetro.
Dentro da função criada, definimos qual é a condição de parada da função.
A condição de parada faz uma comparação entre o valor da condição com o parâmetro que a função está recebendo. Caso a condição não se satisfaça, a função é chamada novamente com um novo parâmetro. Caso contrário a execução para na condição de parada.
Vamos ver como isso acontece na prática ? Mas antes, você se lembra das suas aulas de matemática em que aprendeu sobre fatorial?

Você sabia que a fatorial é uma função recursiva? Vamos relembrar:

Fatorial de n é o produto dos números positivos consecutivos menores ou iguais a n.

Sua notação é: n!

Sua definição:

0! = 1

n! = n x (n - 1) x (n - 2) … 2 x 1

Exemplo:

5! = 5 x 4 x 3 x 2 x 1 = 120

Certo! Agora que relembramos fatorial, vamos observar sua estrutura:

Se

5! = 5 x 4 x 3 x 2 x 1
e

4! = 4 x 3 x 2 x 1
Podemos reescrever 5! como 5! = 5 x 4!

Observando esse caso, vemos que a função 5! possui uma chamada de outra função fatorial dentro dela. Logo, temos uma recursão!

Vamos escrever um código para resolvê-lo?

## A pilha de chamadas
Antes de falarmos sobre a pilha de chamadas, precisamos entender um pouco a estrutura de dados chamada Pilha. Para isso, vamos a uma breve introdução sobre seu conceito.

⚠️ Aviso: Não se preocupe em entender, nesse momento, 100% dos conceitos de pilha. Você irá vê-lo mais para frente. O importante aqui é que você entenda a parte conceitual do funcionamento da estrutura para que possamos progredir no assunto de recursividade!

Imagine um conjunto de pratos que estão um sobre o outro, ou seja, empilhados. Quando queremos pegar um prato, vamos pegar o do topo da pilha, certo? Em outro momento, se você quiser adicionar outro prato àquela pilha, você também irá adicioná-lo ao topo da pilha.

Logo, podemos observar que uma pilha tem duas ações triviais:

Inserir (Push)

Retirar (Pop)

E todas essas ações são efetuadas no topo da pilha.

Pois bem, a nossa pilha de chamadas funciona da mesma forma! Vamos conhecê-la?

A pilha de chamadas,também conhecida como call stack, organiza as sub-rotinas que estão executando no computador. Trazendo para o nosso contexto de recursividade, a pilha de chamadas registra a execução das funções, ou seja, qual está sendo executada, em que ponto ela deve retornar, qual é a proxima a ser chamada, etc.

Resumindo, é como se a pilha de chamadas operasse com contextos. Exemplo:

Uma função A está sendo executada e durante a sua execução ela precisa do resultado do processamento de outra função B a qual ela chama. Diante disso, a função A ficará aguardando na pilha de chamadas enquanto a função B executa. Quando B terminar, seu resultado voltará para Aque vai continuar sua execução.

Anota aí 🖊:

Toda vez que chamamos uma função em um programa, o sistema operacional reserva memória para as variáveis e parâmetros da função;

Sempre quando uma função é executada, ela é guardada na pilha;

Quando a função termina de ser executada, ela sai da pilha.

Vamos utilizar esse código com recursão e visualizar o funcionamento da pilha de chamadas:

```
def saudacao():
    print("Oi")

def despedida():
    print("Tchau")

def init():
    print("Inicio")
    saudacao()
    print("Fim")
    despedida()

init()
```

Note que a cada vez que a função countdown é chamada, um novo dado é adicionado à uma pilha (canto direito do gif). É adicionado à pilha todos os valores executados, do 5 ao 1, até chegarmos no caso base 0. Quando a execução acaba, os dados são retirados da pilha, um a um, de forma reversa (do 0 ao 5), até que a pilha esvazie e o processamento finalize.

Vamos ver outro exemplo? Que tal o nosso fatorialmencionado anteriormente ?

Observe o gif que mostra de modo visual o funcionamento da pilha (de maneira simplificada), apresentando a execução do código do fatorial passo a passo:

De forma análoga, quando factorial é chamada, um novo dado é adicionado à uma pilha. Será adicionado à pilha todos os valores executados, do 5 ao 1, quando chegamos no caso base. Quando a execução acaba, os dados são retirados da pilha um a um de forma reversa (do 1 ao 5), multiplicando e retornando cada dado, até que a pilha esvazie e o processamento finalize.

## Iterativo x Recursivo!
Agora, vamos ver que é possível ter funções tanto recursivas, quanto iterativas para o mesmo problema. Para isso, utilizaremos os exemplos que já usamos nesse conteúdo.

Vamos começar olhando para a função recursiva de contagem regressiva. Conseguimos montar uma função iterativa para ela? Sim! Vamos ver como fazer isso:

## Análise de algoritmos recursivos
Para que consigamos realizar a análise de algoritmos recursivos, iremos fazer o uso da Árvore de Recorrência!

Você pode estar se perguntando: “Mas o que é isso?!”🤔


