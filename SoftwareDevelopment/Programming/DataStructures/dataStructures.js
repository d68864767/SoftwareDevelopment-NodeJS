```javascript
// dataStructures.js

// This file is for demonstrating data structures in JavaScript.

// Data Structure 1: Stack
class Stack {
    constructor() {
        this.items = [];
    }

    push(element) {
        this.items.push(element);
    }

    pop() {
        if (this.items.length == 0) return "Underflow";
        return this.items.pop();
    }

    peek() {
        return this.items[this.items.length - 1];
    }

    isEmpty() {
        return this.items.length == 0;
    }
}

// Data Structure 2: Queue
class Queue {
    constructor() {
        this.items = [];
    }

    enqueue(element) {
        this.items.push(element);
    }

    dequeue() {
        if(this.isEmpty()) return "Underflow";
        return this.items.shift();
    }

    front() {
        if(this.isEmpty()) return "No elements in Queue";
        return this.items[0];
    }

    isEmpty() {
        return this.items.length == 0;
    }
}

// Data Structure 3: Linked List
class Node {
    constructor(element) {
        this.element = element;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    add(element) {
        var node = new Node(element);
        var current;

        if (this.head == null) this.head = node;
        else {
            current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = node;
        }
        this.size++;
    }

    // other methods will go here..
}

module.exports = { Stack, Queue, LinkedList };
```
