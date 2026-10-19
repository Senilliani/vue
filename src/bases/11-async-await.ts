import type { reqresResponse } from "../interfaces/mock";
import { reqresAxiosApi } from "./10-axios";

export async function getImage() {
  const response = await reqresAxiosApi.get<reqresResponse>("/users");
  return response.data.data;
}

const result = await getImage();
console.log(result);

/* export function getImagePromise() {
  return new Promise((res) => {
    res("/image1.jpg");
  });
} */

/* getImage().then((r) => {
  console.log(r);
}); */
