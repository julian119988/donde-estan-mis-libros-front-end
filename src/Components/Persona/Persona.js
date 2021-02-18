import Button from "react-bootstrap/Button";
import { Link, Route, Switch } from "react-router-dom";
import ListadoPersona from "./ListadoPersona/ListadoPersona";
import CreacionPersona from "./CreacionPersona/CreacionPersona";
import ModificarPersona from "./ModificarPersona/ModificarPersona";

function Persona() {
  return (
    <>
      <h1>Personas</h1>
      <Link to="/personas/creacion">
        <Button variant="danger">Crear Persona</Button>{" "}
      </Link>
      <Link to="/personas/listado">
        <Button variant="danger">Listado de Personas</Button>{" "}
      </Link>

      <Switch>
        <Route path="/personas/creacion">
          <CreacionPersona />
        </Route>
        <Route path="/personas/listado">
          <ListadoPersona url="http://localhost:3001/persona" />
        </Route>
        <Route
          path="/personas/modificar/:id"
          component={ModificarPersona}
        ></Route>
      </Switch>
    </>
  );
}

export default Persona;
