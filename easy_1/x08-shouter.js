/*
  Created: 05/23/2023
  Updated:
  Launch School - JS120 - Object Oriented Javascript
  JS120 > Easy 1 > Shouter

  Instructions:

*/

class Person {
  greeting(text) {
    console.log(text);
    // return text;
  }
}

class Shouter extends Person {
  greeting(text) {
    //return (`${text.toUpperCase()}`);
    return `${super.greeting(text.toUpperCase())}`;
  }
}

let person = new Person();
let shouter = new Shouter();

person.greeting("Hello. It's very nice to meet you."); // Hello. It's very nice to meet you
shouter.greeting("Hello my friend."); // HELLO MY FRIEND.
