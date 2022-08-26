import { baseURL } from "../constantes/baseURL" 
import axios from 'axios';


export const getRateByBase = async(symbol) => {
    try {
        const respuesta = await axios.get(baseURL + `rates?base=${symbol}`)
        return respuesta.data
    } catch (error) {
        return error
    }
} 