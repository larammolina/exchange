import './style.css'
import { useState, useEffect } from "react";
import CurrencyOptions from '../CurrencyOptions/CurrencyOptions';
import Warning from '../Warning/Warning';
import LastUpdate from '../LastUpdate/LastUpdate';
import Title from '../Title/Title';
import ShowResults from '../ShowResults/ShowResults';
import ButtonSwitch from '../ButtonSwitch/ButtonSwitch';
import {getCurrencies} from '../../services/getCurrencies';



const Conversor = () => {

    const initialAmount = 1;
    const initialCurrencyFrom = 'USD';
    const initialCurrencyTo = 'EUR';

    const [amount, setAmount] = useState(initialAmount);
    const [currencyFrom, setCurrencyFrom] = useState(initialCurrencyFrom);
    const [currencyTo, setCurrencyTo] = useState(initialCurrencyTo);
    const [dataMonedas, setDataMonedas] = useState([]);

    const handleChange = (e) => {
        if(e.target.value < 0 ) {
            alert('Positive numbers only');
        } else if (e.target.value >= 0) {
            setAmount(e.target.value);
        }
    }

    useEffect(() => {
        getCurrencies().then((res) => setDataMonedas(Object.entries(res)))    
    }, [])
    
    return (
        <div className='positionPadre'>
            <div className='background'>
                <Title amount={amount} currencyFrom={currencyFrom} currencyTo={currencyTo} />
            </div>      
            <div className='card-central'>
                <div>
                    <p>Amount</p>
                    <input type="number" min='1' onChange={handleChange} value={amount} /> 
                    <p>From:</p>
                    <CurrencyOptions dataMonedas={dataMonedas} handleCurrency={currencyFrom => setCurrencyFrom(currencyFrom.split("-")[0].trim())} />
                    <ButtonSwitch currencyTo={currencyTo.split("-")[0].trim()} switchCurrency={currencyTo => setCurrencyFrom(currencyTo.split("-")[0].trim())}/>
                    <p>To:</p>
                    <CurrencyOptions dataMonedas={dataMonedas} handleCurrency={currencyTo => setCurrencyTo(currencyTo.split("-")[0].trim())} />
                </div>
                <ShowResults amount={amount} currencyFrom={currencyFrom} currencyTo={currencyTo} />
            </div>
            <Warning />
            <LastUpdate currencyFromName={currencyFrom} currencyToName={currencyTo}/>
        </div>
    )
}
export default Conversor;