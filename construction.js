//constructor function -> create objects
//naming convention: Pascal notation -> OneTwoThreeFour


function circle(radius){

    this.radius=radius;//pointing to current object
    //radius1=radius;

    this.draw=function(){
        console.log('draw', radius);
    }
}

//to call constructor function use new keyword

const a = new circle(3);
console.log(a.radius);
a.draw();