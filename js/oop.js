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
