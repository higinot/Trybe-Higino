//Array
const numbers = [50, 85, -30, 3, 15];

//Função getBigger ira retornar o maior valor do Array
const getBigger = (bigger, number) => ((bigger > number) ? bigger : number);

//Com reduce, o parametro bigger é o acumulado e o parametro number é o elemento.
const bigger = numbers.reduce(getBigger, 0);
console.log(bigger); // 85


