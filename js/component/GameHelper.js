// const randomItem = require('random-item');

// randomItem(['pony', 'unicorn', 'rainbow']);
//= > 'unicorn'

// import axios from 'axios';
// import Tile from './Tile';

export const getRandom = function(arr, n) {
  const result = new Array(n);
  const len = arr.length;
  const taken = new Array(len);
  if (n > len) {
    throw RangeError('getR');
  }
};

// setupArray() {
//   this._cardArray20 = fontAwesomeList.all().map(el => el.id);
//   this._cardsArray = shuffle(this._cardArray20);
//   this._cardsArray.length = this._levelNr;
//   this._doubledArray = [...this._cardsArray, ...this._cardsArray];
//   console.log(this._doubledArray);
// }

// import fontAwesomeList from 'font-awesome-list';

// const randomRange = (min, max) =>
//   Math.floor(Math.random() * (max - min) + 1) + min;

// const allIcons = fontAwesomeList.all();
// const iconIds = allIcons.map(function(value) {
//   return value.id;
// });

// export default function getRandomIcon(arrLength) {
//   const iconArr = [];
//   // eslint-disable-next-line
//   while (arrLength--) {
//     iconArr.push(`fa-${iconIds[randomRange(0, 675) - 1]}`);
//   }
//   return iconArr;
// }
