# Algoritmos

Essa pergunta talvez já tenha passado pela sua cabeça ao olhar para os códigos que desenvolveu. E é natural que seja assim, pois a eficiência de um algoritmo é um dos principais requisitos não funcionais listados em levantamentos de requisitos, tanto por clientes quanto por membros das equipes de desenvolvimento.

Uma pessoa usuária de um site não quer que sua busca por determinada informação demore muito tempo para trazer um retorno. Por exemplo, não é frustrante quando algum programa causa lentidão à nossa máquina em função da quantidade de recursos que consome!? 😠

Entretanto, não é somente em experiência da pessoa usuária que a eficiência de um algoritmo se mostra importante. Há diversos projetos e pesquisas científicas que dependem, por exemplo, do processamento e armazenamento de bases enormes de dados, e que dependem de investimentos financeiros elevados.

Por esse motivo, é fundamental que as pessoas desenvolvedoras sejam capazes de aumentar a eficiência de seus algoritmos, reduzindo custos envolvidos e entregando a resolução de problemas.

## Você será capaz de

- Descrever a capacidade de analisar o desempenho de um algoritmo como importante para processos seletivos de Big Techs, como Google, Amazon, Facebook, etc.

- Definir o que é algoritmo;

- Definir o que é um algoritmo correto;

- Compreender a importância da análise de algoritmos;

- Definir Ordem de Complexidade, ou Complexidade Assintótica;

- Compreender as notações que representam a complexidade de um algoritmo, a saber: O(1), O(n), O(log n), O(n^2), O(n^3) e O(n!);

- Definir Complexidade de Tempo e Complexidade de Espaço;

- Definir a categoria de problemas NP-Completo;

- Combinar funções matemáticas para analisar complexidade de algoritmos;

- Definir o melhor, o pior e o caso médio de uma Ordem de Complexidade.

## Por que isso é importante?
Em geral, para funções com um valor de entrada pequeno, não costumamos nos importar com a eficiência do algoritmo.

Entretanto, quando nossa função tiver que lidar com valores de entrada muito grandes, por exemplo: mil valores ao mesmo tempo? Ou quem sabe milhões de valores? Nesses casos, a eficiência do que estamos fazendo tornar-se importante e nós, pessoas desenvolvedoras, precisamos ser capazes de lidar com esses cenários!

⚠️ Aviso: Embora pareça que estamos falando de quantidades irreais, há uma série de exemplos que comprovam que problemas gerados por entradas de dados grandiosas são bastante comuns.

O famoso Discord, por exemplo, já enfrentou a demanda de ordenar alfabeticamente uma lista de amigos com até 250.000 pessoas. E você sabe o tempo máximo que o algoritmo tinha pra rodar? Menos de um segundo e meio! Um desafio e tanto que pôde ser solucionado com o conhecimento sobre Algoritmos.

De olho na dica 👀: Esse conhecimento é tão importante no mundo da tecnologia, que as famosas Big Techs como: Google, Amazon e Facebook, fazem processos seletivos nos quais a capacidade de fazer esse tipo de análise é obrigatória.

Em suma, quando cresce a escala, esse conhecimento se torna essencial. E com esse conhecimento você vai perceber a existência de certos tipos de problemas que ainda não têm solução, mesmo reunindo toda a capacidade computacional do planeta.

⚠️ Aviso: Parece exagero? Mas acredite, não é. Vamos seguir para o conteúdo e isso ficará mais nítido para você. 🙂

## O que é um algoritmo?

Uma vez que usamos essa palavra com frequência, é preciso que tenhamos a definição bem nítida para esse conceito, de modo a garantir que estamos partindo do mesmo ponto quando falamos de Complexidade Algorítmica.

_“Informalmente, um algoritmo é qualquer procedimento computacional bem definido que toma algum valor ou conjunto de valores como entrada e produz algum valor ou conjunto de valores como saída. Portanto, um algoritmo é uma sequência de etapas computacionais que transformam a entrada na saída” (CLRS - Introduction to Algorithms)_

_“Um algoritmo é um conjunto de instruções que realizam uma tarefa.” (BHARGAVA, ADITYA Y. - Entendendo Algoritmos)_

Basicamente, um algoritmo é uma sequência lógica de passos bem definida (entrada, processamento e saída) que realiza determinada tarefa.

Pode parecer que usamos algoritmos somente para resolver problemas computacionais, entretanto, também os utilizamos no nosso dia a dia! Observe alguns exemplos a seguir:

````
def sum_array(numbers):
    sum = 0
    for number in numbers:
        sum += number

    return sum
````

Porém, vamos supor que estamos falando de uma máquina padrão e sem mais nada rodando nela. Quanto tempo você imagina que o algoritmo vai demorar para executar? Um segundo? Dez segundos?

Temos mais um “depende” aqui, não é mesmo? O tempo de execução depende do tamanho do array passado por parâmetro! Quanto maior o tamanho dele, mais tempo o algoritmo gastará em sua execução.

Dito isso, não sabemos quanto tempo o algoritmo vai demorar para executar, pois vai depender de inúmeros fatores que vão além do nosso controle. Mas, uma coisa podemos afirmar: O tempo de execução dele é proporcional ao tamanho do dado de entrada. Por exemplo:

````
# def sum_array(numbers):
  # ...

# Suponha que, para o array abaixo, o tempo de execução seja `n`
sum_array(array_com_dez_mil_numeros)

# Nesse caso, aqui o tempo de execução vai ser `10 * n`, ou `10n`, já que o array é dez vezes maior que o anterior
sum_array(array_com_cem_mil_numeros)

# Já esse é dez mil vezes maior que o primeiro, então esse aqui executa em `100n`
sum_array(array_com_um_milhão_de_numeros)
````

Note que conforme aumentamos o valor da entrada, o tempo de execução do algoritmo aumenta proporcionalmente, de acordo com uma taxa.

É isso que chamamos de complexidade: A taxa de crescimento do tempo de execução de um algoritmo; quanto maior é essa taxa, maior é seu tempo de execução e, portanto, maior sua complexidade.

No exemplo anterior, os valores de entrada podem variar, mas as proporções não: Um aumento no tamanho da entrada aumenta o tempo de execução na mesma proporção.

Podemos dizer, em suma, que a Ordem de Complexidade nada mais é do que a representação dessa proporção (ou taxa) de crescimento. Dado que o algoritmo é linearmente proporcional ao tempo de execução, dizemos que este é um algoritmo linear.

Anota aí 🖊: A Ordem de Complexidade nada mais é do que a representação dessa proporção (ou taxa) de crescimento. Dado que o algoritmo é linearmente proporcional ao tempo de execução, dizemos que este é um algoritmo linear.

A função matemática que representa uma relação linear é f(n) = n e a notação de Ordem de Complexidade para representar a taxa de crescimento do tempo de execução de um algoritmo é dada por O(n), onde o n representa a quantidade de operações que o algoritmo vai realizar.

⚠️ Aviso: A partir de agora, sempre que falarmos sobre a Ordem de Complexidade não iremos nos referir ao tempo em segundos que um algoritmo leva para ser executado, mas sim a quantidade de operações que ele realiza. 🙂

A Ordem de Complexidade pode ser chamada, também, de Complexidade Assintótica.

# Complexidade de tempo e de espaço

Anteriormente, dissemos que a complexidade de um algoritmo representa o crescimento de seu tempo de execução em função de uma taxa, a quantidade de operações que ele realiza. Porém, quando falamos em complexidade, não analisamos apenas o tempo, analisamos também o espaço gasto. Vejamos como isso funciona.

Observe o algoritmo a seguir:

````
def squared_array(numbers):
    array_of_squares = []
    for number in numbers:
        array_of_squares.append(number * number)

    return array_of_squares
````

Esse algoritmo recebe um array de números, percorre esse array e retorna um novo com os números ao quadrado. Ou seja, ele passa por todos os elementos desse array. Isso significa que se houver 10 números na entrada de dados,por exemplo, serão realizadas 10 operações; se houver 100 serão realizadas 100 operações. O que isso representa em termos de complexidade?

Em relação à Complexidade de Tempo, temos aqui uma taxa de crescimento linear, uma vez que o aumento no tamanho do array faz crescer proporcionalmente o tempo gasto na execução do algoritmo. Sendo assim, podemos afirmar que a Complexidade de Tempo aqui é O(n), chamada geralmente tempo linear (Lembre-se que O faz referência aqui a ordem de complexidade, enquanto (n) representa a fórmula matemática que diz sobre a taxa de crescimento do número de operações).

Bem, como sabemos, esse algoritmo vai sempre nos retornar um array com o mesmo tamanho da entrada de dados, pois ele sempre devolve um novo arraycom todos os números de entrada ao quadrado: se entrar um array de 10 números, sairá um de 10; se entrar um de 100, sairá um de 100 e assim sucessivamente. Desse modo, conforme a entrada cresce, a saída também cresce e, consequentemente, o espaço ocupado por ela, o que implica dizer que sua Complexidade de Espaço é dada por O(n).

Recorde-se do algoritmo mencionado na seção passada, da função sum_array. Naquele caso, a Complexidade de Tempo também era O(n), já que o tempo de execução crescia linearmente.

No caso de sum_array, mesmo que a entrada de dados fosse crescendo, sua saída nunca ocuparia mais espaço, pois o retorno era sempre um número só. Sendo assim, sua Complexidade de Espaço era constante e pode ser representada pela notação O(1).

Para finalizar, um ponto importante que deve ser ressaltado é que quando calculamos a complexidade de espaço não levamos em consideração o espaço ocupado pela entrada, uma vez que o tamanho da entrada não é algo que podemos, com nosso algoritmo, influenciar.

Anota aí 🖊: Se falamos em ordem de complexidade sem especificar se é de tempo ou de memória, assuma que é de tempo!

Que tal fazermos um exercício para fixar esses conceitos? 😄

## Complexidade quadrática

Nós já compreendemos o que é e qual a notação que representa a Complexidade Algorítmica. A partir de agora, vamos ver que, dependendo da forma como um algoritmo é escrito, seu tempo de execução vai ser alterado de acordo com diferentes taxas de crescimento.

Nesta e nas próximas seções veremos como o “tempo de execução dos algoritmos cresce a taxas diferentes” (BHARGAVA, ADITYA Y.).

Observe o algoritmo abaixo:

````
# Os arrays têm sempre o mesmo tamanho
def multiply_arrays(array1, array2):
    result = []
    for number1 in array1:
        for number2 in array2:
            result.append(number1 + number2)

    return result
````

No algoritmo acima, são recebidos dois arrays de tamanhos iguais e é retornado um novo array, cujos elementos são resultado da soma de cada um dos elementos do array1 com todos os elementos do array2.

Qual seria a taxa de crescimento do tempo de execução desse algoritmo?🤔

Para cada número do array1 ser somado com todos os números contidos no array2, é necessário que o segundo seja percorrido por inteiro.

Isso significa que para array1 e array2 com duas posições, serão necessárias 4 iterações (ou operações), para o algoritmo concluir sua execução. Se cada uma das entradas tiver 3 elementos, serão necessárias 9 operações para a conclusão da execução e assim sucessivamente.

Rode o exemplo abaixo para conferir:

````
def multiply_arrays(array1, array2):
    result = []
    number_of_iterations = 0

    for number1 in array1:
        print(f'Array 1: {number1}')
        for number2 in array2:
            print(f'Array 2: {number2}')
            result.append(number1 * number2)
            number_of_iterations += 1

    print(f'{number_of_iterations} iterações!')
    return result


meu_array = [1, 2, 3, 4, 5]

multiply_arrays(meu_array, meu_array)
````
Para o exemplo acima, no qual as duas entradas continham 5 elementos, foram necessárias 25 operações para obtermos o resultado final!

Anota aí 🖊: conforme aumentamos o tamanho dos arrays de entrada, o número de operações para a execução do algoritmo cresce ao quadrado. Isso significa que, para entradas de tamanho n, a quantidade de operações para executar o algoritmo é de n². Sendo assim, a complexidade desse algoritmo é dada por O(n²) e a chamamos de Complexidade Quadrática.

Com esses exemplos, percebemos que algoritmos diferentes crescem a taxas diferentes. Vamos, agora, fazer alguns exercícios para fixar melhor esses conceitos!

## Comparando complexidades

Relembrando🧠:

A Ordem de Complexidade diz respeito à taxa de crescimento do tempo de execução (ou espaço de memória ocupado) de um algoritmo, na medida em que aumentamos o tamanho da sua entrada;

Uma complexidade é O(1) (constante), quando o tempo de execução do algoritmo independe do tamanho da entrada;

Uma complexidade é O(n) (linear) quando a taxa de crescimento em seu tempo de execução é linear: se aumentamos a entrada em 2 vezes, aumentamos o tempo de execução em 2 vezes;

Uma complexidade é O(n²) (quadrática) quando a taxa de crescimento do tempo de execução do algoritmo é quadrática: se aumentamos a entrada em 2 vezes, aumentamos o tempo de execução em 4 (ou 2²) vezes;

Uma complexidade é O(n³) (cúbica) quando a taxa de crescimento do tempo de execução do algoritmo é cúbica: se aumentamos a entrada em 2 vezes, aumentamos o tempo de execução em 8 (2³) vezes.

Falamos aqui de algoritmos O(n), O(n²) e até de O(n³). Mas, para ilustrar melhor a matemática dos algoritmos, vamos mostrar o que eles significam de outra forma.

Observe, o gráfico abaixo e veja como o tempo de execução de um algoritmo cúbico cresce muito mais para uma entrada, muito menor que a do algoritmo linear:

Para exemplificar, vamos pensar do seguinte modo: para um algoritmo linear, com n = 1000, teremos mil operações a serem realizadas. Quando o algoritmo é O(n²), um n = 1000 gera um milhão de operações (ou n² de operações). Essa mesma quantidade (um milhão) para O(n³), se atinge com n = 100.

Está entendendo como alguns algoritmos podem ficar rapidamente inviáveis de se executar? Por isso, compreender a taxa de crescimento de um algoritmo é tão importante!

A seguir, vamos explorar outros tipos de complexidades de algoritmos!

De olho na dica👀: Caso você se confunda com a quantidade de números, rode exemplos na sua máquina contando o número de iterações! É uma excelente forma de visualizar a complexidade acontecendo. E não deixe de falar com a gente no Slack se algum exemplo estiver te confundindo!

## Complexidade Logarítmica

Agora, vamos entender o que é a Complexidade Logarítmica. Mas, antes disso, é preciso deixar nítido que, apesar do termo potencialmente assustador, a Complexidade Logarítmica não exige cálculos matemáticos complicados para ser entendida. 🙂

Representado pela notação O(log n), um algoritmo logarítmico tem uma alteração na taxa de execução que, geralmente, reduz pela metade o tempo de finalização das iterações ao reduzir pela metade o tamanho do input a cada iteração.

Vamos refletir sobre isso:

Suponha que temos um algoritmo cuja entrada n é igual a 4, se tivermos um algoritmo O(log n) a ser executado com essa entrada, teremos que fazer apenas 2 operações para executá-lo, pois log₂n (lê-se: “log de n na base 2”) é igual a 2. Se a nossa entrada fosse o dobro, ou seja, 8 teríamos que realizar apenas 3 operações para chegar ao fim da execução. Ao dobrar o valor da entrada novamente, com n igual a 16, teríamos que realizar apenas 4 operações (log₂n é igual a 4) e assim sucessivamente.

Anota aí 🖊: O número de operações para executar o algoritmo logarítmico tem uma relação inversa ao tamanho da entrada: quanto maior ela é, menor o número de operações e, consequentemente, menor o tempo para a execução do algoritmo!

Você pode estar se perguntando: “Mas como é possível criar um algoritmo com essa Ordem de Complexidade?”🤔

No exemplo a seguir, temos um algoritmo de busca binária que entenderemos em detalhes mais adiante. Por ora, basta compreender que esse algoritmo representa uma complexidade O(log n).

Suponha que vamos criar um algoritmo de lista telefônica. Temos uma lista de nomes de tamanho n, ordenada em ordem alfabética, e um nome x; devemos encontrar o número de telefone da pessoa passada na entrada.

Suponha que vamos procurar pelo nome Tintim.Como faremos isso?

- Buscar na página (ou posição) da lista que tenha nomes começando com a letra T;
- Escolher uma página aleatória da lista para abrir;
- Percebemos que caímos na posição da letra M;
- Percebemos que caímos na posição da letra M;
- Como M < T, na ordem alfabética, então, devemos avançar algumas posições para encontrar o T;
- Então, escolhemos uma página que está mais adiante;
- Percebemos que caímos na posição da letra V;
- Como V > T, na ordem alfabética, então devemos voltar alguns posições;
- Vamos repetimos esse processo até encontrarmos o nome desejado.

Haveria outra forma de fazer essa pesquisa na lista telefônica? Sim! Nós poderíamos passar por cada página, da letra A até a letra T para encontrar Tintim. Porém, o número de operações necessárias para realizar isso seria muito maior do que aquele que usamos no exemplo acima!

Perceba o seguinte: o nosso alfabeto tem 26 letras e a letra T está na posição 20 dele. Se seguíssemos o algoritmo de busca sequencial, passando sequencialmente pelas letras de A à T, teríamos que realizar 20 operações para encontrar o que estávamos procurando. Mas, se usássemos o algoritmo de busca binária, que criamos acima, poderíamos resolver facilmente o problema de encontrar a letra T utilizando menos da metade das operações que uma busca sequencial demanda. Ou seja, poderíamos facilmente encontrar a letra T na lista telefônica com 10 ou menos passos, obtendo, assim, um algoritmo de complexidade O(log n) para resolver o problema.

Para entender melhor a diferença entre um algoritmo de busca binária, logarítmico, com um de busca sequencial, que é linear, observe o gif abaixo.

Agora que já passamos pelo conceito de Complexidade Logarítmica, vejamos o algoritmo de busca binária abaixo.

De olho na dica👀: é altamente recomendado que você rode na sua máquina para entender melhor como funciona):

````
# A estrutura deve estar ordenada para que a busca binária funcione
def binary_search(numbers, target):
    # definir os índices
    start = 0
    end = len(numbers) - 1

    while start <= end: # os índices podem ser no máximo iguais, o início não pode ultrapassar o fim
        mid = (start + end) // 2 # encontro o meio

        if numbers[mid] == target: # se o elemento do meio for o alvo, devolve a posição do meio
            return mid
        
        if target < numbers[mid]: # se o elemento for menor, atualiza o índice do fim
            end = mid - 1
        else: # caso contrário, atualiza o índice do inicio
            start = mid + 1
    
    return -1 # Não encontrou? Retorna -1

numbers = [2, 3, 4, 10, 40]
target = 40

result = binary_search(numbers, target)
print(f"Elemento encontrado na posição: {result}")
````
Observe como, a cada iteração, o algoritmo de busca binária corta o problema pela metade:

primeiro ele “corta” a lista em dois e pega o elemento do meio.
Depois ele “caminha” para o lado no elemento que procura esta e “corta” este lado novamente pela metade.
Anota aí 🖊: Quando cortamos a entrada pela metade, a cada iteração, temos um padrão que segue a função matemática de logaritmo na base dois! Assim, nosso algoritmo é O(log n).

Um logaritmo em base 2 representa o número de vezes que um valor deve ser dividido pela metade para obter 1.

Dessa forma, sem precisarmos nos aprofundar na matemática, conseguimos calcular a ordem de complexidade de um algoritmo deste tipo: Quando a entrada é cortada pela metade a cada iteração temos um comportamento logarítmico!

Veja abaixo um gráfico que compara o tempo de execução de um algoritmo linear e um logarítmico.

## Complexidade Exponencial e Fatorial

Essas complexidades caracterizam algoritmos que, para aumentos pequenos no tamanho da entrada, aumentam enormemente o número de operações a serem realizadas para serem executados e, consequentemente, seu tempo de execução. A relação do tempo de execução/espaço ocupado em cada caso é a seguinte:

- Exponencial: 2ⁿ (O(2ⁿ));

- Fatorial: n! (O(n!)).

No caso de um algoritmo com Ordem de Complexidade Exponencial, para uma entrada de dados n que possui vinte elementos, o algoritmo realizará aproximadamente um milhão (ou 2²⁰) de operações. Para o caso fatorial, os mesmos vinte elementos rendem 24 quatrilhões de operações! (O número exato é: 2432902008176640000 operações 😨).

No caso de um algoritmo com Ordem de Complexidade Exponencial, para uma entrada de dados n que possui vinte elementos, o algoritmo realizará aproximadamente um milhão (ou 2²⁰) de operações. Para o caso fatorial, os mesmos vinte elementos rendem 24 quatrilhões de operações! (O número exato é: 2432902008176640000 operações 😨).

Você pode estar se perguntando: “Mas por que alguém iria escrever um algoritmo de ordem de complexidade fatorial?!”🤔

Resposta: porque não há outro algoritmo conhecido que resolve o problema. Pode parecer estranho, mas há problemas para os quais ainda não possuímos uma solução otimizada.

Um exemplo clássico é o problema do Caixeiro-Viajante! Veja logo abaixo:

“Dada uma lista de cidades e a distância entre cada par de cidades, qual é a rota mais curta possível que visita todas as cidades exatamente uma vez e volta para a cidade de origem?”

A única solução exata conhecida para este problema é a força bruta: testamos todas as possibilidades e escolher a menor rota.

Agora, imagine que o caixeiro-viajante tenha que passar por três cidades: Belo Horizonte, São Paulo e Florianópolis. Ele tem as seguintes rotas possíveis:

O número de rotas para 3 cidades é 3! == 3 * 2 * 1 = 6. Atualmente, o Brasil tem 5570 municípios. Se nosso caixeiro-viajante tivesse que passar por todos os municípios, isso daria a ele 5570 * 5569 * 5568 * ... * rotas.

Quantos milhares de anos um computador precisaria para rodar esse algoritmo nesse caso?!😱

Algoritmos que não têm solução conhecida em tempo polinomial, ou seja, cuja Ordem de Complexidade é fatorial ou exponencial e são possivelmente resolvidos somente com força bruta, pertencem a uma categoria de problemas na computação chamada problemas NP Completos.

De olho na dica👀: Se quiser conhecer mais sobre essa categoria de problemas, explore nossos recursos adicionais!

## Analisando algoritmos com várias estruturas de repetição

Agora que já sabemos analisar a Ordem de Complexidade, vamos para alguns algoritmos.

Observe o algoritmo o abaixo:

````
def calculations(n):
    number1 = 0
    for n1 in range(n):
        number1 += n1

    number2 = 0
    for n1 in range(n):
       for n2 in range(n):
            number2 += n1 + n2

    number3 = 0
    for n1 in range(n):
       for n2 in range(n):
           for n3 in range(n):
               number3 += n1 + n2 + n3

    return number1, number2, number3

n1, n2, n3 = calculations(100)
print(f'{n1}, {n2}, {n3}')
````

Esse algoritmo tem três estruturas de repetição evidentes: uma linear, uma quadrática e uma cúbica.

Qual é a Ordem de Complexidade dele? 🤔

Resposta: A rigor, ela seria O(n + n² + n³).

De olho na dica👀: Se os loops estão aninhados você os multiplica, e se estão paralelos você os soma.

Podemos pensar em alguns outros exemplos:

Um algoritmo de busca binária que roda três vezes teria O(3 * log n) de complexidade;

Um algoritmo que roda uma busca binária num array de tamanho n para cada elemento de um array de tamanho m teria O(m * log n) de complexidade.

No entanto, geralmente simplificam-se essas notações. Estamos vendo, ao longo dos nossos estudos, que ordens de complexidade diferentes, para entradas grandes, têm valores absurdamente diferentes.

Imagine escrever O(n! + log(n)). Ora, para uma entrada de tamanho 8 esse número seria O(40320 + 3). Observe como o componente fatorial da equação, n! = 40320, domina completamente a ordem de complexidade. Nesse cenário, dizemos que a complexidade menor é desprezível e, então, a omitimos.

Anota aí 🖊: Para valores grandes, dizer a maior ordem de complexidade do conjunto já basta para uma boa análise. Sendo assim, ao analisar várias estruturas de repetição em paralelo, responda somente com o valor da estrutura que tiver maior ordem de complexidade na hora de fazer a sua análise.

## Melhor caso, pior caso e caso médio

Há um último conceito importante para aprendermos aqui, antes de passarmos para a aula ao vivo e os exercícios!

Você verá mais para frente durante seu aprendizado aqui na Trybe, os termos “melhor caso”, “pior caso” e “caso médio”.

Eles significam o seguinte: “A depender da minha entrada, o meu algoritmo pode executar em O(1) ou O(n)“. Por exemplo, pense na busca sequencial:

````
def linear_search(numbers, target):
    n = len(numbers) # N será a quantidade de elementos da lista
    for index in range(0, n): # vamos iterar a lista completa
        if numbers[index] == target: # se encontrar o elemento alvo, retorne a posição
            return index

    return -1 # Não encontrou? Retorne -1


print(linear_search([1, 2, 3], 2))  # saída: 1
print(linear_search([1, 2, 3], 4))  # saída: -1
````

Dizemos que, para entradas muito grandes, esse algoritmo é O(n).

O que acontece, porém, caso tenhamos sorte e o número que procuramos seja o primeiro do array?🤔

Resposta: Nesse caso, mesmo para uma entrada infinita, nossa complexidade será O(1). Esse é o melhor caso desse algoritmo. De forma análoga, o pior caso é o número ser o último elemento do array, ou seja O(n).

Você pode estar se perguntando: “E o caso médio”? 🤔

Resposta: Seria algo como O(n * 1/2), por exemplo. Nesse caso, o número que procuramos está no meio da lista. Mas, para entradas muito grandes, aprendemos a desprezar os números menos relevantes da soma, então, podemos simplificar e dizer que o caso médio é O(n) também.

Diferentes algoritmos têm diferentes cenários de melhor caso, pior caso e caso médio. Veremos vários exemplos disso ao longo das próximas seções.