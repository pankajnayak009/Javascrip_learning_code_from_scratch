

// They working only on simple function call with hoisiting

function_hoisting(35);

function function_hoisting(age){
console.log("function call with hoisiting : " + age);

 }

 sayHello(); // Works because function declarations are hoisted

 function sayHello() {
     console.log("function call with hoisiting = "+"Hello, World!");
 }

// Key Fixes:
// Use let nam; to declare the variable first before assigning a value.
// Do not use let nam = ; (this is invalid syntax).
// Avoid accessing let before declaration to prevent a ReferenceError.

console.log("Value is undefined  becouse Variable is hoising on upword but not the value = "+age);
var age = 24;












