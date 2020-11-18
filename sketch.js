const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball;
var ground;
var grounds = [];
var ground2;
var ground3;
var ground4;
var balls=[];
var bls = [];
var l = true;
var imag;

function preload()
{
	imag = loadImage("dustbin.png");
}

function setup() {
	createCanvas(926, 968);
	engine = Engine.create();
	world = engine.world;
	ground4 = new Ground(width-170,height-46,135,20);
	grounds.push(new Ground(width/2,height-17,width + 1000,30));
	ground2 = new Ground(width-230,height-105,20,125);
	ground3 = new Ground(width-110,height-105,20,125);
	balls.push(new Ball(width/15,height/2,20));

	

	Engine.run(engine);  
}


function draw() {
  	rectMode(CENTER);
  	background("lightCoral");
	Engine.update(engine);

	// for (var i = 0; i < boxy.length; i++) {
	// 	boxy[i].show();
	// }
	for (let ball of balls) {	
		ball.display();
	}
	ground3.display();
	ground2.display();
	ground4.display();
	imageMode(CENTER);
    image(imag, width-170, height-110, 150,150);
		
	
	if(l === true){
	 	for (let ground of grounds) {
			ground.display();
		}
	}
	for (let ball of balls) {
		ball.fly();
	}
	if(keyWentDown("B")){
		grounds.push(new Ground(mouseX,mouseY,155,20));
	}
	if(mouseWentDown(LEFT)){
		balls.push(new Ball(mouseX,mouseY,20));
	}
	if(keyWentDown("V")){
		grounds.push(new Ground(mouseX,mouseY,20,125));
	}
	if(keyDown("m")){
		balls.push(new Ball(mouseX,mouseY,20));
		// for (let ball of balls) {
		// 	ball.update();
		// }s
	}
	if(keyDown("G")){
		l = false;
	//	for (let ground of grounds) {	
			//ball.display();
			Matter.World.remove(world, grounds,[deep=false]);
	//	}
	}
	if(keyWentUp("G")){
		l = true;
	}
  	drawSprites();
 
}
function keyPressed(){
	if(keyIsDown(32)){
		
		balls.push(new Ball(mouseX,mouseY,20));
		
			// for (let ball of balls) {
			// ball.display();
		
	}
}
function mousePressed(){

}



