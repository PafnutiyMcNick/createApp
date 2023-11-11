import React, { useState, useEffect } from 'react';
import './game.css'
import WinScreen from "./WinScreen";
import Navbar from "../components/navbar";

const generateCards = () => {
    const symbols = [1, 2, 3, 4, 5, 6, 7, 8];
    const allCards = symbols.concat(symbols);
    return shuffleArray(allCards);
};

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
    const [winOpened, setWinOpened] = useState(false)

    const resetGame = () => {
      setCards(generateCards());
      setFlippedIndices([]);
      setMatchedPairs([]);
      setTurnCounter(0);
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

    //вызов экрана победы
    useEffect(() => {
        if (matchedPairs.length === 8) {
            setWinOpened(true)
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
          <div
            key={index}
            className={`card ${isFlipped ? 'flipped' : ''}`}
            onClick={() => handleCardClick(index)}
          >
            {isFlipped ? symbol : ' '}
          </div>
        );
      };

    //рестарт
    const restartGame = () => {
        setMatchedPairs([]);
        setCards(shuffleArray);
        cards.map((symbol, index) => renderCard(symbol, index));
        setWinOpened(false)
    }
    
      return (
        <div>
          <Navbar turnCounter={turnCounter} onRestart={resetGame} />
          
          <div className="Game">
          <div className="card-container">
            {cards.map((symbol, index) => renderCard(symbol, index))}
          </div>
            <WinScreen isOpened={winOpened} onClose={() => {restartGame()}}/>
        </div>
      );
    };

export default Game;