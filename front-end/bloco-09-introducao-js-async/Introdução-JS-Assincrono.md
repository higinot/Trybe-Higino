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

## Async e Await

### O funcionamento do operador await
Quando colocamos o operador await no JavaScript, a execução do código é pausada até que a referida Promise seja resolvida. Isso significa que o código não será executado além daquela linha enquanto a Promise estiver pendente.

````
const a = funcaoQueRetornaPromise();
const b = await funcaoQueRetornaPromise();

console.log(a) // Aqui o console vai imprimir a Promise em si.
console.log(b) // Aqui o console vai imprimir o resultado da Promise
````

No código acima, a variável a será uma Promise (que pode inclusive ainda estar pendente). A execução do código não é pausada nesse caso. Por essa razão, o valor da variável é uma Promise. Por outro lado, na variável b, o código é pausado até que a Promise seja resolvida (ou rejeitada) e o valor da variável será o resultado dessa Promise, e não a Promise em si.

⚠️ Um cuidado que devemos ter é que, para usar o operador await dentro de uma função, é necessário que ela seja uma função assíncrona (com o operador async).

## Funções Assíncronas

Uma função assíncrona é uma função que retorna uma Promise. Nós podemos tornar qualquer função assíncrona simplesmente adicionando o operador async antes da sua declaração. Por exemplo:

````
// Essa função retorna o número 1.
function foo() {
  return 1;
}

// Essa função retorna uma Promise (que resolve no número 1).
async function bar() {
  return 1;
}
````

## Lidando com Erros

Aprendemos que podemos tratar os erros lançados dentro de uma Promise com o operador .catch(). Entretanto, quando usamos a sintaxe de async/await geralmente lidamos com erros usando blocos try/catch.

No nosso exemplo do cep:

````
const cep = '30130-010';
try {
  const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
  const data = await response.json();
  console.log(data);
} catch(error) {
  console.log(error)
}
````

Na aplicação acima, o código tenta (try) fazer a requisição. Caso haja um erro, esse erro é capturado (catch) e, no nosso caso, escolhemos tratar o erro imprimindo no nosso console. Você poderá tratar o erro da maneira como desejar (por exemplo, com um alerta, enviando para a base de dados, logs, etc).

## Testes assíncronos

### A aplicação que iremos testar
Antes de testar nossa aplicação, vamos fazer algumas modificações e refatorações para:

1. Extrair para um arquivo separado a lógica assíncrona de busca de cep (separando, assim, as responsabilidades das funções);
2. Lançar um erro quando nenhum valor for passado para o cep;
3. Lançar um erro lançado quando passamos um cep inválido.

### Quando a requisição é bem sucedida, ela deverá retornar os dados esperados

No teste abaixo, é importante adicionarmos o operador async no segundo argumento da função test(). Isso faz com que seja possível usarmos o operador await para esperarmos os dados da nossa função getAddressFromCep(), que é assíncrona.

````
test('deve retornar os dados quando passamos um cep válido', async () => {
  const address = await getAddressFromCep('30130010');
  expect(address.cep).toBe('30130-010');
  expect(address.logradouro).toBe('Praça Sete de Setembro');
  expect(address.bairro).toBe('Centro');
  expect(address.uf).toBe('MG');
});
````
Em seguida vamos testar que nossa função retorna os dados esperados independentemente de passarmos o cep com ou sem hífen:

````
test('deve aceitar cep com hífen ou sem hífen', async () => {
  let address = await getAddressFromCep('30130010');
  expect(address.cep).toBe('30130-010');

  address = await getAddressFromCep('30130-010');
  expect(address.cep).toBe('30130-010');
});
````

### Quando a requisição é rejeitada, ela deverá retornar erro

Agora precisamos realizar os testes caso a requisição à API não seja bem sucedida.

### Ao passar um cep vazio

Além de utilizarmos async/await como nos testes anteriores, nesse caso precisaremos também de um matcher especial do Jest. Como estamos testando a rejeição de uma Promise, precisamos usar o helper rejects combinado com o matcher toThrow, que testará o erro que foi lançado.

Neste caso também estamos testando a mensagem de erro lançada. Por esse motivo precisamos criar um erro com a mensagem esperada, utilizando a sintaxe new Error('Mensagem de erro'), junto do matcher toThrow.

````
test('Deve lançar erro "Você precisa passar um CEP" quando passar cep vazio', async () => {
  const emptyCep = '';

  await expect(getAddressFromCep(emptyCep)).rejects.toThrow(
    new Error('Você precisa passar um CEP')
  );
});
````

### Ao passar um cep inválido

Da mesma forma, também vamos testar ceps inválidos. Nesse caso estamos apenas testando que haverá um erro, e não a mensagem do erro. Por essa razão, podemos usar o toThrow sem nenhum argumento.

````
test('Deve lançar erro quando passar cep inválido', async () => {
  const invalidCep = 'XXXXX-XXX';
  const invalidCepLessDigits = '00000-00';
  const invalidCepMoreDigits = '00000-0000';

  await expect(getAddressFromCep(invalidCep)).rejects.toThrow();
  await expect(getAddressFromCep(invalidCepLessDigits)).rejects.toThrow();
  await expect(getAddressFromCep(invalidCepMoreDigits)).rejects.toThrow();
});
````

É importante perceber que, em alguns testes, não estamos testando nossa aplicação, mas sim o retorno da API. Para testarmos a nossa aplicação de fato, precisamos utilizar o mock da função fetch. Mas tenha tranquilidade, uma vez que iremos aprender esse tópico mais à frente no curso.

O mais comum é testarmos nossa aplicação com mocks. Porém, testar o retorno da API, como fizemos nos testes acima, pode ser válido quando queremos garantir que estamos recebendo os dados corretos. Entretanto, é importante saber que, ao testarmos a API:

Os testes ficam mais demorados, uma vez que dependem de resposta externa;
Os testes podem quebrar quando há indisponibilidade desta API;
Algumas APIs possuem limites de requisição que podem ser feitas - fique atento a eles.
O Jest possui também outras formas de testes assíncronos. Você pode verificar na documentação da biblioteca.