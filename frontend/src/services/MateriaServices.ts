import axios from "axios";
import { API } from "../config/config";
const api = `${API}/api/v0/materia`;

export const getAll = async () => {
  return await axios.get(`${api}`);
};
