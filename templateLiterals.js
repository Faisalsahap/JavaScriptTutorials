const msg1= 'This is javascript code'
const msg2 = "This is \n" 
                + "'javascript' code"

console.log(msg2)

//Literals
//object={}
//boolean = true, false
//String = ' ', ""
//ES6: Template Literals -> Back Tick Chars -> ``

let product = function(){
    return 'Apple'
}
let personName = 'Asif'
const mailBody = `Hi ${personName} ${2270+3},
This is Faisal here. Thanks for adding me to your group.

"Have a nice day!!!". Please have your ${product()}.

Regards,
Mohammed Faisal`
console.log(mailBody)