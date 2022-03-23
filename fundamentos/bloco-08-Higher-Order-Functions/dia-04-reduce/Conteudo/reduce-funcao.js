/* Para fixar ainda mais conceito de reduce , faça uma função que some todos os números pares do array: */

const numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];

const getEven = (number) => number % 2 === 0; //Função que ira retornar true caso number % 2 sejá verdadeira

const sumEven = (number, acc) => acc + number ; //Função que ira acumular o resultado

const sumNumber = (array) => array.filter(getEven).reduce(sumEven); //Função que ira retornar o array

console.log(sumNumber(numbers));

/* Solução apenas utilizando o reduce */

const sumPar = (accu,number) => ((number % 2 === 0) ? accu + number : accu ); //Função de acumulação com ternario

const sumNumberUsingReduce = (array) => array.reduce(sumPar, 0);

console.log(sumNumberUsingReduce(numbers));

