import React from "react";
import MyContext from "./MyContext";
import Childreen from "./Childreen";

class Father extends React.Component {
  render() {
      const contextValue = {
          value: 1,
      }
    return (
      <MyContext.Provider value={ contextValue }>
        <h1>Olá</h1>
        <Childreen />
      </MyContext.Provider>
    );
  }
}

export default Father;
