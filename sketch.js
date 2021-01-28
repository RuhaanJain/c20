var ball1,ball2;


function setup() {
  createCanvas(800,400);
  ball1=createSprite(400, 200, 50, 50);
  ball2=createSprite(300,100,50,50);
  ball1.shapeColor="green";
  ball2.shapeColor="green";
}

function draw() {
  background(0); 
  
  ball1.x=mouseX;
  ball1.y=mouseY;

 if( ball1.x-ball2.x<=ball1.width/2+ball2.width/2 &&
  ball2.x-ball1.x<=ball1.width/2+ball2.width/2&&
  ball2.y-ball1.y<=ball1.height/2+ball2.height/2&&
 ball1.y-ball2.y<=ball1.height/2+ball2.height/2
  ){
    
    ball1.shapeColor="red";
    ball2.shapeColor="blue";

 }
else{
  ball1.shapeColor="green";
  ball2.shapeColor="green";
}

  drawSprites();
}