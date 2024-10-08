for (let num = 0; num <= 10; num++) {
    const element = num;
    //console.log(element);
    if (element == 5) {
        // console.log("5 is best");
        
        
    }
    
    
    for (let i = 0; i <= 10; i++) {
      //  console.log(`outer loop value ${i}`);
        
       for (let j = 0; j <= 10; j++) {
       // console.log(`inner lopp value ${j} and innner loop value ${i}`);
        // console.log(i + '*' + j+ '=' + i*j)
        
       }
        
    }
   
}
let myarry = ["flash ", "batman", "spiderman"]
//console.log(myarry.length);


for (let index = 0; index < myarry.length; index++) {
    const element = myarry[index];
   // console.log(element);
    
    
}

// for (let index = 1; index <= 20; index++) {
//     if (index == 5) {
//         console.log(`Detected 5`);
//         break
        
        
//     }
//     console.log(`vlaue of  index is ${index}`);
    
    
// }
for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log(`Detected 5`);
        continue
        
        
    }
    console.log(`vlaue of  index is ${index}`);
    
    
}