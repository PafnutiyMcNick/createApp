import React, { useState, useEffect } from 'react';
import EndGameScreen from "./endGameScreen";
import NavBar from "./navbar";
import { generateCards } from './CardGenerator';
import cardBackFace from "../images/card_back-face.jpg";
import './game.css';

const Game = () => {
  const [cards, setCards] = useState(generateCards());
  const [flippedIndices, setFlippedIndices] = useState([]);
  const [matchedPairs, setMatchedPairs] = useState([]);
  const [turnCounter, setTurnCounter] = useState(0);
  const [win, setWin] = useState(false);
  const [time, setTime] = useState(360); // 6 minutes
  const [gameOver, setGameOver] = useState(false);
  const [firstClick, setFirstClick] = useState(false);

const resetGame = () => {
  setCards(generateCards());
  setFlippedIndices([]);
  setMatchedPairs([]);
  setTurnCounter(0);
  setTime(360);
  setGameOver(false);
  setFirstClick(false);
  
};

  //таймер на партию — запускаем по первому клику на карточку
  useEffect(() => {
  let timerId;

  if (firstClick) {
    timerId = setInterval(() => {
      setTime((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
    }, 1000);
  }

  return () => clearInterval(timerId);
}, [firstClick, time]);

  useEffect(() => {
    //проверка на первый клик
    if (flippedIndices.length === 1 && turnCounter === 0){
      setFirstClick(true);
    }
    if (flippedIndices.length === 2) {
      const [firstIndex, secondIndex] = flippedIndices;
      setTurnCounter(turnCounter + 1);
      if (cards[firstIndex] === cards[secondIndex]) {
        setMatchedPairs(prev => [...prev, cards[firstIndex]]);
      }
      setTimeout(() => setFlippedIndices([]), 1000);
    }
  }, [flippedIndices, cards]);

  
  //отдельно отслеживаем, закончилось ли время, иначе путаница зависимостей и игра продолжается несмотря на конец времени
  useEffect(() => {
    if (time === 0) {
      setGameOver(true);
      setWin(false);
    }
  }, [time]);
  

  //вызов экрана победы
  useEffect(() => {
    if (matchedPairs.length === 8) {
      setWin(true);
      setGameOver(true)
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
      <NavBar turnCounter={turnCounter}  onRestart={resetGame}  time={time} />
      <div className="main">
        <div className="memory">
          {cards.map((symbol, index) => renderCard(symbol, index))}
        </div>
      </div>
      <EndGameScreen isOpened={gameOver} title={win ? 'Поздравляем!' : 'Сожалеем :('} subtitle={win ? 'Вы успешно завершили игру' : 'Вы не успели завершить игру'} onClose={resetGame}/>
    </div>
  );
};

export default Game;
