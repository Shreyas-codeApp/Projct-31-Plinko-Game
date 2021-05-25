class Particle{
	constructor(x,y,r)
	{
		var options={
			isStatic:false,
			restitution:0.3,
			friction:1,
			density:1.2
			}
		this.x=x;
		this.y=y;
		this.r=r
		
		this.body=Bodies.circle(this.x, this.y, this.r, options);
        this.color = color(random(0,255),random(0,255),random(0,255));
		World.add(world, this.body);

	}
	display(){
			var pos=this.body.position;		
			push();
			fill(this.color);
			ellipseMode(RADIUS);
			ellipse(pos.x,pos.y,8);
			pop();
			
	}

}