import { Client } from "./client.model";

export interface Account {
  id: number;
  cliente: Client;
  tipo: string;
  estadoCuenta: string;
  numeroCuenta: string;
  saldo: number;
}