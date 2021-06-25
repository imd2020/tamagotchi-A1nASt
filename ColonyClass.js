import Individual from "./IndividualClass.js";

//ALL TOKENS IMPORTED
let token = new Individual(-160, -450, 0.5, "1.any token.png");
let birb = new Individual(-280, -180, 0.67, "2.birb token.png");
let bluzuk = new Individual(-290, 30, 0.49, "3.bluzuk token.png");
let crab = new Individual(200, 50, 0.49, "4.crab token.png");
let dolphin = new Individual(50, -280, 0.48, "5.dolphin token.png");
let fake = new Individual(10, 300, 0.5, "6.fake token.png");

export default class Colony {
  constructor(token, birb, bluzuk, crab, dolphin, fake, counter) {
    this.token = token;
    this.birb = birb;
    this.bluzuk = bluzuk;
    this.crab = crab;
    this.dolphin = dolphin;
    this.fake = fake;
    this.counter = counter;
  }

  spawnConditions() {
    //STARTER TOKEN
    if (counter >= 10 && counter < 20) {
      token.body();
    }
    //ADD BIRB
    if (counter >= 20 && counter < 30) {
      token.body(); //keep starter token
      birb.body();
    }
    //ADD BLUZUK
    if (counter >= 30 && counter < 40) {
      token.body(); //keep starter token
      birb.body(); //keep birb
      bluzuk.body();
    }

    if (counter >= 40 && counter < 50) {
      token.body(); //keep starter token
      birb.body(); //keep birb
      bluzuk.body(); //keep bluzuk
    }
    //ADD DOLPHIN
    if (counter >= 50 && counter < 60) {
      token.body(); //keep starter token
      birb.body(); //keep birb
      bluzuk.body(); //keep bluzuk
      dolphin.body();
    }

    if (counter >= 60 && counter < 70) {
      token.body(); //keep starter token
      birb.body(); //keep birb
      bluzuk.body(); //keep bluzuk
      dolphin.body(); //keep dolphin
    }

    if (counter >= 70 && counter < 80) {
      token.body(); //keep starter token
      birb.body(); //keep birb
      bluzuk.body(); //keep bluzuk
      dolphin.body(); //keep dolphin
    }

    if (counter >= 80 && counter < 90) {
      token.body(); //keep starter token
      birb.body(); //keep birb
      bluzuk.body(); //keep bluzuk
      dolphin.body(); //keep dolphin
    }
    //ADD CRAB
    if (counter >= 90) {
      token.body(); //keep starter token
      birb.body(); //keep birb
      bluzuk.body(); //keep bluzuk
      dolphin.body(); //keep dolphin
      crab.body();
    }
  }
}
