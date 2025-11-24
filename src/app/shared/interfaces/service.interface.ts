export interface ServiceResponse {
  idServicio: number;
  nombre: string;
  descripcion: string;
  recibo: number;
}

export interface CreateServiceRequest {
  nombre: string;
  descripcion: string;
  recibo: number;
}

export interface EditServiceRequest {
  nombre?: string;
  descripcion?: string;
  recibo?: number;
}