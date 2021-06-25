//import Individual from "./IndividualClass.js";

//ALL THE SPECIAL TOKENS IMPORTED
// let token = new Individual(-160, -450, 0.5, "1.any token.png");
// let birb = new Individual(-280, -180, 0.67, "2.birb token.png");
// let bluzuk = new Individual(-290, 30, 0.49, "3.bluzuk token.png");
// let crab = new Individual(200, 50, 0.49, "4.crab token.png");
// let dolphin = new Individual(50, -280, 0.48, "5.dolphin token.png");
// let fake = new Individual(10, 300, 0.5, "6.fake token.png");

export default class Colony {
  constructor(
    token,
    birb,
    bluzuk,
    crab,
    dolphin,
    fake,
    counter,
    space,
    tokenCount,
    maxSeats
  ) {
    this.token = token;
    this.birb = birb;
    this.bluzuk = bluzuk;
    this.crab = crab;
    this.dolphin = dolphin;
    this.fake = fake;
    this.counter = counter;
    this.space = [space]; //array containing tokens, their coordinates, scale, image and state
    this.tokenCount = tokenCount; //amount of (active?) tokens
    this.maxSeats = maxSeats; //max amount of tokens possible
  }

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

  //all 5 (special) tokens
  spawnConditions() {
    for (
      this.tokenCount = 0;
      this.tokenCount <= this.maxSeats;
      this.tokenCount++
    ) {
      //let spot = space[tokenCount];
      if (this.counter >= 10 && this.tokenCount < this.maxSeats) {
        //spot.state = "present";
        this.token.body();
        if (this.counter >= 20) {
          if (tokenCount >= 1) {
            if (rN === 2) {
              this.birb.body();
            } else if (rN !== 2) {
              if (counter < 50) {
                // this.fake.body();
                // this.dolphin.body();
              } else if (counter >= 50) {
                // this.bluzuk.body();
              }
            }
          }
          if (tokenCount === 10) {
            // this.crab.body();
          }
        }
      }
    }
  }
}

/*WARNING: 
AS IT IS, THIS CLASS BREAKS THE tamagotchi.js WHEN IMPORTED.
IT HAS THEREFORE BEEN COMMENTED IN THE tamagotchi.js .
IF IT'S IMPORTED AND THE tamagotchi.js BREAKS, 
COMMENT THE CONTENDS OF THIS ENTIRE JS-FILE, 
THEN COMMENT THE IMPORT IN THE tamagotchi.js, 
THEN UNCOMMENT THE CONTENTS OF THIS FILE.
*/
