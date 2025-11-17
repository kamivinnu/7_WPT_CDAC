function greet(){
    var time = new Date()

    if (time.getHours() > 12) {
        console.log("Good Evening")
    }
    else {
        console.log("Good Morning")
    }
    
}

exports.greetUser = greet