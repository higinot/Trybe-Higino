import React from "react";
import Email from "./Form/Email";
import Name from "./Form/Name";
import EstadoFavorito from "./Form/EstadoFavorito";
import Checkbox from "./Form/Checkbox";
import Idade from "./Form/Idade";
import Select from "./Form/Select";
// Quando um componente passa a ser controlado por um evento React, ele é denominado Evento Controlado

class Form extends React.Component {
  constructor() {
    super();

    this.handleTextAreaChange = this.handleTextAreaChange.bind(this);

    this.state = {
      estadoFavorito: "",
      nome: "",
      email: "",
      idade: 0,
      vaiComparecer: false,
      palavraChave: "",
    };
  }

  handleTextAreaChange({ target }) {
    //Função que manipula o estado do Father
    const { name } = target;

    const value = target.type === "checkbox" ? target.checked : target.value;

    this.setState({ [name]: value }); //Interpolação de variaveis.
  }
  render() {
    return (
      <div>
        <h1>
          {" "}
          Estados e React: Ferramenta incrivel ou reagindo a reginalismos?
        </h1>
        <form className='form'>
          <EstadoFavorito
            value={this.state.estadoFavorito}
            handleTextAreaChange={this.handleTextAreaChange}
          />
          <br></br>

          <Email
            value={this.state.email}
            handleTextAreaChange={this.handleTextAreaChange}
          />
          <br></br>

          <Name
            value={this.state.name}
            handleTextAreaChange={this.handleTextAreaChange}
          />
          <br></br>

          <Idade
            value={this.state.idade}
            handleTextAreaChange={this.handleTextAreaChange}
          />
          <br></br>
          <Checkbox
            value={this.state.vaiComparecer}
            handleTextAreaChange={this.handleTextAreaChange}
          />

          <br></br>
        <Select />

        </form>
      </div>
    );
  }
}

export default Form;
