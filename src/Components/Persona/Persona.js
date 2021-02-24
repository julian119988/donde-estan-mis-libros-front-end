import { Link, Route, Switch, useHistory } from "react-router-dom";
import ListadoPersona from "./ListadoPersona/ListadoPersona";
import CreacionPersona from "./CreacionPersona/CreacionPersona";
import ModificarPersona from "./ModificarPersona/ModificarPersona";

import "./Persona.css";
import ButtonGroup from "react-bootstrap/ButtonGroup";

import Button from "react-bootstrap/Button";

function Persona() {
  return (
    <>
      <h1>Personas</h1>

      <ButtonGroup aria-label="Basic example">
        <Link to="/personas/creacion">
          <Button variant="danger">Crear Persona</Button>
        </Link>
        <Link to="/personas/listado">
          <Button variant="danger" style={{ marginLeft: "-4px" }}>
            Listado de personas
          </Button>
        </Link>
      </ButtonGroup>

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
