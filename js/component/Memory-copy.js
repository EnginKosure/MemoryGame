import Tile from './Tile';

// import axios from 'axios';
// import Tile from './Tile';

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
    // this.hasFlippedTile = false;
    this._tileRef = this.generateHTML();
    this._myTiles = this.generateTiles();
    // this.setupEvents();
    this.denek();
  }

  generateHTML() {
    // for (let j = 0; j < this._doubledArray.length; j++) {
    this._holder.insertAdjacentHTML('beforeend', `<ul></ul>`);
    // }
    return this._holder.querySelector('ul');
  }

  generateTiles() {
    this._doubledArray.forEach(iconName => {
      new Tile(this._tileRef, iconName);
    });
  }

  denek() {
    console.log(this._myTiles);
  }

  // flipcard(e) {
  //   if (e.target.nodeName === 'LI' || 'I') {
  //     e.target.classList.add('flip');
  //     // console.log(e.target.classList);
  //     if (!this.hasFlippedTile) {
  //       this.firstTile = e.target;
  //       console.log(this.firstTile);
  //       console.log(this.firstTile.dataset.name);
  //       this.hasFlippedTile = true;
  //     } else {
  //       this.secondTile = e.target;
  //       console.log(this.hasFlippedTile);
  //       console.log(this.firstTile.dataset.name);

  //       if (this.firstTile.dataset.name === this.secondTile.dataset.name) {
  //         // it is a match
  //         this.firstTile.removeEventListener('click', this.flipCard);
  //         this.secondTile.removeEventListener('click', this.flipCard);
  //       } else {
  //         // not a match
  //         setTimeout(() => {
  //           this.firstTile.classList.remove('flip');
  //           this.secondTile.classList.remove('flip');
  //         }, 1500);
  //       }
  //       console.log('function runs');
  //     }
  //   }
  // }

  // setupEvents() {
  //   this._tileRef.addEventListener('click', this.flipcard.bind(this));
  // }
}
