```javascript
// quickSort.test.js

// This file is for testing the Quick Sort algorithm implemented in quickSort.js.
// We will use the Mocha testing framework and the Chai assertion library for this demonstration.

const { expect } = require('chai');
const quickSort = require('./quickSort');

describe('Quick Sort', function() {
    it('should sort an array of numbers in ascending order', function() {
        let arr = [5, 3, 8, 4, 2, 7, 1, 10, 6, 9];
        let sortedArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        expect(quickSort(arr)).to.deep.equal(sortedArr);
    });

    it('should return an empty array when given an empty array', function() {
        let arr = [];
        expect(quickSort(arr)).to.deep.equal([]);
    });

    it('should handle an array of size 1', function() {
        let arr = [1];
        expect(quickSort(arr)).to.deep.equal([1]);
    });

    it('should handle an array of size 2', function() {
        let arr = [2, 1];
        let sortedArr = [1, 2];
        expect(quickSort(arr)).to.deep.equal(sortedArr);
    });

    it('should handle an array with duplicate elements', function() {
        let arr = [5, 3, 8, 4, 2, 7, 1, 10, 6, 9, 5, 3, 8, 4, 2, 7, 1, 10, 6, 9];
        let sortedArr = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10];
        expect(quickSort(arr)).to.deep.equal(sortedArr);
    });
});
```
