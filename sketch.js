
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;

function setup()
{
  createCanvas(400,400);
  engine= Engine.create()
world= engine.world
var balloptions={
  restitution:0.6
}
ball= Bodies.circle(100,10,20,balloptions)
World.add(world,ball)
var groundoptions= {
isStatic:true
}
ground= Bodies.rectangle(200,390,400,20,groundoptions)
World.add(world,ground)
}

function draw() 
{
  background(51);
  Engine.update(engine)
 ellipseMode(RADIUS)
 ellipse(ball.position.x,ball.position.y,20,20)
 rectMode(CENTER)
 rect(ground.position.x,ground.position.y,400,20)
}

