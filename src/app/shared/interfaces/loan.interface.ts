import { Loan } from "../../models/loan.model";

export interface CreditApplicationRequest {
  usuarioId: number;
  monto: number;
  plazoMeses: number;
  motivo?: string;
  ingresosMensuales: number;
}

export interface ApplicationRejectionRequest {
  motivo: string;
}

export interface PrestamoResponse extends Loan {
    
}