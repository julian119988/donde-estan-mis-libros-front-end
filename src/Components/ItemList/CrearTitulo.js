export default function CrearTitulo(props) {
  const filaArray = Object.keys(props.fila);

  function devolverTitulo() {
    return (
      <>
        <tr>
          {filaArray.map((campo, index) => {
            if (filaArray.length !== index + 1) {
              return (
                <th scope="col" key={Math.random(1000)}>
                  {campo.charAt(0).toUpperCase() + campo.slice(1)}
                </th>
              );
            } else {
              return (
                <>
                  <th scope="col">
                    {campo.charAt(0).toUpperCase() + campo.slice(1)}
                  </th>
                  <th scope="col">Borrar | Editar</th>
                </>
              );
            }
          })}
        </tr>
      </>
    );
  }

  // Se leen las keys de la primer fila de la tabla, para armar la misma, luego se pone mayuscula la primer letra. Tambien se agrega Borrar | Editar al final.

  return devolverTitulo();
}
