import Table from "react-bootstrap/Table";
import ItemList from "../../ItemList/ItemList";
import axios from "axios";
import { useEffect, useState } from "react";
import CrearTitulo from "../../ItemList/CrearTitulo";

const ListadoPersona = (props) => {
  const [personas, setPersonas] = useState([""]);
  const [actualizarLista, setActualizarLista] = useState(false);

  function fetchPersona() {
    return axios.get(props.url).then((response) => {
      setPersonas((personas) => {
        console.log(response);
        return response.data;
      });
    });
  }

  useEffect(() => {
    fetchPersona();
  }, []);

  function returnId(fila) {
    //Esta funcion devuelve un id random al inicio ya que no puede definir undefined como key.
    return fila._id ? fila._id : Math.random(1000);
  }
  function forzarEstado() {
    fetchPersona();
  }

  function agregarBorrarModificar(key, index) {
    const tamanioObjeto = Object.keys(personas[0]).length;
    if (!(tamanioObjeto === index + 1)) {
      return (
        <th scope="col" key={Math.random(1000)}>
          {key.charAt(0).toUpperCase() + key.slice(1)}
        </th>
      );
    } else {
      return (
        <>
          <th scope="col" key={Math.random(1000)}>
            {key.charAt(0).toUpperCase() + key.slice(1)}
          </th>
          <th scope="col" key={Math.random(1000)}>
            Borrar | Editar
          </th>
        </>
      );
    }
  }

  return (
    <Table className="table-bordered table-hover">
      <thead className="thead-dark">
        <CrearTitulo fila={personas[0]} key={Math.random(1000)}></CrearTitulo>
      </thead>
      <tbody>
        {personas.map((fila) => {
          //A ItemList se le envia de a filas al igual que CrearTitulo
          return (
            <ItemList
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
  );
};

export default ListadoPersona;
