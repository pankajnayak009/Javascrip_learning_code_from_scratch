// What Are Browser Events in JavaScript?
// Browser events are actions that occur in the browser, typically as a result of user
// interaction or the browser's own behavior — like clicks, form submissions, page load,
// mouse movements, key presses, etc.

// Event Type	Triggered When...
// click	    A user clicks an element
// mouseover	Mouse hovers over an element
// mouseout	    Mouse moves out of an element
// keydown	    A key is pressed
// keyup	    A key is released
// submit	    A form is submitted
// change	    Input value is changed (e.g. dropdown)
// load	The     page or image fully loads
// scroll	    The user scrolls the page
// resize	    The browser window is resized

// monitorEvents(documents); -> check how many events are apply on this code
// unmonitorEvents(documents); -> stop checking events

function changetext() {
  let fpara2 = document.getElementById("fpara");
  fpara2.textContent = "full_Stack_Developer";
}
let fpara2 = document.getElementById("fpara");
fpara2.addEventListener("click", changetext);
// fpara2.removeEventListener("click", changetext);

// let fpara2 = document.getElementById("fpara");
// fpara2.addEventListener("click", function () {
//   fpara2.textContent = "full_Stack_Developer";
// });

// 1. Click Event
let btn = document.getElementById("mybtn");
btn.addEventListener("click", () => {
  alert(
    "Delhi metro sytems and cards are not workings for 2 days Note: you can't travel "
  );
});

//🖱️ 2. Mouseover + Mouseout

let addevents = document.getElementById("box");

addevents.addEventListener("mouseover", () => {
  addevents.style.backgroundColor = "orange";
});

addevents.addEventListener("mouseout", () => {
  addevents.style.backgroundColor = "green";
});

// default action
let link = document.getElementById("mylink");
link.addEventListener("click", function (event) {
  event.preventDefault();
  alert("Link was clicked, but not followed!");
});

//Avoiding to many listners for smooth performance

// const paras = document.querySelectorAll("p");

// function handleClick(event) {
//   event.target.style.backgroundColor = "green";
//   alert("You clicked on  " + event.target.textContent);
// }

// for (let i = 0; i < paras.length; i++) {
//   let para = paras[i];
//   para.addEventListener("click", handleClick);
// }

let mydiv = document.getElementById("wrapper");

function handleClick(event) {
  event.target.style.backgroundColor = "green";
  alert("You clicked on  " + event.target.textContent);
}
mydiv.addEventListener("click", handleClick);
