/* Exercicio 1 - Utilizando o conceito de objeto. */

let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  };

console.log('Bem vinda, ' + info.personagem ); 

/* Exercicio 2 - Inserindo no objeto uma nova propriedade */

info['recorrente'] = 'Sim' 

console.log(info.recorrente);

/* Exercicio 3 - for/in para mostrar todas as propriedades do objeto */

for (let index in info) {
    console.log(index); 
}

/* Exercicio 4 - for/in para acessar os valores das propriedades do objeto */

for (let index in info) {
    console.log(info[index]);

}

/* Exercicio 5 - Definindo um objeto / comparando objetos */

let infoTwo = {
    personagem: 'Tio Patinhas',
    origem: 'Christmas on Bear Mountain, Dells Four Color Comics #178',
    nota: 'O último Macpatinhas',
    recorrente: 'Sim'
};

let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
    recorrente: 'Sim'
};

for (let index in info, infoTwo) {
    if (index === 'recorrente' && info[index] === 'Sim' && infoTwo[index] === 'Sim'){
        console.log('Ambos recorrentes');
    }else {
        console.log(info[index] + " e " + infoTwo[index]);
    }
};


/* Exercicio 6 - Acessar uma sub-propriedade dentro de uma propriedade (dentro de um array) */

let leitor = {
    nome: 'Julia',
    sobrenome: 'Pessoa',
    idade: 21,
    livrosFavoritos: [
      {
        titulo: 'O Pior Dia de Todos',
        autor: 'Daniela Kopsch',
        editora: 'Tordesilhas',
      },
    ],
};
console.log(`O livro favorito de ${leitor.nome} ${leitor.sobrenome} se chama ${leitor.livrosFavoritos[0].titulo}`);

/* Exercicio 7 -  Adicionar um novo conjunto de dados dentro da propriedade livrosFavoritos*/

leitor.livrosFavoritos[1] = {
    titulo: 'Harry Potter e o Prisioneiro de Azkaban',
    autor: 'JK Rowling',
    editora: 'Rocco',
  }

for (index in leitor.livrosFavoritos) {
    console.log(leitor.livrosFavoritos[index].titulo);
} /* Dessa forma eu acessei o nome dos dois livros */

/* Exercicio 8 - Acessar as chaves nome e livrosFavoritos e fazer a saida "Julia tem 2 livros favoritos" */
console.log(`${leitor['nome']} tem ${leitor.livrosFavoritos.length} livros favoritos.`); /* Utilizar da forma ${leitor['name']} */















