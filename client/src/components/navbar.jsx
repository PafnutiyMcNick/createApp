import React from 'react';
import './navbar.css';

const Navbar = ({ turnCounter, onRestart, onSettings, seconds, minutes }) => {
  console.log('navbar:', turnCounter);
  return (
    <div className="navbar">
      <div className="navbar__counter-line">
        Ходов: <span class="navbar__counter">{turnCounter}</span>
      </div>
      <div className="navbar__timer">
        {minutes}:{seconds}
      </div>
      <div className="navbar__buttons">
        <button
          className="navbar__button navbar__settings-button"
          aria-label="Настроить игру"
          onClick={onSettings}
        ></button>
        <button
          className="navbar__button navbar__reset-button"
          aria-label="Начать сначала"
          onClick={onRestart}
        ></button>
      </div>
    </div>
  );
};

export default Navbar;
