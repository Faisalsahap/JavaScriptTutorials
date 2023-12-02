//Math function

function getRandomArbitory(min, max){
    return Math.random() * (max -min) + min;
}

let x = getRandomArbitory(3, 8)
console.log(x)
console.log(Math.floor(x))
