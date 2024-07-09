
// call Method
// The `call` method allows you to call a function with a specified `this` value and arguments provided individually.

// Syntax
// function.call(thisArg, arg1, arg2, ...)

// Example
function greet(greeting, punctuation) {
  console.log(greeting + ', ' + this.name + punctuation);
}

const person = { name: 'Alice' };

greet.call(person, 'Hello', '!'); // Logs 'Hello, Alice!'

// bind Method
// The `bind` method creates a new function that, when called, has its `this` keyword set to the provided value. It can also set initial arguments.

// Syntax
// function.bind(thisArg, arg1, arg2, ...)

// Example
function greet(greeting, punctuation) {
  console.log(greeting + ', ' + this.name + punctuation);
}

const person = { name: 'Alice' };

const boundGreet = greet.bind(person, 'Hello');
boundGreet('!'); // Logs 'Hello, Alice!'

// call vs bind
// `call` immediately invokes the function with the specified `this` value and arguments.
// `bind` returns a new function with the specified `this` value and initial arguments, which can be called later.

// Combined Example
function introduce(role) {
  console.log('I am ' + this.name + ', and I am a ' + role + '.');
}

const person = { name: 'Alice' };

// Using call
introduce.call(person, 'developer'); // Logs 'I am Alice, and I am a developer.'

// Using bind
const boundIntroduce = introduce.bind(person);
boundIntroduce('designer'); // Logs 'I am Alice, and I am a designer.'
