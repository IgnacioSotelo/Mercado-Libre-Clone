import React, { useState } from "react";

export const ModalContext = React.createContext();

function ModalProvider({ children }) {
  const [mostrarDescripcion, setMostrarDescripcion] = useState(false);
  const [informacion, setInformacion] = useState({});

  const abrirModal = (info) => {
    setMostrarDescripcion(true);
    setInformacion(info);
  };

  const cerrarModal = () => {
    setMostrarDescripcion(false);
  };

  return (
    <ModalContext.Provider
      value={{
        toggle: mostrarDescripcion,
        abrirModal,
        cerrarModal,
        informacion,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
}

export default ModalProvider;
