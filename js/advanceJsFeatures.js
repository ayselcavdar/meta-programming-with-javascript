//For of loops and objects
/**
 *  it's important to know that a for of loop cannot
 *  work on an object directly, since an object is not
 * iterable.
 */
// const car = {
//   speed: 100,
//   color: "red",
// };
// for (prop of car) {
//   console.log(prop);
// }

/**
 * Contrary to objects, arrays are iterable
 */
// const colors = ["red", "orange", "yellow"];
// for (var color of colors) {
//   console.log(color);
// }

//we can use the fact that a for of loop can be run on arrays to loop over objects.
// var clothingItem = {
//   price: 50,
//   color: "beige",
//   material: "cotton",
//   season: "autumn",
// };

// for (const key of Object.keys(clothingItem)) {
//   console.log(key, ":", clothingItem[key]);
// }

//Template literals
let greet = "Hello";
let place = "World";
console.log(`${greet} ${place}`);

let first = `He said, "Don't you know? ES6,it's got some great features!"`;
let second = `"Wouldn't you want to learn more?",he asked.`;

console.log(`${first} - and I got curious. ${second}`);

//Programming Assignment: Array and object iteration
// Task 1
var dairy = [
  "cheese",
  "sour cream",
  "milk",
  "yogurt",
  "ice cream",
  "milkshake",
];

function logDairy() {
  for (const product of dairy) {
    console.log(product);
  }
}

logDairy();

// Task 2
const animal = {
  canJump: true,
};

const bird = Object.create(animal);

bird.canFly = true;

bird.hasFeathers = true;
// console.log(bird);
function birdCan() {
  for (key of Object.keys(bird)) {
    console.log(key + ": " + bird[key]);
  }
}

birdCan();

// Task 3
function animalCan() {
  for (prop in bird) {
    console.log(prop + ": " + bird[prop]);
  }
}

animalCan();

console.log("");
