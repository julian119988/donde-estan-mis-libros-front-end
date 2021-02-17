import axios from "axios";
import React, { useRef, useState } from "react";
import { useHistory } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";

function CreacionPersona() {
  const [nuevoUsuario, setNuevoUsuario] = useState();
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
          nombre: nombre,
          apellido: apellido,
          email: email,
          alias: alias,
        })
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <div className="form">
        <Button variant="danger" onClick={() => history.goBack()}>
          Volver
        </Button>
        <div className="form">
          <h1>Crear nueva persona</h1>
          <Container>
            <Row>
              <Col>
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
                  <Button variant="danger" type="submit" onClick={crearPersona}>
                    Registrarse
                  </Button>
                </Form>
              </Col>
            </Row>
          </Container>

          <form action="" method="post" onSubmit={crearPersona}>
            <div className="top-row">
              <div className="field-wrap">
                <input
                  type="text"
                  name="nombre"
                  ref={nombreRef}
                  onChange={comprobarCambios}
                  placeholder="Nombre"
                  required
                />
              </div>
              <div className="field-wrap">
                <input
                  type="email"
                  name="apellido"
                  ref={apellidoRef}
                  onChange={comprobarCambios}
                  placeholder="Apellido"
                  required
                />
              </div>
              <div className="field-wrap">
                <input
                  type="text"
                  name="email"
                  ref={emailRef}
                  onChange={comprobarCambios}
                  placeholder="Email"
                  required
                />
              </div>
              <div className="field-wrap">
                <input
                  type="text"
                  name="alias"
                  ref={aliasRef}
                  onChange={comprobarCambios}
                  placeholder="Alias"
                  required
                />
              </div>
            </div>
            <Button variant="danger" onClick={() => history.goBack()}>
              Registrarse
            </Button>
          </form>
        </div>
      </div>
    </>
  );
}

export default CreacionPersona;
