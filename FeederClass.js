//BUTTON
export default class Feeder {
  constructor(x, y, s, counter) {
    this.x = x;
    this.y = y;
    this.s = s;
  }

  displayButton() {
    stroke(100, 100, 100);
    strokeWeight(1);
    noFill();
    rect(0 * this.s + this.x, 0 * this.s + this.y, 100, 25);
    textAlign(CENTER);
    text("OFFER TRIBUTE", 50, 18);
  }

  hitTest() {
    if (
      mouseX > 0 * this.s + this.x &&
      mouseX < 100 * this.s + this.x &&
      mouseY > 0 * this.s + this.y &&
      mouseY < 25 * this.s + this.y
    ) {
      return true;
    }
  }
}
