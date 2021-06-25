import Individual from "./IndividualClass.js";

//ALL TOKENS IMPORTED
let token = new Individual(-160, -450, 0.5, "1.any token.png");
let birb = new Individual(-280, -180, 0.67, "2.birb token.png");
let bluzuk = new Individual(-290, 30, 0.49, "3.bluzuk token.png");
let crab = new Individual(200, 50, 0.49, "4.crab token.png");
let dolphin = new Individual(50, -280, 0.48, "5.dolphin token.png");
let fake = new Individual(10, 300, 0.5, "6.fake token.png");

export default class Colony {
  constructor(token, birb, bluzuk, crab, dolphin, fake, xPosBar, tokenArray) {
    this.token = token;
    this.birb = birb;
    this.bluzuk = bluzuk;
    this.crab = crab;
    this.dolphin = dolphin;
    this.fake = fake;
    this.xPosBar = xPosBar;
    this.tokeArray = tokenArray;
  }

  spawnConditions() {
    //STARTER TOKEN
    if (xPosBar >= 20 && xPosBar < 40) {
      token.body();
      tokenArray.push["token"];
    }
    //ADD BIRB
    if (xPosBar >= 40 && xPosBar < 60) {
      token.body(); //keep starter token
      birb.body();
      tokenArray.push["token"];
    }
    //ADD BLUZUK
    if (xPosBar >= 60 && xPosBar < 80) {
      token.body(); //keep starter token
      birb.body(); //keep birb
      bluzuk.body();
      tokenArray.push["token"];
    }

    if (xPosBar >= 80 && xPosBar < 100) {
      token.body(); //keep starter token
      birb.body(); //keep birb
      bluzuk.body(); //keep bluzuk
    }
    //ADD DOLPHIN
    if (xPosBar >= 100 && xPosBar < 120) {
      token.body(); //keep starter token
      birb.body(); //keep birb
      bluzuk.body(); //keep bluzuk
      dolphin.body();
      tokenArray.push["token"];
    }

    if (xPosBar >= 120 && xPosBar < 140) {
      token.body(); //keep starter token
      birb.body(); //keep birb
      bluzuk.body(); //keep bluzuk
      dolphin.body(); //keep dolphin
    }

    if (xPosBar >= 140 && xPosBar < 160) {
      token.body(); //keep starter token
      birb.body(); //keep birb
      bluzuk.body(); //keep bluzuk
      dolphin.body(); //keep dolphin
    }

    if (xPosBar >= 160 && xPosBar < 180) {
      token.body(); //keep starter token
      birb.body(); //keep birb
      bluzuk.body(); //keep bluzuk
      dolphin.body(); //keep dolphin
    }
    //ADD CRAB
    if (xPosBar >= 180) {
      token.body(); //keep starter token
      birb.body(); //keep birb
      bluzuk.body(); //keep bluzuk
      dolphin.body(); //keep dolphin
      crab.body();
      tokenArray.push["token"];
    }
  }
}
