
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj, stoneObj,groundObject, launcherObject;
var mango1;
var world,boy;

function preload(){
  boy=loadImage("images/boy.png");
 tree=loadImage("images/tree.png")

  }

function setup() {
	createCanvas(1350, 600);
	engine = Engine.create();
	world = engine.world;

	mango1=new mango(1100,300);

 

	groundObject=new ground(width/2,600);
  s=new stone(240,420);
  sl=new sling(s.body,{x:240,y:420})
	Engine.run(engine);

}

function draw() {

  background(230);
  //Add code for displaying text here!
  image(boy ,200,340,200,300);
  image(tree,950,150,400,400)
 

  mango1.display();
s.display();
sl.display();
  groundObject.display();
}
function mouseDragged(){
  Matter.Body.setPosition(s.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  sl.fly();
}