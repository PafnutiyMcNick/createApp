import cardOne from '../images/card_front-face_1.jpg';
import cardTwo from '../images/card_front-face_2.jpg';
import cardThree from '../images/card_front-face_3.jpg';
import cardFour from '../images/card_front-face_4.jpg';
import cardFive from '../images/card_front-face_5.jpg';
import cardSix from '../images/card_front-face_6.jpg';
import cardSeven from '../images/card_front-face_7.jpg';
import cardEight from '../images/card_front-face_8.jpg';

//генерация поля
export const generateCards = () => {
  const symbols = [cardOne, cardTwo, cardThree, cardFour, cardFive, cardSix, cardSeven, cardEight];
  const allCards = symbols.concat(symbols);
  return shuffleArray(allCards);
};

//шаффл массива
const shuffleArray = array => {
  const shuffledArray = array.slice();

  for (let i = 1; i < shuffledArray.length - 1; i++) {
    const j = Math.floor(Math.random() * (i - 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }

  return shuffledArray;
};
