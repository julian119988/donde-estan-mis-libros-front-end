import Table from "react-bootstrap/Table";
//import ItemList from "../../ItemList/ItemList";
import axios from "axios";
import { useEffect, useState } from "react";

function ListadoLibro() {

const [libros, setLibros] = useState([""]);

const obtenerListadoDeLibros = async () => {
    return axios.get("http://localhost:3001/libro").then((response) => {
        setLibros(() => {
            const libros = response.data;
            console.log(libros);
          return libros;
          
        });
        //console.log(response.data);
      });
}

useEffect(()=>{
    obtenerListadoDeLibros();
},[])


    
    return (
        <>
        <h1>Listado de Libros</h1>
        <ol>
            {libros.map(l => <li key={l._id}>{l.nombre}</li>)}
        </ol>
        </>
    )
}

export default ListadoLibro