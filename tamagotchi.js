import Individual from "./IndividualClass.js";
import Feeder from "./FeederClass.js";
//import Colony from "./ColonyClass.js";

let button = new Feeder(1, 1, 1);
//let tributes = [];
let counter = 10;

//ALL THE SPECIAL TOKENS IMPORTED
let token = new Individual(-160, -450, 0.5, "1.any token.png", 1);
let birb = new Individual(-280, -180, 0.67, "2.birb token.png", 1);
let bluzuk = new Individual(-290, 30, 0.49, "3.bluzuk token.png", 1);
let crab = new Individual(200, 50, 0.49, "4.crab token.png", 1);
let dolphin = new Individual(50, -280, 0.48, "5.dolphin token.png", 1);

//ADDING TO THE FOOD COUNTER
function mouseClicked() {
  if (food.hitTest()) {
    counter = counter + 2;
  }
  console.log(counter);
}

//SUBSTRACTING FROM THE FOOD COUNTER
while (counter > 0) {
  counter = counter - 1;
}

//TO DRAW EVERYTHING ON SCREEN
function draw() {
  background(250, 150, 40);

  button.displayButton();

  // //all 5 (special) tokens
  dolphin.body();
  token.body();
  birb.body();
  bluzuk.body();
  crab.body();
}
