var bally=[];
function setup(){
  createCanvas(500,500);
  background(0);
  for(var i =0;i<2;i++)
  {
    var v=createVector(random(0,500),random(0,500));
    bally.push(v);
  }
}

function mousePressed(){
  var v=createVector(mouseX,mouseY);
  bally.push(v);
}
function draw(){
  background(0);
  fill(240);
  var unassigned=[];
  var assigned=[];
  for(var i=0;i<bally.length;i++){
    var ball=bally[i];
    unassigned.push(ball);
    ellipse(ball.x,ball.y,10,10);
  }
  assigned.push(unassigned[0]);
  unassigned.splice(0,1);
  for(var i =0;i<assigned.length &&  unassigned.length;i++)
  {
    var mini=1000;
    var v1=assigned[i];
    var v2=unassigned[0];
    var pos=0;
    for(var j=0;j<unassigned.length;j++)
    {
      var v3=unassigned[j];
      if(dist(v1.x,v1.y,v3.x,v3.y)<mini)
      {
        mini=dist(v1.x,v1.y,v3.x,v3.y);
        v2=v3;
        pos=j;
      }
    }
    assigned.push(v2);
    unassigned.splice(pos,1);
    stroke(255);
    strokeWeight(2);
    line(v1.x,v1.y,v2.x,v2.y)
  }
  //ellipse(mouseX,mouseY,25,20);
}