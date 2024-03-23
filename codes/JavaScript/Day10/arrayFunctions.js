const someArray = ["ketan","nikku","arnab","vishu","krishu"];
const anotherArray = ["jalebi","rasgula","gulabJamun","mishtiDoi"]

// someArray.push(anotherArray)
// ['ketan','nikku','arnab',vishu','krishu',[ 'jalebi', 'rasgula', 'gulabJamun', 'mishtiDoi' ]]
// console.log(someArray);  
// console.log(someArray[5,0]);

// someArray.concat(anotherArray);  // return a new array --merge elements of two array --
// [
//     'ketan',     'nikku',
//     'arnab',     'vishu',
//     'krishu',    'jalebi',
//     'rasgula',   'gulabJamun',
//     'mishtiDoi'
//   ] 

// console.log(someArray); 

const anotherArray2 = [...someArray,...anotherArray] // spread all element // merge all elements of array 
// console.log(anotherArray2);    [
//                                     'ketan',     'nikku',
//                                     'arnab',     'vishu',
//                                     'krishu',    'jalebi',
//                                     'rasgula',   'gulabJamun',
//                                     'mishtiDoi'
//                                 ]

const one_Array = [1,2,[4,5,6],7,[8,[9,10]]]
 const real_One_Array = one_Array.flat(Infinity)  // [
//                                                     1, 2, 4,  5, 6,
//                                                     7, 8, 9, 10
//                                                 ]
console.log(real_One_Array);


console.log(Array.from("Ketan")); // [ 'K', 'e', 't', 'a', 'n' ]

console.log(Array.from({name : "Ketan"})); // interesting    


const score1 = 100;
const score2 = 200;
const score3 = 300;
console.log(Array.of(score1,score2,score3));

