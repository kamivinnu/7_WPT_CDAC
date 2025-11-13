
var num = parseInt(prompt("Enter a Number: "))

var i = 0
while(i <= num) {
    if (i % 2 == 0) {
        document.writeln(i, " ")
    }
    i += 1
}