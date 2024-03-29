//Object literals
var table = {
  legs: 3,
  color: "brown",
  priceUSD: 100,
};
console.log(table); //display the object in the developer console

//dot notation
var house2 = {};
house2.rooms = 4;
house2.color = "pink";
house2.priceUSD = 12345;
console.log(house2);

//Additionally, nothing is preventing me from combining the two approaches. For example:
var house = {
  rooms: 3,
  color: "brown",
  priceUSD: 10000,
};
console.log(house);
house.windows = 10;
console.log(house);

//the brackets notation
var house3 = {};
house3["rooms"] = 4;
house3["color"] = "pink";
house3["price"] = 12345;
console.log(house3);

//I can both access and update properties on objects using either the dot notation, or the brackets notation, or a combination of both
var car = {};
car.color = "gray";
car["color"] = "green";
car["speed"] = 200;
car.speed = 300;
console.log(car);

//With the brackets notation, I can add space characters inside property names
car["number of doors"] = 4;
console.log(car);

//I can add numbers (as the string data type) as property keys. However, doing this is discouraged, due to obvious reasons of having a property key as a number string not really conveying a lot of useful information.
car["1984"] = 2024;
console.log(car);

//Finally, there's one really useful thing that bracket notation has but is not available in the dot notation: It can evaluate expressions.
var arrOfKeys = ["speed", "altitude", "color"];
var drone = {
  speed: 100,
  altitude: 200,
  color: "red",
};
for (var i = 0; i < arrOfKeys.length; i++) {
  console.log(drone[arrOfKeys[i]]);
}

//Arrays are Objects
//That means that arrays also have some built-in properties and methods.
var fruits = [];
fruits.push("apple");
fruits.push("pear");
console.log(fruits);
fruits.pop("apple");
console.log(fruits);

//now build a function that takes all its arguments and pushes them into an array
function arrayBuilder(one, two, three) {
  var arr = [];
  arr.push(one);
  arr.push(two);
  arr.push(three);
  return arr;
}
arrayBuilder();
var simpleArr = arrayBuilder("apple", "pear", "plum");
console.log(simpleArr);

//example of adding properties and methods to an object
var car = {};
car.mileage = 98765;
car.color = "red";
console.log(car);
car.turnTheKey = function () {
  console.log("The engine is running");
};
car.lightsOn = function () {
  console.log("The lights are on.");
};
console.log(car);
car.turnTheKey();
car.lightsOn();
