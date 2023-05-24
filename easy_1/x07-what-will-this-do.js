/*
  Created: 05/23/2023
  Updated:
  Launch School - JS120 - Object Oriented Javascript
  JS120 > Easy 1 > What Will This Do?

  Instructions:

*/

class Something {
  constructor() {
    this.data = "Hello";
  }

  dupData() {
    return this.data + this.data;
  }

  static dupData() {
    return "ByeBye";
  }
}

let thing = new Something();
console.log(Something.dupData());
console.log(thing.dupData());

// Expected Output:
// ByeBye
// HelloHello
