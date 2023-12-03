const num = [1, 2, 3, 4]

//remove the last element
let last = num.pop();
console.log(last)
console.log(num)

//remove at beginning
const first = num.shift();
console.log(first)
console.log(num)

//remove at middle
const middle = num.splice(1, 1)
num.splice(0)
console.log(middle)
console.log(num)

//adding new
num.push(5, 6, 'a', 'b', 7, 8)
console.log(num)

//Blank array declaration
//1. using let
//const num1 = [2, 3, 4] can't empty a const array, instead use let
let num1 = [2, 3, 4]
let another = num1;
num1=[]
console.log(num1)
console.log(another)// another remaining the same.

//2.using length (#1)
const num2 = [5, 7, 8]
let another2 = num2;
num2.length=0;
console.log(num2)
console.log(another2)// it emptied both

//3. using splice
const num3 = [5, 7, 8]
let another3 = num3;
num3.splice(0, num3.length)
console.log(num3)
console.log(another3)//it  also emptied both

//4. using pop (b don't prefer 'cas it will create a performance issue)
const num4 = [5, 7, 8]
let another4 = num3;
while(num4.length>0)
num4.pop();
console.log(num4)
console.log(another4)//it  also emptied both






