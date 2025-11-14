
var principal = prompt("Enter Principal Amount: ")

var roi = prompt("Enter Rate of Interest: ")

var period = prompt("Enter period in years: ")

ci(principal, roi, period)

function ci(p, r, n) {
    document.write(`Principal - ${p} rs <br>`)
    document.write(`Rate of Interest - ${r}% <br>`)
    document.write(`Period - ${n} yr <br>`)

    var c = p * [(1 + (r/100)) - 1]

    document.write(`Compound Interest - ${c}`)

}