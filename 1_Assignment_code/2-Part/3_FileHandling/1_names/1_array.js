var fs = require("fs")

var arr = ["aaa", "bbb", "ccc"]

fs.writeFile("names.txt", arr.join("|").toString(), (err) => {
    if (err) {console.log(err.message)}
    else {console.log("Write Operation Completed")}
})