import axios from "axios";
import { authService } from "./auth.service";

const api = axios.create({
  baseURL: "https://ecos-rev.vercel.app/api/usuario",
});

// Interceptor para adicionar o token JWT em todas as requisições
api.interceptors.request.use((config) => {
  const token = authService.getToken();
  if (token) {
    config.headers.access_token = token; // Ajuste o nome do header conforme sua API
  }
  return config;
});
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      authService.logout();
      window.location.href = "/login";
    }
    return Promise.reject(error);
  }
);

export default api;
