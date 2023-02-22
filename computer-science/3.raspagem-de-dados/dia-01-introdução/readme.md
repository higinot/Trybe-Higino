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