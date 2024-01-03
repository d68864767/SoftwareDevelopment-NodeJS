```javascript
// scrumFramework.test.js

// This file is for testing the Scrum framework in Agile methodology.

// We will use the Mocha testing framework and the Chai assertion library for this testing.

const { expect } = require('chai');
const { scrumFramework } = require('./scrumFramework');

describe('Scrum Framework', function() {
    it('should correctly log the key components of the Scrum framework', function() {
        const consoleLog = console.log;
        let output = '';
        console.log = (s) => { output += s + '\n'; };
        scrumFramework();
        console.log = consoleLog;

        const expectedOutput = 
            '1. Roles: Product Owner, Scrum Master, Development Team\n' +
            '2. Events: Sprint, Sprint Planning, Daily Scrum, Sprint Review, Sprint Retrospective\n' +
            '3. Artifacts: Product Backlog, Sprint Backlog, Increment\n';

        expect(output).to.equal(expectedOutput);
    });
});
```
