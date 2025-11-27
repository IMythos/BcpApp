export type TipoAlerta = 'INFORMATIVA' | 'ADVERTENCIA' | 'URGENTE' | string; 
export type EstadoAlerta = 'NUEVA' | 'LEIDA' | string;

export interface Alert {
  id: number;
  fechaHoraCreacion: string;
  tipoAlerta: TipoAlerta;
  mensaje: string;
  estado: EstadoAlerta;
  usuarioNotificadoId: number;
}