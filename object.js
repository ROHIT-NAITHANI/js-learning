//  singleton 
// object literals

// const mySym = Symbol("key1")
 
// const Jsuser = {
//     name: "Hitesh",
//     [mySym]: "mykey1",
//     age: 18,
//     location: "jaipur",
//     isloggerin : false


// }


// console.log(Jsuser["age"]);

// console.log(Jsuser.age);
// console.log(Jsuser[mySym]);

// Jsuser.age = 35;

// console.log(Jsuser);

// Jsuser.greeting = function() 
// {
//     console.log(`heelo js user ${this.name}`);
// }

// console.log(Jsuser.greeting());
// +++++++++++++++       part 2            +++++++++++++++++

// const user = new Object()
// const googleUser = {}

// googleUser.id = "123bc"
// googleUser.name = "samye"
// googleUser.isLoggedIn = false

// // console.log(googleUser);

// const regularUser = {
//     email: "rohitnai@123",

//     fullname: {
//         userfullname: {
//             firstname: "rohit",
//             lastname : "naithani"
//         } 
//     }
// }

// console.log(regularUser.fullname.userfullname.firstname);

// const obj1 = {1: "a", 2 : "b"}
// const obj2 = {3: "a", 4 : "b"}

// // const obj3 = {obj1 , obj2}
// // Object3 = Object.assign({}, obj1, obj2)
// // Object3 = Object.assign( obj1, obj2)
// Object3 = {...obj1, ...obj2}
// // console.log(Object3);

// const users = [{
//     id :1,
//     email: "rohit@gmail.com"
    
// },
// {
//     id :1,
//     email: "rohit@gmail.com"
    
// },
// {
//     id :1,
//     email: "rohit@gmail.com"
    
// },
// {
//     id :1,
//     email: "rohit@gmail.com"
    
// },
// {
//     id :1,
//     email: "rohit@gmail.com"
    
// },
// ]

// console.log(users[1].email);
 
// console.log(Object.keys(regularUser));




// ++++++++++++++++         part3        +++++++++++++++

const course  = {
    name : "jshindi",
    prise: "99",
    courseTeacher: "rohit" 
}
const {courseTeacher} = course

console.log(courseTeacher);
