let myDate = new Date();
console.log(myDate);

console.log(myDate.toString());

console.log(myDate.toDateString());

console.log(myDate.toISOString());

console.log(myDate.toJSON());

console.log(myDate.toLocaleDateString());

console.log(myDate.toLocaleString());

const myCreatedDate = new Date(2024,0,24)
const myCreatDate = new Date(2024,0,24,5,3)
console.log(myCreatedDate.toLocaleString());
console.log(myCreatDate.toLocaleString());

const createDate = new Date("01-21-2024");
console.log(createDate.toLocaleString());

let myTimeStamp = Date.now();

console.log(myTimeStamp);
console.log(createDate.getTime());

console.log(Math.floor(Date.now()/1000));


const newDate = new Date();

newDate.toLocaleString("default",{
    weekday: "long"
})

