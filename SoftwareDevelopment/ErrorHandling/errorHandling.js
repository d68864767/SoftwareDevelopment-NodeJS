```javascript
// errorHandling.js

// This file is for demonstrating error handling in JavaScript.

// A simple function that throws an error
function throwError() {
    throw new Error('This is a custom error');
}

// A function that catches an error and logs it
function catchAndLogError() {
    try {
        throwError();
    } catch (error) {
        console.error(`Caught an error: ${error.message}`);
    }
}

// A function that catches an error and rethrows it
function catchAndRethrowError() {
    try {
        throwError();
    } catch (error) {
        console.error(`Caught an error: ${error.message}`);
        throw error;
    }
}

// A function that catches an error and returns a default value
function catchAndReturnDefault() {
    try {
        throwError();
    } catch (error) {
        console.error(`Caught an error: ${error.message}`);
        return 'default value';
    }
}

module.exports = {
    throwError,
    catchAndLogError,
    catchAndRethrowError,
    catchAndReturnDefault
};
```
