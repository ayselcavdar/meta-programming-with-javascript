//For loop over arrays
var letters = ["a", "b", "c"];

for (var i = 0; i < letters.length; i++) {
  console.log(letters[i]);
}

//For loop over the string
var letters = "abc";
for (var i = 0; i < letters.length; i++) {
  console.log(letters[i]);
}

//Arrays are iterable
var veggies = ["onion", "parsley", "carrot"];
console.log(veggies);

console.log(veggies[0]);
console.log(veggies[1]);

for (var i = 0; i < veggies.length; i++) {
  console.log(veggies[i]);
}

//String are iterable, too!
var greeting = "Howday";
console.log(greeting.length);

console.log(greeting[0]);
console.log(greeting[1]);

for (var i = 0; i < greeting.length; i++) {
  console.log(greeting[i]);
}

//strings !== arrays
var greet = "Hello ";
var user = "Lisa";

//console.log(greet.pop());
console.log(greet + user);
console.log(greet.concat(user));
