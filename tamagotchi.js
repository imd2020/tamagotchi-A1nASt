import gsap from "./gsap.min.js";

import Individual from "./IndividualClass.js";
import Colony from "./ColonyClass.js";
import Feeder from "./FeederClass.js";

//let images = {token: loadImage("1.any token.png"),}; //for HTML integration
let counter = 10;
let space = [];
let tokenCount = 0;
let maxSeats = 10;
//FEEDER IMPORT
let button = new Feeder(1, 1, 1);
//INDIVIDUAL TOKEN INFORMATION OBJECTS
// let token2 = { x: -160, y: -450, s: 0.5, img: "1.any token.png",state: "present" };
// let birb2 = { x: -280, y: -180, s: 0.67, img: "2.birb token.png", state:"present" };
// let bluzuk2 = { x: -290, y: 30, s: 0.49, img: "3.bluzuk token.png", state:"present" };
// let crab2 = { x: 200, y: 50, s: 0.49, img: "4.crab token.png",state:"present" };
// let dolphin2 = { x: 50, y: -280, s: 0.48, img: "5.dolphin token.png",state:"present" };
// let fake2 = { x: 10, y: 300, s: 0.5, img: "6.fake token.png",state:"present" };
//ALL THE TOKENS IMPORTED
let token = new Individual(-160, -450, 0.5, "1.any token.png", "gone");
let birb = new Individual(-280, -180, 0.67, "2.birb token.png", "gone");
let bluzuk = new Individual(-290, 30, 0.49, "3.bluzuk token.png", "gone");
let crab = new Individual(200, 50, 0.49, "4.crab token.png", "gone");
let dolphin = new Individual(50, -280, 0.48, "5.dolphin token.png", "gone");
let fake = new Individual(10, 300, 0.5, "6.fake token.png", "gone");
let allTokens = new Colony(
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
);

//FOOD BAR (NO IMPORT)
function feederBar() {
  fill(100, 0, 100);
  rect(200, 0, counter, 20);
}

//SPACE (NO IMPORT)
// let space = [];
// let tokenCount = 0;
// let maxSeats = 10;
// for (tokenCount = 0; tokenCount <= maxSeats; tokenCount++) {
//   space = [tokenCount];
// }

//ADDING TO THE FOOD COUNTER
function mouseClicked() {
  randomNumber = Math.round(random(1, 2, 3, 4));
  rN = randomNumber;
  if (button.hitTest() && counter < 100) {
    counter = counter + rN;
    if (counter >= 100) {
      counter = 100;
    }
  }
  console.log(counter);
  //console.log("Space: " + space);
}

//SUBSTRACTING FROM THE FOOD COUNTER
// while (counter > 0) {
//   counter = counter - 1;
// } //only does stuff when in draw function, but still not right

//TO DRAW EVERYTHING ON SCREEN
function draw() {
  background(50, 50, 40);
  feederBar();
  button.displayButton(1, 1, 1);
  allTokens.seatCycle();
  allTokens.spawnConditions();
}

// if (token.body() && space > 0) {
//   space = space - 1;
// }
