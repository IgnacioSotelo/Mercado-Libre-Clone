import React from "react";

function ItemSombreado({ scroller, children, hoverable }) {
  return (
    <div
      className={`item-main-contenedor ${scroller && "scroller"} ${
        hoverable && "hoverable"
      }`}
    >
      {children}
    </div>
  );
}

export default ItemSombreado;
