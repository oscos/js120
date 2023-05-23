/*
  Created: 05/20/2023
  Updated:
  Launch School - JS120 - Object Oriented Javascript
  JS120 > OO Basics: OO Basics: Inheritance and Mixins > Swimming

  Instructions:

  Correct the following program so it will work properly. Just make the smallest 
  possible change to ensure that objects of Maltese and Fish class have access to 
  the swim method.

  const swimMixin = {
    swim() {
      return `${this.name} is swimming.`;
    }
  }

  class Fish {
    constructor(name) {
      this.name = name;
    }
  }

  class Dog {
    constructor(name) {
      this.name = name;
    }
  }

  class Maltese extends Dog {}

  let dog1 = new Maltese("Buddy");
  let fish1 = new Fish("Nemo");

  console.log(dog1.swim());
  console.log(fish1.swim());


  Expected output:

  Buddy is swimming.
  Nemo is swimming.

*/

// Solution:

const swimMixin = {
  swim() {
    return `${this.name} is swimming.`;
  },
};

class Fish {
  constructor(name) {
    this.name = name;
  }
}

class Dog {
  constructor(name) {
    this.name = name;
  }
}

class Maltese extends Dog {}

Object.assign(Maltese.prototype, swimMixin);
Object.assign(Fish.prototype, swimMixin);

let dog1 = new Maltese("Buddy");
let fish1 = new Fish("Nemo");

console.log(dog1.swim());
console.log(fish1.swim());
