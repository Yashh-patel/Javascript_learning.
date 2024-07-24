
// Closure Example in JavaScript

// Function that returns another function (closure)
function outerFunction(outerVariable) {
    return function innerFunction(innerVariable) {
        console.log('Outer Variable: ' + outerVariable);
        console.log('Inner Variable: ' + innerVariable);
    }
}

// Creating a closure
const newFunction = outerFunction('outside');

// Executing the closure with a new variable
newFunction('inside');

/*
Output:
Outer Variable: outside
Inner Variable: inside
*/

// Another example of a closure
function createCounter() {
    let count = 0;
    return function() {
        count += 1;
        return count;
    };
}

// Creating a counter closure
const counter = createCounter();

console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter()); // 3

/*
Output:
1
2
3
*/
