/*
  Created: 05/23/2023
  Updated:
  Launch School - JS120 - Object Oriented Javascript
  JS120 > Easy 1 > Refactoring Vehicles

  Instructions:

*/

// Solution:

class Car {
  constructor(make, model) {
    this.make = make;
    this.model = model;
  }

  info() {
    return `${this.make} ${this.model}`;
  }
}

class Motorcycle {
  constructor(make, model) {
    super(make, model);
  }

  getWheels() {
    return 2;
  }
}

class Truck {
  constructor(make, model, payload) {
    super(make, model);
    this.payload = payload;
  }

  getWheels() {
    return 6;
  }
}
