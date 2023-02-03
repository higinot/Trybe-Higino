### Você será capaz de:
* Modelar um projeto em Python, pensando em Programação Orientada a Objetos.
* Implementar utilizando a linguagem Python: Classes, Construtores,Instâncias, Atributos e Métodos.
* Aplicar o polimorfismo com Interfaces em Python.

### Classes e Objetos

Classe é uma definição ou modelo para criar objetos. Ela define os atributos (características) e comportamentos (ações) que os objetos desta classe terão. Por exemplo, uma classe "Pessoa" pode ter atributos como nome, idade e endereço, e comportamentos como andar, falar e comer.

Já objeto é uma instância da classe, ou seja, um exemplo concreto de uma classe. Por exemplo, "João" pode ser um objeto da classe "Pessoa", com nome "João", idade 30 e endereço "Rua X, número Y". Cada objeto pode ter valores diferentes para os atributos, mas comportam-se de acordo com a definição da classe.

### Classe
Classe é o primeiro dos conceitos. Ele é utilizado para determinar algo genérico. Na programação orientada a objetos, toda classe tem como finalidade modelar com precisão a representação de uma entidade do mundo real. Um exemplo de uma classe é o conceito Liquidificador. Existem vários liquidificadores no mundo, de várias marcas e modelos, com várias funcionalidades diferentes, mas todos possuem algumas coisas em comum.

### Objetos
Eu tenho um liquidificador em casa. Provavelmente você tem um também, mas mesmo que não. Ambos são liquidificadores, mas o meu é diferente do seu. Na verdade, mesmo que seja igual (mesma marca, mesmo modelo, mesma cor, etc), não são o mesmo liquidificador. Inclusive podemos colocar um do lado do outro e ver que são dois liquidificadores distintos. Isto quer dizer que são objetos diferentes de uma mesma classe. Objeto (ou instância da classe) é algo específico.

### Atributos / Propriedades
Atributos são propriedades das coisas. No contexto de uma classe ou objeto, atributos são variáveis. Uma classe define atributos, e um objeto os valora. Na verdade existe uma exceção: atributos de classe, mas não falaremos deles agora.

### Métodos / Comportamentos
A classe, além de definir os atributos do objeto, também define seus métodos (ou comportamentos). Métodos são ações que um objeto ou classe podem realizar. No contexto de uma classe ou objeto, métodos são funções. Uma classe costuma definir os métodos e os objetos os chamam (mas em alguns casos os métodos podem ser chamados a partir da classe).

De olho na dica 👀: Os métodos podem manipular os atributos.

----
#### Método construtur/Inicializador

Após modelada nossa Classe do objeto, podemos partir para o construtor. O construtor é um método especial que roda automaticamente quando a gente cria (instancia) o objeto. Na maioria das linguagens, o construtor cria e devolve a instância do objeto e já inicializa os seus atributos.

Em python, esta operação é dividida em dois métodos:

* ``__new__`` (Construtor)
* ``__init__`` (Inicializador)

Anota aí ✏️: O Python já implementa estes métodos por padrão para cada nova classe criada, mas você pode implementá-los novamente, ou seja, sobrescrevê-los. É desse modo que customizamos nosso construtor/inicializador.

⚠️ Importante: Apesar do método __init__ ser “apenas” o inicializador, é comum ver referências a ele como o construtor. Isso acontece pois são raras as vezes que precisamos alterar o __new__ para customizar nossas classes. Como a comunidade já adotou que “o __init__ é o construtor de objetos no Python“, também vamos seguir essa convenção por aqui 😉

```
class Liquidificador:
    def __init__(self, cor, potencia, tensao, preco):
        self.preco = preco
        self.cor = cor
        self._potencia = potencia
        self._tensao = tensao
        self.__ligado = False
        self.__velocidade = 0
        self.__velocidade_maxima = 3
        self.__corrente_atual_no_motor = 0
```

O primeiro parâmetro, o ``self``, representa a instância do objeto, ou seja, tem acesso ao objeto na memória.

De olho na dica 👀: Em muitas linguagens também é chamado de this, e como em Python é um parâmetro explícito, você pode chamá-lo como quiser, mas self é uma convenção adotada pela comunidade.

Com o método ``__init__`` inicializamos os atributos do objeto apenas atribuindo um valor a cada nova chave. Exemplo: self.__ligado = False.

Os próximos parâmetros são os que permitem criar de forma customizada nosso objeto, como a ``cor: self.cor = cor``.

## Encapsulamento e Abstração

Agora que já sabemos criar nossos objetos, é essencial sabermos como simplificar seu uso e esconder os detalhes de implementação.

### Encapsulamento
O encapsulamento é um dos pilares da orientação a objetos. Por meio dele, é possível simplificar bastante a implementação da abstração. Assim, segmentamos nossos atributos e métodos em 3 categorias:

1. Públicos: podem ser acessados livremente por qualquer parte da aplicação
2. Protegidos: podem ser acessados apenas pela classe que os definem e, quando há herança envolvida, também pelas classes “abaixo” na hierarquia (veremos o tópico herança a seguir)
3. Privados: podem ser acessados apenas pela classe que os definem

Em Python não temos palavras reservadas como public, private e protected para declarar um atributo ou método como público, privado ou protegido, respectivamente. Para isso, existe uma convenção de nomenclatura para definir a acessibilidade de cada recurso:

* Nomes iniciados com ``_`` (underline): são considerados “protegidos“, como os atributos ``_potencia`` e ``_tensao``.
    * ⚠️ Isso é apenas uma convenção entre pessoas desenvolvedoras Python, pois ainda será possível fazer um acesso direto por fora da classe;
* Nomes iniciados com ``__`` (dunder/duplo underline): são considerados “privados“, como os atributos ``__ligado`` e ``__velocidade``.
    * ⚠️ Não será possível fazer o acesso diretamente por fora da classe, mas existem formas de burlar isso (caso queira saber mais pesquise name mangling);
* Quaisquer outros nomes válidos: são públicos.

``
class Liquidificador:
    def __init__(self, cor, potencia, tensao, preco):
        self.preco = preco
        self.cor = cor
        self._potencia = potencia
        self._tensao = tensao
        self.__ligado = False
        self.__velocidade = 0
        self.__velocidade_maxima = 3
        self.__corrente_atual_no_motor = 0

    def ligar(self, velocidade):
        if velocidade > self.__velocidade_maxima or velocidade < 0:
            raise ValueError(
                f"Velocidade deve estar entre 0 e {self.__velocidade_maxima}"
            )

        self.__velocidade = velocidade
        self.__corrente_atual_no_motor = (
            (self._potencia / self._tensao) / self.__velocidade_maxima
        ) * velocidade
        self.__ligado = True

    def desligar(self):
        self.__ligado = False
        self.__velocidade = 0

    def esta_ligado(self):
        return self.__ligado
``

### Abstração

A abstração de dados é outro pilar da orientação a objetos, e oculta os detalhes da implementação mostrando apenas a funcionalidade para quem acessa os métodos, a fim de reduzir a complexidade do código.

Perceba que, ao chamarmos o método ligar, não existe a necessidade de conhecer o cálculo interno. Aqui estamos aplicando a abstração, pois apenas o código da classe Liquidificador precisa se preocupar com a regra de negócio. Quando utilizarmos a classe em outra parte da aplicação, precisaremos apenas saber quais são os parâmetros necessários de cada método.

```
liquidificador_vermelho = Liquidificador("Vermelho", 250, 220, 100)
liquidificador_vermelho.ligar(1)
print("Está ligado?", liquidificador_vermelho.esta_ligado())
# Está ligado? True
liquidificador_vermelho.desligar()
print("Está ligado?", liquidificador_vermelho.esta_ligado())
# Está ligado? False
```

### Getters e Setters

Mostramos no exemplo anterior como criar um método que permite ligar o liquidificador. Para isso, ele acessa e altera alguns atributos privados. Existe uma outra forma de manipular atributos privados de maneira indireta, utilizando métodos denominados getters e setters.

Um método ``setter`` implementa a lógica de como alterar um valor. Um método ``getter`` implementa a lógica de como recuperar um valor.

````
class Liquidificador:
    def get_cor(self):
        return self.__cor.upper()

    def set_cor(self, nova_cor):
        if nova_cor.lower() == "turquesa":
            raise ValueError("Não existe liquidificador turquesa")

        self.__cor = nova_cor

    def __init__(self, cor, potencia, tensao, preco):
        # Observe que usamos o setter para já validarmos o primeiro valor
        self.set_cor(cor)

        # Demais variáveis omitidas para este exemplo


liquidificador = Liquidificador("Azul", "110", "127", "200")

# print(f"A cor atual é {liquidificador.__cor}")
# AttributeError: 'Liquidificador' object has no attribute '__cor'

print(f"A cor atual é {liquidificador.get_cor()}")
# A cor atual é AZUL
liquidificador.set_cor("Preto")
print(f"Após pintarmos, a nova cor é {liquidificador.get_cor()}")
# Após pintarmos, a nova cor é PRETO
````
Como podemos ver, o acesso ao atributo privado liquidificador.__cor gera um erro, mas chamar o método get_cor() funciona perfeitamente. O comportamento é similar para o acesso: liquidificador.__cor = "alguma cor" gera um erro, mas liquidificador.set_cor("alguma cor") não (desde que a cor não seja turquesa).

### Especificidades do Python

Métodos com prefixos get_ e set_ costumam, em Python, ser substituídos por uma forma de acesso mais transparente, para que possam ser utilizados como se fossem atributos públicos. Para isso são utilizados os decoradores (decorators) @property e @propriedade.setter, como no exemplo abaixo:

````
class Liquidificador:
    # Getter
    @property
    def cor(self):
        return self.__cor.upper()

    @cor.setter # Repare que é @cor.setter, e não @property.setter
    def cor(self, nova_cor):
        if nova_cor.lower() == "turquesa":
            raise ValueError("Não existe liquidificador turquesa")

        self.__cor = nova_cor

    def __init__(self, cor, potencia, tensao, preco):
        # Observe que usamos o setter para já validarmos o primeiro valor:
        # usamos self.cor, que chama o setter, e não self.__cor que manipula
        # o atributo diretamente
        self.cor = cor

        # Demais variáveis omitidas para este exemplo


liquidificador = Liquidificador("Rosa", "110", "127", "200")

print(liquidificador.cor) # ROSA
liquidificador.cor = "Vermelho"
print(liquidificador.cor) # VERMELHO
````

Com isso podemos acessar o método cor e decorá-lo com o @property para facilitar o acesso de fora liquidificador.cor.

É possível criar um outro método também com o nome cor e decorar com ``@cor.setter``. Ele deve receber, além de self, um segundo parâmetro que é o novo valor de cor. A partir disso a atribuição ``liquidificador.cor = "Vermelho"`` passa a funcionar.

### Motivos para deixar um atributo privado ser alterado por meio de setters
Em algumas ocasiões é necessário realizar a validação do novo valor Neste exemplo nós impedimos a criação de um liquidificador cuja cor seja turquesa.

As vezes é necessário até mesmo alterar ou consultar outros atributos privados enquanto realizamos a modificação.

### Motivos para deixar um atributo privado ser obtido por meio de getters
Em algumas ocasiões é necessário padronizar a saída independentemente do valor interno. Neste exemplo nós só retornamos a cor em letras maiúsculas.

Geralmente o getter só retorna o valor da propriedade, portanto ele existe apenas para que um setter também possa existir. É importante ressaltar que, apesar de ser comum existir um getter somente para um setter poder existir, um pode tranquilamente existir sem o outro, ou seja, pode existir um atributo somente leitura (atributo privado + getter), bem como um atributo somente escrita (atributo privado + setter), a depender da necessidade da abstração.

## Composição

Agora que temos nosso liquidificador funcionando, vamos associá-lo a uma pessoa cozinheira, dizendo assim que esta pessoa pode possuir um liquidificador.

⚠️ Aviso: Se atente ao fato de que uma pessoa não é da mesma classe que um liquidificador, ela possui um liquidificador. Neste caso, precisamos utilizar o conceito de Composição.

Anota aí ✏️: Composição é atribuir o objeto de uma classe a um atributo da outra, gerando assim um relacionamento de pertencimento entre elas. Você pode ver mais aqui.

````
class Pessoa:
    def __init__(self, nome, saldo_na_conta):
        self.nome = nome
        self.saldo_na_conta = saldo_na_conta
        self.liquidificador = None

    def comprar_liquidificador(self, liquidificador):
        if liquidificador.preco <= self.saldo_na_conta:
            self.saldo_na_conta -= liquidificador.preco
            self.liquidificador = liquidificador
````
Agora, a classe Pessoa tem o método específico para comprar seu liquidificador:

````
pessoa_cozinheira = Pessoa("Jacquin", 1000)
pessoa_cozinheira.comprar_liquidificador(liquidificador_vermelho)
````
Conforme observado no vídeo, ao imprimir a instância de um objeto, o Python exibe a posição de memória do objeto.

````
print(pessoa_cozinheira)
# retorno: Pessoa object at 0x7f53bbe1b580>
````
Uma forma de melhorar esta apresentação, é implementar o método __str__ para a classe que deseja imprimir. Assim o Python substituirá o print padrão pelo retorno que você desejar. Veja esse exemplo:

````
class Pessoa:
# ....
    def __str__(self):
        return f"{self.nome} - possui {self.saldo_na_conta} reais em sua conta."

print(pessoa_cozinheira)
# retorno: Jacquin - possui 800 reais em sua conta.
````

## Herança

Pensando em eletrônicos, alguns deles possuem características em comum, não é mesmo? Exemplos: tensão, potência, ligado ou desligado e cor. Com isso, podemos perceber que para o ``construtor`` de ventilador, televisão e liquidificador, sempre teremos atributos idênticos.

Você pode estar refletindo: “Repetir tanto código não é eficiente, correto?”

Sim! E a boa notícia é que podemos evitar essa repetição com o conceito de herança, criando assim uma classe Eletrodomestico. Neste sentido, as classes ventilador, batedeira, máquina de lavar e secador serão suas filhas, ou seja, herdarão dela.

Anota aí ✏️: Herança é especializar o comportamento de uma classe, ou seja, a classe herdeira é tudo que a classe ascendente é e talvez um pouco mais!

````
class Eletrodomestico:
    def __init__(self, cor, potencia, tensao, preco):
        self.preco = preco
        self.cor = cor
        self._potencia = potencia
        self._tensao = tensao
        self.__ligado = False
        self.__velocidade = 0
        self.__velocidade_maxima = 3
        self.__corrente_atual_no_motor = 0

    def ligar(self, velocidade):
        if velocidade > self.__velocidade_maxima or velocidade < 0:
            raise ValueError(
                f"Velocidade deve estar entre 0 e {self.__velocidade_maxima}"
            )

        self.__velocidade = velocidade
        self.__corrente_atual_no_motor = (
            (self._potencia / self._tensao) / self.__velocidade_maxima
        ) * velocidade
        self.__ligado = True

    def desligar(self):
        self.__ligado = False
        self.__velocidade = 0

    def esta_ligado(self):
        return self.__ligado

    @property
    def cor(self):
        return self.__cor.upper()

    @cor.setter
    def cor(self, nova_cor):
        self.__cor = nova_cor
````

Em Python, para declarar que um objeto herda as características de outro, basta na declaração da classe “passarmos como parâmetro” a classe que será herdada. Várias classes podem ser passadas para realizar a herança múltipla, mas isso foge do escopo desta aula. Caso queira, veja mais sobre herança múltipla aqui.

Vamos ver um exemplo de como podemos fazer um Liquidificador herdar de Eletrodomestico:

````
class Liquidificador(Eletrodomestico):
    pass
````

Só por herdar de Eletrodomestico, Liquidificador já possui acesso a todos os métodos e atributos (públicos e protegidos) definidos em Eletrodomestico. Simples assim. Podemos criar novos métodos e atributos que não existem na superclasse a vontade. Novos métodos só precisam ter sua definição, mas novos atributos (declarados no __init__) exigirão o uso de polimorfismo.

## Super
Um método pode chamar um outro método já declarado na superclasse da seguinte maneira:

````
class A:
    def faz_algo(self, valor):
        print(valor)


class B(A):
    def faz_outra_coisa(self):
        print("Vou printar o valor pelo método criado em A")
        # Chama o método da classe A, que neste caso é a superclasse, passando
        # o `self` explicitamente
        A.faz_algo(self, valor=1)


b = B()
b.faz_outra_coisa()
# Vou printar o valor pelo método criado em A
# 1
````

Observação sobre a linha 11: dada uma classe X qualquer que possua um método y que recebe self, ou seja, uma classe normal com um método normal, e um objeto z que é uma instância dessa classe, as duas chamadas são equivalentes: z.y() e X.y(z). Normalmente utilizamos a primeira, que é um “açúcar sintático” para a segunda, para evitar a complexidade de chamar o nome da classe, bem como passar o objeto em questão como parâmetro.

Mas observe que a chamada comentada cria um acoplamento, ou seja, temos que chamar explicitamente A dentro de um método de B. Uma forma de melhorar isso é acessando a superclasse de B (que neste caso é de fato A) sem chamá-la explicitamente, delegando a um método que vai buscar qual que é a superclasse.

 Esse método é o ``super()``. O exemplo anterior pode ter a linha ``A.faz_algo(self, valor=1)`` alterada para ``super().faz_algo(valor=1)``. Importante observar a remoção do self na passagem de parâmetros para a ``faz_algo``. Mudar de acesso direto para super não somente não traz nenhum prejuízo como ainda traz uma melhoria: Se eu mudar a classe da qual B herda de A para qualquer outra que possua o método faz_algo, tudo continua a funcionar.

## MRO
Ao utilizar herança em Python, o método super busca os métodos em uma ordem específica das superclasses. Você pode ler mais sobre o MRO aqui se quiser, mas é um conteúdo mais avançado e provavelmente você não vai precisar para construções não tão complexas.

## Herdar mais de uma vez
Apenas a título de curiosidade, é interessante saber que existe herança multi-nível e herança múltipla em Python. São conteúdos que é bom você ao menos ver e saber que existem, mas não se preocupe em se aprofundar neles pois o uso não é tão corriqueiro. Dê uma olhadinha:

### Herança multi-nível
Uma classe pode herdar de outra que herda de outra, ou seja, A herda de B, B herda de C. Não há diferenças significativas no funcionamento, mas é interessante saber que é possível e relativamente normal. Por mais que você não escreva algo assim, é possível que veja bastante em códigos de outras pessoas.

Exemplo:
````
class C: # C 
    def x(self): # método de exemplo
        print(1)

class B(C): # B herda de C
    pass

class A(B): # A herda de B
    pass


a = A()
a.x()
# 1
````

Ao acessar ``a.x()`` o método ``x`` é buscado no objeto a, depois na classe A, depois na classe B, depois na classe C, subindo por toda a hierarquia de classes até ser encontrado ou levantar um ``AttributeError``.

## Herança múltipla
Em Python existe também a chamada herança múltipla, não tão comum a outras linguagens, que é a capacidade que uma classe tem de herdar de mais de uma classe ao mesmo tempo. Ou seja, uma classe A pode herdar de B e C simultaneamente, sem que haja herança multi-nível.

````
class A(B, C): 
    pass
````

⚠️ Importante: o uso de herança múltipla é bastante desencorajado, pois gera complexidade extra na hierarquia de classes. Isso exige maior controle da pessoa desenvolvedora sobre o funcionamento implícito da linguagem, podendo levar a comportamentos inesperados na aplicação.

## Polimorfismo

Polimorfismo é um outro pilar da orientação a objetos, e ocorre quando métodos diferentes são chamados por um mesmo nome. Existem vários tipos de polimorfismo, mas dois são mais comuns: sobrecarga de métodos (method overloading) e sobrescrita de métodos (method overriding). Vamos ver cada um deles.

### Sobrecarga de métodos
A sobrecarga de métodos é algo que nativamente não existe em Python, mas é comum em outras linguagens, portanto é interessante entender. Ela acontece quando mais de um método pode ser definido com o mesmo nome, mas aceitando parâmetros em quantidades ou tipos diferentes. Por exemplo, na linguagem C++ podemos ter duas funções com o mesmo nome, func, onde uma recebe um número inteiro e outra recebe um caractere.

````
// Código em C++
#include "stdio.h"

int func(int a) { return a + 1; }
int func(char b) { return 4; }

int main() { printf("%d %d", func(1), func('a')); }
// saída: 2 4
````
Se chamarmos func() passando um valor inteiro, a primeira função será chamada, e o retorno será o valor passado + 1. Já se chamarmos um valor do tipo caractere (char), o retorno será o valor 4. Este não é um exemplo útil, mas coisas bem complexas podem ser feitas por meio da sobrecarga em linguagens que as permitem.

Uma boa explicação do motivo para o Python não possuir um suporte nativo para a sobrecarga é o fato de Python ter tipagem dinâmica, ou seja, os tipos de dado podem mudar durante a execução do programa. Em C++ os tipos das variáveis são definidos antes da execução do código, no tempo de compilação.

### Parâmetros opcionais
Apesar de não existir a sobrecarga, é comum a existência de parâmetros opcionais nas funções e métodos, o que a depender do uso pode levar a um funcionamento similar ao de sobrecarga.

Pensando no exemplo da classe Pessoa, para declarar uma nova pessoa informamos a idade, o nome e saldo_na_conta. Mas será que é necessário? Podemos deixar alguns opcionais? Observe o exemplo a seguir:

````
class Pessoa:
    def __init__(self, nome, idade=None, saldo_na_conta=None):
        self.idade = idade
        self.nome = nome
        self.saldo_na_conta = saldo_na_conta
        self.brinquedos = []

pessoa_1 = Pessoa("Marcelo", 22, 700)
pessoa_2 = Pessoa("Matheus")
pessoa_3 = Pessoa("Maria", 33)
pessoa_4 = Pessoa("Márcia", saldo_na_conta=100)
````

Com isso a depender de como chamamos o método, coisas diferentes irão acontecer. Se passarmos uma idade, ela será valorada como um atributo da pessoa. Se não passarmos, o valor será None. Nesse caso estamos apenas definindo o valor da variável, mas poderíamos ter uma série de ifs que iriam realizar ações diferentes com base nos parâmetros de entrada, o que não é uma sobrecarga (pois só um método é declarado), mas se assemelha a ela no uso prático.

### __Sobrescrita de métodos__
Já a sobrescrita de métodos é mais comum em qualquer linguagem que possua orientação a objetos. A sobrescrita ocorre quando um método definido em uma superclasse é novamente definido (reescrito/sobrescrito) na subclasse.

Vamos continuar de onde paramos na lição anterior, onde criamos a classe Liquidificador que herda da classe Eletrodoméstico. Se quisermos, podemos reescrever alguns métodos de forma a deixá-los mais convenientes para o nosso uso. Para realizar a sobrescrita, basta declarar novamente o método na subclasse. Vamos a um exemplo:

````
class Liquidificador(Eletrodomestico):
    def esta_ligado(self):
        return False
````

Este método não é nada útil visto que sempre retorna False, mas nos ajuda a entender que podemos simplesmente escrever uma nova lógica para um método.

## Super
Talvez você já conheça o ``super``, mas vamos ver como ele pode ser útil no contexto de sobrescrita de métodos. Imagine que você quer somente melhorar o método da superclasse, por exemplo mudando o valor que ele retorna. Não faz sentido, em diversas ocasiões, que você reescreva tudo e modifique só algumas coisas. As vezes você quer reaproveitar o que já foi feito e somente dar uma incrementada. É aí que entra o super.

Lembrando que o super é uma referência à superclasse, ou seja, a classe da qual você está herdando.

Na verdade no caso do Python, que possui herança múltipla, é uma referência à próxima classe da MRO (Ordem de Resolução de Métodos).

Por meio dessa referência, conseguimos você pode acessar métodos da superclasse por meio da subclasse. Para isso utilizamos a notação ``super().método()``.

````
class Liquidificador(Eletrodomestico):
    def esta_ligado(self):
        return "Sim" if super().esta_ligado() else "Não"
````

Neste exemplo em específico nós modificamos o tipo de retorno do método ``esta_ligado``, retornando strings ao invés de um booleano (isso é uma má prática pois fere o princípio de substituição de Liskov, mas vamos ignorar este detalhe para o exemplo continuar simples). Observe que há uma chamada ao mesmo método na superclasse, de forma a não precisar recriar a lógica dele na subclasse. Neste caso aqui é algo simples, pois é só o retorno de um booleano, mas ``Eletrodomestico.esta_ligado`` poderia ser um método complexo e custoso, fazendo com que reaproveitá-lo seja a melhor escolha.

Vamos ver um exemplo de como informar que o ``Ventilador`` e o ``Liquidificador`` herdam da classe ``Eletrodomestico``:

````
class Liquidificador(Eletrodomestico):
    pass

class Ventilador(Eletrodomestico):
    def __init__(self, cor, potencia, tensao, preco, quantidade_de_portas=1):
        # Chamada ao construtor da superclasse
        super().__init__(cor, potencia, tensao, preco)
        
        # Faz outras coisas específicas dessa subclasse
        self.quantidade_de_portas = quantidade_de_portas


class Pessoa:
    def __init__(self, nome, saldo_na_conta):
        self.nome = nome
        self.saldo_na_conta = saldo_na_conta
        self.eletrodomesticos = []

    # Permite a aquisição de qualquer eletrodoméstico
    def comprar_eletrodomestico(self, eletrodomestico):
        if eletrodomestico.preco <= self.saldo_na_conta:
            self.saldo_na_conta -= eletrodomestico.preco
            self.eletrodomestico.append(eletrodomestico)
````

Ao sobrescrever o construtor, devemos chamar o construtor da superclasse também, de forma a garantir que ele seja executado e o que ele faz seja aproveitado. Caso não faça isso, como em qualquer método normal, você terá de re-implementar a lógica do construtor da superclasse manualmente na subclasse.

De olho na dica 👀: Se você quiser sobrescrever métodos decorados com o @property, precisará fazer algumas adaptações na superclasse. Dê uma olhada nesta resposta no stack overflow para mais informações.

## Polimorfismo com interface
O polimorfismo com interfaces se utiliza da sobrescrita de métodos de uma maneira muito interessante para garantir que, mesmo esperando um item do tipo da superclasse, ele tenha métodos devidamente implementados na subclasse. E isso se dá por meio de classes abstratas.

### Classe abstrata
Uma classe abstrata é aquela que não pode possuir instâncias a partir dela, existindo apenas para ser herdada.

Na verdade o Python é uma linguagem tão permissiva que você até consegue criar instâncias da classe abstrata, mas conceitualmente é algo que não deve ser feito.

Geralmente classes mais genéricas são abstratas, e classes mais específicas herdam delas. Por exemplo podemos ter uma classe Database que é abstrata e duas classes normais que herdam dela: MongoDatabase e MySQLDatabase. A classe Database pode vir com alguns métodos prontos para as classes que herdam dela utilizarem, podem ter métodos abstratos ou ambos ou até mesmo nenhum método (sendo uma classe puramente conceitual).

Para criar uma classe abstrata em Python, basta criar uma classe que herda de abc.ABC:

````
from abc import ABC


class Database(ABC):
    pass
````

### Métodos abstratos
Nas classes abstratas podemos ter (mas não temos a obrigação de ter) alguns métodos abstratos, que são métodos que não possuem uma implementação, e servem para obrigar a classe normal que herda da classe abstrata a implementá-los (por meio da sobrescrita de métodos). Por exemplo, na classe Database podemos ter o método abstrato connect. Esse método não possui implementação em Database, mas MongoDatabase e MySQLDatabase, classes normais, são obrigadas a implementá-lo.

Para declarar um método como abstrato, utilizamos o decorador ``@abc.abstractmethod``, e preenchemos o corpo do método com um ``pass``, com Ellipsis (...) ou com um ``raise NotImplementedError``:

````
from abc import ABC, abstractmethod


class Database(ABC):
    @abstractmethod
    def execute(self, query):
        ...


class MongoDatabase(Database):
    def execute(self, query):
        print(f"executando query '{query}' no mongo")


class MySQLDatabase(Database):
    def execute(self, query):
        print(f"executando query '{query}' no mysql")
````

### Mix de classes abstratas
Uma classe abstrata pode herdar de outra classe abstrata, e então pode ou não implementar os métodos abstratos da superclasse. A primeira classe não abstrata na hierarquia deve implementar todos os métodos abstratos que ainda não tiverem sido implementados por uma de suas superclasses.

## Interface
Interfaces são o equivalente a classes abstratas que somente possuem métodos abstratos, ou seja, nenhum método já é implementado. Em algumas linguagens de programação existe uma palavra reservada e uma sintaxe específica para a criação e uso de interfaces. Em Python são apenas classes abstratas comuns que são herdadas por classes normais.

A diferença de uma classe abstrata para uma interface é que uma classe abstrata pode possuir métodos que as subclasses irão herdar e reaproveitar, enquanto que a interface é só um contrato para definir métodos que devem ser implementados.

Retomando o exemplo, o fato de Database ter um método abstrato execute garante que se um objeto é instância de qualquer classe descendente de Database, com toda certeza ele possui um método execute implementado. Por isso que as classes normais devem implementar todos os métodos abstratos.

````
def minha_func(database): # repare que o d é minúsculo
    if isinstance(database, Database):
        database.execute("query qualquer")
    else:
        print(f"{database} não é um Database válido")

db1 = MongoDatabase()
db2 = MySQLDatabase()

minha_func(db1)
minha_func(db2)
minha_func("db_inválido")

# executando query 'query qualquer' no mongo
# executando query 'query qualquer' no mysql
# db_inválido não é um Database válido
````

``A função isinstance retorna se um objeto é instância de uma classe ou de qualquer uma de suas subclasses.``

````
# repare que coloco o tipo do parâmetro, ou seja, `database` é do tipo
# `Database`
def minha_func(database: Database):
    database.execute("query qualquer")
````

Colocar a tipagem deixa a função mais simples, pois não será necessário confirmar em tempo de execução que database é de fato uma instância de Database. Antes mesmo de rodar o programa já receberia um erro no vs code ao chamar minha_func("db_inválido").

## Métodos estáticos e de classe
Por vezes é necessário trabalhar com atributos e métodos que não estão relacionados com a instância, no caso, com o objeto.
Nestes casos existem atributos e métodos de classe, que servem para manipular a classe em si, e métodos estáticos, que não possuem nenhuma relação (a não ser a semântica) com as classes ou instâncias.
Vamos começar pelo mais simples.

## Métodos estáticos
Métodos estáticos são funções normais, só que dentro de uma classe.
Apesar disso, o significado semântico é “uma função que não precisa de dados nem do objeto (instância) nem da classe, mas faz sentido ser chamada a partir de um deles”.
O uso é muito incomum, visto que você pode colocar uma função no mesmo módulo que a classe que você está utilizando, mas a forma de acesso é mais transparente, o que pode ajudar a garantir o pilar de abstração.

O uso é feito por meio do decorador @staticmethod, que não precisa ser importado, visto que já está no escopo global.

````
class Classe:
    @staticmethod
    def método_estático():
        print("Olá")


objeto = Classe()
Classe.método_estático()
objeto.método_estático()
# Saída:
# Olá
# Olá
````
Observe que dá pra acessar o método estático tanto a partir da classe quanto a partir do objeto.

## Atributos de classe
Não só os objetos, mas as classes também podem possuir atributos.
Esta funcionalidade é interessante para servir como um valor padrão caso o atributo não seja valorado (ou seja, tenha um valor atribuído a ele) no objeto, mas mais do que isso, é muito mais interessante quando utilizada para compartilhar informação entre as diversas instâncias.

Atributos da classe são declarados no nível (escopo) da classe (no mesmo nível que os métodos).
Eles podem ser acessados tanto pela classe quanto pelos objetos.
Eles podem ser alterados ou pelo acesso feito a partir da classe ou por métodos de classe. Se você tentar alterar a partir de um objeto vai apenas setar um atributo do objeto com o mesmo nome.

Exemplo:

````
class Classe:
    atributo_da_classe = 1


objeto_1 = Classe()
objeto_2 = Classe()

print(Classe.atributo_da_classe)  # Saída: 1
print(objeto_1.atributo_da_classe)  # Saída: 1
print(objeto_2.atributo_da_classe)  # Saída: 1

Classe.atributo_da_classe = 2
print(Classe.atributo_da_classe)  # Saída: 2
print(objeto_1.atributo_da_classe)  # Saída: 2
print(objeto_2.atributo_da_classe)  # Saída: 2

objeto_1.atributo_da_classe = 3
print(Classe.atributo_da_classe)  # Saída: 2
print(objeto_1.atributo_da_classe)  # Saída: 3
print(objeto_2.atributo_da_classe)  # Saída: 2
````

### Métodos de classe
Como foi dito, a outra forma de alterar atributos da classe é por meio de métodos de classe.
Diferentemente dos métodos normais, estes não precisam de dados da instância, mas diferentemente de métodos estáticos, eles precisam de dados da classe.

Eles funcionam por meio do decorador @classmethod, que, assim como o @staticmethod, também está disponível no escopo global, e recebem um primeiro parâmetro cls, que referencia a classe.

````
class Classe:
    _atributo_da_classe = 1

    @classmethod
    def seta_atributo_da_classe(cls, valor):
        cls._atributo_da_classe = valor

    @classmethod
    def retorna_atributo_da_classe(cls):
        return cls._atributo_da_classe


objeto_1 = Classe()
objeto_2 = Classe()

print(Classe.retorna_atributo_da_classe())  # Saída: 1
print(objeto_1.retorna_atributo_da_classe())  # Saída: 1
print(objeto_2.retorna_atributo_da_classe())  # Saída: 1

Classe.seta_atributo_da_classe(2)
print(Classe.retorna_atributo_da_classe())  # Saída: 2
print(objeto_1.retorna_atributo_da_classe())  # Saída: 2
print(objeto_2.retorna_atributo_da_classe())  # Saída: 2

objeto_1.seta_atributo_da_classe(3)
print(Classe.retorna_atributo_da_classe())  # Saída: 3
print(objeto_1.retorna_atributo_da_classe())  # Saída: 3
print(objeto_2.retorna_atributo_da_classe())  # Saída: 3
````

Como podemos ver, o acesso é feito de maneira transparente, sem precisar passar explicitamente o parâmetro ``cls.``

_Como podemos ver, o acesso é feito de maneira transparente, sem precisar passar explicitamente o parâmetro cls._

A diferença desse exemplo para o anterior é que acessar o método de classe a partir do objeto pode alterar atributos de classe, tal como na linha que seta o atributo para o valor 3 a partir da chamada ``objeto_1.seta_atributo_da_classe(3)``: apesar de chamado do objeto, o método altera o valor do atributo da classe, refletindo a alteração em todas as instâncias. Com isso é possível realizar uma comunicação entre as instâncias da classe.

## Chamando métodos
Em Python a chamada de métodos pode ser feita de algumas formas diferentes.

É bom salientar que o acesso de métodos de instância, de classe e estáticos podem ser feitos de forma transparente, isto é, ao chamar objeto.método(parâmetro) você não sabe se o método é da instância, de classe ou estático, o que ajuda na abstração e facilidade do uso.
O Python preenche os valores de self e cls de maneira adequada quando eles existem, e não passa nenhum parâmetro adicional pra um método estático.

Segue uma listagem mais completa para sintetizar:

````
# Arquivo main.py
class Classe:
    atributo_da_classe = 1

    def __init__(self):
        self.atributo_do_objeto = 2

    def método_normal(self):
        print(self)

    @classmethod
    def método_de_classe(cls):
        print(cls)

    @staticmethod
    def método_estático():
        print("Olá")


objeto = Classe()

# Acessando atributo do objeto
print(objeto.atributo_do_objeto)
# Não dá pra chamar usando a classe (Classe.atributo_do_objeto dá erro)
# Saída:
# 2

# Acessando atributo da classe
print(Classe.atributo_da_classe)
print(objeto.atributo_da_classe) 
# Saída:
# 1
# 1

# Chamando o método normal
Classe.método_normal(objeto)  # Ou Classe.método_normal(self=objeto)
objeto.método_normal() # Açúcar sintático para a forma da linha acima
# Saída:
# <__main__.Classe object at 0x7f2304ab3d30>
# <__main__.Classe object at 0x7f2304ab3d30>

# Chamando o método estático
Classe.método_estático()
objeto.método_estático()
# Saída:
# Olá
# Olá

# Chamando o método de classe
Classe.método_de_classe()  # Observe que não precisa passar nenhum parâmetro
objeto.método_de_classe() 
# Saída:
# <class '__main__.Classe'>
# <class '__main__.Classe'>
````

