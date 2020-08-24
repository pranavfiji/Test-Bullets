var bullet,wall;
var speed,weight;
var line,line2,line3,line4;
var bullet2,wall2;
var bullet3,wall3;
var bullet4,wall4;
var thikness;

function setup() {
  createCanvas(400,400);
  
 bullet=createSprite(10,50,10,10);
 wall=createSprite(350,50,20,50);

 bullet2=createSprite(10,150,10,10);
 wall2=createSprite(350,150,20,50);

 bullet3=createSprite(10,250,10,10);
 wall3=createSprite(350,250,20,50);

 bullet4=createSprite(10,350,10,10);
 wall4=createSprite(350,350,20,50);

 line1=createSprite(200,100,400,3);
 line2=createSprite(200,200,400,3);
 line3=createSprite(200,300,400,3);
 line4=createSprite(200,390,400,3);
 
 
 speed=random(55,90);
 
 
 
 weight=random(20,50);
 thickness=random(20,80);

 bullet.velocityX=speed;
 bullet2.velocityX=speed;
 bullet3.velocityX=speed;
 bullet4.velocityX=speed;

 


}


function draw() {

  
  background(0);
 if(hasCollided(bullet,wall)){

  var impact= 0.5*weight*speed*speed/(thickness*thikness*thikness);
      
    bullet.velocityX=0;
    
     
        if( damage>10){
          bullet.shapeColor="green";
        }
        if( damage<10){
          bullet.shapeColor="yellow";
        }
        if(damage<0){
          bullet.shapeColor="red";
        }

      }
      

if(hasCollided(bullet2,wall2)){

  var impact= 0.5*weight*speed*speed/(thickness*thikness*thikness);
        
    bullet2.velocityX=0;
      
        if( damage>10){
          bullet2.shapeColor="green";
        }
        if( damage<10){
          bullet2.shapeColor="yellow";
        }
        if(damage<0){
          bullet2.shapeColor="red";
        }
      }

if(hasCollided(bullet3,wall3)){

  var impact= 0.5*weight*speed*speed/(thickness*thikness*thikness);
    
  bullet3.velocityX=0;
  
      if( damage>10){
      bullet3.shapeColor="green";
      }
      if( damage<10){
      bullet3.shapeColor="yellow";
      }
      if(damage<0){
      bullet3.shapeColor="red";
      }
    }
if(hasCollided(bullet4,wall4)){

  var impact= 0.5*weight*speed*speed/(thickness*thikness*thikness);
  
  bullet4.velocityX=0;

      if( damage>10){
      bullet4.shapeColor="green";
      }
      if( damage<10){
      bullet4.shapeColor="yellow";
      }
      if(damage<0){
      bullet4.shapeColor="red";
      }
    
      
      
    }
    drawSprites();
}
 
function hasCollided(bullet,wall){
  bullet=bullet.x+bullet.width
  wall=wall.x+wall.width

  if(bullet.x>=wall.x){
    return true;
  }
  return false;
}
  
  
    