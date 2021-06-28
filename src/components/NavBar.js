import React, { useState } from "react";
import { Link } from "react-router-dom";

import BarraPrincipal from "./navbar/BarraPrincipal";
import BarraPerfil from "./navbar/BarraPerfil";

import logo from "../assets/imagenes/logo.png";

function NavBar() {
  const [inputBusqueda, setInputBusqueda] = useState("");

  return (
    <>
      <header className="nav-main">
        <div className="nav-cont">
          <Link to="/">
            <div className="nav-logo">
              <img src={logo} alt="logo"></img>
            </div>
          </Link>
          <div className="nav-form">
            <form>
              <input
                type="text"
                placeholder="Buscar productos, marcas y más..."
                value={inputBusqueda}
                onChange={(event) => setInputBusqueda(event.target.value)}
              ></input>
              <Link to={`/resultados/${inputBusqueda}/1`}>
                <button>
                  <span className="material-icons">search</span>
                </button>
              </Link>
            </form>
          </div>
          <div className="nav-puntos">
            <span className="material-icons">card_giftcard</span>
            <p>
              <strong>Envíos gratis por Mercado Puntos</strong>
            </p>
          </div>
          <div className="nav-ubicacion">
            <div className="nav-ubicacion-btn">
              <span className="material-icons">place</span>
              <span className="text-muted">
                <small>Enviar a</small>
                <br />
                <strong>Capital Federal</strong>
              </span>
            </div>
          </div>
          <div className="nav-menu navbar navbar-expand navbar-light px-0">
            <BarraPrincipal />
          </div>
          <div className="nav-cuenta navbar navbar-expand navbar-light px-0">
            <BarraPerfil />
          </div>
        </div>
      </header>
    </>
  );
}

export default NavBar;
