
var n = parseInt(prompt("Enter a Number: "))
var total = 0

sum(n)

function sum(num) {
    for(i = 2; i <= num; i++) {
        if (num % 2 == 0) {
            total += (num ** 2)
        }
    }

    document.write(`The sum of Even Squares upto ${n} is ${total}`)
}