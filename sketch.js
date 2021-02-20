// constants
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const body = Matter.Body;
const Constraint = Matter.Constraint;

// global variables
var ball1,ball2,ball3,ball4,ball5;
var tops;
var rope1,rope2,rope3,rope4,rope5;

// function setup
function setup() {

// create canvas
createCanvas(800, 400);

// engine create
engine = Engine.create();
world = engine.world;

//ball / bob
ball1=new Ball(300,350,80);
ball2=new Ball(350,350,80);
ball3=new Ball(400,350,80);
ball4=new Ball(450,350,80);
ball5=new Ball(570,350,80);

// top celing
tops = new Top(400,50,500,40);

// ropes / constraints
rope1= new Rope(ball1.body,tops.body,-50*3,0);
rope2= new Rope(ball2.body,tops.body,-25*3,0);
rope3= new Rope(ball3.body,tops.body,-0*3,0);
rope4= new Rope(ball4.body,tops.body,25*3,0);
rope5= new Rope(ball5.body,tops.body,50*3,0);

// run engine
Engine.run(engine);
}

//  function draw
function draw(){

// background
background(255);

// center rect
rectMode(CENTER);

// engine update
Engine.update(engine);

// ball / bob display
ball1.display();
ball2.display();
ball3.display();
ball3.display();
ball4.display();
ball5.display();

// display celing
tops.display();

// ropes display
rope1.display();
rope2.display();
rope3.display();
rope4.display();
rope5.display();

// draw sprites
drawSprites();
}




