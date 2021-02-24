import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Collapse from "react-bootstrap/Collapse";
import { useState } from "react";

export default function Home() {
  const [open, setOpen] = useState(false);

  function contenidoBoton() {
    if (open) {
      return "Ocultar";
    } else {
      return "Ver mas";
    }
  }
  return (
    <>
      <Jumbotron>
        <Container>
          <h1>Bienvenido</h1>

          <p>
            Esto es una aplicación para saber a quien le prestaste tus libros.
          </p>
          <br />
          <Button
            onClick={() => setOpen(!open)}
            aria-controls="ver-mas-info"
            aria-expanded={open}
          >
            {contenidoBoton()}
          </Button>
          <Collapse in={open}>
            <div id="ver-mas-info" style={{ marginTop: "10px" }}>
              <p>
                Acá podrás guardar todos los libros que tengas, con su
                respectivo nombre, descripción y genero. También podrás guardar
                una lista de todas las personas que les prestaste o pensás
                prestar un libro y consultar si lo tienen prestado o no.
              </p>
            </div>
          </Collapse>
        </Container>
      </Jumbotron>
    </>
  );
}
