var ship, shipSailing;
var sea, seaImage;
function preload(){
shipSailing = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
seaImage = loadImage("sea.png");
}

function setup(){
  createCanvas(400,400);
  
  sea= createSprite(200,120,100,100);
  sea.addImage(seaImage);
  sea.x= sea.width/2;
  sea.velocityX=-6;

  ship= createSprite(100, 200, 100, 80);
  ship.addAnimation("running",shipSailing);
  ship.scale=0.25;
}

function draw() {
  background("blue");
 
  if(sea.x<0){
    sea.x= sea.width/2;
  } 

  drawSprites();
}