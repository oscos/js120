/*
  Created: 05/20/2023
  Updated:
  Launch School - JS120 - Object Oriented Javascript
  JS120 > OO Basics: Classes > Generic Greeting (part 1)

  Instructions:

  Modify the following code so that Hello! I'm a cat! is logged when Cat.genericGreeting is invoked.

  class Cat {

  }

  Cat.genericGreeting();

  Expected output:

  Hello! I'm a cat!

*/

// Solution:

class Cat {
  static genericGreeting() {
    console.log(`Hello! I'm a cat!`);
  }
}

Cat.genericGreeting();
