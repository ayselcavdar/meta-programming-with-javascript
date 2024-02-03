//Arrays
//forEach()
const fruits = ["kiwi", "mango", "apple", "pear"];
function appendIndex(fruit, index) {
  console.log(`${index}.${fruit}`);
}
fruits.forEach(appendIndex);

//passed in directly into the method call
const veggies = ["onion", "brokoli", "avokado", "garlic"];
veggies.forEach(function (veggie, index) {
  console.log(`${index}.${veggie}`);
});

//filter()
const nums = [0, 10, 20, 30, 40, 50];
nums.filter(function (num) {
  return num > 20;
});

//map()
[0, 10, 20, 30, 40, 50].map(function (num) {
  return num > 20;
});

//Working with Objects in JavaScript
const result = [];
const drone = {
  speed: 100,
  color: "yellow",
};
const droneKeys = Object.keys(drone);
droneKeys.forEach(function (key) {
  result.push(key, drone[key]);
});
console.log(result);

//map
let bestBoxers = new Map();
bestBoxers.set(1, "The Champion");
bestBoxers.set(2, "The Runner-up");
bestBoxers.set(3, "The third place");

console.log(bestBoxers);

//set()
const repetitiveFruits = ["apple", "pear", "apple", "pear", "plum", "apple"];
const uniqueFruits = new Set(repetitiveFruits);
console.log(uniqueFruits);
