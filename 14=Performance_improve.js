//  What is JavaScript Performance Improvement?
// JavaScript Performance Improvement refers to techniques and best practices
// used to make JavaScript code run faster, smoother, and more efficiently in the browser.

// performance optimization in JavaScript can fix or improve that by:
//  Goals of Performance Improvement
// ✅ Faster loading times (initial page load)
// ✅ Smooth user interactions (clicks, scrolls, animations)
// ✅ Less memory usage
// ✅ Improved frame rate (especially in games or animations)
// ✅ Better responsiveness (form inputs, dropdowns, filters)

//code 1
let t1 = performance.now();
for (let i = 0; i <= 100; i++) {
  let para = document.createElement("p");
  para.textContent = "This is para - > " + i;
  document.body.appendChild(para);
}
let t2 = performance.now();

console.log("total time by code 1: " + (t2 - t1));

//Code 2
let t3 = performance.now();
let mydiv = document.createElement("div");

for (let i = 1; i <= 100; i++) {
  let para = document.createElement("p");
  para.textContent = "This is  Second para - > " + i;
  mydiv.appendChild(para);
}
document.body.appendChild(mydiv);
let t4 = performance.now();

console.log("total time by code 1: " + (t4 - t3));

// 🔁 1. Reflow (Layout)
// Reflow happens when the geometry or layout of the page changes.
// 🧩 Examples that cause reflow:
// Adding or removing DOM elements
// Changing element size (width, height, padding, margin, font-size)
// Changing the display property (block, none, etc.)
// Resizing the browser window
// Changing text content
// 🧨 It's expensive in terms of performance, especially when applied to many elements.

// 🎨 2. Repaint
// Repaint occurs when only the appearance (style) changes but the layout stays the same.
// 🎨Examples that cause repaint:
// .Changing color, background-color, visibility, border-color, box-shadow, etc.
// .Changing text color or background
// .Adding or removing shadows or outlines
// ✅ Repaint is cheaper than reflow, but it still impacts performance if done repeatedly.

// Best code
let t5 = performance.now();
let fragment = document.createDocumentFragment();

for (let i = 0; i <= 100; i++) {
  let para2 = document.createElement("p");
  para2.textContent = "this Best para code " + i;
  fragment.appendChild(para2);
}
document.body.appendChild(fragment);
let t6 = performance.now();

console.log("total time by code 1: " + (t5 - t4));

// Best Practices to Reduce Reflow/Repaint
// ✅ Batch DOM changes (use DocumentFragment or innerHTML updates at once)
// ✅ Avoid layout thrashing (repeated reads & writes to layout-related properties)
// ✅ Use classList.add/remove instead of changing many inline styles
// ✅ Use visibility: hidden instead of display: none to avoid reflow (when hiding temporarily)
// ✅ Minimize DOM depth and complexity
