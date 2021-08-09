import axios from "axios";
import { API } from "../config/config";
const api = `${API}/api/v0/informe`;

export const getInforme = async (fecha: string) => {
  return await axios.post(`${api}`, { fecha_solicitud: fecha });
};
export const getInformeByIdUsuario = async (fecha: string, id_usuario: string) => {
  return await axios.post(`${api}/${id_usuario}`, { fecha_solicitud: fecha });
};
