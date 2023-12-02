

//Data Types 

//1. Primitive - String, Number, Boolean, Undefined, Null
//2. Reference types - Object, Array, Functions

// var - older one; let - new one
//single or double quote 

//1. Primitive DT:
let myName = "Mohammed Faisal";
let age = 29
age = 28
let salary = 12.33
let isActive = true;
let wheels = undefined;
let price;
let model = null;

const dob = 'May 07,1995'
//dob = "Jun 04, 1990"

console.log(myName + ", " + age );
console.log(dob);

//JavaScript - Dynamic type

let value = "Naveen";
value = 70;

console.log(value);

//2. Reference DT:

//Object
let user = {name1:'Mohan' ,  age: 30};
console.log(user)


//Using these properties - dot notations:

console.log(user.name1);
console.log(user.age);
user.age = 31;
console.log(age)
console.log(user.name1 + ", " + user.age);

//Using Bracket Notation:

user['name1'] = 'Efaz';
user['age']= 2;
console.log(user.age)
console.log(user.name1);
console.log(user.name1 + ", " + user.age);


//Arrays - List of objects (Always Dynamic)

let language = ['Java', 'Javascript'];
language[2] = 'Golang' 
console.log(language)
console.log(language.length)
console.log(language[1])
console.log(language[3])

//Functions

//zero param
function getTitle(){
    console.log('Zero param function')

}
getTitle();

//parameterized
console.log('parameterized function')
function getName(name, age){
    
    console.log("Hello" + " " + name + ', ' + age)

}

getName('Faisal', 29)
getName("Naveen")
getName()

//return the function:

function add(num1,num2){

return num1 + num2;
}

let sum = add(3, 4)
console.log(sum);

function sqrt(number){
    let result = number * number;
    return result;
}

console.log(sqrt(10));

