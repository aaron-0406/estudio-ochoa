import axios from "axios";
import { API } from "../config/config";
import Solicitud from "../interfaces/Solicitud";
const api = `${API}/api/v0/solicitud`;

export const getAll = async (page: number, keyword: string,estado:string) => {
  if (keyword.trim() !== "") return await axios.get(`${api}?keyword=${keyword}&page=${page}&estado=${estado}`);
  return await axios.get(`${api}?page=${page}&estado=${estado}`);
};

export const getAllByUsuarioId = async (id_usuario: number, page: number, keyword: string,estado:string) => {
  if (keyword.trim() !== "") return await axios.get(`${api}?keyword=${keyword}&page=${page}&estado=${estado}`);
  return await axios.get(`${api}/:${id_usuario}?page=${page}&estado=${estado}`);
};

export const getCount = async (keyword: string,estado:string) => {
  if (keyword.trim() === "") return await axios.get(`${api}/count?estado=${estado}`);
  return await axios.get(`${api}/count?keyword=${keyword}&estado=${estado}`);
};

export const getResumen = async () => {
  return await axios.get(`${api}/resumen`);
};

export const createSolicitud = async (solicitud: Solicitud) => {
  return await axios.post(`${api}`, solicitud);
};

export const editarSolicitud = async (id: string | undefined, solicitud: Solicitud, estado: string) => {
  solicitud.estado_solicitud = estado;
  return await axios.put(`${api}/${id}`, solicitud);
};

export const eliminarSolicitud = async (id: string | undefined) => {
  return await axios.delete(`${api}/${id}`);
};
