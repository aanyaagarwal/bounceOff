var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;
}

function draw() {
  background(0,0,0);
bounce(movingRect, fixedRect);
  drawSprites();
}

function bounce(move, fix)
{
  if (move.x - fix.x < fix.width/2 + move.width/2
    && fix.x - move.x < fix.width/2 + move.width/2) {
  move.velocityX = move.velocityX * (-1);
  fix.velocityX = fix.velocityX * (-1);
  } 
if (move.y - fix.y < fix.height/2 + move.height/2
  && fix.y - move.y < fix.height/2 + move.height/2){
  move.velocityY = move.velocityY * (-1);
  fix.velocityY = fix.velocityY * (-1);
  }
}