// // // const fruits = ["apple", "banana", "mango"];
// // // console.log(...fruits) // spread operator 

// // const person = { name: "Ali", age: 25 };
// // const copiedPerson = {...person, job: "software Engineer", City: 'Mombasa' };

// // console.log(copiedPerson); // { name: "Ali", age: 25 }

// function sum(a, b, c) {
//   return a + b + c;
// }
// let numbers = [20, 30, 40];
// console.log(sum(...numbers))

let numbers = [20,30,40];
// console.log(numbers)
let copyOfNumbers = [numbers, [35,18,22,],[19,21,55]];
console.log(copyOfNumbers[0][2])

