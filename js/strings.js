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

//String cheat sheet
var greet = "Hello, ";
var place = "World";

console.log(greet.length);
console.log(greet.charAt(0));

"Wo".concat("rl").concat("d"); // 'World'
"ho-ho-ho".indexOf("h"); // 0
"ho-ho-ho".indexOf("o"); // 1
"ho-ho-ho".indexOf("-"); // 2
"ho-ho-ho".split("-"); // ['ho', 'ho', 'ho']
