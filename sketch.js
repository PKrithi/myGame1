var bg;
var rocket_img, rocket;
var enemyShip_img, enemyShip;

function preload(){
  bg = loadImage("spaceBackground.jpeg")
  rocket_img = loadImage("rocket.png")
  enemyShip_img = loadImage("enemy.png")
}

function setup() {
  createCanvas(600,800);
  
  rocket = createSprite(300,600,40,50)
  rocket.addImage("rocket",rocket_img)
  rocket.scale = 0.5;

  enemyShip = createSprite(300,100,40,50);
  enemyShip.addImage("enemy",enemyShip_img)
  enemyShip.scale = 0.3
}

function draw() {
  image(bg,0,0,width,height) 

  drawSprites();
}