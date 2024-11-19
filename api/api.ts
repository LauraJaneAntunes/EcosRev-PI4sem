import axios from "axios";

const api = axios.create({
  baseURL: "https://ecos-rev.vercel.app/api/beneficio", // ajuste para sua URL do backend
});

export default api;
