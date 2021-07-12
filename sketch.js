

function preload(){
  shipAnime = loadAnimation("ship-1.png","ship-2.png");
  seaBg = loadImage("sea.png");
}

function setup(){
  createCanvas(800,600);

  sea = createSprite(200,200,400,400);
  sea.addImage(seaBg);
  sea.scale = 1;
  sea.velocityX = -2;

  ship = createSprite(200,300,10,10);
  ship.addAnimation("first",shipAnime);
  ship.scale = 0.3;
  
}

function draw() {
  background("blue");

  if(sea.x < 0){
    sea.x = sea.width/2;
  }

  drawSprites();
 
}