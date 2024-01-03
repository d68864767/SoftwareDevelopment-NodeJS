```javascript
// bigONotation.test.js

// This file is for testing the Big O notation analysis demonstrated in bigONotation.js.
// We will use the Mocha testing framework and the Chai assertion library for this demonstration.

const chai = require('chai');
const expect = chai.expect;

const {
    constantTimeComplexity,
    linearTimeComplexity,
    quadraticTimeComplexity
} = require('./bigONotation');

describe('Big O Notation', function() {
    describe('constantTimeComplexity', function() {
        it('should return the first element of the array', function() {
            const arr = [1, 2, 3, 4, 5];
            const result = constantTimeComplexity(arr);
            expect(result).to.equal(1);
        });
    });

    describe('linearTimeComplexity', function() {
        it('should print each element of the array', function() {
            const arr = [1, 2, 3, 4, 5];
            const consoleSpy = sinon.spy(console, 'log');
            linearTimeComplexity(arr);
            expect(consoleSpy.callCount).to.equal(arr.length);
            consoleSpy.restore();
        });
    });

    describe('quadraticTimeComplexity', function() {
        it('should print pairs of each element of the array', function() {
            const arr = [1, 2, 3];
            const consoleSpy = sinon.spy(console, 'log');
            quadraticTimeComplexity(arr);
            expect(consoleSpy.callCount).to.equal(arr.length * arr.length);
            consoleSpy.restore();
        });
    });
});
```
