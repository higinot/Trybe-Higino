/* // Crie um algoritmo que conte quantos números do intervalo entre 2 e 150 são divisíveis por 3.
// Caso a quantidade seja igual a 50, exiba uma mensagem secreta. */

var contador = 0;
for( i = 3; i < 150 ; i++) { /* Começa a rodar 3 e para 149 */

    if (i%3 === 0) {
        contador= contador + 1;
    }


}

console.log(contador);

console.log(i);


/* // 3 -
//Crie um algoritmo que simula o jogo "pedra, papel e tesoura" levando em consideração que são apenas duas pessoas jogando e imprima o resultado no formato:
// "Player 1 won" ou "A Ties" ou "Player 2 won". */

var py1 = 0; /* 0 - Pedra / 1 - Tesoura / 2 - Papel */
var py2 = 0;

if (py1 == 0 ) {

    if (py2 == 0) {
        console.log("Empate!");
    }
    else if (py2 == 1) {
        console.log("Player 1 ganha!!");
    }
    else if (py2 == 2) {
        console.log("Player 2 ganha!!");
    }
   

}


if (py1 == 1 ) {

    if (py2 == 0) {
        console.log("Player 2 ganha!!");
    }
    else if (py2 == 1) {
        console.log("Empate!");
    }
    else if (py2 == 2) {
        console.log("Player 1 ganha!!");
        }
       
    
}

if (py1 == 2 ) {

    if (py2 == 0) {
        console.log("Player 1 ganha!!");
        }
    else if (py2 == 1) {
        console.log("Player 2 ganha!!");
    }
    else if (py2 == 2) {
        console.log("Empate!!");
    }
           
        
}

/* //4
//Desenvolva um algoritmo que verifica se a pessoa é maior ou menor de idade.
//Imprima no console seguindo o exemplo: "A pessoa é maior de idade".
//Bônus: Crie a condição utilizando operador ternário. */


var idade = 18;
var resposta = idade >= 18 ? true : false /* Operador ternario */

console.log(resposta);

if (idade >= 18) {
    console.log("Maior de idade!");

}
else{
    console.log("Menor de idade!");
}

/* //Crie um algoritmo que recebe a idade de Carolzita , Murilo e Baêta e imprime quem é a pessoa mais nova no formato:
// "Pessoa" é a mais nova. */

var idades = [40,25,35]; /* 0 = Carol / 1 = Murilo / Baeta = 2 */

var comparativo = idades[0]
var 

for (var i = 0; i < (idades.length) ; i++) {

    if (comparativo > idades[i]) {
        comparativo = idade[i]

    }
}

console.log("Pessoa mais nova  ");








