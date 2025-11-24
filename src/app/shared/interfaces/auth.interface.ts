export interface LoginRequest {
  nombre: string;
  contrasena: string;
  tipoUsuario: string;
}

export interface LoginResponse {
  nombre: string;
  token: string;
  tipoUsuario: string;
}