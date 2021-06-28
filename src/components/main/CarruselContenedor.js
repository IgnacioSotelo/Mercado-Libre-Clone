import React from "react";
import CarruselBoton from "./CarruselBoton";
import { NavLink } from "react-router-dom";

function CarruselContenedor({ titulo, link, children, setPosX, toggleBtn }) {
  return (
    <section className="seccion-carrusel-item">
      <div className="container my-4">
        <div className="d-flex align-items-center">
          <h1
            className="lead"
            style={{ fontSize: "26px", paddingRight: "10px" }}
          >
            {titulo}
          </h1>
          <NavLink to={"/resultados/" + titulo + "/1"}>{link}</NavLink>
        </div>
        <div style={{ position: "relative" }}>
          {toggleBtn && <CarruselBoton isLeft setPosX={setPosX} />}
          <div className="cont-carrusel-items">{children}</div>
          {toggleBtn || <CarruselBoton setPosX={setPosX} />}
        </div>
      </div>
    </section>
  );
}

export default CarruselContenedor;
