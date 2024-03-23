// singketon 

const container = {
    "name" : "Ketan",
    age : 21,


}; 

// Object.create 

const mySym = Symbol("key1")

const newVar = {
    location: "Jammu and Kashmir",
    [mySym]: "mykey1", 
    email: "ketan@123gmail.com",
    isLoggedIn : false,
    lastLoggedIn : ["Monday","WednesDay"]
}

// console.log(newVar.email);
// console.log(newVar["email"]);
// console.log(newVar[mySym]);

// newVar.email = "ketan@12343gmail.com"    
// Object.freeze(newVar);
// newVar.email = "ketan@156gmail.com"

console.log(newVar);

newVar.greetings = function (){
    console.log("Hello");
}

console.log(newVar.greetings());

newVar.greetingsTwo = function (){
    console.log(`Hello  ${this.location}`);
}

console.log(newVar.greetingsTwo());
