/*
1. Write a function called "addNumbers" that take two numbers as arguments and returns their sum. Call the function before it is declared to demonstrate hoisting.
*/
let sum = addNumbers(3,4);
console.log(sum);

function addNumbers(a,b){
    return a+b;
}
