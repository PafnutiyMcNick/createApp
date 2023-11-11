import React from 'react';
import './navbar.css';
import CountDown from "./CountDown";

const Navbar = ({turnCounter, onRestart, seconds, minutes}) => {
    console.log('navbar:', turnCounter)
    return (
        <div className="navbar">
            <div className="turns">Ходов: {turnCounter}</div>
            <CountDown seconds={seconds} minutes={minutes}/>
            <button onClick={onRestart}>Перезапустить игру</button>
        </div>
    );
};

export default Navbar;