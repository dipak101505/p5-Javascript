var scl = 20;
var snake;
var food;
let wWidth = window.innerWidth;
let wHeight = window.innerHeight;
let maxScore=0;
let currScore=0;
function setup() {
  createCanvas(wWidth-5, wHeight-5);
  frameRate(10);
  snake = new Snake();
  food=createVector(random(width),random(height));
}

function mousePressed() {
  // Functionality to handle mouse click
}
function keyPressed()
{
  console.log("keyCode");
  if(keyCode === UP_ARROW)
  {
    snake.dir(0,-1);
  }
  else if(keyCode === DOWN_ARROW)
  {
    snake.dir(0,1);
  }
  else if(keyCode === LEFT_ARROW)
  {
    snake.dir(-1,0);
  }
  else if(keyCode === RIGHT_ARROW)
  {
    snake.dir(1,0);
  }
}
function draw() {
  background(50);
  snake.update();
  snake.show();
  fill(0,200,0);
  ellipse(food.x,food.y,10,10);
  textSize(18);
  fill(250);
  text('Max Score :'+maxScore, wWidth-150, wHeight-150);
  text('Curr Score :'+currScore, wWidth-150, wHeight-120);
  //keyPressed();
}
