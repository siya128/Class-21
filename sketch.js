var object1, object2,o3,object4;

function setup() {
  createCanvas(1200,800);
object1 = createSprite(600, 400, 50, 80);
 object1.shapeColor = "green";
object1.debug = true;
  object2 = createSprite(400,200,80,30);
  object2.shapeColor = "green";
  object2.debug = true;
  o3 = createSprite (200,200,50,50)
  o3.shapeColor = "blue"
  object4 = createSprite (200,500,50,50)
  object4.shapeColor = "yellow"
  o3.velocityY = 3
  object4.velocityY = -3
}

function draw() {
  background(0,0,0);  
object2.x = World.mouseX;
  object2.y = World.mouseY;

BounceOff (o3,object4)
if (IsTouching(object2,o3)){


    object2.shapeColor = "red";
    o3.shapeColor = "red";
  }
  else {
   object2.shapeColor = "green";
    o3.shapeColor = "blue";
  }
  drawSprites();
}
