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
  this.show= function display(){
    fill(this.c);
    ellipse(this.x,this.y,5,5);
  }
  this.update= function(){
   this.x+=this.s;
    if(this.x>width||this.x<0)
    {
    this.c=(random(0,255));
      this.s*=-1;
    }
        //this.y=height;
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