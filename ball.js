// ball class
class Ball {

// constructor
constructor(x,y,r){
var options={
isStatic:false,
friction:0.4,
density:3,
restitution:1.2,
}

// this.'s
this.x=x;
this.y=y;
this.r=r;

// bodies .circle
this.body=Bodies.circle(this.x,this.y,this.r/2,options)
World.add(world,this.body);
}

// display
display(){

// important stuff
var pos = this.body.position;
push ()
translate(pos.x,pos.y);
rotate (this.body.angle)

// dark green
fill (50,150,60);

ellipseMode(CENTER);
ellipse(0,0,this.r,this.r)
pop ()
}}