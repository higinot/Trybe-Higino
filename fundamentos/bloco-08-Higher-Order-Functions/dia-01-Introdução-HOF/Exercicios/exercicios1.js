 /* 1 - Crie uma função que retorne um objeto no formato 
 { nomeCompleto, email } representando uma nova pessoa contratada. 
 Passe sua função como parâmetro da HOF newEmployees para criar cada 
 pessoa contratada em seu respectivo id . A sua função deve receber 
 como parâmetro o nome completo da pessoa funcionária e a partir dele 
 gerar automaticamente um email no formato nome_da_pessoa@trybe.com . */
 
 //Essa função vai pegar o nome e criar uma variavel e-mail
 const createEmail = (fullName) => {
     //O método split() divide uma String em uma lista ordenada de substrings, coloca essas substrings em um array e retorna o array.
     //O método join() junta todos os elementos de um array (ou um array-like object) em uma string e retorna esta string.
     const email = fullName.split(' ').join('_');
     return {fullName, email: `${email}@trybe.com`}
 }
 
 //Uma função callback é uma função passada a outra função como argumento
 //Callback ira chamar outra função
 const newEmployees = (callback) => {
        const employees = {

        //callback = createEmail => createEmail(Parametro) => return {fullName, email: ´$email@trybe.com
        id1: callback('Higino Neto'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
        id2: callback('Jade Siqueira'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
        id3: callback('Guilherme Souza'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
        }
        return employees;
    };

console.log(newEmployees(createEmail));



