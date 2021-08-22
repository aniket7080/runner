
var path;
var Runner_man;
var rightboundary
var leftboundary
var edges
function preload(){
  pathImage = loadImage("path.png")
  Runner_man = loadAnimation("Runner-1.png","Runner-2.png")
}

function setup(){
  createCanvas(400,400);
  path = createSprite(200,200);
  path.addImage("path",pathImage);
  path.scale = 1.2;
  path.velocityY = 4

  Runner = createSprite(180,340,30,30);
  Runner.addAnimation("man",Runner_man);
  Runner.scale = 0.1;

  leftboundary = createSprite(0,0,100,800)
  leftboundary.visible = false
  

  rightboundary = createSprite(410,0,100,800)
  rightboundary.visible = false
  
}

function draw() {
  background("blue");

  Runner.x = World.mouseX

edges = createEdgeSprites();
 Runner.collide(leftboundary)
 Runner.collide(rightboundary)

  if(path.y > 400){
    path.y = height/2;

  }

  drawSprites();
}
