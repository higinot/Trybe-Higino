import React from 'react';

class Exercicio1 extends React.Component {
  constructor() {
    super();
    this.state = {
      loading: true,
      dog: null,
    };
    this.getDog = this.getDog.bind(this);
  }

  // Assim que a página for montada,
  // uma primeira requisição deve acontecer,
  // e a imagem deve ser mostrada na tela;
  async componentDidMount() {
    await this.getDog();
  }

  async getDog() {
    this.setState(
      { loading: true }, // primeiro grante o loading
      // depois ele faz a requisição
      async () => {
        const api = await fetch('https://dog.ceo/api/breeds/image/random');
        const { message } = await api.json();
        this.setState({
          dog: message,
          loading: false,
        });
      },
    );
  }

  render() {
    const { loading, dog } = this.state;
    return (
      <div className="App">
        { loading && (<p>Loading</p>) }
        { !loading && (
          <div className="flex">
            <img className="dog-image" src={ dog } alt="doguinho" />
            <button type="button" onClick={ this.getDog }>
              busque mais um doguinho
            </button>
          </div>
        )}
      </div>
    );
  }
}

export default Exercicio1;
