/*
  Created: 05/20/2023
  Updated:
  Launch School - JS120 - Object Oriented Javascript
  JS120 > Easy 1 > Rectangles and Squares

  Instructions:

  Given the class from the previous problem:

  class Rectangle {
    constructor(width, length) {
      this.width = width;
      this.length = length;
    }

    getWidth() {
      return this.width;
    }

    getLength() {
      return this.length;
    }

    getArea() {
      return this.width * this.length;
    }
  }

  Write a class called Square that inherits from Rectangle, and is used like this:

  let square = new Square(5);
  console.log(`area of square = ${square.getArea()}`); // area of square = 25

*/

class Rectangle {
  constructor(width, length) {
    this.width = width;
    this.length = length;
  }

  getWidth() {
    return this.width;
  }

  getLength() {
    return this.length;
  }

  getArea() {
    return this.width * this.length;
  }
}

// Write a class called Square that inherits from Rectangle, and is used like this:

class Square extends Rectangle {
  constructor(side) {
    super(side, side);
  }
}

let square = new Square(5);
console.log(`area of square = ${square.getArea()}`); // area of square = 25
