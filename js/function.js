function myFunc() {
  console.log("hello");
}
myFunc();

//function without parameters
function addTwoNums() {
  var a = 10;
  var b = 20;
  var c = a + b;
  console.log(c);
}
addTwoNums();

//function with parameters
function addTwoNums(a, b) {
  var c = a + b;
  console.log(c);
}
addTwoNums(10, 20);
addTwoNums(5, 9);

//Building and calling functions
//function that takes an array as input and display all items of this array
function listArrayItems(arr) {
  for (var i = 0; i < arr.length; i++) {
    console.log(i, arr[i]);
  }
}
var colors = ["red", "orange", "yellow", "green", "blue", "purple", "pink"];
listArrayItems(colors);

//with conditions
function listArrayItems(arr) {
  for (i = 0; i < arr.length; i++) {
    if (arr[i] == "red") {
      console.log(i * 100, "tomato");
    } else {
      console.log(i * 100, arr[i]);
    }
  }
}
