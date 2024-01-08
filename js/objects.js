//Object literals
var table = {
  legs: 3,
  color: "brown",
  priceUSD: 100,
};
console.log(table); //display the object in the developer console

//dot notation
var house2 = {};
house2.rooms = 4;
house2.color = "pink";
house2.priceUSD = 12345;
console.log(house2);

//Additionally, nothing is preventing me from combining the two approaches. For example:
var house = {
  rooms: 3,
  color: "brown",
  priceUSD: 10000,
};
console.log(house);
house.windows = 10;
console.log(house);
