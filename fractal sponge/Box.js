class Box{
constructor(x, y,z,r)
{
    this.vec=createVector(x,y,z);
    this.side=r;
}
generate(){
    let boxes=[];
    for(var i=-1;i<2;i++)
    {
        for(var j=-1;j<2;j++)
        {
            for(var k=-1;k<2;k++)
            {
                var r_=this.side/3;
                if(abs(i)+abs(j)+abs(k)>1)
                {
                    boxes.push(new Box(this.vec.x+i*r_,this.vec.y+j*r_,this.vec.z+k*r_,r_));
                }
            }
        }
    }
    return boxes;
}
show()
{
    push();
    translate(this.vec.x,this.vec.y,this.vec.z);
    box(this.side);
    pop();
}
}