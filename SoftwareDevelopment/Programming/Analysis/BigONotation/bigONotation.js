```javascript
// bigONotation.js

// This file is for demonstrating Big O notation in JavaScript.

// Function 1: Constant time complexity O(1)
function constantTimeComplexity(arr) {
    return arr[0];
}

// Function 2: Linear time complexity O(n)
function linearTimeComplexity(arr) {
    for(let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}

// Function 3: Quadratic time complexity O(n^2)
function quadraticTimeComplexity(arr) {
    for(let i = 0; i < arr.length; i++) {
        for(let j = 0; j < arr.length; j++) {
            console.log(arr[i], arr[j]);
        }
    }
}

// Function 4: Logarithmic time complexity O(log n)
function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;
    while (left <= right) {
        const mid = left + Math.floor((right - left) / 2);
        if (arr[mid] === target) {
            return mid;
        }
        if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return -1;
}

module.exports = { constantTimeComplexity, linearTimeComplexity, quadraticTimeComplexity, binarySearch };
```
