
// const addTwo = (num1,num2) => {
//     return num1 + num2
// } 

// const addTwo = (num1,num2) => num1 + num2
const addTwo = (num1,num2) => (num1 + num2) // best practice

// const addTwo = (num1,num2) => {name : "Ketan"} // undefined
// const addTwo = (num1,num2) => ({name : "Ketan"}) // { name: 'Ketan' }

console.log(addTwo(5,3));
 const myArray = [6,3,4,2,4]

 myArray.forEach(function() {})
 myArray.forEach(() => {})
 myArray.forEach(() => (21)) // here () => () error must return 

