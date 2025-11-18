

const {Triangle} = require("./Triangle.js")

var check = new Triangle(10, 10, 10)

console.log(check.isEquilateral())

console.log("The Perimeter of Traingle is: ", check.calcPerimeter())