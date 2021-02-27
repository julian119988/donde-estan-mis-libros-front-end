import React from "react";
import Button from "react-bootstrap/Button";
import { Link, Route, Switch } from "react-router-dom";
import ListadoLibro from "./ListadoLibro/ListadoLibro";
import CreacionLibro from "./CreacionLibro/CreacionLibro";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ModificarLibro from "./ModificarLibro/ModificarLibro.js";
import PrestarLibro from "./PrestarLibro/PrestarLibro";

function Libro() {
  return (
    <Container>
      <h1>Libros</h1>
      <br></br>
      <Container>
        <Row>
          <Col>
            <Link to="/libros/creacion" style={{ textDecoration: "none" }}>
              <Button variant="danger" block style={{ height: "100%" }}>
                Crear Libro
              </Button>{" "}
            </Link>
          </Col>
          <Col>
            <Link to="/libros/listado" style={{ textDecoration: "none" }}>
              <Button variant="danger" block style={{ height: "100%" }}>
                Listado de Libros
              </Button>{" "}
            </Link>
          </Col>
        </Row>
      </Container>

      <br></br>
      <br></br>
      <Switch>
        <Route path="/libros/creacion">
          <CreacionLibro />
        </Route>
        <Route path="/libros/listado">
          <ListadoLibro />
        </Route>
        <Route path="/libros/modificar/:id" component={ModificarLibro}></Route>
        <Route path="/libros/prestar/:id" component={PrestarLibro}></Route>
      </Switch>
    </Container>
  );
}

export default Libro;
