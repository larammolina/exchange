import { api } from "../constantes/api" 
import axios from 'axios';
import { response } from "express";

export const getRateByBase = (symbol) => {

    const response = axios.get(api + `rates?base=${symbol}`)
    .then((response) => response.json());

    return response;
} 