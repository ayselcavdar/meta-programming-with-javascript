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

//examples
//single loop
for (var firstNum = 0; firstNum < 2; firstNum++) {
  console.log(firstNum);
}

for (var secondNum = 0; secondNum < 10; secondNum++) {
  console.log(secondNum);
}

//nested loop - one inside another
for (var firstNum = 0; firstNum < 2; firstNum++) {
  for (var secondNum = 0; secondNum < 10; secondNum++) {
    console.log(firstNum + ", " + secondNum);
  }
}

for (var firstNum = 0; firstNum < 2; firstNum++) {
  for (var secondNum = 0; secondNum < 10; secondNum++) {
    console.log(
      firstNum + " times " + secondNum + " equals " + firstNum * secondNum
    );
  }
}

for (var i = 100; i > 10; i = i - 10) {
  for (var j = 10; j > 4; j = j - 5) {
    console.log(i + " divided by " + j + " equals " + i / j);
  }
}

//Exercise 1
for (var i = 1; i <= 10; i++) {
  if (i == 1) {
    console.log("Gold medal");
  } else if (i == 2) {
    console.log("Silver medal");
  } else if (i == 3) {
    console.log("Bronze medal");
  } else {
    //this block will run if no condition matches
    console.log(i);
  }
}

//Exercise 2
for (var i = 1; i <= 10; i++) {
  switch (i) {
    case 1:
      console.log("Gold medal");
      break;
    case 2:
      console.log("Silver medal");
      break;
    case 3:
      console.log("Bronze medal");
      break;
    default:
      //this block will run if no condition matches
      console.log(i);
  }
}
