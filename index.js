// Your code here
class Polygon {
  constructor(array) {
    this.array = array 
  } 
  get countSides() {
    return this.array.length 
  } 
  get perimeter() {
    return this.array.reduce ((a,b) => a + b)
  }
}

class Triangle extends Polygon() {
  get isValid() {
    let a = this.array[0]
    let b = this.array[1]
    let c = this.array[2]
    if (a + b < c && )
  }
}