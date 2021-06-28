import React, { useState, useEffect } from "react";
import { random } from "../components/utils";
import axios from "axios";

export const TecnoContext = React.createContext();

function TecnoProvider({ children }) {
  const [tecnoData, setTecnoData] = useState([]);
  const [depoData, setDepoData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      let respuesta = await axios(
        "https://api.mercadolibre.com/sites/MLA/search?q=tecnologia&offset=" +
          random(50) +
          "&limit=10"
      );
      setTecnoData(respuesta.data.results);
      respuesta = await axios(
        "https://api.mercadolibre.com/sites/MLA/search?q=muebles&offset=" +
          random(50) +
          "&limit=10"
      );
      setDepoData(respuesta.data.results);
    };

    fetchData();
  }, []);

  return (
    <TecnoContext.Provider
      value={{
        tecnoData: tecnoData,
        depoData: depoData,
      }}
    >
      {children}
    </TecnoContext.Provider>
  );
}

export default TecnoProvider;
