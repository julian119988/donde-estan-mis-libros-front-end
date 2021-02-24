import axios from "axios";
import React, { useRef, useState } from "react";
import { useHistory } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";

function CreacionPersona() {
  const [nuevoUsuario, setNuevoUsuario] = useState("");
  const history = useHistory();

  const nombreRef = useRef();
  const apellidoRef = useRef();
  const emailRef = useRef();
  const aliasRef = useRef();

  function comprobarCambios() {
    setNuevoUsuario({
      nombre: nombreRef.current.value,
      apellido: apellidoRef.current.value,
      email: emailRef.current.value,
      alias: aliasRef.current.value,
    });
  }

  async function crearPersona(e) {
    e.preventDefault();
    console.log("Crear usuario");
    const { nombre, apellido, email, alias } = nuevoUsuario;
    console.log(nuevoUsuario);
    try {
      const response = await axios
        .post("http://localhost:3001/persona", {
          nombre,
          apellido,
          email,
          alias,
        })
        .then((res) => {
          console.log(res);
          alert("Usuario registrado con exito");
          history.replace("listado");
        })
        .catch((error) => {
          alert("No se ha podido crear al usuario");
          console.log(error);
        });
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Container>
      <Card>
        <Card.Header>
          <Card.Title>Crear nueva persona</Card.Title>
        </Card.Header>
        <Card.Body>
          <Form onSubmit={crearPersona}>
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
            <Form.Group>
              <Form.Control
                type="text"
                name="apellido"
                ref={apellidoRef}
                onChange={comprobarCambios}
                placeholder="Apellido"
                required
              ></Form.Control>
            </Form.Group>
            <Form.Group>
              <Form.Control
                type="text"
                name="email"
                ref={emailRef}
                onChange={comprobarCambios}
                placeholder="Email"
                required
              ></Form.Control>
            </Form.Group>
            <Form.Group>
              <Form.Control
                type="text"
                name="alias"
                ref={aliasRef}
                onChange={comprobarCambios}
                placeholder="Alias"
                required
              ></Form.Control>
            </Form.Group>
            <Button variant="danger" type="submit">
              Registrarse
            </Button>
            <Button variant="danger" type="reset" style={{ marginLeft: "5px" }}>
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
  );
}

export default CreacionPersona;
