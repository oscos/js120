/*
  Created: 05/20/2023
  Updated:
  Launch School - JS120 - Object Oriented Javascript
  JS120 > Easy 1 > Fake Cat

  Instructions:

  Without calling the Cat constructor, create an object that looks and acts like 
  a Cat instance that doesn't have a defined name.

  class Cat {
    constructor(name) {
      this.name = name;
    }
    speaks() {
      return `${this.name} says meowwww.`;
    }
  }

  let fakeCat = // your implementation
  console.log(fakeCat instanceof Cat); // logs true
  console.log(fakeCat.name);           // logs undefined
  console.log(fakeCat.speaks());       // logs undefined says meowwww.
  
*/

class Cat {
  constructor(name="Jerry") {
    this.name = name;
  }
  speaks() {
    return `${this.name} says meowwww.`;
  }
}

const fakeCat = Object.create(Cat.prototype);

console.log(fakeCat instanceof Cat); // logs true
console.log(fakeCat.name); // logs undefined
console.log(fakeCat.speaks()); // logs undefined says meowwww.
