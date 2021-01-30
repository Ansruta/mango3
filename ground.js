class ground
{
	constructor(x,y)
	{
		var options={
			'isStatic':true			
			}
		this.x=x;
		this.y=y;
		this.w=1400
		this.h=20
		this.body=Bodies.rectangle(x, y,1300,10 , options);
 		World.add(world, this.body);

	}
	display()
	{
			var groundPos=this.body.position;		
			push()
			rectMode(CENTER)
			fill(128,128,128)
			rect(0,0,1300,10);
			pop()
			
	}

}