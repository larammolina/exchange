import { baseURL } from "../constantes/baseURL";
import axios from 'axios';

export const getCurrencies = async () => {
    try {
        const respuesta = await axios.get(baseURL+'currencies')
        return respuesta
    } catch (error) {
        return error
    }
        
} 
