export type TipoRegistroAuditoria = 
  | 'TRANSACCION_SOSPECHOSA' 
  | 'CAMBIO_SALDO' 
  | 'ACCESO_ILEGAL' 
  | 'OTRO' 
  | string;

export type TipoRol = 
  | 'ADMIN' 
  | 'ASESOR' 
  | 'EMPLEADO' 
  | 'BACKOFFICE' 
  | 'CLIENTE' 
  | string;

export interface AuditLogDTO {
  id: number;
  fechaHora: string; 
  tipoRegistro: TipoRegistroAuditoria;
  descripcion: string;
  usuarioIdRelacionado?: number;
  entidadIdRelacionada?: number;
  detallesAdicionales?: string;
}

export interface AuditRoleDTO {
  id: number;
  fechaHoraCambio: string;
  adminId: number;
  empleadoId: number;
  rolAnterior?: TipoRol;
  rolNuevo: TipoRol;
}