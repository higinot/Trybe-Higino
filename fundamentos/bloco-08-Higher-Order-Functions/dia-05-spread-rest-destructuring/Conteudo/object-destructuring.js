//Object Destructuring serve para simplificar as chamadas nos objetos

//Forma convencional de fazer uma chamada de objeto.
const product = {
  tv: "Smart TV Crystal UHD",
  price: "1899.05",
  seller: "Casas de Minas",
};

console.log(
  `Tenho uma ${product.name} e paguei ${product.price} na loja ${product.seller}`
);

//Com Object Destructuring podemos fazer da seguinte forma:

//Primeiro precisamos destruir o objeto.
const {tv, price, seller} = product;

console.log(
    `Tenho uma ${tv} e paguei ${price} na loja ${seller}`
  );

//Outro exemplo mais complexo
// definindo o objeto
const character = {
    name: 'Luke SkyWalker',
    age: '53',
    description: {
      specieName: 'Human',
      jedi: true,
    },
    homeWorld: {
      name: 'Tatooine',
      population: '200000',
    },
  };
  
  // desestruturando o objeto:
  const { name, age, homeWorld: { name: planetName }, description: { jedi } } = character;

  //Para mudar o nome da variavél na desestruturação, fazemos:
  const { description: {specieName: specie}} = character
  
  // imprimindo os valores:
  console.log(`Esse é o ${name}, ele tem ${age} anos é um ${specie}, mora no planeta ${planetName} e, por incrível que possa parecer, ele ${jedi ? 'é um Jedi' : 'não é um Jedi'}.`);

