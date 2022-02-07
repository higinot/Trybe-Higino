let numbers = [5,9,3,19,70,8,100,2,35,27]

/* Exercicio 1 */
console.log(numbers);

/* Exercicio 2 */
var soma = 0;  /* Precisar declarar que a var = 0; */

for (var i = 0; i < (numbers.length) ; i++) {

    soma = soma + numbers[i]
}

console.log(soma);

/* Exercicio 3 */
/* A média aritmética é o resultado da soma de todos os elementos divido pelo número total de elementos. */

console.log(soma/numbers.length);

var media = soma/numbers.length;

/* Exercicio 4 */

if (media > 20) {
    console.log("valor maior que 20");
}
else {
    console.log("valor menor que 20")
}

/* Exercicio 5 */

var comparativo = 0;

for (var i = 0; i < (numbers.length) ; i++) {

    if (comparativo > numbers[i]) {
        comparativo = comparativo        
    }
    else {
        comparativo = numbers[i]
    }
}

console.log(comparativo);

/* Exercicio 6 */

var num = 0;

comparativo = 0;

for (var i = 0; i < (numbers.length) ; i++) {

    if (numbers[i]%2 !== 0 ) {
        comparativo = comparativo + 1;      
    }
}

if (comparativo == 0) {
    console.log("nenhum valor ímpar encontrado");
}
else {
    console.log(comparativo);
}

/* Exercicio 7 */

for (var i = 0; i < (numbers.length) ; i++) {

    if (comparativo < numbers[i]) {
        comparativo = comparativo        
    }
    else {
        comparativo = numbers[i]
    }
}

console.log(comparativo);

/* Exercicio 8 */

var aa =[a]

for (var a = 0; a < 25 ; a++) {

    aa = aa.push[a];

}






