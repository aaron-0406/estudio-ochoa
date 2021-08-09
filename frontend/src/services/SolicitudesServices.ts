import axios from "axios";
import { API } from "../config/config";
import Solicitud from "../interfaces/Solicitud";
const api = `${API}/api/v0/solicitud`;

export const getAll = async (page: number, keyword: string, estado: string) => {
  if (keyword.trim() !== "") return await axios.get(`${api}?keyword=${keyword}&page=${page}&estado=${estado}`);
  return await axios.get(`${api}?page=${page}&estado=${estado}`);
};

export const getCount = async (keyword: string, estado: string) => {
  if (keyword.trim() === "") return await axios.get(`${api}/count?estado=${estado}`);
  return await axios.get(`${api}/count?keyword=${keyword}&estado=${estado}`);
};

export const getResumen = async () => {
  return await axios.get(`${api}/resumen`);
};

export const getAllByUsuarioId = async (id_usuario: string, page: number, keyword: string, estado: string) => {
  if (keyword.trim() !== "") return await axios.get(`${api}/${id_usuario}?keyword=${keyword}&page=${page}&estado=${estado}`);
  return await axios.get(`${api}/${id_usuario}?page=${page}&estado=${estado}`);
};
export const getCountByUsuarioÏd = async (id: string, keyword: string, estado: string) => {
  if (keyword.trim() === "") return await axios.get(`${api}/count/${id}?estado=${estado}`);
  return await axios.get(`${api}/count/${id}?keyword=${keyword}&estado=${estado}`);
};
export const getByFecha = async (fecha:string) => {
  return await axios.get(`${api}/fecha/${fecha}`);
};
export const getByFechaIdUsuario = async (fecha:string,id_usuario:string) => {
  return await axios.get(`${api}/fecha/${fecha}/${id_usuario}`);
};
export const getResumenByUsuarioId = async (id: string) => {
  return await axios.get(`${api}/resumen/${id}`);
};
export const createSolicitud = async (solicitud: Solicitud) => {
  return await axios.post(`${api}`, solicitud);
};

export const editarSolicitud = async (id: string | undefined, solicitud: Solicitud, estado: string) => {
  return await axios.put(`${api}/${id}/${estado}`, solicitud);
};

export const eliminarSolicitud = async (id: string | undefined) => {
  return await axios.delete(`${api}/${id}`);
};
