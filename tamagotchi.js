window.draw = draw;
window.mouseClicked = mouseClicked;
angleMode(DEGREES);

import gsap from "./html/gsap.min.js";
import Individual from "./IndividualClass.js";
import Button from "./ButtonClass.js";

//GAME SCREEN STATE
let gameState = "start";

//PARAMETER
let xPosBar = 0;
let counter = 25;

//TOKEN IMAGES
let images = {
  token: loadImage("./Images/1.any token.png"),
  birb: loadImage("./Images/2.birb token.png"),
  bluzuk: loadImage("./Images/3.bluzuk token.png"),
  crab: loadImage("./Images/4.crab token.png"),
  dolphin: loadImage("./Images/5.dolphin token.png"),
  fake: loadImage("./Images/6.fake token.png"),
};

//CLASS IMPORTS
//Button
let tributeButton = new Button(1, 1, 1, "OFFER TRIBUTE");
let startButton = new Button(200, 500, 1, "START GAME");
let restartButton = new Button(400, 500, 1, "RESTART GAME");
//Indiviual
let token = new Individual(-160, -450, 0.5, images.token);
let birb = new Individual(-280, -180, 0.67, images.birb);
let bluzuk = new Individual(-290, 30, 0.49, images.bluzuk);
let crab = new Individual(200, 50, 0.49, images.crab);
let dolphin = new Individual(50, -280, 0.48, images.dolphin);
let fake = new Individual(10, 300, 0.5, images.fake);



//ADDING TO THE FOOD COUNTER
function mouseClicked() {
  if (
    (startButton.hitTest() && gameState === "start") ||
    (startButton.hitTest() && gameState === "restart")
  ) {
    gameState = "play";
  }
  if (restartButton.hitTest() && gameState === "end") {
    gameState = "restart";
  }
  if (tributeButton.hitTest() && xPosBar <= 200 && xPosBar > 0) {
    counter = counter + 10.4;
    if (xPosBar > 200) {
      xPosBar = 200;
    }
  }
  console.log(gameState);
}

//RETRACTING FROM FOOD COUNTER
let hungry = 0;
function hunger() {
  xPosBar = counter - hungry;
  if (xPosBar >= 0) {
    hungry = hungry + 0.4;
  }
  if (xPosBar < 0) {
    gameState = "end";
  }
}

function ButtonBar() {
  fill(100, 0, 100);
  rect(200, 0, xPosBar, 20);
}

function spawnConditions() {
  //STARTER TOKEN
  if (xPosBar >= 20 && xPosBar < 40) {
    token.body();
  }
  //ADD BIRB
  if (xPosBar >= 40 && xPosBar < 60) {
    token.body(); //keep starter token
    birb.body();
  }
  //ADD BLUZUK
  if (xPosBar >= 60 && xPosBar < 80) {
    token.body(); //keep starter token
    birb.body(); //keep birb
    bluzuk.body();
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
  }
}

//MAIN GAME SCREEN
function tamagotchi() {
  background(50, 50, 40);
  //START BUTTON
  restartButton.displayButton();
  hunger();
  ButtonBar();
  tributeButton.displayButton();
  spawnConditions();
}

//FANCY ANIMATION STUFF BECAUSE I HAVE TO PART 1
const welcome = {
  titleSize: 0,
  textSize: 100,
};

//START SCREEN
function startScreen() {
  background(50, 50, 40);
  //START BUTTON
  startButton.displayButton();
  fill(200, 200, 200);
  stroke(100, 100, 100);
  textAlign(CENTER);
  textSize(welcome.titleSize);
  text("Welcome to Tamatoken!", 350, 200);
  textSize(welcome.textSize);
  text("Tokens are pretentious beings.", 350, 300);
  text("They requiere regular tributes to be kept around.", 350, 330);
  text("Some more than others.", 350, 360);
  text("But if you can meet all their needs, it'll be a real party!", 350, 390);
  text("And you know how they say: One's company, five is a crowd!", 350, 420);
  text("Just don't be a party pooper!", 350, 450);
  //return true;
}

// FANCY ANIMATION STUFF BECAUSE I HAVE TO PART 2 (actually looks kinda cool)
function welcomeAnimation() {
  gsap.to(welcome, {
    duration: 5,
    titleSize: 30,
    textSize: 20,
    ease: "linear",
    onComplete: () => {},
  });
}
welcomeAnimation();

// //END SCREENS
// function endScreen() {
//   background(50, 50, 40);
//   //START BUTTON
//   restartButton.displayButton();
//   fill(200, 200, 200);
//   stroke(100, 100, 100);
//   textAlign(CENTER);
//   textSize(30);
//   text("Game Over, party pooper. ;(", 350, 200);
// }
// function successScreen() {
//   background(50, 50, 40);
//   //START BUTTON
//   restartButton.displayButton();
//   fill(200, 200, 200);
//   stroke(100, 100, 100);
//   textAlign(CENTER);
//   textSize(30);
//   text(
//     "Success! You are the Token-Party food supplier! I mean king! Yay!",
//     350,
//     200
//   );
// }

function draw() {
  if (gameState === "start") {
    startScreen();
  }
  if (gameState === "play") {
    tamagotchi();
  }
  if (gameState === "restart") {
    startScreen();
  }
}

