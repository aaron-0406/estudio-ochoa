import axios from "axios";
import { API } from "../config/config";
const api = `${API}/api/v0/banco`;

export const getAll = async () => {
  return await axios.get(`${api}`);
};
