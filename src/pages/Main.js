import React, { useContext, useEffect } from "react";
import { TecnoContext } from "../context/TecnoProvider";

import PagosBar from "../components/main/PagosBar";
import CarruselItems from "../components/main/CarruselItems";

function Main() {
  const contexto = useContext(TecnoContext);

  useEffect(() => {
    document.title = "Mercado Libre";
  }, []);

  return (
    <div className="main-cont">
      <PagosBar />
      <CarruselItems
        titulo="Teconlogía"
        link="Ver más"
        recursos={contexto.tecnoData}
      />
      <CarruselItems
        titulo="Deporte"
        link="Ver más"
        recursos={contexto.depoData}
      />
    </div>
  );
}

export default Main;
