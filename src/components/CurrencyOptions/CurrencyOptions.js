 import { useState, useEffect } from "react";
 import { getCurrencies } from "../../services/getCurrencies";

const CurrencyOptions = (props) => {
    
    // useEffect(() => {
    //     getCurrencies().then((res) => setDataMonedas(Object.values(res)))
        
    // }, [])

    const monedas = props.dataMonedas;

    return (
        <>
        <label htmlFor='moneda'></label>
        <select name={'moneda'} onChange={(e)=> props.handleCurrency(e.target.value)}>
            {monedas.map(({name, symbol}) => (
                <option key={symbol} value={symbol} >{symbol} - {name}</option>
            ))}    
        </select>
        </>
    )           
}

export default CurrencyOptions;