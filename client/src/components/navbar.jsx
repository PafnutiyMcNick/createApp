import React from 'react';
import './navbar.css';

const Navbar = ({ turns, onRestart }) => {
  return (
    <div className="navbar">
      <div className="turns">Ходы: {turns}</div>
      <button onClick={onRestart}>Перезапустить игру</button>
    </div>
  );
};

export default Navbar;