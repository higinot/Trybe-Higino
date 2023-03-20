# Introdução
O que vamos aprender
Hoje daremos continuidade ao nosso aprendizado sobre raspagem de dados. Aprenderemos duas outras ferramentas utilizadas para web scraping: o Selenium e o Beautiful Soup. Veremos como fazer requisições web e como utilizá-las para extrair as informações que precisamos das respostas dessas requisições.

### Você será capaz de

- Realizar requisições web;
- Analisar conteúdos HTML a fim de extrair dados;
- Utilizar a ferramenta Selenium para extrair dados;
- Utilizar a biblioteca Beautiful Soup para extrair dados;

## Por que isso é importante?

Utilizar dados encontrados na web é algo bem comum no cotidiano de pessoas desenvolvedoras. Contudo, esses dados nem sempre estão disponíveis via API ou arquivos .csv. Inúmeras vezes as informações desejadas só estão disponíveis como parte de uma página web, e nessas horas o web scraping é extremamente útil em facilitar o acesso a essas informações.

Você já viu anteriormente como fazer o scraping de uma página utilizando a biblioteca requests em conjunto com a ferramenta parsel, mas como é bem comum no mundo do desenvolvimento haver inúmeras maneiras de se fazer algo, há uma boa variedade de ferramentas que podem te auxiliar a fazer raspagem de dados, cada uma com suas particularidades e pontos fortes.

Hoje você conhecerá mais duas ferramentas para este propósito, para que possa aumentar seu repertório de como fazer raspagem em páginas web, aprender a contornar alguns problemas e quem sabe até já eleger suas favoritas.

# Selenium

Essencialmente, o Selenium é um conjunto de ferramentas para automação de navegadores da web, que permite controlar remotamente instâncias de navegadores e emular a interação de um usuário com o navegador.

No núcleo do Selenium está o WebDriver, uma API e protocolo que define uma interface para controlar o comportamento dos navegadores web. É através do WebDriver que o Selenium suporta a automação dos principais navegadores do mercado.

Cada navegador possui uma implementação específica do WebDriver, chamada de driver, que é o componente responsável por delegar e manipular a comunicação entre o Selenium e o navegador.

Para utilizar o Selenium é necessário instalar as bibliotecas de acordo com a linguagem que você utilizará, além de ter instalado o navegador que deseja usar e o driver correspondente para ele.

Após essas instalações, com apenas algumas linhas de código podemos criar uma instância de navegador para simular um acesso real a um site, como uma pessoa utilizando o browser faria.

Essa função pode ser extremamente útil quando falamos de raspagem de dados, pois em Single Page Applications, por exemplo, como sites construídos em React, só após uma requisição para a página é que o conteúdo será montado e as informações estarão disponíveis para serem consultadas. Simulando um acesso de uma pessoa real ao site, o Selenium pode evitar que o resultado da consulta volte vazio nesses casos.

Por exemplo, se você usar a biblioteca requests para fazer uma requisição do tipo get em um site feito em React, você vai receber de volta um HTML relativamente simples, somente com um elemento root e um código JavaScript grande, que seria o responsável por criar dinamicamente a página web. Acontece que esse código JavaScript não é rodado pelo Python, permanecendo apenas um texto, fazendo com que sua página nunca seja montada e que você não ache as informações que desejava. Já o Selenium cria uma instância de um navegador, por exemplo o Firefox, e de fato executa o JavaScript como se fosse uma pessoa acessando o site pelo navegador normalmente, e somente após o site terminar de carregar é que o scrape é feito.

## Instalação do Selenium
Podemos utilizar o Selenium tanto instalado diretamente em nossa máquina, quanto através de um container Docker. A seguir teremos o passo a passo das duas formas de instalação da ferramenta, mas você precisa seguir apenas uma delas, a escolha fica inteiramente a seu critério, para conseguir executar o exemplo desenvolvido ao longo do conteúdo.

Independentemente da forma escolhida, lembre-se de criar um ambiente virtual antes de instalar bibliotecas.

👀 De olho na dica: para recordar como criar um ambiente isolado, acesse este conteúdo.

### Instalação utilizando o Docker
Ao optar por essa instalação, é essencial ter o Docker instalado em seu computador. Para consultar como fazer a instalação você pode acessar este conteúdo.

A imagem que utilizaremos do Selenium é a selenium/standalone-firefox:

````
docker pull selenium/standalone-firefox:106.0
````

### Iniciando a imagem Docker
Para efetivamente começar a utilizar o Selenium, precisaremos inicializar a imagem Docker que baixamos anteriormente. Na documentação da imagem recomendada anteriormente às pessoas que utilizam Linux ou MacOS sem o novo processador M1, especificamente na seção Using your browser (no VNC client is needed), que permite a inspeção visual da atividade do container através do navegador, encontramos os comandos que utilizaremos a seguir.

Faremos uma única adaptação, que é acrescentar a flag --name para nomear o container e facilitar sua manipulação.

````
docker run -d -p 4444:4444 -p 7900:7900 --shm-size 2g --name firefox selenium/standalone-firefox:106.0
````
As flags utilizadas acima têm as seguintes finalidades:

- -d serve para rodar o container em segundo plano
- -p vincula uma porta do SO a outra porta dentro do container
- --shm-size aumenta o limite de quantidade de memória compartilhada com o container
- --name define qual vai ser o nome do container
- --platform (somente se utilizado) diz ao docker qual a plataforma deve ser usada

## Primeiros passos com o Selenium
Vamos criar um arquivo para fazer nossos primeiros experimentos com o Selenium! 🚀

👀 De olho na dica: é importante evitar utilizar os nomes das bibliotecas e ferramentas para nomear os arquivos.

⚠️ Para que o código do exemplo funcione, lembre-se que é necessário ter o Firefox instalado no seu computador.

Agora vamos colocar a mão na massa! Crie o seguinte arquivo:

````
# importação do webdriver, que é o que possibilita a implementação para todos
# os principais navegadores da web
from selenium import webdriver

# Para usar o chrome ao invés do firefox trocamos FirefoxOptions por ChromeOptions
# Todavia, caso esteja utilizando o docker, atente-se ao container sendo utilizado.
options = webdriver.FirefoxOptions()
options.add_argument('--ignore-certificate-errors')
options.add_argument('--ignore-ssl-errors=yes')
options.add_argument('--start-maximized')

firefox = webdriver.Remote(command_executor="http://localhost:4444/wd/hub", options=options)

# requisições para essa instância criada utilizando o método `get`
response = firefox.get("https://www.python.org/")

# espera 10 segundos
sleep(10)
# encerra o navegador, importante quando usamos containers
firefox.quit()
````
Daqui para frente, utilizaremos como base o código em que a instalação foi feita diretamente na máquina, por isso tenha atenção nas linhas que trazem as options e a que faz a definição de firefox, pois elas não poderão ser removidas no caso de você estar utilizando Docker. O restante do código pode seguir as instruções dos próximos passos normalmente.

Você pode instruir o navegador a realizar diversas operações através do código. Para dar um exemplo e evidenciar o potencial do Selenium, com apenas três linhas conseguimos fazer com que logo após abrir o navegador, algo seja digitado no campo de pesquisa e o selenium pressione enter para efetivar a busca:

````
# from selenium import webdriver
from selenium.webdriver.common.keys import Keys # Importa teclas comuns

# firefox = webdriver.Firefox()

response = firefox.get("https://www.google.com.br/")

# pesquisa na instância aberta do navegador pela primeira ocorrência
# do nome 'q'
search_input = firefox.find_element("name", "q")

# escreve selenium dentro do campo de pesquisa
search_input.send_keys("selenium")

# pressiona enter para realizar a busca
search_input.send_keys(Keys.ENTER)
````

Partindo para a parte que nos interessa, a de web scraping, vamos juntar os conhecimentos da última aula ao que já vimos hoje e pegar algumas informações dos livros de uma página dedicada para treinar scraping.

 Selenium tem vários métodos públicos, como o find_element que usamos anteriormente e o find_elements (no plural), utilizados para localizar o primeiro elemento correspondente ao resultado do filtro ou todos os elementos que se encaixarem na busca, respectivamente.

Também podemos utilizar o By para especificar um elemento CSS ou XPATH que será buscado, para isso é necessário importá-lo via:

`from selenium.webdriver.common.by import By`

Nesse caso, devemos passar dois parâmetros: o primeiro parâmetro define o que você irá buscar e o segundo o filtro da nossa pesquisa. Abaixo temos duas opções no que diz respeito ao que estamos buscando, uma delas utilizando o By e a outra no formato previamente utilizado (quando buscamos pelo campo de nome q no exemplo acima).


| Com o By | Sem o By|
| -------- | -------- |
| By.ID | “id” |
| By.NAME | “name” |
| By.XPATH | “xpath” |
| By.LINK_TEXT| “link text” |
| By.PARTIAL_LINK_TEXT| “partial link text” |
| By.TAG_NAME| “tag name” |
| By.CLASS_NAME| “class name”|
| By.CSS_SELECTOR| 	“css selector” |

Assim como quando utilizamos a lib requests, inspecionar a página que queremos raspar é imprescindível para entendermos a estrutura de como a página foi montada e quais elementos devemos selecionar para buscar as informações que queremos.

````
from selenium import webdriver

# Importa o By
from selenium.webdriver.common.by import By

firefox = webdriver.Firefox()

firefox.get("https://books.toscrape.com/")


# Define a função que fará o scrape da URL recebida
def scrape(url):
    firefox.get(url)

    # Itera entre os elementos com essa classe
    for book in firefox.find_elements(By.CLASS_NAME, "product_pod"):
        # Cria dict vazio para guardar os elementos capturados
        new_item = {}

        # Cria uma chave 'title' no dict que vai receber o resultado da busca
        # O título está em uma tag anchor que está dentro de uma tag 'H3'
        new_item["title"] = (
            book.find_element(By.TAG_NAME, "h3")
            .find_element(By.TAG_NAME, "a")
            .get_attribute("innerHTML")
        )

        # O trecho do book está em um elemento da classe 'price_color'
        new_item["price"] = book.find_element(
            By.CLASS_NAME, "price_color"
        ).get_attribute("innerHTML")

        # O link está dentro de um atributo 'href'
        new_item["link"] = (
            book.find_element(By.CLASS_NAME, "image_container")
            .find_element(By.TAG_NAME, "a")
            .get_attribute("href")
        )

        print(new_item)


scrape("https://books.toscrape.com/")
````

Utilizamos bastante no código acima o método get_attribute. A razão disso é que com o Selenium, o elemento retornado depois da busca pelo atributo CSS será do tipo webdriver e não texto. É justamente para fazer essa conversão que utilizamos esse método especificando o atributo ‘innerHTML’ ou ‘href’, por exemplo.

Também utilizamos o método find_element encadeado para procurar um elemento dentro de outro elemento, como fizemos para pegar o link, por exemplo, que era um elemento âncora dentro de uma div.

Certo, mas até agora só pegamos informações dos livros da primeira página do site, como fazemos para pegar todos os livros, até a última página? 🤔

- Primeiro precisamos organizar nosso código e determinar que o retorno da função scrape salve o resultado da raspagem em uma lista.
- Em seguida, temos que criar uma nova lista para abrigar os dados de uma página;
- Depois devemos acessar o botão para ir para a próxima página e lá refazer o processo de salvar todas as informações solicitadas, repetindo esse mecanismo até todas as páginas serem percorridas.

Vamos ver como fazer isso com Selenium?

````
# from selenium import webdriver

# from selenium.webdriver.common.by import By


# firefox = webdriver.Firefox()


# def scrape(url):
#     firefox.get(url)

    books = []

#     for book in firefox.find_elements(By.CLASS_NAME, "product_pod"):
#         new_item = {}

#         new_item["title"] = (
#             book.find_element(By.TAG_NAME, "h3")
#             .find_element(By.TAG_NAME, "a")
#             .get_attribute("innerHTML")
#         )

#         new_item["price"] = book.find_element(
#             By.CLASS_NAME, "price_color"
#         ).get_attribute("innerHTML")

#         new_item["link"] = (
#             book.find_element(By.CLASS_NAME, "image_container")
#             .find_element(By.TAG_NAME, "a")
#             .get_attribute("href")
#         )

        books.append(new_item)
    return books

firefox.get("https://books.toscrape.com/")

all_books = []
url2request = "https://books.toscrape.com/"

# Cria uma variável com o seletor que captura o link do botão de passar para
# a próxima página
next_page_link = (
    firefox.find_element(By.CLASS_NAME, "next")
    .get_attribute("innerHTML")
)

# Enquanto este botão de 'next' existir na página ele irá iterar
while next_page_link:

    # Usa o método extend para colocar todos os elementos de uma lista dentro
    # de outra
    all_books.extend(scrape(url2request))
    url2request = (
        firefox.find_element(By.CLASS_NAME, "next")
        .find_element(By.TAG_NAME, "a")
        .get_attribute("href")
    )

print(all_books)
````

Observando o navegador aberto com a execução do código, você verá que ele abriu na página solicitada e em seguida começou a percorrer as páginas do site, o que indica que tudo está correndo bem. Contudo, pouco antes de finalizar, já na última página, no terminal aparece uma exceção do Selenium chamada ‘NoSuchElementException’.

Pela mensagem fica mais fácil de entender o que deu errado. Ao entrar na última página, ele fez a raspagem de todas as informações pedidas, porém o passo seguinte foi impossível de executar já que precisava achar o botão ‘next’ para alterar o link na variável url2request. A forma mais simples de resolver este erro é importar a exceção do Selenium e tratá-la com um try, de forma que ao ocorrer esta situação o loop seja quebrado.

````
# from selenium import webdriver

# from selenium.webdriver.common.by import By

# from selenium.common.exceptions import NoSuchElementException

# firefox = webdriver.Firefox()


# def scrape(url):
#     firefox.get(url)

#     books = []

#     for book in firefox.find_elements(By.CLASS_NAME, "product_pod"):
#         new_item = {}

#         new_item["title"] = (
#             book.find_element(By.TAG_NAME, "h3")
#             .find_element(By.TAG_NAME, "a")
#             .get_attribute("innerHTML")
#         )

#         new_item["price"] = book.find_element(
#             By.CLASS_NAME, "price_color"
#         ).get_attribute("innerHTML")

#         new_item["link"] = (
#             book.find_element(By.CLASS_NAME, "image_container")
#             .find_element(By.TAG_NAME, "a")
#             .get_attribute("href")
#         )

#         books.append(new_item)
#     return books


# firefox.get("https://books.toscrape.com/")

# all_books = []
# url2request = "https://books.toscrape.com/"

# next_page_link = (
#     firefox.find_element(By.CLASS_NAME, "next")
#     .get_attribute("innerHTML")
# )

# while next_page_link:

#     all_books.extend(scrape(url2request))
    try:
        url2request = (
            firefox.find_element(By.CLASS_NAME, 'next')
            .find_element(By.TAG_NAME, 'a').get_attribute('href')
        )
    except NoSuchElementException:
        print("exception handled")
        break

# print(all_books)
````

Agora sim, após uma eternidade percorrer todas as páginas do site temos as informações que queremos de todos os 1000 livros lá existentes! 🥳

Antes de partirmos para a próxima ferramenta que veremos hoje, aqui vai uma última dica: é muito legal ver o navegador abrir e executar os comandos que definimos, porém quando não precisamos ou não queremos ver essa execução, podemos evitá-la utilizando as options. Basta importá-las do webdriver, adicionar um novo argumento com a opção que deseja e depois passá-la como parâmetro para a instância de navegador criada.

💡 Caso queira explorar outras possibilidades oferecidas pelas options, você pode consultar este link da documentação. Ele redireciona para as opções disponíveis para o Firefox, mas na mesma página você encontra menus para consultar sobre outros navegadores.

# Beautiful Soup

Beautiful Soup é uma biblioteca Python para extrair dados de arquivos HTML e XML. Ela é de grande valia para analisar esses arquivos e fornecer maneiras mais simples de navegar, pesquisar e modificar a árvore de análise, podendo economizar várias horas de trabalho.

Veremos como utilizar alguns dos recursos do Beautiful Soup 4, mas antes de analisar as informações precisamos baixar o conteúdo da página que queremos utilizar.

## Primeiros passos
Com base no que você já sabe sobre web scraping, já pode ter uma ideia de ferramentas que podemos usar para fazer a requisição para a página e baixar seu conteúdo HTML.

Para nosso exemplo, usaremos a biblioteca requests(especificamente na versão 2.27.1) e faremos uma requisição do tipo get para uma página de frases.

````
import requests

url = "https://quotes.toscrape.com"
page = requests.get(url)
print(page.content)
````
Com o conteúdo da página baixado, vamos ao que interessa, ver como utilizar o Beautiful Soup para fazer sua análise!

## Instalação das bibliotecas
⚠️ Lembre-se de estar em um ambiente virtual antes de fazer as instalações de bibliotecas.

Para instalar as bibliotecas Beautiful Soup e requests basta digitar em seu terminal:

`pip3 install beautifulsoup4==4.11.1 requests==2.27.1`

Agora podemos importar a lib em nosso arquivo e começar a explorar as funcionalidades e facilidades que a ferramenta oferece.

````
# import requests
from bs4 import BeautifulSoup

# url = "https://quotes.toscrape.com"
# page = requests.get(url)
html_content = page.text

# Cria uma instância do objeto Beautiful Soup e usa o parser de HTML nativo
# do Python
soup = BeautifulSoup(html_content, "html.parser")

# Utiliza o método prettify para melhorar a visualização do conteúdo
print(soup.prettify())
````

O retorno desse código é o HTML da página, já formatado de uma forma muito amigável para a leitura, não concorda?

## Tipos de objetos do Beautiful Soup
O Beautiful Soup transforma um documento HTML complexo em uma árvore de objetos Python. Os quatro tipos de objetos que podemos lidar são Tag, NavigableString, BeautifulSoup e Comment. Na documentação, que está disponível inclusive em português, existe uma seção inteira dedicada aos tipos de objetos, mas destacaremos aqui apenas os dois primeiros.

## Tag
Em suma, um objeto do tipo Tag corresponde a uma tag XML ou HTML do documento original. Toda tag possui um nome acessível através de .name. Por exemplo, quando vemos header, ele é um elemento do tipo tag e o nome dessa tag é header.

As tags também podem ter atributos, como classes, ids e etc. Esses atributos são acessíveis considerando tag como um dicionário e como podem receber múltiplos valores, são apresentados em forma de lista.

````
# import requests
# from bs4 import BeautifulSoup

# url = "https://quotes.toscrape.com"
# page = requests.get(url)
# html_content = page.text

# soup = BeautifulSoup(html_content, "html.parser")


# acessando a tag 'title'
title = soup.title

# retorna o elemento HTML da tag
print(title)

# o tipo de 'title' é tag
print(type(title))

# o nome de 'title' é title
print(title.name)

# acessando a tag 'footer'
footer = soup.footer

# acessando o atributo classe da tag footer
print(footer['class'])
````

## NavigableString
Uma string corresponde a um texto dentro de uma tag e esse texto fica armazenado na classe NavigableString.

````
# import requests
# from bs4 import BeautifulSoup

# url = "https://quotes.toscrape.com"
# page = requests.get(url)
# html_content = page.text

# soup = BeautifulSoup(html_content, "html.parser")

# title = soup.title
# footer = soup.footer

# retorna o elemento HTML da tag
print(title)

# Acessando a string de uma tag
print(title.string)

# Verificando o tipo dessa string
print(type(title.string))
````

## Buscando na árvore
Assim como nas outras ferramentas apresentadas até aqui, o Beautiful Soup também possui dois métodos principais para encontrar elementos. Eles são o find() e find_all() e a essa altura você já deve ter presumido que a diferença básica entre eles é que o primeiro retorna apenas o primeiro elemento que corresponder ao filtro, enquanto o segundo retorna a lista de todos os elementos que baterem com o filtro.

Há várias possibilidades de filtros a serem utilizados dentro dos métodos descritos acima, de strings e regex, até funções, e ler a documentação é essencial para garantir que você está utilizando o método mais adequado para buscar os dados que deseja.

Existem algumas informações que são bem comuns de querermos extrair, como os valores das ocorrências de determinada tag, de um atributo ou mesmo todo o texto da página.

👀 De olho na dica: Ao executar o código abaixo, tente executar uma impressão por vez, deixando os demais prints comentados enquanto isso, para ter uma melhor visualização dos retornos. 😉

````
# import requests
# from bs4 import BeautifulSoup

# url = "https://quotes.toscrape.com"
# page = requests.get(url)
# html_content = page.text

# soup = BeautifulSoup(html_content, "html.parser")

# Imprime todas as ocorrências da tag "p" da página ou uma lista vazia,
# caso nenhum elemento corresponda a pesquisa
print(soup.find_all("p"))

# Imprime o elemento com o id especificado ou "None",
# caso nenhum elemento corresponda a pesquisa
print(soup.find(id="quote"))

# Imprime todo o texto da página
print(soup.get_text())

# Imprime todas as "divs" que possuam a classe "quote" ou uma lista vazia,
# caso nenhum elemento corresponda a pesquisa
print(soup.find_all("div", {"class": "quote"}))
````
Por debaixo dos panos, soup.find_all("p") e soup.find_all(name="p") são a mesma coisa, da mesma forma que soup.find(id="quote") é o mesmo que soup.find(attrs={"id": "quote"}). Isso se deve ao fato de argumentos nomeados diferentes de name, attrs, recursive, string e limit serem todos colocados no dicionário dentro do parâmetro attrs.

Para dar uma visão geral do que podemos utilizar e da simplicidade de fazer scraping com o Beautiful Soup, vamos fazer algo similar ao que fizemos no exemplo de Selenium e raspar as informações de uma página de notícias do site Tecmundo.

````
import requests
from bs4 import BeautifulSoup


# Acessa uma URL e retorna um objeto do Beautiful Soup
def get_html_soup(url):
    page = requests.get(url)
    html_page = page.text

    soup = BeautifulSoup(html_page, "html.parser")
    soup.prettify()
    return soup


# Recebe um objeto soup e retorna informações das notícias de uma página
def get_page_news(soup):

    # Define uma lista vazia a ser populada com os dados do scraping
    news = []

    # Percorre todos os elementos da tag 'article' com a classe especificada
    for post in soup.find_all(
        "article", {"class": "tec--card tec--card--medium"}
    ):

        # Cria um dicionário para guardar os elementos a cada iteração
        item = {}

        # Cria um item chamado tag no dicionário para guardar a tag do post
        # Primeiro pesquisa pela div com a classe específica
        # Depois pela tag 'a' dentro dos resultados do primeiro filtro
        # Por fim, traz o resultado da string dentro da tag a
        item["tag"] = post.find("div", {"class": "tec--card__info"}).a.string

        # Mesma lógica da busca anterior
        item["title"] = post.find("h3", {"class": "tec--card__title"}).a.string

        # Parecido com o que foi feito anteriormente, mas dessa vez pega
        # o atributo 'href' dentro da tag 'a'
        item["link"] = post.find("h3", {"class": "tec--card__title"}).a["href"]

        # Mesma lógica da primeira busca, mas trazendo a string dentro da 'div'
        # direto
        item["date"] = post.find(
            "div", {"class": "tec--timestamp__item z--font-semibold"}
        ).string

        # Mesma lógica da busca anterior
        item["time"] = post.find(
            "div", {"class": "z--truncate z-flex-1"}
        ).string

        # Adiciona os itens criado no dicionário à lista 'news'
        news.append(item)

    return news


print(get_page_news(get_html_soup("https://www.tecmundo.com.br/novidades")))
````
Para fazer a paginação e extrair todas as notícias do site, a lógica é bem similar a utilizada com o Parsel e o Selenium.

````
# import requests
# from bs4 import BeautifulSoup


# # Acessa uma URL e retorna um objeto do Beautiful Soup
# def get_html_soup(url):
#     page = requests.get(url)
#     html_page = page.text

#     soup = BeautifulSoup(html_page, "html.parser")
#     soup.prettify()
#     return soup


# # Recebe um objeto soup e retorna informações das notícias de uma página
# def get_page_news(soup):

#     news = []

#     for post in soup.find_all(
#         "article", {"class": "tec--card tec--card--medium"}
#     ):

#         item = {}

#         item["tag"] = post.find("div", {"class": "tec--card__info"}).a.string

#         item["title"] = post.find("h3", {"class": "tec--card__title"}).a.string

#         item["link"] = post.find("h3", {"class": "tec--card__title"}).a["href"]

#         item["date"] = post.find(
#             "div", {"class": "tec--timestamp__item z--font-semibold"}
#         ).string

#         item["time"] = post.find(
#             "div", {"class": "z--truncate z-flex-1"}
#         ).string

#         news.append(item)

#     return news


# Recebe um objeto soup e retorna o link que redireciona
# para a página seguinte, caso ele exista
def get_next_page(soup_page):
    try:

        # Busca pela tag 'a' com as classes específicas do link desejado
        return soup_page.find(
            "a",
            {"class": "tec--btn"},
        )["href"]
    except TypeError:
        return None


# Recebe uma URL e retorna uma lista com todas as notícias do site
def scrape_all(url):
    all_news = []

    # Enquanto a pesquisa pelo link que vai para a página seguinte existir
    while get_next_page(get_html_soup(url)) is not None:

        # Imprime a URL da página seguinte
        print(get_next_page(get_html_soup(url)))

        # Adiciona os elementos da lista com as notícias de cada
        # página na lista 'all_news'
        all_news.extend(get_page_news(get_html_soup(url)))

        # define a página seguinte como URL para a próxima iteração
        url = get_next_page(get_html_soup(url))

    return all_news


# Vamos começar perto das últimas páginas pra não ter que fazer a requisição
# do site inteiro
print(scrape_all("https://www.tecmundo.com.br/novidades?page=11030"))
````
As duas ferramentas que você viu hoje te deram mais possibilidades de fazer raspagem de dados e podem ampliar seu ferramental para ir muito além na sua carreira, explorando outras funcionalidades delas, buscando como integrá-las ou até mesmo procurando outras ferramentas que tragam ainda mais simplicidade e praticidade ao que você precisa fazer.

Veja agora o vídeo que mostra o uso do Beautiful Soup na prática.'
