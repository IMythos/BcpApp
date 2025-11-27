import { Loan } from "./loan.model";
import { Service } from "./service.model";
export interface Payment {
  id: number;
  monto: number;
  fecha: string;
  estado: string;
  clienteId: number;
}

export interface PaymentService extends Payment {
  servicio: Service;
}

export interface PayemntLoan extends Payment {
  prestamo: Loan;
}