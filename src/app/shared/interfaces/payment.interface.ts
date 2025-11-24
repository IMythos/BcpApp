// Interfaces previas...
export interface PaymentRequest {
  cuentaId: number;
  pagoId: number;
}

export interface PendingPaymentDTO {
  id: number;
  servicioNombre: string;
  monto: number;
  fechaVencimiento: string;
  codigoPago: string;
}

export interface EditPaymentRequest {
  monto?: number;
  fecha?: string;
}