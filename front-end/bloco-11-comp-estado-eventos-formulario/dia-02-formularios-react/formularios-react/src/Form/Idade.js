import React from "react";

// Quando um componente passa a ser controlado por um evento React, ele é denominado Evento Controlado

class Idade extends React.Component {
  render() {
    const { value, handleTextAreaChange } = this.props;

    return (
      <label>
        Idade:
        <input name='idade' type="number" value={value} onChange={handleTextAreaChange} />
      </label>
    );
  }
}

export default Idade;