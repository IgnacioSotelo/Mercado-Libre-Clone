import React, { useContext } from "react";
import { Nav, Navbar } from "react-bootstrap";
import { CarritoContext } from "../../context/CarritoProvider";

function BarraPerfil() {
  const contexto = useContext(CarritoContext);

  return (
    <Navbar expand="lg">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Nav className="mr-auto">
        <Nav.Link>Creá tu cuenta</Nav.Link>
        <Nav.Link>Ingresá</Nav.Link>
        <Nav.Link>Mis compras</Nav.Link>{" "}
        <div style={{ cursor: "pointer" }} onClick={contexto.abrirModal}>
          <span className="material-icons" style={{ fontSize: "20px" }}>
            shopping_cart
          </span>
          <span className="badge badge-pill badge-danger carrito-counter">
            {contexto.carritoCantidad}
          </span>
        </div>
      </Nav>
    </Navbar>
  );
}

export default BarraPerfil;
