import axios from "axios";
import { API } from "../config/config";
import Solicitud from "../interfaces/Solicitud";
const api = `${API}/api/v0/solicitud`;

export const getAll = async (page: number, keyword: string) => {
  if (keyword.trim() !== "") return await axios.get(`${api}?keyword=${keyword}&page=${page}`);
  return await axios.get(`${api}?page=${page}`);
};

export const getAllByUsuarioId = async (id_usuario: number, page: number, keyword: string) => {
  if (keyword.trim() !== "") return await axios.get(`${api}?keyword=${keyword}&page=${page}`);
  return await axios.get(`${api}/:${id_usuario}?page=${page}`);
};

export const getCount = async (keyword: string) => {
  if (keyword.trim() === "") return await axios.get(`${api}/count`);
  return await axios.get(`${api}/count?keyword=${keyword}`);
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
