import Individual from "./IndividualClass.js";
import Colony from "./ColonyClass.js";

let test = new Individual(-150, 0, 0.5, "standard Tamatoken.png");
let token2 = new Individual(-385, -165, 0.3, "standard Tamatoken.png");
let colony = new Colony(0, 0);

function draw() {
  background(255, 255, 255);
  token2.body();
  test.body();
  colony.displayColony();
}
