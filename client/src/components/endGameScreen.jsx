import React from 'react';
import './endGameScreen.css';

function EndGameScreen({ isOpened, onClose, title, subtitle }) {
  return (
    <div className={`win-screen ${isOpened? "win-screen_opened": ""}`}>
      <div className="win-screen__container">
        <h1 className="win-screen__title">{title}</h1>
        <p className="win-screen__subtitle">{subtitle}</p>
          <button
            type="button"
            className="win-screen__close-button button"
            aria-label="Закрыть окно"
            onClick={onClose}
          ></button>
      </div>
    </div>
  );
}

export default EndGameScreen;
