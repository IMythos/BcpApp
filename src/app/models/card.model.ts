import { Client } from "./client.model";

export interface Card {
  id: number;
  cliente: Client;
  numero: string;
  fechaVencimiento: string;
  limiteCredito: number;
}