background(255, 255, 255);

//BUTTON
class Feeder {
  constructor(x, y, s) {
    this.x = x;
    this.y = y;
    this.s = s;
  }

  displayButton() {
    fill(200, 100, 90);
    stroke(0, 0, 0);
    rect(0 * this.s + this.x, 0 * this.s + this.y, 100, 25);
    text("FOOD", 32, 16);
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

let food = new Feeder(1, 1, 1);
let satiation = [];

function mouseClicked() {
  if (food.hitTest()) {
    satiation.push("food");
  }
  console.log(satiation);
}

function draw() {
  food.displayButton(1, 1, 1);
}
