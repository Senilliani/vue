export const person = {
  lastName: "Stark",
  age: 45,
  adress: {
    city: "NY",
    zip: 28850,
  },
};

const person2 = structuredClone(person);

person2.lastName = "Parker";

console.log({ person, person2 });
