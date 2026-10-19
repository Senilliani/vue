import axios from "axios";
import type { reqresResponse } from "../interfaces/mock";

export const reqresAxiosApi = axios.create({
  baseURL: "https://reqres.in/api",
});

reqresAxiosApi
  .get<reqresResponse>("/users")
  .then((r) => console.log(r.data.data[3].avatar))
  .catch((e) => console.log(e));
