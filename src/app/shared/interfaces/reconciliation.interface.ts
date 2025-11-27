export interface InterbankTransaction {
  // No hay dto creo
  idReferencia: string;
  monto: number;
  fechaOperacion: string;
  bancoOrigen: string;
  bancoDestino: string;
}

export interface ReconciliationRequest {
  fechaConciliacion: string;
  operaciones: InterbankTransaction[];
}

export interface ReconciliationResult {
  estado: string;
  mensaje: string;
  alertaId?: number;
}