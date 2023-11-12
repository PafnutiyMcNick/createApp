import card_1 from '../images/card_front-face_1.jpg';
import card_2 from '../images/card_front-face_2.jpg';
import card_3 from '../images/card_front-face_3.jpg';
import card_4 from '../images/card_front-face_4.jpg';
import card_5 from '../images/card_front-face_5.jpg';
import card_6 from '../images/card_front-face_6.jpg';
import card_7 from '../images/card_front-face_7.jpg';
import card_8 from '../images/card_front-face_8.jpg';

//генерация поля
export const generateCards = () => {
  const symbols = [card_1, card_2, card_3, card_4, card_5, card_6, card_7, card_8];
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
