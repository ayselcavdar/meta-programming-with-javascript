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
