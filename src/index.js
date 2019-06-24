// import React from "react";
// import ReactDOM from "react-dom";

import Teacher, { promote } from "./teacher";

// const element = <h1>Hello World</h1>;
// ReactDOM.render(element, document.getElementById("root")); //this is taking the element that was made with react into a DOM element and display on the page. The 'root' represents the root of the application and the element, in the real world, would equal to the appliation that you are building

// const person = {
//   name: "Teagan",
//   walk: function() {}, // Since there is a function within thr object then it is reffered to as a method. So 'walk' is a method in the person object
//   talk() {} // this another and cleaner way to do the method from above
// };

// person.talk(); // this si accessing the method from above
// person["name"] = "Siobhan"; // this is another way to do it. this is used if you are unsure of the property or method that is going to be accessed

// //------------------------------------------//

// const person = {
//   name: "Teagan",
//   walk() {
//     console.log(this);
//   }
// };

// person.walk();

// const walk = person.walk.bind(person); // person.walk is an object
// // when you include .bind to the object then you are binding a function to an object. So .bind(person) isreturning a new instance of the walk function
// walk(); // this is a stand alone funtion because it is being called outside of the object. So by defualt it returns a reference to the global object
// // this using .bind(person) the 'this' is pointing the walk() to the person function - they all talk with each other now, they are attached

// //-------------------------------------------//

// const jobs = [
//   { id: 1, isActive: true },
//   { id: 2, isActive: true },
//   { id: 3, isActive: false }
// ];

// const activeJobs = jobs.filter(job => job.isActive);
// //this is clean and good use for an arroe function

// //------------------------------------------//

// // Array.map Method

// const colors = ["red", "green", "blue"];
// const items = colors.map(color => `<li>${color}</li>`); // this is going to generate a new array

// //-----------------------------------------//

// // Object Destructuring

// const address = {
//   street: "",
//   city: "",
//   country: ""
// };
// // street, city, and country are all properties

// const street = address.street;
// const city = address.city;
// const country = address.country;

// // this line of code is a cleaner and easier way to write the 3 lines of code above. The line below is the same as the 3 above
// const { street, city, country } = address;

// //-------------------------------------------//

// // Spread Operator

// const first = [1, 2, 3];
// const second = [4, 5, 6];

// const combined = first.concat(second); // this si the old way to combine the 2 arrays together

// const combined = [...first, ...second]; // the '...' is referring to the spread operator. This is also nice because you are able to add in more elements in the middle or throughout it in a cleaner way

// // this is cloning the first array
// const clone = [...first];

// // Combining 2 objects
// const first = { name: "Teagan" };
// const second = { job: "destroyer" };

// const combined = { ...first, ...second }; // here you can also add in more properties

// //-----------------------------------------//

// // Classes

// // this makes finding bugs a lot easier to find and fix in just one object instead of all the ones that you may create
// // so if you want to make more 'person' objects you done have serveral blocks of code, it can be managed in one place
// class Person {
//   constructor(name) {
//     this.name = name;
//   }
//   walk() {
//     console.log("walk");
//   }
// }

// const person = new Person("Teagan");

const teacher = new Teacher("Teagan", "CS");
teacher.teach();
