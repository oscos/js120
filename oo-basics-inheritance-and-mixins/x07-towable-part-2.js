/*
  Created: 05/20/2023
  Updated:
  Launch School - JS120 - Object Oriented Javascript
  JS120 > OO Basics: OO Basics: Inheritance and Mixins > Towable (part 2)

  Instructions:

  Using the following code, create a class named Vehicle that, upon instantiation, 
  assigns the passed in argument to year property. Both Truck and Car should 
  inherit from Vehicle.

  const towMixin = {
    tow() {
      return "I can tow a trailer!";
    }
  }

  class Truck {
    constructor() {
      Object.assign(this, towMixin);
    }
  }

  class Car {}

  let truck = new Truck(2002);
  console.log(truck.year);
  console.log(truck.tow());

  let car = new Car(2015);
  console.log(car.year);

  
  Expected output:
  
  2002
  I can tow a trailer!
  2015

*/

// Solution:


const towMixin = {
  tow() {
    return 'I can tow a trailer!';
  }
}

class Vehicle {
  constructor(year) {
    this.year = year;
  }
}


class Truck extends Vehicle {
  constructor(year) {
    super(year);
    Object.assign(this, towMixin);
  }
}

class Car extends Vehicle{}


let truck = new Truck(2002);
console.log(truck.year);
console.log(truck.tow());

let car = new Car(2015);
console.log(car.year);
