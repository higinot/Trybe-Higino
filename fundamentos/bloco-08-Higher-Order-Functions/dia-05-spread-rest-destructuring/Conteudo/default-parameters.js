//Com default parameters podemos começar já pré-definindo um parametro
const greeting = (user) => console.log(`Welcome ${user}!`);

//Caso o usuarui não coloque parametro o retorno sera undefined
greeting(); // Welcome undefined!

//Como resolvenos isso? Com if ?
const greetingTwo = (user) => {
    const userDisplay = typeof user === 'undefined' ? 'usuário' : user;
    console.log(`Welcome ${userDisplay}!`);
  };
  
  greetingTwo(); // Welcome usuário!

//Com default-parameters podemos simplificar

const greetingTree = (user = 'usuário') => console.log(`Welcome ${user}!`);

greetingTree(); // // Welcome usuário!