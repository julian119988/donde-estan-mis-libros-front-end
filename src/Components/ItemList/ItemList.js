import Button from "react-bootstrap/Button";
import axios from "axios";
import { useHistory } from "react-router-dom";

export default function ItemList(props) {
  let history = useHistory();

  function getId(event) {
    //Retorna el valor del primer campo de la fila que se indique
    event.preventDefault();
    const campo = event.target.parentElement;
    const fila = campo.parentElement;
    return fila.firstChild.textContent;
  }

  function borrarItem(id) {
    //Borra un un item en la base de datos que coincida con la direcion url y el id. Luego ejecuta la funcion refresh que se envia por props y sirve para renderizar la tabl nuevamente
    if (window.confirm("Esta seguro que quiere borrar a ese usuario?")) {
      axios
        .delete(props.url + "/" + id)
        .then(() => {
          alert("Se ha borrrado al usuario exitosamente");
          props.refresh();
        })
        .catch((err) => {
          alert(err.response.data.mensaje); //Toma el error de la base de datos y lo muestra en pantalla
        });
    }
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
    //Si no es la ultima columna entonces envia solo un campo, si es la ultima columna envia 2 campos, siendo uno de ellos los botones.
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
