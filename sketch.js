const Engine = Matter.Engine;
const World = Matter.World;
const Bodies =Matter.Bodies;

var engine,world,ground,box;

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;

  var options={ isStatic: true}

  ground = Bodies.rectangle(200,390,400,20,options);
  World.add(world,ground);

  var boxoptions={ restitution: 2}

  box = Bodies.rectangle(200,50,50,50,boxoptions);
  World.add(world,box);
}

function draw() {
  background(0); 
  Engine.update(engine);
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,400,20);
  rect(box.position.x,box.position.y,50,50);
}