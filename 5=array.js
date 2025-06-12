// function with Array
console.log("function with Array");
let arr_13 = [10,20,30,40,50];

function get_function_2(arr_13){
   let len = arr_13.length;
    let sum = 0;
    for (let index = 0; index <len; index++) {
        sum += arr_13[index];
    }
      return sum;
}

let totalsum = get_function_2(arr_13);
console.log(totalsum);


//  clean code  with arrow function
console.log("clean code  with arrow function");
function get_function_3(arr = [10, 20, 30, 40, 50]) {
return arr.reduce((sum, num) => sum + num, 0); 
}

let totalsum_2 = get_function_3(); // No argument passed, uses default array
console.log(totalsum);


// Using reduce for cleaner code and short code also
console.log("Using .reduce for cleaner code");
let arr_14 = [10, 20, 30, 40, 50];

let sum_14 = arr_14.reduce((acc, num) => acc + num, 0); // Here, 0 is the initial value of accumulator.

console.log(sum_14); // 150 







// let numbers = [1,2,3,4,5];
// numbers.forEach(num => num*2);
// console.log(numbers);

// let numbers = [1, 2, 3, 4];
// numbers.forEach(num => console.log(num * 2));

// let number_s = [1, 2, 3, 4, 5];
// let doubledNumbers = number_s.map(num => num * 2);
// console.log(doubledNumbers);


console.log("we are using foreach loop with array");
let numbers_3 = [1, 2, 3, 4, 5];
numbers_3.forEach((num, index, arr) => {
    arr[index] = num * 2;
});
console.log(numbers_3);


console.log("we are yosing for_in Loop with array"); 
let person = { Name: "Pankaj", age: 24, city: "Delhi" };

for (let key in person) {

 console.log(`${key}: ${person[key]}`);

}

console.log("we are using for_of loop with array");
let fruits_F = ["apple", "banana", "cherry"];
for (let fruit of fruits_F) {
 console.log(fruit);
}





// Arrays
// array literals

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log("this is literal array = " + arr);

const fruits_1 = ["apple", "banana", "orange"];
console.log(fruits_1);

const mixed = [1, "apple", true, { name: "John" }];
console.log(mixed);

// array constructurs
let arr_2 = new Array(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
console.log("this is a constructor numbers  array = " + arr_2);

const arr_fruits = new Array("Apple", "mango", "orange", "kiwi", "Bananna");
console.log("this is a constructor string array = " + arr_fruits);

const arr_empty = new Array();
console.log("This  is  a Empty  array = " + arr_empty);

// Accesing Array elements

const fruits = ["Apple", "Mango", "Orange", "kiwi", "Bananna"];

console.log("I want to eat this fruit = " + fruits[2]);
console.log("I want to eat this fruit = " + fruits[fruits.length - 1]);

const index = 3;
console.log("I want to eat this fruit = " + fruits[index]);

// Insertion in Array
const fruits_2 = ["Apple", "Mango", "Orange", "kiwi", "Bananna"];

fruits_2.pop(1);
console.log(
  "removw a last element  in a Array with fruits.pop(1); = " + fruits_2
);

fruits_2.push("Grapes");
console.log(
  " Insertion a last element  in a Array with fruits_2.push(Grapes); = " +
    fruits_2
);

fruits_2.shift();
console.log(
  "Removes the first element from an array fruits_2.shift(); = " + fruits_2
);

fruits_2.unshift("Pineapple");
console.log(
  "Adds the first element from an array with fruits_2.unshift(Pineapple); = " +
    fruits_2
);

// Insertion at Random Index
const fruits_3 = ["Apple", "Mango", "Orange", "Kiwi", "Bananna"];

// Insert "Vanilla Cake" at index 0
fruits_3.splice(0, 0, "Vanilla Cake");

console.log("After insertion with splice(0, 0, 'Vanilla Cake') = " + fruits_3);

fruits_3.slice(0, 3);
console.log(
  "Removes or replaces elements with fruits_2.splice(0, 0, 'Vanela _Cake'); = " +
    fruits_2
);

let arr_no = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
const fruits_4 = ["Apple", "Mango", "Orange", "Kiwi", "Bananna"];

console.log("Merges two or more arrays = " + arr_no.concat(fruits_4));

let arr_no_2 = [1, 2, 3];
console.log("Finds the first index of an element = " + arr_no_2.indexOf(2));
console.log("Checks if an element exists = " + arr_no_2.includes(2));

fruits_4.splice(1, 2, "Vanilla Cake");
console.log(fruits_4);

let arr_5 = [2, 4, 8, 12, 14, 16, 18, 20];
// console.log("Applies a function to each element = "+arr_5.map(x => x * 2));
let ans_map = arr_5.map((number) => {
  return number ** 2;
});

console.log(ans_map);

let filter_1 = arr_5.filter((number) => {
  return number > 4;
});

console.log(filter_1);

let arr_no_6 = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
console.log("Reverses the array = " + arr_no_6.reverse());
let arr_no_7 = [50, 20, 40, 90, 100, 30, 60, 70, 80];
console.log("Sorts the array = " + arr_no_7.sort());

let anss = arr_no_7.reduce((acc, curr) => {
  return acc + curr;
}, 0);

console.log(anss);

let arr_no_9 = [50, 20, 40, 90, 100, 30, 60, 70, 80];

arr_no_9.sort((a, b) => b - a);
console.log("Sorts the array in decending = " + arr_no_9.sort());

let arr_no_10 = [50, 20, 40, 90, 100, 30, 60, 70, 80];

// Sort in descending order
arr_no_10.sort((a, b) => b - a);

console.log("Sorted array in descending order = " + arr_no_10);

let arr_11 = ["Hello", "World"];
console.log(arr_11.join(" "));

// Loops for_each , for_in, for_of

let arr_12 = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

arr_12.forEach((value, index) => {
  // console.log("Number :",value ,"index",index);
  console.log("index", index, "Number :", value);

});

// for in loop 

console.log("This is a Data + Function, which makes an Object!");

let obj = {
  Name: "pankaj",
  age: 24,
  gender: "Male",
  salary: 20000,
  get_function: function () {
    console.log("This is my first function inside the obj");
  }
};

// Looping through object properties
console.log("Looping through object properties")
for (let key in obj) {
  console.log(key, ":", obj[key]);
}
// Calling the function inside the object
obj.get_function();