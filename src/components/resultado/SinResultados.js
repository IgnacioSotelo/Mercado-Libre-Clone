import React from "react";

const SinResultados = ({ nombre }) => {
  return (
    <div className="sinResultados">
      <div>
        <span
          className="material-icons text-danger"
          style={{ fontSize: "5em" }}
        >
          error_outline
        </span>
      </div>
      <div className="texto">
        <h2 style={{ fontWeight: "bold" }}>
          No hay publicaciones que coincidan con '
          <span className="text-danger">{nombre}</span>'.
        </h2>
        <ul style={{ marginLeft: "17px" }}>
          <li>
            <strong>Revisá la ortografía</strong> de la palabra.
          </li>
          <li>
            Utilizá <strong>palabras más genéricas</strong> o menos palabras.
          </li>
          <li>Navegá por las categorías para encontrar un producto similar</li>
        </ul>
      </div>
    </div>
  );
};

export default SinResultados;
