/*
  Created: 05/20/2023
  Updated:
  Launch School - JS120 - Object Oriented Javascript
  JS120 > Easy 1 > Rectangles

  Instructions:

  Create a class Rectangle.

  The constructor should take 2 arguments which represent width and length respectively.

  Implement the class so that the output from the example below is correct.

  let rect = new Rectangle(4, 5);

  console.log(rect.getWidth()); // 4
  console.log(rect.getLength()); // 5
  console.log(rect.getArea()); // 20

  Formula for rectangle area is: width * length.

*/

// Solution:

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
    return this.length * this.width;
  }
}
