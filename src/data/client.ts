export interface Names {
  id: number;
  name: string;
  socio?: string;
  product: Product;
}

export type Product = "p1" | "p2";

const names: Names[] = [
  {
    id: 1,
    name: "client1",
    product: "p1",
  },
  {
    id: 2,
    name: "client2",
    socio: "1",
    product: "p1",
  },
];

export const products = ["p1", "p2"] as const;

export default names;
