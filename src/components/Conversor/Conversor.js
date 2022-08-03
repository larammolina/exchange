import './style.css'
import { useState } from "react";
import CurrencyOptions from '../CurrencyOptions/CurrencyOptions';
import Warning from '../Warning/Warning';
import LastUpdate from '../LastUpdate/LastUpdate';
import Title from '../Title/Title';
import ShowResults from '../ShowResults/ShowResults';
import ButtonSwitch from '../ButtonSwitch/ButtonSwitch';


const Conversor = () => {
    const [amount, setAmount] = useState('1.00');
    const [currencyFrom, setCurrencyFrom] = useState('USD');
    const [currencyTo, setCurrencyTo] = useState('EUR');
    const [currencyFromName, setCurrencyFromName] = useState('US Dollar');
    const [currencyToName, setCurrencyToName] = useState('');


    return (
        <div className='positionPadre'>
            <div className='background'>
                <Title amount={amount} currencyFrom={currencyFrom} currencyFromName={currencyFromName} currencyTo={currencyTo} />
            </div>      
            <div className='card-central'>
                <div>
                    <p>Amount</p>
                    <input type="number" min='1' onChange={(e) => setAmount(e.target.value)}/> 
                    <p>From:</p>
                    <CurrencyOptions handleCurrency={currencyFrom => setCurrencyFrom(currencyFrom)} />
                    <ButtonSwitch switchCurrency={currencyTo => setCurrencyFrom(currencyTo)}/>
                    <p>To:</p>
                    <CurrencyOptions handleCurrency={currencyTo => setCurrencyTo(currencyTo)} />
                </div>
                <ShowResults amount={amount} currencyFrom={currencyFrom} currencyTo={currencyTo} />
            </div>
            <Warning />
            <LastUpdate currencyFrom={currencyFrom} currencyTo={currencyTo}/>
        </div>
    )
}
export default Conversor;