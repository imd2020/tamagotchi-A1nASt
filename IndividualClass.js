//LIST OF TOKEN PNGs:
//  "1.any token.png"       (Token)
//  "2.birb token.png"      (Birdbush)
//  "3.bluzuk token.png"    (Bluzuk)
//  "4.crab token.png"      (Eissiedlerkrebs)
//  "5.dolphin token.png"   (Delphinus Sapiens)
//  "6.fake token.png"      (Fake Token)

export default class Individual {
  constructor(x, y, s, img, tokenState) {
    this.x = x;
    this.y = y;
    this.s = s;
    this.img = loadImage(img);
    this.tokenState = tokenState;
  }

  body() {
    push();
    translate(300, 300);
    scale(this.s);
    image(this.img, 0 * this.s + this.x, 0 * this.s + this.y);
    pop();
  }
}
