export type TypeRegisterAudit = 'TRANSACCION_SOSPECHOSA' | 'CAMBIO_SALDO' | 'OTRO' | string;

export interface FinancialAuditRegister {
  id: number;
  fechaHora: string;
  tipoRegistro: TypeRegisterAudit;
  descripcion: string;
  usuarioIdRelacionado?: number;
  entidadIdRelacionada?: number;
  detallesAdicionales?: string;
}

export type TipoRol = 'ADMIN' | 'ASESOR' | 'BACKOFFICE' | 'EMPLEADO' | string;

export interface AuditorRole {
  id: number;
  fechaHoraCambio: string;
  adminId: number;
  empleadoId: number;
  rolAnterior?: TipoRol;
  rolNuevo: TipoRol;
}