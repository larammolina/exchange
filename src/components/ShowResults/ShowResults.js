import { useState, useEffect } from "react";
import { getRateByBase } from '../../services/getRateByBase';

const ShowResults = (props) => {

    const [result, setResult] = useState('');
    const [result2, setResult2] = useState('');
    const [result3, setResult3] = useState('');

    useEffect(() => {
        if (props.amount>=0){
            getRateByBase(props.currencyFrom).then((res) => setResult((res.rates[props.currencyTo] * props.amount).toFixed(2)));
            getRateByBase(props.currencyTo).then((res2) => setResult2(res2.rates[props.currencyFrom].toFixed(4)))            
            getRateByBase(props.currencyFrom).then((res3) => setResult3(res3.rates[props.currencyTo].toFixed(4)))
        } else {
            alert('Positive numbers only')
        }
    }, [props.amount, props.currencyFrom, props.currencyTo]);

    return (
        <div className='result'>
            <p> {props.amount} {props.currencyFrom} = </p>
            <span className='bold'>{result} {props.currencyTo} </span>
            <div className='subP'>
                <p>1 {props.currencyTo} = {result2} {props.currencyFrom}</p>
                <p>1 {props.currencyFrom} = {result3} {props.currencyTo}</p>
            </div>
        </div>
    )

};

export default ShowResults;