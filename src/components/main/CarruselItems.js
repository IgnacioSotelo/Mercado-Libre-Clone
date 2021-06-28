import React, { useState, useEffect } from "react";
import ItemMain from "./ItemMain";
import CarruselContenedor from "./CarruselContenedor";

function CarruselItems({ titulo, link, recursos }) {
  const [posX, setPosX] = useState(0);
  const [toggleBtn, setToggleBtn] = useState(true);

  const estilo = {
    transition: "0.3s",
    transform: `translate(${posX}, 0)`,
  };

  useEffect(() => {
    setToggleBtn(!toggleBtn);
  }, [posX]);

  return (
    <CarruselContenedor
      titulo={titulo}
      link={link}
      setPosX={setPosX}
      toggleBtn={toggleBtn}
    >
      <div style={estilo}>
        <div className="cont-slider ani d-flex">
          {recursos &&
            recursos.map((producto) => (
              <ItemMain data={producto} key={producto.id} />
            ))}
        </div>
      </div>
    </CarruselContenedor>
  );
}

export default CarruselItems;
