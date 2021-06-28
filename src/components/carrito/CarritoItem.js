import React from "react";
import { formato } from "../utils";

function CarritoItem({ titulo, precio, id, eliminarItem }) {
  return (
    <div className="cont-carrito-item">
      <div className="cont-title">
        <strong>{titulo}</strong>
      </div>
      <div className="cont-price">
        <h5>{formato.format(precio)}</h5>
      </div>
      <div>
        <span class="close" onClick={() => eliminarItem(id)}>
          &times;
        </span>
      </div>
    </div>
  );
}

export default CarritoItem;
