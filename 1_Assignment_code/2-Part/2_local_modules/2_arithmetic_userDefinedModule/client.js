const { subtract, add, multiply, min, square, max, divide } = require("./calc")

// const f1 = require("./calc.js")

require("./calc.js")

console.log("Addition is: ", add(10, 15))

console.log("Substraction is: ", subtract(10, 15))

console.log("Multiplication is: ", multiply(10, 15))

console.log("divide is: ", divide(10, 15))

console.log("sqaure is: ", square(24))

console.log("Minimum is: ", min(10, 15, 25))

console.log("Maximum is: ", max(10, 15, 25))