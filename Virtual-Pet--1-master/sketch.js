//Create variables here
var dog 
var HappyDog 
var database
var foodS
var foodStock
function preload()
{
	//load images here
  Happydog = loadImage("images/dogImg1.png")
  dog = loadImage("images/dogImg.png")
}

function setup() {
	createCanvas(800, 700);
  database= firebase.database();
  Dog = createSprite(400,350,50,50)
  Dog.addImage("dog",dogImg);
  dog.scale=0.5  ;
  foodStock =  database.ref('food');
  foodStock.on("value",readStock)
}


function draw() {  
background("lightblue");
 if(keyWentDown("space")){

  WriteStock(foodS)
     
dog.addImage("happyDog",happyDog);   
  }
  drawSprites();
  textSize(25);
  fill("black");
  text("food remaining:"+ foodS,170,80);
  text("press space to feed the dog!" ,170 , 120 )

}
function WriteStock(petFOOD){
  if(petFOOD<=0){
      petFOOD=0
  }
  else{
      petFOOD=petFOOD-1;
  }
  database.ref('/').update({
      food:petFOOD
  })
}
function readStock(data){
  foodS = data.val();
  
}


