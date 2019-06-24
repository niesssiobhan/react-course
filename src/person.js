// Inheritance

// in this example we are going to make it so that the Teacher class is going to be able to inherit all of the methods from the Person class
export class Person {
  constructor(name) {
    this.name = name;
  }
  walk() {
    console.log("walk");
  }
}
