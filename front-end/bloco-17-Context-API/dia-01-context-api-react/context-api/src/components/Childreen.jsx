import React from "react";
import MyContext from "./MyContext";

class Childreen extends React.Component {
  render() {
    return (
      <>
        <MyContext.Consumer>
          {(value) => <h1>{value}</h1>}
        </MyContext.Consumer>
      </>
    );
  }
}

export default Childreen;
