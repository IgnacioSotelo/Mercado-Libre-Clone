import React, { useState } from "react";
import { IoIosArrowUp } from "react-icons/io";

const enlaces = (titulo, links) => {
  return (
    <div className="enlaces-cuadro">
      <h5>{titulo}</h5>
      <ul>
        {links.map((i) => (
          <li>
            <a href="#">{i}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

function InfoFooter() {
  const [open, setOpen] = useState(false);

  return (
    <div className="info-footer">
      <div className="mas-info">
        <p
          style={{
            backgroundColor: open || "#fff",
            borderBottom: open ? "solid #f7f7f7 2px" : "solid #fff 2px",
          }}
          onClick={() => {
            setOpen(
              !open
            ); /*
            let t = setInterval(() => {
              if (
                window.scrollY <
                document.documentElement.scrollHeight - 755
              ) {
                window.scrollTo("smooth", window.scrollY + 3);
              } else {
                clearInterval(t);
              }
            }, 1);*/
          }}
        >
          <span>
            Más Información
            <IoIosArrowUp
              style={{
                transition: "0.2s",
                margin: "0 3px",
                transform: open && "rotateZ(180deg)",
              }}
            />
          </span>
        </p>
      </div>

      <div
        className="enlaces-cont"
        style={{
          height: open || 0,
          padding: open || "0 200px",
          border: open || "none",
        }}
      >
        {enlaces("Acerca de", [
          "Mercado Libre",
          "Investor relations",
          "Tendencias",
        ])}
        {enlaces("Otros sitios", [
          "Developers",
          "Mercado Pago",
          "Mercado Shops",
          "Mercado Envíos",
          "Mercado Ads",
          "Mercado Libre Ideas",
        ])}
        {enlaces("Ayuda", [
          "Comprar",
          "Vender",
          "Resolución de problemas",
          "Centro de seguridad",
        ])}
        {enlaces("Redes sociales", [
          "Twitter",
          "Facebook",
          "Instagram",
          "YouTube",
        ])}
        {enlaces("Mi cuenta", ["Ingresá", "Vender"])}
        {enlaces("Mercado Puntos", ["HBO GO"])}
      </div>
    </div>
  );
}

export default InfoFooter;
