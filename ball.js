class Ball{
    constructor(x,y,r){
        let options = {
            restitution: 0.5
        }
        this.body = Bodies.circle(x,y,r,options);
        World.add(world,this.body);
        this.r = r+r;
        this.image = loadImage("paper.png");
        
    }
    update(){
        this.body.position.x = mouseX;
        this.body.position.y = mouseY;

    }
    fly(){
        if (keyDown("right")||keyDown("D")) {
            Matter.Body.applyForce(this.body,{x:this.body.position.x,y:this.body.position.y}, {x:0.001,y:0});
        }
        if (keyDown("left")||keyDown("A")) {
            Matter.Body.applyForce(this.body,{x:this.body.position.x,y:this.body.position.y}, {x:-0.001,y:0});
        }
        if (keyDown("W")) {
            Matter.Body.applyForce(this.body,{x:this.body.position.x,y:this.body.position.y}, {x:0,y:-0.005});
        }
        if (keyDown("1")) {
            Matter.Body.applyForce(this.body,{x:this.body.position.x,y:this.body.position.y}, {x:0,y:-0.005});
        }
        if (keyWentDown("up")) {
            Matter.Body.applyForce(this.body,{x:this.body.position.x,y:this.body.position.y}, {x:0.046,y:-0.054});
        }
        // if (keyWentUp("up")) {
        //     Matter.Body.applyForce(this.body,{x:this.body.position.x,y:this.body.position.y}, {x:0,y:0});
        // }
        // function keyPressed(){
        //     if(keyCode === UP_ARROW){
        //         Matter.Body.applyForce(this.body,{x:this.body.position.x,y:this.body.position.y}, {x:0.005,y:-0.005});

        //     }
        // }
        if (keyDown("down")||keyDown("S")) {
            Matter.Body.applyForce(this.body,{x:this.body.position.x,y:this.body.position.y}, {x:0,y:0.005});
        }
    }
    display()
    {
        
        let pos  =this.body.position;
        let angle = this.body.angle;
        push();

            translate(pos.x,pos.y);
            rotate(angle);
            imageMode(CENTER);
            image(this.image, 0, 0, 77,77);
            //scale(10);
        pop();
    }
}