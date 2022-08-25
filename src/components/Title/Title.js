const LastUpdate = (props) => {
    return (
        <div className="card">
            <h2>Convert {props.amount} {props.currencyFromName} to {props.currencyToName} - {props.currencyFrom} to {props.currencyTo}</h2>
        </div>
    )           
}
export default LastUpdate;