import Table from "react-bootstrap/Table";
import axios from "axios";
import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import VerMas from "../../ItemList/VerMas";

const ListadoGeneros = (props) => {
  const [generos, setGeneros] = useState([""]);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const [value, setValue] = useState("");
  const [id, setID] = useState("");
  const [libros, setLibros] = useState([""]);
  const [mostrar, setMostrar] = useState(false);
  const [titulo, setTitulo] = useState("");
  const [nuevoId, setNuevoId] = useState("");

  function handleShow(currentGender, currentID) {
    setValue(currentGender);
    setID(currentID);
    setShow(true);
  }

  function fetchGeneros() {
    return axios.get("http://localhost:3001/categoria").then((response) => {
      console.log(response.data);
      setGeneros(response.data);
    });
  }

  useEffect(() => {
    fetchGeneros();
  }, []);

  const borrarGenero = async (genero) => {
    console.log(genero);

    //Borra un un item en la base de datos que coincida con la direcion url y el id. Luego ejecuta la funcion refresh que se envia por props y sirve para renderizar la tabl nuevamente
    if (window.confirm("Esta seguro que quiere borrar a ese item?")) {
      try {
        await axios.delete(`http://localhost:3001/categoria/${genero._id}`);
        alert("Se ha borrrado al genero exitosamente");
        fetchGeneros();
      } catch (error) {
        console.log("error", error);
        alert(error.response.data.mensaje);
      }
    }
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target),
      formDataObj = Object.fromEntries(formData.entries());
    console.log(formDataObj, value, id);
    if (formDataObj.gender.toUpperCase() === value.toUpperCase()) {
      alert(
        "Error, no se puede poner el mismo nombre de una categoria ya existente."
      );
    } else {
      modificarGenero(id, formDataObj.gender);
    }
  };

  function modificarGenero(currentId, currentName) {
    if (currentName) {
      axios({
        method: "put",
        url: `http://localhost:3001/categoria/${id}`,
        data: {
          id: currentId,
          nombre: currentName,
        },
      })
        .then((response) => {
          if (response.status == 200) {
            alert("Se ha editado el genero exitosamente");
            fetchGeneros();
          }
        })
        .catch((error) => {
          alert(error.response.data.mensaje);
        });
    } else {
      alert("No se puede ingresar un campo vacio");
    }
  }

  const searchCategories = async (id, genero) => {
    try {
      await axios
        .get(`http://localhost:3001/libro/ctLibro/${id}`)
        .then((response) => {
          console.log(response.data);
          if (
            response.data == [] ||
            response.data == null ||
            response.data == 0
          ) {
            alert("No existen libros bajo esta categoria");
            setMostrar(false);
          } else {
            //Consulta exitosa
            if (nuevoId === id) {
              setMostrar(!mostrar);
            } else {
              setMostrar(true);
              setNuevoId(id);
            }

            setTitulo(`Libros pertenecientes a la categoria: ${genero}`);
            setLibros(response.data);
          }
        });
    } catch (error) {
      console.log("error", error);
      alert(error.response.data.mensaje);
    }
  };

  return (
    <Container>
      <Table className="table-bordered table-hover" responsive>
        <thead className="thead-dark">Generos disponibles</thead>
        <tbody>
          <td>
            {generos.map((genero, index) => {
              return (
                <>
                  <tr key={index}>
                    <td>{genero.nombre} </td>
                    <td>
                      <Button
                        variant="secondary"
                        onClick={(event) =>
                          searchCategories(genero._id, genero.nombre)
                        }
                        key={index}
                      >
                        Buscar libros por genero
                      </Button>
                    </td>
                    <td>
                      <Button
                        variant="danger"
                        onClick={(event) => borrarGenero(genero)}
                        key={index}
                      >
                        Borrar
                      </Button>
                    </td>
                    <td>
                      <Button
                        key={index}
                        style={{ marginLeft: "5px" }}
                        onClick={(event) =>
                          handleShow(genero.nombre, genero._id)
                        }
                      >
                        {" "}
                        Modificar{" "}
                      </Button>
                      <Modal show={show} onHide={handleClose}>
                        <Form onSubmit={onFormSubmit}>
                          <Modal.Header closeButton>
                            <Modal.Title>Modificar genero</Modal.Title>
                          </Modal.Header>
                          <Modal.Body>
                            <Form.Label>Nombre del genero</Form.Label>
                            <Form.Control type="text" value={value} disabled />
                            <Form.Group controlId="formBasicPassword">
                              <Form.Label>Nuevo genero</Form.Label>
                              <Form.Control type="text" name="gender" />
                            </Form.Group>
                          </Modal.Body>
                          <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                              Cerrar
                            </Button>
                            <Button
                              variant="primary"
                              type="submit"
                              onClick={handleClose}
                            >
                              Guardar cambios
                            </Button>
                          </Modal.Footer>
                        </Form>
                      </Modal>
                    </td>
                  </tr>
                </>
              );
            })}{" "}
          </td>
        </tbody>
      </Table>
      <Container>
        <VerMas show={mostrar} titulo={titulo} body={libros}></VerMas>
      </Container>
    </Container>
  );
};

export default ListadoGeneros;
