const circle={

    radius:2,
    draw(){
        console.log('draw')
    }
}

//1. for - in 
const another={}
console.log(another)
for (let key in circle)
another[key]=circle[key];
console.log(another)

//2. Object.assign method
const newWay1 = Object.assign({}, circle); 
console.log(newWay1)
newWay1.draw();

const newWay2 = Object.assign({color:'red'}, circle); 
console.log(newWay2)
newWay2.draw();


//3. spread ... operator
const easiest = {...circle}
console.log(easiest)
easiest.draw();