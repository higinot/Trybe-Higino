import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import HowTo from "./components/HowTo";
import Profile from "./components/Profile";
import What from "./components/What";

function App() {
  return (
    <BrowserRouter>
      <Route  path='/about' component={About} />
      <Route path='/howto' component={HowTo} />
      <Route path='/profile' render={() => <Profile name='Higino' />} />
      <Route path='/what/:name' render={(props) => <What {...props} name='Guilherme' />} />
      <Route exact path='/' component={Home} />
    </BrowserRouter>
  );
}

export default App;
