
const ButtonSwitch = (props) => {

    return (
        <div className='pt-2' >
            <div className='circulo'>
                <img src='/images/Trade.svg' alt='trade-button' onClick={()=> props.switchCurrency()}></img>
            </div>
        </div>
        
    )
}

export default ButtonSwitch;