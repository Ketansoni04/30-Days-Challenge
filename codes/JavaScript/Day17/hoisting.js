function one(){
    const name = "Ketan"
    function two(){
        const website = "mdn"
        console.log(name);
    }
    // console.log(website); // cannot acces out of the two-function

    two()
}

one()

if(true){
    const name = "Ketan";
    if(name === "Ketan"){
        const id = " dfghj23456"
        console.log(name + id);
   }

//    console.log(id); // cannot acces id out of if scope
}

// console.log(name); // cannot acces nameS out of if scope
console.log(addOne(5)) // 6
function addOne(num){
    return num + 1
}

// console.log(addTwo(5)); // Cannot access 'addTwo' before initialization
const addTwo = function(num){  // addTwo - it is called as expression in javaScrit variable here hold a function
    return num + 2
}