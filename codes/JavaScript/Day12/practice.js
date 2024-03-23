const name = new Object // singleton

name.id = "123abc"
name.fullname = "ketan sochni"
name.isLoggedIn = false;

console.log(name);

const myName = {
    registoredName: {
        fullName : {
            firstName : "Ketan",
            secondName: "soni"
        }
    },

    email: "ketan500@gmail.com"
} 

console.log(myName.registoredName.fullName.firstName);

const data1 = {1: "a",2: "b"}
const data2 = {3: "a",2 : "b"}

// const data3 = Object.assign({},data1,data2)
// 

const  data3 = {...data1,...data2};

const api = [
    {
        id : "@ER$67",
        email: "ketan234@gmail.com"
    },
    {
        id : "@ER$67",
        email: "ketan234@gmail.com"
    },
    {
        id : "@ER$67",
        email: "ketan234@gmail.com"
    },
    {
        id : "@ER$67",
        email: "ketan234@gmail.com"
    },
]

console.log(api[1].email);
console.log(Object.keys(myName));
console.log(Object.values(myName));
console.log(Object.entries(myName));

console.log(myName.hasOwnProperty("email"));

