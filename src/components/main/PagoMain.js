import React from "react";

function PagoMain({ texto, link, icono, ultimo }) {
  return (
    <div
      className="cont-pagos-card"
      style={ultimo && { borderLeft: "solid #EEEEEE 1px" }}
    >
      <div className="cont-pagos-icono">
        <span className="material-icons">{icono}</span>
      </div>
      <div className="cont-pagos-info">
        <p className="lead">{texto}</p>
        <a
          href="/#"
          style={{ fontSize: "14px" }}
          className="text-decoration-none"
        >
          {link}
        </a>
      </div>
    </div>
  );
}

export default PagoMain;
