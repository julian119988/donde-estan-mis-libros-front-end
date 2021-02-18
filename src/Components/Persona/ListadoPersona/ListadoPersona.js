import Table from "react-bootstrap/Table";
import ItemList from "../../ItemList/ItemList";
import axios from "axios";
import { useEffect, useState } from "react";

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
        <tr key="primerTr" className=".thead-dark">
          {Object.keys(personas[0]).map((key, index) => {
            return agregarBorrarModificar(key, index);

            // Se leen las keys de el primer item de la tabla, para armar la misma, luego se pone mayuscula la primer letra, (se tiene que hacer una peticion con axios)falta.
          })}
        </tr>
      </thead>
      <tbody>
        {personas.map((fila) => {
          return (
            <ItemList
              fila={fila}
              key={returnId(fila)}
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
