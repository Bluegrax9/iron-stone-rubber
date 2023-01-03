class Hierro{
	constructor(x,y,r)
	{
	var options={
		restitution:0.3,
		friction:5,
		density:1,
	}
		this.x=x;
		this.y=y;
		this.r=r
		this.body=Bodies.circle(this.x, this.y, (this.r-20)/2, options)
		World.add(world, this.body);

	}
	display()
	{
			var hierropos=this.body.position;		
			push()
			strokeWeight(4);
			stroke("white");
			fill("darkwhite");
			//draw the ellipse here to display the rubber ball

			pop()
	}

}