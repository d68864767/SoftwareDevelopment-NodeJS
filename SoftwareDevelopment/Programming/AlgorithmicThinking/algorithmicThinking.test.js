```javascript
// algorithmicThinking.test.js

const { fibonacci, gcd, bubbleSort } = require('./algorithmicThinking');

// Test cases for the fibonacci function
test('Fibonacci of 0 should be 0', () => {
    expect(fibonacci(0)).toBe(0);
});

test('Fibonacci of 1 should be 1', () => {
    expect(fibonacci(1)).toBe(1);
});

test('Fibonacci of 10 should be 55', () => {
    expect(fibonacci(10)).toBe(55);
});

// Test cases for the gcd function
test('GCD of 48 and 18 should be 6', () => {
    expect(gcd(48, 18)).toBe(6);
});

test('GCD of 101 and 103 should be 1', () => {
    expect(gcd(101, 103)).toBe(1);
});

// Test cases for the bubbleSort function
test('Bubble sort of [5, 3, 8, 4, 6] should be [3, 4, 5, 6, 8]', () => {
    expect(bubbleSort([5, 3, 8, 4, 6])).toEqual([3, 4, 5, 6, 8]);
});

test('Bubble sort of [1, 2, 3, 4, 5] should be [1, 2, 3, 4, 5]', () => {
    expect(bubbleSort([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
});
```
