export default class Individual {
  constructor(x, y, s, img, foodPoint) {
    this.x = x;
    this.y = y;
    this.s = s;
    this.img = loadImage(img);
    this.satiationArray = foodPoint;
  }

  body() {
    push();
    translate(300, 300);
    scale(this.s);
    image(this.img, 0 * this.s + this.x, 0 * this.s + this.y);
    pop();
    return true;
  }

  state() {
    satiationArray.push(foodPoint);
  }
}

// let test = new Individual(-150, 0, 0.5, "standard Tamatoken.png");
// let token2 = new Individual(-385, -165, 0.3, "standard Tamatoken.png");

// function draw() {
//   token2.body();
//   test.body();
// }

//This Class contains the individual pictures for the tokens
//(?)along with their individual(?) spawn conditions(?)
