/*
2. Write a function called "multiplyNumbers" that takes two numbers as arguments and returns their product. Use function expressions to define the function and call the function before it is declared to demonstrate hoisting.
*/
multiplyNumbers(4,5);
console.log(product);

let product = function multiplyNumbers(a,b){
    return a*b;
}

