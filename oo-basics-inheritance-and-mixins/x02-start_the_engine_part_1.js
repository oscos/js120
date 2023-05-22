/*
  Created: 05/20/2023
  Updated:
  Launch School - JS120 - Object Oriented Javascript
  JS120 > OO Basics: OO Basics: Inheritance and Mixins > Start the Engine (part 1)

  Instructions:

  Change the following code so that creating a new Truck automatically invokes startEngine.

  class Vehicle {
    constructor(year) {
      this.year = year;
    }
  }

  class Truck extends Vehicle {
    startEngine() {
      console.log('Ready to go!')
    }
  }

  let truck = new Truck(2003);
  console.log(truck.year); // 2003

  Expected output:

  Ready to go!
  2003

*/

// Solution:

class Vehicle {
  constructor(year) {
    this.year = year;
  }
}

class Truck extends Vehicle {
  constructor(year) {
    super(year);
  }
}

class Car extends Vehicle {
  constructor(year) {
    super(year);
  }
}

let truck = new Truck(2003);
console.log(truck.year); // 2003

let car = new Car(2015);
console.log(car.year); // 2015
