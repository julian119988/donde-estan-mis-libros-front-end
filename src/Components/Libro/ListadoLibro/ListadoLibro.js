import Table from "react-bootstrap/Table";
import ItemList from "../../ItemList/ItemList";
import axios from "axios";
import { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import CrearTitulo from "../../ItemList/CrearTitulo";
import Button from "react-bootstrap/esm/Button";
import { useHistory } from "react-router-dom";

function ListadoLibro(props) {
  const [titulo, setTitulo] = useState([""]);
  const [filas, setFilas] = useState([""]);
  let libros = [""];
  let categorias = [""];
  const history = useHistory();
  let extra = "";

  function cargaDeDatos() {
    axios
      .get("http://localhost:3001/libro")
      .then((res) => {
        axios.get(`http://localhost:3001/categoria`).then((categoria) => {
          libros = res.data;
          categorias = categoria.data;
          setFilas(ordenarFilas(libros));
          setTitulo(tituloOrdenado(libros[0]));
        });
      })
      .catch((err) => console.error(err));
  }
  function tituloOrdenado(libro) {
    return {
      _id: libro._id,
      nombre: libro.nombre,
      descripcion: libro.descripcion,
      categoria: libro.categoria_id,
      prestado: libro.persona_id,
    };
  }
  useEffect(() => {
    cargaDeDatos();
  }, []);

  function ordenarFilas(libro) {
    const newArray = libro.map((fila) => {
      return {
        _id: fila._id,
        nombre: fila.nombre,
        descripcion: fila.descripcion,
        categoria: obtenerCategoriaNombre(fila),
        prestado: fila.persona_id[0]
          ? BotonDevolver(fila.persona_id[0].alias)
          : BotonPrestar(),
      };
    });
    return newArray;
  }
  function forzarEstado() {
    cargaDeDatos();
  }

  function prestar(event) {
    const id = event.target.parentElement.parentElement.firstChild.textContent;
    history.push(`prestar/${id}`);
  }

  function BotonDevolver(alias) {
    return (
      <>
        <p>
          Libro prestado a <b>{alias}</b>
        </p>
        <Button variant="danger" onClick={devolver}>
          Devolver
        </Button>
      </>
    );
  }
  function obtenerCategoriaNombre(fila) {
    return categorias.filter((categoria) => {
      if (fila.categoria_id[0]._id === categoria._id) {
        return categoria.nombre;
      }
    })[0].nombre;
  }

  function BotonPrestar() {
    return (
      <>
        <p>
          Este libro <b>NO</b> se encuentra prestado
        </p>
        <Button variant="primary" onClick={prestar}>
          Prestar
        </Button>
      </>
    );
  }
  function devolver(event) {
    const id = event.target.parentElement.parentElement.firstChild.textContent;

    axios
      .put(`http://localhost:3001/libro/devolver/${id}`)
      .then((res) => {
        console.log(res);
        alert("Se realizó la devolucion correctamente");
        forzarEstado();
      })
      .catch((err) => {
        console.log(err);
        alert("Ha surgido un error");
      });
  }

  return (
    <Container>
      <Table className="table-bordered table-hover" responsive>
        <thead className="thead-dark">
          <CrearTitulo
            mostrarExtra={false}
            extra={"persona_id"}
            fila={titulo}
            key={Math.random(1000)}
          ></CrearTitulo>
        </thead>
        <tbody>
          {filas.map((fila, index) => {
            return (
              <ItemList
                mostrarExtra={false}
                extra={extra}
                verMas={null}
                fila={fila}
                key={Math.random(1000)}
                url={"http://localhost:3001/libro"}
                refresh={forzarEstado}
                pagina="libros"
              />
            );
          })}
        </tbody>
      </Table>
    </Container>
  );
}

export default ListadoLibro;
