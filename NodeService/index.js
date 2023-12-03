//Perks:
//1. We can create a dummy api endpoints
//2. And we can write tests.

//Pre-requisite:
//1. create a folder
//2. npm init -> fill description & author (package.json will be created)
//3. npm install express (web service framework of node.js) (DO NOT DELETE node_modules)


const express = require('express');
const app = express();

//1. create user data
const userInfoData = [
    {
    id:1,
    firstname: 'Mohammed',
    lastname: 'Faisal',
    phone: 1234
    },

    {
        id:2,
        firstname: 'Faisal',
        lastname: 'Sahap',
        phone: 5678
        },
         {
    id:3,
    firstname: 'Umar',
    lastname: 'Asif',
    phone: 1111
    },

    // {
    //     "page": 2,
    //     "per_page": 6,
    //     "total": 12,
    //     "total_pages": 2,
    //     "data": [
    //         {
    //             "id": 7,
    //             "email": "michael.lawson@reqres.in",
    //             "first_name": "Michael",
    //             "last_name": "Lawson",
    //             "avatar": "https://reqres.in/img/faces/7-image.jpg"
    //         },
    //         {
    //             "id": 8,
    //             "email": "lindsay.ferguson@reqres.in",
    //             "first_name": "Lindsay",
    //             "last_name": "Ferguson",
    //             "avatar": "https://reqres.in/img/faces/8-image.jpg"
    //         },
    //         {
    //             "id": 9,
    //             "email": "tobias.funke@reqres.in",
    //             "first_name": "Tobias",
    //             "last_name": "Funke",
    //             "avatar": "https://reqres.in/img/faces/9-image.jpg"
    //         },
    //         {
    //             "id": 10,
    //             "email": "byron.fields@reqres.in",
    //             "first_name": "Byron",
    //             "last_name": "Fields",
    //             "avatar": "https://reqres.in/img/faces/10-image.jpg"
    //         },
    //         {
    //             "id": 11,
    //             "email": "george.edwards@reqres.in",
    //             "first_name": "George",
    //             "last_name": "Edwards",
    //             "avatar": "https://reqres.in/img/faces/11-image.jpg"
    //         },
    //         {
    //             "id": 12,
    //             "email": "rachel.howell@reqres.in",
    //             "first_name": "Rachel",
    //             "last_name": "Howell",
    //             "avatar": "https://reqres.in/img/faces/12-image.jpg"
    //         }
    //     ],
    //     "support": {
    //         "url": "https://reqres.in/#support-heading",
    //         "text": "To keep ReqRes free, contributions towards server costs are appreciated!"
    //     }
    // }
]

//2. create an msg endpoints
app.get('/api/info', function(req, res){
    res.send('Hey welcome!!! This is API creation using node.js express.');
})

//1. create an req, res endpoints
app.get('/api/users', function(req, res){
    res.json(userInfoData);
})


//3. get a user endpoints
app.get('/api/users/:id', function(req, res){
    const id = req.params.id;
    const user = userInfoData.find(user=> user.id==id)

    if(user){
        res.json(user)
    }
    else{
        res.send('User is not found')
    }
})


// app.get('/api/users/data', function(req, res){
//     res.json(userInfoData);
// })

// //4. get a user(reqres.in) endpoints
// app.get('/api/users/data/:id', function(req, res){
//     const id = req.params.id;
//     const user = userInfoData.find(user=> user.data.id==id)

//     if(user){
//         res.json(user)
//     }
//     else{
//         res.send('User is not found')
//     }
// })

//starting the node server
//node index.js -> node server is started. Now you can call your API.
const PORT = 3000;
app.listen(PORT, function(){
    console.log('node server is started. Now you can call your API.')

})

//call the api
//1. Viabrowse localhost:3000/api/info; localhost:3000/api/users/id
//2. Go to postman, paste the url localhost:3000/api/users/id, and verify
//3. Go to terminal -> curl localhost:3000/api/users