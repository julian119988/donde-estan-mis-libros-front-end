import axios from "axios";
import React, { useRef, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";

function CrearLibro() {
  const [nuevoLibro, setNuevoLibro] = useState();
  const [categoria, setCategoria] = useState([""]);
  const history = useHistory();

  const nombreRef = useRef();
  const descripcionRef = useRef();
  const categoriaIdRef = useRef();

  function comprobarCambios() {
    let categoriaSeleccionadaId = "";
    for (let index = 0; index < categoria.length; index++) {
      if (categoria[index].nombre === categoriaIdRef.current.value) {
        categoriaSeleccionadaId = categoria[index]._id;
      }
    }
    setNuevoLibro({
      nombre: nombreRef.current.value,
      descripcion: descripcionRef.current.value,
      categoria_id: categoriaSeleccionadaId,
    });
  }

  async function crearLibro(e) {
    e.preventDefault();
    console.log(nuevoLibro);
    const res = await axios
      .post("http://localhost:3001/libro", nuevoLibro)
      .then((response) => {
        console.log(response);
        alert("Libro agregado exitosamente");
        history.replace("listado");
      })
      .catch((error) => {
        alert(error.response.data.mensaje);
        console.log(error.response);
      });
  }

  function fetchCategorias() {
    axios
      .get("http://localhost:3001/categoria")
      .then((response) => {
        setCategoria(response.data);
      })
      .catch((error) => {
        console.log("Error inesperado", error);
      });
  }

  useEffect(() => {
    fetchCategorias();
  }, []);

  return (
    <Container>
      <Card>
        <Card.Header>
          <Card.Title>Agregar nuevo libro</Card.Title>
        </Card.Header>
        <Card.Body>
          <Form onSubmit={crearLibro}>
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
                as="textarea"
                name="descripcion"
                ref={descripcionRef}
                onChange={comprobarCambios}
                placeholder="Descripcíon"
                required
              ></Form.Control>
            </Form.Group>
            <Form.Group>
              <Form.Control
                as="select"
                name="categoria_id"
                ref={categoriaIdRef}
                onChange={comprobarCambios}
                placeholder="Categoría"
                required
              >
                {
                  /*funcion que itera las categorias*/
                  categoria.map((category) => {
                    return (
                      <option key={category._id} id={category._id}>
                        {category.nombre}
                      </option>
                    );
                  })
                }
              </Form.Control>
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

export default CrearLibro;
