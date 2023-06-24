import React from "react";
import { connect } from "react-redux";
import { newAction } from "../redux/action";



class InputName extends React.Component {
  render() {
    const { myFirstDispatch } = this.props;
    const value = document.querySelector("#input-name")
    
    return (
      <div className='message-box'>
        <input type='text' id="input-name" onChange={() => myFirstDispatch(value.value)}/>
        <button onClick={() => myFirstDispatch()}>Clique aqui</button>
      </div>
    );
  }
}
const mapDispatchtoProps = (dispatch) => ({
  myFirstDispatch: (store) => dispatch(newAction(store)),
});

export default connect(null, mapDispatchtoProps)(InputName);
