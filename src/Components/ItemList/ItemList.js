export default function ItemList(props) {
  function handleClick(event) {
    event.preventDefault();
    const element = event.target.parentElement;
    const parent = element.parentElement; // Aca iria el componente modificarItem
    parent.removeChild(element); // Ademas se tiene que acceder a la db y borrar ahi luego, luego renderizar el componente nuevamente
  }

  function iterarObjeto(objeto) {
    const claves = Object.keys(objeto); //  Esta funcion recibe un objeto y devuelve los valores de cada campo el objeto
    return claves.map((index) => {
      return objeto[index];
    });
  }

  return (
    //cada td necesita una key asi que puse math random, ya que el que importa es tr y le inserto la key en ListadoPersona
    <tr onClick={(event) => handleClick(event)}>
      {iterarObjeto(props.fila).map((campo) => {
        return (
          <td style={{ cursor: "pointer" }} key={Math.random(1000)}>
            {campo}
          </td>
        );
      })}
    </tr>
  );
}
