import { Loan } from "../../models/loan.model";

export interface CreditApplicationRequest {
  usuarioId: number;
  monto: number;
  plazoMeses: number;
}

export interface ApplicationRejectionRequest {
  motivo: string;
}

export interface LoanResponse extends Loan {
  id: number;
  usuarioId: number;
  monto: number;
  plazoMeses: number;
  interes: number;
  estado: string;
}