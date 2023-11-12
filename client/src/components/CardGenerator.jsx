import card_1 from '../images/1.png';
import card_2 from '../images/2.png';
import card_3 from '../images/3.png';
import card_4 from '../images/4.png';
import card_5 from '../images/5.png';
import card_6 from '../images/6.png';
import card_7 from '../images/7.png';
import card_8 from '../images/8.png';
// import card_9 from '../images/9.png';
// import card_10 from '../images/10.png';
// import card_11 from '../images/11.png';
// import card_12 from '../images/12.png';
// import card_13 from '../images/13.png';
// import card_14 from '../images/14.png';
// import card_15 from '../images/15.png';
// import card_16 from '../images/16.png';
// import card_17 from '../images/17.png';
// import card_18 from '../images/18.png';


//генерация поля
export const generateCards = () => {
  const symbols = [
    card_1,
    card_2,
    card_3,
    card_4,
    card_5,
    card_6,
    card_7,
    card_8,
    // card_9,
    // card_10,
    // card_11,
    // card_12,
    // card_13,
    // card_14,
    // card_15,
    // card_16,
    // card_17,
    // card_18
  ];
  // const allCards = selectValue ==='four'? symbols.concat(symbols): symbols.concat(symbols);
  // const allCards = selectValue ==='four'? symbols.concat(symbols): symbols.concat(symbols);

  const allCards = symbols.concat(symbols)
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

