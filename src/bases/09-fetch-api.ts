import type { Examples } from "../interfaces/mock";

fetch("https://reqres.in/api/users")
  .then((resp) => resp.json())
  .then((body: Examples) => {
    console.log(body._meta.cta.url);
  })
  .catch((e) => console.log(e));
