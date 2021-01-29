const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint=Matter.Constraint;
var engine, world
var stone1;
var rope;
var backgroundImage;
var brick1;
var ground;
var level=1;
var timing=0;
function preload()
{
backgroundImage=loadImage("sprites/background.jpg")

}

function setup()
{
createCanvas(800,800)
engine=Engine.create();
world=engine.world;
stone1=new Stone(300,800,55,55,"brown")
brick1=new Brick(600,700,70,90)
brick2=new Brick(600,760,70,90)
brick3=new Brick(700,700,70,90)
brick4=new Brick(700,760,70,90)
brick5=new Brick(600,780,70,90)
brick6=new Brick(700,780,70,90)
ground=new Ground(400,790,width,30,"green")
//stone2=new Stone()
rope=new Rope(stone1.body,{x:200,y:700})

}

function draw()
{
background(backgroundImage)
Engine.update(engine)

stone1.display();
brick1.display();
brick2.display();
brick3.display();
brick4.display();
brick5.display();
brick6.display();
rope.display();
ground.display();
textSize(100)
text("Level: 1",0,100)
timing=(timing+(frameCount%60===0))
text("Time"+timing,300,100)
}

function mouseDragged()
{
Matter.Body.setPosition(stone1.body,{x:mouseX,y:mouseY})
}

function mouseReleased()
{
rope.fling();
}

function keyPressed()
{
if(keyCode===32)
{
Matter.Body.setPosition(stone1.body,{x:200,y:700})
rope.attach(stone1.body);
}
}
