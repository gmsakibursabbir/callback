function greet(name, callback) {
  console.log("Hi" + " " + name);
  callback();
}

// callback function
function callMe() {
  console.log("Hlw there! I am callback function");
}

greet("JOHN", callMe);

// setTimeout()

function greets() {
  console.log("Hello world");
}

function sayNames(name) {
  console.log("Hello" + " " + name);
}

setTimeout(greets, 1000);
sayNames("JOHN");

function mainFunction(callback) {
  console.log("Performing operation...");
  setTimeout(function () {
    callback("All Analysis Completed!");
  }, 1000);
}

function callbackFunction(result) {
  console.log("Result: " + result);
}

mainFunction(callbackFunction);

// another callback

let numbers = [1, 2, 3, 4, 5];

function numFunction(callback) {
  console.log("Performing operation...");

  numbers.forEach(callback);
}

function numCallbackFunction(number) {
  console.log("Result: " + number);
}

numFunction(numCallbackFunction);
