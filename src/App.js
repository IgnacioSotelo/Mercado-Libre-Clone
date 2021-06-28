import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Switch, Route } from "react-router-dom";

import Main from "./pages/Main";
import Resultados from "./pages/Resultados";
import "bootstrap/dist/css/bootstrap.css";

import NavBar from "./components/NavBar";
import Descripcion from "./components/Descripcion";
import Carrito from "./components/Carrito";
import Footer from "./components/Footer";
import SeccionB from "./components/SeccionB";
import Carrusel from "./components/main/Carrusel";
import InfoFooter from "./components/InfoFooter";

import ProductosProvider from "./context/ProductosProvider";
import TecnoProvider from "./context/TecnoProvider";
import ModalProvider from "./context/ModalProvider";
import CarritoProvider from "./context/CarritoProvider";

import { ToastProvider } from "react-toast-notifications";

function App() {
  return (
    <ProductosProvider>
      <TecnoProvider>
        <ModalProvider>
          <ToastProvider>
            <CarritoProvider>
              <Descripcion />
              <Carrito />
              <Router>
                <NavBar />
                <Switch>
                  <Route path="/resultados/:nombre/:pagina">
                    <Resultados />
                  </Route>
                  <Route path="/">
                    <Carrusel />
                    <Main />
                    <SeccionB />
                    <InfoFooter />
                  </Route>
                </Switch>
              </Router>
            </CarritoProvider>
          </ToastProvider>
        </ModalProvider>
      </TecnoProvider>

      <Footer />
    </ProductosProvider>
  );
}

export default App;
