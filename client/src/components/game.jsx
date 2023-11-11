import React, { useState, useEffect } from 'react';
import './game.css'

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

    useEffect(() => {
        if (flippedIndices.length === 2) {
            const [firstIndex, secondIndex] = flippedIndices;
            if (cards[firstIndex] === cards[secondIndex]) {
                setMatchedPairs((prev) => [...prev, cards[firstIndex]]);
            }
            setTimeout(() => setFlippedIndices([]), 1000);
        }
    }, [flippedIndices, cards]);

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
    
      return (
        <div className="App">
          <div className="card-container">
            {cards.map((symbol, index) => renderCard(symbol, index))}
          </div>
        </div>
      );
    };

export default Game;