class Vec {
    constructor(x,y){
        this.x = x;
        this.y= y;
    }
    plus(anotherVec){
    return new Vec(this.x+anotherVec.x,this.y+anotherVec.y);
    }
    minus(anotherVec){
    return new Vec(this.x-anotherVec.x,this.y-anotherVec.x);
    }
    getLengthVector(){
        return Math.sqrt(this.x * this.x + this.y * this.y);
    }
}

let vec1= new Vec(2,3);
let vec2= new Vec(5,6);
console.log(vec1.plus(vec2));
console.log(vec1.minus(vec2));
console.log(vec1.getLengthVector());

