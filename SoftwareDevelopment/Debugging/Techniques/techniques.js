```javascript
// techniques.js

// This file is for demonstrating various debugging techniques in JavaScript.

// 1. Console Logging
function consoleLogging() {
    let variable = 'Hello, World!';
    console.log(variable);
}

// 2. Using Debugger
function usingDebugger() {
    for (let i = 0; i < 5; i++) {
        debugger;
        console.log(i);
    }
}

// 3. Try Catch Blocks
function tryCatchBlocks() {
    try {
        let variable = undefinedVariable;
    } catch (error) {
        console.error('An error occurred: ', error);
    }
}

// 4. Using Breakpoints
// Breakpoints can be used in browser's developer tools.

// 5. Performance Profiling
// Performance profiling can be done using browser's developer tools.

module.exports = {
    consoleLogging,
    usingDebugger,
    tryCatchBlocks
};
```
