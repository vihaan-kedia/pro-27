// top class
class Top{

//constructor
constructor(x,y,width,height) {
var options = {
isStatic: true
}

// this.body
this.body = Bodies.rectangle(x,y,width,height,options);
this.width = width;
this.height = height;

// world add
World.add(world, this.body);
}

// display
display(){

// important stuff
var pos =this.body.position;
rectMode(CENTER);

// hot pink
fill(180,56,127);
rect(pos.x, pos.y, this.width, this.height); 
pop();
}}