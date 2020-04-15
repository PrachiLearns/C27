class ConstraintMake{
    constructor(bodyA,bodyB){
        var options={
            bodyA:bodyA,
            bodyB:bodyB,
            length : 1,
            stiffness:0.05
        }
        this.chain = Constraint.create(options);//READ 
        World.add(world,this.chain);
    }
    display(){
        strokeWeight(4);
        var pointA= this.chain.bodyA.position;//READ
        var pointB=this.chain.bodyB.position;//READ
        line(pointA.x,pointA.y,pointB.x,pointB.y);//READ
    }
}