import React, { useRef, useEffect, useContext } from "react";
import { ModalContext } from "../context/ModalProvider";
import { CarritoContext } from "../context/CarritoProvider";
import { formato } from "../components/utils";
import { useToasts } from "react-toast-notifications";

function Descripcion() {
  const { addToast } = useToasts();

  const refe = useRef(null);
  const contexto = useContext(ModalContext);
  const carritoContext = useContext(CarritoContext);

  useEffect(() => {
    contexto.toggle ? mostrarModal() : ocultarModal();
  }, [contexto.toggle]);

  const ocultarModal = () => {
    refe.current.style.display = "none";
  };

  const mostrarModal = () => {
    refe.current.style.display = "block";
  };

  const addCarrito = () => {
    carritoContext.agregarProducto(
      contexto.informacion.title,
      contexto.informacion.price,
      contexto.informacion.id
    );

    contexto.cerrarModal();

    addToast("Agregado al carrito.", {
      appearance: "success",
      autoDismiss: true,
    });
  };

  return (
    <div className="descripcion-cont" ref={refe}>
      <div className="modal-content">
        <span
          className="close"
          onClick={contexto.cerrarModal}
          style={{ userSelect: "none" }}
        >
          &times;
        </span>
        <div className="cont-imagen">
          <img
            src={contexto.informacion.thumbnail}
            height={200}
            alt={contexto.informacion.title}
          />
          {contexto.informacion.tags &&
            contexto.informacion.tags.indexOf("deal_of_the_day") !== -1 && (
              <div className="cont-oferta">
                <span className="badge badge-primary">OFFERTA DEL DÍA</span>
                <br />
              </div>
            )}
        </div>
        <div className="cont-info-main">
          <small>
            {contexto.informacion.condition === "used" && <small>Usado</small>}
            {contexto.informacion.condition === "new" && <small>Nuevo</small>}
            {contexto.informacion.sold_quantity !== 0 && (
              <span> | {contexto.informacion.sold_quantity} vendidos</span>
            )}
          </small>
          <h4 className="titulo-producto">{contexto.informacion.title}</h4>
          <div className="cont-pricing">
            <span className="text-secondary">
              <strike>
                <small>
                  {typeof contexto.informacion.original_price === "number" &&
                    formato.format(contexto.informacion.original_price)}
                </small>
              </strike>
            </span>
            <div className="cont-precio-info">
              <span>
                <h3 style={{ width: "30%", marginRight: "20px" }}>
                  {formato.format(contexto.informacion.price)}
                </h3>
              </span>
              {contexto.informacion.free_shipping && (
                <div className="cont-free-shipping">
                  <span className="text-success">
                    <span className="material-icons">local_shipping</span>Envío
                    gratis
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="cont-info-badges">
          {contexto.informacion.tags &&
            contexto.informacion.tags.indexOf("best_seller_candidate") !==
              -1 && (
              <>
                <span
                  className="badge badge-primary"
                  style={{ backgroundColor: "#FF7733" }}
                >
                  MÁS VENDIDO
                </span>
                <br />
              </>
            )}
        </div>
        <hr />
        <div className="cont-botones">
          <a
            target="_blank"
            href={contexto.informacion.permalink}
            className="btn btn-primary"
            rel="noopener noreferrer"
          >
            Comprar ahora
          </a>
          <button className="btn btn-light" onClick={addCarrito}>
            Agregar al carrito
          </button>
        </div>
      </div>
    </div>
  );
}

export default Descripcion;
