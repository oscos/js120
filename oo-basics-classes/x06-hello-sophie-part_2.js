/*
  Created: 05/20/2023
  Updated:
  Launch School - JS120 - Object Oriented Javascript
  JS120 > OO Basics: Classes > Hello, Sophie! (part 2)

  Instructions:

  Using the code from the previous exercise, move the greeting from the 
  constructor method to an instance method named greet that logs a greeting 
  to the console when invoked.

  Code:

  class Cat {
    constructor(name) {
      this.name = name;
      console.log(`Hello! My name is ${this.name}!`);
    }
  }

  let kitty = new Cat('Sophie');
  kitty.greet();

  Expected Output: 

  Hello! My name is Sophie!

*/

// Solution:

class Cat {
  constructor(name) {
    this.name = name;
  }

  greet() {
    console.log(`Hello! My name is ${this.name}!`);
  }
}

let kitty = new Cat("Sophie");
kitty.greet();
