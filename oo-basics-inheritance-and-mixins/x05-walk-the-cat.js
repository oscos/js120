/*
  Created: 05/20/2023
  Updated:
  Launch School - JS120 - Object Oriented Javascript
  JS120 > OO Basics: OO Basics: Inheritance and Mixins > Walk The Cat

  Instructions:

  Using the following code, create a mixin named walkMixin that contains a method 
  named walk. This method should return Let's go for a walk! when invoked. Include 
  walkMixin in Cat and invoke walk on kitty.

  class Cat {
    constructor(name) {
      this.name = name;
    }

    greet() {
      return `Hello! My name is ${this.name}!`;
    }
  }

  let kitty = new Cat("Sophie");
  console.log(kitty.greet());
  console.log(kitty.walk());


  Expected output:

  Hello! My name is Sophie!
  Let's go for a walk!

*/

// Solution:

const walkMixin = {
  walk() {
    return `Let's go for a walk!`;
  },
};

class Cat {
  constructor(name) {
    this.name = name;
  }

  greet() {
    return `Hello! My name is ${this.name}!`;
  }
}

Object.assign(Cat.prototype, walkMixin);

let kitty = new Cat("Sophie");
console.log(kitty.greet());
console.log(kitty.walk());
