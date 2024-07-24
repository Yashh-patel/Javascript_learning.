
// Error Handling Example in JavaScript

function divide(a, b) {
    if (b === 0) {
        throw new Error('Division by zero');
    }
    return a / b;
}

try {
    console.log(divide(4, 2)); // Outputs: 2
    console.log(divide(4, 0)); // Throws an error
} catch (error) {
    console.error('An error occurred: ' + error.message);
} finally {
    console.log('Execution completed.');
}

/*
Output:
2
An error occurred: Division by zero
Execution completed.
*/

// Custom Error Example
class CustomError extends Error {
    constructor(message) {
        super(message);
        this.name = 'CustomError';
    }
}

function doSomething(value) {
    if (value < 0) {
        throw new CustomError('Negative value not allowed');
    }
    return value;
}

try {
    console.log(doSomething(10)); // Outputs: 10
    console.log(doSomething(-1)); // Throws CustomError
} catch (error) {
    if (error instanceof CustomError) {
        console.error('Custom error occurred: ' + error.message);
    } else {
        console.error('An unexpected error occurred: ' + error.message);
    }
} finally {
    console.log('Execution completed.');
}

/*
Output:
10
Custom error occurred: Negative value not allowed
Execution completed.
*/
