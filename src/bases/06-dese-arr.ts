import nombres, { products } from "../data/client";

export const getClientSocio = (socio: string) =>
  nombres.find((n) => n.socio === socio);

// regresar un array con todos los clientes que usen un mismo producto
export const getClientByProduct = (product: string) =>
  nombres.filter((n) => n.product === product);

console.log(getClientByProduct("p1"));
