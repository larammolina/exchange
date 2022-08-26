 import { useState, useEffect } from "react";
 import { getCurrencies } from "../../services/getCurrencies";

const CurrencyOptions = (props) => {
    const [dataMonedas, setDataMonedas] = useState([]);
    
    useEffect(() => {
        getCurrencies()
        
        // .then((response) => response.data())
        // .then((json) => setDataMonedas(Object.values(json)))
        // .catch((error) => console.error(error))
    }, [])

    return (
        <>
        <label htmlFor='moneda'></label>
        <select name={'moneda'} onChange={(e)=> props.handleCurrency(e.target.value)}>
            {dataMonedas.map(({name, symbol}) => (
                <option value={symbol} >{symbol} - {name}</option>
            ))}    
        </select>
        </>
    )           
}

export default CurrencyOptions;