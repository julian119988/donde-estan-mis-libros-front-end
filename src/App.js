import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import Persona from "./Components/Persona/Persona";
import Libro from "./Components/Libro/Libro";
import Genero from "./Components/Genero/Genero";
import Button from "react-bootstrap/Button";

function App() {
  return (
    <BrowserRouter>
      <Link to="/personas">
        <Button variant="danger">Personas</Button>{" "}
      </Link>
      <Link to="/libros">
        <Button variant="danger">Libros</Button>{" "}
      </Link>
      <Link to="/generos">
        <Button variant="danger">Generos</Button>{" "}
      </Link>

      <Switch>
        <Route path="/personas">
          <Persona />
        </Route>
        <Route path="/libros">
          <Libro />
        </Route>
        <Route path="/generos">
          <Genero />
        </Route>
        <Route exact path="/"></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
