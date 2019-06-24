import { Person } from "./person";

export function promote() {}

// by using extends that means that the Teacher class is being extended from the Person class
// when you add a constructor in a child class you have to call the constructor of its parent class
export default class Teacher extends Person {
  constructor(name, degree) {
    super(name); // because we are declaring a constructor in a child class we have to call super so then it will reference the parent class
    this.degree = degree;
  }
  teach() {
    console.log("teach");
  }
}
