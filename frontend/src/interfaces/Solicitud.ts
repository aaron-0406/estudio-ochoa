export default interface Solicitud {
  id_solicitud?: number;
  fecha_solicitud: string;
  fecha_entrega_usuario: string;
  fecha_entrega_inventario: string;
  motivo_admin: string;
  motivo_usuario: string;
  estado_solicitud: string;
  id_usuario?: number;
  id_expediente: number;
  nombres_usuario?:string;
  apellidos_usuario?:string;
  codigo_expediente?: string;
}
