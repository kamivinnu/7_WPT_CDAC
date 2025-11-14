var num = parseInt(prompt("Enter the number : "))

var sum = 0

while (num > 0){
    sum += num % 10
    num = parseInt(num / 10)
}

document.writeln(sum)



