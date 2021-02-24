import Table from "react-bootstrap/Table";
//import ItemList from "../../ItemList/ItemList";
import axios from "axios";
import { useEffect, useState } from "react";


function ListadoLibro() {

const [libros, setLibros] = useState([""]);
const [prestados, setPrestados] = useState([""]);
const [personas, setPersonas] = useState([""]);
const obtenerListadoDeLibros = async () => {
    return axios.get("http://localhost:3001/libro").then((response) => {
        setLibros(() => {
            const libros = response.data
            console.log(libros);
          return libros;
          
        });
        //console.log(response.data);
      });

      
}

const obtenerListadoDeLibrosPrestados = async () => {
    return axios.get("http://localhost:3001/libro").then((response) => {
        setPrestados(() => {
            const prestados = response.data
            const librosPrestados = prestados.filter(prestado => prestado.persona_id.length === 1)
            

            console.log(librosPrestados);
          return librosPrestados;

          
        });
               
      });

      
}

const getPersona = () => {
    return axios.get("http://localhost:3001/persona").then((response) => {
        setPersonas(() => {
            const personas = response.data;

            console.log(personas);
          return personas;
        });
      });
}



useEffect(()=>{
    obtenerListadoDeLibros()
    obtenerListadoDeLibrosPrestados()
    getPersona()
},[])



    
    return (
        <>
        <div>
        <h1>Listado de Libros</h1>
        <ol>
            {libros.map(l => <li key={l._id}>{l.nombre} - {l.persona_id}</li>)}

        </ol>
        </div>

        <div>
        <h1>Libros prestados al Alias</h1>
        <ul>
           {prestados.map(l => <li key={l._id}>{l.nombre} se presto a: {l.persona_id}</li>)}
        </ul>
        </div>
        
        </>
    )
}

export default ListadoLibro