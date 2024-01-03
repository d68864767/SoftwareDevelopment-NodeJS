```javascript
// challenges.test.js

const { reverseString, factorialize, palindrome, findLongestWord, titleCase } = require('./challenges');

// Test cases for reverseString function
test('reverseString function exists', () => {
    expect(reverseString).toBeDefined();
});

test('String reverse', () => {
    expect(reverseString('hello')).toEqual('olleh');
});

// Test cases for factorialize function
test('factorialize function exists', () => {
    expect(factorialize).toBeDefined();
});

test('Factorialize a number', () => {
    expect(factorialize(5)).toEqual(120);
});

// Test cases for palindrome function
test('palindrome function exists', () => {
    expect(palindrome).toBeDefined();
});

test('Check for Palindromes', () => {
    expect(palindrome('racecar')).toBeTruthy();
});

// Test cases for findLongestWord function
test('findLongestWord function exists', () => {
    expect(findLongestWord).toBeDefined();
});

test('Find the Longest Word in a String', () => {
    expect(findLongestWord('The quick brown fox jumped over the lazy dog')).toEqual('jumped');
});

// Test cases for titleCase function
test('titleCase function exists', () => {
    expect(titleCase).toBeDefined();
});

test('Title Case a Sentence', () => {
    expect(titleCase('I\'m a little tea pot')).toEqual('I\'m A Little Tea Pot');
});
```
