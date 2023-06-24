import logo from './logo.svg';
import './App.css';
import Hello from './components/Main';
import InputName from './components/InputName';

function App() {
  return (
    <div className="App">
      <Hello />
      <InputName />
    </div>
  );
}

const mapStateToProps = (state) => ({
  name: state.nome
})

export default App;
