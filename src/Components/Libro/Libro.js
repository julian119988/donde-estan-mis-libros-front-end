import React from 'react';
import Button from 'react-bootstrap/Button';
import { Link, Route, Switch } from "react-router-dom";
import ListadoLibro from "./ListadoLibro/ListadoLibro";
import CreacionLibro from "./CreacionLibro/CreacionLibro";

function Libro() {
    return (
        <>
            <h1>Libros</h1>
      <Link to='/libros/creacion'><Button variant="danger">Crear Libro</Button>{' '} </Link>
      <Link to='/libros/listado'><Button variant="danger">Listado de Libros</Button>{' '}</Link>

      <Switch>
        <Route path='/libros/creacion'><CreacionLibro /></Route>
        <Route path='/libros/listado'><ListadoLibro /></Route>
      </Switch>
        </>
    )
}

export default Libro
