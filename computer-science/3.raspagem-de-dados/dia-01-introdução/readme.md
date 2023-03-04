# Introdução

Hoje vamos aprender o que é raspagem de dados e o que podemos fazer utilizando esta técnica. Vamos ver também como fazer requisições web, analisando suas respostas e extraindo dados. Por fim, também veremos técnicas para evitar problemas com essa prática.

## Você será capaz de:
Realizar requisições web;

Analisar conteúdos HTML para extrair dados;

Aplicar técnicas de raspagem para evitar problemas como bloqueio de acesso;

Armazenar os dados obtidos em um banco de dados.

## Por que isso é importante?
Imagine que você queira fazer comparações de preços e informações, ou talvez descobrir informações sobre algum assunto. Porém todos os dados a respeito do seu assunto de interesse não estão estruturados, sendo exibidos somente em uma página web. Pois é, uma página web pode ser útil para humanos, mas certamente não é útil para fazermos análises estruturadas.

A raspagem de dados tem sido muito útil em trabalhos jornalísticos, fornecendo dados para embasar matérias, mas também pode ser útil para outros fins, como comparar preços de produtos com a concorrência; automatização de processos maçantes como buscar artigos científicos em bases acadêmicas; recuperação de documentos em sites jurídicos; analisar perfis de redes sociais; recuperar dados públicos do governo e muitos outros lugares.

## O que é raspagem de dados?

Raspagem de dados é uma técnica computacional para extrair dados provenientes de um serviço ou aplicação, estruturando-os em bancos de dados, planilhas ou outros formatos. Essa técnica consiste em extrair dados de sites e transportá-los para um formato mais simples e maleável para que possam ser analisados e cruzados com mais facilidade.

Alguns passos aplicados nesta técnica são: realização de requisições, análise das respostas e extração dos dados, navegação do conteúdo, limpeza e armazenamento dos dados.

Agora vamos ao ver passo a passo como fazer raspagem de dados, prevenindo erros que podem acontecer. 💪

## Requisições web

A comunicação com servidores HTTP e HTTPS se dá através de requisições, nas quais utilizamos o verbo para indicar que tipo de ação deve ser tomada para um dado recurso. Devemos informar na requisição em qual recurso estamos atuando e no cabeçalho passamos algumas informações que podem ser importantes, como o tipo de resposta aceita ou o tipo de conteúdo sendo enviado.

O Python possui um pacote para lidar com o protocolo HTTP o urllib, porém seu uso é mais verboso. Por isso vamos utilizar a biblioteca requests, que possui uma interface mais amigável e é bem difundida na comunidade.

Você já pode instalar a requests dentro de um ambiente virtual, com os seguintes comandos:

````
python3 -m venv .venv && source .venv/bin/activate
python3 -m pip install requests
````

## Rate Limit
Muitas vezes a página de onde estamos removendo o conteúdo possui uma limitação de quantas requisições podemos enviar em um curto período de tempo, evitando assim ataques de negação de serviço.

Isto pode levar a um bloqueio por um curto período de tempo ou até mesmo banimento de acessar um recurso.

Uma boa prática é sempre fazermos uma pausa entre as requisições, ou lote delas, mesmo que o website onde a informação está não faça o bloqueio. Assim, evitamos tirar o site do ar.

````
import requests
import time


# Coloca uma pausa de 6 segundos a cada requisição
# Obs: este site de exemplo tem um rate limit de 10 requisições por minuto
for _ in range(15):
    response = requests.get("https://www.cloudflare.com/rate-limit-test/")
    print(response)
    time.sleep(6)
````

## Timeout
Ás vezes pedimos um recurso ao servidor, mas caso o nosso tráfego de rede esteja lento ou exista um problema interno do servidor, nossa resposta pode demorar ou até mesmo ficar travada indefinidamente.

Como garantir, após um tempo, que o recurso seja retornado? 🤔

````
import requests


try:
    # recurso demora muito a responder
    response = requests.get("http://httpbin.org/delay/10", timeout=2)
except requests.ReadTimeout:
    # vamos fazer uma nova requisição
    response = requests.get("http://httpbin.org/delay/1", timeout=2)
finally:
    print(response.status_code)
````

## Analisando respostas

Para realizar a extração de dados de um conteúdo web vamos utilizar uma biblioteca chamada parsel. Ela pode ser instalada com o comando o comando abaixo:

````
python3 -m pip install parsel
````

````
from parsel import Selector
import requests


response = requests.get("http://books.toscrape.com/")
selector = Selector(text=response.text)
print(selector)
# ...


# response = requests.get("http://books.toscrape.com/")
# selector = Selector(text=response.text)

# O título está no atributo title em um elemento âncora (<a>)
# Dentro de um h3 em elementos que possuem classe product_pod
titles = selector.css(".product_pod h3 a::attr(title)").getall()
# Estamos utilizando a::attr(title) para capturar somente o valor contido no texto do seletor

# Os preços estão no texto de uma classe price_color
# Que se encontra dentro da classe .product_price
prices = selector.css(".product_price .price_color::text").getall()

# Combinando tudo podemos buscar os produtos
# em em seguida buscar os valores individualmente
for product in selector.css(".product_pod"):
    title = product.css("h3 a::attr(title)").get()
    price = product.css(".price_color::text").get()
    print(title, price)
````

O seletor principal que contém todo o conteúdo da página pode ser utilizado em uma busca para encontrar seletores mais específicos. Podemos fazer isto utilizando a função css. Ela recebe um seletor CSS como parâmetro, embora podemos passar um tipo especial de seletor quando queremos algum valor bem específico como o texto ou um atributo.

Após definir o seletor, podemos utilizar a função get para buscar o primeiro seletor/valor que satisfaça aquela busca. A função getall é similar, porém traz todos os valores que satisfaçam aquele seletor.

Assim como temos a função css que faz a busca por seletores CSS, temos também a função xpath, que faz a busca com base em XPath.`

## Recursos paginados

Tudo certo, temos 20 livros, mas sabemos que na verdade este site possui 1000 livros. Que tal coletarmos todos?!

Navegando um pouco por entre as páginas, percebemos que cada página possui uma referência para a próxima. Mas, se a URL é sequencial, por que não jogamos valores até a página avisar que o recurso não foi encontrado? 🤔

Acontece que podemos evitar fazer requisições desnecessárias, já que a página nos informa a próxima.

O que precisamos fazer é criar um seletor com a página, extrair os dados, buscar a nova página e repetir todo o processo, até termos navegados em todas as páginas.

Até a parte da extração nós já fizemos, vamos então dar uma olhada em como buscar a próxima página:

Agora que sabemos como recuperar a próxima página, podemos iniciar na primeira página e continuar buscando livros enquanto uma nova página for encontrada. Cada vez que encontrarmos uma página, extraímos seus dados e continuamos até acabarem as páginas. Então vamos alterar tudo que tínhamos escrito no arquivo exemplo_scrape.py para o código abaixo:

````
from parsel import Selector
import requests


# Define a primeira página como próxima a ter seu conteúdo recuperado
URL_BASE = "http://books.toscrape.com/catalogue/"
next_page_url = 'page-1.html'
while next_page_url:
    # Busca o conteúdo da próxima página
    response = requests.get(URL_BASE + next_page_url)
    selector = Selector(text=response.text)
    # Imprime os produtos de uma determinada página
    for product in selector.css(".product_pod"):
        title = product.css("h3 a::attr(title)").get()
        price = product.css(".price_color::text").get()
        print(title, price)
    # Descobre qual é a próxima página
    next_page_url = selector.css(".next a::attr(href)").get()
````

## Recursos obtidos à partir de outro recurso

Agora que estamos coletando todos os livros, que tal coletarmos também a descrição de cada livro?

O problema é que a descrição só pode ser acessada navegando até a página específica de cada livro.

▶️ O primeiro passo é investigarmos como descobrir a URL que nos leva até a página de detalhes de um produto. 🔍

Com esse seletor em mãos, precisamos recuperar o atributo href que contém o link para a página de detalhes do livro. Vamos criar um outro arquivo, apenas para fazer o teste da feature que queremos implementar, depois vamos alterar o código do arquivo exemplo_scrape.py para realmente implementar a função. ⚠️Lembre-se de criar o arquivo no mesmo diretório que já estava utilizando.

````
from parsel import Selector
import requests

URL_BASE = "http://books.toscrape.com/catalogue/"

# Vamos testar com a primeira página
response = requests.get(URL_BASE + "page-1.html")
selector = Selector(text=response.text)

# Recupera o atributo href do primeiro elemento que combine com o seletor
href = selector.css(".product_pod h3 a::attr(href)").get()
print(href)

# Para obter a url completa, basta adicionar a nossa URL_BASE
print(URL_BASE + href)
````

▶️ A descrição do produto está uma tag p, “irmã” de uma tag com id product_description. Isto pode ser expresso através do seletor a.

No código, precisamos realizar uma nova requisição à página de detalhes e depois analisaremos seu conteúdo em busca da descrição do produto. Para isso, vamos alterar todo o conteúdo novamente, porém dessa vez será o conteúdo do arquivo teste.py:

````
from parsel import Selector
import requests

URL_BASE = "http://books.toscrape.com/catalogue/"

response = requests.get(URL_BASE + "page-1.html")
selector = Selector(text=response.text)

href = selector.css(".product_pod h3 a::attr(href)").get()
detail_page_url = URL_BASE + href

# baixa o conteúdo da página de detalhes
detail_response = requests.get(detail_page_url)
detail_selector = Selector(text=detail_response.text)

# recupera a descrição do produto
# ~ significa a tag irmã
description = detail_selector.css("#product_description ~ p::text").get()
print(description)
````

▶️ Por fim, vamos adicionar a lógica para buscar a descrição do produto no nosso código existente:

````
# from parsel import Selector
# import requests


# URL_BASE = "http://books.toscrape.com/catalogue/"
# Define a primeira página como próxima a ter seu conteúdo recuperado
# next_page_url = 'page-1.html'
while next_page_url:
    # Busca o conteúdo da próxima página
    # response = requests.get(URL_BASE + next_page_url)
    # selector = Selector(text=response.text)
    # Imprime os produtos de uma determinada página
    for product in selector.css(".product_pod"):
        # Busca e extrai o título e  o preço
        # title = product.css("h3 a::attr(title)").get()
        # price = product.css(".price_color::text").get()
        # print(title, price)

        # Busca o detalhe de um produto
        detail_href = product.css("h3 a::attr(href)").get()
        detail_page_url = URL_BASE + detail_href

        # Baixa o conteúdo da página de detalhes
        detail_response = requests.get(detail_page_url)
        detail_selector = Selector(text=detail_response.text)

        # Extrai a descrição do produto
        description = detail_selector.css("#product_description ~ p::text").get()
        print(description)

    # Descobre qual é a próxima página
    # next_page_url = selector.css(".next a::attr(href)").get()
````

## Limpeza de dados

 Estamos extraindo nossos dados, porém estes dados contém algumas “sujeiras” que podem atrapalhar em nossas análises. Por exemplo, pare pra olhar o preço do livro, viu algo diferente? O preço possui um caractere estranho Â£26.08 antes do seu valor. E a descrição do livro que contém o sufixo ...more.

 Seria conveniente, antes de estruturar e armazenar estes dados, que fizéssemos uma limpeza neles.

 No caso do valor, poderíamos utilizar uma expressão regular para remover os outros caracteres. O padrão é conter um símbolo de libra, seguido por números, ponto para separar casas decimais e dois números como casas decimais. Essa expressão regular pode ser feita da seguinte forma: £\d+\.\d{2}.

 Agora, para utilizar a expressão regular que fizemos, podemos substituir o método getall pelo método re, ou o método get por re_first. Ambos, além de recuperar valores, aplicarão a expressão regular sobre aquele valor.

 Vamos primeiro fazer essas features, novamente, no arquivo de clean_crawer.py para vermos funcionando. Depois vamos implementá-las no arquivo exemplo_scrape.py:

 ````
 from parsel import Selector
import requests


response = requests.get("http://books.toscrape.com/")
selector = Selector(text=response.text)
# Extrai todos os preços da primeira página
prices = selector.css(".product_price .price_color::text").re(r"£\d+\.\d{2}")
print(prices)
````

 Já para o caso do sufixo ...more, poderíamos utilizar fatiamento para removê-lo. Mas antes é importante verificarmos se o conteúdo possui o sufixo, evitando assim perda de conteúdo de forma acidental. Vamos ver como isso funciona no arquivo clean_crawer_2.py:

 ````
 from parsel import Selector
import requests


response = requests.get("http://books.toscrape.com/catalogue/a-light-in-the-attic_1000/index.html")
selector = Selector(text=response.text)

# Extrai a descrição
description = selector.css("#product_description ~ p::text").get()
print(description)

# "Fatiamos" a descrição removendo o sufixo
suffix = "...more"
if description.endswith(suffix):
    description = description[:-len(suffix)]
print(description)
````

 Alguns outros exemplos de “sujeiras” são valores que contém tabulações, quebras de linha ou conteúdo além do esperado.

Agora vamos implementar essas funcionalidades no nosso arquivo exemplo_scrape.py:

````
from parsel import Selector
import requests


# URL_BASE = "http://books.toscrape.com/catalogue/"
# Define a primeira página como próxima a ter seu conteúdo recuperado
# next_page_url = 'page-1.html'
# while next_page_url:
    # Busca o conteúdo da próxima página
    # response = requests.get(URL_BASE + next_page_url)
    # selector = Selector(text=response.text)
    # Imprime os produtos de uma determinada página
    # for product in selector.css(".product_pod"):
        # Busca e extrai o título e  o preço
        # title = product.css("h3 a::attr(title)").get()
        price = product.css(".product_price .price_color::text").re(r"£\d+\.\d{2}")
        # print(title, price)

        # Busca o detalhe de um produto
        # detail_href = product.css("h3 a::attr(href)").get()
        # detail_page_url = URL_BASE + detail_href

        # Baixa o conteúdo da página de detalhes
        # detail_response = requests.get(detail_page_url)
        # detail_selector = Selector(text=detail_response.text)

        # Extrai a descrição do produto
        # description = detail_selector.css("#product_description ~ p::text").get()
        suffix = "...more"
        if description.endswith(suffix):
            description = description[:-len(suffix)]
        # print(description)

    # Descobre qual é a próxima página
    # next_page_url = selector.css(".next a::attr(href)").get()
````


👀 De olho na dica: Strings em Python possuem vários métodos para ajudarem nesta limpeza, como por exemplo, o strip. Para ler a documentação e procurar esses métodos, execute help(str) no seu terminal interativo.

## Fatiamento

Estruturas de dados do tipo sequência, como listas, tuplas e strings, podem ter seus elementos acessados através de um índice:

````
# Recupera o primeiro elemento
[1, 2, 3][0]  # Saída: 1
````

Podemos também definir dois índices que serão o valor inicial e final de uma subsequência da estrutura. Ou três valores, sendo o último o tamanho do passo que daremos ao percorrer a subsequência:

````
# Quando não incluso o valor inicial, iniciaremos do índice 0
# e do índice 2 em diante, os elementos não são incluídos
(1, 2, 3, 4)[:2]  # Saída: (1, 2)

# Quando omitimos o valor final
# o fatiamento ocorre até o fim da sequência
(1, 2, 3, 4)[1:]  # Saída: (2, 3, 4)

# Vá do índice 3 até o 7.
# O item no índice 7 não é incluído
"palavra"[3:7]  # Saída: "avra"

# Começando do elemento de índice 1, vá até o último,
# saltando de 2 em 2
[1, 2, 3, 4][1::2]  # Saída: [2, 4]
````

Chamamos esta operação de fatiamento. Ela é muito utilizada para obtermos uma subsequência de uma sequência.

⚠️À partir da versão 3.9 do Python, teremos uma função chamada removesuffix, que é equivalente à palavra[:-len(suffix)].

## Banco de Dados

Agora que temos nossos dados, precisamos armazenar esta informação. Para isto utilizaremos o MongoDB que, como já estudamos, é um banco de dados de documentos, que armazena dados em formato JSON (BSON). Precisaremos de uma biblioteca para nos comunicarmos com o sistema de gerenciamento do banco de dados, e a mais popular e robusta é a pymongo. Podemos instalá-la com o comando:

Lembre-se que para testar o código abaixo você deve criar um ambiente virtual e instalar o pymongo conforme é ensinado abaixo.

````
python3 -m venv .venv && source .venv/bin/activate
python3 -m pip install pymongo
````

Após a instalação vamos ver como podemos realizar a escrita e leitura neste banco de dados. O primeiro passo é criar uma conexão com o banco de dados e isto pode ser feito da seguinte maneira:

⚠️ Lembre-se que o MongoDB deve estar preparado para ser acessado do “outro lado” dessa operação!.

````
from pymongo import MongoClient

client = MongoClient()
# o banco de dados catalogue será criado se não existir
db = client.catalogue
# a coleção books será criada se não existir
students = db.books
client.close()  # fecha a conexão com o banco de dados
````

Para adicionarmos documentos à nossa coleção utilizamos o método insert_one:

````
from pymongo import MongoClient

client = MongoClient()
db = client.catalogue
# book representa um dado obtido na raspagem
book = {
    "title": "A Light in the Attic",
}
document_id = db.books.insert_one(book).inserted_id
print(document_id)
client.close()  # fecha a conexão com o banco de dados
````

Quando um documento é inserido, um _id único é gerado e retornado. Também podemos fazer inserção de múltiplos documentos de uma vez da seguinte forma:

````
from pymongo import MongoClient

client = MongoClient()
db = client.catalogue
documents = [
    {
        "title": "A Light in the Attic",
    },
    {
        "title": "Tipping the Velvet",
    },
    {
        "title": "Soumission",
    },
]
db.books.insert_many(documents)
client.close()  # fecha a conexão com o banco de dados
````

Buscas podem ser feitas utilizando os métodos find ou find_one:

````
from pymongo import MongoClient

client = MongoClient()
db = client.catalogue
# busca um documento da coleção, sem filtros
print(db.books.find_one())
# busca utilizando filtros
for book in db.books.find({"title": {"$regex": "t"}}):
    print(book["title"])
client.close()  # fecha a conexão com o banco de dados
````

O nosso cliente é um gerenciador de contexto (with), logo podemos utilizá-lo como tal, evitando problemas com o fechamento da conexão com o banco de dados:

````
from pymongo import MongoClient


with MongoClient() as client:
    db = client.catalogue
    for book in db.books.find({"title": {"$regex": "t"}}):
        print(book["title"])
````

## Bônus

### Scrapy
🕷 Uma excelente e poderosa ferramenta para raspagem de dados é a Scrapy. Ela possui, em sua implementação, todos os mecanismos citados anteriormente e outros recursos adicionais.

Vale a pena dar uma olhadinha! 😉


