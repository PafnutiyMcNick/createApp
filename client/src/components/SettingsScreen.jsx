import React, { useState } from 'react';
import './SettingsScreen.css';

function SettingsScreen({ isOpened, onClose, onSave }) {

  const [minutes, setMinutes] = useState(6);
  const [seconds, setSeconds] = useState(0);
  const [size, setSize] = useState(4)

  const handleSave  = () => {
    
    const totalSeconds = minutes * 60 + seconds;
    if (totalSeconds > 0) {
      onSave( {
        time: totalSeconds,
        size,
      });
      onClose();
    } else {
      alert('Некорректное время. Игра не начата.');
    }
  };
  


  return (
    <div className={`set-screen ${isOpened ? 'set-screen_opened' : ''}`}>
      <div className="set-screen__container">
        <form className="set-screen__form">
          <label className="set-screen__label">
            Установите таймер:
            <input className="set-screen__input" type="text" name="minutes" placeholder="мин" onChange={(e) => setMinutes(parseInt(e.target.value, 10))} />
            <input className="set-screen__input" type="text" name="minutes" placeholder="сек" onChange={(e) => setSeconds(parseInt(e.target.value, 10))} />
          </label>
          <label className="set-screen__label">
            Выберите размер поля:
            <input className="set-screen__radio" id="4x4" type="radio" name="field" value="4" onChange={(e) => setSize(4)}/>
            <label className="set-screen__label" htmlFor="4x4">
              4x4
            </label>
            <input className="set-screen__radio" id="6x6" type="radio" name="field" value="6" onChange={(e) => setSize(6)} />
            <label className="set-screen__label" htmlFor="6x6">
              6x6
            </label>
          </label>
          <button
            type="button"
            className="set-screen__save-button button"
            aria-label="Сохранить изменения"
            onClick={handleSave}
          >
            Сохранить
          </button>
        </form>
        <button
          type="button"
          className="set-screen__close-button button"
          aria-label="Закрыть окно"
          onClick={onClose}
        ></button>
      </div>
    </div>
  );
}

export default SettingsScreen;
