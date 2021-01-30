class stone{
    constructor(x,y){
        var options={
            'isStatic':false,
            'restitution':0,
            'friction':0.1,
            'density':1.0,

        }
        
        this.x=x
        this.y=y
        this.w=40
        this.h=40
        this.body=Bodies.rectangle(x,y,40,40,options);
        this.image=loadImage("images/stone.png")
        World.add(world,this.body)

    }
    display(){
        var p=this.body.position
        push();
        translate(p.x,p.y)
        imageMode(CENTER)
        image(this.image,0,0,this.w,this.h)
        pop();
    }
}