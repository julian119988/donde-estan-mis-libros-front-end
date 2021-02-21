import React from 'react'
import CreacionGenero from './CreacionGenero/CreacionGenero'
import Button from "react-bootstrap/Button";
import { Link, Route, Switch } from "react-router-dom";

const Genero = () => {
    return (
        <>
         <h1>Generos</h1>
            <Link to="/generos/creacion">
                <Button variant="danger">Crear Genero</Button>{" "}
            </Link>
            <Link to="/generos/listado">
                <Button variant="danger">Listado de Generos</Button>{" "}
            </Link>

            <Switch>
                <Route path="/generos/creacion">
                    <CreacionGenero />
                </Route>
                <Route path="/generos/listado">
                    
                </Route>

            </Switch>
        </>

    )
}

export default Genero
