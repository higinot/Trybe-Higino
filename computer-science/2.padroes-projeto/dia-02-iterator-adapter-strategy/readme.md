## Você será capaz de
 - Definir o que são os padrões de projetos;
 - Utilizar o padrão iterator;
 - Utilizar o padrão adapter;
 - Utilizar o padrão strategy.

 ## Por que isso é importante?
Escrever códigos que resolvem problemas é tranquilo. Complexo mesmo é fazer a manutenção de um código já escrito. E caso você ainda não saiba, dar a manutenção de códigos não elaborados por nós faz parte do cotidiano das pessoas desenvolvedoras.

Todo software, desde seu desenvolvimento até o fim de sua vida útil, precisa de manutenção. Os motivos são vários: atualizações de funcionalidade, adaptação às mudanças em plataformas ou bibliotecas, descoberta de bugs ou falhas de segurança…

Para assegurar que o software seja legível e alterável, utilizam-se padrões, que funcionam como as regras de um código. Esses padrões tanto buscam evitar erros comuns quanto propõem um alinhamento de expectativa do que será encontrado no código.

Para ilustrar a importância dos padrões, pensemos em um projeto web que possui um portal onde os usuários podem navegar, ler o conteúdo e postar comentários. Se eu lhe disser que você precisa acessar o código-fonte desse portal, o que você imagina encontrar nele? Imagine agora que tudo esteja em um só arquivo, sem nenhuma classe definida, com mais de 8 mil linhas… Bate um desespero em trabalhar nesse código, não? 😫

Para melhorar nossa vida, um caminho indicado é aplicar alguns padrões. Quem sabe organizar arquivos HTML e JS na camada de View, e arquivos de rotas e controllers para responder às requisições web? Ou também arquivos de Model/Classes de Objetos para representar as entidades do banco, arquivos para a comunicação com o banco de dados, arquivos de testes, etc… Com padrões como esses, as pessoas que trabalham com o código entenderão como o projeto foi construído — e o que fazer para resolver os problemas que podem aparecer.

A esta altura do seu desenvolvimento, você já deve ter utilizado um framework e percebido que rapidamente foram criadas com devida qualidade conexões, páginas e formulários. Possivelmente você não precisou ter contato com o código interno do framework, pois sua complexidade interna é abstraída. Muito disso se deve ao fato de a comunidade ter se reunido para padronizar muitos códigos, levando um Framework com arquitetura MVC, por exemplo, a reunir internamente vários padrões de projeto: Observer, Composite, Strategy, Factory Method, Decorator.

Uma das grandes vantagens dos frameworks é o fato de já implementarem o trabalho denso, permitindo que foquemos em como utilizá-lo. Mesmo nesse cenário, não podemos deixar o código que iremos inserir desorganizado.

Identificar e decidir a melhor forma de implementar uma solução é um dos papéis de uma pessoa desenvolvedora. Afinal, com a evolução de seu código, é desejável que ele se mantenha limpo, fácil de dar manutenção e legível para que outras pessoas desenvolvedoras venham a contribuir, entregando valor para as pessoas que o utilizarem.

## O que são Padrões de Projeto

Um padrão de projeto é uma forma já pensada e organizada para solucionar determinados desafios no desenvolvimento. Desde a década de 70, cientistas da computação perceberam que, ainda que em contextos diferentes, algumas soluções de problemas se repetiam em vários softwares. Visando facilitar a reutilização do desenho da solução e a comunicação, assim como melhorar a documentação e compreensão de um sistema, essa comunidade de cientistas começou a catalogar estes padrões.

Antes de prosseguir, reflita sobre a seguinte questão:

    Quantas aplicações no mundo precisam iterar sobre uma coleção de elementos?

Certamente milhares, correto? Eventualmente foi proposta e adotada uma forma padronizada de implementar a solução para este problema. Esse padrão é conhecido como Iterator. Ao receber uma coleção de entidades, uma classe que implementa o padrão de projeto Iterator deve ter uma interface específica — por exemplo, uma função next que retorna o próximo elemento da dita coleção.

Não interessa se a sua coleção está em formato de array, de árvore, se é uma lista de inteiros, objetos ou o que for. Ao garantir que sua classe possui um iterador, você garante que ela tem uma função next que vai acessar o próximo elemento da sua coleção. Ao seguir o padrão de projeto, você organiza o seu código e o seu raciocínio de uma forma pensada, estudada e comprovadamente eficaz.

![Alt text](https://content-assets.betrybe.com/prod/Lista%20com%20v%C3%A1rios%20padr%C3%B5es%20de%20projeto.png)

O iterator representa o exemplo mais básico a respeito dos padrões de projeto, mas ilustra bem o seu propósito:

    organizar seu código e raciocínio de forma boa, eficaz, comprovada e universalmente aceita.

## Classificação dos Padrões de Projeto

O principal livro de referência de Padrões de Projeto, o Design Patterns da GoF, aborda 23 padrões e os classifica em três categorias. Veremos cada uma delas a seguir.

### Padrões de Criação
O foco é em como os objetos são criados e como criar objetos flexíveis que podem ser facilmente reaproveitados.

Exemplo deste padrão de criação é o Factory.

### Padrões Estruturais
O foco está no design da estrutura de objetos e de classes, simplificando e identificando o relacionamento entre eles. Utilizam-se fortemente os conceitos de Herança e Composição.

Esses padrões trazem maneiras de lidar com objetos e classes mais complexos e maiores, sem perder eficiência e flexibilização. Exemplos desses padrões são o Adapter, que abordaremos hoje, e o Decorator, que abordaremos em aulas futuras.

### Padrões Comportamentais
Foca em como os objetos interagem entre si e suas responsabilidades. Exemplos são o Iterator e o Strategy, que veremos hoje. Veremos também, em aulas próximas, o padrão Observer, que você talvez já tenha observado em frameworks/libraries reativas — como Vue, React e Angular.

## Iterator

Imagine a situação: você está em um time de desenvolvimento e suas habilidades envolvidas na criação de códigos limpos e reutilizáveis serão bem-vindas. O primeiro desafio está relacionada à cobrança de clientes, e em uma reunião a dor da equipe é compartilhada:

    Costumávamos fazer os relatórios de cobrança a clientes de forma manual, mas isso se tornou impossível com o constante crescimento de clientes que começou há 3 meses. Estamos com um atraso de 3 meses de relatório! Agora nossa empresa comprou uma ferramenta automática de relatórios, mas o meu computador não conseguiu carregar 3 meses de tabela para fazer o relatório! Exige muito da memória e o sistema simplesmente trava. 😟

Você está com um problema sério em mãos, mas conseguiremos resolver! Na reunião para o problema, sua liderança pergunta:

    Como resolveremos este problema?

👉 Faça uma pausa para pensar na resposta, registrando seus pontos em um bloco de notas ou caderno.

Após de debater soluções com o time, foi decidido que o problema é o tamanho do que está sendo carregado no servidor. Não é possível carregar os 300 GB de dados do banco, então a saída é dividir o resultado da consulta em partes menores, pegando uma de cada vez para alimentar a ferramenta de relatórios.

Antes de começar, faz-se necessário o banco de dados. Para diminuir a complexidade deste exemplo, segue uma pseudo implementação de uma classe que faz a simulação do banco de dados:

    class DbSimulator:
    def __init__(self):
        # Imagine que estes dados estão populados no banco de dados
        self.person_table = [
            {"name": "Morgana", "age": "22"},
            {"name": "Sarah", "age": "24"},
            {"name": "Will", "age": "33"},
            {"name": "Rick", "age": "23"},
            {"name": "John", "age": "22"},
            {"name": "Peter", "age": "35"},
            {"name": "Groove", "age": "48"},
            {"name": "Sam", "age": "19"},
        ]

    # Não se preocupe com este método apenas simula um retorno get do banco.
    def get(self, query, page):
        per_page = 2

        if query == "select * from person":
            first = (page * per_page) - per_page
            last = page * per_page
            return self.person_table[first:last]

Para consultá-lo em partes menores, será criada uma classe chamada Iterable, que tem a coleção de objetos que pode ser iterada (no caso, o banco de dados para o relatório). Será implementado o método __iter__, padronizado pelo Python, responsável por fornecer um objeto iterador que veremos a seguir.

    # Iterator e Iterable é a Interface padronizada pelo Python
from collections.abc import Iterable, Iterator

class DatabaseIterable(Iterable):
    def __init__(self, db, query):
        self.db = db
        self.query = query

    """Aqui retornamos qual é o objeto que realiza a iteração"""
    def __iter__(self):
        return DatabaseIterator(self.db, self.query)

O objeto iterador é uma instância da classe DatabaseIterator, em que será inserida a lógica para acessar o banco de dados e realizar as requisições por lotes (páginas). Implementa-se o método __next__, padronizado pelo Python, permitindo a iteração no DatabaseIterable.

    class DatabaseIterator(Iterator):
    def __init__(self, db, query):
        """No construtor da classe iteradora, definimos o valor inicial do
        contador current_page, e também o(s) atributo(s) que será(ão)
        responsável(is) por armazenar/acessar a coleção de dados pela qual
        queremos iterar."""

        self.db = db
        self.query = query
        self.current_page = 1

    def get_page(self, page):
        return self.db.get(self.query, page)

    def __next__(self):
        """Este método busca no banco de dados a página que queremos e
        incrementa o contador current_page, para retornarmos a próxima página
        na próxima vez que o método for chamado."""

        data = self.get_page(page=self.current_page)

        """É uma boa prática a utilização da exceção StopIteration() para
        indicar que não foi possível avançar na iteração. Ou seja: tentamos
        acessar uma current_page que não existe."""

        if not data:
            raise StopIteration()

        self.current_page += 1
        return data

Note que cada vez que o método __next__ é chamado na instância retornada por __iter__, receberemos uma parte pequena dos dados, que por sua vez será utilizada na ferramenta de relatórios.

![Alt text](https://content-assets.betrybe.com/prod/Para%20o%20padr%C3%A3o%20iterator%20n%C3%A3o%20importa%20como%20voc%C3%AA%20progride%2C%20desde%20que%20retorne%20o%20pr%C3%B3ximo%20elemento.png)

Depois de pronto, como usar? Como vamos iterar na coleção?

Como respeitamos a interface do Python para escrever o padrão iterator, ele já libera o funcionamento do clássico for:

````
# Primeiro instanciamos o ITERÁVEL
record_paginator = DatabaseIterable(DbSimulator(), "select * from person")

# Em seguida podemos usar o for para iterar
# Nesse momento o ITERADOR é criado implicitamente
for page in record_paginator:
    # faz algo com a página, que é uma lista de resultados
    for record in page:
        print(record["name"])
````

No Python por exemplo, quando chamamos um for para iterar sobre um objeto, a linguagem envia a mensagem ``__iter__()`` de modo a obter um iterador. Em seguida, envia para o iterador a mensagem ``__next__()`` para encontrar o próximo item, e o próximo, e o próximo… até o iterador se esgotar, isto é, levantar a exceção StopIteration(). Assim, toda classe que implementar o padrão iterator pode ser usada com estruturas como o for: listas, tuplas, dicionários, árvores e até arquivos.

👀 Olha que legal: para todas as estruturas iteráveis do Python (inclusive a nossa classe DatabaseIterable), esse processo implícito do for pode ser feito explicitamente passando o objeto iterável como parâmetro da função nativa iter(). O retorno dessa chamada será exatamente o objeto iterador definido no retorno do ``__iter__``, que poderá ser passado como parâmetro para a função nativa next(). Dessa forma, cada chamada do next() funciona como 1 ciclo do for.

Agora, quando você vivenciar desafios em que é preciso operar sobre vários elementos, mas um de cada vez, conte com o padrão iterator, pois ele facilitará e unifica a resolução.

## Adapter
Mantendo-se na situação abordada anteriormente, sua equipe ficou sabendo de um novo desafio e você agilmente foi acompanhar a nova demanda:

O problema agora é outro: a ferramenta que compramos tem uma API pronta para integrar no nosso sistema, só que a interface é muito diferente da nossa. Ela exporta uma lista de cabeçalhos e uma lista de valores, não é como a nossa que já monta os dicionários direitinho… 😵

Como resposta, uma pessoa colega de time acrescenta:

Vai dar MUITO trabalho utilizar essa ferramenta… Vamos ter que parar tudo para adaptar o nosso sistema a esse formato! Ou pior, vamos ter que REIMPLEMENTAR a API que eles oferecem… 😳 Quem poderá nos ajudar?

E aí você se lembra do Padrão Adapter.

Ao analisar os códigos do sistema, já deparamos com um exemplo de classe que analisa o relatório e realiza um cálculo de média. Nota-se que o método average() espera que o retorno de load_data() contenha estruturas dict.

````
class ReportAnalyzer:
    def __init__(self, loader):
        self.loader = loader

    def average(self):
        # este é um dos métodos que espera uma lista de dicionários
        data = self.loader.load_data()
        # aqui ela soma o valor na chave final_price em cada item da lista
        total = sum(order['final_price'] for order in data)
        return total / len(data)
````
Pelo que foi comentado na reunião, a nova ferramenta (gerenciator3000) não retorna uma estrutura com dicionários, o que é comprovado ao realizar os print de seu retorno:

````
# Código exemplo para simular a API Gerenciator3000
class ReportLoader:
    def __init__(self):
        self.headers = ["id", "date", "final_price"]
        self.rows = [
            [1337, "2020-11-20", 2350.5],
            [1338, "2020-11-21", 4800.5],
        ]

g3000_loader = ReportLoader()
print(g3000_loader.headers)   #  ['id', 'date', ..., 'final_price']
print(g3000_loader.rows[0])  #  [1337, '2020-11-20', ..., 2350.5]
````

### O que você faria para aproveitar os dados e fazer o relatório?

A meta é evitar reescrever o ReportAnalyzer, ou mesmo o gerenciator3000.ReportLoader, de funcionamento desconhecido.

O time decidiu fazer uma classe responsável por “traduzir” esses dados do formato da ferramenta para o formato do sistema utilizado pela companhia. Essa classe poderá ser acoplada na ferramenta de relatórios. Tem-se então uma adaptação eficiente:

````
class G3000LoaderAdapter:
    # aqui o loader é uma instância do gerenciator3000.ReportLoader original
    def __init__(self, loader):
        self.loader = loader

    def load_data(self):

        # Em python, o zip() junta uma lista de chaves em uma lista de valores
        # e permite criar dicionário! Por exemplo:
        # dict(zip(['nome', 'idade'], ['Juliana', 27]))
        # {'nome': 'Juliana', 'idade': 27}

        data = []
        for row in self.loader.rows:
            data.append(dict(zip(self.loader.headers, row)))
        return data
````

Feito! Foi utilizado outro padrão, o Adapter. Ele permite converter a interface de uma classe em outra interface, esperada pelo cliente (isto é, o código que usa a classe em questão). O Adapter permite que interfaces incompatíveis trabalhem em conjunto — o que, de outra forma, seria impossível.

Veja só como fica o código que vai utilizá-lo:

````
loader = G3000LoaderAdapter(g3000_loader)
# o analyzer do nosso sistema recebe o adaptador como qualquer outro loader
analyzer = ReportAnalyzer(loader)
analyzer.average() # Agora funcionará
````

A aplicação aumenta a nível de complexidade como consequência, pois estamos adicionando novas interfaces e classes. Mas, o desacoplamento entre o código do cliente (ReportAnalyzer) e o objeto adaptado (ReportLoader) se mantém. Mudanças no objeto adaptado refletem apenas no adaptador (G3000LoaderAdapter) e não no código cliente. Logo, nenhuma lógica existente é alterada para adicionar a funcionalidade, ainda é possível substituir o serviço adaptado através da criação de novos adaptadores.

### Para finalizar
Classes se comunicam através de troca de mensagens. Entretanto, nem sempre isso é possível de se fazer diretamente: às vezes há uma incompatibilidade entre as classes (como uma classe esperar texto .CSV e outra só enviar .JSON), seja devido a um código legado ou mesmo contextos distintos.

Quando as mensagens que as classes utilizam para se comunicar estão em “interfaces distintas”, não podemos simplesmente mudar a interface. Isso iria quebrar todos os outros lugares em que esta classe é utilizada! Usar uma terceira entidade, que faz a “tradução”, é normalmente a saída mais organizada e indicada.

## Strategy

A equipe da qual você faz parte está sendo reconhecida pela empresa! Dada a facilidade em lidar com os problemas, vocês receberam a missão de simplificar um código extenso, que sempre apresenta bugs. A manutenção do código em questão é temida por muitas pessoas desenvolvedoras.

Antes de tudo, deve-se conferir o que este código deve fazer com base no relato da pessoa usuária:

Depois de que o relatório é processado, costumamos emitir uma ordem de cobrança bancária para cada cliente que possui débito automático. Temos um código que realiza a comunicação com as principais instituições bancárias. Mas é frequente um dos bancos alterar a Api deles e nosso código para de funcionar, derrubando o sistema para todo mundo. 😕

````
class DebitoAutomatico:
    @classmethod
    def debitar(self, conta, valor, banco):
        if banco == "itau":
            # Codigo específico do Itaú (exemplo)
            # connect_server_udp(itau_line)
            # itau_line.check_system()
            # itau_zig_zag(valor, 'Token 454')
            print("Débito realizado pelo Itau")
        elif banco == "Santander":
            # Codigo específico do Santander (exemplo)
            # connect_server_tcp(santander_line)
            # santander_line.check_ping()
            # metodo_106(valor)
            print("Santander, Débito efetuado!")
        elif banco == "Bradesco":
            # Codigo específico do Bradesco (exemplo)
            print("Sucesso!")
        # ... + 150 bancos...
        elif banco == "Caixa":
            # Codigo específico da Caixa (exemplo)
            print("Efetuado com sucesso, Caixa Agradece!")


DebitoAutomatico.debitar(120, 123, "itau")
DebitoAutomatico.debitar(110, 456, "Santander")
DebitoAutomatico.debitar(120, 789, "Bradesco")
````

Cada banco possui um método específico. São muitas instituições bancárias e esse código é gigante, tendo mais de 8.000 linhas. Ninguém que dar manutenção nele. Podem me ajudar? 😊

## Como melhorar o código? Que estratégia utilizar? É hora de pensar…

Podemos observar que a classe está enorme, afinal, ela possui muitas responsabilidades já que cada banco possui uma estratégia. Que tal começar criando um Objeto/Classe para cada banco? Como possuem similaridades, é possível respeitar uma única interface — por exemplo, todos possuírem um método debitar().

````
from abc import ABC, abstractmethod


class BancoStrategy(ABC):  # Interface
    @classmethod
    @abstractmethod
    def debitar(cls):
        raise NotImplementedError


class ItauStrategy(BancoStrategy):
    @classmethod
    def debitar(cls, conta, valor):
        # Codigos específico do Itau (exemplo)
        print("Débito realizado pelo Itau")


class SantanderStrategy(BancoStrategy):
    @classmethod
    def debitar(cls, conta, valor):
        # Codigos específico do Santander (exemplo)
        print("Santander, Débito efetuado!")


class BradescoStrategy(BancoStrategy):
    @classmethod
    def debitar(cls, conta, valor):
        # Codigos específico do Bradesco (exemplo)
        print("Sucesso!")

# ... métodos para todos os bancos
````

As classes foram colocadas juntas no mesmo arquivo como forma de facilitar a visualização. Considere que cada uma já pode estar em seu respectivo arquivo.

O último passo será criar a classe Banco, que receberá como parâmetro a estratégia escolhida:

````
from itau_strategy import ItauStrategy
from santander_strategy import SantanderStrategy
from bradesco_strategy import BradescoStrategy

class Banco:
    def __init__(self, banco_strategy):
        self.__banco_strategy = banco_strategy

    def debitar(self, conta, valor):
        self.__banco_strategy.debitar(conta, valor)

Banco(ItauStrategy).debitar(120, 123)
Banco(SantanderStrategy).debitar(110, 456)
Banco(BradescoStrategy).debitar(120, 789)
````

Como vimos, é possível transformar um código enorme em códigos menores e organizados. Com isso:

- Facilita-se, e muito, a manutenção, pois se um banco parar de funcionar, não afeta o todo (baixo acoplamento).
- Permite-se a adição e exclusão de novos bancos com maior facilidade.
- Tem-se um menor número de conflitos no Git, já que não é um arquivo único.
- Mais pessoas programadoras podem trabalhar no mesmo código.
- O código fica melhor em legibilidade, logo é melhor entendido pelas pessoas.
- Fica aberto para extensão e fechado para alteração (SOLID Open/Closed Principle).

