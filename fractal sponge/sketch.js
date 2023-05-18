let b;
var a = 0;
sponge = [];

function setup() {
  createCanvas(500, 500, WEBGL);
  b = new Box(0, 0, 0, 200);
  sponge.push(b);
}

function mousePressed() {
  let next = [];
  for (let i = 0; i < sponge.length; i++) {
    let current = sponge[i];
    let generatedBoxes = current.generate();
    next.push(...generatedBoxes);
  }
  sponge = next;
}

function draw() {
  background(50);
  fill(255);
  lights();
  rotateX(a);
  rotateY(a);
  rotateZ(a);
  
  for (let i = 0; i < sponge.length; i++) {
    let current = sponge[i];
    current.show();
  }
  
  a += 0.01;
}
