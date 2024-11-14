import axios from "axios";
import { LoginCredentials, AuthResponse } from "./auth.types";

const API_URL = "https://ecos-rev.vercel.app/api/usuario"; // Substitua pela URL base da sua API

export const authService = {
  login: async (credentials: LoginCredentials) => {
    try {
      const response = await axios.post<AuthResponse>(
        `${API_URL}/login`,
        credentials
      );
      if (response.data.token) {
        localStorage.setItem("token", response.data.token);
      }
      return response.data;
    } catch (error: any) {
      throw new Error(error.response?.data?.message || "Erro ao fazer login");
    }
  },

  logout: () => {
    localStorage.removeItem("token");
  },

  getToken: () => {
    return localStorage.getItem("token");
  },
};
