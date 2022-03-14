/* 7 - Encontre o nome do livro escrito pela pessoa cujo nome registrado começa com três iniciais. */

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

function authorWith3DotsOnName() {

    const filterExp = expectedResult.filter(item => {
        return item.author.name.split(' ').filter(item =>  {

            console.log(item.endsWith('.'));
                        return item.endsWith('.')

                        console.log(item.endsWith('.'));
        }).length === 3;

    })

    console.log(filterExp[0].name);
  // escreva seu código aqui
}

console.log(authorWith3DotsOnName());