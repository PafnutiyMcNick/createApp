import './WinScreen.css'

function WinScreen ({onClose, isOpened}) {

    return(
        <div className={`win-screen ${isOpened? "win-screen-opened": ""}`}>
            <button className="win-close" onClick={onClose}>Close</button>
        </div>
    )
}

export default WinScreen;