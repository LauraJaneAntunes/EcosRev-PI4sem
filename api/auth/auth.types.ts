export interface LoginCredentials {
  email: string;
  password: string;
}

export interface AuthResponse {
  token: string;
  user?: any; // ajuste conforme os dados que sua API retorna
}
