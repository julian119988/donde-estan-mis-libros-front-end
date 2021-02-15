import CreacionPersonas from "./CreacionPersonas";
import Button from 'react-bootstrap/Button';
import { Link, Route, Switch } from "react-router-dom";
import ListadoPersonas from "./ListadoPersonas";
function Persona() {


  return (
    <>
      <h1>Personas</h1>
      <Link to='/personas/creacion'><Button variant="danger">Crear Persona</Button>{' '} </Link>
      <Link to='/personas/listado'><Button variant="danger">Listado de Personas</Button>{' '}</Link>

      <Switch>
        <Route path='/personas/creacion'><CreacionPersonas /></Route>
        <Route path='/personas/listado'><ListadoPersonas /></Route>
      </Switch>
    </>
  );
}

export default Persona;