import React, { useState, useEffect } from 'react';
import './game.css'
import WinScreen from "./WinScreen";
import NavBar from "./navBar";
import cardOne from "../images/card_front-face_1.jpg";
import cardTwo from "../images/card_front-face_2.jpg";
import cardThree from "../images/card_front-face_3.jpg";
import cardFour from "../images/card_front-face_4.jpg";
import cardFive from "../images/card_front-face_5.jpg";
import cardSix from "../images/card_front-face_6.jpg";
import cardSeven from "../images/card_front-face_7.jpg";
import cardEight from "../images/card_front-face_8.jpg";
import cardBackFace from "../images/card_back-face.jpg";

const generateCards = () => {
    const symbols = [cardOne, cardTwo, cardThree, cardFour, cardFive, cardSix, cardSeven, cardEight];
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
    const [winOpened, setWinOpened] = useState(false)

    useEffect(() => {
        if (flippedIndices.length === 2) {
            const [firstIndex, secondIndex] = flippedIndices;
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
          <img key={index} className={`memory__card ${isFlipped ? 'flip' : ''}`} onClick={() => handleCardClick(index)}
          src={isFlipped? symbol: cardBackFace}      />
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
        <div className="main">
          <NavBar onRestart={() => {restartGame()}}/>
          <div className="memory">
            {cards.map((symbol, index) => renderCard(symbol, index))}
          </div>
          <WinScreen isOpened={winOpened} onClose={() => {restartGame()}}/>
        </div>
      );
    };

export default Game;