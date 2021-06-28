import React from "react";
import { GoCreditCard, GoGift, GoLock } from "react-icons/go";

const carta = (icono, titulo, texto, link, borde) => {
  return (
    <div>
      <p style={{ fontSize: "4em", color: "#3483f2" }}>{icono}</p>
      <h3>{titulo}</h3>
      <p>
        <span>{texto}</span>
      </p>
      <a href="#">{link}</a>
    </div>
  );
};

const recuadro = (texto, link) => {
  return (
    <div className="recuadro">
      <p>
        <span>{texto}</span>
        <br />
        <a href="#">{link}</a>
      </p>
    </div>
  );
};

function SeccionB() {
  return (
    <section className="seccionb-container">
      <div>
        {carta(
          <GoCreditCard />,
          "Pagá con tarjeta o en efectivo",
          "Con Mercado Pago, tenés cuotas sin interés con tarjeta o efectivo en puntos de pago. ¡Y siempre es seguro!",
          "Cómo pagar con Mercado Pago"
        )}
        {carta(
          <GoGift />,
          "Envío gratis desde $ 2.500",
          "Solo por estar registrado en Mercado Libre tenés envíos gratis en miles de productos. Es un beneficio de Mercado Puntos.",
          "Conocé más sobre este beneficio"
        )}
        {carta(
          <GoLock />,
          "Seguridad, de principio a fin",
          "¿No te gusta? ¡Devolvelo! En Mercado Libre, no hay nada que no puedas hacer, porque estás siempre protegido.",
          "Cómo te protegemos"
        )}
      </div>

      <section className="arrepentimiento">
        {recuadro("¿Te arrepentiste de comprar?", "Cómo cancelar una compra")}
        {recuadro(
          "Conocé las normas que aplican cuando comprás",
          "Ver contratos de adhesión - Ley N.º 24.240 de Defensa del Consumidor"
        )}
      </section>
    </section>
  );
}

export default SeccionB;
