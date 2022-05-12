/* eslint-disable no-magic-numbers */
import React from 'react';
// import sound from '../assets/bip.mp3';

// const ONE_SECOND = 1000;
// const TIME_LIMIT = 6;

export default class Timer extends React.Component {
  // Primeiro a ser renderizado
  constructor() {
    super();

    console.log('1.constructor');

    this.props = {
      name: '',
    };
    this.state = {
      secounds: 0,
      phases: ['🫁 Inspire', ' 🤐 Seguro', '😲 Expire'], // Fases da respiração
      phaseIndex: 0, // Index para cada fase
    };
  }

  // Terceiro a ser renderizado
  componentDidMount() {
    this.intervalID = setInterval(() => {
      this.setState((prev) => ({
        secounds: prev.secounds + 1,
      }));
    }, 1000);

    console.log(this.intervalID);
  }

  // Quarto a ser renderizado
  shouldComponentUpdate(_nextProps, _nextStates) {
    return true;
  }

  // Quinto a ser renderizado
  componentDidUpdate(prevProps, prev) {
    const timeLimit = 5;
    if (prev.secounds === timeLimit) {
      this.setState({
        secounds: 0,
        phaseIndex: prev.phaseIndex === 2 ? 0 : prev.phaseIndex + 1,
      });
    }
  }

  // Sexto e ultimo a ser renderizado
  componentWillUnmount() {
    console.log(`vou desmontar o ID ${this.intervalID}`);
    clearInterval(this.intervalID);
  }

  // Segundo a ser renderizado
  render() {
    const { name } = this.props;
    const { secounds, phases, phaseIndex } = this.state;
    return (
      <section>
        <h1>{phases[phaseIndex]}</h1>
        <h2>{name}</h2>
        <h2>{secounds}</h2>
      </section>
    );
  }
}
