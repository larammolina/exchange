import { baseURL } from "../constantes/baseURL";
import axios from 'axios';

export const getCurrencies = async () => {
    try {
        const respuesta = await axios.get(baseURL+'currencies')
        //console.log(respuesta.data)
        return respuesta.data
    } catch (error) {
        return error
    }
        
} 
