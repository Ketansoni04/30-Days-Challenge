const name = "ketan"
const Day = 5;

console.log(`Hello my name is ${name} and this is Day ${Day}`);
const id = new String("ketan-soni-ks")

console.log(id.__proto__);

console.log(id.length)
console.log(id.toUpperCase())
console.log(id.charAt(5));
console.log(id.indexOf("n"))
console.log(id.substring(0,4));


const anotherString = id.slice(-5,7)
console.log(anotherString);

const newString = "   ketan   ";
console.log(newString.trim());
const values =  id.  split("-");
console.log(id.split("-"));


const url ="https://ketan.com/ketan%20soni"

console.log(url.replace("%20","-"));
console.log(id.includes("ketan"));







  