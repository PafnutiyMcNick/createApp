import './WinScreen.css'

function WinScreen ({onClose, isOpened, title}) {

    return(
        <div className={`win-screen ${isOpened? "win-screen-opened": ""}`}>
            <h1>{title}</h1>
            <button className="win-close" onClick={onClose}>Close</button>
        </div>
    )
}

export default WinScreen;