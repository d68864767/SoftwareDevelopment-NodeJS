```javascript
// algorithmicThinking.js

// This file is for demonstrating algorithmic thinking in JavaScript.

// Algorithm 1: Fibonacci sequence
function fibonacci(n) {
    if (n <= 1) return n;
    else return fibonacci(n - 1) + fibonacci(n - 2);
}

// Algorithm 2: Greatest common divisor
function gcd(a, b) {
    if (!b) return a;
    return gcd(b, a % b);
}

// Algorithm 3: Bubble sort
function bubbleSort(arr) {
    let len = arr.length;
    for (let i = len-1; i >= 0; i--) {
        for(let j = 1; j <= i; j++) {
            if(arr[j-1] > arr[j]) {
                let temp = arr[j-1];
                arr[j-1] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
}

module.exports = { fibonacci, gcd, bubbleSort };
```
