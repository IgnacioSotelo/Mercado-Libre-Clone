import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";

import ResultadoContainer from "../components/resultado/ResultadoContainer";
import Cargando from "../components/resultado/Cargando";
import SinResultados from "../components/resultado/SinResultados";

import { ProductosContext } from "../context/ProductosProvider";
import Paginador from "../components/resultado/Paginador";

import { mayus } from "../components/utils";

function Resultados() {
  const contexto = useContext(ProductosContext);
  let { nombre, pagina } = useParams();

  useEffect(() => {
    contexto.buscarProducto(nombre, pagina);
    document.title = `${mayus(nombre)} en Mercado Libre`;
  }, [nombre, pagina]);

  // Cargando y tal dentro de contexto?

  return (
    <main className="main-resultados">
      <div>
        {contexto.loading && <Cargando />}
        {contexto.sinResultado && <SinResultados nombre={nombre} />}
        {!contexto.sinResultado && !contexto.loading && (
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div className="resultados-contenedor">
              <div className="barra-info">
                <h4>
                  <span
                    style={{ textTransform: "capitalize", fontWeight: 900 }}
                  >
                    {nombre}
                  </span>
                  <small>
                    {contexto.cantidad} resultados: (pagina {pagina})
                  </small>
                </h4>
              </div>
              {contexto.productos.map((producto) => (
                <ResultadoContainer key={producto.id} info={producto} />
              ))}
            </div>

            <Paginador
              pagina={pagina}
              nombre={nombre}
              cantidad={contexto.cantidad}
            />
          </div>
        )}
      </div>
    </main>
  );
}

export default Resultados;
