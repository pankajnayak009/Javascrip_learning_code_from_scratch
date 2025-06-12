// What is a Promise in JavaScript?
// A Promise in JavaScript is an object that represents the eventual completion
// (or failure) of an asynchronous operation and its resulting value.

// 🧠 Why Use Promises?
// Promises allow you to:
// Write cleaner async code (instead of deeply nested callbacks — "callback hell").
// Handle success or failure of async operations like fetch(), file loading, timers, etc.

// 🔐 Promise States
// State	     Description
// pending	     Initial state, operation not completed
// fulfilled	 Operation completed successfully
// rejected	     Operation failed

let promise = new Promise((resolve, reject) => {
  let success = false;
  if (success) {
    resolve("promise fulfilled");
  } else {
    reject("Error occurred");
  }
});

promise
  .then((message) => {
    console.log("then ka message is = " + message);
  })
  .catch((error) => {
    console.log("Error = " + error);
  })
  .finally((message) => {
    console.log("i am final block ");
  });

// Multiples promises

let promise1 = new Promise((resolve, reject) => {
  setTimeout(resolve, 1000, "First");
});
let promise2 = new Promise((resolve, reject) => {
  setTimeout(resolve, 2000, "Second");
});
let promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 4000, "Third");
});

Promise.all([promise1, promise2, promise3])
  .then((values) => {
    console.log(values);
  })

  .catch((error) => {
    console.error(error);
  });
