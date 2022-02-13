/* Exercicio 1  - Utilizando lógica de programação  */
function verificarPalindrome(str) {
    for (index in str){
        if(str[index] != str[(str.length-1)-index]){

            return false;
        }
    }
    return true
}


console.log(verificarPalindrome('Ana')); //Primeira forma de resolver.

/* Exercicio 1 - Utilizando funções do JavaScript */

/* Documentação:
    split() :https://www.notion.so/Javascript-26e7d16eac5b467d9de8dc4f9cd6db4b
    reserve() :https://www.notion.so/Javascript-26e7d16eac5b467d9de8dc4f9cd6db4b
    join(): https://www.notion.so/Javascript-26e7d16eac5b467d9de8dc4f9cd6db4b
*/

function verificarPalindrome(str) {
    let reverse = str.split('').reverse().join(''); 
    if reserve === str {
        return true;
    } else {
        return false;
    }
}

/* Exercicio 2 - Receba um array de inteiros e indique o indice o maior valor */

function indexHight (nums) {
    let hight = 0;
    for (let index in nums){
        if (nums[hight] < nums[index]){
            hight = index
        }
    }
    return hight;
}

console.log(indexHight([2,3,5,6,7]));

/* Exercicio 3 - Receba um array de inteiros e indique o indice o menor valor */

function indexHight (nums) {
    let  numLow = 0;
    for (let index in nums){
        if (nums[numLow] > nums[index]){
            numLow = index
        }
    }
    return numLow;
}

console.log(indexHight([2,3,5,1,7]));

/* Exercicio 4 - Receba um array de nomes e retorne o nome com maior quantidade de caracteres */

function numsCharacter (namesArray) {
    let hightWord = namesArray[0];
    for (let index in namesArray) {
        if (hightWord.length < namesArray[index].length){
            hightWord = namesArray[index];
        }
    }
    return hightWord;
}

console.log(numsCharacter(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));

/* Exercicio 5 - Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete */

function numRepet (nums) {
    let count = 0;
    let countHight = 0;

    for (let index in nums){
        console.log(nums[index]);
        let num = nums[index]
        count = 0;
        for (let index in nums){
            console.log(nums[index] + ":" + num);
            if (num === nums[index]){
                count = count + 1;
            }
        }
        if (count > countHight){
            countHight = count;
        }

    }
    return countHight;

}

console.log(numRepet([1,2,3,1,1,1]));