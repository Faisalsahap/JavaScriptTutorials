//for loop

for(let i =1; i<=10; i++) {
    console.log(i);
    if(i%2==0) console.log("this is JS")
}

//while loop

let i =1;
while(i<=10){console.log(i)
i++;
}

//do while loop -> always execute atleast once

let p =1;
do{
    console.log(p)
    p++
}
while(p<=10)

//for - in loop; fetch the value from object 

const person = {
    name1 : "Naveen",
    age : 25
}

for(let key in person) console.log(key, person[key])

//Array

let colors = ["orange", "white", "green"];
for(let index in colors) console.log(index, colors[index])

//for - of loop; used to get the values from an array;

for(let col of colors) console.log(col)

//break and continue

let k =0;
while(k<=10){
    if(k===5) 
    break; 
    console.log(k); 
    k++;}
