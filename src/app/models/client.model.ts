import { Users } from "./users.model";

export interface Client extends Users {
  fechaRegistro: string;
}