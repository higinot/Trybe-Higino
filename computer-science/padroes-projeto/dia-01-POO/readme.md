### Você será capaz de:
* Modelar um projeto em Python, pensando em Programação Orientada a Objetos.
* Implementar utilizando a linguagem Python: Classes, Construtores,Instâncias, Atributos e Métodos.
* Aplicar o polimorfismo com Interfaces em Python.

### Classes e Objetos

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
