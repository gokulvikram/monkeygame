
var monkey , monkey_running
var banana ,bananaImage, stone,stoneImage,groundImage,ground;
var FoodGroup, obstacleGroup
var score = 0;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  stoneImage = loadImage("obstacle.png");
 
}



function setup() {
 createCanvas(600,600);
  
 monkey = createSprite(50,380,5,5)
 monkey.addAnimation("running",monkey_running);
 monkey.scale=0.3;
  
  
 ground = createSprite(180,580,1100,10);
 ground.velocityX=-3;
 ground.x = ground.width /2; 

  
}


function draw() {
background("lightBlue");
  console.log(monkey.y);
  
   text.fill="red";
 text("lifetime"+score,300,50)
 score=score+Math.round((getFrameRate()/60)) 
  
  if(keyDown("space") && monkey.y > 482) {
    monkey.velocityY = -20;
  }
  
  monkey.velocityY = monkey.velocityY + 0.8
  
  if (ground.x < 0){
    ground.x = ground.width/2;
  }
  
  monkey.collide(ground);
  
  spawnbanana();
  //spawnstone();
  
 drawSprites(); 
  
}

function spawnbanana(){
 if (frameCount%210 === 0){
 banana=createSprite(390,75,0,0);
 banana.addImage(bananaImage);
 banana.scale=0.1; 
 banana.velocityX=-3;
 banana.y = Math.round(random(50,150)) 
 banana.lifetime = 134
 banana.depth = monkey.depth
 monkey.depth = monkey.depth + 1;  
 }

  //function spawnstone
 if (frameCount % 170 === 0) {
  stone = createSprite(575,560,40,10);
  stone.addImage(stoneImage);
  stone.scale = 0.2;
  stone.velocityX = -3;
  }   
} 




