var backImage,backgr;
var player, player_running;
var ground,ground_img;
var score =0;
var END =0;
var PLAY =1;
var gameState = PLAY;

function preload(){
  backImage=loadImage("jungle.jpg");
  player_running = loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png");
  bananaImg=loadImage("banana.png")
}

function setup() {
  createCanvas(800,400);
  
  backgr=createSprite(0,0,800,400);
  backgr.addImage(backImage);
  backgr.scale=1.5;
  backgr.x=backgr.width/2;
  backgr.velocityX=-4;
  
  player = createSprite(100,340,20,50);
  player.addAnimation("Running",player_running);
  player.scale = 0.1;
  
  ground = createSprite(400,350,800,10);
  ground.x=ground.width/2;
  ground.visible=false;
  
}

function draw() { 
  background(0);
  fill("white")
    textSize(20)
    text("score : "+score,600,100)
  
  
  if(gameState===PLAY){
  
  if(backgr.x<100){
    backgr.x=backgr.width/2;
  }
  
    if(keyDown("space") ) {
      player.velocityY = -12;
    }
    player.velocityY = player.velocityY + 0.8;
  
    player.collide(ground);
    spawnBananas()
    
    drawSprites()
  }
  function spawnBananas() {
    //write code here to spawn the clouds
    if (frameCount % 60 === 0) {
      var banana = createSprite(800,120,40,10);
      banana.y = Math.round(random(80,180));
      banana.addImage(bananaImg);
      banana.scale = 0.1;
      banana.velocityX = -3;
      
       //assign lifetime to the variable
      banana.lifetime = 200;
      
      //adjust the depth
      banana.depth = player.depth;
      player.depth = player.depth + 1;
      
    }
  }
  
}