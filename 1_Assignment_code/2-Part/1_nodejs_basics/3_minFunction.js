

function min(arr) {
    var minNum = arr[0]

    for(n of arr) {
        if (n < minNum) {
            minNum = n
        }            
    }
    console.log(minNum)
}

var numArr = [106, 37, 40, 79, 51, 25, 26]

min(numArr)