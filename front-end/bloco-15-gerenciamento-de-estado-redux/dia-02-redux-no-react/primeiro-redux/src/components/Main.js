import React from "react";
import { connect } from "react-redux";

class Hello extends React.Component {
  render() {
    const { myFisrtState } = this.props;

    console.log(myFisrtState)
    return (
      <div className='message-box'>
        <h1>Hello {myFisrtState.state} </h1>
      </div>
    );
  }
}

const mapStateToProps = (store) => ({
  myFisrtState: store
});

export default connect(mapStateToProps, null)(Hello);
