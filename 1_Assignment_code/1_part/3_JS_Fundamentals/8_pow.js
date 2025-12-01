
var num = prompt("Enter a Base number: ")

var p = prompt("Enter a Exponent: ")

pow(num, p)

function pow(n, po) {
    document.writeln(n, " to the power of ", po, " is ", n ** po)
}