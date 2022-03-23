//Parametro rest serve para colocar mais de um parametro na função sem ter necessidade de declarar todos.
function quantosParams(...args) {
    console.log('parâmetros:', args);
    return `Você passou ${args.length} parâmetros para a função.`;
  }
  
  console.log(quantosParams(0, 1, 2));
  console.log(quantosParams('string', null, [1, 2, 3], { }));

//Pode ser utilizado quando você tem uma função que ira utilizar os parametros para soma ou concatenação
const sum = (...args) => args.reduce((accumulator, current) => accumulator + current, 0);
console.log(sum(4, 7, 8, 9, 60)); // 88