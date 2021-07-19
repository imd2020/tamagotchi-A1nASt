
import gsap from "./gsap.min.js";

const irgendwas = {
  x: 100,
  y: 100,
  width: 1,
  height: 1,
};

function draw() {
  rect(irgendwas.x, irgendwas.y, irgendwas.width, irgendwas.height);
}

function aniUeb() {
  gsap.to(irgendwas, {
    duration: 10,
    x: 500,
    width: 100,
    height: 100,
    //ease: "linear",
    onComplete: () => {},
  });
}

aniUeb();
