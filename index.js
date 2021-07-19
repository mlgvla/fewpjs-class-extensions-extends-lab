class Polygon {
    constructor(sides){
        this.sides = sides
    }

    get countSides() {
        return this.sides.length
    }

    get perimeter() {
        let perimeter = 0
        for (let i = 0; i < this.sides.length; i++) {
            perimeter += this.sides[i]   
        }
        return perimeter
    }
}

class Triangle extends Polygon {
    get isValid() {
        let [a, b, c] = this.sides

        return (a + b > c && b + c > a && a + c > b) ? true : false
    }
}

class Square extends Polygon {
    get isValid() {
        let [a, b, c, d] = this.sides

        return (a === b && b === c && c === d) ? true : false
    }

    get area() {
        if (this.isValid) {
            return this.sides[1] ** 2
        }
    }
}

