/*
  Created: 05/20/2023
  Updated:
  Launch School - JS120 - Object Oriented Javascript
  JS120 > OO Basics: OO Basics: Inheritance and Mixins > Only Pass the Year
  Instructions:

  Using the following code, allow Truck to accept a second argument upon 
  instantiation. Name the parameter bedType and implement the modification 
  so that Car continues to only accept one argument.

  class Vehicle {
    constructor(year) {
      this.year = year;
    }
  }

  class Truck extends Vehicle {}

  class Car extends Vehicle {}

  let truck1 = new Truck(2003, 'Short');
  console.log(truck1.year);
  console.log(truck1.bedType);

  Expected output:

  2003
  Short

*/

// Solution:

class Vehicle {
  constructor(year) {
    this.year = year;
  }
}

class Truck extends Vehicle {
  constructor(year, bedType) {
    super(year);
    this.bedType = bedType;
  }
}

class Car extends Vehicle {
  constructor(year) {
    super(year);
  }
}

let truck1 = new Truck(2003, "Short");
console.log(truck1.year);
console.log(truck1.bedType);
