import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import { useEffect, useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function VerMas(props) {
  const [cardBody, setBody] = useState([""]);

  useEffect(() => {
    cargarDatos();
  }, [props.body]);

  function cargarDatos() {
    if (props.body[0] === "Esta persona no tiene libros asociados") {
      setBody(["Este usuario no tiene libros asociados"]);
    } else {
      setBody(
        props.body.map((item) => {
          return (
            <>
              <Col>
                <Row>
                  <strong>Id: </strong> {item._id}
                </Row>
                <Row>
                  <strong>Nombre: </strong> {item.nombre}
                </Row>
                <Row>
                  <strong>Descripcion: </strong> {item.descripcion}
                </Row>
                <br />
              </Col>
            </>
          );
        })
      );
    }
  }

  function mostrar() {
    if (!props.show) {
      return <></>;
    } else {
      return (
        <Container>
          <Card>
            <Card.Header>
              <strong>Libros prestados a {props.titulo}</strong>
            </Card.Header>
            <Card.Body>
              <Row>{cardBody.map((item) => item)}</Row>
            </Card.Body>
          </Card>
        </Container>
      );
    }
  }

  return mostrar();
}
