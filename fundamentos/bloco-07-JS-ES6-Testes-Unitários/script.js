//Exercicio 1 - Respeitar o escopo (var => let)
function testingScope(escopo) {
    if (escopo === true) {
      let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
      ifScope = ifScope + ' ótimo, fui utilizada no escopo !';
      console.log(ifScope);
    } else {
      const elseScope = 'Não devo ser utilizada fora meu escopo (else)';
      console.log(elseScope);
    }
  }

  //Exercicio 2 - 
/* 
  const oddsAndEvens = [13, 3, 4, 10, 7, 2];

  const sortOddsAndEvens = () => {
    oddsAndEvens[0] = 2;
    oddsAndEvens[1] = 3;
    oddsAndEvens[2] = 4;
    oddsAndEvens[3] = 7;
    oddsAndEvens[4] = 10;
    oddsAndEvens[5] = 13;
  
    return oddsAndEvens;
  }
  
  const sortedArray = sortOddsAndEvens();
  console.log(`Os números ${sortedArray} se encontram ordenados de forma crescente !`); */

  //Exercicio 2 - 
  const oddsAndEvens = [13, 3, 4, 10, 7, 2];

  const sortArrayBonus = array => {
    const sortOddsAndEvens = array.sort((a,b) => a - b);
    return sortOddsAndEvens;
  }
  
  const sortedArrayBonus = sortArrayBonus(oddsAndEvens);
  console.log(`Os números ${sortedArrayBonus} se encontram ordenados de forma crescente !`);

  const student1 = {
    Html: 'Muito Bom',
    Css: 'Bom',
    JavaScript: 'Ótimo',
    SoftSkills: 'Ótimo',
  };
  
  const student2 = {
    Html: 'Bom',
    Css: 'Ótimo',
    JavaScript: 'Ruim',
    SoftSkills: 'Ótimo',
    Git: 'Bom', // chave adicionada
  };
  
  const listSkills = (student) => {
    const arrayOfSkills = Object.keys(student);
    for (const index in arrayOfSkills) {
      console.log(`${arrayOfSkills[index]}, Nível: ${student[arrayOfSkills[index]]}`);
    }
  };
  
  console.log('Estudante 1');
  listSkills(student1);
  
  console.log('Estudante 2');
  listSkills(student2);

  const países = {
    França: 'Paris',
    Brasil: 'Brasília',
    Espanha: 'Madrid',
    Portugal: 'Lisboa',
  };
      const pairKeyValue = Object.entries(países);
      console.log(pairKeyValue);

      for(index in pairKeyValue) {
        console.log('--------');
        console.log('País:', pairKeyValue[index][0]);
        console.log('Capital:', pairKeyValue[index][1]);
  };


const person = {
  name:'Roberto',
};

const lastName = {
  lastName: 'Silva',
};

const newPerson = Object.assign({},person,lastName);
newPerson.name = 'Gilberto';
console.log(newPerson);
console.log(person);
