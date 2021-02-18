import { useRef, useState } from "react";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import axios from "axios";
import { useHistory } from "react-router-dom";

export default function ModificarPersona(props) {
  const [usuarioModificado, setUsuarioModificado] = useState("");
  const history = useHistory();

  const id = props.match.params.id;
  const nombreRef = useRef();
  const apellidoRef = useRef();
  const aliasRef = useRef();

  function comprobarCambios() {
    setUsuarioModificado({
      nombre: nombreRef.current.value,
      apellido: apellidoRef.current.value,
      alias: aliasRef.current.value,
    });
  }
  async function enviarCambios(event) {
    event.preventDefault();
    await axios
      .put(`http://localhost:3001/persona/${id}`, usuarioModificado)
      .then((res) => {
        console.log(res.data);
      })
      .then(() => history.push("/personas/listado"))
      .catch((error) => console.log(error));
  }
  return (
    <Card>
      <Card.Header>
        <Card.Title>Modificar usuario.</Card.Title>
      </Card.Header>
      <Card.Body>
        <Form onSubmit={enviarCambios}>
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
              name="alias"
              ref={aliasRef}
              onChange={comprobarCambios}
              placeholder="Alias"
              required
            ></Form.Control>
          </Form.Group>
          <Button type="submit">Enviar</Button>
        </Form>
      </Card.Body>
    </Card>
  );
}
