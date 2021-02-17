import Table from "react-bootstrap/Table";
import ItemList from "../../ItemList/ItemList";
import axios from "axios";
import { useEffect, useState } from "react";

const ListadoPersona = () => {
  const [personas, setPersonas] = useState([""]);

  function fetchPersona() {
    return axios.get("http://localhost:3001/persona").then((response) => {
      setPersonas((personas) => {
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

  return (
    <Table className="table-bordered table-hover">
      <thead className="thead-dark">
        <tr key="primerTr" className=".thead-dark">
          {Object.keys(personas[0]).map((key, index) => {
            return (
              // Se leen las keys de el primer item de la tabla, para armar la misma, luego se pone mayuscula la primer letra, (se tiene que hacer una peticion con axios)falta.
              <th scope="col" key={key.toString() + index.toString()}>
                {key.charAt(0).toUpperCase() + key.slice(1)}
              </th>
            );
          })}
        </tr>
      </thead>
      <tbody>
        {personas.map((fila) => {
          return <ItemList fila={fila} key={returnId(fila)} />;
        })}
      </tbody>
    </Table>
  );
};

export default ListadoPersona;
