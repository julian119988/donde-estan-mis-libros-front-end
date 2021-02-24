import Table from "react-bootstrap/Table";
import ItemList from "../../ItemList/ItemList";
import axios from "axios";
import { useEffect, useState } from "react";
import CrearTitulo from "../../ItemList/CrearTitulo";
import VerMas from "../../ItemList/VerMas";
import Container from "react-bootstrap/Container";

const ListadoPersona = (props) => {
  const [personas, setPersonas] = useState([""]);
  const [mostrar, setMostrar] = useState(false);
  const [librosPrestados, setLibrosPrestados] = useState([""]);
  const [nuevoId, setNuevoId] = useState("");
  const [titulo, setTitulo] = useState("");

  function fetchPersona() {
    return axios.get(props.url).then((response) => {
      setPersonas((personas) => {
        return response.data;
      });
    });
  }

  useEffect(() => {
    fetchPersona();
  }, []);

  function forzarEstado() {
    fetchPersona();
  }

  function getVerMas(event) {
    if (event.target.nodeName === "BUTTON") {
      return 0;
    } else {
      const id = event.target.parentNode.firstChild.textContent;
      setTitulo(
        event.target.parentNode.childNodes[2].textContent +
          " ," +
          event.target.parentNode.childNodes[1].textContent
      );

      if (nuevoId != id) {
        setMostrar(true);
        setNuevoId(id);
      } else {
        setMostrar(!mostrar);
      }

      axios
        .get(`http://localhost:3001/libro`)
        .then((response) => {
          const librosAsociados = response.data.filter(
            (libro) => libro.persona_id == id
          );
          if (librosAsociados[0] === undefined) {
            setLibrosPrestados(["Esta persona no tiene libros asociados"]);
          } else {
            setLibrosPrestados(librosAsociados);
          }
        })
        .catch((error) => console.error(error));
    }
  }

  return (
    <Container>
      <Table className="table-bordered table-hover" responsive>
        <thead className="thead-dark">
          <CrearTitulo fila={personas[0]} key={Math.random(1000)}></CrearTitulo>
        </thead>
        <tbody>
          {personas.map((fila) => {
            //A ItemList se le envia de a filas al igual que CrearTitulo
            return (
              <ItemList
                verMas={getVerMas}
                fila={fila}
                key={Math.random(1000)}
                url={props.url}
                refresh={forzarEstado}
                pagina="personas"
              />
            );
          })}
        </tbody>
      </Table>
      <VerMas show={mostrar} titulo={titulo} body={librosPrestados}></VerMas>
    </Container>
  );
};

export default ListadoPersona;
