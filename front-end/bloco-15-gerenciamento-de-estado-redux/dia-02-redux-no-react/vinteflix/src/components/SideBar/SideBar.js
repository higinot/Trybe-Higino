import React from 'react';
import { connect } from 'react-redux';
import './SideBar.css';

class SideBar extends React.Component {

  selectMovie = (categoryId, movieId) => {
    // event.preventDefault();
    
    // const movie = this.props.categories[categoryId][movieId];
    console.log(`Clicou no filme da categoria ${categoryId} com a id ${movieId}`);
    const selectedCategory = this.props.categories.find(
      category => (category.id === categoryId)
    ) 
    const selectedMovie = selectedCategory.movies.find(
      movie => movie.id === movieId
    );
    console.log(selectedMovie)
    // escrita
    // this.props.changeSelectedMovie(selectedMovie);

    // depois acerta
    // this.props.dispatch( { type: 'MUDAR_FILME', payload: selectedMovie } );
    this.props.dispatchChangeName(selectedMovie);

  }

  render() {
    console.log(this.props)
    // leitura
    const { categories, selectedMovie } = this.props;

    return (
      <div className="SideBar">
        <ul>
          {
            categories.map( category => (
              <li key={category.id}>
                <span className='categoria'>{category.name}</span>
                {category.movies.map( movie => (
                  <button key={movie.id}
                    onClick={() => this.selectMovie(category.id, movie.id)} >
                      {`${movie.day} ${movie.trybe} ${movie.title}`}</button>
                ) )}
              </li>
            ))
          }
        </ul>
      </div>
    );
  }
}
// export default SideBar;

// Mapeia state(store) para props no meu componente
/* <SideBar adicionaChave={true} > */
const mapStateToProps = (state) => ({
  meuState: state,
  categories: state.categories,
  selectedMovie: state.selectedMovie
});

const mapDispatchToProps = (dispatch) => ({
  dispatchChangeName: (selectedMovie) => {
    dispatch( { type: 'MUDAR_FILME', payload: selectedMovie } );
  }
});

// this.props.dispatchChangeName(selectedMovie)

export default connect( mapStateToProps, mapDispatchToProps )( SideBar );
