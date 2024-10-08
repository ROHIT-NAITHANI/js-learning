const mynum= [1,2,3]
const totole = mynum.reduce((acc, curval) => {
    return acc + curval
}, 0)
console.log(totole);
