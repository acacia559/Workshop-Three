let flower;
let bunny;
let lanturn;
let bunny2; 
let flowertop;
let flowerbottom;

function preload() { 
  bunny = loadImage ('images/bun-2.png'); 
  flower = loadImage ('images/flower-1.png');
  lanturn = loadImage ('images/lanturn.jpg');
  bunny2 = loadImage ('images/bun-1.png');
  flowertop = loadImage ('images/flower-9.png');
  flowerbottom = loadImage ('images/flower-8.png');
}

function setup() {
  createCanvas(400, 400);
 bunny.resize (200, 0);
 flower.resize (200,0);
 bunny2.resize (200, 0);
 flowertop.resize (200,0);
 flowerbottom.resize (200,0);
}

function draw() {
  imageMode (random);
  image (bunny, width/2, height/2);
  imageMode (CENTER);
  image (flower, width/2, height/2);
  imageMode (TOP);
  image (bunny2, 100, 100);
  imageMode (BOTTOM);
  image (flowertop, 100, 300)
  imageMode (random)
  image (flowerbottom, 300, 100)

let x = random(lanturn.width);
let y = random(lanturn.height);
let c = lanturn.get(int(x), int(y));
fill(c);
noStroke();
rect(x, y, 50, 25);
}