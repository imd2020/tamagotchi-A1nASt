//BUTTON
export default class Button {
  constructor(x, y, s, text) {
    this.x = x;
    this.y = y;
    this.s = s;
    this.text = text;
  }

  displayButton() {
    stroke(100, 100, 100);
    strokeWeight(1);
    noFill();
    rect(0 * this.s + this.x, 0 * this.s + this.y, 100, 25);
    textAlign(CENTER);
    textSize(10);
    text(this.text, 50 * this.s + this.x, 16 * this.s + this.y);
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

