
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var hammer,ground,rock,rubber

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
  ground = new Plane(600,height,1200,100);
    hammer= new Hammer(100,100);
    rock=new Stone(200,350,100,100);
    rubber=new Rubber(500,350,-100);
   


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightblue");
  //Engine.update(engine);

  
  ground.display();
  rock.display();
  hammer.display();
  rubber.display();
  
  
  drawSprites();
 
}



