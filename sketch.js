var car, wall;
var speed,weight;
function setup() {
  createCanvas(1600,400);
  speed=random(55,90);
  weight=random(400,1500);
  car=createSprite(50,200,50,50);
  car.velocityX=speed;
  wall=createSprite(1300,200,60,height/2);
  wall.shapeColor=color(80,80,80);
 
}


function draw() {
  background(255,255,255);  
  drawSprites();
  
  if(isTouching(car,wall)){
    car.velocityX=0;
    var deformation=(0.5*weight*speed*speed)/22500
    if(deformation<100){
    car.shapeColor=color("green");
    }
    if(deformation>100 && deformation<180){
      car.shapeColor=color("yellow");
    }
    if(deformation>180){
      car.shapeColor=color("red");
    }
  }
}
