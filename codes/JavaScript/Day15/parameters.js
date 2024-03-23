// function calculateCartPrice(...num1) {  // ...num1 herer rest operator
//     return num1
// }

// console.log(calculateCartPrice(100,200,500,2000)) // [ 100, 200, 500, 2000 ]

function calculateCartPrice(var1,var2,...num1) {  // ...num1 herer rest operator
    return num1
}

console.log(calculateCartPrice(100,200,500,2000)) // [ 100, 200, 500, 2000 ]

const student = {
    studentname : "Ketan",
    price: 240
}

function handleStudent(anyobject) {
    console.log(`Studentname name is ${anyobject.studentname} and price is ${anyobject.price}`)
}

handleStudent(student)

handleStudent({
    studentname : "kannu",
    price : "free"
})

