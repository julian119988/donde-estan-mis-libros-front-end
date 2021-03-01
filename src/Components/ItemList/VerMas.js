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
                <Row className="d-flex justify-content-around align-items-baseline">
                  <p>
                    <strong>Id: </strong> {item._id}
                  </p>
                </Row>
                <Row className="d-flex justify-content-around align-items-baseline">
                  <p>
                    <strong>Nombre: </strong> {item.nombre}
                  </p>
                </Row>
                <Row className="d-flex justify-content-around align-items-baseline">
                  <p>
                    <strong>Descripcion: </strong> {item.descripcion}
                  </p>
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
              <strong>{props.titulo}</strong>
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
