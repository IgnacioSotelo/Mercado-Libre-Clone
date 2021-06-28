import React, { useState } from "react";

export const CarritoContext = React.createContext();

function CarritoProvider({ children }) {
  const [mostrarCarrito, setMostrarCarrito] = useState(false);
  const [carrito, setCarrito] = useState([]);
  const [carritoCantidad, setCarritoCantidad] = useState(0);

  const abrirModal = () => {
    setMostrarCarrito(true);
  };

  const cerrarModal = () => {
    setMostrarCarrito(false);
  };

  const agregarProducto = (titulo, precio, id) => {
    setCarrito((prev) => [...prev, { id, titulo, precio }]);
    setCarritoCantidad((prev) => prev + 1);
  };

  const quitarProducto = (id) => {
    let aux = carrito.filter((item) => item.id !== id);
    setCarrito(aux);
    setCarritoCantidad(aux.length);
  };

  const quitarTodo = () => {
    setCarrito([]);
    setCarritoCantidad(0);
  };

  return (
    <CarritoContext.Provider
      value={{
        toggle: mostrarCarrito,
        abrirModal,
        cerrarModal,
        carrito,
        agregarProducto,
        carritoCantidad,
        quitarProducto,
        quitarTodo,
      }}
    >
      {children}
    </CarritoContext.Provider>
  );
}

export default CarritoProvider;
