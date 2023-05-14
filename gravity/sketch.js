var bally=[];
function setup(){
  createCanvas(500,500);
  background(0);
  console.log(width,height);
}
function ball(s){
  this.x=mouseX;
  this.y=mouseY;
  this.v=0;
  this.t=0;
  this.s=s;
  this.c=240;
  this.up=false;
  this.show= function display(){
    fill(this.c);
    ellipse(this.x,this.y+this.s,5,5);
  }
  this.update= function(){
   this.s= this.v*this.t + 9.8*this.t*this.t;
   this.t+=0.02;

   if((this.y+this.s)>height)
   {
    if(this.up)
    this.t*=0.5;
    console.log(this.t);
    this.v=9.8*this.t*-0.9*2;
    this.y=height;
    this.t=0;
    this.up=true;
   }
   
  }
}

function mousePressed(){
  bally.push(new ball(random(0,2))); 
  console.log(mouseX,mouseY);
}
function draw(){
  background(0);
  fill(240);
  for(var i=0;i<bally.length;i++){
  bally[i].update();
  bally[i].show();
  }
  
  //ellipse(mouseX,mouseY,25,20);
}