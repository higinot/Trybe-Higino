import React from "react";

// Quando um componente passa a ser controlado por um evento React, ele é denominado Evento Controlado

class Name extends React.Component {
  render() {
    const { value, handleTextAreaChange } = this.props;

    return (
      <label>
        Name:
        <input name='name' value={value} onChange={handleTextAreaChange} />
      </label>
    );
  }
}

export default Name;