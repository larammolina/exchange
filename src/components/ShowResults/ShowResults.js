import { useEffect, useState } from "react";

const ShowResults = (props) => {

    const [result, setResult] = useState('');
    const [result2, setResult2] = useState('');
    const [result3, setResult3] = useState('');

    useEffect(() => {
        if (props.amount>=0){
        // const response = await fetch(`https://api.vatcomply.com/rates?base=${props.currencyFrom}`)
        // const res = await response.json()
        // setResult((res.rates[currencyTo] * amount).toFixed(2));
        // setResult2(res.rates[currencyTo].toFixed(4));             
        // const response2 = await fetch(`https://api.vatcomply.com/rates?base=${props.currencyTo}`)
        // const res2 = await response2.json();
        // setResult3(res2.rates[currencyFrom].toFixed(4));
        // setDate(res2.date);
    } else {
        alert('Please enter positive numbers only')
    }
    }, [props.amount]);

    return (

        <div className='result'>
            <p> {props.amount} {props.currencyFrom} = </p>
            <span className='bold'>{result} {props.currencyTo} </span>
            <div className='subP'>
                <p>1 {props.currencyTo} = {result3} {props.currencyFrom}</p>
                <p>1 {props.currencyFrom} = {result2} {props.currencyTo}</p>
            </div>
        </div>
    
    )


};

export default ShowResults;