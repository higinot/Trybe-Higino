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