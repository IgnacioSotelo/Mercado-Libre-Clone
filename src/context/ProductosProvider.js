import React, { useState } from "react";
import axios from "axios";

export const ProductosContext = React.createContext();

function ProductosProvider({ children }) {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [sinResultado, setSinResultado] = useState(false);
  const [cantidad, setCantidad] = useState(0);

  const calcularOffset = (x) => {
    return Number(parseInt(10 * x - 10));
  };

  const buscarProducto = (producto, offset = 0) => {
    setLoading(true);
    setSinResultado(false);
    const fetchData = async () => {
      let respuesta = await axios(
        "https://api.mercadolibre.com/sites/MLA/search?q=" +
          producto +
          "&offset=" +
          calcularOffset(offset) +
          "&limit=10"
      );
      setCantidad(respuesta.data.paging.total);
      setProductos(respuesta.data.results);
      setLoading(false);

      if (respuesta.data.results.length === 0) {
        setSinResultado(true);
      } else {
        setSinResultado(false);
      }
    };

    fetchData();
  };

  return (
    <ProductosContext.Provider
      value={{
        productos: productos,
        buscarProducto: buscarProducto,
        loading: loading,
        sinResultado: sinResultado,
        cantidad: cantidad,
      }}
    >
      {children}
    </ProductosContext.Provider>
  );
}

export default ProductosProvider;
