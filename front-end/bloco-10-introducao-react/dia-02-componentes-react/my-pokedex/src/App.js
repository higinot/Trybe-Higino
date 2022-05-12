import "./App.css";
import Pokemon from "./Components/Pokemon";
import Card from "./Components/Card";
import pokemons from "./Components/Data/Data" /* Preciso importar */

function App() {
  return (
    <div className="App">
      <Pokemon />
      <div className="container">
        <div className="row">
            <Card pokemons={pokemons}/>
        </div>
      </div>
    </div>
  );
}

export default App;
