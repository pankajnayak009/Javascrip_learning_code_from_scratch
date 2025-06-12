//  What is Async/Await in JavaScript?
// async/await is a feature in JavaScript that allows you to write asynchronous code
// in a way that looks and behaves like synchronous code.

//🧠 Think of it like this:
// Instead of using multiple .then() or .catch() chains with Promises, async/await lets you:
// Wait for asynchronous operations to complete
// Write cleaner, more readable code

// ✅ Basic Concepts:
// Keyword	Meaning
// async	Declares a function that always returns a Promise.
// await	Pauses execution inside the async function until a Promise resolves or rejects.

// async function getdata() {
//   let reponse = fetch("https://jsonplaceholder.typicode.com/todos/1");
//   console.log(reponse);
// }

// async function getdata() {
//   setTimeout(function () {
//     console.log(" I am inside the set Timeout block ");
//   }, 3000);
// }

// getdata();

//await
//fetch API

// async function getdata() {
//   let response = await fetch("https://jsonplaceholder.typicode.com/posts");
//   let data = await response.json();
//   console.log("My data",data);
// }
// getdata();

const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

const url = "https://jsonplaceholder.typicode.com/posts";
const options = {
  method: "POST",
  body: JSON.stringify({ username: "Full-stack-Developer" }),
  headers: myHeaders,
};

async function postdata() {
  const response = await fetch(url, options);
  let data = await response.json();
  console.log("Post data response", data);
}
async function getdata() {
  const response = await fetch(url);
  let data = await response.json();
  console.log("getdata data response", data);
}

async function processdata() {
  await postdata();
  await getdata();
}
processdata();
