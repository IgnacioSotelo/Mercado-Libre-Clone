import React, { useState, useRef } from "react";
import { formato } from "../../components/utils";

function ResultadoContainer({ info }) {
  const [open, setOpen] = useState(false);
  let resultsRef = useRef();
  return (
    <div
      className="resultado"
      ref={resultsRef}
      style={{
        height: open ? "600px" : "185px",
        border: open && "solid rgba(0,0,0,0.2) 1px",
        borderLeft: open && "solid rgba(0,0,0,0.2) 5px",
        display: open && "flex",
        flexDirection: "column",
        backgroundColor: open && "#f9f9f9",
        cursor: open ? "default" : "pointer",
        margin: open && "20px",
        boxShadow: open && "0 0 15px 0 rgba(0,0,0,0.3)",
        transform: open && "translateX(10px)",
        zIndex: open ? 9999 : 0,
      }}
      onMouseDown={() => {
        if (!open) {
          window.scrollTo({
            behavior: "smooth",
            top: resultsRef.current.offsetTop - 100,
          });
          setOpen(true);
        }
      }}
      id={info.title}
    >
      <div>
        <p
          onClick={() => setOpen(false)}
          style={{
            cursor: "pointer",
            opacity: open ? 1 : 0,
            fontSize: "40px",
            float: "right",
            marginRight: "20px",
            zIndex: 9999,
          }}
        >
          <span>&times;</span>
        </p>
      </div>
      <div
        className="imagen"
        style={{
          border: "solid rgba(0,0,0,0.1) 1px",
          left: open ? "50%" : "inherit",
          transform: open ? "translate(-50%, 150px) " : "translate(10px,10px)",
          width: open ? "350px" : "100px",
          height: open ? "350px" : "100px",
          backgroundColor: "#fff",
        }}
      >
        <img
          src={info.thumbnail}
          height={"100%"}
          width={open ? "50%" : "100%"}
          style={{ transform: open && "scale(2)" }}
          alt={info.title}
        />
        <div className="compra" style={{ display: open || "none" }}>
          <a
            target="_blank"
            href={info.permalink}
            className="btn btn-primary m-2"
            rel="noopener noreferrer"
          >
            Ir a la pagina ❯
          </a>
          <button className="btn btn-light">Agregar al carrito</button>
        </div>
      </div>
      <div
        className="datos"
        style={{
          float: open && "left",
          height: "100%",
          transform: open ? "translateX(20px)" : "translateX(200px)",
          width: "60%",
        }}
      >
        {info.tags.indexOf("best_seller_candidate") !== -1 && (
          <>
            <span
              className="badge badge-primary"
              style={{ backgroundColor: "#FF7733" }}
            >
              MÁS VENDIDO
            </span>
            <br /> <br />
          </>
        )}
        {info.tags.indexOf("deal_of_the_day") !== -1 && (
          <>
            <span className="badge badge-primary">OFFERTA DEL DÍA</span>
            <br /> <br />
          </>
        )}
        <h5>{info.title}</h5>
        <span className="text-secondary">
          <strike>
            <small>
              {typeof info.original_price === "number" &&
                formato.format(info.original_price)}
            </small>
          </strike>
        </span>
        <span>
          <h3>{formato.format(info.price)}</h3>
        </span>
        {info.free_shipping && (
          <span className="text-success">Envío gratis</span>
        )}
        <br /> <br />
        {info.condition === "used" && <small>Usado</small>}
      </div>
    </div>
  );
}

export default ResultadoContainer;
