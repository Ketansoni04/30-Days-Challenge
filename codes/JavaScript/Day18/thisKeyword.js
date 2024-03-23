const student = {
    studentName : "Ketan",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.studentName} , welcome to the site `);
        console.log(this);
    }
}

// student.welcomeMessage()
// student.studentName = "kannu"
// student.welcomeMessage() 

// console.log(this); // {} - in node enviroment // in browser output is a object named Window 

// function chai(){
//     const name = "Ketan"
//     console.log(this.name); // undefined
//     // console.log(this);
// }


// chai()

const chai = function(){
    console.log(this); 
} 
// const chai = () => {
//     console.log(this); // {} 
// } 

// chai()


