import { useEffect, useRef, useState } from "react";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import axios from "axios";
import { useHistory } from "react-router-dom";

export default function ModificarPersona(props) {
  const [usuarios, setUsuarios] = useState([""]);
  const [usuarioElegidoId, setUsuarioElegidoId] = useState("");
  const history = useHistory();

  const id = props.match.params.id; //Obtiene el id que se pasa por params
  const usuarioRef = useRef();

  useEffect(() => {
    obtenerUsuarios();
  }, []);
  function obtenerUsuarios() {
    axios
      .get("http://localhost:3001/persona")
      .then((res) => {
        setUsuarios(res.data);
      })
      .catch((err) => {
        alert("Ha surgido un error al obtener los datos");
        console.log(err);
      });
  }
  function comprobarCambios() {
    let currentUserId = usuarios.filter(
      (user) => user.nombre === usuarioRef.current.value
    );

    setUsuarioElegidoId({
      persona_id: currentUserId[0]._id,
    });
  }
  async function enviarCambios(event) {
    //Modifica al usuario y luego te redirecciona el listado de personas
    event.preventDefault();
    axios
      .put(`http://localhost:3001/libro/prestar/${id}`, usuarioElegidoId)
      .then(() => {
        alert("Libro prestado exitosamente");
        history.push("/libros/listado");
      })
      .catch((err) => {
        alert("Ha ocurrido un error");
        console.log(err);
      });
  }
  return (
    <Card>
      <Card.Header>
        <Card.Title>Prestar libro</Card.Title>
      </Card.Header>
      <Card.Body>
        <Form onSubmit={enviarCambios}>
          <Form.Group>
            <Form.Control
              as="select"
              name="persona_id"
              ref={usuarioRef}
              onChange={comprobarCambios}
              placeholder="Usuarios"
              required
            >
              {
                /*funcion que itera las categorias*/
                usuarios.map((user) => {
                  return (
                    <option key={user._id} id={user._id}>
                      {user.nombre}
                    </option>
                  );
                })
              }
            </Form.Control>
          </Form.Group>
          <Button type="submit">Enviar</Button>
        </Form>
      </Card.Body>
    </Card>
  );
}
