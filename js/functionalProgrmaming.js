var currencyOne = 100;
var currencyTwo = 0;
var exchangeRate = 1.2;

function convertCurrency(amount, rate) {
  return amount * rate;
}

currencyTwo = convertCurrency(currencyOne, exchangeRate);
console.log(currencyTwo);

//Function calling and recursion
function one() {
  console.log("One");
  console.log("Two");
  console.log("Three");
}
one();

function example() {
  console.log("One");
  console.log("Two");
  console.log("Three");
  //example() if I run the function again, it will repeat in an infinite loop
}

//When a function calls itself, this is what's known as
//recursion. Recursion is an alternative way to run repetitive
//code without the use of loops.

let counter = 3;
function example() {
  console.log(counter);
  counter = counter - 1;
  if (counter === 0) return;
  example();
}
example();

/**
 * Scope is all about code accessibility.
 * It determines which parts of the code are
 * accessible and which parts are inaccessible.
 */

/**
 * the code that exists outside of a function is
 * referred to as global scope, and all the code
 * inside of a function is known as local scope or
 * function scope.
 */

var num1 = 10; //global

function score() {
  //local
  var num2 = 20;
  console.log(num2);
}

score();

/**
 * Variables created within the local scope cannot be
 *  read by code at the global scope level.
 * They are accessible only to functions located
 *  within the local scope.
 */

//The functional programming paradigm
//In functional programming, we use a lot of functions and variables.
function getTotal(a, b) {
  return a + b;
}
var num1 = 2;
var num2 = 3;

var total = getTotal(num1, num2);
console.log(total);

/**
 * When writing FP code, we keep data and functionality
 * separate and pass data into functions only when we
 *  want something computed.
 */
function getDistance(mph, h) {
  return mph * h;
}
var mph = 60;
var h = 2;
var distance = getDistance(mph, h);
console.log(distance);

//object-oriented programming (OOP)
var virtualPet = {
  sleepy: true,
  nap: function () {
    this.sleepy = false;
  },
};
console.log(virtualPet.sleepy); // true
virtualPet.nap();
console.log(virtualPet.sleepy); // false

/**
 * To summarize this point, we can say that the
 * Functional Programming paradigm works by keeping
 * the data and functionality separate. It's counterpart,
 *  OOP, works by keeping the data and functionality
 * grouped in meaningful objects.
 */
