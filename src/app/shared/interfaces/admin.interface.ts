export interface ClientDTO {
  nombre: string;
  dni: string;
  correo: string;
  direccion: string;
  telefono: string;
  contrasena: string;
}

export interface EmployeeDTO extends ClientDTO {
  pago: number;
  fechaContratacion: string;
  rol: 'ASESOR' | 'CAJERO' | 'BACKOFFICE' | 'ADMIN';
}

export interface ChangeRoleRequest {
  empleadoId: number;
  nuevoRol: string;
}