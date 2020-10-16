var car,wall
var speed,weight
var thickness
function setup() {
  createCanvas(1600,400);
  
  speed=random(55,90)
  weight=random(400,1500)
  thickness=random(22,83)

  car=createSprite(50,200,50,50) 
  car.velocityX=speed

  wall=createSprite(1500,200,30,height/2)
}

function draw() {
  background(255,255,255);  
  
  if(hasCollided(car,wall)){
    
  
 car.velocityX=0
 // if(wall.x-car.x<car.width/2+wall.width/2){
    

    var damage=0.5*weight*speed*speed/thickness*thickness*thickness

    if(damage<100){
      car.shapeColor="red"
    }
    if(damage>100){
      car.shapeColor="green"
    }
  }
  drawSprites();
  }

function hasCollided(lcar,lwall){
  carLeftEdge=lcar.x+lcar.width
  wallLeftEdge=lwall.x;
   if (carLeftEdge>=wallLeftEdge) { return true } return false; 
}