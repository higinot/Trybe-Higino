import React from "react";

// Quando um componente passa a ser controlado por um evento React, ele é denominado Evento Controlado

class Select extends React.Component {
  render() {
    const { value, handleTextAreaChange } = this.props;

    return (
        <label>
        Escolha sua palavra chave:
        <select
          name='palavraChave'
          handleTextAreaChange = {handleTextAreaChange}
          value={value}
        >
          <option value='estado'> Estado</option>
          <option value='Evento'> Evento</option>
          <option value='Props'> Props</option>
          <option value='Hooks'> Hooks</option>
        </select>
      </label>
    );
  }
}

export default Select;