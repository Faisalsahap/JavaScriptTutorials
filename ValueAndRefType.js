//Value type
//number, string, boolean, symbol, undefined, null

//Ref type
//Array, Object, Function(object)

//Value Type (ref won't affect);
let x=10;
y=x;//y=10
x=20;
console.log(x)
console.log(y)


//Ref type (objects are copied by ref, not by values)
let p = {value:10}
let q=p;//
console.log(q.value)
console.log(p.value)
p.value=30;
console.log(q.value)
console.log(p.value)



