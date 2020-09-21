export default class Tile {
  constructor(holder, iconName) {
    this._holder = holder;
    this._iconName = iconName;
    this._iconRef = this.generateHTML();
    this.setupEvents2();
    this.hasFlippedTile = false;
    // this.setUpEvents();
    // console.log(this._iconRef);
  }

  generateHTML() {
    this._holder.insertAdjacentHTML(
      'beforeend',
      `<li class="memory-card" data-name='${this._iconName}'>
          <i class=' front-face ${this._iconName}'></i>
      </li>
     `
    );
    return [...this._holder.querySelectorAll('.memory-card')].reverse()[0];
  }

  flipcard2(e) {
    if (e.target.nodeName === 'LI' || 'I') {
      e.target.classList.add('flip');
      // console.log(e.target.classList);
      if (!this.hasFlippedTile) {
        this.firstTile = e.target;
        console.log(this.firstTile);
        console.log(this.firstTile.dataset.name);
        this.hasFlippedTile = true;
      } else {
        this.secondTile = e.target;
        console.log(this.hasFlippedTile);
        console.log(this.firstTile.dataset.name);

        if (this.firstTile.dataset.name === this.secondTile.dataset.name) {
          // it is a match
          this.firstTile.removeEventListener('click', this.flipCard);
          this.secondTile.removeEventListener('click', this.flipCard);
        } else {
          // not a match
          setTimeout(() => {
            this.firstTile.classList.remove('flip');
            this.secondTile.classList.remove('flip');
          }, 1500);
        }
        console.log('function runs');
      }
    }
  }

  setupEvents2() {
    this._tileRef.addEventListener('click', this.flipcard.bind(this));
  }
}

// <i class=' back-face'></i>
