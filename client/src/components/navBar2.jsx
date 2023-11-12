import React from 'react';
import './navBar.css';

function NavBar({ onRestart }) {
  return (
    <div class="nav-bar">
      <p class="nav-bar__counter-line"> Ходов сделано: <span class="nav-bar__counter">0</span></p>
      <button type="button" class="nav-bar__reset-button" aria-label="Начать сначала" onClick={onRestart}></button>
    </div>
    
  );
}

export default NavBar;
