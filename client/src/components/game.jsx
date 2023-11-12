import React, { useState, useEffect } from 'react';
import WinScreen from './WinScreen';
import NavBar from './navbar';
import SettingsScreen from './SettingsScreen';
import { generateCards } from './CardGenerator';
import cardBackFace from '../images/back.png';
import './game.css';

const Game = () => {
  const [cards, setCards] = useState(generateCards());
  const [flippedIndices, setFlippedIndices] = useState([]);
  const [matchedPairs, setMatchedPairs] = useState([]);
  const [turnCounter, setTurnCounter] = useState(0);
  const [winOpened, setWinOpened] = useState(false);
  const [win, setWin] = useState(true);

  const resetGame = () => {
    setCards(generateCards());
    setFlippedIndices([]);
    setMatchedPairs([]);
    setTurnCounter(0);
    setWinOpened(false);
  };

  useEffect(() => {
    if (flippedIndices.length === 2) {
      const [firstIndex, secondIndex] = flippedIndices;
      setTurnCounter(turnCounter + 1);
      if (cards[firstIndex] === cards[secondIndex]) {
        setMatchedPairs(prev => [...prev, cards[firstIndex]]);
      }
      setTimeout(() => setFlippedIndices([]), 1000);
    }
  }, [flippedIndices, cards]);

  //таймер на партию

  const [minutes, setMinutes] = useState(5);
  const [seconds, setSeconds] = useState(59);

  function changeMinutes() {
    if (minutes > 0) {
      setMinutes(minutes - 1);
    }
  }

  setTimeout(() => {
    changeMinutes();
  }, 60000);

  function changeSeconds() {
    if (seconds > 0) {
      setSeconds(seconds - 1);
    }
    if (seconds === 0 && minutes > 0) {
      setSeconds(59);
    }
  }

  setTimeout(() => {
    changeSeconds();
  }, 1000);

  setTimeout(() => {
    setWin(false);
    setWinOpened(true);
  }, 60000 * 6);

  //вызов экрана победы
  useEffect(() => {
    if (matchedPairs.length === 8) {
      setWinOpened(true);
    }
  }, [matchedPairs]);

  const handleCardClick = index => {
    if (flippedIndices.length < 2 && !flippedIndices.includes(index)) {
      setFlippedIndices(prev => [...prev, index]);
    }
  };

  const renderCard = (symbol, index) => {
    const isFlipped = flippedIndices.includes(index) || matchedPairs.includes(symbol);
    return (
      <img
        key={index}
        className={`memory__card ${isFlipped ? 'flip' : ''}`}
        onClick={() => handleCardClick(index)}
        src={isFlipped ? symbol : cardBackFace}
      />
    );
  };

  return (
    <div>
      <NavBar turnCounter={turnCounter} seconds={seconds} minutes={minutes} onRestart={resetGame} />
      <div className="main">
        <div className="memory">{cards.map((symbol, index) => renderCard(symbol, index))}</div>
        <WinScreen
          isOpened={winOpened}
          title={win ? 'Поздравляем!' : 'Сожалеем :('}
          subtitle={win ? 'Вы успешно завершили игру' : 'Вы не успели завершить игру'}
          onClose={resetGame}
        />
        <SettingsScreen isOpened={winOpened} onClose={resetGame} onSave={resetGame} />
      </div>
    </div>
  );
};

export default Game;
