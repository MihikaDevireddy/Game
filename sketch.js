const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground;
var ball;

function setup() {
  createCanvas(1400, 800);
  createSprite(100, 300, 50, 50);
  createSprite(200, 200, 50, 50);
  createSprite(400, 200, 50, 50);

  var ground_options ={
    isStatic: true
}

engine = Engine.create();
    world = engine.world;

var ball_options ={
    restitution: 1.5
}

ground = Bodies.rectangle(200,390,200,20,ground_options);
    World.add(world,ground);

    ball = Bodies.circle(200,100,20,ball_options);
    World.add(world,ball);

  
}




function draw() {
  background('blue');  
  drawSprites();

  
  Engine.update(engine);
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,400,20);
  
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,20,20);

}