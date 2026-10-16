// las promesas se trabajan cuando ya no hay nada en el hilo principal
/* console.log("Empieza");

new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve("Se cumple");
    reject("No cumple");
  }, 2000);
})
  .then((result) => console.log(result + " ahora sí"))
  .catch((mensaje) => console.log(mensaje));

console.log("Termina?"); */

import type { Names, Product } from "../data/client";
import { getClientByProduct } from "./06-dese-arr";

const getClientsByIdAsync = (product: Product): Promise<Names[]> => {
  return new Promise((r, rj) => {
    setTimeout(() => {
      const client = getClientByProduct(product);
      client.length > 0 ? r(client) : rj("No existe cliente para ese producto");
    }, 1500);
  });
};

getClientsByIdAsync("p1")
  .then((c) => {
    const names = c.map((c) => c.name).join(", ");
    console.log(`El o los clientes asociados son: ${names}`);
  })
  .catch((err) => console.error(err));
