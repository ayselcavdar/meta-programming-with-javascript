//error
// console.log(a + b);
// console.log("This line is never reached");

//try catch-The benefit of using try catch is that
//even if JavaScript throws an error while going
//through our code, it will not stop program execution
try {
  console.log(a + b);
} catch (err) {
  console.log(err);
  console.log("There was an error");
  console.log("The error was saved in the error log");
}
console.log("My program does not stop");

//throw
try {
  throw new ReferenceError();
} catch (err) {
  console.log(err);
  console.log("There was a Reference Error");
}
console.log("My program does not stop");

//Exercise: Error prevention
function addTwoNums(a, b) {
  console.log(a + b);
}
addTwoNums(5, "5");

//Update the addTwoNums function with a try...catch block
function addTwoNums(a, b) {
  try {
    console.log(a + b);
  } catch (err) {
    console.log(err);
  }
}

// If the passed-in arguments are not numbers, throw an error
function addTwoNums(a, b) {
  try {
    if (typeof a != "number") {
      throw new ReferenceError("the first argument is not a number");
    } else if (typeof b != "number") {
      throw new ReferenceError("the second argument is not a number");
    } else {
      console.log(a + b);
    }
  } catch (err) {
    console.log(err);
  }
}
addTwoNums(5, "5");
console.log("It still works");
