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
    const initialCurrencyFromName = 'US Dollar';
    const initialCurrencyToName = 'Euro';

    const [amount, setAmount] = useState(initialAmount);
    const [currencyFrom, setCurrencyFrom] = useState(initialCurrencyFrom);
    const [currencyTo, setCurrencyTo] = useState(initialCurrencyTo);
    const [currencyFromName, setCurrencyFromName] = useState(initialCurrencyFromName);
    const [currencyToName, setCurrencyToName] = useState(initialCurrencyToName);
    const [dataMonedas, setDataMonedas] = useState();

    const handleChange = (e) => {
        if(e.target.value < 0 ) {
            alert('Positive numbers only');
        } else if (e.target.value >= 0) {
            setAmount(e.target.value);
        }
    }
    
    return (
        <div className='positionPadre'>
            <div className='background'>
                <Title amount={amount} currencyFrom={currencyFrom} currencyFromName={currencyFromName} currencyTo={currencyTo} currencyToName={currencyToName}/>
            </div>      
            <div className='card-central'>
                <div>
                    <p>Amount</p>
                    <input type="number" min='1' onChange={handleChange} value={amount} /> 
                    <p>From:</p>
                    <CurrencyOptions handleCurrency={currencyFrom => setCurrencyFrom(currencyFrom)} />
                    <ButtonSwitch currencyTo={currencyTo} switchCurrency={currencyTo => setCurrencyFrom(currencyTo)}/>
                    <p>To:</p>
                    <CurrencyOptions dataMonedas={dataMonedas} handleCurrency={currencyTo => setCurrencyTo(currencyTo)} />
                </div>
                <ShowResults amount={amount} currencyFrom={currencyFrom} currencyTo={currencyTo} />
            </div>
            <Warning />
            <LastUpdate currencyFrom={currencyFrom} currencyTo={currencyTo}/>
        </div>
    )
}
export default Conversor;