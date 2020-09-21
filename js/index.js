import '../css/style.scss';
import '@babel/polyfill';
import Memory from './component/Memory';

let clickNumber = 0;

function clickCounter() {
  clickNumber += 1;
}

function createGame2(e) {
  if (clickNumber === 1) {
    // eslint-disable-next-line no-new
    new Memory(8, document.getElementById('memory_cardHolder'));
    e.target.style.backgroundColor = 'red';
    e.target.removeEventListener('click', createGame2);
    // const mem =...=> mem._tileRef.style.height = ''
  }
}

function createGame1(e) {
  if (clickNumber === 1) {
    // eslint-disable-next-line no-new
    new Memory(6, document.getElementById('memory_cardHolder'));
    e.target.style.backgroundColor = 'red';
    e.target.removeEventListener('click', createGame1);
  }
}

function createGame0(e) {
  if (clickNumber === 1) {
    // eslint-disable-next-line no-new
    new Memory(4, document.getElementById('memory_cardHolder'));
    e.target.style.backgroundColor = 'red';
    e.target.removeEventListener('click', createGame0);
  }
}

function resetGame() {
  // eslint-disable-next-line no-restricted-globals
  location.reload();
}

document.querySelector('.normal').addEventListener('click', clickCounter);
document.querySelector('.easy').addEventListener('click', clickCounter);
document.querySelector('.supereasy').addEventListener('click', clickCounter);

document.querySelector('.normal').addEventListener('click', createGame2);
document.querySelector('.easy').addEventListener('click', createGame1);
document.querySelector('.supereasy').addEventListener('click', createGame0);

document.querySelector('.reset').addEventListener('click', resetGame);

// const tiles = new Memory(8, document.getElementById('memory_cardHolder'));
// console.log(tiles._updateScore);
// console.log('---------------------hhhhhhhhhhhhhhhhhh');
// console.log(tiles._cardsArray);
// if (tiles._matchCount === 8) {
//   tiles();
// }
const levelConfig = [
  { levelNr: 1, totalCards: 8, iconSize: 'fa-5x' },
  { levelNr: 2, totalCards: 12, iconSize: 'fa-4x' },
  { levelNr: 3, totalCards: 16, iconSize: 'fa-3x' },
];
