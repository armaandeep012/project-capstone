
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var box1,box2,box3,box4;
var heli, heliIMG;
var ground;

var sceneIMG;

function preload(){
  sceneIMG = loadImage('scene.jpg');
  heliIMG = loadImage('heli.png');
}

function setup() {
  createCanvas(1200,700);

  engine = Engine.create();
  world = engine.world;

  ground = new Box(600,625,1200,20);
  heli = new Box(600,100,60,60);
}


function draw() 
{
  background(sceneIMG);
  Engine.update(engine);

  ground.show();
  heli.show();
  
  if(keyWentDown("space")){
    heli.y = 300;
  }

  drawSprites();
}

