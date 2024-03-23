
// scope of that program
// global scope
var c = 30
const b = 200
if (1) { // local scope
    let a = 120
    const b = 10
    var c = 300 // redeclare here
    // c = 300 again same problem
    console.log(b);// 10
    
} 

// console.log(a); cannot access
// console.log(b); // cannot access
console.log(c);  // 300


// global scope in window console is diffrenet from the glocal scope we run in local environment with node in console