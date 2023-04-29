
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground, leftSide
var radius = 40
function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground=new Ground(width/2,670,width,20)
	leftSide=new Ground(1100,600,20,120)
	rightSide=new Ground(1350,600,20,120)

	ball=Bodies.circle(260,100,radius/2)
	World.add(world,ball)


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 ground.show()
 leftSide.show()
 rightSide.show()
 ellipse(ball.position.x,ball.position.y,40)
}



function keyPressed(){
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(ball,ball.position,{x:0.05,y:-0.05})
	}
}