import gsap from "./gsap.min.js";

import Colony from "./ColonyClass.js";
import Feeder from "./FeederClass.js";

//let images = {token: loadImage("1.any token.png"),}; //for HTML integration
let counter = 10;
let fakeState = "unreal";
let birbState = "unreal";
//FEEDER IMPORT
let button = new Feeder(1, 1, 1);
let allTokens = new Colony(token, birb, bluzuk, crab, dolphin, fake, counter);

//FOOD BAR
function feederBar() {
  fill(100, 0, 100);
  rect(200, 0, counter, 20);
}

//ADDING TO THE FOOD COUNTER
function mouseClicked() {
  randomNumber = Math.round(random(1, 2, 3, 4));
  rN = randomNumber;
  if (button.hitTest() && counter < 100) {
    counter = counter + rN;
    if (counter >= 100) {
      counter = 100;
    }
    if (rN === 2) {
      fakeState = "real";
    }
    //else if (rN !== 3) {

    //   birbState = "real";
    // }
  }
  //console.log(counter);
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
  //allTokens.seatCycle();
  allTokens.spawnConditions();
}
