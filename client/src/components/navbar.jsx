import React from 'react';
import './navbar.css';

const Navbar = ({turnCounter, onRestart}) => {
  console.log('navbar:', turnCounter)
  return (
    <div className="navbar">
      <div className="turns">Ходов: {turnCounter}</div>
      <button onClick={onRestart}>Перезапустить игру</button>
    </div>
  );
};

export default Navbar;