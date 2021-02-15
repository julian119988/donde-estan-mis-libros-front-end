import axios from "axios";
import React, { useRef, useState } from "react";
import { useHistory } from "react-router-dom";
import Button from 'react-bootstrap/Button';

function CreacionPersonas() {

  const [nuevoUsuario, setNuevoUsuario] = useState();
  const history = useHistory();

  const nombreRef = useRef();
  const apellidoRef = useRef();
  const emailRef = useRef();
  const aliasRef = useRef();

  function comprobarCambios() {
    setNuevoUsuario({
      nombre: nombreRef.current.value,
      apellido: apellidoRef.current.value,
      email: emailRef.current.value,
      alias: aliasRef.current.value,
    });
  }


  async function crearPersona(e) {
    e.preventDefault();
    console.log("Crear usuario");
    const { nombre, apellido, email, email } = nuevoUsuario;
    try {
      const res = await axios.post("http://localhost:3000/users/user", {
        nombre,
        apellido,
        email,
        email
      });
      console.log(res);
      history.goBack();
    } catch (error) {
      console.log(error);
    }

  }

  return (
    <>
      <div className="form">
        <Button variant="danger" onClick={() => history.goBack()}>Volver</Button>
        <div className="form">
          <h1>Crear nueva persona</h1>
          <form action="" method="post" onSubmit={crearPersona}>
            <div className="top-row">
              <div className="field-wrap">
                <input type="text"
                  name="nombre"
                  ref={nombreRef}
                  onChange={comprobarCambios}
                  placeholder="Nombre"
                  required />
              </div>
              <div className="field-wrap">
                <input type="email"
                  name="apellido"
                  ref={apellidoRef}
                  onChange={comprobarCambios}
                  placeholder="Apellido"
                  required />
              </div>
              <div className="field-wrap">
                <input type="text"
                  name="email"
                  ref={emailRef}
                  onChange={comprobarCambios}
                  placeholder="Email"
                  required />
              </div>
              <div className="field-wrap">
                <input type="text"
                  name="alias"
                  ref={aliasRef}
                  onChange={comprobarCambios}
                  placeholder="Alias"
                  required />
              </div>
            </div>
            <Button variant="danger" onClick={() => history.goBack()}>Registrarse</Button>
          </form >
        </div >
      </div>
    </>

  );
}

export default CreacionPersonas;