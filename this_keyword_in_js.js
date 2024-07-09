
// Global Context
// In the global execution context (outside of any function), `this` refers to the global object.
console.log(this); // In a browser, this will log the window object.

// Function Context
// Inside a regular function, `this` refers to the global object when the function is not called as a method of an object.
function myFunction() {
  console.log(this); // In non-strict mode, this will log the window object.
}
myFunction();

// Method Context
// When a function is called as a method of an object, `this` refers to the object that the method is called on.
const person = {
  name: 'Alice',
  greet: function() {
    console.log(this); // `this` refers to the `person` object.
  }
};
person.greet();

// Constructor Context
// When a function is used as a constructor (called with the `new` keyword), `this` refers to the newly created instance.
function Person(name) {
  this.name = name;
}

const alice = new Person('Alice');
console.log(alice.name); // Logs 'Alice'

// Arrow Functions
// Arrow functions do not have their own `this` context. Instead, they inherit `this` from the parent scope at the time they are defined.
const anotherPerson = {
  name: 'Bob',
  greet: function() {
    const innerFunction = () => {
      console.log(this); // `this` refers to the `anotherPerson` object because arrow functions inherit `this`.
    };
    innerFunction();
  }
};
anotherPerson.greet();

// Event Handlers
// In event handlers, `this` refers to the element that received the event.
document.getElementById('myButton').addEventListener('click', function() {
  console.log(this); // `this` refers to the button element.
});

// Changing `this` with `call`, `apply`, and `bind`
// You can explicitly set the value of `this` using `call`, `apply`, or `bind`.
function greet() {
  console.log(this.name);
}

const individual = { name: 'Charlie' };

greet.call(individual); // Logs 'Charlie'
greet.apply(individual); // Logs 'Charlie'

const boundGreet = greet.bind(individual);
boundGreet(); // Logs 'Charlie'
