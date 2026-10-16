import nombres, { products, type Product } from "../data/client";

export const getClientSocio = (socio: string) =>
  nombres.find((n) => n.socio === socio);

// regresar un array con todos los clientes que usen un mismo producto
export const getClientByProduct = (product: Product) =>
  nombres.filter((n) => n.product === product);

// console.log(products);
// console.log(getClientByProduct("p1"));
