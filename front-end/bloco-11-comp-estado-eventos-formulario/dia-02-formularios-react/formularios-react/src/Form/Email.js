import React from "react";

// Quando um componente passa a ser controlado por um evento React, ele é denominado Evento Controlado

class Email extends React.Component {
  render() {
    const { value, handleTextAreaChange } = this.props;

    return (
      <label>
        <hr></hr>
        Email:
        <input name='email' value={value} onChange={handleTextAreaChange} />
      </label>
    );
  }
}

export default Email;
