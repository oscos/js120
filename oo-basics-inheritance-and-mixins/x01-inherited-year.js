/*
  Created: 05/20/2023
  Updated:
  Launch School - JS120 - Object Oriented Javascript
  JS120 > OO Basics: OO Basics: Inheritance and Mixins > Inherited Year

  Instructions:

  Using the following code, create two classes - Truck and Car - that both inherit from Vehicle.


  class Vehicle {
    constructor(year) {
      this.year = year;
    }
  }

  let truck = new Truck(2003);
  console.log(truck.year); // 2003

  let car = new Car(2015);
  console.log(car.year); // 2015

  Expected Output:

  2003
  2015

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
