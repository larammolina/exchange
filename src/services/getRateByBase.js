import { baseURL } from "../constantes/api" 
import axios from 'axios';
import { response } from "express";

export const getRateByBase = async(symbol) => {
    try {
        const respuesta = await axios.get(baseURL + `rates?base=${symbol}`)
        return respuesta
    } catch (error) {
        return error
    }
} 