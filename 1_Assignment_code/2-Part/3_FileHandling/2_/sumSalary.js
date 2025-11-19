var fs = require("fs")

var rawData = ""

fs.readFile("emp.txt", (err, data) => {
    if (err) {
        console.log(err)
    }
    else {
        rawData = data.toString()
    }
})

fs.writeFile("new.js", rawData)