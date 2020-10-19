var fixedrect,movingrect;

function setup() {
  createCanvas(1200,800);
  fixedrect=createSprite(200,300,20,70);
  movingrect=createSprite(500,200,30,50);
  movingrect.shapeColor="green";
  fixedrect.shapeColor="green";
}

function draw() {
  background(255,255,255);
  movingrect.x=World.mouseX;
  movingrect.y=World.mouseY;
  if(
    (movingrect.x-fixedrect.x<fixedrect.width/2+movingrect.width/2)
  &&(fixedrect.x-movingrect.x<fixedrect.width/2+movingrect.width/2)
  && (movingrect.y-fixedrect.y<fixedrect.width/2+movingrect.width/2)
  &&(fixedrect.y-movingrect.y<fixedrect.width/2+movingrect.width/2)
  )
  {
  movingrect.shapeColor="red";
  fixedrect.shapeColor="red";
  }
  else{
    movingrect.shapeColor="green";
    fixedrect.shapeColor="green"; 
  }
  console.log(movingrect.x-fixedrect.x)
  drawSprites();
}