```javascript
// timeComplexity.js

// This file is for demonstrating time complexity analysis in JavaScript.

// Time complexity of various common operations

// Constant time: O(1)
function constantTimeOperation(n) {
    return n * n;
}

// Logarithmic time: O(log n)
function logarithmicTimeOperation(n) {
    let result = 0;
    while (n > 1) {
        n /= 2;
        result += n;
    }
    return result;
}

// Linear time: O(n)
function linearTimeOperation(n) {
    let result = 0;
    for (let i = 0; i < n; i++) {
        result += i;
    }
    return result;
}

// Linear Logarithmic time: O(n log n)
function linearLogarithmicTimeOperation(n) {
    let result = 0;
    for (let i = 0; i < n; i++) {
        let j = n;
        while (j > 1) {
            j /= 2;
            result += j;
        }
    }
    return result;
}

// Quadratic time: O(n^2)
function quadraticTimeOperation(n) {
    let result = 0;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            result += i + j;
        }
    }
    return result;
}

// Cubic time: O(n^3)
function cubicTimeOperation(n) {
    let result = 0;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            for (let k = 0; k < n; k++) {
                result += i + j + k;
            }
        }
    }
    return result;
}

// Exponential time: O(2^n)
function exponentialTimeOperation(n) {
    if (n === 0) {
        return 1;
    } else {
        return 2 * exponentialTimeOperation(n - 1);
    }
}
```
