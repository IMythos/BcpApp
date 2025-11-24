export interface OperationBaseWindow {
  cuentaId: number;
  monto: number;
  empleadoId: number;
}

export interface CashierDeposit extends OperationBaseWindow {}
export interface WindowWithdrawal extends OperationBaseWindow {}

export interface WindowPayment {
  pagoId: number;
  monto: number;
  empleadoId: number;
}