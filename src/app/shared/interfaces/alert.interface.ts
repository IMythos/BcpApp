import { EstadoAlerta, TipoAlerta } from "../../models/alert.model";

export interface AlertPersistenceDTO {
  id: number;
  fechaHoraCreacion: string;
  tipoAlerta: TipoAlerta;
  mensaje: string;
  estado: EstadoAlerta;
  usuarioNotificadoId: number;
}