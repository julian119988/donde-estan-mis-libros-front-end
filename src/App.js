
import { BrowserRouter, Link, Route, Switch} from "react-router-dom";
import './App.css';
import Persona from './components/persona/Persona';
import Libro from './components/libro/Libro';
import Genero from './components/genero/Genero';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <BrowserRouter>

      <Link to='/personas'><Button variant="danger">Personas</Button>{' '} </Link>
      <Link to='/libros'><Button variant="danger">Libros</Button>{' '}</Link>
      <Link to='/generos'><Button variant="danger">Generos</Button>{' '}</Link>
      <Link to='/'><Button variant="danger">Inicio</Button>{' '}</Link>

      <Switch>
        <Route path='/personas'><Persona/></Route>
        <Route path='/libros'><Libro/></Route>
        <Route path='/generos'><Genero/></Route>
        <Route exact path='/'></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
