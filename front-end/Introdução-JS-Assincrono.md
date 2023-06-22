# Introdução - JavaScript assíncrono
A forma mais comum de lidar com códigos assíncronos em Javascript são as Promises. Mas, antes de falarmos sobre elas, você sabe o que é um código assíncrono!?

## Por que usar códigos assíncronos

A principal vantagem de se trabalhar com um código assíncrono é poder executar outras funções sem travar a execução do programa principal enquanto o resultado da função assíncrona não é finalizado.

Existem várias situações onde você irá precisar trabalhar com códigos assíncronos, como, por exemplo:

- Leitura e escrita de arquivos: como operações em disco tendem a ser demoradas, geralmente elas são realizadas de forma assíncrona.

- Acesso a alguns recursos do navegador: recursos que dependem de hardware, como lidar com a câmera, por exemplo.

- Fazer requisições externas: esse provavelmente é o cenário onde a assincronicidade é mais utilizada. É necessário aguardar uma resposta do servidor após fazer uma requisição sem travar a execução do resto do sistema.

## Promises

Promises são ferramentas poderosas que o Javascript possui para lidar com códigos assíncronos, por isso vamos nos aprofundar nesse assunto.

>> Promise é um objeto usado para processamento assíncrono. Um Promise (de “promessa”) representa um valor que pode estar disponível agora, no futuro ou nunca.

### Estados da promise
Uma promise pode ter três estados:

- pending (pendente): é o estado inicial dela, ou seja, ela ainda está aguardando o término da execução do código assíncrono;

- fulfilled (realizada): quando a operação assíncrona foi realizada com sucesso. Também é comum dizer que quando a promise está nesse estado ela está resolvida;

- rejected (rejeitada): quando a operação assíncrona termina com algum erro.

## Construindo uma promise

Se quisermos criar nossas próprias promises podemos usar o construtor new Promise() para criar uma nova promise. Esse construtor recebe uma função como parâmetro e essa função deverá ter dois argumentos: a função resolve e a função reject.

``new Promise((resolve, reject) => {});``

Os parâmetros resolve e reject serão usados para definirmos qual o estado que promise terá quando for finalizada.

- Quando a promise for resolvida, usamos a função resolve;
- Quando a promise for rejeitada, usamos a função reject.

## Os métodos Then, Catch e Finally

Os métodos .then(), .catch(), e .finally() são utilizados em promessas no JavaScript para lidar com o fluxo de execução assíncrona e tratar erros. Eles são parte integrante do conceito de Promises (Promessas) e são usados para controlar o resultado de uma operação assíncrona.


- .then( ): O método .then() é usado para definir o tratamento de sucesso de uma promessa.
- .catch( ): O método .catch() é usado para lidar com erros ocorridos durante a execução de uma promessa.
- .finally( ): O método .finally() é usado para definir um bloco de código que será executado independentemente de a promessa ter sido resolvida ou rejeitada. 

````
resolvedPromise().then((resolve) => {
    console.log(`resolvedPromise: O número gerado é ${resolve}`)
}).catch((error) => {
    console.log(`Com a promise resolvida, não irá passar pelo catch`);
}).finally(() => console.log('Fim da execução da segunda promise'));
````
## O método fetch( )

E o Javascript já nos fornece um método nativo para lidarmos com requisições externas: o método fetch(), que retorna uma promise, que pode ser resolvida ou rejeitada de acordo com o resultado da requisição.

O método fetch recebe dois parâmetros:

``fetch(URL, config)``

- URL (obrigatório): é o endereço da API para qual faremos a requisição;
- Objeto de configurações (opcional): caso a requisição precise de alguma configuração adicional, é possível defini-la nesse objeto.

````
// Requisição GET sem nenhuma configuração - recupera as informações de um produto.
fetch('https://dummyjson.com/products/27')
  .then((response) => response.json())
  .then((data) => console.log('GET sem headers', data));
````

>> De olho na dica 👀: Você reparou que usamos dois .then seguidos após fazer o fetch? Esse processo é chamado de encadeamento. Podemos usar esse recurso retornando um valor dentro de um .then. O valor retornado será recebido pelo próximo .then encadeado. No caso acima, estamos retornando o valor de response.json() para o próximo .then, que recebe o valor através da variável data.

### Tratando erros em requisições
Apesar de ser uma situação comum, fazer requisições nem sempre dão certo. Ás vezes algum erro pode acontecer, como o servidor externo ficar indisponível, ou alguma configuração ser passada de forma errada para o fetch.

````
fetch('https://dummyjson.com/products/321032109')
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.log('Erro ao fazer requisição', error.message))
````

## Trabalhando com várias promises
Ao trabalhar com códigos assíncronos, é muito comum precisarmos lidar com mais de uma promise por vez. Seja por que você precisa esperar o resultado de duas ou mais promises, ou por que você precisa fazer várias chamadas e pegar o resultado somente da que retornar mais rápido. O Javascript oferece quatro métodos que nos ajudam a trabalhar com várias promises:

- Promise.all
- Promise.race
- Promise.any
- Promise.allSettled

### Método Promise.all

- Parâmetro recebido: array de promises

- Retorno: o retorno varia de acordo com a situação:

quando todas promises são resolvidas: retorna uma promise resolvida com um array com o resultado de cada promise recebida.

````
Promise.all([
  generateResolvedPromise(1000),
  generateResolvedPromise(3000),
  generateResolvedPromise(2000),
])
  .then((result) => {
    console.log(result);
  })
  .catch((error) => console.log(error.message));
````
- quando uma promise é rejeitada: retorna uma promise rejeitada com o objeto o erro retornado pela promise que foi rejeitada.

### Método Promise.race

- Parâmetro recebido: array de promises

- Retorno: o retorno varia de acordo com a situação:

quando a primeira promise finalizada for resolvida: retorna uma promise resolvida com o valor retornado pela primeira promise original.

quando a primeira promise finalizada for rejeitada: retorna uma promise rejeitada com o objeto o erro retornado pela promise original.

> Atenção ⚠️: mesmo que Promise.race só receba o valor da primeira promise a ser finalizada e ignore o valor das outras promises, todas as promises passadas como parâmetro serão executadas.

### Método Promise.any
- Parâmetro recebido: array de promises

- Retorno: o retorno varia de acordo com a situação:

quando alguma promise finalizada for resolvida: retorna uma promise resolvida com o valor retornado pela primeira promise original, ignorando qualquer outra promise que tenha sido finalizada primeiro como rejeitada.

quando todas as promise forem rejeitadas: retorna uma promise rejeitada com o objeto contendo todos os erros retornados pelas promises originais.

>Atenção ⚠️: mesmo que Promise.any só receba o valor da primeira promise a ser realizada e ignore o valor das outras promises, todas as promises passadas como parâmetro serão executadas.

### Método Promise.allSettled
- Parâmetro recebido: array de promises

- Retorno: retorna uma única promise que é resolvida quando todas as promises passadas forem finalizadas. A promise é retornada com um array de objetos que contém o valor retornado por cada uma das promises originais.