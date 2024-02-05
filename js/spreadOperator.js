//Using the spread operator, it's easy to concatenate array
const fruits = ["apple", "banana", "mango"];
const berries = ["blueberry", "strawberry"];
const fruitsAndBerries = [...fruits, ...berries];
console.log(fruitsAndBerries);

//It's also easy to join objects
const flying = { wings: 2 };
const car = { wheels: 4 };
const flyingCar = { ...flying, ...car };
console.log(flyingCar);

//Here's how to use the spread operator to easily add one or more members to an existing array:
let veggies = ["onion", "parsley"];
veggies = [...veggies, "carrot", "beetroot"];
console.log(veggies);

//Convert a string to an array using the spread operator
const greeting = "Hello";
const arrayOfChars = [...greeting];
console.log(arrayOfChars);

//Copy either an object or an array into a separate one
const car1 = {
  speed: 200,
  color: "yellow",
};
const car2 = { ...car1 };

car1.speed = 201;

console.log(car1.speed, car2.speed);

//You can copy an array into a completely separate array, also using the spread operator
const fruits1 = ["apples", "pears"];
const fruits2 = [...fruits1];
fruits1.pop();
console.log(fruits1, "not", fruits2);
