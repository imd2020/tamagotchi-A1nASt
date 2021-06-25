import Individual from "./IndividualClass.js";

//ALL TOKENS IMPORTED
let token = new Individual(-160, -450, 0.5, "1.any token.png");
let birb = new Individual(-280, -180, 0.67, "2.birb token.png");
let bluzuk = new Individual(-290, 30, 0.49, "3.bluzuk token.png");
let crab = new Individual(200, 50, 0.49, "4.crab token.png");
let dolphin = new Individual(50, -280, 0.48, "5.dolphin token.png");
let fake = new Individual(10, 300, 0.5, "6.fake token.png");

export default class Colony {
  constructor(
    token,
    birb,
    bluzuk,
    crab,
    dolphin,
    fake,
    counter,
    fakeState,
    birbState
  ) {
    this.token = token;
    this.birb = birb;
    this.bluzuk = bluzuk;
    this.crab = crab;
    this.dolphin = dolphin;
    this.fake = fake;
    this.counter = counter;
    this.fakeState = fakeState;
    this.birbState = birbState;
  }

  //cycling though all the tokens(?)
  seatCycle() {
    for (tokenCount = 0; tokenCount < maxSeats; tokenCount++) {
      space[tokenCount] = {
        x: -160,
        y: -450,
        s: 0.5,
        img: "1.any token.png",
        state: "gone",
      };
    }
  }

  spawnConditions() {
    if (counter >= 10 && counter < 20) {
      token.body();
    }

    if (counter >= 20 && counter < 30) {
      token.body();
      if (fakeState === "real") {
        fake.body();
      } else if (fakeState !== "real") {
        birb.body();
      }
    }

    if (counter >= 30 && counter < 40) {
      token.body();
      if (fakeState === "real") {
        fake.body();
      } else if (fakeState !== "real") {
        birb.body();
        birbState = "real";
      }
    }

    if (counter >= 40 && counter < 50) {
      token.body();
      if (fakeState === "real") {
        fake.body();
      } else if (fakeState !== "real") {
        birb.body();
      }
      if (birbState !== "real") {
        bluzuk.body();
      }
    }

    if (counter >= 50 && counter < 60) {
      token.body();
      if (fakeState === "real") {
        fake.body();
      } else if (fakeState !== "real") {
        birb.body();
      }
      if (birbState !== "real") {
        bluzuk.body();
      }
    }
  }
}
