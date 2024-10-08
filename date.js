// let myDate = new Date();
// console.log(myDate.toString());
// console.log(myDate.toLocaleDateString());
// console.log(typeof myDate);

// let newdate 

fetch('https://jsonplaceholder.typicode.com/users')
.then((Response)=>{
    return Response.json()
})
.then((data)=>{console.log(data);
})
.catch((error)=>{console.log(error);
})

