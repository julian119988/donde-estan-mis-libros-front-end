import React from "react";
import CreacionGenero from "./CreacionGenero/CreacionGenero";
import Button from "react-bootstrap/Button";
import { Link, Route, Switch } from "react-router-dom";
import ListadoGeneros from "./ListadoGeneros/ListadoGeneros";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Genero = () => {
  return (
    <Container>
      <h1>Generos</h1>
      <br></br>
      <Container>
        <Row>
          <Col>
            <Link to="/generos/creacion" style={{ textDecoration: "none" }}>
              <Button variant="danger" block style={{ height: "100%" }}>
                Crear Genero
              </Button>{" "}
            </Link>
          </Col>
          <Col>
            <Link to="/generos/listado" style={{ textDecoration: "none" }}>
              <Button variant="danger" block style={{ height: "100%" }}>
                Listado de Generos
              </Button>{" "}
            </Link>
          </Col>
        </Row>
      </Container>
      <br></br>
      <br></br>
      <Switch>
        <Route path="/generos/creacion">
          <CreacionGenero />
        </Route>
        <Route path="/generos/listado">
          <ListadoGeneros />
        </Route>
      </Switch>
    </Container>
  );
};

export default Genero;
