/* Arithmetical operators in JS:
+ addition
-substraction
* multiplication
/ division
*/

/* Comparison operators in JS:
> greater than
< less than
== equal
*/

console.log(2 + 2);
console.log(1 + 2 + 5);
console.log(20 - 18);
console.log(2 * 3);
console.log(3 > 2);
console.log(2 > 3);
console.log(10 == 10);

//var test = typeof "what is it?";
//var test = typeof 10;
//var test = typeof 3.14;
// var test = typeof true;
// var test = typeof (1 < 2);
// var test = typeof [1, 2, 3];
// var test = typeof [{ firsArray: 1 }];
var test = typeof [
  function abc() {
    console.log("abc");
  },
];

console.log(test);
