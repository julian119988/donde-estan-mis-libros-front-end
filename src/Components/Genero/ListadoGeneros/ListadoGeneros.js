import Table from "react-bootstrap/Table";
import axios from "axios";
import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";

const ListadoGeneros = (props) => {
  const [generos, setGeneros] = useState([""]);

  function fetchGeneros() {
    console.log("fetchGeneros: ")
    return axios.get('http://localhost:3001/categoria').then((response) => {
      setGeneros(response.data);
    });
  }

  useEffect(() => {
    console.log("useEffect")
    fetchGeneros();
  }, []);


  const borrarGenero = async (genero) => {
    console.log(genero)

    //Borra un un item en la base de datos que coincida con la direcion url y el id. Luego ejecuta la funcion refresh que se envia por props y sirve para renderizar la tabl nuevamente
    if (window.confirm("Esta seguro que quiere borrar a ese usuario?")) {
      try {
        await axios.delete(`http://localhost:3001/categoria/${genero._id}`)
        alert("Se ha borrrado al usuario exitosamente");
      } catch (error) {
        console.log("error",error )
        alert(error.mensaje);
      }
    }
  }

  function modificarGenero() {
   
  }

  return (
    <>
      <Table className="table-bordered table-hover" responsive>
        <thead className="thead-dark">
          Generos disponibles
        </thead>
        <tbody>
          <td>
            {generos.map((genero, index) => {
              return (
                <>
                  <tr key={index}>
                    <td>{genero.nombre} </td>
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
                        onClick={(event) => modificarGenero(genero)} > Modificar </Button>
                    </td>



                  </tr>
                </>
              )
            })} </td>
        </tbody>
      </Table>
    </>
  );
};

export default ListadoGeneros;
