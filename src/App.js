import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import Persona from "./Components/Persona/Persona";
import Libro from "./Components/Libro/Libro";
import Genero from "./Components/Genero/Genero";

import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Navbar from "./Components/Navbar/Navbar";

import Home from "./Components/Home/Home";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Container style={{ marginTop: "20px" }}>
        <Card border="danger">
          <Card.Body>
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
              <Route exact path="/" component={Home}></Route>
            </Switch>
          </Card.Body>
        </Card>
      </Container>
    </BrowserRouter>
  );
}

export default App;
