import { useState, useEffect } from "react";

const CurrencyOptions = (props) => {
    const [dataMonedas, setDataMonedas] = useState([]);
    //consulto las monedas disponibles
    useEffect(() => {
        fetch(`https://api.vatcomply.com/currencies`)
        .then((response) => response.json())
        .then((json) => setDataMonedas(Object.values(json)))
        .catch((error) => console.error(error))
    }, [])


    return (
        <>
        <label htmlFor='moneda'></label>
        <select name={props.option} onChange={(e)=> props.handleCurrency(e.target.value)}>
            {dataMonedas.map(({name, symbol}) => (
                <option value={symbol} >{symbol} - {name}</option>
            ))}    
        </select>
        </>
    )           
}

export default CurrencyOptions;