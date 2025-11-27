import { Employee } from "./employee.model";
import { Users } from "./users.model";

export type EstadoReclamo = 'PENDIENTE' | 'EN_REVISION' | 'ATENDIDO';

export interface Complaint{
  id: number;
  cliente: Users;
  empleado?: Employee;
  fechaCreacion: string;
  descripcion: string;
  estado: EstadoReclamo;
  respuesta?: string;
  numeroSeguimiento: string;
}