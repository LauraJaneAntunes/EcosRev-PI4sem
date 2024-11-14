import api from "./api";
import { Benefit } from "./types";

export const benefitsService = {
  getAll: async () => {
    const response = await api.get<Benefit[]>("/benefits");
    return response.data;
  },

  getById: async (id: number) => {
    const response = await api.get<Benefit>(`/benefits/${id}`);
    return response.data;
  },

  create: async (benefit: Omit<Benefit, "id">) => {
    const response = await api.post<Benefit>("/benefits", benefit);
    return response.data;
  },

  update: async (id: number, benefit: Omit<Benefit, "id">) => {
    const response = await api.put<Benefit>(`/benefits/${id}`, benefit);
    return response.data;
  },

  delete: async (id: number) => {
    await api.delete(`/benefits/${id}`);
  },
};
