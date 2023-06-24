import React from 'react';
import { connect } from 'react-redux';
import './MainContent.css';

class MainContent extends React.Component {
  render() {
    //leitura
    const { selectedMovie: { id, title, trybe, day } } = this.props;
    return (
      <div className="MainContent">
        <h2>{title}</h2>
        <p>Tribo: {trybe}</p>
        <p>Ano de lançamento: {day}</p>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  selectedMovie: state.selectedMovie
});
export default connect( mapStateToProps )( MainContent );
