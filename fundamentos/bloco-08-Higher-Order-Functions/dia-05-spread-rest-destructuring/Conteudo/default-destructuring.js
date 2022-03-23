//Default destruturing é quando tentamos acessar uma key que não tem valor

const person = {
    name: 'João',
    lastName: 'Jr',
    age: 34,
  };
  
  const { nationality } = person;

  //Retorno sera undefined por que não definimos valor para ela;
  console.log(`${nationality}`);

  //Podemos definir valor na desestruturação
  const {hobby = 'Futebol'} = person;

  //Retorno agora sera correto
  console.log(`${hobby}`);

  //Retorno das chaves do objeto.
  console.log(`${Object.keys(person)}`);

