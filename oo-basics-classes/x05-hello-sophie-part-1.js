/*
  Created: 05/20/2023
  Updated:
  Launch School - JS120 - Object Oriented Javascript
  JS120 > OO Basics: Classes > Hello, Sophie! (part 1)

  Instructions:

  Using the code from the previous exercise, add a parameter to constructor that 
  provides a name for the Cat object. Assign this parameter to a property called 
  name and use it to log a greeting with the provided name. (You can remove the 
  code that displays I'm a cat!.)

  Code:

  class Cat {
    constructor() {
    }
  }

  let kitty = new Cat('Sophie');

  Expected Output:
  Hello! My name is Sophie!

*/

class Cat {
  constructor(name) {
    this.name = name;
    console.log(`Hello! My name is ${this.name}!`);
  }
}

let kitty = new Cat("Sophie");
