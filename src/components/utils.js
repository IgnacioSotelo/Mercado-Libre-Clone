export const formato = new Intl.NumberFormat("es-AR", {
  style: "currency",
  currency: "ARS",
  minimumFractionDigits: 0,
});

export const random = (max) => {
  return Math.floor(Math.random() * max);
};

export const mayus = (texto) => {
  if (typeof texto !== "string") return "";
  return texto.charAt(0).toUpperCase() + texto.slice(1);
};
