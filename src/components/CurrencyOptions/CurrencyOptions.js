import { useState, useEffect } from "react";

const CurrencyOptions = (props) => {
    const [dataMonedas, setDataMonedas] = useState([]);
    //consulto las monedas disponibles
    useEffect(() => {
        fetch(`https://api.vatcomply.com/currencies`)
        .then((response) => response.json())
        .then((json) => setDataMonedas(Object.entries(json)))
        .catch((error) => console.error(error))
    }, [])
    return (
        <>
        <label for="moneda"></label>
        <select name={props.name} value={props.value} onChange={(e)=> props.handleCurrency(e.target.value)}>
            {dataMonedas.map( ([itemId, {name, symbol}]) => (
                <option key={itemId} value={itemId} >{symbol} - {name}</option>
            ))}    
        </select>
        </>
    )           
}

export default CurrencyOptions;