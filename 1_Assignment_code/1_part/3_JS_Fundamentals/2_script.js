function greater(a, b) {
    if (a > b) {
        return a
    }
    else {
        return b
    }
}

function greatest(x, y, z) {
    return greater(x, greater(y, z))
}

var a = parseInt(prompt("Enter a First Number: "))

var b = parseInt(prompt("Enter a Second Number: "))

var c = parseInt(prompt("Enter a Third Number: "))

document.writeln(greatest(a, b, c), " is greatest")


// if(a > b && b > c) {
//     document.writeln(a, " is greatest")
// }
    
// else if (b > c) {
//     document.writeln(b, " is greatest")
// }
   
// else {
//     document.writeln(c, " is greatest")
// }