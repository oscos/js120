/*
  Created: 05/20/2023
  Updated:
  Launch School - JS120 - Object Oriented Javascript
  JS120 > OO Basics: Classes > Generic Greeting (part 2)

  Instructions:

  Using the following code, add two methods: static method genericGreeting and 
  instance method personalGreeting. The first method should log a greeting that's 
  generic to the class. The second method should be an instance method and log a 
  greeting that's custom to the object.

  class Cat {
    constructor(name) {
      this.name = name;
    }
  }

  let kitty = new Cat("Sophie");
  Cat.genericGreeting();
  kitty.personalGreeting();

  Hello! I'm a cat!
  Hello! My name is Sophie!

*/

// Soluton:

class Cat {
  constructor(name) {
    this.name = name;
  }

  static genericGreeting() {
    console.log(`Hello! I'm a cat!`);
  }

  personalGreeting() {
    console.log(`Hello! My name is ${this.name}!`);
  }
}

let kitty = new Cat("Sophie");
Cat.genericGreeting();
kitty.personalGreeting();
