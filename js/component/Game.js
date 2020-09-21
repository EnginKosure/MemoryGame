// import Memory from './Memory';

// // const randomItem = require('random-item');

// // randomItem(['pony', 'unicorn', 'rainbow']);
// //= > 'unicorn'

// // import axios from 'axios';
// // import Tile from './Tile';

// export default class Game {
//   constructor(holder) {
//     this._holder = holder;

//     this._cardsArray = [];
//     // this._randomCardsArray = randomItem(this._cardsArray);
//     this._clickNumber = 0;
//     this._gameRef = this.generateHTML();
//     this.clickCounter();
//     this.createGame2();
//     this.createGame1();
//     this.createGame0();
//     this.resetGame();
//     this.generateMemory();

//     this.setupEvents();
//   }

//   generateHTML() {
//     this._holder.insertAdjacentHTML(
//       'beforeend',
//       `<div id="memory_cardHolder"></div>`
//     );
//     return this._holder.querySelector('#memory_cardHolder');
//   }

//   generateMemory() {}

//   clickCounter() {
//     this._clickNumber += 1;
//   }

//   createGame2(e) {
//     if (clickNumber === 1) {
//       // eslint-disable-next-line no-new
//       new Memory(8, document.getElementById('memory_cardHolder'));
//       e.target.style.backgroundColor = 'red';
//       e.target.removeEventListener('click', createGame2);
//     }
//   }

//   createGame1(e) {
//     if (clickNumber === 1) {
//       // eslint-disable-next-line no-new
//       new Memory(6, document.getElementById('memory_cardHolder'));
//       e.target.style.backgroundColor = 'red';
//       e.target.removeEventListener('click', createGame1);
//     }
//   }

//   createGame0(e) {
//     if (clickNumber === 1) {
//       // eslint-disable-next-line no-new
//       new Memory(4, document.getElementById('memory_cardHolder'));
//       e.target.style.backgroundColor = 'red';
//       e.target.removeEventListener('click', createGame0);
//     }
//   }

//   resetGame() {
//     // eslint-disable-next-line no-restricted-globals
//     location.reload();
//   }

//   setupEvents() {
//     this._tileRef.addEventListener('click', this.flipcard.bind(this));
//   }
// }
// document.querySelector('.normal').addEventListener('click', clickCounter);
// document.querySelector('.easy').addEventListener('click', clickCounter);
// document.querySelector('.supereasy').addEventListener('click', clickCounter);

// document.querySelector('.normal').addEventListener('click', createGame2);
// document.querySelector('.easy').addEventListener('click', createGame1);
// document.querySelector('.supereasy').addEventListener('click', createGame0);

// document.querySelector('.reset').addEventListener('click', resetGame);

// // import fontAwesomeList from 'font-awesome-list';

// // const randomRange = (min, max) =>
// //   Math.floor(Math.random() * (max - min) + 1) + min;

// // const allIcons = fontAwesomeList.all();
// // const iconIds = allIcons.map(function(value) {
// //   return value.id;
// // });

// // export default function getRandomIcon(arrLength) {
// //   const iconArr = [];
// //   // eslint-disable-next-line
// //   while (arrLength--) {
// //     iconArr.push(`fa-${iconIds[randomRange(0, 675) - 1]}`);
// //   }
// //   return iconArr;
// // }
