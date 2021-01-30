class mango{
	constructor(x,y)
	{
		var options={
			isStatic:true,
			restitution :0,
            friction :1,
			}
			this.body=Bodies.rectangle(x,y, width,height, options)
		this.x=x;
		this.y=y;
		this.width=30;
		this.height=30
		
		
		World.add(world, this.body);
		this.image=loadImage("images/mango.png")
	}
	

	display()
	{
		var mangoPos=this.body.position;	
		push()
		translate(mangoPos.x, mangoPos.y);
	
		rotate(this.body.angle)
		fill(255,0,255)
		imageMode(CENTER);
		
		image(this.image, 0,0,this.width,this.height)
		pop()
 }
}