import axios from "axios";
import React, { useRef, useState } from "react";
import { useHistory } from "react-router-dom";
import Button from 'react-bootstrap/Button';


function CrearLibro() {

    const [nuevoLibro, setNuevoLibro] = useState();
    const history = useHistory();

    const nombreRef = useRef();
    const descripcionRef = useRef();
    const categoriaIdRef = useRef();

    function comprobarCambios() {
        setNuevoLibro({
            nombre: nombreRef.current.value,
            descripcion: descripcionRef.current.value,
            categoriaId: categoriaIdRef.current.value,
        })
    }

    async function crearLibro(e) {
        e.preventDefault();
        console.log("Agregar Libro");
        const { nombre, descripcion, categoria } = nuevoLibro;
        try {
            const res = await axios.post("http://localhost:3001/libro", {
                nombre,
                descripcion,
                categoria,
            });
            console.log(res);
            history.goBack();
        } catch (error) {
            console.log(error);
        }
    }


    return (
        <div className="form">
            <Button variant="danger" onClick={() => history.goBack()}>Volver</Button>
            <div className="form">
                <h1>Agregar Libro</h1>
                <form action="" method="post" onSubmit={crearLibro}>
                    <div className="top-row">
                        <div className="field-wrap">
                        <input 
                            type="text"
                            name="nombre"
                            ref={nombreRef}
                            onChange={comprobarCambios}
                            placeholder="Nombre"
                            required 
                            />
                        </div>
                        <div className="field-wrap">
                        <input 
                            type="text"
                            name="descripcion"
                            ref={descripcionRef}
                            onChange={comprobarCambios}
                            placeholder="Descripcíon"
                            required 
                            />
                        </div>
                        <input 
                            type="text"
                            name="categoria"
                            ref={categoriaIdRef}
                            onChange={comprobarCambios}
                            placeholder="Categoría"
                            required 
                            />
                    </div>
                    <Button variant="danger" onClick={() => history.goBack()}>Agregar Libro</Button>
                </form>
            </div>
        </div>
    )
}

export default CrearLibro