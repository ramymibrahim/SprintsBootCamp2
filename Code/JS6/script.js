/*  
  // Micro and Macro task queues & Call stack
  // Immediately Invoked Function Expression
  // IIFE
  // localstorage
  // Modules
  // JQuery Intro
  Final Project
  Q&A
  */

//AJAX Async JavaScript and XML


console.log("Start Test");
(function () {
  console.log("IIFE");
})();
setTimeout(function () {
  console.log("Set Time Out");
}, 1);
for (let i = 0; i < 1000000000; i++) {
  let k = 1 + i;
}

console.log("After Set Time out");

function calculateValue() {
  let val = getTax(getValue());
  console.log(val);
}

function getValue() {
  console.log("getValue");
  return 1000;
}

function getTax(val) {
  console.log("getTax");
  return 0.1 * val;
}

calculateValue();
