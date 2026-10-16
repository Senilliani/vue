const getUser = (uid: string) => ({
  uid,
  username: "tony001",
});

const names = [
  {
    id: 1,
    name: "client1",
  },
  {
    id: 2,
    name: "client2",
    socio: "1",
  },
];

const name = names.find((n) => n.id === 3);

console.log(name?.id);
