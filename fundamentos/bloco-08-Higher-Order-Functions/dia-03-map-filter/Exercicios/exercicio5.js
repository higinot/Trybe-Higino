/* 5 - Crie um array em ordem alfabética apenas com os nomes de todas as pessoas autoras de ficção científica ou fantasia. */
const expectedResult = [
    {
      id: 6,
      name: 'O Chamado de Cthulhu',
      genre: 'Terror',
      author: { name: 'H. P. Lovecraft', birthYear: 1890 },
      releaseYear: 1928,
    },
    {
      id: 3,
      name: 'Fundação',
      genre: 'Ficção Científica',
      author: { name: 'Isaac Asimov', birthYear: 1920 },
      releaseYear: 1951,
    },
    {
      id: 2,
      name: 'O Senhor dos Anéis',
      genre: 'Fantasia',
      author: { name: 'J. R. R. Tolkien', birthYear: 1892 },
      releaseYear: 1954,
    },
  ];
  
  function fantasyOrScienceFictionAuthors() {

    //filter() => Filtra os itens de Fantasia e Ficc
    //sort() => Ira ordenar os nomes
    //map()  => Ira retornar um array
    return expectedResult.filter((item) => 
    item.genre === 'Fantasia' || item.genre === 'Ficção Científica').sort((item1,item2) =>
        item1.author.name - item2.author.name).map(item => item.author.name);
  }

  console.log(fantasyOrScienceFictionAuthors());
