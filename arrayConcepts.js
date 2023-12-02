const num = [3, 4];
console.log(num)
console.log(num.length)
console.log(num[1])

//add an element end of an Array
num.push(7, 8)
console.log(num)

//add an element at beginning
num.unshift(1, 2)
console.log(num)

//add an element at middle
num.splice(4, 0, '5, 6')
console.log(num)

//how to print all values of an Array

//for-in loop
for(const key in num){
    const element = num[key]
    console.log(element)
}

//1. Primitive type: find the element in an array:
const s = [1, 2, 3, 1, 4]
console.log(s.indexOf(4))
console.log(s.indexOf(8))
console.log(s.indexOf('1'))

//second occurance of 1
console.log(s.indexOf(1, s.indexOf(1)+1))//(expect, startFrom)

console.log(s.indexOf(3)!==1)//true
console.log(s.includes(4))

//2. Non-primitive type (ref type):
//Array can have objects
//includes compare memory address. Hence, false

const course = [
    {id : 1, name1 : 'Java'},
    {id : 2, name2 : 'JavaScript'}
];

// console.log(course.includes('Java'))

const c1 =course.find(function(courseName){
    return courseName.name1==='Java';
})
console.log(c1)
console.log(c1.id)
console.log(c1.name1)

//index of 

const c2 =course.findIndex(function(courseName){
    return courseName.name1==='Java';
})

console.log(c2)