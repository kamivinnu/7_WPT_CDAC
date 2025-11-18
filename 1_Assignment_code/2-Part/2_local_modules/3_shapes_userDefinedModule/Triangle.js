
class Triangle {
    constructor(side1, side2, side3){
        this.side1 = side1
        this.side2 = side2
        this.side3 = side3
    }

    isEquilateral = () => {
        if (this.side1 == this.side2 && this.side3 == this.side1) {
            return "it is an Equivalence Triangle"
        }
        else {
            return "it is not an Equivalence Triangle"
        }
    }

    calcPerimeter = () => {
        var s1 = this.side1
        var s2 = this.side2
        var s3 = this.side3

        return s1 + s2 + s2
    }
}

module.exports = {Triangle}

