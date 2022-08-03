
const ButtonSwitch = (props) => {

    return (
        <div className='circulo'>
            <img src='/images/Trade.svg' alt='trade-button' onClick={()=> props.switchCurrency()}></img>
        </div>
    )
}

export default ButtonSwitch;