class Ground{
    constructor(x,y,w,h){
        let options = {
            isStatic: true,
            friction: -1,
           
        }
        this.body = Bodies.rectangle(x,y,w,h,options);
        World.add(world, this.body);
        this.w = w;
        this.h = h;

    }
    display()
    {
        let pos  =this.body.position;
        let angle = this.body.angle;
        push();
            translate(pos.x,pos.y);
            rotate(angle);
            rectMode(CENTER);
            strokeWeight(4);
            stroke("yellow");
            fill("brown");
            rect(0,0,this.w,this.h);
        pop();
    }
}