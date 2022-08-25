import { api } from "../constantes/api";

export const getCurrencies = async () => {
    
    const response = await api.get('/').then(res => res.json()).catch(console.log)

    return response
      
} 
