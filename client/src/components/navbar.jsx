import React from 'react';
import './navbar.css';

const Navbar = ({turnCounter, onRestart, seconds, minutes}) => {
    console.log('navbar:', turnCounter)
    return (
        <div className="navbar">
            <div className="navbar__counter-line">Ходов: <span class="navbar__counter">{turnCounter}</span></div>
            <div className="navbar__timer">{minutes}:{seconds}</div>
            <button className="navbar__reset-button" aria-label="Начать сначала" onClick={onRestart}></button>
        </div>
    );
};

export default Navbar;