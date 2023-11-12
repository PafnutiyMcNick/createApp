import React from 'react';
import './navbar.css';

const Navbar = ({ turnCounter, onRestart, onSettings, time }) => {
  return (
    <div className="navbar">
      <div className="navbar__counter-line">
        Ходов: <span className="navbar__counter">{turnCounter}</span>
      </div>
      <div className="navbar__timer">
        {Math.floor(time / 60)}:{(time % 60).toString().padStart(2, '0')}
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
