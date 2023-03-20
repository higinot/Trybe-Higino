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
