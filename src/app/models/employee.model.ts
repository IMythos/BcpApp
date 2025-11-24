import { Users } from "./users.model";

export interface Employee extends Users {
  pago: number;
  fechaContratacion: string;
}