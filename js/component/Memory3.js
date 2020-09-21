import Tile from './Tile';

export default class Memory {
  constructor(levelNr, holder) {
    this._levelNr = levelNr;
    this._holder = holder;
    this._cardsArray = [
      'fa fa-free-code-camp fa-5x',
      'fa fa-meetup fa-5x',
      'fa fa-superpowers fa-5x',
      'fa fa-ravelry fa-5x',
      'fa fa-american-sign-language-interpreting fa-5x',
      'fa fa-cubes fa-5x',
      'fa fa-graduation-cap fa-5x',
      'fa fa-leaf fa-5x',
    ];
    this._doubledArray = [...this._cardsArray, ...this._cardsArray];
    // console.log(this._doubledArray);
    this._lockBoard = false;
    this._hasFlippedTile = false;
    this.firstTile = null;
    this.secondTile = null;
    this._tileRef = this.generateHTML();
    this.generateTiles();
    this.setupEvents();
    this.flipTiles();
    this.checkForMatch();
    this.disableTiles();
    this.unflipTiles();
    this.resetBoard();
  }

  generateHTML() {
    this._holder.insertAdjacentHTML(
      'beforeend',
      `<div class="memory-card"></div>`
    );
    return this._holder.querySelector('.memory-card');
  }

  generateTiles() {
    this._doubledArray.forEach(iconName => new Tile(this._tileRef, iconName));
  }

  setupEvents() {
    this._tileRef.addEventListener('click', this.flipTiles.bind(this));
  }

  flipTiles(e) {
    if (this._lockBoard) return;
    console.log(e.target);
    console.log(e.target.nodeName);
    if (e.target === this.firstTile) return;
    if (e.target.nodeName === 'DIV' || 'I') {
      e.target.classList.add('flip');
      // console.log(e.target.classList);
      if (!this._hasFlippedTile) {
        this._hasFlippedTile = true;
        this.firstTile = e.target;
        // console.log(this.firstTile);
        // console.log(this.firstTile.dataset.name);
        return;
      }
      this.secondTile = e.target;
      this._lockBoard = true;
      this.checkForMatch();
    }
  }

  checkForMatch() {
    const isMatch =
      this.firstTile.dataset.name === this.secondTile.dataset.name;
    // eslint-disable-next-line no-unused-expressions
    isMatch ? this.disableTiles() : this.unflipTiles();
  }

  disableTiles() {
    this.firstTile.removeEventListener('click', this.flipTiles.bind(this));
    this.secondTile.removeEventListener('click', this.flipTiles.bind(this));
    setTimeout(() => {
      Array.from(this.firstTile.children).forEach(function(value) {
        value.style.background = 'yellow';
      });

      Array.from(this.secondTile.children).forEach(function(value) {
        value.style.background = 'yellow';
      });
    }, 500);
    this.resetBoard();
  }

  unflipTiles() {
    setTimeout(() => {
      this.firstTile.classList.remove('flip');
      this.secondTile.classList.remove('flip');

      this.resetBoard();
    }, 1000);
  }

  resetBoard() {
    this._hasFlippedTile = false;
    this._lockBoard = false;
    this.firstTile = null;
    this.secondTile = null;
  }
}
