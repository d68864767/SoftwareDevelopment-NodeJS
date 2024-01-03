```javascript
// development.test.js

// This file is for testing the software development lifecycle demonstration in JavaScript.
// We will use the Mocha testing framework and the Chai assertion library for this demonstration.

const { expect } = require('chai');
const { softwareDevelopmentLifecycle } = require('./development');

// Here we describe a test suite for the softwareDevelopmentLifecycle function.
describe('softwareDevelopmentLifecycle', () => {
    it('should be a function', () => {
        expect(softwareDevelopmentLifecycle).to.be.a('function');
    });

    it('should console log the stages of the software development lifecycle', () => {
        const consoleSpy = sinon.spy(console, 'log');
        softwareDevelopmentLifecycle();
        expect(consoleSpy.callCount).to.equal(7);
        expect(consoleSpy.getCall(0).args[0]).to.equal('1. Requirement collection and analysis');
        expect(consoleSpy.getCall(1).args[0]).to.equal('2. Feasibility study');
        expect(consoleSpy.getCall(2).args[0]).to.equal('3. Design');
        expect(consoleSpy.getCall(3).args[0]).to.equal('4. Coding');
        expect(consoleSpy.getCall(4).args[0]).to.equal('5. Testing');
        expect(consoleSpy.getCall(5).args[0]).to.equal('6. Installation/Deployment');
        expect(consoleSpy.getCall(6).args[0]).to.equal('7. Maintenance');
        consoleSpy.restore();
    });
});
```
