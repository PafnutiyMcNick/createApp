import React, { useState, useEffect } from 'react';
import EndGameScreen from "./endGameScreen";
import NavBar from "./navbar";
import cardOne from "../images/card_front-face_1.jpg";
import cardTwo from "../images/card_front-face_2.jpg";
import cardThree from "../images/card_front-face_3.jpg";
import cardFour from "../images/card_front-face_4.jpg";
import cardFive from "../images/card_front-face_5.jpg";
import cardSix from "../images/card_front-face_6.jpg";
import cardSeven from "../images/card_front-face_7.jpg";
import cardEight from "../images/card_front-face_8.jpg";
import cardBackFace from "../images/card_back-face.jpg";
import './game.css';

//генерация поля
const generateCards = () => {
    const symbols = [cardOne, cardTwo, cardThree, cardFour, cardFive, cardSix, cardSeven, cardEight];
    const allCards = symbols.concat(symbols);
    return shuffleArray(allCards);
};

//шаффл массива
const shuffleArray = (array) => {
  const shuffledArray = array.slice();

  for (let i = 1; i < shuffledArray.length - 1; i++) {
    const j = Math.floor(Math.random() * (i - 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }

  return shuffledArray;
};

const Game = () => {
  const [cards, setCards] = useState(generateCards());
  const [flippedIndices, setFlippedIndices] = useState([]);
  const [matchedPairs, setMatchedPairs] = useState([]);
  const [turnCounter, setTurnCounter] = useState(0);
  const [win, setWin] = useState(false);
  const [time, setTime] = useState(5); // 6 minutes
  const [gameOver, setGameOver] = useState(false);
  const [firstClick, setFirstClick] = useState(false);

const resetGame = () => {
  setCards(generateCards());
  setFlippedIndices([]);
  setMatchedPairs([]);
  setTurnCounter(0);
  setTime(5);
  setGameOver(false);
  setFirstClick(false);
  
};

  useEffect(() => {
    if (flippedIndices.length === 2) {
      const [firstIndex, secondIndex] = flippedIndices;
      setTurnCounter(turnCounter + 1)
      if (cards[firstIndex] === cards[secondIndex]) {
        setMatchedPairs((prev) => [...prev, cards[firstIndex]]);
      }
      setTimeout(() => setFlippedIndices([]), 1000);
    }
  }, [flippedIndices, cards]);

  //таймер на партию
  useEffect(() => {
    const timerId = setInterval(() => {
      setTime((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
    }, 1000);
  
    return () => {
      clearInterval(timerId);
    };
  }, []); 
  
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
      setGameOver(true)
    }
  }, [matchedPairs])

  const handleCardClick = (index) => {
    if (flippedIndices.length < 2 && !flippedIndices.includes(index)) {
      setFlippedIndices((prev) => [...prev, index]);
    }
  };

  const renderCard = (symbol, index) => {
    const isFlipped = flippedIndices.includes(index) || matchedPairs.includes(symbol);
      return (
        <img key={index} className={`memory__card ${isFlipped ? 'flip' : ''}`} onClick={() => handleCardClick(index)}
        src={isFlipped? symbol: cardBackFace}      />
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