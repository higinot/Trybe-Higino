import React from 'react';
import { connect } from 'react-redux';
import './MainContent.css';

class OutroContent extends React.Component {
  render() {
    //leitura
    const { title } = this.props;
    return (
      <div className="MainContent">
        Filme selecionado<h2>{title}</h2>
      </div>
    );
  }
}

// const meuObjeto = { aqui:'tem' }
// this.props = {}
// this.props = {...meuObjeto}
const mapStateToProps = (state) => ({
  title: state.selectedMovie.title
});
export default connect(mapStateToProps)(OutroContent);
