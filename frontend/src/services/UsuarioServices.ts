import axios from "axios";
import { API } from "../config/config";
import { Usuario } from "../interfaces/Usuario";
const api = `${API}/api/v0/usuario`;

export const getAll = async (page: number, keyword: string) => {
  if (keyword.trim() !== "") return await axios.get(`${api}?keyword=${keyword}&page=${page}`);
  return await axios.get(`${api}?page=${page}`);
};

export const getCount = async (keyword: string) => {
  if (keyword.trim() === "") return await axios.get(`${api}/count`);
  return await axios.get(`${api}/count?keyword=${keyword}`);
};
export const editarUsuario = async (id: string | undefined, usuario: Usuario) => {
  return await axios.put(`${api}/${id}`, usuario);
};
export const eliminarUsuario = async (id: string | undefined) => {
  return await axios.delete(`${api}/${id}`);
};
