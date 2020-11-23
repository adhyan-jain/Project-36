var database;
var dog, dogImg, happyDog;
var foodS = 20;
var lastFed = 0;
var foodObj = null;
var feedButton, addButton;
var timer = 0;

function preload(){

  bgIMG = loadImage("images/bg.jpg");
  dogImg = loadImage("images/dogImg.png");
  happyDog = loadImage("images/dogImg1.png");
  milkIMG = loadImage("images/Milk.png");
}

function setup() {

  createCanvas(800, 500);
  
  feedButton = createButton("Feed your dog");
  feedButton.position(600, 170);
  feedButton.mousePressed(feedDog);

  input = createInput ("Your dog's name"); 
  input.position (150, 170);
  
  addButton = createButton("Buy Milk Bottles");
  addButton.position(720, 170);
  addButton.mousePressed(addFood);

  foodObj = new Food();

  dog = createSprite(650, 280);
  dog.scale = 0.27;
  dog.addImage("dog1", dogImg);
  dog.addImage("dog2", happyDog);

  milk = createSprite(300,320)
  milk.addImage(milkIMG);
  milk.scale = 0.07;
}

function draw() {  

  background(bgIMG);

  fill("white");
  stroke("blue");
  strokeWeight(4);
      textSize(25);
    
        if(lastFed>=12){
    
         text("Last Fed : "+ lastFed%12 + " PM", 300,40);
        }
        
        else if(lastFed==0){

          text("Last Fed : 12 AM",300,40);
        }

        else{

           text("Last Fed : "+ lastFed + " AM", 300,40);
        }

  drawSprites();

  strokeWeight(5);
  stroke("red")
  fill("white");
  textSize(30);
  text("Milk bottles left : " + foodS, 100, 400);

  foodObj.display();

  if(dog.x <= 450){

    timer = timer + 1;
  }

  if(timer > 50){

    dog.x = 650;
    timer = 0;
  }

  if(dog.x <= 450){

    milk.visible = true;
    dog.changeAnimation("dog2", happyDog);
  } else{

    milk.visible = false;
    dog.changeAnimation("dog1", dogImg);
  }

  console.log(timer);

}

function addFood(){
  foodS++;
  foodObj.updateFoodStock(foodS);
}

function feedDog(){
  
  if(foodS > 0){

    foodS--
    foodObj.updateFoodStock(foodS);
    lastFed = hour();
    foodObj.updateLastFed(lastFed);

    dog.x = 400;
  }
}