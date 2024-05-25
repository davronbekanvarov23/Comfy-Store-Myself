import axios from "axios";

export const customFetch = axios.create({
  baseURL:
    "https://strapi-store-server.onrender.com/api/products?featured=true",
});
export const customSingle = axios.create({
  baseURL: "https://strapi-store-server.onrender.com/api",
});
