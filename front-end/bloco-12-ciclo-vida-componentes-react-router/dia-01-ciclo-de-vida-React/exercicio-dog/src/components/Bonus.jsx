import React from 'react';

class Bonus extends React.Component {
  constructor() {
    super();
    this.state = {
      loading: true,
      dog: null,
      name: '',
    };
    this.getDog = this.getDog.bind(this);
    this.handleName = this.handleName.bind(this);
    this.saveName = this.saveName.bind(this);
  }

  async componentDidMount() {
    const hasDoguinhoOnLocalStorage = this.getDoguinhoFromLocalStorage();
    if (hasDoguinhoOnLocalStorage) {
      // eslint-disable-next-line react/no-did-mount-set-state
      this.setState({
        dog: { message: hasDoguinhoOnLocalStorage.url },
        name: hasDoguinhoOnLocalStorage.name,
        loading: false,
      });
      return;
    }

    await this.getDog();
  }

  handleName(event) {
    this.setState({
      name: event.target.value,
    });
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
          name: '',
        }), () => {
          // Guarde a url da última imagem gerada no localStorage
          // após cada atualização
          const { dog: { message } } = this.state;
          this.createNewUrlOnLocalStorage(message);

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

  getDoguinhoFromLocalStorage() {
    const urlsInLocalStorage = localStorage.getItem('urls');
    let myUrls = [];
    if (urlsInLocalStorage) {
      myUrls = JSON.parse(urlsInLocalStorage);
    }
    if (myUrls.length === 0) { return; }
    return myUrls[myUrls.length - 1];
  }

  saveName() {
    // A cada foto que for baixada, através de um input, permita que quem usa dê um nome ao doguinho;
    const { name } = this.state;
    this.changeNameForLastUrlOnLocalStorage(name);
  }

  createNewUrlOnLocalStorage(url) {
    const urlsInLocalStorage = localStorage.getItem('urls');
    let myUrls = [];
    if (urlsInLocalStorage) {
      myUrls = JSON.parse(urlsInLocalStorage);
    }
    myUrls.push({ url, name: '' });
    localStorage.setItem('urls', JSON.stringify(myUrls));
  }

  changeNameForLastUrlOnLocalStorage(name) {
    const urlsInLocalStorage = localStorage.getItem('urls');
    let myUrls = [];
    if (urlsInLocalStorage) {
      myUrls = JSON.parse(urlsInLocalStorage);
    }
    if (myUrls.length === 0) { return; }

    myUrls[myUrls.length - 1].name = name;
    localStorage.setItem('urls', JSON.stringify(myUrls));
  }

  render() {
    const { loading, dog, name } = this.state;
    return (
      <div className="App">
        { loading && (<p>Loading</p>) }
        { !loading && (
          <div className="flex">
            <img className="dog-image" src={ dog.message } alt="doguinho" />
            <input type="text" value={ name } onChange={ this.handleName } />
            <button type="button" onClick={ this.saveName }>
              salvar nome do doguinho
            </button>
            <button type="button" onClick={ this.getDog }>
              busque mais um doguinho
            </button>
          </div>
        )}
      </div>
    );
  }
}

export default Bonus;
