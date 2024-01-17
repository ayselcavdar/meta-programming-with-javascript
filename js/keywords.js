//*var keyword

//1. We CAN acess a var variable before initialization
//- as long as the var variable IS EVENTUALLY INITIALIZED
//- ANYWHERE in our code
console.log(user);

//2.We CAN declare and redeclare the same var variable without errors
var user = "Ice";
var user = "Obi";
var user = "Jora";

console.log(user);

//!let keyword
//1. We CANNOT access a let variable before we declare it
//console.log(user) //Error!
//let user

//2.We CAN declare an unssigned variable with let
let user;
console.log(user);

//3.We CANNOT redeclare a let variable
let user = "Ice";

//4.But we CAN re-assign it
user = "Obi";
console.log(user);

//? const keyword
//1.The const variable MUST BE INITIALIZED
//console.log(user);
//const user

//2.We CANNOT access the const variable before initialization
//console.log(user); Unexpected token error
const user = "Navi";

//3.We CANNOT redeclare a const variable
user = "Ice";
