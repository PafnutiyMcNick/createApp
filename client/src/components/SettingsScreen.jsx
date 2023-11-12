import React from 'react';
import './SettingsScreen.css';

function SettingsScreen({ isOpened, onClose, onSave }) {
  return (
    <div className={`set-screen ${isOpened ? 'set-screen_opened' : ''}`}>
      <div className="set-screen__container">
        <form className="set-screen__form">
          <label className="set-screen__label">
            Установите таймер:
            <input className="set-screen__input" type="text" name="minutes" placeholder="мин" />
            <input className="set-screen__input" type="text" name="minutes" placeholder="сек" />
          </label>
          <label className="set-screen__label">
            Выберите размер поля:
            <input className="set-screen__radio" id="4x4" type="radio" name="field" value="4" />
            <label className="set-screen__label" for="4x4">
              4x4
            </label>
            <input className="set-screen__radio" id="6x6" type="radio" name="field" value="6" />
            <label className="set-screen__label" for="6x6">
              6x6
            </label>
          </label>
          <button
            type="button"
            class="set-screen__save-button button"
            aria-label="Сохранить изменения"
            onClick={onSave}
          >
            Сохранить
          </button>
        </form>
        <button
          type="button"
          class="set-screen__close-button button"
          aria-label="Закрыть окно"
          onClick={onClose}
        ></button>
      </div>
    </div>
  );
}

export default SettingsScreen;
