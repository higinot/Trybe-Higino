# Introdução
Hoje você vai conhecer alguns conceitos iniciais do React, uma das bibliotecas mais utilizadas para a criação de aplicações Front-end, ao criar sua primeira aplicação e seus primeiros componentes React!

## Criando um projeto com React

Para criar um projeto React, é possível simplesmente instalar a biblioteca e tentar escrever algum código. Entretanto, você verá que uma aplicação React envolve diversas transformações para deixar a experiência de desenvolvimento mais fluida.

Por exemplo, você verá que é possível utilizar HTML, CSS e imagens dentro de seus arquivos JavaScript, contudo, para que isso seja possível, é necessário realizar algumas configurações, a fim de que “por trás dos panos” o código que você escreveu seja transformado em um código que o navegador entenda sem nenhum problema.

O mais recomendado é utilizar alguma ferramenta para auxiliar na criação de um projeto já configurado. Existem várias ferramentas que fazem essas configurações. Na Trybe, você vai utilizar o Vite para criar seus projetos.

Além disso, será utilizado o TypeScript para escrever seus códigos. Então, na sequência, conheça mais essa nova ferramenta.

## O que é TypeScript?

Inicialmente, o JavaScript foi criado para que os navegadores da época conseguissem realizar tarefas simples. No entanto, com o passar do tempo, essa linguagem se tornou cada vez mais popular e, consequentemente, foi sendo otimizada, o que a transformou em uma ferramenta mais completa, utilizada para criar programas mais complexos.

Em razão dessas aplicações mais complexas, alguns problemas começaram a aparecer. Entre os erros mais comuns, estão os de tipagem. Um exemplo clássico de erro de tipo é achar que uma variável é um number quando, na verdade, é uma string. Nesse caso, ao tentar fazer uma soma, o JavaScript concatena os valores, o que poderia levar a uma série de comportamentos indesejados:

````javascript
const a = '1'
const b = 2

function sum(x, y) {
  return x + y
}

console.log(sum(a, b))
// retorna "12" (string) ao invés de 3 (number)
````

Com TypeScript, o código acima causaria um erro, pois, afinal, a função sum deve receber números ou strings? Para evitar esse erro, você precisa definir o tipo do argumento que será recebido. Nesse caso, os parâmetros x e y são numbers e, portanto, se passar uma string (ou qualquer outro tipo) para a função, o TS indicará um erro.

A principal diferença entre utilizar arquivos JavaScript (.js) ou TypeScript (.ts) é que, em .ts, todas as variáveis e constantes apresentam tipos definidos.

Caso seu código tenha algum erro nos tipos, o TypeScript não permitirá a ele que seja executado. Caso não encontre nenhum erro, o código será transpilado para JavaScript, ou seja, todo o código escrito será transformado em outro, somente com sintaxe JavaScript, e esse código transformado será executado.

“TypeScript é uma linguagem equivalente a um superconjunto de JavaScript: logo, sintaxe JS é válida em TS. Sintaxe se refere à forma como se escreve um texto para formar um programa.“ - Documentação do TypeScript.

## Criando um projeto React com Vite

Além de criar projetos com JavaScript puro, o Vite pode criar projetos React com TypeScript com toda a configuração necessária.

Agora, para criar uma aplicação React utilizando o Vite, execute o seguinte comando no terminal e siga as instruções exibidas na tela:

`npm create vite@latest`

Siga as instruções que aparecerão no terminal e selecione as opções:
