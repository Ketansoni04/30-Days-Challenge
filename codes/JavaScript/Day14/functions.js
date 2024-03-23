// function addTwoNumber(number1, number2) {
//     console.log(number1 + number2);
// }
// function addTwoNumber(number1, number2) {
//     let result = number1 + number2
//     return result
// }
function addTwoNumber(number1, number2) {
   if(!undefined){
    console.log("Enter  a valid number");
    return
   }
   return number1 + number2
}

addTwoNumber(5,"a");
const result = addTwoNumber(5)

function loginUserMessage(username = "kannu"){
    // if(!username){
    //     console.log("Enter a valid name ");
    //     return
    // }    
    return `${username} just loggedin`
}

console.log(loginUserMessage("ketan"));//  ketan just loggedin
console.log(loginUserMessage(""));// just loggedin
console.log(loginUserMessage()); //kannu just loggedin
