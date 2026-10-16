interface client {
  name: string;
  age: number;
  codeSocio?: string;
}

export const client: client = {
  name: "tony",
  age: 25,
  codeSocio: "01",
};

const { age, codeSocio = "No tiene" } = client;

console.log({ age, codeSocio });
