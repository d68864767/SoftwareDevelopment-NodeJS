```javascript
// challenges.js

// This file is for demonstrating some common programming challenges.

// Challenge 1: Reverse a string
function reverseString(str) {
    return str.split('').reverse().join('');
}

// Challenge 2: Factorialize a number
function factorialize(num) {
    if (num < 0) return -1;
    else if (num == 0) return 1;
    else {
        return (num * factorialize(num - 1));
    }
}

// Challenge 3: Check for Palindromes
function palindrome(str) {
    var re = /[\W_]/g;
    var lowRegStr = str.toLowerCase().replace(re, '');
    var reverseStr = lowRegStr.split('').reverse().join(''); 
    return reverseStr === lowRegStr;
}

// Challenge 4: Find the Longest Word in a String
function findLongestWord(str) {
    return str.split(' ')
        .reduce(function(longest, currentWord) {
            return currentWord.length > longest.length ? currentWord : longest;
        }, "");
}

// Challenge 5: Title Case a Sentence
function titleCase(str) {
    return str.toLowerCase().split(' ').map(function(word) {
        return word.replace(word[0], word[0].toUpperCase());
    }).join(' ');
}

module.exports = {
    reverseString,
    factorialize,
    palindrome,
    findLongestWord,
    titleCase
};
```
