//*Difference between funtional programming and oop

//functional programming
var shoes = 100;
var stateTax = 1.2;
function totalPrice(shoes, tax) {
  return shoes * tax;
}
var toPay = totalPrice(shoes, stateTax);
console.log(toPay);

//OOP1
var purchase1 = {
  shoes: 100,
  stateTax: 1.2,
  totalPrice: function () {
    var calculation = purchase1.shoes * purchase1.stateTax;
    console.log("Total price:", calculation);
  },
};
purchase1.totalPrice();

//OOP2
var purchase2 = {
  shoes: 50,
  stateTax: 1.2,
  totalPrice1: function () {
    var calculation = this.shoes * this.stateTax;
    console.log("Total price:", calculation);
  },
};
purchase2.totalPrice1();

//Default Parameters
class WithDefaultParams {
  constructor(num1 = 1, num2 = 2, num3 = 3, string1 = "Result:", bool1 = true) {
    this.num1 = num1;
    this.num2 = num2;
    this.num3 = num3;
    this.string1 = string1;
    this.bool1 = bool1;
  }
  calculate() {
    if (this.bool1) {
      console.log(this.string1, this.num1 + this.num2 + this.num3);
      return;
    }
    return "The value of bool1 is incorrect";
  }
}
var better = new WithDefaultParams();
better.calculate(); // Result: 6// 'The value of bool1 is incorrect'

//Programming Assignment: Building an object-oriented program
// Task 1: Code a Person class
class Person {
  constructor(name = "Tom", age = 20, energy = 100) {
    this.name = name;
    this.age = age;
    this.energy = energy;
  }
  sleep() {
    this.energy += 10;
  }
  doSomethingFun() {
    this.energy -= 10;
  }
}
// Task 2: Code a Worker class
class Worker extends Person {
  constructor(name, age, energy, xp = 0, hourlyWage = 10) {
    super(name, age, energy);
    this.xp = xp;
    this.hourlyWage = hourlyWage;
  }
  goToWork() {
    this.xp += 10;
  }
}

// Task 3: Code an intern object, run methods
function intern() {
  var internObject = new Worker("Bob", 21, 110, 0, 10);
  internObject.goToWork();
  return internObject;
}

// Task 4: Code a manager object, methods
function manager() {
  var managerObject = new Worker("Alice", 30, 120, 100, 30);
  managerObject.doSomethingFun();
  return managerObject;
}

// call the funtion to get output otherwise the code won't work
console.log(intern());
console.log(manager());

// check before you submit Assignment
// perfectly working, so submit now
