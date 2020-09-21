export default class Tile {
  constructor(holder, iconName) {
    this._holder = holder;
    this._iconName = iconName;
    this._iconRef = this.generateHTML();
    // this.setUpEvents();
    // console.log(this._iconRef);
  }

  generateHTML() {
    this._holder.insertAdjacentHTML(
      'beforeend',
      `<i class=' front-face ${this._iconName}'></i>
     `
    );
    return [...this._holder.querySelectorAll('.front-face')].reverse()[0];
  }
}
// <i class=' back-face'></i>
// <img class="front-face" src="img/react.svg" alt="React">
// <img class="back-face" src="img/js-badge.svg" alt="Memory Card">
