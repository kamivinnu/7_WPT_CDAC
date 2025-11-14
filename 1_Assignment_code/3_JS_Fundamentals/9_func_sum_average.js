
var n1 = parseInt(prompt("Enter first no: "))

var n2 = parseInt(prompt("Enter second no: "))

var n3 = parseInt(prompt("Enter third no: "))

sum(n1, n2, n3);



function sum(a, b, c) {
    var s = a + b + c;
    document.write(`The sum of ${a}, ${b}, ${c} is ${s} <br>`);
    document.write(`The average of ${a}, ${b}, ${c} is ${s/3}`);
}

