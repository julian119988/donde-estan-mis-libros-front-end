import { Link, Route, Switch, useHistory } from "react-router-dom";
import ListadoPersona from "./ListadoPersona/ListadoPersona";
import CreacionPersona from "./CreacionPersona/CreacionPersona";
import ModificarPersona from "./ModificarPersona/ModificarPersona";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Button from "react-bootstrap/Button";

function Persona() {
  return (
    <Container>
      <h1>Personas</h1>
      <br></br>
      <Container>
        <Row>
          <Col>
            <Link to="/personas/creacion" style={{ textDecoration: "none" }}>
              <Button variant="danger" block style={{ height: "100%" }}>
                Crear Persona
              </Button>{" "}
            </Link>
          </Col>
          <Col>
            <Link to="/personas/listado" style={{ textDecoration: "none" }}>
              <Button variant="danger" block style={{ height: "100%" }}>
                Listado de personas
              </Button>{" "}
            </Link>
          </Col>
        </Row>
      </Container>

      <br></br>
      <br></br>

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
    </Container>
  );
}

export default Persona;
