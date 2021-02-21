import axios from "axios";
import React, { useRef, useState } from "react";
import { useHistory } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";

function CreacionGenero() {

  const [nuevaCategoria, setNuevaCategoria] = useState("");
  const history = useHistory();

  const nombreRef = useRef();

  function comprobarCambios() {
    setNuevaCategoria({
      nombre: nombreRef.current.value,
    });
  }

  async function crearCategoria(e) {
    e.preventDefault();
    const { nombre } = nuevaCategoria;
    try {
      const response = await axios
        .post("http://localhost:3000/categoria", {
          nombre
        })
        .then((res) => console.log(res))
        .catch((error) => console.log(error));
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <br></br>
      <br></br>

      <Container>
        <Card>
          <Card.Header>
            <Card.Title>Crear nuevo Genero/Categoria</Card.Title>
          </Card.Header>
          <Card.Body>
            <Form method="post" action="">
              <Form.Group>
                <Form.Control
                  type="text"
                  name="nombre"
                  ref={nombreRef}
                  onChange={comprobarCambios}
                  placeholder="Nombre"
                  required
                ></Form.Control>
              </Form.Group>
              <Button variant="danger" type="submit" onClick={crearCategoria}>
                Crear
              </Button>
              <Button
                variant="danger"
                type="reset"
                style={{ marginLeft: "5px" }}
              >
                Limpiar
              </Button>
              <Button
                variant="danger"
                onClick={() => history.goBack()}
                className="float-right"
              >
                Volver
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
}

export default CreacionGenero;