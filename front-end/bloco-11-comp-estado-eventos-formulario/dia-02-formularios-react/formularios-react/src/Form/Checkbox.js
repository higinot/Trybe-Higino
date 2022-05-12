import React from "react";

// Quando um componente passa a ser controlado por um evento React, ele é denominado Evento Controlado

class Checkbox extends React.Component {
  render() {
    const { value, handleTextAreaChange } = this.props;

    return (
      <label>
      Vai comparecer ?
      <input
        name='vaiComparecer'
        type='checkbox'
        handleTextAreaChange={handleTextAreaChange}
        value={value}
      />
    </label>
    );
  }
}

export default Checkbox;