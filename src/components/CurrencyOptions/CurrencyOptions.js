const CurrencyOptions = (props) => {
    const monedas = props.dataMonedas;

    return (
        <>
        <label htmlFor='moneda'></label>
        <select name={'moneda'} onChange={(e)=> props.handleCurrency(e.target.value)}>
        {monedas.map(([key, {name, symbol}]) => (
                <option key={key} value={key + " - " + name} >{symbol + " - " + name}</option>
            ))}    
        </select>
        </>
    )           
}

export default CurrencyOptions;