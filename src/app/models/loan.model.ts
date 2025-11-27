import { Users } from "./users.model";

export interface Loan {
  id: number;
  usuario: Users;
  monto: number;
  interes: number;
  plazoMeses: number;
  fechaInicio: string;
  estado: string;
}