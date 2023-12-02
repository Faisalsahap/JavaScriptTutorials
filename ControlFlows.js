//if-else
//one single statement doesn't need {}

let hour = 10;
if(hour>=6 && hour<12){ 
    console.log('Good Morning!!!')
    console.log('It is 11 AM Now')}
else if(hour>=12 && hour<18) console.log("Good Afternoon!!!")
else console.log("Good Night!!")


//switch

let role = 'guest';
switch(role){
    case 'guest':
        console.log('guest role')
        break
        case 'admin':
        console.log('admin role')
        break
        case 'user':
        console.log('user role')
        break
        default:
        console.log('No user found')
        break
    }

//role by using if-else

if(role==='admin') console.log('Admin role')
else if(role === 'user') console.log('User role')
else if(role=== 'guest') console.log('Guest role')
else console.log('No user found')

