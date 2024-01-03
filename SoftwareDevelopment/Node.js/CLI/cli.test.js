```javascript
const { exec } = require('child_process');

describe('CLI Application', () => {
    it('should print arguments correctly', done => {
        exec('node cli.js arg1 arg2', (error, stdout, stderr) => {
            if (error) {
                console.log(`error: ${error.message}`);
                return;
            }
            if (stderr) {
                console.log(`stderr: ${stderr}`);
                return;
            }
            expect(stdout).toBe('arg1 arg2');
            done();
        });
    });
});
```
