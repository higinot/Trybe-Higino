import React from 'react';
import MainContent from '../MainContent/MainContent';
import SideBar from '../SideBar/SideBar';
import categories from '../../data/vinteFlix';
import './App.css';

class App extends React.Component {

  // armazenamento do nosso state e disponibilização
  render() {
    return (
      <div className="App">
        <h1>VinteFlix</h1>
        <main className="content-wrapper">
          <SideBar />
          {/* <SideBar
            categories={categories}
            selectedMovie={selectedMovie}
            changeSelectedMovie={this.changeSelectedMovie} /> */}
          <MainContent />
        </main>
      </div>
    );
  }
}

export default App;
