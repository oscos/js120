/*
  Created: 05/20/2023
  Updated:
  Launch School - JS120 - Object Oriented Javascript
  JS120 > OO Basics: Classes > What are you?

  Instructions:

  Using the code from the previous exercise, add a constructor method that logs 
  to the console I'm a cat! when a new Cat object is initialized.

  class Cat {

  }

  let kitty = new Cat();

  Expected Output:
  I'm a cat!
*/

class Cat {
  constructor() {
    console.log("I'm a cat!");
  }
}

let kitty = new Cat();
