//Arithmetic

let x = 3;
let y = 2
//console.log(x+y)
console.log(x ** y)

//++ and --
console.log(x--);
console.log(x)

//assignment

let z = x+10;
console.log(z)
y*=10;
console.log(y)

//comparison

let a = 10;
console.log(a<10)
//strict equal/comparison; type and value will be checked
console.log(a===10)

//lose equality; check only value;
console.log("2" == 2)
console.log(true == 1)

//ternary operator

let points = 100;
let typeMembership = points > 10 ? 'gold' : 'silver'
console.log(typeMembership)

//logical

//1. AND (&&)

let highIncome = true;
let goodCreditScore = false;
//let eligilbility = highIncome && goodCreditScore;
//console.log(eligilbility)


//OR (||)
let eligilbility = highIncome || goodCreditScore
console.log(eligilbility)

//NOT (!)
let isActive = true;
console.log(! isActive)
console.log(! (10>5))

//logical operators with non boolean value
//Falsy value: undefined, null, '', NaN, 0, false
//Truthy value: Fa is a non falsy value.
let d = 'Fa'
let e = 5;
console.log(d || e)
//once finds the truthy value, it will stop.
console.log(d || e || 4)
console.log(false || undefined)

//Bitwsise

//g = 000001;
//h = 000010;
//u = 000011; | -> 3
//y = 000000; & -> 0

console.log(1 | 2)
console.log(1 & 2)

//operator precedence:
// precedence (/*+-

//swap two values:

let aa = 10;
let bb = 20;
let cc = aa;
    aa = bb;
    bb = cc;

console.log(aa + " " + bb);


