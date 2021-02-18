import Button from "react-bootstrap/Button";
import axios from "axios";
import { useHistory } from "react-router-dom";

export default function ItemList(props) {
  let history = useHistory();

  function getId(event) {
    event.preventDefault();
    const campo = event.target.parentElement;
    const fila = campo.parentElement;
    return fila.firstChild.textContent;

    // Ademas se tiene que acceder a la db y borrar ahi luego, luego renderizar el componente nuevamente
  }

  function borrarItem(id) {
    axios
      .delete(props.url + "/" + id)
      .then((res) => {
        console.log(res);
        props.refresh();
      })
      .catch((err) => {
        console.log(err);
      });
  }
  function modificarItem(id) {
    const path = `modificar/` + id;
    history.replace(path);
  }

  function iterarObjeto(objeto) {
    const claves = Object.keys(objeto); //  Esta funcion recibe un objeto y devuelve los valores de cada campo el objeto
    return claves.map((index) => {
      return objeto[index];
    });
  }

  function agregarBotones(campo, index) {
    const tamanioObjeto = Object.keys(props.fila).length;

    if (!(tamanioObjeto === index + 1)) {
      return <td key={Math.random(1000)}>{campo}</td>;
    } else {
      return (
        <>
          <td key={Math.random(1000)}>{campo}</td>
          <td key={Math.random(1000)}>
            <Button
              variant="danger"
              onClick={(event) => borrarItem(getId(event))}
              key={Math.random(1000)}
            >
              Borrar
            </Button>
            <Button
              key={Math.random(1000)}
              style={{ marginLeft: "5px" }}
              onClick={(event) => modificarItem(getId(event), props.pagina)}
            >
              Editar
            </Button>
          </td>
        </>
      );
    }
  }

  return (
    //cada td necesita una key asi que puse math random, ya que el que importa es tr y le inserto la key en ListadoPersona
    <tr>
      {iterarObjeto(props.fila).map((campo, index) =>
        agregarBotones(campo, index)
      )}
    </tr>
  );
}
