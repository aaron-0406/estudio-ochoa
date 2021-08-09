import axios from "axios";
import { API } from "../config/config";

import Reclamo from "../interfaces/Reclamo";

const api = `${API}/api/v0/reclamo`;

export const sendReclaim = async (dataReclaim: Reclamo) => {
  return await axios.post(api, dataReclaim);
};
export const getAll = async (page: number, keyword: string) => {
  if (keyword.trim() !== "") return await axios.get(`${api}?keyword=${keyword}&page=${page}`);
  return await axios.get(`${api}?page=${page}`);
};
export const getCount = async (keyword: string) => {
  if (keyword.trim() === "") return await axios.get(`${api}/count`);
  return await axios.get(`${api}/count?keyword=${keyword}`);
};
export const getCountNew = async () => {
  return await axios.get(`${api}/count/new`);
};
export const setVisto = async (id: string) => {
  return await axios.put(`${api}/${id}`);
};

export const eliminarReclamo = async (id: string) => {
  return await axios.delete(`${api}/${id}`);
};
