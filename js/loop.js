//with console.log method
console.log(1);
console.log(2);
console.log(3);
console.log(4);
console.log(5);
console.log(6);

//for loop method
for (var i = 1; i < 7; i++) {
  console.log(i);
}

//while loop method
var i = 1;
while (i < 7) {
  console.log(i);
  i = i + 1;
}

//nested loop method
for (var i = 1; i <= 2; i++) {
  for (var j = 1; j <= 5; j++) {
    console.log("Week" + i + "day" + j);
  }
}

//nested loop second example
for (var i = 2023; i < 2026; i++) {
  console.log(i);
  for (var j = 6; j < 9; j++) {
    console.log("---------", j);
  }
}
