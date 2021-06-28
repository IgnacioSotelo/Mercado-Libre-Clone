import React from "react";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";

function BarraPrincipal() {
  return (
    <Navbar expand="lg">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <NavDropdown title="Categorias" id="basic-nav-dropdown"></NavDropdown>
          <Nav.Link>Ofertas</Nav.Link>
          <Nav.Link>Historial</Nav.Link>
          <Nav.Link>Supermercado</Nav.Link>
          <Nav.Link>Tiendas oficiales</Nav.Link>
          <Nav.Link>Vender</Nav.Link>
          <Nav.Link>Ayuda</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default BarraPrincipal;
