export interface Usuario {
  id_usuario?: number;
  email_usuario: string;
  dni: string;
  nombres_usuario: string;
  apellidos_usuario: string;
  telefono_usuario: string;
  estado_usuario: number;
  rango_usuario: number;
  authenticate: boolean;
}
