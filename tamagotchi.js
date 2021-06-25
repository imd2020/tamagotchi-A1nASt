import gsap from "./gsap.min.js";
import Colony from "./ColonyClass.js";
import Feeder from "./FeederClass.js";

//GAME SCREEN STATE
let gameState = "start";
//PARAMETER STUFF
let xPosBar = 0;
let counter = 25;
let tokenArray = []; //was supposed to determine the win condition (see ColonyClass.js), but it doesn't actually do anything
//FEEDER IMPORT
let tributeButton = new Feeder(1, 1, 1, "OFFER TRIBUTE");
let startButton = new Feeder(200, 500, 1, "START GAME");
let restartButton = new Feeder(400, 500, 1, "RESTART GAME");
//COLONY IMPORT
let allTokens = new Colony(token, birb, bluzuk, crab, dolphin, fake, xPosBar);

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

function feederBar() {
  fill(100, 0, 100);
  rect(200, 0, xPosBar, 20);
}

//MAIN GAME SCREEN
function tamagotchi() {
  background(50, 50, 40);
  //START BUTTON
  restartButton.displayButton();
  hunger();
  feederBar();
  tributeButton.displayButton();
  allTokens.spawnConditions();
}

//FANCY ANIMATION STUFF BECAUSE I HAVE TO PART-1
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

//FANCY ANIMATION STUFF BECAUSE I HAVE TO PART-2 (actually looks kinda cool)
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

//NOT ACTUALLY USED 'COUSE I'M TOO TIRED TO THINK AND DON'T HAVE TIME
function endScreen() {
  background(50, 50, 40);
  //START BUTTON
  restartButton.displayButton();
  fill(200, 200, 200);
  stroke(100, 100, 100);
  textAlign(CENTER);
  textSize(30);
  text("Game Over, party pooper. ;(", 350, 200);
}
function successScreen() {
  background(50, 50, 40);
  //START BUTTON
  restartButton.displayButton();
  fill(200, 200, 200);
  stroke(100, 100, 100);
  textAlign(CENTER);
  textSize(30);
  text(
    "Success! You are the Token-Party food supplier! I mean king! Yay!",
    350,
    200
  );
}

function draw() {
  if (gameState === "start") {
    startScreen();
  }
  if (gameState === "play") {
    tamagotchi();
  }
  // if (tokenArray[4] === "token") {
  //   gameState = "victory";
  // }
  if (gameState === "restart") {
    startScreen();
  }
}
