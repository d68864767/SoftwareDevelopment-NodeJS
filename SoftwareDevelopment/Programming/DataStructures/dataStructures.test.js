```javascript
// dataStructures.test.js

// This file is for testing the data structures implemented in dataStructures.js.
// We will use the Mocha testing framework and the Chai assertion library for this demonstration.

const { expect } = require('chai');
const { Stack, Queue } = require('./dataStructures');

// Test suite for the Stack data structure
describe('Stack', () => {
    let stack;

    // Run before each test case
    beforeEach(() => {
        stack = new Stack();
    });

    it('should push an element to the stack', () => {
        stack.push(1);
        expect(stack.peek()).to.equal(1);
    });

    it('should pop an element from the stack', () => {
        stack.push(1);
        stack.push(2);
        expect(stack.pop()).to.equal(2);
    });

    it('should return Underflow when popping from an empty stack', () => {
        expect(stack.pop()).to.equal('Underflow');
    });

    it('should return true when the stack is empty', () => {
        expect(stack.isEmpty()).to.be.true;
    });

    it('should return false when the stack is not empty', () => {
        stack.push(1);
        expect(stack.isEmpty()).to.be.false;
    });
});

// Test suite for the Queue data structure
describe('Queue', () => {
    let queue;

    // Run before each test case
    beforeEach(() => {
        queue = new Queue();
    });

    it('should enqueue an element to the queue', () => {
        queue.enqueue(1);
        expect(queue.front()).to.equal(1);
    });

    it('should dequeue an element from the queue', () => {
        queue.enqueue(1);
        queue.enqueue(2);
        expect(queue.dequeue()).to.equal(1);
    });

    it('should return Underflow when dequeuing from an empty queue', () => {
        expect(queue.dequeue()).to.equal('Underflow');
    });

    it('should return true when the queue is empty', () => {
        expect(queue.isEmpty()).to.be.true;
    });

    it('should return false when the queue is not empty', () => {
        queue.enqueue(1);
        expect(queue.isEmpty()).to.be.false;
    });
});
```
