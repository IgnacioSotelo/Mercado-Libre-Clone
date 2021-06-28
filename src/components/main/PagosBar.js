import React from "react";
import PagoMain from "./PagoMain";

function PagosBar() {
  return (
    <div className="container d-none d-md-block">
      <div className="cont-pagos">
        <PagoMain
          texto="Tarjeta de crédito"
          link="Ver promociones bancarias"
          icono="credit_card"
        />
        <PagoMain
          texto="Tarjeta de débito"
          link="Ver más"
          icono="credit_card"
        />
        <PagoMain texto="Efectivo" link="Ver más" icono="local_atm" />
        <PagoMain
          texto="Más medios de pago"
          link="Ver más"
          icono="add_circle"
          ultimo
        />
      </div>
    </div>
  );
}

export default PagosBar;
