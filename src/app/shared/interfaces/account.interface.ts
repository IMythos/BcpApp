export interface AccountDTO {
  id: number;
  numeroCuenta: string;
  tipo: string;
  saldo: number;
  estadoCuenta: string;
  clienteId?: number;
}

export interface AccountDetailDTO {
  cuenta: AccountDTO;
  movimientos?: any[]; 
}

