## Você será capaz de
Definir Padrões de Projeto;
Utilizar os padrões Decorator, Observer e Factory, entendendo onde eles podem ser aplicados.
Identificar Code Smells.
Identificar e tratar Data Clumps e Middle Man.

### Por que isso é importante?
Será que alguém já desenvolveu um solução para o problema que você esta tentando resolver? 🤔 Se a resposta for sim, como podemos encontrar esta solução e encaixá-la em nosso código?

Para responder essa pergunta, nasce a ideia de Padrões de Projeto e templates de solução. Muito além de teoria, são templates de código que nos ajudam diretamente na solução de nossos problemas sem a necessidade de reinventarmos a roda, pois escolhendo o padrão adequado teremos certeza que nosso código vai evoluir para uma arquitetura conhecida e testada por milhares de outras pessoas programadoras.

Ao entender os padrões de projeto fica mais fácil validar se determinada biblioteca open source, que utiliza este padrão, será útil no nosso caso, pois passamos a pesquisar já pensando nos padrões. Por exemplo, conseguimos descobrir que é possível criar os cenários de teste com o Padrão Factory e também pesquisar por libs que ajudam na internet:

`Pytest test with factory (factory_boy Python)`

`Jest test with factory (factory-girl para Node.js)`

`Rspec test with factory (factory-girl para Ruby)`

`Java test with factory (model-citizen para Java)`

## Padrão Observer
O Observer é um padrão comportamental, pois o foco é sobre as responsabilidades dos objetos. Uma classe observadora se responsabiliza por monitorar outro objeto. Assim, quando ocorrer alguma alteração ou eventos no objeto monitorado, o observador vai notificar os demais objetos do sistema.

Para simplificar: lembre do que acontece quando você recebe uma nova mensagem no Facebook. Quantos objetos/componentes são atualizados?

Será que cada objeto componente fica consultando o objeto listaDeMensagens freneticamente a cada segundo? 🤔 O que ocorre é justamente o conceito do padrão Observer, onde um objeto notifica os demais sobre essa atualização. O React Redux pode ser considerado uma implementação do padrão Observer.

## Aplicando o Padrão Observer
Vamos implementar a representação de um sistema de notificação de uma rede social, de modo que, quando uma pessoa realizar uma nova postagem em seu perfil, todos as pessoas que a seguem serão notificadas. Entretanto, as pessoas seguidoras podem decidir se querem ser notificadas por mensagem, push notification ou e-mail.

1️⃣ Precisaremos criar a `classe Perfil`, que ao adicionar um novo post (`adicionar_post())`, exibirá o mesmo `(mostrar_post)` e notificará todas as pessoas seguidoras ( notificar_todos) pelos sistemas `(__sistemas de notificação)` que possui. O método `adicionar_sistema_de_notificacao()` permitirá que o cadastro de novos sistemas seja feito de forma dinâmica:

````
class Perfil:
    def __init__(self):
        self.__sistemas_de_notificacao = []
        self.__new_post = None

    def adicionar_sistema_de_notificacao(self, sistema):
        self.__sistemas_de_notificacao.append(sistema)

    def notificar_todos(self):
        for sistema in self.__sistemas_de_notificacao:
            sistema.notificar()

    def adicionar_post(self, post):
        self.__new_post = post
        self.mostrar_post()
        self.notificar_todos()

    def mostrar_post(self):
        print(f"\nPost: {self.__new_post}\n")
````

2️⃣ Para implementar o padrão Observer, precisaremos criar as classes observadoras que acompanharão o objeto Perfil, observando se ele ganha um novo Post. Quando verdadeiro, cada observador vai disparar as notificações.

Criaremos então, uma classe Observador para cada sistema de envio (E-mail, PushNotification, Mensagem). Como a estrutura dessas classes será parecida, nada mais justo que padronizá-las para uma Interface Abstrata, garantindo que exista o método notificar():

````
from abc import ABC, abstractmethod

# Interface Observer
class Notificador(ABC):
    @abstractmethod
    def notificar(self):
        pass

# Observador Mensagem
class NotificadorMensagem(Notificador):
    def __init__(self, perfil, seguidores):
        self.perfil = perfil
        self.seguidores = seguidores
        self.perfil.adicionar_sistema_de_notificacao(self)

    def notificar(self):
        print(f"Notificando via Mensagens: {self.seguidores}")

# Observador Push Notification
class NotificadorPushNotification(Notificador):
    def __init__(self, perfil, seguidores):
        self.perfil = perfil
        self.seguidores = seguidores
        self.perfil.adicionar_sistema_de_notificacao(self)

    def notificar(self):
        print(f"Disparando Push Notification para: {self.seguidores}")

# Observador Email
class NotificadorEmail(Notificador):
    def __init__(self, perfil, seguidores):
        self.perfil = perfil
        self.seguidores = seguidores
        self.perfil.adicionar_sistema_de_notificacao(self)

    def notificar(self):
        print(f"Disparando Email's para: {self.seguidores}")
````

3️⃣ Pronto, agora podemos usar nosso código com o padrão Observer! O código que vamos utilizar é conhecido na literatura como código Cliente:

Agora, podemos ver como cada pessoa seguidora deseja ser notificada:

Carlos quer ser notificado por mensagem

Marcia e Claudia querem ser notificadas por mensagem e email

Rodolfo quer ser notificado somente por mensagem

````
# Cliente
if __name__ == "__main__":
    seguidores_mensagem = ["Carlos", "Claudia", "Marcia", "Rodolfo"]
    seguidores_push_notification = ["Carlos"]
    seguidores_email = ["Claudia", "Marcia"]

    meuPerfil = Perfil()
    NotificadorMensagem(meuPerfil, seguidores_mensagem)
    NotificadorPushNotification(meuPerfil, seguidores_push_notification)
    NotificadorEmail(meuPerfil, seguidores_email)

    meuPerfil.adicionar_post("Olá universo da programação!")
````

4️⃣ Podemos perceber que apenas o uso de meuPerfil.adicionar_post() é suficiente para realizar as notificações. Inclusive ainda podemos notificar as pessoas seguidoras a qualquer momento chamando diretamente meuPerfil.notificar_todos(). Isso é interessante, pois podemos ativar/desativar as formas de notificação apenas alterando um bloco parcial de código, sem precisar alterar o método notificar_todos(). Esta facilidade é conhecida como baixo acoplamento e facilita muito as manutenções futuras.

## Padrão Decorator
O Decorator é um padrão de projeto estrutural que permite adicionar novos comportamentos e responsabilidades aos objetos de forma flexível.

Lembra do @fixture, que utilizamos para decorar um teste com objetos pré-carregados? Pois é, usar notações com @ antes dos métodos é a forma com que o Python lida com os decorators. Mas hoje, vamos além, pois criaremos o nosso código com o Padrão Decorator, ou seja, daremos mais poderes aos nossos métodos sem a necessidade de subclasses para estender funcionalidades.

### Aplicando o Padrão Decorator
Vamos criar uma calculadora para um jogo de matemática para a Educação Infantil:
1️⃣ Podemos começar criando a classe de objeto Calculadora, com o método somar():

````
class Calculadora:
    def soma(self, x, y):
        return x + y
````

2️⃣ Parece que está funcionando bem, caso sejam passados os parâmetros x e y como números. Porém, recebemos a missão de criar uma calculadora que consiga interpretar números escritos por extenso, reconhecendo em inglês ou em português, dependendo de como a pessoa usuária preferir:

“um”, “dois, “três”, “quatro”, “cinco”, “seis”, “sete”, “oito”, “nove”, “dez”

“um” + “quatro” = 5

## Padrão Factory
O Padrão Factory pode ser dividido entre dois padrões classificados como padrões criacionais:

 - Factory Method: é um padrão que implementa uma interface responsável por fabricar/criar outros objetos.
 - Abstract Factory: é um padrão que permite produzir famílias de objetos relacionados. Por exemplo, considere que uma fábrica pode produzir diversos carros (Uno, Palio, Celta etc.) e diferentes tipos de motores (1.0, 1.4, 2.0). Essa estrutura simplifica a construção de um objeto Carro, ajudando na combinação dos diferentes elementos.


### Onde e/ou por que o Padrão Factory pode ser utilizado?**


O Padrão Factory pode ser usado para:

Substituir as Fixtures, a fim de facilitar a criação de testes;
Simplificar a criação de objetos diferentes, pois dispensa conhecer os métodos e parâmetros da fábrica;
Caso um novo tipo de objeto surja na regra de negócio, é fácil adaptar para que a fábrica também o produza;
Fazer uso do princípio de responsabilidade única (SOLID), já que o código de criação do objeto se concentra em um único lugar.

### Aplicando o Padrão Factory
Vamos aplicar o padrão Factory Method para ajudar uma hamburgueria a impulsionar suas vendas! 🍔 A nossa intenção será estimular a aquisição de Combos por clientes. Para agilizar a produção dos combos e evitar erros, vamos desenvolver uma Fábrica de Combos, que facilitará a montagem dos mesmos.

Basicamente, uma fábrica é uma classe de Interface Criadora, que é herdada por fábricas Criadoras Concretas, que veremos nos passos 3 e 4 a seguir:

1️⃣ Vamos começar criando uma classe abstrata, que será a interface base para as classes dos itens do cardápio:

````
from abc import ABC, abstractmethod

class Item(ABC):
    @abstractmethod
    def __repr__(self):
        # __repr__ é o método que o Python chama quando realizamos um print() do objeto 
        pass
````

2️⃣ Criaremos agora as classes dos itens do cardápio, que possuem a interface Item, criada anteriormente, e implementa os métodos que a interface sugere (__repr__ em nosso caso):

````
class ItemHamburger(Item):
    def __repr__(self):
        return "Hamburguer"

class ItemRefrigerante(Item):
    def __repr__(self):
        return "Refrigerante"

class ItemSorvete(Item):
    def __repr__(self):
        return "Sorvete"

class ItemFritas(Item):
    def __repr__(self):
        return "Fritas"
````

3️⃣ Para finalmente implementarmos a nossa Fábrica, vamos criar uma Interface Criadora, que define a assinatura do método criar_combo, além de implementar os métodos exibe_itens e adicionar_itens que serão oferecidos para quem herdá-la:

````
# ...
class Combo(ABC):
    def __init__(self):
        self.items = []
        self.criar_combo()

    @abstractmethod
    def criar_combo():
        pass

    def exibe_itens(self):
        return self.items

    def adicionar_itens(self, item):
        self.items.append(item)
````

4️⃣ Por fim, implementaremos as classes Criadoras concretas, que possuem a responsabilidade final de fabricar o objeto desejado e tudo que é necessário para ele:

Em nosso exemplo, temos três Combos: ComboTudo, ComboFeliz e ComboGelado. Cada um é fabricado conforme é desejado pelo restaurante.

````
class ComboTudo(Combo):
    def criar_combo(self):
        self.adicionar_itens(ItemHamburger())
        self.adicionar_itens(ItemSorvete())
        self.adicionar_itens(ItemFritas())
        self.adicionar_itens(ItemRefrigerante())


class ComboFeliz(Combo):
    def criar_combo(self):
        self.adicionar_itens(ItemHamburger())
        self.adicionar_itens(ItemFritas())
        self.adicionar_itens(ItemRefrigerante())


class ComboGelado(Combo):
    def criar_combo(self):
        self.adicionar_itens(ItemHamburger())
        self.adicionar_itens(ItemSorvete())
````

5️⃣ Agora podemos apenas usar nossa fábrica e teremos um código simples e objetivo:

````

if __name__ == "__main__":
    combo_escolhido = input(
        "Olá, qual seu pedido? [ComboTudo, ComboFeliz, ComboGelado]: "
    )
    
    #Para transformar uma string em código executável basta usar o método eval()
    # Equivalente a chamar ComboTudo(), ComboFeliz(), ComboGelado()
    combo = eval(combo_escolhido)()

    print(f"\nCriando o combo {type(combo).__name__}.")
    print(f"Combo fabricado com os seguintes itens: {combo.exibe_itens()}")
````

Podemos perceber que depois que as fábricas ficaram prontas, a lógica da chamada final de fabricar os combos ficou bem mais simples, assim como inserir um novo combo no código não exige muitas manutenções, pois basta criar um novo objeto que represente uma nova fábrica concreta.

O Padrão Factory organiza bem o código, permitindo dividir a tarefa de desenvolvimento entre mais pessoas, afinal, cada pessoa pode puxar uma fábrica concreta no dia a dia.

## Code Smells
Conforme naturalmente desenvolvemos o nosso código, existem algumas práticas que a princípio podem parecer a melhor solução para determinado problema. Entretanto, causam o efeito contrário e por muitas vezes trazem eventuais novos problemas.

Estas práticas acabaram ficando famosas na comunidade de programação por serem coisas que acontecem frequentemente. Assim, foram apelidadas de code smells, ou seja, maus cheiros no código, indicando que algo está errado, embora possa não parecer de imediato.

Assista ao vídeo a seguir que apresenta mais detalhes sobre esse conceito:

Reconhecer tais práticas é importante para que possamos identificá-las em nosso código e assim evitar problemas e dificuldades. Você pode ter se deparado com algumas delas, só talvez ainda não soubesse seus nomes. Bora conferir?

- Long Method: métodos grandes geralmente significam mais de uma responsabilidade em um mesmo trecho de código. Por isso, como regra geral, métodos não devem ser muito longos;
- Large Class: classes grandes geralmente significam mais de uma responsabilidade. Por isso, como regra geral, classes não devem ser muito grandes;
- Duplicate Code: uma aplicação não deve ter trechos de código duplicados;
códigos duplicados geralmente significam falta de abstração, ou seja, lógica repetida que poderia estar centralizada em uma única entidade compartilhada.
- Dead Code: se um código não está mais sendo utilizado, por que ainda está lá? Não devemos ter código morto na aplicação.
- Speculative Generality: quem nunca tentou adivinhar o futuro e tornou uma implementação mais complicada do que precisava ao generalizar um comportamento apenas por achar que vai utilizá-lo novamente no futuro? Essa aqui é extremamente comum de fazermos sem perceber!

Existem vários code smells, e esta listagem contém só alguns deles. Vamos nos aprofundar em mais alguns exemplos, especificamente em Data Clumps e Middle Man.

## Middle Man
Homem do meio (middle man) é um code smell que ocorre quando uma classe existe somente por um motivo (o que por si só é algo bom), só que o motivo é delegar uma ação para outra.

Exemplo
Temos uma plataforma onde a pessoa jogadora (Player) participa de torneios (Tournament) de jogos (Game). Nesta plataforma, temos um código cliente que precisa consultar os torneios de poker de uma pessoa jogadora.

Para fins de uso desse exemplo, utilizaremos a pessoa jogadora com id=1 e o jogo de tabuleiro que ela comprou também com id=1.

````
class Player:
    # ...

    def tournaments(self, game_id):
        """Retorna os torneios de um jogo da pessoa"""
        return Game(game_id).tournaments()


class Game:
    """Classe que só possui o método de filtrar os torneios"""
    def __init__(self, game_id):
        self.game_id = game_id

    def tournaments(self):
        return Tournament.query.filter(game_id=self.game_id).all()


class Tournament:
    """Classe contendo vários métodos e que herda de algum banco de dados"""


# Código cliente
player = Player(id=1)
print(player.tournaments(1))
````

A classe Game, especificamente neste exemplo onde ela não possui mais métodos ou atributos, tem pouco ou nenhum impacto sobre as regras de negócio.

### Solução
Se uma classe somente delega uma ação para outra, por que deveria existir? Remova o que fica no meio!

````
class Player:
    # ...

    def tournaments(self, game_id):
        """Retorna os torneios de um jogo da pessoa"""
        return Tournament.query.filter(game_id=game_id, user_id=self.id).all()


class Tournament:
    """Classe contendo vários métodos e que herda de algum banco de dados"""

# Código cliente
player = Player(id=1)
print(player.tournaments(1))
````
Aqui removemos o middle man Game da consulta, fazendo-a diretamente em Tournament, simplificando o nosso código. Uma observação importante: se Game fizesse algo mais, como por exemplo se fosse algo que ficasse no banco de dados e tivesse suas informações, ainda assim seria interessante não utilizar uma query intermediária, mas a classe não precisaria ser apagada.

## Data Clumps
Ocorre quando um grupo de variáveis (como o endereço de entrega do exemplo que veremos abaixo) é passado junto como parâmetro em várias partes do programa. É indicativo de que esses grupos devam ser transformados em suas próprias classes.

### Exemplo
Imagine que você tem um aplicativo que possui as funcionalidades de cadastro de pessoas e de empresas. Tanto as pessoas quanto as empresas possuem endereços.

````
class User:
    def __init__(self, name, age, street, number, district):
        self.name = name
        self.age = age
        self.address_street = street
        self.address_number = number
        self.address_district = district

    # ...


# Em algum outro lugar do código
class Company:
    def __init__(self, name, street, number, district):
        self.name = name
        self.address_street = street
        self.address_number = number
        self.address_district = district

    # ...
````

Percebe como os parâmetros street, number e district ficaram repetidos? Não só isso, mas eles fazem parte de algo que tem um significado ao juntar todos eles: um endereço.

Soluções
Uma possível solução para esse problema é criar uma classe somente para representar a entidade endereço:

````
class Address:
    def __init__(self, street, number, district):
        self.street = street
        self.number = number
        self.district = district


class User:
    def __init__(self, name, age, address):
        self.name = name
        self.age = age
        self.address = address


class Company:
    def __init__(self, name, address):
        self.name = name
        self.address = address
````

### Classes de dados
A classe Address sugerida anteriormente serve basicamente para salvar dados. Ela não possui vários métodos e comporta-se como um repositório de dados, tornando sua semântica um pouco diferente daquela com qual já nos habituamos.

Como é comum termos estes dois tipos de classe (as normais, que modelam entidades com comportamentos, e as classes de dados, que servem basicamente para agrupar conjuntos de dados), foi criada em Python uma estrutura que simplifica o uso de classes de dados: as dataclasses. O uso é feito por meio do decorador dataclasses.dataclass:

````
from dataclasses import dataclass


@dataclass
class Address:
    # Podemos colocar um valor padrão
    street = "Street"
    number = 0
    # Ou especificar o tipo do campo com anotações de tipo
    district: str


address = Address(district="District")

print(address.street, address.number, address.district)
# Street 0 District
````
A dataclass Address pode ser utilizada da mesma forma que classe padrão Address definida no exemplo anterior. Observe que o `__init__ `não é mais necessário: como as dataclasses são feitas para guardar dados, somente definir os atributos no corpo da classe já é o suficiente para o acesso externo por meio da notação objeto.atributo.

Geralmente dicas/anotações de tipo (type hints / type annotations) são utilizadas para especificar o tipo de dados dos atributos, neste caso ao invés de utilizarmos um valor padrão utilizamos a seguinte notação:

````
@dataclass
class Address:
    street: str
    number: int
    district: str


# A ordem de parâmetros pro construtor é a mesma da definição dos atributos
address = Address("Street", 0, "District")
````

Convém ressaltar que as dataclasses também podem conter métodos, dispor de herança, composição e outros conceitos comuns à orientação a objetos.

Uma solução diferente de dataclasses poderia ser utilizar dicionários, mas essa abordagem possui alguns aspectos negativos:

O acesso às chaves de um dicionário é feito pela sintaxe de indexação dicionario["chave"], enquanto que nas dataclasses podemos utilizar a sintaxe de acesso de atributos por dot notation: objeto.atributo.
O uso de memória de um dicionário pode ser muito maior, já que ele precisa alocar uma maior quantidade de memória para evitar a ocorrência de colisões entre chaves.

### Tuplas nomeadas
Há um terceiro problema no uso de dicionários que as dataclasses não resolvem: a duplicidade na declaração das chaves. Se você tiver 3 dicionários com as mesmas chaves, mas valores diferentes, você armazenará as chaves 3 vezes na memória. Pouco eficiente, não? Para isso existem as tuplas, onde não existem chaves nem acessos por meio da sintaxe objeto.atributo, visto que sabemos a ordem dos elementos. Por exemplo:

````
address1 = ("Street", 0, "District")
address2 = ("Street2", 1, "District2")
print(address1[0], address1[1], address1[2])
# Street 0 District
````
Mas assim perdemos o antigo acesso no formato address.street, etc. É aí que o Python vem com outra estrutura bem interessante para utilizar essa sintaxe e resolver os três problemas do uso de dicionários: tuplas nomeadas.

Namedtuples possuem pontos positivos e negativos também. Vamos às suas características:

Os nomes dos “atributos” só são definidos uma vez, ou seja, sem ocupar memória repetida como no dicionário.
Como são valores ordenados (e não indexados por chaves como nos dicionários), ocupam bem menos memória.
Elas podem ser utilizadas de maneiras similares às dataclasses para acesso aos dados, utilizando a sintaxe objeto.atributo.
Infelizmente tuplas são imutáveis, ou seja, os dados serão “somente leitura”, sem a possibilidade de alteração.

````
from collections import namedtuple

# Definimos a tupla nomeada passando o nome dela e uma lista com os nomes dos
# atributos
Address = namedtuple("Address", ["street", "number", "district"])

# Criamos "instâncias" da tupla tal como criamos instâncias de classes normais
address1 = Address("Street", 0, "District")
# Podemos nomear os parâmetros para passá-los fora de ordem
address2 = Address("Street2", district="District2", number=1)

# Podemos acessar utilizando a sintaxe `objeto.atributo`
print(address1.street, address1.number, address1.district)
# Street 0 District

# Observe que o acesso por índice numérico ainda funciona, pois são tuplas
print(address1[0], address1[1], address1[2])
# Street 0 District

address1.district = "Aloha" # ! AttributeError, pois tuplas são imutáveis
````

### Mais sobre code smells
Se quiser conhecer mais sobre code smells, existem duas fontes bem bacanas:

O livro Refatoração, do Martin Fowler, é conhecido por ser uma referência no assunto.
O Refactoring Guru é um site que contém diversos code smells, bem como suas formas de resolvê-los.
Além disso, é bom saber que muitos linters buscam alguns code smells e impedem de deixá-los no código, o que é bem bacana, bem como o próprio vs code já tem algumas ferramentas de refatoração.