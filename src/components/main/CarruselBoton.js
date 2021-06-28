import React from "react";

function CarruselBoton({ isLeft, setPosX }) {
  return (
    <div
      className="cont-btn"
      onMouseDown={isLeft ? () => setPosX("0") : () => setPosX("-100%")}
    >
      <button className={isLeft ? `btn-left-items` : `btn-right-items`}>
        <span className="material-icons">
          {isLeft ? "keyboard_arrow_left" : "keyboard_arrow_right"}
        </span>
      </button>
    </div>
  );
}

export default CarruselBoton;
