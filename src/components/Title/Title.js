const LastUpdate = (props) => {
    return (
        <div className="card">
            <h2>Convert {props.amount} {props.currencyFrom} {props.currencyToName} to {props.currencyTo}</h2>
        </div>
    )           
}
export default LastUpdate;