//Com um array de numeros
const numbers = [1,2,3]
const otherNumbers = [4,5,6]

//Utilizando .push()
numbers.push(otherNumbers[0])
numbers.push(otherNumbers[1])
numbers.push(otherNumbers[2])

console.log(numbers);

//Utilizando SPREAD OPERATOR
const numbersSO = [1,2,3];

const newNumbers = [...numbersSO,...otherNumbers]

console.log(newNumbers);

//Utilizando para os meses do ano
const spring = ['OUT', 'NOV', 'DEZ'];
const summer = ['JAN', 'FEV', 'MAR'];
const fall = ['ABR', 'MAI', 'JUN'];
const winter = ['JUL', 'AGO', 'SET'];

const months = [...summer, ...fall, ...winter, ...spring];
console.log(months);

//Utilizando para completar mais de um parametro em um função
const imc = (peso, altura) => (peso / (altura * altura)).toFixed(2);
const patientInfo = [60, 1.7];

console.log(imc(...patientInfo));

//Utilizando como parametro de uma função
const randomNumbers = [57, 8, 5, 800, 152, 74, 630, 98, 40];

console.log(Math.max(...randomNumbers));
console.log(Math.min(...randomNumbers));

//Utilizando para unir dois objetos.
const people = {
    id: 101,
    name: 'Alysson',
    age: 25,
  };
  
  const about = {about:{
    address: 'Av. Getúlio Vargas, 1000',
    occupation: 'Developer',
  }};
  
  const customer = { ...people, ...about };
  console.log(customer);

