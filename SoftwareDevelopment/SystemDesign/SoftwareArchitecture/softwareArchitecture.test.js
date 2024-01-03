```javascript
// softwareArchitecture.test.js

// This file is for testing the software architecture principles demonstrated in softwareArchitecture.js.
// We will be using Jest for our testing framework.

const { Module } = require('./softwareArchitecture');

describe('Module Pattern', () => {
    test('Public Variable', () => {
        expect(Module.publicVariable).toBe('I am public');
    });

    test('Public Function', () => {
        console.log = jest.fn();

        Module.publicFunction();

        expect(console.log).toHaveBeenCalledWith('This is a public function');
        expect(console.log).toHaveBeenCalledWith('I am private');
        expect(console.log).toHaveBeenCalledWith('This is a private function');
    });

    test('Private Variable and Function', () => {
        expect(Module.privateVariable).toBeUndefined();
        expect(() => Module.privateFunction()).toThrow();
    });
});
```
