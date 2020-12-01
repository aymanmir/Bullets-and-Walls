var wall,thickness;
var bullet,speed,weight;
var bulletImage;
function preload(){
bulletImage=loadImage("bullet.png");
}
function setup() {
  createCanvas(1600,400);
  
  speed=random(223,321);
  weight=random(30,52);


  thickness=random(22,83);



  bullet=createSprite(50,200,50,5);
  bullet.velocityX=speed;
  bullet.shapeColor=color(255);
  //bullet.addImage(bulletImage);
  //bullet.scale=0.05;
//bullet.debug=true;

  wall=createSprite(1200,200,thickness,height/2);
  wall.shapeColor=color(80,80,80);
  frameRate(10);
}

function draw() {
  background("lightblue");  
if(hasCollided(bullet,wall)){
  bullet.velocityX=0;
  var damage=0.5*weight*speed*speed/(thickness*thickness*thickness);
  if(damage>10){
    wall.shapeColor=color(255,0,0);
    fill("red");
    text("Wall not Effective against Bullet!",1000,50);
  }
  if(damage<10){
    wall.shapeColor=color(0,255,0);
    fill("green");
    text("Wall Effective against Bullet!",1000,50);
  }
  textSize(15);
  fill("black");
  text("Wall Damage = "+Math.round(damage), 1000, 100);
  text("Bullet Speed = "+Math.round(speed),1000,80);
}



  drawSprites();
}


function hasCollided(lbullet,lwall){

  bulletRightEdge=lbullet.x+lbullet.width;
  wallLeftEdge=lwall.x;
  if(bulletRightEdge>=wallLeftEdge){
    return true;
  }
  return false;
}