
// no problem -> true or false
// console.log(2 > 1);
// console.log(3 < 5);
// console.log(1 >= 1);
// console.log(2 <= 2);
// console.log(21 == 21);
// console.log(2 != 1);

// not recommended to compare values with differnet data type
console.log("2" > 1) // true
console.log("02" > 1) // true

console.log(null > 0);  // false
console.log(null == 0); // false
console.log(null <= 0); //true

console.log(undefined > 0);  // false
console.log(undefined == 0); // false
console.log(undefined <= 0); // false

// strict check -> check  for the same data types first
console.log(2 === 2);