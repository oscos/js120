/*
  Created: 05/20/2023
  Updated:
  Launch School - JS120 - Object Oriented Javascript
  JS120 > OO Basics: OO Basics: Inheritance and Mixins > Towable (part 1)

  Instructions:

  Using the following code, create a towMixin mixin that contains a method named 
  tow that returns I can tow a trailer! when invoked. Include the mixin in the 
  Truck class.

  class Truck {}

  class Car {}

  let truck = new Truck();
  truck.tow();

  
  Expected output:
  
  I can tow a trailer!
*/

// Solution:

const towMixin = {
  tow() {
    return `I can tow a trailer!`;
  },
};

class Truck {}

class Car {}

Object.assign(Truck.prototype, towMixin);

let truck = new Truck();
console.log(truck.tow());
