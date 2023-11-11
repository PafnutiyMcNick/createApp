import React from 'react';
import './winScreen.css';

function WinScreen({ isOpened, onClose }) {
  return (
    <div className={`win-screen ${isOpened? "win-screen_opened": ""}`}>
      <div className="win-screen__container">
        <h1 className="win-screen__title">Поздравляем!</h1>
        <p className="win-screen__subtitle">Вы успешно завершили игру</p>
          <button
            type="button"
            class="win-screen__close-button button"
            aria-label="Закрыть окно"
            onClick={onClose}
          ></button>
      </div>
    </div>
  );
}

export default WinScreen;
