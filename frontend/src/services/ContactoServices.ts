import axios from 'axios';
import { API } from '../config/config';
import Contact from '../interfaces/Contacto';

const api = `${API}/Contacto`;

export const sendMessage = async (dataContact: Contact) => {
    return await axios.post(`${api}`, dataContact);
}