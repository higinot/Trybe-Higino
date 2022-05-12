import "./App.css";
import Greeting from "./Componentes/Greeting";
import Info from "./Componentes/Info";
import Image from "./Componentes/Image";
import List from "./Componentes/List";

function App() {
  const staringCat =
    "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg";

  return (
    <div className="App">
      <Greeting name="Método" lastName="Classe" /> {/* Pelo método de classe */}
      <Info name="Método" lastName="Função" /> {/* Pelo método de função */}
      <List />
      <div>
        <Image source={staringCat} alternativeText="Cute cat staring" /> {/* this.props.(valor que deve ser escrito) */}
      </div>
    </div>
  );
}

export default App;
