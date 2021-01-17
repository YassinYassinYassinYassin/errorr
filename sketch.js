//Create variables here
var dog, happyDog, database, foodS, foodStock, foodAmount, foodSa;

function preload () {
	//load images here
    dog = loadImage("images/dogImg.png");
    happyDog = loadImage("images/dogImg.png");
}

function setup () {
	createCanvas(500, 500);

    database = firebase.database();
    foodStock=database.ref("pet/food");
    foodStock.on("value", readStock);

    pet = createSprite(250, 250, 10, 10);
    pet.scale = 0.2;

    pet.addImage("dogIMG", dog);

    foodAmount = 15;
}


function draw () {  
  background(46, 139, 87);


  drawSprites();
  //add styles here
  textSize(20);
  fill("black");
  stroke("white");
  strokeWeight(1.5);
  text("Press up arrow to feed your pet", 100, 100);

  if (keyWentDown(UP_ARROW)){
    foodAmount = foodAmount-1;     
  }

  console.log(foodStock);
  
}

function readStock(data){
  //setting the position to position on the firbase
  foodS = data.val();
  //setting the position on firebase the same as the position of the ball
  foodAmount = foodS;
}

function writeStock(foodSa){
    foodStock.update({
        //edit the x value of "position"
        food: foodSa + 1
    });
}


/*
var ball;

var database;
var refPos;
var position;

function setup(){
    createCanvas(500,500);
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";

    //Assign the variable "database" to the main root
    database = firebase.database();
    //refrence the position from the main root
    refPos = database.ref('ball/position');
    //get the value and mention function readPosition
    refPos.on("value", readPosition, showEror);
}

function draw(){
    background("white");

    if(position !== undefined){
        if(keyDown(LEFT_ARROW)){
            writePosition(-1,0);
        }
        else if(keyDown(RIGHT_ARROW)){
            writePosition(1,0);
        }
        else if(keyDown(UP_ARROW)){
            writePosition(0,-1);
        }
        else if(keyDown(DOWN_ARROW)){
            writePosition(0,+1);
        }
    }
    drawSprites();
}

function writePosition(x,y){
    //directly update the position in firebase
    refPos.update({
        //edit the x value of "position"
        x: position.x + x,
        //edit the y value of "position"
        y: position.y + y
    });
}

function readPosition(data){
  //setting the position to position on the firbase
  position = data.val();
  //setting the position on firebase the same as the position of the ball
  ball.x = position.x;
  ball.y = position.y;
}

function showEror(){
    console.log("Error!");
}



<script src="https://www.gstatic.com/firebasejs/6.3.4/firebase-app.js"></script>
<script src="https://www.gstatic.com/firebasejs/6.3.0/firebase-database.js"></script>
*/