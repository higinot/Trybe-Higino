/* Utilizando o conceito de objeto. */

let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  };

console.log('Bem vinda, ' + info.personagem ); 

/* Inserindo no objeto uma nova propriedade */

info['recorrente'] = 'Sim' 

console.log(info.recorrente);

/* for/in para mostrar todas as propriedades do objeto */

for (let index in info) {
    console.log(index); 
}

/* for/in para acessar os valores das propriedades do objeto */

for (let index in info) {
    console.log(info[index]);

}

/* let infoTwo = {
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

    if (info['recorrente'] == infoTwo['recorrente']) {
        console.log("Ambros recorrentes");
    }else {
        console.log(info[index] + " e " + infoTwo[index]);
    }

} */

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

console.log(leitor.livrosFavoritos.autor);















