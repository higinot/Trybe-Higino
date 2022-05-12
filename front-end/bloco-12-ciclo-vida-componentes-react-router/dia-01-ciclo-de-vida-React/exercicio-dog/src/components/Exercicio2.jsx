import React from 'react';

class Exercicio2 extends React.Component {
  constructor() {
    super();
    this.state = {
      loading: true,
      dog: null,
    };
    this.getDog = this.getDog.bind(this);
  }

  async componentDidMount() {
    await this.getDog();
  }

  async getDog() {
    this.setState(
      { loading: true },
      async () => {
        const api = await fetch(
          'https://dog.ceo/api/breeds/image/random',
        );
        const newDog = await api.json();

        // A cada tentativa de atualização do componente,
        // verifique se o campo message tem a palavra terrier.
        // Se sim, não atualize o componente.
        if (newDog.message.includes('terrier')) {
          console.log('TERRIER aqui não!', newDog.message, 'Mantem o anterior então!');
        }
        this.setState((previousState) => ({
          dog: !newDog.message.includes('terrier') ? newDog : previousState.dog,
          loading: false,
        }), () => {
          // Guarde a url da última imagem gerada no localStorage
          // após cada atualização
          const { dog: { message } } = this.state;
          this.updateLocalStorage(message);

          // Após a atualização do componente, exiba um alert com a raça do doguinho
          // eslint-disable-next-line no-alert
          alert(this.getRaca(message));
        });
      },
    );
  }

  getRaca(url) {
    const urlSplitted = url.split('/');
    const raca = urlSplitted[urlSplitted.length - 2];
    return raca;
  }

  updateLocalStorage(url) {
    // localStorage => chave(string) valor(string)
    const urlsInLocalStorage = localStorage.getItem('urls');
    let myUrls = [];
    if (urlsInLocalStorage) {
      // pegando as urls em formato string e convertendo em array
      myUrls = JSON.parse(urlsInLocalStorage);
    }
    myUrls.push(url);
    // pra salvar eu converto o meu array em string
    localStorage.setItem('urls', JSON.stringify(myUrls));
  }

  render() {
    const { loading, dog } = this.state;
    return (
      <div className="App">
        { loading && (<p>Loading</p>) }
        { !loading && (
          <div className="flex">
            <img className="dog-image" src={ dog.message } alt="doguinho" />
            <button type="button" onClick={ this.getDog }>
              busque mais um doguinho
            </button>
          </div>
        )}
      </div>
    );
  }
}

export default Exercicio2;
