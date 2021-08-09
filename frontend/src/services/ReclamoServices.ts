import axios from 'axios';
import { API } from '../config/config';

import Reclamo from '../interfaces/Reclamo';

const api = `${API}/LibroDeReclamaciones`

export const sendReclaim = async (dataReclaim: Reclamo) => {
    return await axios.post(api, dataReclaim)
}