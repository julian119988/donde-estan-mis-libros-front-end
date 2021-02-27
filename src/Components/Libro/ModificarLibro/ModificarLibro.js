import { useRef, useState } from "react";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import axios from "axios";
import { useHistory } from "react-router-dom";

export default function ModificarPersona(props) {
  const [libroModificado, setLibroModificado] = useState("");
  const history = useHistory();

  const id = props.match.params.id; //Obtiene el id que se pasa por params
  const descripcionRef = useRef();

  function comprobarCambios() {
    setLibroModificado({
      descripcion: descripcionRef.current.value,
    });
  }
  async function enviarCambios(event) {
    //Modifica al usuario y luego te redirecciona el listado de personas
    event.preventDefault();
    console.log(libroModificado);
    await axios
      .put(`http://localhost:3001/libro/${id}`, libroModificado)
      .then((res) => {
        console.log(res.data);
        alert("Libro modificado con exito");
        history.push("/libros/listado");
      })
      .catch((error) => {
        alert("No se ha podido modificar al usuario.");
      });
  }
  return (
    <Card>
      <Card.Header>
        <Card.Title>Modificar libro.</Card.Title>
      </Card.Header>
      <Card.Body>
        <Form onSubmit={enviarCambios}>
          <Form.Group>
            <Form.Control
              as="textarea"
              name="descripcion"
              ref={descripcionRef}
              onChange={comprobarCambios}
              placeholder="Descripcion"
              required
            ></Form.Control>
          </Form.Group>
          <Button type="submit">Enviar</Button>
        </Form>
      </Card.Body>
    </Card>
  );
}
