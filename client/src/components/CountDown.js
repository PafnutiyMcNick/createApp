import './CountDown.css'

function CountDown ({seconds, minutes}) {
    return(
        <div className="countdown">{minutes}:{seconds}</div>
    )
}

export default CountDown;