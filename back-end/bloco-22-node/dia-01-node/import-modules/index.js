//Modulos locais
const meuModulo = require('./meuModulo') ;

//Modulos internos
const fs = require('fs') ;

fs.readFileSync('./meuModulo.txt') ;

console.log(meuModulo) ; 

meuModulo.func1() ;