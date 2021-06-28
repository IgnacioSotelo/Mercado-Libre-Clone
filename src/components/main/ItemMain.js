import React, { useContext } from "react";
import ItemSombreado from "./ItemSombreado";
import { formato } from "../../components/utils";
import { ModalContext } from "../../context/ModalProvider";

function ItemMain({ data }) {
  const contexto = useContext(ModalContext);

  return (
    <ItemSombreado scroller hoverable>
      <div
        className="item-main-cont-logo"
        onClick={() => contexto.abrirModal(data)}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <img
            src={data.thumbnail}
            height={170}
            alt={data.title}
            style={{ objectFit: "contain" }}
          />
          <div className="like-btn">
            <span className="material-icons">favorite_border</span>
          </div>
        </div>
      </div>
      <div className="carrito">
        <span className="material-icons">local_shipping</span>
      </div>
      <div className="item-down-cont">
        <span className="text-secondary ocultar">
          <strike>
            <small>
              {typeof data.precio_anterior === "number" &&
                formato.format(data.precio_anterior)}
            </small>
          </strike>
        </span>
        <span className="precio">{formato.format(data.price)}</span>
        <span className="text-secondary ocultar titulo">{data.title}</span>
      </div>
    </ItemSombreado>
  );
}

export default ItemMain;
