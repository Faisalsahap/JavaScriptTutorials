//inside the object no need to write function

const circle={
    radius:1,
    color:'red',
    log(){

        console.log('log', this.radius)

    }
}

console.log(circle)

//add more properties in circle objects
//outside  object you have to write function

circle.price=100;
circle.isPresent=true;
circle.log();
circle.draw=function(){}

console.log(circle)

//delete properties from circle objects

delete circle.price;
console.log(circle)