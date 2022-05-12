import React from "react";
import pokemons from "../Data/Data"; /* Preciso importar e colocar como this.props */

// Exportando um componente como classNameNamee
class Card extends React.Component {
  render() {
    const { pokemons } = this.props;

    const pStyle = {
      width: "15rem",
      margin: "0px",
      padding: "0px",
    };

    return (
      <>
        {pokemons.map((pokemon) => (
          <div className="col-2" style={pStyle}>
            <div className="card">
              <img src={pokemon.image} alt="Ola" className="card-img-top" />
              <div className="card-body">
                <h5 className="card-title">{pokemon.name}</h5>
                <p className="card-text">
                  Tipo do Pokemon: {pokemon.type}
                  <br></br>
                  Peso do Pokemon: {pokemon.averageWeight.value}{" "}
                  {pokemon.averageWeight.measurementUnit}
                </p>
              </div>
            </div>
          </div>
        ))}
      </>
    );
  }
}

export default Card;
