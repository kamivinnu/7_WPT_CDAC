
var num1 = prompt("Enter a First Number: ")

var num2 = prompt("Enter a Second Number: ")

var ope = prompt("Enter a Arithemetic Operator: ")

switch(ope) {
    case '+': document.writeln("Addition is: ", num1 + num2)
        break;

    case '-': document.writeln("Substraction is: ", num1 - num2)
        break;

        
    case '*': document.writeln("Multiplication is: ", num1 * num2)
        break;
        
    case '/': document.writeln("Division is: ", num1 / num2)
        break;
}