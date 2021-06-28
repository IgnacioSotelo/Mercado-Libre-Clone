import React, { useRef, useState, useEffect, useContext } from "react";
import { CarritoContext } from "../context/CarritoProvider";
import CarritoItem from "./carrito/CarritoItem";
import { formato } from "./utils";

function Carrito() {
  const refe = useRef(null);
  const contexto = useContext(CarritoContext);

  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    contexto.toggle ? mostrarModal() : ocultarModal();
  }, [contexto.toggle]);

  useEffect(() => {
    calcularTotal();
  }, [contexto.carritoCantidad]);

  const ocultarModal = () => {
    refe.current.style.display = "none";
  };

  const mostrarModal = () => {
    refe.current.style.display = "block";
  };

  const eliminarItem = (id) => {
    contexto.quitarProducto(id);
  };

  const calcularTotal = () => {
    let total = 0;
    contexto.carrito.map((i) => (total += i.precio));
    setTotalPrice(total);
  };

  const carritoVacio = () => {
    return contexto.carritoCantidad === 0;
  };

  const borrarTodo = () => {
    contexto.quitarTodo();
    contexto.cerrarModal();
  };

  return (
    <div className="carrito-cont" ref={refe}>
      <div className="modal-content">
        <span className="close" onClick={contexto.cerrarModal}>
          &times;
        </span>
        <div className="cont-carrito-titulo">
          <h1>
            {carritoVacio() ? "Carrito vacio" : "Carrito:"}
            <span
              className="material-icons"
              style={{ marginLeft: "20px", fontSize: "30px", color: "#3b0" }}
            >
              shopping_cart
            </span>
          </h1>

          {carritoVacio() && (
            <ul>
              <li>
                Haga click en algun producto y luego presione 'Agregar al
                carrito'
              </li>
            </ul>
          )}
        </div>
        <div
          className={`${contexto.carritoCantidad > 0 && "cont-carrito-lista"}`}
        >
          <ul>
            {contexto.carritoCantidad > 0 &&
              contexto.carrito.map((i, index) => (
                <CarritoItem
                  titulo={i.titulo}
                  precio={i.precio}
                  id={i.id}
                  key={index}
                  eliminarItem={eliminarItem}
                />
              ))}
          </ul>
        </div>
        <p className="p-total">
          Total: <span>{formato.format(totalPrice)}</span>
        </p>
        <hr />
        <div className="cont-carrito-botones">
          <button className="btn btn-success" onClick={contexto.cerrarModal}>
            ❮ Volver
          </button>
          <button
            className="btn btn-danger"
            onClick={borrarTodo}
            disabled={carritoVacio()}
          >
            Confirmar ❯
          </button>
        </div>
      </div>
    </div>
  );
}

export default Carrito;
