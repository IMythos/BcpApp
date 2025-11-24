import { EstadoReclamo } from "../../models/complaint.model";

export interface ComplaintResponse {
  idReclamo: number;
  clienteId: number;
  empleadoId?: number;
  fechaCreacion: string;
  descripcion: string;
  estadoReclamo: EstadoReclamo;
  respuesta?: string;
  numeroSeguimiento: string;
}
// Interfaces previas...

export interface CreateComplainRequest {
  clienteId: number;
  descripcion: string;
  tipoReclamo?: string; // Si aplica
}