import { useState } from "react";
import BNavbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  const [navExpanded, setNavExpanded] = useState(false);

  function toggleNav() {
    if (navExpanded === false) {
      setNavExpanded("expanded");
    } else {
      setNavExpanded(false);
    }
  }
  function cerrarNav() {
    setNavExpanded(false);
  }

  return (
    <BNavbar
      collapseOnSelect
      expand="lg"
      bg="dark"
      variant="dark"
      expanded={navExpanded}
      onToggle={toggleNav}
    >
      <BNavbar.Brand>
        <Link className="titulo" to="/" onClick={cerrarNav}>
          App de libros
        </Link>
      </BNavbar.Brand>
      <BNavbar.Toggle aria-controls="responsive-navbar-nav" />
      <BNavbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto" onClick={cerrarNav}>
          <Nav.Link>
            <Link to="/personas" className="linkTitulo">
              Personas
            </Link>
          </Nav.Link>
          <Nav.Link>
            <Link to="/libros" className="linkTitulo">
              Libros
            </Link>
          </Nav.Link>
          <Nav.Link>
            <Link to="/generos" className="linkTitulo">
              Generos
            </Link>
          </Nav.Link>
        </Nav>
      </BNavbar.Collapse>
    </BNavbar>
  );
}
