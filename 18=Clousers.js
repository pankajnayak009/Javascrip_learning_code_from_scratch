// What is a Closure in JavaScript?
// A closure is a feature in JavaScript where an inner function has access to:
// Its own scope (variables defined inside it)
// The outer function’s variables
// The global scope
// Even after the outer function has finished executing, the inner function still
//  “remembers” and can access the outer function’s variables.

// Real-World Use Cases:
// ✅ Data privacy (private variables)
// ✅ Function factories
// ✅ Callback functions (e.g., event handlers)
// ✅ Stateful functions

function outerfunction() {
  function innerfunction() {
    let name = "Pankaj nayak";
    console.log(name);
  }
  innerfunction();
}
outerfunction();

function IInd_outer_function() {
  let value = 8000;
  function IInd_inner_function() {
    console.log(value);
  }
  IInd_inner_function();
}
IInd_outer_function();
