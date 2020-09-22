class Tile {
  constructor(holder, iconName) {
    this._holder = holder;
    this._iconName = iconName;
    this._iconRef = this.generateHTML();
  }

  generateHTML() {
    this._holder.insertAdjacentHTML(
      'beforeend',
      `<li class="memory__card">
          <i class=' memory__card__front fa fa-${this._iconName} fa-5x'></i>
      </li>
     `
    );
    return [...this._holder.querySelectorAll('.memory__card')].reverse()[0];
  }
}


// const shuffle = require('shuffle-array');

class Memory {
  constructor(levelNr, holder, levelConfig) {
    this._levelNr = levelNr;
    this._holder = holder;
    this._clickPair = 0;
    this.boundedFunction = this.flipcard.bind(this);
    this._matchCount = 0; /* [...this._tileRef.querySelectorAll('.flip')].length === 2 can also be used instead */
    this._score = 0;
    this.setupArray();
    this._tileRef = this.generateHTML();
    this.generateTiles();
    this.setupEvents();
    this.updateScore();
  }

  setupArray() {
    this._cardArray20 = fontAwesomeList.all().map(el => el.id);
    this._cardsArray = shuffle(this._cardArray20);
    this._cardsArray.length = this._levelNr;
    this._doubledArray = [...this._cardsArray, ...this._cardsArray];
    console.log(this._doubledArray);
  }

  generateHTML() {
    this._holder.insertAdjacentHTML('beforeend', `<ul class='memory'></ul>`);
    return this._holder.querySelector('ul.memory');
  }

  generateTiles() {
    console.log(this._tileRef);
    console.log(this._holder);
    shuffle(this._doubledArray).forEach(
      iconName => new Tile(this._tileRef, iconName)
    );
    this._tileRef.style.height = `${75 * this._levelNr}px`;
  }

  flipcard(e) {
    // if (this._lockBoard) return;
    if (e.target.nodeName === 'LI') {
      // console.log(e.target.classList);
      if (!e.target.classList.contains('memory__card--flipped')) {
        const flippedNotMatched = [
          ...this._tileRef.querySelectorAll(
            '.memory__card--flipped:not(.memory__card--matched)'
          ),
        ];
        if (flippedNotMatched.length === 0) {
          e.target.classList.add('memory__card--flipped');
        } else {
          e.target.classList.add('memory__card--flipped');
          this._tileRef.removeEventListener('click', this.boundedFunction);
          setTimeout(
            function() {
              // console.log(flippedNotMatched);
              const flipped = [
                ...this._tileRef.querySelectorAll(
                  '.memory__card--flipped:not(.memory__card--matched)'
                ),
              ];
              if (
                flipped[0].querySelector('i').classList.toString() ===
                flipped[1].querySelector('i').classList.toString()
              ) {
                // it is a match
                flipped[0].querySelector('i').style.background = 'yellow';
                flipped[1].querySelector('i').style.background = 'yellow';
                flipped.forEach(el =>
                  el.classList.add('memory__card--matched')
                );
                this._clickPair += 1;
                this._matchCount += 1;
                console.log(`Matched==${this._matchCount}`);
              } else {
                // not a match
                this._clickPair += 1;
                console.log(`Guess==${this._clickPair}`);
                flipped.forEach(el =>
                  el.classList.remove('memory__card--flipped')
                );
              }
              this._score = (this._matchCount / this._clickPair).toFixed(2);
              // eslint-disable-next-line no-restricted-globals
              if (!isNaN(this._score)) {
                this._holder.previousElementSibling.innerHTML = `Percentage:  ${(
                  this._score * 100
                ).toFixed(2)} %`;
              }
              if (this._matchCount === this._levelNr) {
                let text1 = '';
                // eslint-disable-next-line no-cond-assign
                if (
                  this._score > 0.6
                    ? (text1 = 'Waw! Can you be a genius?')
                    : (text1 = 'Not bad at all!')
                )
                  Swal.fire({
                    title: 'Congrats!',
                    text: `${text1} Your score is  ${(
                      this._score * 100
                    ).toFixed(2)} %; You found in ${
                      this._clickPair
                    } guesses. Pick a new level`,
                    imageUrl: 'https://unsplash.it/400/200',
                    imageWidth: 400,
                    imageHeight: 200,
                    imageAlt: 'Custom image',
                    animation: true,
                  });
                setTimeout(() => {
                  // eslint-disable-next-line no-restricted-globals
                  location.reload();
                }, 6000);
              }
              this.setupEvents();
            }.bind(this),
            600
          );
        }
        console.log('function runs', this._clickPair, this._matchCount);
      }
    }
  }

  updateScore() {
    this._score = this._matchCount / this._clickPair;
  }

  setupEvents() {
    this._tileRef.addEventListener('click', this.boundedFunction);
  }
}


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

const levelConfig = [
  { levelNr: 1, totalCards: 8, iconSize: 'fa-5x' },
  { levelNr: 2, totalCards: 12, iconSize: 'fa-4x' },
  { levelNr: 3, totalCards: 16, iconSize: 'fa-3x' },
];
