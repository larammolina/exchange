import { BASE_URL } from "../constantes/api" 
import axios from 'axios';
import { response } from "express";

export const getRateByBase = (symbol) => {

    const response = axios.get(BASE_URL + `rates?base=${symbol}`)
    .then((response) => response.json());

    return response;
} 