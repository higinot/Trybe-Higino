/* eslint-disable sonarjs/no-duplicate-string */
import React from 'react';
import './App.css';
import logo from './assets/trybemestar.png';
import Timer from './components/Timer';

// setInterval(() => , tempoEmMilissegundos), Executa a operação a cada Xmillisegundos
// setTimeout(()=> console.log('hi'),2000), Executa somente uma vez
// adicionar botão para esconder e mostrar timer ✅
class App extends React.Component {
  constructor() {
    super();

    this.state = {
      timer: false,
    };
  }

  changeTimer() {
    // pegar o timer que existe e inverter o valor
    this.setState((prevState) => {
      // eslint-disable-next-line react/no-access-state-in-setstate
      console.log(prevState);
      return {
        timer: !prevState.timer,
      };
    });
  }

  render() {
    console.log('render');

    const { timer } = this.state;
    const name = 'Felipe';

    return (
      <div>
        <header>
          <img src={ logo } className="App-logo" alt="logo" />
        </header>
        <main>
          {timer && <Timer name={ name } />}
          <button type="button" onClick={ () => this.changeTimer() }>
            {timer ? 'Desligar Timer' : 'Ligar timer'}
          </button>
        </main>
      </div>
    );
  }
}

export default App;
