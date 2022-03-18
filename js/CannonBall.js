class CannonBall {
  constructor(x, y) 
  {
    var options = {
      isStatic: true
    };
    this.r = 30;
    this.body = Bodies.circle(x, y, this.r, options);
    this.image = loadImage("./assets/cannonball.png");
    World.add(world, this.body);
  this.trajetory = [];
  }

  shoot() {
    var newAngle = cannon.angle - 28;
    newAngle = newAngle *(3.14/180)
    var velocity = p5.Vector.fromAngle(newAngle);
    velocity.mult(0.5);
    Matter.Body.setStatic(this.body, false);
    Matter.Body.setVelocity(this.body, {
      x: velocity.x *(180/3.14), y: velocity.y * (180/3.14)});
  }

  display() 
  {


    var pos = this.body.position;
        push();
    imageMode(CENTER);
    image(this.image, pos.x, pos.y, this.r, this.r);
    pop();

    if(this.body.velocity.x>0 && this.body.position.x>10){
      var position =[pos.x,pos.y];
      this.trajetory.push(position);
  
    }

    for(var k=0;k<this.trajetory.length;k++){

      image(this.image,this.trajetory[k][0],this.trajetory[k][1],5,5);
    }

  }

}
