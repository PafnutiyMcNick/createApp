import React, {useState} from 'react';
import './SettingsScreen.css';

function SettingsScreen({ isOpened, onClose, onSave }) {
  const [selectValue, setSelectValue] = useState('four');
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
            <select onChange={(evt)=> {setSelectValue(evt.target.options[evt.target.selectedIndex].value)}}>
              <option value="four">4x4</option>
              <option value="six">6x6</option>
            </select>
          </label>
          <button
            type="button"
            className="set-screen__save-button button"
            aria-label="Сохранить изменения"
            onClick={onSave}
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
