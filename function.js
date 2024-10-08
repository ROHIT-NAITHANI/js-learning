// function saymyname() {
//     console.log("rohit");
    
    
// }

// saymyname()

// // function addTwoNumber(num1,num2){
// //     console.log(num1 + num2);
// //     return result;
    
// //   }

// function addTwoNumber(num1,num2){
//   let result = num1 + num2;
//   return result;
  
// }
//  const result = addTwoNumber(1,2);


//  console.log("result" , result );

//  function loginUserMessage(username){
//     if(username === undefined)
//     {
//       console.log("Pls enter a username");
//       return
      
//     }
//     return`${username} just logged in`
//  }
//  console.log(loginUserMessage("rohit"))


//  ++++++++++++++++++++++           part2         ++++++++++++++++++++++++++


// function calculateacaetprice( val1 , val2 ,...num1 ){
//   return num1;
// }
// console.log(calculateacaetprice(2,3,4));

const user = {
  username : "rohit ",
  price: 199
}


function  handleObject(anyobject){
  console.log(`username is ${anyobject.username} prise is ${anyobject.price}`);
  

}
handleObject(user)

handleObject({username: "sam",
  price:300
})


const mynewarry = [200,300,400 ]

function rerune2value(getArray){
   return getArray[1]
}

console.log( rerune2value(mynewarry));
