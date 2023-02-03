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

