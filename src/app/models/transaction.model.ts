import { Account } from "./account.model";

export interface Transaccion {
  id: number;
  cuenta: Account;
  tipo: 'DEPOSITO' | 'RETIRO' | string;
  monto: number;
  fecha: string;
}