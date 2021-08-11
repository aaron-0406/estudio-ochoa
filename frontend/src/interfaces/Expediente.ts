export default interface Expediente {
  id_expediente?: number;
  codigo_estudio: string;
  fecha_asignacion: string;
  nombre_cliente: string;
  contrato: string;
  documentos: string;
  monto: string;
  codigo_expediente: string;
  juzgado: string;
  demanda: string;
  estado_procesal: string;
  fecha_ep: string;
  estado_actual: string;
  folio: string;
  estado_uso: string;
  habilitado: string;
  id_materia: number;
  id_banco: number;
  nombre_banco?:string;
  sigla_nombre?:string;
  archivo?: File[];
  id_documento?: string;
}
