import React, { useState, useEffect } from 'react';

const generateCards = () => {
  const symbols = [1, 2, 3, 4, 5, 6, 7, 8];
  const allCards = symbols.concat(symbols);
  return shuffleArray(allCards);
};

const shuffleArray = (array) => {
  const shuffledArray = array.slice();
  
  for (let i = 1; i < shuffledArray.length - 1; i++){
    const j = Math.floor(Math.random() * (i - 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  
  console.log(shuffledArray)
  return shuffledArray;
};

const Game = () => {
    const cards = generateCards();

  console.log(cards)
};

export default Game;