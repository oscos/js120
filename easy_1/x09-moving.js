/*
  Created: 05/23/2023
  Updated:
  Launch School - JS120 - Object Oriented Javascript
  JS120 > Easy 1 > Moving

  Instructions:

*/

// Solution:

// resource used: https://javascript.info/mixins

const Walkable = {
  walk() {
    return `${this.name} ${this.gait()} forward`;
  },
};

class Person {
  constructor(name) {
    this.name = name;
  }

  gait() {
    return "strolls";
  }
}

class Cat {
  constructor(name) {
    this.name = name;
  }

  gait() {
    return "saunters";
  }
}

class Cheetah {
  constructor(name) {
    this.name = name;
  }

  gait() {
    return "runs";
  }
}

Object.assign(Person.prototype, Walkable);
let mike = new Person("Mike");
console.log(mike.walk());
// "Mike strolls forward"

Object.assign(Cat.prototype, Walkable);
let kitty = new Cat("Kitty");
console.log(kitty.walk());
// "Kitty saunters forward"

Object.assign(Cheetah.prototype, Walkable);
let flash = new Cheetah("Flash");
console.log(flash.walk());
// "Flash runs forward"
