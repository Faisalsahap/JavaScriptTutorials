//FactoryFunctions -> produce same type objects
//naming convention: camel case -> oneTwoThreeFour
//like constructor in Java


function createCircle(radius){

    //const circle={
        return{
        //radius:radius,
        //draw:function(){
            radius,
            draw(){
            console.log('draw');
        }
    }
    // return circle;
}

const c1 = createCircle(1);
console.log(c1.radius);
c1.draw();

const c2 = createCircle(5);
console.log(c2.radius);
c1.draw();